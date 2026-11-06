// 任务看板 host 半片：/task-board/* 接口、会话派发、进度折叠与 task_board 工具。
import { homedir } from 'node:os'
import { join } from 'node:path'
import { Board, COLUMNS } from './board.js'

const MAX_JSON = 1_000_000
const PANEL_PATH = '/task-board'

function dshHome() {
  return process.env.DSH_HOME || join(homedir(), '.dsh')
}

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}

async function readJson(req) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > MAX_JSON) throw Object.assign(new Error('请求内容太大'), { status: 413 })
    chunks.push(chunk)
  }
  if (!chunks.length) return {}
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    throw Object.assign(new Error('请求不是有效的 JSON'), { status: 400 })
  }
}

function rejectionOf(ctx, req) {
  const connection = ctx.get('connection')
  if (typeof connection?.requestRejection !== 'function') return 403
  return connection.requestRejection({ headers: req.headers })
}

const messageOf = error => {
  const message = error?.message ?? error
  return typeof message === 'string' && message ? message : '未知错误'
}

/** 派发到会话时给执行者的提示词。 */
export function buildPrompt(task) {
  const lines = [
    '【任务看板】你领到了一张任务卡，请立刻开始执行，不要只给建议。',
    '',
    `任务：${task.title}`,
    `说明：${task.note || '（无）'}`,
    `标签：${task.tag || '（无）'}`,
  ]
  lines.push(
    '',
    '要求：',
    '1. 直接动手：需要文件、命令或检索时就用相应工具。',
    '2. 只处理这张卡的范围，不要顺手改动无关内容。',
    '3. 完成后用 3-5 句话总结：做了什么、产出在哪里、验证结果、遗留风险。',
    '4. 不要调用 task_board 修改这张卡：进度和最终结论会由看板自动记录。',
    '5. 如果被阻塞，说明阻塞原因和已经尝试过的办法。',
  )
  return lines.join('\n')
}

export const name = 'task-board'

export const inject = ['webServer']

