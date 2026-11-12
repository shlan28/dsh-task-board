// 面板状态：Host 看板快照的本地镜像 + 只属于界面的筛选、弹窗和提示。
import React from 'react'

const BASE = '/task-board'
const COLUMNS = ['todo', 'doing', 'review', 'done']
export const DEFAULT_SPACE_ID = 'default'

let snapshot = {
  tasks: [],
  columns: COLUMNS,
  revision: -1,
  stamp: '',
  loaded: false,
  error: null,
  filter: 'all',
  query: '',
  dialog: null,
  detailId: null,
  toast: null,
  dragging: null,
  spaces: [],
  activeSpaceId: '',
  spacesRevision: '',
  workspaces: [],
  defaultWorkspacePath: '',
  workspacesRevision: '',
}

const listeners = new Set()

export function getSnapshot() {
  return snapshot
}

export function setState(patch) {
  snapshot = { ...snapshot, ...(typeof patch === 'function' ? patch(snapshot) : patch) }
  listeners.forEach(listener => listener())
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useBoardState() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

async function request(path, init) {
  const response = await fetch(BASE + path, {
    cache: 'no-store',
    ...init,
    headers: { ...(init?.body ? { 'content-type': 'application/json' } : {}), ...(init?.headers || {}) },
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data?.error || `HTTP ${response.status}`)
  return data
}

export function notify(text, { error = false } = {}) {
  setState({ toast: { text, error, key: Date.now() } })
}

export async function refresh() {
  try {
    const data = await request('/state')
    const revision = data?.revision ?? 0
    const stamp = `${revision}:${data?.schedulesRevision ?? ''}:${data?.workspacesRevision ?? ''}:${data?.spacesRevision ?? ''}`
    if (snapshot.loaded && stamp === snapshot.stamp && !snapshot.error) return true
    setState({
      tasks: Array.isArray(data?.tasks) ? data.tasks : [],
      columns: Array.isArray(data?.columns) && data.columns.length ? data.columns : COLUMNS,
      spaces: Array.isArray(data?.spaces) ? data.spaces : [],
      activeSpaceId: typeof data?.activeSpaceId === 'string' ? data.activeSpaceId : '',
      spacesRevision: typeof data?.spacesRevision === 'string' ? data.spacesRevision : '',
      workspaces: Array.isArray(data?.workspaces) ? data.workspaces : [],
      defaultWorkspacePath: typeof data?.defaultWorkspacePath === 'string' ? data.defaultWorkspacePath : '',
      workspacesRevision: typeof data?.workspacesRevision === 'string' ? data.workspacesRevision : '',
      revision,
      stamp,
      loaded: true,
      error: null,
    })
    return true
  } catch (error) {
    setState({ loaded: true, error: error?.message || String(error) })
    return false
  }
}

/** 执行一个看板操作；失败时提示并返回 null。 */
export async function act(op, payload = {}) {
  try {
    const data = await request('/op', { method: 'POST', body: JSON.stringify({ op, ...payload }) })
    if (data?.state) {
      const revision = data.state.revision ?? snapshot.revision
      setState({
        tasks: Array.isArray(data.state.tasks) ? data.state.tasks : snapshot.tasks,
        spaces: Array.isArray(data.state.spaces) ? data.state.spaces : snapshot.spaces,
        activeSpaceId:
          typeof data.state.activeSpaceId === 'string' ? data.state.activeSpaceId : snapshot.activeSpaceId,
        spacesRevision:
          typeof data.state.spacesRevision === 'string' ? data.state.spacesRevision : snapshot.spacesRevision,
        workspaces: Array.isArray(data.state.workspaces) ? data.state.workspaces : snapshot.workspaces,
        defaultWorkspacePath:
          typeof data.state.defaultWorkspacePath === 'string' ? data.state.defaultWorkspacePath : snapshot.defaultWorkspacePath,
        workspacesRevision:
          typeof data.state.workspacesRevision === 'string' ? data.state.workspacesRevision : snapshot.workspacesRevision,
        revision,
        stamp: `${revision}:${data.state.schedulesRevision ?? ''}:${data.state.workspacesRevision ?? ''}:${data.state.spacesRevision ?? ''}`,
        loaded: true,
        error: null,
      })
    }
    if (!data?.ok) throw new Error(data?.error || '操作失败')
    return data
  } catch (error) {
    notify(error?.message || String(error), { error: true })
    return null
  }
}

export const actions = {
  add: payload => act('add', payload),
  update: (id, patch) => act('update', { id, ...patch }),
  move: (id, column) => act('move', { id, column }),
  dispatch: id => act('dispatch', { id }),
  stop: id => act('stop', { id }),
  accept: id => act('accept', { id }),
  remove: id => act('remove', { id }),
  clearDone: spaceId => act('clearDone', spaceId ? { spaceId } : {}),
  addSpace: name => act('addSpace', { name }),
  removeSpace: id => act('removeSpace', { id }),
  selectSpace: id => act('selectSpace', { id }),
}

/** 切换空间时收起详情抽屉，避免看着别的空间里的卡。 */
export async function selectSpace(id) {
  if (!id || snapshot.activeSpaceId === id) return null
  setState({ detailId: null })
  return actions.selectSpace(id)
}

export function setFilter(filter) {
  setState({ filter })
}

export function setQuery(query) {
  setState({ query })
}

export function openAddDialog(column = 'todo') {
  setState({ dialog: { kind: 'task', column } })
}

export function openSpaceDialog() {
  setState({ dialog: { kind: 'space' } })
}

export function openRemoveSpaceDialog(id) {
  setState({ dialog: { kind: 'remove-space', id } })
}

export function closeDialog() {
  setState({ dialog: null })
}

export function openDetail(id) {
  setState({ detailId: id })
}

export function closeDetail() {
  setState({ detailId: null })
}
