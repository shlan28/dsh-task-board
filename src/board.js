// 看板的数据层：任务折叠、进度与结果，纯 JSON、可单测。
// 会话操作（建会话、派发提示词）由 host.js 负责，这里只记录状态。
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

export const COLUMNS = ['todo', 'doing', 'review', 'done']
export const COLUMN_SET = new Set(COLUMNS)
export const WEEKDAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
const WEEKDAY_SET = new Set(WEEKDAYS)
const AUTOMATION_FREQUENCIES = new Set(['hourly', 'daily', 'weekly', 'custom'])
const FILE_VERSION = 1

const clampProgress = (value) => {
  const number = Number(value)
  if (!Number.isFinite(number)) return 0
  return Math.max(0, Math.min(100, Math.round(number)))
}

const text = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

/** `HH:MM`，非法值回空串。 */
export function normalizeClock(value) {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(typeof value === 'string' ? value.trim() : '')
  return match ? `${match[1]}:${match[2]}` : ''
}

function normalizeWeekdays(value) {
  if (!Array.isArray(value)) return []
  const days = []
  for (const entry of value) {
    const name = typeof entry === 'string' ? entry.trim().toUpperCase() : ''
    if (!WEEKDAY_SET.has(name) || days.includes(name)) continue
    days.push(name)
  }
  return days
}

/** 卡片上的自动化配置：重复规则、时区、绑定的定时任务与会话。 */
export function normalizeAutomation(raw) {
  if (!raw || typeof raw !== 'object') return null
  const scheduleId = typeof raw.scheduleId === 'string' ? raw.scheduleId.trim() : ''
  const rrule = text(raw.rrule, 2000)
  if (!scheduleId && !rrule) return null
  return {
    scheduleId,
    rrule,
    targetPath: text(raw.targetPath, 1024),
    frequency: AUTOMATION_FREQUENCIES.has(raw.frequency) ? raw.frequency : 'custom',
    time: normalizeClock(raw.time) || '09:00',
    weekdays: normalizeWeekdays(raw.weekdays),
    timeZone: text(raw.timeZone, 64),
    active: raw.active !== false,
    reservedSessionId: typeof raw.reservedSessionId === 'string' && raw.reservedSessionId ? raw.reservedSessionId : null,
    lastFiredAt: Number(raw.lastFiredAt) || null,
    error: text(raw.error, 500),
  }
}

let counter = 0
export function newId(prefix = 't') {
  counter = (counter + 1) % 1296
  return `${prefix}_${Date.now().toString(36)}${counter.toString(36).padStart(2, '0')}${Math.random().toString(36).slice(2, 5)}`
}

/** 提取一条消息里的纯文本。 */
export function textOfMessage(message) {
  const content = message?.content
  if (!Array.isArray(content)) return ''
  return content
    .filter(block => block?.type === 'text' && typeof block.text === 'string')
    .map(block => block.text)
    .join('\n')
    .trim()
}

function normalizeTask(raw) {
  const task = {
    id: typeof raw?.id === 'string' ? raw.id : newId(),
    title: text(raw?.title, 200) || '未命名任务',
    note: text(raw?.note, 4000),
    tag: text(raw?.tag, 24),
    column: COLUMN_SET.has(raw?.column) ? raw.column : 'todo',
    progress: clampProgress(raw?.progress),
    phase: typeof raw?.phase === 'string' ? raw.phase : 'idle',
    running: raw?.running === true,
    toolName: typeof raw?.toolName === 'string' ? raw.toolName : '',
    steps: Number.isFinite(raw?.steps) ? Math.max(0, Number(raw.steps)) : 0,
    sessionId: typeof raw?.sessionId === 'string' && raw.sessionId ? raw.sessionId : null,
    workspaceId: text(raw?.workspaceId, 120) || null,
    workspacePath: text(raw?.workspacePath, 1024) || null,
    workspaceTitle: text(raw?.workspaceTitle, 200) || null,
    source: raw?.source === 'session' ? 'session' : 'board',
    createdBy: typeof raw?.createdBy === 'string' ? raw.createdBy : null,
    automation: normalizeAutomation(raw?.automation),
    result: text(raw?.result, 8000),
    error: text(raw?.error, 2000),
    createdAt: Number(raw?.createdAt) || Date.now(),
    updatedAt: Number(raw?.updatedAt) || Date.now(),
    startedAt: Number(raw?.startedAt) || null,
    finishedAt: Number(raw?.finishedAt) || null,
    order: Number.isFinite(raw?.order) ? Number(raw.order) : 0,
  }
  if (task.column === 'done') task.progress = 100
  return task
}

