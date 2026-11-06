// 看板的数据层：任务折叠、进度与结果，纯 JSON、可单测。
// 会话操作（建会话、派发提示词）由 host.js 负责，这里只记录状态。
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

export const COLUMNS = ['todo', 'doing', 'review', 'done']
export const COLUMN_SET = new Set(COLUMNS)
const FILE_VERSION = 1

const clampProgress = (value) => {
  const number = Number(value)
  if (!Number.isFinite(number)) return 0
  return Math.max(0, Math.min(100, Math.round(number)))
}

const text = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

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
    source: raw?.source === 'session' ? 'session' : 'board',
    createdBy: typeof raw?.createdBy === 'string' ? raw.createdBy : null,
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
      tasks: this.tasks.map(task => ({ ...task })),
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
    if (patch.column !== undefined && COLUMN_SET.has(patch.column)) this.applyColumn(task, patch.column)
    task.updatedAt = this.now()
    this.touch()
    return task
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

  accept(id) {
    const task = this.find(id)
    if (!task) return null
    task.column = 'done'
    task.running = false
    task.progress = 100
    task.phase = 'idle'
    task.toolName = ''
    task.finishedAt = this.now()
    task.updatedAt = this.now()
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
    task.progress = Math.max(task.progress, 6)
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

  /** 折叠一条会话事件到对应的运行中任务。 */
  applyEvent(sessionId, event) {
    const affected = this.tasks.filter(task => task.sessionId === sessionId && (task.running === true || task.phase === 'queued'))
    if (!affected.length) return []
    for (const task of affected) this.fold(task, event)
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
