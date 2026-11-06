// 面板的通用零件：图标按钮、进度点、弹层、提示。
import React from 'react'
import { useT } from './i18n.js'
import { IconX, IconCheck } from './icons.jsx'

export function IconButton({ icon: Icon, label, onClick, disabled = false, tone = '', className = '' }) {
  return React.createElement(
    'button',
    {
      type: 'button',
      className: `tb-iconbtn ${tone ? `is-${tone}` : ''} ${className}`.trim(),
      onClick: event => {
        event.stopPropagation()
        onClick?.(event)
      },
      disabled,
      title: label,
      'aria-label': label,
    },
    React.createElement(Icon, { size: 16 }),
  )
}

export function ProgressDots({ value = 0, segments = 10 }) {
  const filled = Math.round((Math.max(0, Math.min(100, value)) / 100) * segments)
  return React.createElement(
    'div',
    { className: 'tb-dots', role: 'img', 'aria-label': `${value}%` },
    Array.from({ length: segments }, (_, index) =>
      React.createElement('span', { key: index, className: index < filled ? 'is-on' : '' }),
    ),
  )
}

export function StatusPill({ column, label, accent }) {
  return React.createElement(
    'span',
    { className: 'tb-status', style: accent ? { '--tb-accent': accent } : undefined },
    React.createElement('i', null),
    label,
  )
}

export function Modal({ title, onClose, children, footer, width = 480, side = false }) {
  const t = useT()
  const titleId = React.useId()
  React.useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  return React.createElement(
    'div',
    {
      className: side ? 'tb-scrim is-side' : 'tb-scrim',
      onPointerDown: event => {
        if (event.target === event.currentTarget) onClose()
      },
    },
    React.createElement(
      'div',
      {
        className: side ? 'tb-sheet' : 'tb-dialog',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': titleId,
        style: { width: side ? undefined : width },
      },
      React.createElement(
        'header',
        { className: 'tb-dialog-head' },
        React.createElement('h2', { id: titleId }, title),
        React.createElement(IconButton, { icon: IconX, label: t('Close'), onClick: onClose }),
      ),
      React.createElement('div', { className: 'tb-dialog-body' }, children),
      footer ? React.createElement('footer', { className: 'tb-dialog-foot' }, footer) : null,
    ),
  )
}

export function Toast({ toast, onClose }) {
  const closeRef = React.useRef(onClose)
  closeRef.current = onClose
  React.useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => closeRef.current(), toast.error ? 4200 : 2600)
    return () => clearTimeout(timer)
  }, [toast])
  if (!toast) return null
  return React.createElement(
    'div',
    { className: `tb-toast ${toast.error ? 'is-error' : ''}`, role: 'status', key: toast.key },
    toast.error ? null : React.createElement(IconCheck, { size: 15 }),
    React.createElement('span', null, toast.text),
  )
}
