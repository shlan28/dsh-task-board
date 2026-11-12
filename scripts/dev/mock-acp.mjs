#!/usr/bin/env node
// 开发用的假 ACP agent：不连 Codex、不花 token，用来验证看板的 Codex 执行链路。
// 用法：把看板的「高级 → ACP 适配器命令」设成 `node <本文件绝对路径>`。
import { createInterface } from 'node:readline'

const rl = createInterface({ input: process.stdin, crlfDelay: Infinity })
const sessionId = 'mock-session-1'
const delay = Number(process.env.MOCK_DELAY_MS || 60)
let permissionId = 100
let pendingPrompt = null
let cancelled = false
let permissionWaiter = null

const send = message => {
  process.stdout.write(`${JSON.stringify(message)}\n`)
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function emit(update) {
  send({ jsonrpc: '2.0', method: 'session/update', params: { sessionId, update } })
  await sleep(delay)
}

function finishPrompt(stopReason) {
  if (!pendingPrompt) return
  const id = pendingPrompt
  pendingPrompt = null
  send({ jsonrpc: '2.0', id, result: { stopReason } })
}

async function runPrompt() {
  const id = permissionId++
  send({
    jsonrpc: '2.0',
    id,
    method: 'session/request_permission',
    params: {
      sessionId,
      toolCall: { toolCallId: 'mock-tool', title: 'Run mock command', kind: 'execute', status: 'pending' },
      options: [
        { optionId: 'allow-once', name: 'Allow once', kind: 'allow_once' },
        { optionId: 'deny', name: 'Deny', kind: 'reject_once' },
      ],
    },
  })
  await new Promise(resolve => {
    permissionWaiter = resolve
  })
  if (cancelled) return finishPrompt('cancelled')
  await emit({ sessionUpdate: 'agent_thought_chunk', content: { type: 'text', text: 'mock thinking' } })
  await emit({ sessionUpdate: 'tool_call', toolCallId: 'mock-tool', title: 'Run mock command', kind: 'execute', status: 'in_progress' })
  await emit({ sessionUpdate: 'tool_call_update', toolCallId: 'mock-tool', status: 'completed' })
  await emit({ sessionUpdate: 'agent_message_chunk', content: { type: 'text', text: 'MOCK RESULT: ' } })
  await emit({ sessionUpdate: 'agent_message_chunk', content: { type: 'text', text: 'card executed over ACP' } })
  if (cancelled) return finishPrompt('cancelled')
  finishPrompt('end_turn')
}

rl.on('line', line => {
  const text = line.trim()
  if (!text) return
  const message = JSON.parse(text)
  if (message.id !== undefined && !message.method) {
    // 客户端对我们发起的权限请求的回答
    if (permissionWaiter) {
      const waiter = permissionWaiter
      permissionWaiter = null
      waiter(message)
    }
    return
  }
  switch (message.method) {
    case 'initialize':
      send({ jsonrpc: '2.0', id: message.id, result: { protocolVersion: 1, authMethods: [] } })
      break
    case 'session/new':
      send({
        jsonrpc: '2.0',
        id: message.id,
        result: {
          sessionId,
          models: { availableModels: [{ modelId: 'mock-model', name: 'Mock model' }] },
          modes: { currentModeId: 'workspace-write', availableModes: [{ id: 'workspace-write', name: 'Workspace write' }] },
        },
      })
      break
    case 'session/set_config_option':
      send({ jsonrpc: '2.0', id: message.id, result: {} })
      break
    case 'session/prompt':
      pendingPrompt = message.id
      cancelled = false
      void runPrompt()
      break
    case 'session/cancel':
      cancelled = true
      if (pendingPrompt) finishPrompt('cancelled')
      break
    default:
      if (message.id !== undefined) {
        send({ jsonrpc: '2.0', id: message.id, error: { code: -32601, message: `unsupported ${message.method}` } })
      }
      break
  }
})

process.on('SIGTERM', () => process.exit(0))
