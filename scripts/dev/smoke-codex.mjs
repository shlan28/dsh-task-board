#!/usr/bin/env node
// 本地冒烟：用假 ACP agent 跑通「Codex 执行者 + 双引擎自动化」，不依赖网络/真实 Codex。
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = fileURLToPath(new URL('.', import.meta.url))
const mock = join(here, 'mock-acp.mjs')
const home = await mkdtemp(join(tmpdir(), 'dsh-task-board-smoke-'))
process.env.DSH_HOME = home
process.env.MOCK_DELAY_MS = '300'

const schedules = new Map()
let scheduleSeq = 0
const fakeSchedule = {
  create: async ({ title, prompt, timing, target }) => {
    const id = `sch${++scheduleSeq}`
    const entry = {
      id,
      title,
      prompt,
      timing,
      target: { kind: 'new_once', sessionId: `reserved-${scheduleSeq}` },
      status: 'active',
      scheduledAt: new Date(Date.now() + 3_600_000).toISOString(),
    }
    schedules.set(id, entry)
    return entry
  },
  edit: async ({ id, action, patch }) => {
    if (action === 'delete') {
      schedules.delete(id)
      return { id, deleted: true }
    }
    const entry = schedules.get(id)
    if (!entry) return { code: 'schedule_not_found' }
    Object.assign(entry, patch || {})
    return entry
  },
  catalog: async () => [...schedules.values()],
  run: async ({ id }) => ({ target: { sessionId: schedules.get(id)?.target?.sessionId || '' } }),
}

let tool = null
const toolsService = {
  register(spec) {
    tool = spec
    return () => {}
  },
}

const ctx = {
  logger: { warn: (...args) => console.error('[log]', ...args.map(String)) },
  get(name) {
    if (name === 'schedule') return fakeSchedule
    if (name === 'sessionController') return { create: async () => ({ sessionId: 'dsh-session-1' }), prompt: async () => {}, cancel: () => {} }
    if (name === 'workspaceRegistry') return { list: () => [] }
    if (name === 'workingDirectory') return { defaultDirectory: home, get: () => home }
    if (name === 'connection') return { requestRejection: () => 0 }
    if (name === 'sessions') return { get: () => null }
    if (name === 'tools') return toolsService
    return null
  },
  effect(fn) {
    const dispose = fn?.()
    if (typeof dispose === 'function') disposers.push(dispose)
  },
  on: () => () => {},
  webServer: {
    register(spec) {
      handler = spec.handler
      return () => {}
    },
  },
  tools: toolsService,
  systemPrompt: { section: () => () => {} },
}
const disposers = []
let handler = null

const { apply } = await import('../../src/host.js')
apply(ctx)

function call(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const req = {
      url: path,
      method,
      headers: {},
      async *[Symbol.asyncIterator]() {
        if (body !== null) yield Buffer.from(JSON.stringify(body))
      },
    }
    const res = {
      statusCode: 200,
      setHeader() {},
      end(text) {
        try {
          resolve({ status: this.statusCode, body: JSON.parse(text) })
        } catch {
          resolve({ status: this.statusCode, body: text })
        }
      },
    }
    Promise.resolve(handler(req, res)).catch(reject)
  })
}

const op = async (payload) => {
  const result = await call('/task-board/op', 'POST', payload)
  if (result.status !== 200 || result.body?.ok === false) {
    throw new Error(`${payload.op} 失败：${result.body?.error || result.status}`)
  }
  return result.body
}
const state = async () => (await call('/task-board/state')).body
const assert = (condition, message) => {
  if (!condition) throw new Error(`断言失败：${message}`)
  console.log('✔', message)
}
const waitFor = async (predicate, timeoutMs = 15_000) => {
  const started = Date.now()
  for (;;) {
    const current = await state()
    const value = predicate(current)
    if (value) return { state: current, value }
    if (Date.now() - started > timeoutMs) throw new Error('等待超时')
    await new Promise(resolve => setTimeout(resolve, 150))
  }
}

try {
  const saved = await op({ op: 'agentSave', config: { adapterCommand: `node ${mock}`, permissionMode: 'workspace-write', autoApprove: true } })
  assert(saved.agent.status.state === 'ready', `检测到本地 Codex（${saved.agent.status.codex?.version}）`)
  assert(saved.agent.config.adapterCommand.includes('mock-acp'), '适配器命令已保存')

  const added = await op({ op: 'add', title: 'Codex smoke', note: 'run it', executor: 'codex', spaceId: 'default' })
  assert(added.task.executor === 'codex', '新卡执行者是 codex')
  await op({ op: 'dispatch', id: added.task.id })
  const done = await waitFor(current => current.tasks.find(task => task.id === added.task.id && task.column === 'review'))
  const task = done.value
  assert(task.codex.sessionId === 'mock-session-1', 'ACP 会话 id 写回卡片')
  assert(task.steps >= 1, `工具步骤已累计（${task.steps}）`)
  assert(String(task.result).includes('MOCK RESULT'), '结果文本已回收')
  assert(task.progress === 100, '进度到 100')

  const auto = await op({ op: 'add', title: 'Codex auto', executor: 'codex', automation: { frequency: 'hourly', time: '09:00', timeZone: 'Asia/Shanghai' }, spaceId: 'default' })
  assert(auto.task.automation?.engine === 'board', 'Codex 卡自动化使用插件内调度')
  assert(auto.task.automation?.nextAt > Date.now(), '下一次执行时间已计算')
  assert(schedules.size === 0, '没有创建 DSH 定时任务')

  const toDsh = await op({ op: 'update', id: auto.task.id, executor: 'dsh' })
  assert(toDsh.task.automation?.engine === 'dsh' && toDsh.task.automation?.scheduleId, '切到 dsh 后迁移出 DSH 定时任务')
  assert(schedules.size === 1, 'DSH 定时任务已创建')

  const toCodex = await op({ op: 'update', id: auto.task.id, executor: 'codex' })
  assert(toCodex.task.automation?.engine === 'board' && !toCodex.task.automation?.scheduleId, '切回 codex 后回到插件内调度')
  assert(schedules.size === 0, 'DSH 定时任务已删除')

  const stopped = await op({ op: 'add', title: 'Codex stop', executor: 'codex', spaceId: 'default' })
  await op({ op: 'dispatch', id: stopped.task.id })
  await new Promise(resolve => setTimeout(resolve, 120))
  await op({ op: 'stop', id: stopped.task.id })
  const stoppedState = await waitFor(current => {
    const entry = current.tasks.find(item => item.id === stopped.task.id)
    return entry && entry.running === false ? entry : null
  })
  assert(stoppedState.value.column === 'todo' && stoppedState.value.phase === 'stopped', '停止后回到待办')

  const agent = await tool.execute({ action: 'agent' }, {})
  assert(agent.agent.status.state === 'ready', 'task_board 工具的 agent 动作可用')

  await op({ op: 'remove', id: added.task.id })
  await op({ op: 'remove', id: auto.task.id })
  await op({ op: 'remove', id: stopped.task.id })
  console.log(' smoke OK')
} finally {
  for (const dispose of disposers) {
    try {
      await dispose()
    } catch {
      // ignore
    }
  }
  await rm(home, { recursive: true, force: true })
}