export class Board {
  constructor(root, { now = () => Date.now(), log = () => {} } = {}) {
    this.dir = root
    this.file = join(root, 'board.json')
    this.now = now
    this.log = log
    this.tasks = []
    this.revision = 0
    this.loaded = false
    this.dirty = false
    this.timer = null
    this.queue = Promise.resolve()
  }

  async load() {
    if (this.loaded) return this
    try {
      const raw = await readFile(this.file, 'utf8')
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed?.tasks)) this.tasks = parsed.tasks.map(normalizeTask)
    } catch (err) {
      if (err?.code !== 'ENOENT' && !(err instanceof SyntaxError)) this.log('task-board: 读取看板失败', err)
    }
    this.loaded = true
    return this
  }

  list() {
    return {
      tasks: this.tasks.map(task => ({
        ...task,
        automation: task.automation ? { ...task.automation, weekdays: [...task.automation.weekdays] } : null,
      })),
      revision: this.revision,
      columns: [...COLUMNS],
      now: this.now(),
    }
  }

  find(id) {
    return this.tasks.find(task => task.id === id)
  }

  bySession(sessionId) {
    if (!sessionId) return []
    return this.tasks.filter(task => task.sessionId === sessionId)
  }

  add(input, meta = {}) {
    const order = this.tasks.reduce((max, task) => Math.max(max, task.order), 0) + 1
    const task = normalizeTask({
      title: input?.title,
      note: input?.note,
      tag: input?.tag,
      column: input?.column,
      workspaceId: input?.workspaceId,
      workspacePath: input?.workspacePath,
      workspaceTitle: input?.workspaceTitle,
      order,
      source: meta.source === 'session' ? 'session' : 'board',
      createdBy: meta.createdBy ?? null,
      createdAt: this.now(),
      updatedAt: this.now(),
    })
    this.tasks.push(task)
    this.touch()
    return task
  }

  update(id, patch = {}) {
    const task = this.find(id)
    if (!task) return null
    if (patch.title !== undefined) task.title = text(patch.title, 200) || task.title
    if (patch.note !== undefined) task.note = text(patch.note, 4000)
    if (patch.tag !== undefined) task.tag = text(patch.tag, 24)
    if (patch.progress !== undefined) task.progress = clampProgress(patch.progress)
    if (patch.sessionId !== undefined) task.sessionId = text(patch.sessionId, 200) || null
    if (patch.workspaceId !== undefined) task.workspaceId = text(patch.workspaceId, 120) || null
    if (patch.workspacePath !== undefined) task.workspacePath = text(patch.workspacePath, 1024) || null
    if (patch.workspaceTitle !== undefined) task.workspaceTitle = text(patch.workspaceTitle, 200) || null
    if (patch.column !== undefined && COLUMN_SET.has(patch.column)) this.applyColumn(task, patch.column)
    task.updatedAt = this.now()
    this.touch()
    return task
  }

  /** 写入或清除一张卡的自动化配置。 */
  setAutomation(id, automation) {
    const task = this.find(id)
    if (!task) return null
    task.automation = normalizeAutomation(automation)
    task.updatedAt = this.now()
    this.touch()
    return task
  }

  /** 记录自动化投递的会话与触发时间；卡片转为进行中。 */
  bindAutomationRun(task, sessionId) {
    if (!task) return null
    if (task.automation) {
      task.automation.reservedSessionId = sessionId
      task.automation.lastFiredAt = this.now()
    }
    return this.markDispatched(task.id, sessionId)
  }

  move(id, column) {
    const task = this.find(id)
    if (!task || !COLUMN_SET.has(column)) return null
    this.applyColumn(task, column)
    task.updatedAt = this.now()
    this.touch()
    return task
  }

  applyColumn(task, column) {
    task.column = column
    if (column === 'done') {
      task.progress = 100
      task.phase = 'idle'
      task.toolName = ''
      task.finishedAt ??= this.now()
    } else if (column === 'todo') {
      task.progress = 0
      task.phase = 'idle'
      task.toolName = ''
      task.startedAt = null
      task.finishedAt = null
    }
  }

  remove(id) {
    const index = this.tasks.findIndex(task => task.id === id)
    if (index < 0) return false
    this.tasks.splice(index, 1)
    this.touch()
    return true
  }

  /**
   * 验收一轮结果。
   * 自动化卡是周期任务，没有「已完成」这个终态：验收只代表这一轮看过了，
   * 于是回到待办等待下一轮；普通卡仍按原行为进入已完成。
   */
  accept(id) {
    const task = this.find(id)
    if (!task) return null
    task.running = false
    task.updatedAt = this.now()
    if (task.automation) {
      this.applyColumn(task, 'todo')
      task.result = task.result || ''
    } else {
      task.column = 'done'
      task.progress = 100
      task.phase = 'idle'
      task.toolName = ''
      task.finishedAt = this.now()
    }
    this.touch()
    return task
  }

  clearDone() {
    const before = this.tasks.length
    this.tasks = this.tasks.filter(task => task.column !== 'done')
    if (this.tasks.length !== before) this.touch()
    return before - this.tasks.length
  }

  markDispatched(id, sessionId) {
    const task = this.find(id)
    if (!task) return null
    task.sessionId = sessionId
    task.running = true
    task.column = 'doing'
    task.progress = 6
    task.phase = 'queued'
    task.toolName = ''
    task.steps = 0
    task.error = ''
    task.finishedAt = null
    task.startedAt = this.now()
    task.updatedAt = this.now()
    this.touch()
    return task
  }

  markDispatchFailed(id, message) {
    const task = this.find(id)
    if (!task) return null
    task.column = 'todo'
    task.running = false
    task.progress = 0
    task.phase = 'error'
    task.toolName = ''
    task.error = text(message, 2000) || '派发失败'
    task.updatedAt = this.now()
    this.touch()
    return task
  }

  /** 折叠一条会话事件到对应的任务；自动化投递会在这里接管卡片。 */
  applyEvent(sessionId, event) {
    const candidates = this.tasks.filter(
      task => task.sessionId === sessionId || task.automation?.reservedSessionId === sessionId,
    )
    if (!candidates.length) return []
    const affected = []
    for (const task of candidates) {
      if (task.sessionId !== sessionId) {
        // 自动化预留的会话还没被用过：等这一轮真正开始再接管。
        if (event?.type !== 'turn/start') continue
        task.sessionId = sessionId
      }
      if (!task.running && task.phase !== 'queued') {
        // 上一轮已经结束：这次 turn/start 是一次新的自动执行。
        if (event?.type !== 'turn/start') continue
        if (task.automation) this.bindAutomationRun(task, sessionId)
        else this.markDispatched(task.id, sessionId)
      }
      this.fold(task, event)
      affected.push(task)
    }
    if (!affected.length) return []
    this.touch()
    return affected
  }

  fold(task, event) {
    const data = event?.data ?? {}
    switch (event?.type) {
      case 'turn/start':
        task.phase = 'thinking'
        task.progress = Math.max(task.progress, 12)
        task.startedAt ??= this.now()
        task.error = ''
        break
      case 'step/start':
        task.phase = 'thinking'
        task.progress = Math.min(62, Math.max(task.progress, 18) + 4)
        break
      case 'tool/call':
        task.steps += 1
        task.phase = 'tool'
        task.toolName = typeof data.name === 'string' ? data.name : ''
        task.progress = Math.max(task.progress, Math.min(86, 26 + task.steps * 7))
        break
      case 'tool/result':
        if (data.error) task.error = text(data.error.reason || data.error.message || data.error.code, 2000)
        break
      case 'assistant/message': {
        const message = textOfMessage(data.message)
        if (message) task.result = text(message, 8000)
        task.phase = 'writing'
        task.progress = Math.max(task.progress, 88)
        break
      }
      case 'turn/end': {
        const reason = data.reason ?? {}
        task.running = false
        task.finishedAt = this.now()
        task.updatedAt = this.now()
        if (task.column === 'done') {
          task.progress = 100
          task.phase = 'idle'
          task.error = ''
          break
        }
        if (reason.kind === 'completed') {
          task.column = 'review'
          task.progress = 100
          task.phase = 'review'
          task.error = ''
        } else if (reason.kind === 'aborted') {
          task.column = 'todo'
          task.progress = 0
          task.phase = 'stopped'
          task.error = ''
        } else {
          task.column = 'review'
          task.progress = 100
          task.phase = 'error'
          task.error = text(reason.error?.message || `执行结束：${reason.kind || 'unknown'}`, 2000)
        }
        break
      }
      default:
        break
    }
  }

  touch() {
    this.revision += 1
    this.dirty = true
    if (this.timer) return
    this.timer = setTimeout(() => {
      this.timer = null
      this.flush()
    }, 250)
  }

  flush() {
    if (!this.dirty) return this.queue
    this.dirty = false
    const body = JSON.stringify({ version: FILE_VERSION, tasks: this.tasks })
    this.queue = this.queue
      .then(async () => {
        await mkdir(dirname(this.file), { recursive: true })
        const temp = `${this.file}.${process.pid}.tmp`
        await writeFile(temp, body, 'utf8')
        await rename(temp, this.file)
      })
      .catch(err => this.log('task-board: 保存看板失败', err))
    return this.queue
  }

  async flushNow() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    this.flush()
    await this.queue
  }
}
