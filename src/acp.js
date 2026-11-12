// 零依赖的 ACP（Agent Client Protocol）客户端：spawn 一个 stdio ACP agent，
// 用 NDJSON 的 JSON-RPC 收发消息。看板只用它跑 Codex 适配器。
import { spawn } from 'node:child_process'
import { createInterface } from 'node:readline'

const DEFAULT_TIMEOUT = 60_000
const STDERR_LIMIT = 16_384

export class AcpError extends Error {
  constructor(message, { code = '', detail = '' } = {}) {
    super(message)
    this.name = 'AcpError'
    this.code = code
    this.detail = detail
  }
}

const messageOf = error => (error?.message ? String(error.message) : String(error ?? '未知错误'))

/**
 * 一个 ACP 连接对应一个子进程。用法：
 *   const conn = new AcpConnection(command, options)
 *   await conn.start()
 *   await conn.initialize()
 *   const sessionId = await conn.newSession({ cwd })
 *   const stopReason = await conn.prompt({ sessionId, text })
 */
export class AcpConnection {
  constructor(command, options = {}) {
    this.command = command
    this.options = options
    this.child = null
    this.pending = new Map()
    this.nextId = 1
    this.closed = false
    this.exit = null
    this.resolveExit = null
    this.stderr = ''
    this.sessionId = ''
  }

  get pid() {
    return this.child?.pid ?? null
  }

  async start() {
    let child
    try {
      child = spawn(this.command[0], this.command.slice(1), {
        cwd: this.options.cwd || undefined,
        env: { ...process.env, ...(this.options.env || {}) },
        stdio: ['pipe', 'pipe', 'pipe'],
        windowsHide: true,
        shell: process.platform === 'win32',
      })
    } catch (error) {
      throw new AcpError(`无法启动 ACP 适配器：${messageOf(error)}`)
    }
    this.child = child
    this.exit = new Promise(resolve => {
      this.resolveExit = resolve
    })
    const reader = createInterface({ input: child.stdout, crlfDelay: Infinity })
    reader.on('line', line => this.handleLine(line))
    child.stderr.setEncoding('utf8')
    child.stderr.on('data', chunk => {
      this.stderr = (this.stderr + chunk).slice(-STDERR_LIMIT)
      this.options.onStderr?.(chunk)
    })
    child.on('error', error => {
      this.failAll(new AcpError(`ACP 适配器启动失败：${messageOf(error)}`, { detail: this.stderrTail() }))
    })
    child.on('exit', (code, signal) => {
      this.closed = true
      this.failAll(
        new AcpError(`ACP 适配器已退出（${signal ? `信号 ${signal}` : `退出码 ${code}`}）`, {
          code: 'exited',
          detail: this.stderrTail(),
        }),
      )
      this.resolveExit?.()
    })
    child.stdin.on('error', () => {})
    return this
  }

  stderrTail() {
    return this.stderr.trim().slice(-4000)
  }

  handleLine(line) {
    const text = line.trim()
    if (!text) return
    let message
    try {
      message = JSON.parse(text)
    } catch {
      this.options.log?.('task-board: 忽略无法解析的 ACP 消息', text.slice(0, 200))
      return
    }
    if (message?.method) {
      if (message.id === undefined || message.id === null) {
        this.handleNotification(message.method, message.params)
        return
      }
      this.handleRequest(message).catch(error => {
        this.options.log?.('task-board: 处理 ACP 请求失败', error)
      })
      return
    }
    if (message?.id === undefined) return
    const pending = this.pending.get(message.id)
    if (!pending) return
    this.pending.delete(message.id)
    clearTimeout(pending.timer)
    if (message.error) {
      pending.reject(
        new AcpError(messageOf(message.error), {
          code: typeof message.error.code === 'string' ? message.error.code : String(message.error.code ?? ''),
          detail: this.stderrTail(),
        }),
      )
      return
    }
    pending.resolve(message.result)
  }

  handleNotification(method, params) {
    if (method === 'session/update') this.options.onUpdate?.(params)
  }

