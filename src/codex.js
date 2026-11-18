// Codex 执行者：本地 Codex 检测、ACP 适配器配置、运行队列与进度折叠。
// ACP 连接本身在 acp.js；这里只关心看板语义（排队、停止、结果、错误）。
import { spawn } from 'node:child_process'
import { access, chmod, mkdir, readFile, rename, stat, writeFile } from 'node:fs/promises'
import { constants } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { delimiter, dirname, isAbsolute, join } from 'node:path'
import { AcpConnection, AcpError } from './acp.js'


const CONFIG_VERSION = 1
const DEFAULT_ADAPTER = 'npx -y @agentclientprotocol/codex-acp'
const RUN_TIMEOUT_MS = 45 * 60_000
const DETECT_TIMEOUT_MS = 5_000
const TEST_TIMEOUT_MS = 180_000
const MODES = new Set(['read-only', 'workspace-write', 'agent-full-access'])

const messageOf = error => {
  const message = error?.message ?? error
  return typeof message === 'string' && message ? message : '未知错误'
}

/** 把 `npx -y pkg` / 带引号的路径拆成 argv。 */
export function splitCommand(text) {
  const argv = []
  const pattern = /"([^"]*)"|'([^']*)'|(\S+)/g
  let match
  while ((match = pattern.exec(String(text || '').trim()))) {
    argv.push(match[1] ?? match[2] ?? match[3])
  }
  return argv
}

export function normalizeConfig(raw) {
  const config = {
    version: CONFIG_VERSION,
    codexPath: typeof raw?.codexPath === 'string' ? raw.codexPath.trim().slice(0, 1024) : '',
    adapterCommand: typeof raw?.adapterCommand === 'string' ? raw.adapterCommand.trim().slice(0, 1024) : '',
    model: typeof raw?.model === 'string' ? raw.model.trim().slice(0, 120) : '',
    permissionMode: MODES.has(raw?.permissionMode) ? raw.permissionMode : 'workspace-write',
    autoApprove: raw?.autoApprove !== false,
    lastDetectedAt: Number(raw?.lastDetectedAt) || 0,
  }
  return config
}

function isExecutable(path) {
  return access(path, constants.X_OK)
    .then(() => stat(path))
    .then(info => info.isFile())
    .catch(() => false)
}

async function findOnPath(name) {
  if (!name) return ''
  const candidates = []
  if (isAbsolute(name)) candidates.push(name)
  else {
    for (const dir of String(process.env.PATH || '').split(delimiter)) {
      if (dir) candidates.push(join(dir, name))
    }
    candidates.push(join(homedir(), '.local', 'bin', name))
  }
  for (const candidate of candidates) {
    if (await isExecutable(candidate)) return candidate
  }
  return ''
}

/** 跑一个短命令并收集输出；超时会杀掉子进程。 */
export function runCommand(command, args, { timeoutMs = DETECT_TIMEOUT_MS, cwd } = {}) {
  return new Promise((resolve, reject) => {
    let child
    try {
      child = spawn(command, args, {
        cwd,
        stdio: ['ignore', 'pipe', 'pipe'],
        windowsHide: true,
        shell: process.platform === 'win32',
      })
    } catch (error) {
      reject(error)
      return
    }
    let stdout = ''
    let stderr = ''
    let settled = false
    const timer = setTimeout(() => {
      if (settled) return
      settled = true
      try {
        child.kill('SIGKILL')
      } catch {
        // ignore
      }
      reject(new Error(`命令超时：${command} ${args.join(' ')}`))
    }, timeoutMs)
    child.stdout?.setEncoding('utf8')
    child.stderr?.setEncoding('utf8')
    child.stdout?.on('data', chunk => {
      stdout = (stdout + chunk).slice(0, 64_000)
    })
    child.stderr?.on('data', chunk => {
      stderr = (stderr + chunk).slice(0, 64_000)
    })
    child.on('error', error => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      reject(error)
    })
    child.on('exit', code => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      resolve({ code, stdout, stderr })
    })
  })
}

const firstVersion = text => {
  const match = /(\d+\.\d+\.\d+(?:[-+][\w.]+)?)/.exec(String(text || ''))
  return match ? match[1] : ''
}

