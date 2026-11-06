// 任务看板浏览器半片：侧栏入口 + main 全局面板。
import React from 'react'
import { BoardPanel } from './app.jsx'
import { bindClientContext, NS, registerLocale } from './i18n.js'
import { IconKanban } from './icons.jsx'

const PANEL_ID = 'task-board'

function SidebarIcon({ size = 22, active = false }) {
  return React.createElement(IconKanban, { size, active })
}

export const inject = ['slots', 'locale']

export function apply(ctx) {
  bindClientContext(ctx)
  ctx.effect(() => registerLocale(ctx), 'task-board: locale')
  const t = ctx.locale.bind(NS)

  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_ID }, BoardPanel))
  ctx.slots.inject('sidebar.panellist', () =>
    ctx.slots.register(
      {
        name: 'sidebar.panellist',
        id: PANEL_ID,
        order: 12,
        label: () => t('Task board'),
      },
      SidebarIcon,
    ),
  )
}
