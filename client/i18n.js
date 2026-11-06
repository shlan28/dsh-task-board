// 面板文案：注册到宿主 locale 服务，跟随界面语言切换。
import React from 'react'

export const NS = 'task-board'

const zh = {
  'Task board': '任务看板',
  'Todo': '待办',
  'In progress': '进行中',
  'In review': '待验收',
  'Done': '已完成',
  'New task': '新建任务',
  'Search cards': '搜索任务',
  'All': '全部',
  'Active': '进行中',
  'To review': '待验收',
  'Clear done': '清空已完成',
  'No cards yet': '还没有任务',
  'Drop here': '放到这里',
  'Add a task': '添加任务',
  'Run': '开始执行',
  'Stop': '停止',
  'Open session': '打开会话',
  'Accept': '验收完成',
  'Mark done': '标记完成',
  'Back to todo': '退回待办',
  'Rerun': '重新执行',
  'Delete': '删除',
  'Cancel': '取消',
  'Create': '创建任务',
  'Save': '保存',
  'Title': '标题',
  'What needs to happen?': '要做什么？',
  'Notes': '说明',
  'Any details, links, or acceptance criteria.': '补充细节、链接或验收标准。',
  'Tag': '标签',
  'Column': '所在列',
  'Progress': '进度',
  'Queued': '排队中',
  'Thinking': '思考中',
  'Running {name}': '正在执行 {name}',
  'Writing result': '整理结果',
  'Waiting for review': '等待验收',
  'Run failed': '执行出错',
  'Stopped': '已停止',
  'No session yet': '尚未分配会话',
  'Latest result': '最新结果',
  'No result yet.': '还没有结果。',
  'A session is created the first time you run this card.': '第一次开始执行时会自动为这张卡创建一个会话。',
  'From a session': '来自会话',
  'Session': '会话',
  'Delete this card?': '确定删除这张卡吗？',
  'Card deleted': '已删除',
  'Card added': '已添加',
  'Dispatched to its session': '已派发到会话',
  'Stopped the run': '已停止执行',
  'Card accepted': '已验收',
  'Done cards cleared': '已清空完成的任务',
  'Just now': '刚刚',
  '{n}m ago': '{n} 分钟前',
  '{n}h ago': '{n} 小时前',
  '{n}d ago': '{n} 天前',
  'Today is {date}': '今天是 {date}',
  '{n} running': '{n} 个进行中',
  '{n} to review': '{n} 个待验收',
  'Task board overview': '任务看板概览',
  'Nothing matches this filter.': '没有符合筛选的任务。',
  'Run this card now': '立即执行这张卡',
  'Details': '详情',
  'Close': '关闭',
  'Created': '创建于',
  'Updated': '更新于',
  'Steps': '步骤',
  'Session {id}': '会话 {id}',
  '{n} cards': '{n} 张卡',
  'Description': '说明',
  'Delete twice to confirm': '再点一次确认删除',
  'Could not reach the board': '看板暂时不可用',
  'Retry': '重试',
  'Loading board…': '正在加载看板…',
  'No tasks': '没有任务',
}

const en = {
  'Task board': 'Task board',
  'Todo': 'Todo',
  'In progress': 'In progress',
  'In review': 'In review',
  'Done': 'Done',
  'New task': 'New task',
  'Search cards': 'Search cards',
  'All': 'All',
  'Active': 'Active',
  'To review': 'To review',
  'Clear done': 'Clear done',
  'No cards yet': 'No cards yet',
  'Drop here': 'Drop here',
  'Add a task': 'Add a task',
  'Run': 'Run',
  'Stop': 'Stop',
  'Open session': 'Open session',
  'Accept': 'Accept',
  'Mark done': 'Mark done',
  'Back to todo': 'Back to todo',
  'Rerun': 'Rerun',
  'Delete': 'Delete',
  'Cancel': 'Cancel',
  'Create': 'Create task',
  'Save': 'Save',
  'Title': 'Title',
  'What needs to happen?': 'What needs to happen?',
  'Notes': 'Notes',
  'Any details, links, or acceptance criteria.': 'Any details, links, or acceptance criteria.',
  'Tag': 'Tag',
  'Column': 'Column',
  'Progress': 'Progress',
  'Queued': 'Queued',
  'Thinking': 'Thinking',
  'Running {name}': 'Running {name}',
  'Writing result': 'Writing result',
  'Waiting for review': 'Waiting for review',
  'Run failed': 'Run failed',
  'Stopped': 'Stopped',
  'No session yet': 'No session yet',
  'Latest result': 'Latest result',
  'No result yet.': 'No result yet.',
  'A session is created the first time you run this card.': 'A session is created the first time you run this card.',
  'From a session': 'From a session',
  'Session': 'Session',
  'Delete this card?': 'Delete this card?',
  'Card deleted': 'Card deleted',
  'Card added': 'Card added',
  'Dispatched to its session': 'Dispatched to its session',
  'Stopped the run': 'Stopped the run',
  'Card accepted': 'Card accepted',
  'Done cards cleared': 'Done cards cleared',
  'Just now': 'Just now',
  '{n}m ago': '{n}m ago',
  '{n}h ago': '{n}h ago',
  '{n}d ago': '{n}d ago',
  'Today is {date}': 'Today is {date}',
  '{n} running': '{n} running',
  '{n} to review': '{n} to review',
  'Task board overview': 'Task board overview',
  'Nothing matches this filter.': 'Nothing matches this filter.',
  'Run this card now': 'Run this card now',
  'Details': 'Details',
  'Close': 'Close',
  'Created': 'Created',
  'Updated': 'Updated',
  'Steps': 'Steps',
  'Session {id}': 'Session {id}',
  '{n} cards': '{n} cards',
  'Description': 'Description',
  'Delete twice to confirm': 'Click again to delete',
  'Could not reach the board': 'Could not reach the board',
  'Retry': 'Retry',
  'Loading board…': 'Loading board…',
  'No tasks': 'No tasks',
}

let appCtx = null

export function bindClientContext(ctx) {
  appCtx = ctx
}

export function registerLocale(ctx) {
  return ctx.locale.register(NS, { en, zh, 'zh-CN': zh, 'zh-TW': zh })
}

export function getClientContext() {
  return appCtx
}

export function useT() {
  React.useSyncExternalStore(
    listener => appCtx.locale.subscribe(listener),
    () => appCtx.locale.getLocale().id,
    () => 'en',
  )
  return appCtx.locale.bind(NS)
}

export function localeId() {
  try {
    return appCtx?.locale?.getLocale?.().id || 'en'
  } catch {
    return 'en'
  }
}

export function formatRelative(timestamp, t) {
  if (!timestamp) return ''
  const diff = Math.max(0, Date.now() - timestamp)
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return t('Just now')
  if (minutes < 60) return t('{n}m ago', { n: minutes })
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return t('{n}h ago', { n: hours })
  return t('{n}d ago', { n: Math.floor(hours / 24) })
}

export function formatDateTime(timestamp, locale) {
  if (!timestamp) return ''
  try {
    return new Intl.DateTimeFormat(locale || localeId(), { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(timestamp))
  } catch {
    return new Date(timestamp).toLocaleString()
  }
}
