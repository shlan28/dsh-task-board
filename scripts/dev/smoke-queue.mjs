#!/usr/bin/env node
// 本地冒烟：空间队列按顺序派发待办卡，成功的自动验收进已完成，失败的留在待验收并继续下一张。
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const home = await mkdtemp(join(tmpdir(), 'dsh-task-board-queue-smoke-'))
process.env.DSH_HOME = home
process.env.MOCK_DELAY_MS = '10'
process.env.TASK_BOARD_TICK_MS = '60000'
process.env.TASK_BOARD_QUEUE_TICK_MS = '1000'

const prompts = []
const sessions = new Map()
let sessionSeq = 0
let sessionHandler = null

function emit(sessionId, event) {
  sessionHandler?.({ id: sessionId }, event)
}

const controller = {
  create: async () => ({ sessionId: `sess-${++sessionSeq}` }),
  prompt: async ({ sessionId, content }) => {
    const text = content?.[0]?.text || ''
    prompts.push({ sessionId, text })
    sessions.set(sessionId, text)
    setTimeout(() => emit(sessionId, { type: 'turn/start', data: {} }), 10)
    setTimeout(() => {
      emit(
        sessionId,
        text.includes('任务：second')
          ? { type: 'turn/end', data: { reason: { kind: 'error', error: { message: 'mock failure' } } } }
          : { type: 'turn/end', data: { reason: { kind: 'completed' } } },
      )
    }, 30)
  },
  cancel: () => {},
}

const disposers = []
const ctx = {
  logger: { warn: (...args) => console.error('[log]', ...args.map(String)) },
  get(name) {
    if (name === 'connection') return { requestRejection: () => 0 }
    if (name === 'sessionController') return controller
    if (name === 'workingDirectory') return { defaultDirectory: home, get: () => home }
    if (name === 'workspaceRegistry') return { list: () => [] }
    if (name === 'sessions') return { get: () => null }
    if (name === 'schedule') return null
    return null
  },
  effect(fn) {
    const dispose = fn?.()
    if (typeof dispose === 'function') disposers.push(dispose)
  },
  on(name, fn) {
    if (name === 'session/event') sessionHandler = fn
    return () => {}
  },
  webServer: { register: spec => ((requestHandler = spec.handler), () => {}) },
  systemPrompt: { section: () => () => {} },
}

let requestHandler = null
const { apply } = await import('../../src/host.js')
apply(ctx)

function call(method, path, body) {
  return new Promise((resolve, reject) => {
    const payload = body === undefined ? '' : JSON.stringify(body)
    const req = {
      url: path,
      method,
      headers: {},
      async *[Symbol.asyncIterator]() {
        if (payload) yield Buffer.from(payload)
      },
    }
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
    Promise.resolve(requestHandler(req, res)).catch(reject)
  })
}

const state = () => call('GET', '/task-board/state')
const assert = (condition, message) => {
  if (!condition) throw new Error(`断言失败：${message}`)
  console.log('✔', message)
}

try {
  const added = []
  for (const title of ['first', 'second', 'third']) {
    const result = await call('POST', '/task-board/op', { op: 'add', title, column: 'todo' })
    if (!result.ok) throw new Error(`建卡失败：${result.error}`)
    added.push(result.task)
  }

  const started = await call('POST', '/task-board/op', { op: 'startQueue', spaceId: 'default' })
  assert(started.ok === true, '队列已启动')
  assert(started.count === 3, '队列包含 3 张待办卡')

  const deadline = Date.now() + 15_000
  let current = null
  while (Date.now() < deadline) {
    current = await state()
    const queue = current.spaces.find(space => space.id === 'default')?.queue
    if (queue && !queue.active) break
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  const byId = Object.fromEntries(current.tasks.map(task => [task.id, task]))
  const [first, second, third] = added.map(task => byId[task.id])
  assert(first?.column === 'done', '第一张成功卡自动进入已完成')
  assert(second?.column === 'review', '失败的卡留在待验收')
  assert(String(second?.error).includes('mock failure'), '失败原因已记录在卡片上')
  assert(third?.column === 'done', '失败后队列继续执行下一张')
  assert(prompts.length === 3, `每张卡只派发一次（实际 ${prompts.length} 次）`)
  assert(
    prompts[0]?.text.includes('任务：first') && prompts[1]?.text.includes('任务：second') && prompts[2]?.text.includes('任务：third'),
    '派发顺序与待办顺序一致',
  )

  const queue = current.spaces.find(space => space.id === 'default')?.queue
  assert(queue?.active === false, '队列已结束')
  assert(queue?.error.includes('second'), '队列记录了失败卡片')
  assert(current.tasks.every(task => task.column === 'done' || task.column === 'review'), '没有卡遗留在进行中')
  console.log(' queue smoke OK')
} finally {
  for (const dispose of disposers) {
    try {
      dispose()
    } catch {
      // 忽略清理错误
    }
  }
  await new Promise(resolve => setTimeout(resolve, 100))
  await rm(home, { recursive: true, force: true })
}
