// Codex 执行者配置弹窗：检测本机 Codex、测试 ACP 连接、保存运行参数。
import React from 'react'
import { IconCheck, IconRefresh } from './icons.jsx'
import { actions, notify, useBoardState } from './store.js'

const PERMISSION_MODES = [
  { id: 'read-only', key: 'Read only' },
  { id: 'workspace-write', key: 'Workspace write (recommended)' },
  { id: 'agent-full-access', key: 'Full access' },
]

function statusLabel(status, t) {
  switch (status?.state) {
    case 'ready':
      return t('Codex available')
    case 'no-codex':
      return t('Codex missing')
    case 'no-login':
      return t('Codex not logged in')
    case 'no-adapter':
      return t('ACP adapter missing')
    case 'error':
      return t('Codex runtime error')
    default:
      return t('Not checked yet')
  }
}

export function CodexAgentDialog({ t }) {
  const state = useBoardState()
  const agent = state.agent
  const status = agent?.status
  const config = agent?.config || {}
  const [draft, setDraft] = React.useState(() => ({
    codexPath: config.codexPath || '',
    adapterCommand: config.adapterCommand || '',
    model: config.model || '',
    permissionMode: config.permissionMode || 'workspace-write',
    autoApprove: config.autoApprove !== false,
  }))
  const [advanced, setAdvanced] = React.useState(Boolean(config.adapterCommand))
  const [busy, setBusy] = React.useState('')
  const [message, setMessage] = React.useState(null)

  const update = patch => setDraft(current => ({ ...current, ...patch }))

  const showStatus = (status, fallback) => {
    if (!status) {
      setMessage({ text: fallback || t('No response from the host'), error: true })
      return
    }
    const ok = status.state === 'ready'
    setMessage({ text: fallback || status.message || statusLabel(status, t), error: !ok })
  }

  const detect = async () => {
    if (busy) return
    setBusy('detect')
    const result = await actions.detectAgent()
    setBusy('')
    showStatus(result?.agent?.status, result?.agent?.status?.message)
  }

  const test = async () => {
    if (busy) return
    setBusy('test')
    const result = await actions.testAgent()
    setBusy('')
    if (!result) return
    if (result.ok) {
      setMessage({
        text: result.models?.length ? `${t('Connection OK')} · ${t('Models')}: ${result.models.join(', ')}` : t('Connection OK'),
        error: false,
      })
    } else {
      setMessage({ text: result.error || t('Connection failed'), error: true })
    }
  }

  const save = async event => {
    event.preventDefault()
    if (busy) return
    setBusy('save')
    const result = await actions.saveAgent(draft)
    setBusy('')
    if (!result) return
    if (!result.ok) {
      setMessage({ text: result.error || t('Could not save'), error: true })
      return
    }
    showStatus(result.agent?.status, t('Codex config saved'))
    notify(t('Codex config saved'))
  }

  React.useEffect(() => {
    const checked = status?.checkedAt || 0
    if (!checked || Date.now() - checked > 5 * 60_000) void detect()
    // 只在打开弹窗时自动检测一次
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const tone = status?.state || 'unknown'
  const adapterCommand = status?.adapter?.command?.length ? status.adapter.command.join(' ') : ''
  const models = Array.isArray(status?.models) ? status.models : []
  const codex = status?.codex

  return React.createElement(
    'form',
    { className: 'tb-form tb-agent-form', onSubmit: save },
    React.createElement(
      'div',
      { className: `tb-agent-status is-${tone}` },
      React.createElement('span', { className: 'tb-agentdot' }),
      React.createElement(
        'div',
        { className: 'tb-agent-status-text' },
        React.createElement('b', null, statusLabel(status, t)),
        React.createElement('span', null, status?.message || t('Not checked yet')),
      ),
      busy === 'detect'
        ? React.createElement('span', { className: 'tb-agent-busy' }, t('Checking…'))
        : null,
    ),
    React.createElement(
      'dl',
      { className: 'tb-agent-facts' },
      React.createElement('dt', null, t('Installed at')),
      React.createElement('dd', null, codex?.path ? React.createElement('code', null, codex.path) : '—'),
      React.createElement('dt', null, t('Version')),
      React.createElement('dd', null, codex?.version || '—'),
      React.createElement('dt', null, t('Login')),
      React.createElement('dd', null, codex?.login || '—'),
      React.createElement('dt', null, t('ACP adapter')),
      React.createElement('dd', null, adapterCommand ? React.createElement('code', null, adapterCommand) : '—'),
    ),
    React.createElement(
      'label',
      { className: 'tb-field' },
      React.createElement('span', null, t('Codex CLI path')),
      React.createElement('input', {
        value: draft.codexPath,
        placeholder: t('Auto-detect'),
        onChange: event => update({ codexPath: event.target.value }),
      }),
      React.createElement('p', { className: 'tb-hint' }, t('Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.')),
    ),
    React.createElement(
      'label',
      { className: 'tb-field' },
      React.createElement('span', null, t('Default model')),
      React.createElement('input', {
        value: draft.model,
        list: 'tb-codex-models',
        placeholder: t('Codex default'),
        onChange: event => update({ model: event.target.value }),
      }),
      React.createElement(
        'datalist',
        { id: 'tb-codex-models' },
        models.map(model => React.createElement('option', { key: model, value: model })),
      ),
      React.createElement('p', { className: 'tb-hint' }, t('Leave empty to use the Codex default model.')),
    ),
    React.createElement(
      'label',
      { className: 'tb-field' },
      React.createElement('span', null, t('Run permission')),
      React.createElement(
        'select',
        {
          value: draft.permissionMode,
          onChange: event => update({ permissionMode: event.target.value }),
        },
        PERMISSION_MODES.map(mode =>
          React.createElement('option', { key: mode.id, value: mode.id }, t(mode.key)),
        ),
      ),
      React.createElement(
        'p',
        { className: 'tb-hint' },
        draft.permissionMode === 'agent-full-access'
          ? t('Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.')
          : t('Codex sandbox keeps runs inside the card workspace.'),
      ),
    ),
    React.createElement(
      'label',
      { className: 'tb-agent-check' },
      React.createElement('input', {
        type: 'checkbox',
        checked: draft.autoApprove !== false,
        onChange: event => update({ autoApprove: event.target.checked }),
      }),
      React.createElement(
        'span',
        null,
        React.createElement('b', null, t('Auto-approve tool calls')),
        React.createElement('small', null, t('Unattended cards need this. The Codex sandbox still applies.')),
      ),
    ),
    React.createElement(
      'button',
      {
        type: 'button',
        className: 'tb-agent-advanced',
        onClick: () => setAdvanced(value => !value),
      },
      advanced ? '−' : '+',
      ' ',
      t('Advanced'),
    ),
    advanced
      ? React.createElement(
          'label',
          { className: 'tb-field' },
          React.createElement('span', null, t('ACP adapter command')),
          React.createElement('input', {
            value: draft.adapterCommand,
            placeholder: 'npx -y @agentclientprotocol/codex-acp',
            onChange: event => update({ adapterCommand: event.target.value }),
          }),
          React.createElement('p', { className: 'tb-hint' }, t('Leave empty to use npx or a codex-acp already on PATH.')),
        )
      : null,
    message
      ? React.createElement(
          'p',
          { className: message.error ? 'tb-agent-message is-error' : 'tb-agent-message is-ok' },
          message.error ? null : React.createElement(IconCheck, { size: 14 }),
          message.text,
        )
      : null,
    React.createElement(
      'div',
      { className: 'tb-dialog-foot' },
      React.createElement(
        'button',
        { type: 'button', className: 'tb-btn', disabled: Boolean(busy), onClick: detect },
        React.createElement(IconRefresh, { size: 14 }),
        t('Recheck'),
      ),
      React.createElement(
        'button',
        { type: 'button', className: 'tb-btn', disabled: Boolean(busy), onClick: test },
        busy === 'test' ? t('Testing…') : t('Test connection'),
      ),
      React.createElement('span', { className: 'tb-spacer' }),
      React.createElement(
        'button',
        { type: 'submit', className: 'tb-btn is-primary', disabled: Boolean(busy) },
        busy === 'save' ? t('Saving…') : t('Save'),
      ),
    ),
  )
}
