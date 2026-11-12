#!/usr/bin/env node
// 本地冒烟：插件重启后补跑一次到期的 Codex 自动化（不起真实 Codex，用 mock ACP）。
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = fileURLToPath(new URL('.', import.meta.url))
const mock = join(here, 'mock-acp.mjs')
const home = await mkdtemp(join(tmpdir(), 'dsh-task-board-auto-'))
process.env.DSH_HOME = home
process.env.MOCK_DELAY_MS = '30'
process.env.TASK_BOARD_TICK_MS = '300'

const taskId = 't_auto'
const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=HOURLY'
const now = Date.now()
await mkdir(join(home, 'task-board'), { recursive: true })
await writeFile(
  join(home, 'task-board', 'agent.json'),
  JSON.stringify({ version: 1, adapterCommand: `node ${mock}`, permissionMode: 'workspace-write', autoApprove: true }),
)
await writeFile(
  join(home, 'task-board', 'board.json'),
  JSON.stringify({
    version: 3,
    spaces: [{ id: 'default', name: '', order: 0, createdAt: 1 }],
    activeSpaceId: 'default',
    tasks: [
      {
        id: taskId,
        title: 'Automation smoke',
        executor: 'codex',
        column: 'todo',
        spaceId: 'default',
        createdAt: now,
        updatedAt: now,
        automation: {
          engine: 'board',
          scheduleId: '',
          rrule,
          frequency: 'hourly',
          time: '09:00',
          weekdays: [],
          timeZone: 'Asia/Shanghai',
          active: true,
          nextAt: now - 5_000,
          lastFiredAt: null,
          targetPath: '',
          reservedSessionId: null,
          error: '',
        },
      },
    ],
  }),
)

let handler = null
const disposers = []
const ctx = {
  logger: { warn: (...args) => console.error('[log]', ...args.map(String)) },
  get(name) {
    if (name === 'connection') return { requestRejection: () => 0 }
    if (name === 'workingDirectory') return { defaultDirectory: home, get: () => home }
    if (name === 'workspaceRegistry') return { list: () => [] }
    if (name === 'sessions') return { get: () => null }
    if (name === 'schedule') return { catalog: async () => [] }
    return null
  },
  effect(fn) {
    const dispose = fn?.()
    if (typeof dispose === 'function') disposers.push(dispose)
  },
  on: () => () => {},
  webServer: { register: spec => ((handler = spec.handler), () => {}) },
  systemPrompt: { section: () => () => {} },
}

const { apply } = await import('../../src/host.js')
apply(ctx)

const state = () =>
  new Promise((resolve, reject) => {
    const req = { url: '/task-board/state', method: 'GET', headers: {}, async *[Symbol.asyncIterator]() {} }
    const res = {
      statusCode: 200,
      setHeader() {},
      end(text) {
        try {
          resolve(JSON.parse(text))
        } catch (error) {
          reject(error)
        }
      },
    }
    Promise.resolve(handler(req, res)).catch(reject)
  })

const assert = (condition, message) => {
  if (!condition) throw new Error(`断言失败：${message}`)
  console.log('✔', message)
}

try {
  const started = Date.now()
  let task = null
  while (Date.now() - started < 20_000) {
    const current = await state()
    task = current.tasks.find(entry => entry.id === taskId)
    if (task?.column === 'review') break
    await new Promise(resolve => setTimeout(resolve, 200))
  }
  assert(task?.column === 'review', '到期的自动化被触发并跑完')
  assert(String(task?.result).includes('MOCK RESULT'), '自动化结果已回收')
  assert(task?.automation?.lastFiredAt > 0, '记录了 lastFiredAt')
  assert(task?.automation?.nextAt > Date.now(), `下一次执行时间已推进（${new Date(task.automation.nextAt).toISOString()}）`)
  assert(task?.automation?.engine === 'board', '仍是插件内调度')
  console.log(' automation smoke OK')
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
