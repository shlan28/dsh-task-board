// 任务看板 host 半片：/task-board/* 接口、会话派发、进度折叠与 task_board 工具。
import { homedir } from 'node:os'
import { join } from 'node:path'
import { Board, COLUMNS, normalizeClock } from './board.js'

const MAX_JSON = 1_000_000
const PANEL_PATH = '/task-board'
const WEEKDAY_SHORT = { Sun: 'SU', Mon: 'MO', Tue: 'TU', Wed: 'WE', Thu: 'TH', Fri: 'FR', Sat: 'SA' }
const WEEKDAY_ORDER = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
const WEEKDAY_SET = new Set(WEEKDAY_ORDER)

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

/** 校验时区名；不可用时退回宿主时区。 */
export function resolveTimeZone(value, fallback) {
  const zone = typeof value === 'string' ? value.trim() : ''
  if (zone) {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: zone })
      return zone
    } catch {
      // 无效时区，继续用兜底值
    }
  }
  if (fallback) {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: fallback })
      return fallback
    } catch {
      // 同上
    }
  }
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  } catch {
    return 'UTC'
  }
}

/** 某个时区里今天是周几，返回 RRULE 用的两位代码。 */
function weekdayIn(zone) {
  try {
    const label = new Intl.DateTimeFormat('en-US', { timeZone: zone, weekday: 'short' }).format(new Date())
    return WEEKDAY_SHORT[label] || 'MO'
  } catch {
    return 'MO'
  }
}

function normalizeWeekdayList(value) {
  if (!Array.isArray(value)) return []
  const picked = new Set()
  for (const entry of value) {
    const name = typeof entry === 'string' ? entry.trim().toUpperCase() : ''
    if (WEEKDAY_SET.has(name)) picked.add(name)
  }
  return WEEKDAY_ORDER.filter(day => picked.has(day))
}

/**
 * 把界面/工具里的重复设置编成 RRULE：锚点固定在 2026-01-01，只借用它的时钟时间。
 * 传入了完整的 RRULE 文本则原样使用。
 */