function loginSummary(text) {
  const lines = String(text || '')
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
  if (!lines.length) return { loggedIn: false, text: '未知' }
  const status = lines.find(line => /logged in|登录/i.test(line)) || lines[0]
  const loggedIn = /logged in|已登录/i.test(status) && !/not logged in|未登录/i.test(status)
  return { loggedIn, text: status.slice(0, 200) }
}

export class CodexAgent {
  constructor(options = {}) {
    this.root = options.root || join(homedir(), '.dsh', 'task-board')
    this.file = join(this.root, 'agent.json')
    this.log = options.log || (() => {})
    this.board = options.board || null
    this.buildPrompt = options.buildPrompt || (() => '')
    this.workDirFor = options.workDirFor || (() => process.cwd())
    this.onTaskFinished = options.onTaskFinished || null
    this.config = normalizeConfig(null)
    this.status = { state: 'unknown', message: '尚未检测', checkedAt: 0, codex: null, adapter: null, models: [] }
    this.detecting = null
    this.active = new Map()
    this.waiting = []
    this.limit = 1
    this.disposed = false
  }

  async load() {
    try {
      const raw = await readFile(this.file, 'utf8')
      this.config = normalizeConfig(JSON.parse(raw))
    } catch (error) {
      if (error?.code !== 'ENOENT' && !(error instanceof SyntaxError)) this.log('task-board: 读取 Codex 配置失败', error)
    }
    return this
  }

  configSnapshot() {
    return { ...this.config }
  }

  statusSnapshot() {
    return {
      ...this.status,
      running: this.active.size,
      queued: this.waiting.length,
    }
  }

  async saveConfig(patch) {
    const next = normalizeConfig({ ...this.config, ...(patch || {}) })
    if (patch?.codexPath && !isAbsolute(next.codexPath)) return { ok: false, error: 'Codex 路径必须是绝对路径' }
    this.config = next
    await this.persist()
    this.status = { ...this.status, message: '配置已保存', checkedAt: Date.now() }
    return { ok: true, config: this.configSnapshot() }
  }

  async persist() {
    await mkdir(dirname(this.file), { recursive: true })
    const temp = `${this.file}.${process.pid}.tmp`
    await writeFile(temp, JSON.stringify(this.config, null, 2), 'utf8')
    await chmod(temp, 0o600).catch(() => {})
    await rename(temp, this.file)
  }

  /** 检测本地 Codex 与 ACP 适配器；结果缓存在 status 里。 */
  async detect({ force = false } = {}) {
    if (this.detecting) return this.detecting
    if (!force && this.status.checkedAt && Date.now() - this.status.checkedAt < 60_000) return this.status
    this.detecting = this.runDetect()
      .catch(error => {
        this.status = {
          state: 'error',
          message: messageOf(error),
          checkedAt: Date.now(),
          codex: null,
          adapter: null,
          models: [],
        }
        return this.status
      })
      .finally(() => {
        this.detecting = null
      })
    return this.detecting
  }

  async runDetect() {
    const codexPath = this.config.codexPath || (await findOnPath('codex'))
    let codex = null
    if (codexPath) {
      let version = ''
      let versionError = ''
      try {
        const result = await runCommand(codexPath, ['--version'])
        version = firstVersion(`${result.stdout} ${result.stderr}`)
        if (!version) versionError = `${result.stdout} ${result.stderr}`.trim().slice(0, 200)
      } catch (error) {
        versionError = messageOf(error)
      }
      let login = { loggedIn: false, text: '未知' }
      try {
        const result = await runCommand(codexPath, ['login', 'status'])
        login = loginSummary(`${result.stdout}\n${result.stderr}`)
        if (result.code !== 0 && !login.text) login = { loggedIn: false, text: `登录状态命令退出码 ${result.code}` }
      } catch (error) {
        login = { loggedIn: false, text: messageOf(error) }
      }
      codex = {
        path: codexPath,
        version,
        error: versionError,
        loggedIn: login.loggedIn,
        login: login.text,
        installed: Boolean(version),
      }
    }
    let adapter = null
    const manual = splitCommand(this.config.adapterCommand)
    if (manual.length) {
      const resolved =
        (await isExecutable(manual[0])) ? manual[0] : (await findOnPath(manual[0])) || ''
      adapter = { command: manual, resolved: resolved || manual[0], kind: 'custom', available: Boolean(resolved) }
    } else {
      const installed = await findOnPath('codex-acp')
      if (installed) adapter = { command: [installed], resolved: installed, kind: 'path', available: true }
      else {
        const npx = (await findOnPath('npx')) || (await findOnPath('npx.cmd'))
        if (npx) adapter = { command: [npx, '-y', '@agentclientprotocol/codex-acp'], resolved: npx, kind: 'npx', available: true }
      }
    }
    let state = 'ready'
    let message = 'Codex 可用'
    if (!codex) {
      state = 'no-codex'
      message = '未检测到 Codex CLI，请安装或填写路径'
    } else if (!codex.installed) {
      state = 'error'
      message = `Codex 无法运行：${codex.error || '版本未知'}`
    } else if (!adapter) {
      state = 'no-adapter'
      message = '缺少 ACP 适配器：请安装 codex-acp 或保留默认 npx 命令'
    } else if (!adapter.available) {
      state = 'no-adapter'
      message = `找不到自定义 ACP 命令：${adapter.resolved}`
    } else if (!codex.loggedIn) {
      state = 'no-login'
      message = 'Codex 未登录，请在终端执行 codex login'
    }
    this.status = { state, message, checkedAt: Date.now(), codex, adapter, models: this.status.models || [] }
    this.config.lastDetectedAt = this.status.checkedAt
    await this.persist().catch(() => {})
    return this.status
  }

