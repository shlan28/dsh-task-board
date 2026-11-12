// 面板用到的图标：统一 24 视图、currentColor 描边。
import React from 'react'

function Svg({ size = 16, strokeWidth = 1.9, children, ...rest }) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      focusable: 'false',
      ...rest,
    },
    children,
  )
}

export const IconPlus = props => React.createElement(Svg, props, React.createElement('path', { d: 'M12 5v14M5 12h14' }))
export const IconPlay = props => React.createElement(Svg, props, React.createElement('path', { d: 'M8 5.5v13l11-6.5-11-6.5z', fill: 'currentColor', stroke: 'none' }))
export const IconStop = props => React.createElement(Svg, props, React.createElement('rect', { x: 7, y: 7, width: 10, height: 10, rx: 2, fill: 'currentColor', stroke: 'none' }))
export const IconCheck = props => React.createElement(Svg, props, React.createElement('path', { d: 'M5 12.5l4.2 4.2L19 7' }))
export const IconTrash = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M4 7h16' }),
  React.createElement('path', { d: 'M10 4h4l1 3H9l1-3z' }),
  React.createElement('path', { d: 'M6.5 7l.8 12.2A1.8 1.8 0 009.1 21h5.8a1.8 1.8 0 001.8-1.8L17.5 7' }),
  React.createElement('path', { d: 'M10 11v6M14 11v6' }))
export const IconExternal = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M14 4h6v6' }),
  React.createElement('path', { d: 'M20 4l-9 9' }),
  React.createElement('path', { d: 'M18 14v4.5A1.5 1.5 0 0116.5 20h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10' }))
export const IconSearch = props => React.createElement(Svg, props,
  React.createElement('circle', { cx: 11, cy: 11, r: 6.5 }),
  React.createElement('path', { d: 'M16 16l4 4' }))
export const IconX = props => React.createElement(Svg, props, React.createElement('path', { d: 'M6 6l12 12M18 6L6 18' }))
export const IconMore = props => React.createElement(Svg, props,
  React.createElement('circle', { cx: 5.5, cy: 12, r: 1.4, fill: 'currentColor', stroke: 'none' }),
  React.createElement('circle', { cx: 12, cy: 12, r: 1.4, fill: 'currentColor', stroke: 'none' }),
  React.createElement('circle', { cx: 18.5, cy: 12, r: 1.4, fill: 'currentColor', stroke: 'none' }))
export const IconChat = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M20 12a8 8 0 10-3.2 6.4L20 20l-1.1-3.4A7.9 7.9 0 0020 12z' }))
export const IconFolder = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M3.5 7.5a2 2 0 012-2h3.2l1.8 2h6.5a2 2 0 012 2v8a2 2 0 01-2 2h-11.5a2 2 0 01-2-2v-10z' }))
export const IconClock = props => React.createElement(Svg, props,
  React.createElement('circle', { cx: 12, cy: 12, r: 8.5 }),
  React.createElement('path', { d: 'M12 7.5V12l3 2' }))
export const IconSpark = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5z' }),
  React.createElement('path', { d: 'M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z' }))
export const IconChevron = props => React.createElement(Svg, props, React.createElement('path', { d: 'M9 6l6 6-6 6' }))
export const IconLayers = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M12 3.6l8.4 4.2-8.4 4.2-8.4-4.2 8.4-4.2z' }),
  React.createElement('path', { d: 'M4.2 12l7.8 3.9 7.8-3.9' }),
  React.createElement('path', { d: 'M4.2 16.2l7.8 3.9 7.8-3.9' }))
export const IconRefresh = props => React.createElement(Svg, props,
  React.createElement('path', { d: 'M20 11a8 8 0 10-2.6 6.3' }),
  React.createElement('path', { d: 'M20 5v6h-6' }))

export function IconKanban({ size = 22, active = false }) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: active ? 2.1 : 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      focusable: 'false',
    },
    React.createElement('rect', { x: 3, y: 4, width: 18, height: 16, rx: 3.4 }),
    React.createElement('path', { d: 'M8.2 8.2v7.6M12 8.2v4.6M15.8 8.2v5.6' }),
  )
}

export function IconSparkleAvatar({ size = 26 }) {
  return React.createElement(
    'span',
    { className: 'tb-avatar', style: { width: size, height: size }, 'aria-hidden': 'true' },
    React.createElement(
      'svg',
      { width: size * 0.58, height: size * 0.58, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      React.createElement('path', { d: 'M12 4l1.7 4.6L18 10.3l-4.3 1.7L12 16.6l-1.7-4.6L6 10.3l4.3-1.7L12 4z' }),
    ),
  )
}