export function buildRrule(input, fallbackZone) {
  if (typeof input?.rrule === 'string' && /^DTSTART/m.test(input.rrule) && /RRULE:/i.test(input.rrule)) {
    return { rrule: input.rrule.trim(), frequency: 'custom', time: '09:00', weekdays: [], timeZone: '' }
  }
  const frequency = input?.frequency === 'hourly' || input?.frequency === 'weekly' ? input.frequency : 'daily'
  const time = normalizeClock(input?.time) || '09:00'
  const [hour, minute] = time.split(':')
  const timeZone = resolveTimeZone(input?.timeZone, fallbackZone)
  const anchor = `DTSTART;TZID=${timeZone}:20260101T${hour}${minute}00`
  if (frequency === 'hourly') {
    return { rrule: `${anchor}\nRRULE:FREQ=HOURLY`, frequency, time, weekdays: [], timeZone }
  }
  if (frequency === 'weekly') {
    const weekdays = normalizeWeekdayList(input?.weekdays)
    const days = weekdays.length ? weekdays : [weekdayIn(timeZone)]
    return { rrule: `${anchor}\nRRULE:FREQ=WEEKLY;BYDAY=${days.join(',')}`, frequency, time, weekdays: days, timeZone }
  }
  return { rrule: `${anchor}\nRRULE:FREQ=DAILY`, frequency, time, weekdays: [], timeZone }
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
    const cwd = boardDirectory()
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

  const scheduleService = () => ctx.get('schedule')
  const boardDirectory = () => ctx.get('workingDirectory')?.defaultDirectory || process.cwd()

  /** 某个会话自己的工作目录；会话不在内存里时返回空串。 */
  function sessionDirectory(sessionId) {
    if (!sessionId) return ''
    try {
      const session = ctx.get('sessions')?.get?.(sessionId)
      if (!session) return ''
      return ctx.get('workingDirectory')?.get?.(session) || ''
    } catch {
      return ''
    }
  }

  /** 自动化会话落在哪个工作区：优先发起操作的会话，其次是看板已有的工作区。 */
  function automationDirectory(sessionId) {
    const own = sessionDirectory(sessionId)
    if (own) return own
    try {
      const workspace = ctx.get('workspaceRegistry')?.list?.()?.[0]
      if (workspace?.path) return workspace.path
    } catch {
      // 没有工作区注册表，用部署默认目录
    }
    return boardDirectory()
  }

  // 定时任务目录：本地缓存 1.5 秒，schedule/changed 时立刻失效。
  let catalog = { at: 0, byId: new Map(), stamp: '' }

  function invalidateCatalog() {
    catalog = { at: 0, byId: new Map(), stamp: catalog.stamp }
  }

  async function automationIndex() {
    const service = scheduleService()
    if (typeof service?.catalog !== 'function') return new Map()
    if (catalog.at && Date.now() - catalog.at < 1500) return catalog.byId
    try {
      const entries = await service.catalog()
      const byId = new Map()
      const signature = []
      for (const entry of Array.isArray(entries) ? entries : []) {
        if (!entry?.id) continue
        const scheduledAt = Date.parse(entry.scheduledAt)
        const deliveredAt = entry.lastDelivery ? Date.parse(entry.lastDelivery.deliveredAt) : NaN
        const status = typeof entry.status === 'string' ? entry.status : 'active'
        byId.set(String(entry.id), {
          status,
          nextAt: Number.isFinite(scheduledAt) ? scheduledAt : null,
          lastDeliveredAt: Number.isFinite(deliveredAt) ? deliveredAt : null,
        })
        signature.push(`${entry.id}:${status}:${entry.scheduledAt}`)
      }
      catalog = { at: Date.now(), byId, stamp: signature.sort().join('|') }
      return byId
    } catch (error) {
      ctx.logger?.warn?.('task-board: 读取定时任务失败', error)
      return catalog.byId
    }
  }

  /** 看板快照 + 每张自动化卡的实时状态。 */
  async function snapshot() {
    const state = board.list()
    const index = await automationIndex()
    state.schedulesRevision = catalog.stamp || ''
    if (!index.size) return state
    state.tasks = state.tasks.map(task => {
      if (!task.automation?.scheduleId) return task
      const runtime = index.get(task.automation.scheduleId)
      return runtime ? { ...task, automation: { ...task.automation, runtime } } : task
    })
    return state
  }

  function scheduleTitle(task) {
    return `任务看板 · ${task.title}`.trim().slice(0, 120)
  }

  async function createSchedule(task, spec, sessionId) {
    const service = scheduleService()
    if (typeof service?.create !== 'function') return { ok: false, error: '当前环境没有定时任务服务，自动化不可用' }
    try {
      const entry = await service.create({
        title: scheduleTitle(task),
        prompt: buildPrompt(task),
        timing: { kind: 'rrule', rrule: spec.rrule },
        target: { kind: 'new_once', create: { cwd: automationDirectory(sessionId) } },
      })
      invalidateCatalog()
      return { ok: true, entry }
    } catch (error) {
      return { ok: false, error: messageOf(error) }
    }
  }

  async function editSchedule(scheduleId, patch) {
    const service = scheduleService()
    if (typeof service?.edit !== 'function') return { ok: false, error: '当前环境没有定时任务服务，自动化不可用' }
    try {
      const result = await service.edit({ id: scheduleId, action: 'update', patch })
      invalidateCatalog()
      if (result?.code === 'schedule_not_found') return { ok: false, error: '定时任务已不存在' }
      if (result?.code === 'schedule_conflict') return { ok: false, error: '定时任务已在别处修改，请刷新后重试' }
      return { ok: true, entry: result }
    } catch (error) {
      return { ok: false, error: messageOf(error) }
    }
  }

  async function deleteSchedule(scheduleId) {
    const service = scheduleService()
    if (!scheduleId || typeof service?.edit !== 'function') return { ok: true }
    try {
      const result = await service.edit({ id: scheduleId, action: 'delete' })
      invalidateCatalog()
      if (result?.code === 'schedule_not_found') return { ok: true, missing: true }
      return { ok: true }
    } catch (error) {
      return { ok: false, error: messageOf(error) }
    }
  }

  /** 给卡片挂上定时任务；同时记下预留会话，投递后自动接管。 */
  async function attachAutomation(task, input, sessionId) {
    const spec = buildRrule(input)
    const created = await createSchedule(task, spec, sessionId)
    if (!created.ok) return { ok: false, error: created.error }
    const entry = created.entry ?? {}
    const reserved = entry.target?.kind === 'new_once' ? String(entry.target.sessionId) : null
    board.setAutomation(task.id, {
      scheduleId: String(entry.id ?? ''),
      rrule: spec.rrule,
      frequency: spec.frequency,
      time: spec.time,
      weekdays: spec.weekdays,
      timeZone: spec.timeZone,
      active: entry.status !== 'paused',
      reservedSessionId: reserved,
    })
    await board.flushNow()
    return { ok: true }
  }

  const hasTiming = input =>
    Boolean(input && typeof input === 'object') &&
    (typeof input.rrule === 'string' || typeof input.frequency === 'string' || typeof input.time === 'string' || Array.isArray(input.weekdays))

  /**
   * 处理 add/update 里的 automation：
   * 缺省表示「没改规则」，只同步标题与提示词；frequency=none 表示取消自动化。
   */
  async function applyAutomation(task, input, sessionId) {
    const existing = task.automation
    const remove = Boolean(input && typeof input === 'object' && (input.frequency === 'none' || input.frequency === 'off' || input.remove === true))
    if (remove) {
      if (existing?.scheduleId) {
        const result = await deleteSchedule(existing.scheduleId)
        if (!result.ok) return { warning: `自动化任务没有删除：${result.error}` }
      }
      board.setAutomation(task.id, null)
      return {}
    }
    if (!existing?.scheduleId) {
      if (!hasTiming(input)) return {}
      const result = await attachAutomation(task, input, sessionId)
      return result.ok ? {} : { warning: `自动化没有生效：${result.error}` }
    }
    const spec = hasTiming(input) ? buildRrule(input) : null
    const patch = { title: scheduleTitle(task), prompt: buildPrompt(task) }
    if (spec && spec.rrule !== existing.rrule) patch.timing = { kind: 'rrule', rrule: spec.rrule }
    const active = typeof input?.active === 'boolean' ? input.active : existing.active
    if (active !== existing.active) patch.active = active
    const result = await editSchedule(existing.scheduleId, patch)
    if (!result.ok) return { warning: `自动化任务没有更新：${result.error}` }
    board.setAutomation(task.id, {
      ...existing,
      ...(spec && spec.rrule !== existing.rrule
        ? { rrule: spec.rrule, frequency: spec.frequency, time: spec.time, weekdays: spec.weekdays, timeZone: spec.timeZone }
        : {}),
      active,
      error: '',
    })
    return {}
  }

  /**
   * 自动化卡进入已完成时暂停定时，离开已完成时恢复。
   * 「已完成」对周期任务只能是停表，否则下一轮到点会把卡片从已完成拽回进行中。
   */
  async function syncAutomationByColumn(task) {
    const automation = task?.automation
    if (!automation?.scheduleId) return ''
    const shouldRun = task.column !== 'done'
    if ((automation.active !== false) === shouldRun) return ''
    const result = await editSchedule(automation.scheduleId, { active: shouldRun })
    if (!result.ok) return `自动化没有${shouldRun ? '恢复' : '暂停'}：${result.error}`
    board.setAutomation(task.id, { ...automation, active: shouldRun })
    return ''
  }

  /** 立即执行一张卡：自动化卡走定时任务投递，普通卡走会话派发。 */
  async function runNow(task) {
    if (!task) return { ok: false, error: '任务不存在' }
    await ready
    const scheduleId = task.automation?.scheduleId
    const service = scheduleService()
    if (!scheduleId || typeof service?.run !== 'function') return dispatch(task, {})
    if (inflight.has(task.id)) return { ok: false, error: '这张卡正在派发中' }
    inflight.add(task.id)
    try {
      const value = await service.run({ id: scheduleId })
      invalidateCatalog()
      if (value?.code === 'schedule_execution_pending') return { ok: true, pending: true }
      if (value?.code === 'schedule_not_found') return { ok: false, error: '自动化任务已不存在，请重新设置规则' }
      return { ok: true, sessionId: value?.target?.sessionId ? String(value.target.sessionId) : task.sessionId ?? null }
    } catch (error) {
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

  // 会话事件 → 卡片进度。只关心本插件派发出去的会话，以及自动化预留的会话。
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

  // 定时任务有变动时，卡片上的「下次执行」要重新读。
  ctx.effect(() => ctx.on('schedule/changed', invalidateCatalog), 'task-board: schedule changes')

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
              json(res, 200, await snapshot())
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
    const fail = async error => ({ ok: false, error, state: await snapshot() })
    const done = task => ({ ok: true, task: { ...task } })
    switch (op) {
      case 'add': {
        const task = board.add(body, { source: 'board' })
        let warning = ''
        if (body?.automation) {
          const result = await applyAutomation(task, body.automation)
          warning = result.warning || ''
        }
        await board.flushNow()
        return { ...done(task), ...(warning ? { warning } : {}), state: await snapshot() }
      }
      case 'update': {
        const task = board.find(id)
        if (!task) return fail('任务不存在')
        board.update(id, body)
        const result = await applyAutomation(task, body?.automation)
        await board.flushNow()
        return { ...done(task), ...(result.warning ? { warning: result.warning } : {}), state: await snapshot() }
      }
      case 'move': {
        const task = board.move(id, body?.column)
        if (!task) return fail('任务不存在或状态无效')
        const warning = await syncAutomationByColumn(task)
        await board.flushNow()
        return { ...done(task), ...(warning ? { warning } : {}), state: await snapshot() }
      }
      case 'remove': {
        const task = board.find(id)
        if (!task) return fail('任务不存在')
        if (task.automation?.scheduleId) {
          const result = await deleteSchedule(task.automation.scheduleId)
          if (!result.ok) return fail(`自动化任务没有删除：${result.error}`)
        }
        board.remove(id)
        await board.flushNow()
        return { ok: true, state: await snapshot() }
      }
      case 'accept': {
        const task = board.accept(id)
        if (!task) return fail('任务不存在')
        await board.flushNow()
        return { ...done(task), state: await snapshot() }
      }
      case 'clearDone': {
        const removed = board.clearDone()
        await board.flushNow()
        return { ok: true, removed, state: await snapshot() }
      }
      case 'dispatch': {
        const task = board.find(id)
        const result = await runNow(task)
        return { ...result, state: await snapshot() }
      }
      case 'stop': {
        const result = await stop(board.find(id))
        return { ...result, state: await snapshot() }
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
            'Read and change the user\'s sidebar task board (kanban). Use action "add" when the user asks to put something on the board or track a task, "list" to see cards, "update" to change a card, "move" to change its column (todo, doing, review, done), "run" to dispatch a card to its own session, and "result" to read the latest result of a card. Pass "automation" on add or update when the card should run itself on a recurring schedule.',
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
              automation: {
                type: 'object',
                additionalProperties: false,
                description:
                  'For add/update: run this card automatically. frequency "daily", "weekly" or "hourly" plus an optional "time" (HH:MM) and "weekdays" (MO, TU, ...); "none" removes automation. active:false pauses, active:true resumes. For a custom RFC 5545 rule pass "rrule" instead.',
                properties: {
                  frequency: { type: 'string', enum: ['hourly', 'daily', 'weekly', 'none'], description: 'Repeat frequency; "none" removes automation.' },
                  time: { type: 'string', description: 'Local time of day, HH:MM. Ignored hour for hourly rules.' },
                  weekdays: {
                    type: 'array',
                    items: { type: 'string', enum: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'] },
                    description: 'Weekdays for weekly rules.',
                  },
                  timeZone: { type: 'string', description: 'IANA time zone, for example Asia/Shanghai. Defaults to the Host zone.' },
                  rrule: { type: 'string', description: 'Full RFC 5545 RRULE text: one DTSTART line, a newline, and one RRULE line.' },
                  active: { type: 'boolean', description: 'Pause (false) or resume (true) an existing automation.' },
                },
              },
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
            const actorSessionId = exec?.agent?.id ? String(exec.agent.id) : ''
            const fail = error => ({ ok: false, error })
            const detailed = async task => compact(task, (await automationIndex()).get(task.automation?.scheduleId))
            switch (action) {
              case 'add': {
                if (!args?.title) return fail('标题不能为空')
                const task = board.add(args, { source: 'session', createdBy: actorSessionId || null })
                let warning = ''
                if (args?.automation) {
                  const result = await applyAutomation(task, args.automation, actorSessionId)
                  warning = result.warning || ''
                }
                await board.flushNow()
                return { ok: true, task: await detailed(task), ...(warning ? { warning } : {}) }
              }
              case 'list': {
                const tasks = board.list().tasks
                const counts = Object.fromEntries(COLUMNS.map(column => [column, tasks.filter(task => task.column === column).length]))
                const index = await automationIndex()
                return { ok: true, counts, tasks: tasks.map(task => compact(task, index.get(task.automation?.scheduleId))) }
              }
              case 'update': {
                const task = board.find(id)
                if (!task) return fail('任务不存在')
                board.update(id, args ?? {})
                const result = await applyAutomation(task, args?.automation, actorSessionId)
                await board.flushNow()
                return { ok: true, task: await detailed(task), ...(result.warning ? { warning: result.warning } : {}) }
              }
              case 'move': {
                const task = board.move(id, args?.column)
                if (!task) return fail('任务不存在或列无效')
                await board.flushNow()
                return { ok: true, task: compact(task) }
              }
              case 'remove': {
                const task = board.find(id)
                if (!task) return fail('任务不存在')
                if (task.automation?.scheduleId) {
                  const result = await deleteSchedule(task.automation.scheduleId)
                  if (!result.ok) return fail(`自动化任务没有删除：${result.error}`)
                }
                return board.remove(id) ? { ok: true, removed: id } : fail('任务不存在')
              }
              case 'run': {
                const task = board.find(id)
                if (!task) return fail('任务不存在')
                const here = args?.here === true && exec?.agent?.id ? String(exec.agent.id) : ''
                const result = here ? await dispatch(task, { sessionId: here }) : await runNow(task)
                return { ...result, task: await detailed(board.find(id)) }
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
                  automation: compactAutomation(task.automation, (await automationIndex()).get(task.automation?.scheduleId)),
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
          text: 'The user keeps a kanban task board in the sidebar. When they ask to put a task on the board, check the board, or start a card, use the task_board tool rather than inventing another format. A card can also repeat automatically: pass the automation parameter when adding or updating it.',
        }),
      'task-board: prompt section',
    )
  }
}

function compactAutomation(automation, runtime) {
  if (!automation) return null
  return {
    scheduleId: automation.scheduleId,
    active: automation.active !== false,
    frequency: automation.frequency,
    time: automation.time,
    weekdays: Array.isArray(automation.weekdays) ? [...automation.weekdays] : [],
    rrule: automation.rrule,
    nextAt: runtime?.nextAt ?? automation.runtime?.nextAt ?? null,
    lastFiredAt: automation.lastFiredAt ?? null,
  }
}

function compact(task, runtime) {
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
    automation: compactAutomation(task.automation, runtime),
    result: task.result,
    error: task.error,
    updatedAt: task.updatedAt,
  }
}