  /** 起一个临时 ACP 连接，验证 initialize 与 session/new；不发提示词。 */
  async test() {
    await this.detect({ force: true })
    const status = this.status
    if (!status.adapter?.command?.length) return { ok: false, error: status.message || '没有可用的 ACP 适配器', status: this.statusSnapshot() }
    if (status.codex && !status.codex.loggedIn) {
      return { ok: false, error: 'Codex 未登录，请先在终端执行 codex login', status: this.statusSnapshot() }
    }
    const connection = new AcpConnection(status.adapter.command, this.connectionOptions())
    try {
      await connection.start()
      const init = await connection.initialize()
      const session = await connection.newSession({ cwd: await this.tempDirectory() })
      const models = collectModels(session)
      this.status = { ...this.status, models, checkedAt: Date.now(), message: '测试连接成功' }
      return {
        ok: true,
        protocolVersion: init?.protocolVersion ?? null,
        models,
        modes: Array.isArray(session?.modes?.availableModes) ? session.modes.availableModes.map(mode => mode.id) : [],
        status: this.statusSnapshot(),
      }
    } catch (error) {
      this.status = { ...this.status, state: 'error', message: messageOf(error), checkedAt: Date.now() }
      return { ok: false, error: describeError(error), status: this.statusSnapshot() }
    } finally {
      await connection.close({ graceMs: 1_000 }).catch(() => {})
    }
  }

  async tempDirectory() {
    const dir = join(tmpdir(), 'dsh-task-board-codex')
    await mkdir(dir, { recursive: true })
    return dir
  }

  connectionOptions() {
    const env = { NO_BROWSER: '1', INITIAL_AGENT_MODE: this.config.permissionMode }
    if (this.config.model) env.CODEX_CONFIG = JSON.stringify({ model: this.config.model })
    // 自动检测到的本机 Codex 也要显式传给适配器：npx 缓存里自带的 @openai/codex
    // 可能缺平台可执行依赖（缺 @openai/codex-<platform>），本机安装的才是完整的。
    const codexPath = this.config.codexPath || this.status.codex?.path || ''
    if (codexPath) env.CODEX_PATH = codexPath
    return {
      env,
      log: this.log,
      onStderr: chunk => {
        const text = String(chunk).trim()
        if (text) this.log(`task-board: codex-acp ${text.slice(0, 500)}`)
      },
      onUpdate: params => this.handleUpdate(params),
      onPermission: params => this.handlePermission(params),
    }
  }

  async start(task) {
    if (this.disposed) return { ok: false, error: '插件已卸载' }
    if (!task) return { ok: false, error: '任务不存在' }
    if (this.active.has(task.id) || this.waiting.includes(task.id)) return { ok: false, error: '这张卡正在执行' }
    const status = await this.detect()
    if (status.state !== 'ready') return { ok: false, error: status.message || 'Codex 不可用' }
    this.waiting.push(task.id)
    this.board?.markCodexQueued(task.id)
    this.drain()
    return { ok: true, queued: this.waiting.includes(task.id) }
  }