  async handleRequest(message) {
    const { id, method, params } = message
    try {
      let result
      if (method === 'session/request_permission') {
        result = this.options.onPermission?.(params) ?? { outcome: { outcome: 'cancelled' } }
      } else {
        throw new AcpError(`客户端不支持 ${method}`)
      }
      this.send({ jsonrpc: '2.0', id, result })
    } catch (error) {
      this.send({
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: messageOf(error) },
      })
    }
  }

  send(message) {
    if (!this.child || this.closed) throw new AcpError('ACP 连接已关闭')
    try {
      this.child.stdin.write(`${JSON.stringify(message)}\n`)
    } catch (error) {
      throw new AcpError(`写入 ACP 适配器失败：${messageOf(error)}`)
    }
  }

  request(method, params, { timeoutMs = DEFAULT_TIMEOUT } = {}) {
    if (this.closed) return Promise.reject(new AcpError('ACP 连接已关闭', { code: 'closed' }))
    const id = this.nextId++
    return new Promise((resolve, reject) => {
      const timer = timeoutMs
        ? setTimeout(() => {
            this.pending.delete(id)
            reject(new AcpError(`ACP 请求超时：${method}`, { code: 'timeout', detail: this.stderrTail() }))
          }, timeoutMs)
        : null
      this.pending.set(id, { resolve, reject, timer, method })
      try {
        this.send({ jsonrpc: '2.0', id, method, params })
      } catch (error) {
        this.pending.delete(id)
        if (timer) clearTimeout(timer)
        reject(error)
      }
    })
  }

  notify(method, params) {
    this.send({ jsonrpc: '2.0', method, params })
  }

  async initialize({ clientCapabilities } = {}) {
    const result = await this.request('initialize', {
      protocolVersion: 1,
      clientCapabilities: clientCapabilities || { fs: { readTextFile: false, writeTextFile: false } },
    })
    return result ?? {}
  }

  async newSession({ cwd, mcpServers = [] } = {}) {
    const result = await this.request('session/new', { cwd, mcpServers })
    const sessionId = typeof result?.sessionId === 'string' ? result.sessionId : ''
    if (!sessionId) throw new AcpError('ACP session/new 没有返回 sessionId', { detail: this.stderrTail() })
    this.sessionId = sessionId
    return { sessionId, ...result }
  }

  async prompt({ sessionId, text, timeoutMs = 0 }) {
    const result = await this.request(
      'session/prompt',
      { sessionId, prompt: [{ type: 'text', text }] },
      { timeoutMs },
    )
    return {
      stopReason: typeof result?.stopReason === 'string' ? result.stopReason : 'end_turn',
      usage: result?.usage ?? null,
    }
  }

  cancel(sessionId) {
    if (this.closed) return
    try {
      this.notify('session/cancel', { sessionId })
    } catch {
      // 取消失败就交给 kill
    }
  }

  async setConfigOption(sessionId, configId, value) {
    const result = await this.request('session/set_config_option', { sessionId, configId, value })
    return result ?? {}
  }

  failAll(error) {
    for (const [id, pending] of this.pending) {
      clearTimeout(pending.timer)
      pending.reject(error)
      this.pending.delete(id)
    }
  }

  /** 先礼后兵：关 stdin → SIGTERM → SIGKILL。 */
  async close({ graceMs = 3_000 } = {}) {
    if (!this.child) return
    const child = this.child
    try {
      child.stdin.end()
    } catch {
      // ignore
    }
    if (child.exitCode !== null || child.signalCode !== null) {
      this.closed = true
      return
    }
    child.kill('SIGTERM')
    const timer = setTimeout(() => {
      try {
        if (child.exitCode === null) child.kill('SIGKILL')
      } catch {
        // ignore
      }
    }, graceMs)
    timer.unref?.()
    await Promise.race([this.exit, new Promise(resolve => setTimeout(resolve, graceMs + 2_000))])
    clearTimeout(timer)
    this.closed = true
  }
}