export function apply(ctx) {
  const board = new Board(join(dshHome(), 'task-board'), { log: (...args) => ctx.logger?.warn?.(...args) })
  const ready = board.load()
  const inflight = new Set()

  const sessionController = () => ctx.get('sessionController')

  async function openSession() {
    const ctrl = sessionController()
    if (!ctrl) throw new Error('当前环境没有会话服务，无法派发任务')
    const cwd = ctx.get('workingDirectory')?.defaultDirectory || process.cwd()
    let workspaces = []
    try {
      workspaces = ctx.get('workspaceRegistry')?.list?.() ?? []
    } catch {
      workspaces = []
    }
    const workspace = workspaces.find(row => row?.path === cwd) ?? workspaces[0]
    try {
      const value = workspace ? await ctrl.create({ workspaceId: workspace.id }) : await ctrl.create({ cwd })
      return String(value.sessionId)
    } catch (error) {
      if (!workspace) throw error
      const value = await ctrl.create({ cwd })
      return String(value.sessionId)
    }
  }

  /** 派发一张卡：没有会话就新建，然后把提示词塞进那个会话。 */
  async function dispatch(task, options = {}) {
    if (!task) return { ok: false, error: '任务不存在' }
    await ready
    if (inflight.has(task.id)) return { ok: false, error: '这张卡正在派发中' }
    const ctrl = sessionController()
    if (!ctrl) return { ok: false, error: '当前环境没有会话服务，无法派发任务' }
    inflight.add(task.id)
    try {
      let sessionId = options.sessionId || task.sessionId
      if (!sessionId) sessionId = await openSession()
      board.markDispatched(task.id, sessionId)
      await board.flushNow()
      const signal = new AbortController().signal
      await ctrl.prompt(
        {
          sessionId,
          requestId: `tb-${task.id}-${Date.now().toString(36)}`,
          mode: 'queue',
          content: [{ type: 'text', text: buildPrompt(task) }],
        },
        signal,
      )
      return { ok: true, sessionId }
    } catch (error) {
      board.markDispatchFailed(task.id, messageOf(error))
      await board.flushNow()
      return { ok: false, error: messageOf(error) }
    } finally {
      inflight.delete(task.id)
    }
  }

  async function stop(task) {
    if (!task?.sessionId) return { ok: false, error: '这张卡还没有会话' }
    const ctrl = sessionController()
    if (!ctrl) return { ok: false, error: '当前环境没有会话服务' }
    try {
      ctrl.cancel({ sessionId: task.sessionId })
      board.move(task.id, 'todo')
      task.running = false
      task.phase = 'stopped'
      task.updatedAt = Date.now()
      board.touch()
      return { ok: true }
    } catch (error) {
      return { ok: false, error: messageOf(error) }
    }
  }

  // 会话事件 → 卡片进度。只关心本插件派发出去的会话。
  ctx.effect(
    () =>
      ctx.on('session/event', (session, event) => {
        const sessionId = typeof session === 'string' ? session : session?.id
        if (!sessionId || !event) return
        const changed = board.applyEvent(String(sessionId), event)
        if (!changed.length) return
        if (event.type === 'turn/end' || event.type === 'assistant/message') board.flush()
      }),
    'task-board: session progress',
  )

  // HTTP：面板读写看板。
  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'prefix',
        path: PANEL_PATH,
        handler: async (req, res) => {
          try {
            const rejection = rejectionOf(ctx, req)
            if (rejection) {
              json(res, rejection, { error: '未授权' })
              return
            }
            const url = new URL(req.url, 'http://task-board.local')
            const route = url.pathname.slice(PANEL_PATH.length) || '/'
            if (route === '/state' && req.method === 'GET') {
              await ready
              json(res, 200, board.list())
              return
            }
            if (route === '/op' && req.method === 'POST') {
              await ready
              const body = await readJson(req)
              const result = await operate(body)
              json(res, 200, result)
              return
            }
            json(res, 404, { error: '未知接口' })
          } catch (error) {
            if (res.headersSent) {
              res.end()
              return
            }
            json(res, Number(error?.status) || 500, { error: messageOf(error) })
          }
        },
      }),
    'task-board: /task-board routes',
  )

  async function operate(body) {
    const op = typeof body?.op === 'string' ? body.op : ''
    const id = typeof body?.id === 'string' ? body.id : ''
    const fail = error => ({ ok: false, error, state: board.list() })
    switch (op) {
      case 'add': {
        const task = board.add(body, { source: 'board' })
        await board.flushNow()
        return { ok: true, task: { ...task }, state: board.list() }
      }
      case 'update': {
        const task = board.update(id, body)
        if (!task) return fail('任务不存在')
        await board.flushNow()
        return { ok: true, task: { ...task }, state: board.list() }
      }
      case 'move': {
        const task = board.move(id, body?.column)
        if (!task) return fail('任务不存在或状态无效')
        await board.flushNow()
        return { ok: true, task: { ...task }, state: board.list() }
      }
      case 'remove': {
        const removed = board.remove(id)
        await board.flushNow()
        return removed ? { ok: true, state: board.list() } : fail('任务不存在')
      }
      case 'accept': {
        const task = board.accept(id)
        if (!task) return fail('任务不存在')
        await board.flushNow()
        return { ok: true, task: { ...task }, state: board.list() }
      }
      case 'clearDone': {
        const removed = board.clearDone()
        await board.flushNow()
        return { ok: true, removed, state: board.list() }
      }
      case 'dispatch': {
        const task = board.find(id)
        const result = await dispatch(task, {})
        return { ...result, state: board.list() }
      }
      case 'stop': {
        const result = await stop(board.find(id))
        return { ...result, state: board.list() }
      }
      default:
        return fail(`未知操作：${op || '（空）'}`)
    }
  }

  // 工具：让会话里的 agent 也能读写这块看板。
  const tools = ctx.get('tools')
  if (tools) {
    ctx.effect(
      () =>
        tools.register({
          name: 'task_board',
          description:
            'Read and change the user\'s sidebar task board (kanban). Use action "add" when the user asks to put something on the board or track a task, "list" to see cards, "update" to change a card, "move" to change its column (todo, doing, review, done), "run" to dispatch a card to its own session, and "result" to read the latest result of a card.',
          parameters: {
            type: 'object',
            additionalProperties: false,
            properties: {
              action: {
                type: 'string',
                enum: ['add', 'list', 'update', 'move', 'run', 'result', 'remove'],
                description: 'Operation to perform.',
              },
              id: { type: 'string', description: 'Card id, from list or add.' },
              title: { type: 'string', description: 'Card title.' },
              note: { type: 'string', description: 'Card details or acceptance criteria.' },
              tag: { type: 'string', description: 'Short label shown as a chip, such as 研发 or 写作.' },
              column: { type: 'string', enum: COLUMNS, description: 'Board column.' },
              progress: { type: 'number', description: 'Progress 0-100.' },
              here: { type: 'boolean', description: 'For run: execute in the current session instead of a new one.' },
            },
            required: ['action'],
          },
          output: {
            schema: { type: 'object', additionalProperties: true },
            render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
          },
          async execute(args, exec) {
            await ready
            const action = String(args?.action || '')
            const id = typeof args?.id === 'string' ? args.id : ''
            const fail = error => ({ ok: false, error })
            switch (action) {
              case 'add': {
                if (!args?.title) return fail('标题不能为空')
                const task = board.add(args, { source: 'session', createdBy: exec?.agent?.id ?? null })
                await board.flushNow()
                return { ok: true, task: compact(task) }
              }
              case 'list': {
                const tasks = board.list().tasks
                const counts = Object.fromEntries(COLUMNS.map(column => [column, tasks.filter(task => task.column === column).length]))
                return { ok: true, counts, tasks: tasks.map(compact) }
              }
              case 'update': {
                const task = board.update(id, args ?? {})
                if (!task) return fail('任务不存在')
                await board.flushNow()
                return { ok: true, task: compact(task) }
              }
              case 'move': {
                const task = board.move(id, args?.column)
                if (!task) return fail('任务不存在或列无效')
                await board.flushNow()
                return { ok: true, task: compact(task) }
              }
              case 'remove': {
                return board.remove(id) ? { ok: true, removed: id } : fail('任务不存在')
              }
              case 'run': {
                const task = board.find(id)
                if (!task) return fail('任务不存在')
                const here = args?.here === true && exec?.agent?.id ? String(exec.agent.id) : ''
                const result = await dispatch(task, here ? { sessionId: here } : {})
                return { ...result, task: compact(board.find(id)) }
              }
              case 'result': {
                const task = board.find(id)
                if (!task) return fail('任务不存在')
                return {
                  ok: true,
                  id: task.id,
                  title: task.title,
                  column: task.column,
                  progress: task.progress,
                  sessionId: task.sessionId,
                  result: task.result,
                  error: task.error,
                }
              }
              default:
                return fail(`未知操作：${action || '（空）'}`)
            }
          },
        }),
        'task-board: task_board tool',
      )
    ctx.effect(
      () =>
        ctx.get('systemPrompt')?.section({
          name: 'task-board',
          order: 60,
          text: 'The user keeps a kanban task board in the sidebar. When they ask to put a task on the board, check the board, or start a card, use the task_board tool rather than inventing another format.',
        }),
      'task-board: prompt section',
    )
  }
}

function compact(task) {
  return {
    id: task.id,
    title: task.title,
    note: task.note,
    tag: task.tag,
    column: task.column,
    progress: task.progress,
    phase: task.phase,
    running: task.running === true,
    steps: task.steps,
    source: task.source,
    sessionId: task.sessionId,
    result: task.result,
    error: task.error,
    updatedAt: task.updatedAt,
  }
}