  drain() {
    while (!this.disposed && this.active.size < this.limit && this.waiting.length) {
      const id = this.waiting.shift()
      const task = this.board?.find(id)
      if (!task) continue
      this.runTask(task).catch(error => this.log('task-board: Codex 运行失败', error))
    }
  }

  async runTask(task) {
    const run = { connection: null, cancelled: false, finished: false, sessionId: '', timer: null, watchdog: null }
    this.active.set(task.id, run)
    this.board?.markCodexStarted(task.id, { model: this.config.model })
    try {
      const connection = new AcpConnection(this.status.adapter.command, this.connectionOptions())
      run.connection = connection
      await connection.start()
      const init = await connection.initialize()
      const authMethods = Array.isArray(init?.authMethods) ? init.authMethods : []
      if (authMethods.length && this.status.codex && !this.status.codex.loggedIn) {
        throw new AcpError('Codex 需要登录：请在终端执行 codex login')
      }
      const cwd = this.boardDirectory(task)
      const session = await connection.newSession({ cwd })
      run.sessionId = session.sessionId
      await this.applyModel(connection, session).catch(error => {
        this.log('task-board: 设置 Codex 模型失败，继续用默认模型', error)
      })
      this.board?.attachCodexSession(task.id, session.sessionId, this.config.model)
      if (run.cancelled) throw new AcpError('已停止')
      run.watchdog = setTimeout(() => {
        if (run.finished) return
        run.cancelled = true
        this.log('task-board: Codex 运行超时，取消')
        run.connection?.cancel(run.sessionId)
        setTimeout(() => {
          if (!run.finished) run.connection?.close({ graceMs: 500 }).catch(() => {})
        }, 10_000).unref?.()
      }, RUN_TIMEOUT_MS)
      run.watchdog.unref?.()
      const result = await connection.prompt({ sessionId: session.sessionId, text: this.buildPrompt(task) })
      if (run.finished) return
      run.finished = true
      if (run.cancelled || result.stopReason === 'cancelled') {
        this.board?.finishCodex(task.id, 'aborted')
      } else if (result.stopReason === 'end_turn') {
        this.board?.finishCodex(task.id, 'completed')
      } else {
        this.board?.finishCodex(task.id, 'error', `Codex 结束：${result.stopReason}`)
      }
    } catch (error) {
      if (run.finished) return
      run.finished = true
      if (run.cancelled || (error instanceof AcpError && error.code === 'cancelled')) {
        this.board?.finishCodex(task.id, 'aborted')
      } else {
        this.board?.finishCodex(task.id, 'error', describeError(error))
      }
    } finally {
      clearTimeout(run.watchdog)
      await run.connection?.close().catch(() => {})
      this.active.delete(task.id)
      this.drain()
      try {
        this.onTaskFinished?.(task.id)
      } catch (error) {
        this.log('task-board: 结束回调失败', error)
      }
    }
  }

  /** 通过 ACP 配置项选模型：`gpt-6-astra[medium]` 拆成基础模型 + 推理强度。 */
  async applyModel(connection, session) {
    const desired = this.config.model
    if (!desired) return
    const options = Array.isArray(session?.configOptions) ? session.configOptions : []
    const modelOption = options.find(option => option?.id === 'model')
    const match = /^(.*?)\[([^\]]+)\]$/.exec(desired)
    const base = match ? match[1] : desired
    const effort = match ? match[2] : ''
    const values = Array.isArray(modelOption?.options) ? modelOption.options.map(option => option.value) : []
    if (values.length && !values.includes(base)) {
      this.log(`task-board: Codex 没有模型 ${base}，可选：${values.join(', ')}`)
      return
    }
    await connection.setConfigOption(session.sessionId, 'model', base)
    if (effort) {
      const effortOption = options.find(option => option?.id === 'reasoning_effort')
      if (effortOption) await connection.setConfigOption(session.sessionId, 'reasoning_effort', effort)
    }
  }

  boardDirectory(task) {
    try {
      const dir = this.workDirFor(task)
      if (dir && isAbsolute(dir)) return dir
    } catch {
      // ignore
    }
    return process.cwd()
  }

  handleUpdate(params) {
    const update = params?.update
    if (!update || typeof update !== 'object') return
    const sessionId = typeof params?.sessionId === 'string' ? params.sessionId : ''
    const task = this.taskForSession(sessionId)
    if (!task) return
    switch (update.sessionUpdate) {
      case 'agent_thought_chunk':
        this.board?.codexThought(task.id)
        break
      case 'tool_call':
        this.board?.codexTool(task.id, {
          name: typeof update.title === 'string' ? update.title : typeof update.kind === 'string' ? update.kind : 'tool',
          status: typeof update.status === 'string' ? update.status : '',
        })
        break
      case 'tool_call_update':
        if (typeof update.title === 'string' && update.title) {
          this.board?.codexTool(task.id, { name: update.title, status: update.status || '' })
        }
        break
      case 'agent_message_chunk': {
        const content = update.content
        if (content?.type === 'text' && typeof content.text === 'string') this.board?.codexText(task.id, content.text)
        break
      }
      default:
        break
    }
  }

  taskForSession(sessionId) {
    if (!sessionId || !this.board) return null
    return this.board.tasks.find(task => task.executor === 'codex' && task.codex?.sessionId === sessionId) || null
  }

  handlePermission(params) {
    const options = Array.isArray(params?.options) ? params.options : []
    if (!this.config.autoApprove || this.config.permissionMode === 'read-only') {
      this.log('task-board: Codex 请求授权，但在当前权限设置下已拒绝')
      return { outcome: { outcome: 'cancelled' } }
    }
    const preferred =
      options.find(option => option?.kind === 'allow_once') ||
      options.find(option => option?.kind === 'allow_always') ||
      options.find(option => typeof option?.kind === 'string' && option.kind.startsWith('allow')) ||
      null
    if (!preferred) return { outcome: { outcome: 'cancelled' } }
    return { outcome: { outcome: 'selected', optionId: preferred.optionId } }
  }

  stop(taskId) {
    const queued = this.waiting.indexOf(taskId)
    if (queued >= 0) {
      this.waiting.splice(queued, 1)
      this.board?.finishCodex(taskId, 'aborted')
      return { ok: true }
    }
    const run = this.active.get(taskId)
    if (!run) return { ok: false, error: '这张卡没有在运行的 Codex 任务' }
    run.cancelled = true
    run.finished = true
    this.board?.finishCodex(taskId, 'aborted')
    try {
      if (run.sessionId) run.connection?.cancel(run.sessionId)
    } catch {
      // ignore
    }
    run.timer = setTimeout(() => {
      run.connection?.close({ graceMs: 500 }).catch(() => {})
    }, 3_000)
    run.timer.unref?.()
    return { ok: true }
  }

  isBusy(taskId) {
    return this.active.has(taskId) || this.waiting.includes(taskId)
  }

  async dispose() {
    this.disposed = true
    this.waiting = []
    for (const run of this.active.values()) {
      run.cancelled = true
      run.connection?.cancel(run.sessionId)
      await run.connection?.close({ graceMs: 500 }).catch(() => {})
    }
    this.active.clear()
  }
}

function collectModels(session) {
  const models = []
  const available = session?.models?.availableModels
  if (Array.isArray(available)) {
    for (const entry of available) {
      if (typeof entry?.modelId === 'string') models.push(entry.modelId)
      else if (typeof entry?.id === 'string') models.push(entry.id)
    }
  }
  const options = session?.configOptions
  if (Array.isArray(options)) {
    for (const option of options) {
      if (option?.id !== 'model') continue
      const values = option.options
      if (Array.isArray(values)) {
        for (const value of values) {
          if (typeof value?.value === 'string') models.push(value.value)
          else if (typeof value?.id === 'string') models.push(value.id)
        }
      }
    }
  }
  return [...new Set(models)]
}

/** 适配器/Codex 报错时补一句可操作提示。 */
export function describeError(error) {
  const message = messageOf(error)
  const detail = typeof error?.detail === 'string' ? error.detail.trim() : ''
  let hint = ''
  if (/auth|login|not logged/i.test(`${message} ${detail}`)) hint = '（请先在终端执行 codex login）'
  else if (/ENOENT|not found/i.test(`${message} ${detail}`)) hint = '（找不到可执行文件，检查 Codex/适配器路径）'
  else if (/timeout/i.test(message)) hint = '（适配器长时间无响应，首次使用可能需要下载）'
  return `${message}${hint}${detail ? `\n${detail.slice(-1500)}` : ''}`.trim()
}
