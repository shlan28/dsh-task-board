// 任务看板主面板：页头、四列看板、卡片、新建与详情。
import React from 'react'
import { formatDateTime, formatRelative, getClientContext, localeId, useT } from './i18n.js'
import {
  IconChat,
  IconClock,
  IconExternal,
  IconPlay,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconSpark,
  IconSparkleAvatar,
  IconStop,
  IconTrash,
  IconX,
} from './icons.jsx'
import css from './styles.css'
import { actions, closeDetail, closeDialog, notify, openAddDialog, openDetail, refresh, setFilter, setQuery, setState, useBoardState } from './store.js'
import { IconButton, Modal, ProgressDots, StatusPill, Toast } from './ui.jsx'

const COLUMN_META = {
  todo: { key: 'Todo', accent: '#8ea6f4' },
  doing: { key: 'In progress', accent: '#f0b07c' },
  review: { key: 'In review', accent: '#ef93b7' },
  done: { key: 'Done', accent: '#74cbaa' },
}

const FILTERS = [
  { id: 'all', key: 'All' },
  { id: 'active', key: 'Active' },
  { id: 'review', key: 'To review' },
]

const WEEKDAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
const WEEKDAY_LABEL = { MO: 'Mon', TU: 'Tue', WE: 'Wed', TH: 'Thu', FR: 'Fri', SA: 'Sat', SU: 'Sun' }
const FREQUENCIES = [
  { id: 'hourly', key: 'Hourly' },
  { id: 'daily', key: 'Daily' },
  { id: 'weekly', key: 'Weekly' },
]
const HOUR_MINUTES = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

function browserTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  } catch {
    return ''
  }
}

function todayWeekday() {
  const day = new Date().getDay()
  return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][day] || 'MO'
}

function snapMinute(time) {
  const minute = Number(String(time || '09:00').slice(3, 5)) || 0
  return String((Math.round(minute / 5) * 5) % 60).padStart(2, '0')
}

/** 规则的中文/英文短说明，卡片和详情共用。 */
function automationLabel(automation, t) {
  if (!automation) return ''
  const time = automation.time || '09:00'
  if (automation.frequency === 'hourly') return t('Every hour at :{minute}', { minute: time.slice(3, 5) })
  if (automation.frequency === 'weekly') {
    const days = automation.weekdays?.length ? automation.weekdays : ['MO']
    return t('Weekly on {days} at {time}', { days: days.map(day => t(WEEKDAY_LABEL[day])).join(' '), time })
  }
  if (automation.frequency === 'daily') return t('Daily at {time}', { time })
  return automation.rrule ? t('Custom schedule') : t('Scheduled')
}

function automationPayload(value) {
  return {
    frequency: value.frequency,
    time: value.time,
    weekdays: value.frequency === 'weekly' ? value.weekdays : [],
    timeZone: browserTimeZone(),
  }
}

function defaultAutomation() {
  return { frequency: 'daily', time: '09:00', weekdays: [todayWeekday()] }
}

function AutomationFields({ t, value, onChange }) {
  const frequency = value.frequency || 'daily'
  const weekdays = Array.isArray(value.weekdays) ? value.weekdays : []
  const toggleDay = day => {
    const next = weekdays.includes(day) ? weekdays.filter(entry => entry !== day) : [...weekdays, day]
    onChange({ weekdays: next.length ? WEEKDAYS.filter(entry => next.includes(entry)) : [] })
  }
  const pickFrequency = id => {
    if (id === 'hourly') onChange({ frequency: id, time: `00:${snapMinute(value.time)}` })
    else onChange({ frequency: id, time: frequency === 'hourly' ? '09:00' : value.time || '09:00' })
  }
  return React.createElement(
    'div',
    { className: 'tb-auto-editor' },
    React.createElement(
      'div',
      { className: 'tb-seg' },
      FREQUENCIES.map(entry =>
        React.createElement(
          'button',
          {
            key: entry.id,
            type: 'button',
            className: frequency === entry.id ? 'is-on' : '',
            onClick: () => pickFrequency(entry.id),
          },
          t(entry.key),
        ),
      ),
    ),
    frequency === 'weekly'
      ? React.createElement(
          'div',
          { className: 'tb-weekdays', role: 'group', 'aria-label': t('Days') },
          WEEKDAYS.map(day =>
            React.createElement(
              'button',
              {
                key: day,
                type: 'button',
                className: weekdays.includes(day) ? 'is-on' : '',
                'aria-pressed': weekdays.includes(day),
                onClick: () => toggleDay(day),
              },
              t(WEEKDAY_LABEL[day]),
            ),
          ),
        )
      : null,
    frequency === 'hourly'
      ? React.createElement(
          'label',
          { className: 'tb-field tb-auto-time' },
          React.createElement('span', null, t('Minute')),
          React.createElement(
            'select',
            {
              value: String(value.time || '00:00').slice(3, 5),
              onChange: event => onChange({ time: `00:${event.target.value}` }),
            },
            HOUR_MINUTES.map(minute => React.createElement('option', { key: minute, value: minute }, `:${minute}`)),
          ),
        )
      : React.createElement(
          'label',
          { className: 'tb-field tb-auto-time' },
          React.createElement('span', null, t('Time')),
          React.createElement('input', {
            type: 'time',
            value: value.time || '09:00',
            onChange: event => onChange({ time: event.target.value || '09:00' }),
          }),
        ),
    React.createElement('p', { className: 'tb-hint' }, t('The card runs on its own and lands in review with the latest result.')),
  )
}

function isRunning(task) {
  if (typeof task.running === 'boolean') return task.running
  return task.column === 'doing'
}

function phaseLabel(task, t) {
  switch (task.phase) {
    case 'queued':
      return t('Queued')
    case 'thinking':
      return t('Thinking')
    case 'tool':
      return t('Running {name}', { name: task.toolName || 'tool' })
    case 'writing':
      return t('Writing result')
    case 'review':
      return t('Waiting for review')
    case 'error':
      return t('Run failed')
    case 'stopped':
      return t('Stopped')
    default:
      return ''
  }
}

export function openSessionById(sessionId) {
  if (!sessionId) return
  try {
    const ui = getClientContext()?.get('uiWorkspace')
    if (ui?.openSession) ui.openSession(sessionId)
    else notify('This deployment cannot open sessions', { error: true })
  } catch (error) {
    notify(error?.message || String(error), { error: true })
  }
}

function Card({ task, t }) {
  const running = isRunning(task)
  const accent = COLUMN_META[task.column]?.accent
  const phase = phaseLabel(task, t)
  return React.createElement(
    'article',
    {
      className: `tb-card ${running ? 'is-running' : ''}`,
      draggable: true,
      style: { '--tb-accent': accent },
      tabIndex: 0,
      'aria-label': task.title,
      onClick: () => openDetail(task.id),
      onKeyDown: event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openDetail(task.id)
        }
      },
      onDragStart: event => {
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('text/task-id', task.id)
        event.currentTarget.classList.add('is-dragging')
      },
      onDragEnd: event => event.currentTarget.classList.remove('is-dragging'),
    },
    React.createElement(
      'div',
      { className: 'tb-card-chips' },
      task.tag ? React.createElement('span', { className: 'tb-chip' }, `#${task.tag}`) : null,
      task.automation
        ? React.createElement(
            'span',
            {
              className: `tb-chip is-time ${task.automation.active ? '' : 'is-muted'}`,
              title: automationLabel(task.automation, t),
            },
            React.createElement(IconClock, { size: 11 }),
            automationLabel(task.automation, t),
          )
        : null,
      task.source === 'session'
        ? React.createElement('span', { className: 'tb-chip is-quiet' }, React.createElement(IconChat, { size: 11 }), t('From a session'))
        : task.sessionId
          ? React.createElement('span', { className: 'tb-chip is-quiet' }, React.createElement(IconChat, { size: 11 }), t('Session'))
          : null,
    ),
    React.createElement('h3', { className: 'tb-card-title' }, task.title),
    task.note ? React.createElement('p', { className: 'tb-card-note' }, task.note) : null,
    running
      ? React.createElement(
          'div',
          { className: 'tb-card-live' },
          React.createElement('span', { className: 'tb-pulse' }),
          React.createElement('span', null, phase),
          task.steps ? React.createElement('span', { className: 'tb-steps' }, `· ${task.steps}`) : null,
        )
      : null,
    React.createElement(
      'div',
      { className: 'tb-card-progress' },
      React.createElement(
        'div',
        { className: 'tb-progress-top' },
        React.createElement('span', null, t('Progress')),
        React.createElement('b', null, `${task.progress}%`),
      ),
      React.createElement(ProgressDots, { value: task.progress }),
    ),
    React.createElement(
      'footer',
      { className: 'tb-card-foot' },
      React.createElement(IconSparkleAvatar, { size: 24 }),
      React.createElement('span', { className: 'tb-time' }, formatRelative(task.updatedAt, t)),
      React.createElement('span', { className: 'tb-spacer' }),
      task.sessionId
        ? React.createElement(IconButton, {
            icon: IconExternal,
            label: t('Open session'),
            onClick: () => openSessionById(task.sessionId),
          })
        : null,
      running
        ? React.createElement(IconButton, {
            icon: IconStop,
            label: t('Stop'),
            onClick: async () => {
              const result = await actions.stop(task.id)
              if (result) notify(t('Stopped the run'))
            },
          })
        : React.createElement(IconButton, {
            icon: IconPlay,
            label: task.sessionId ? t('Rerun') : t('Run'),
            onClick: async () => {
              const result = await actions.dispatch(task.id)
              if (result) notify(t('Dispatched to its session'))
            },
          }),
    ),
  )
}

function Column({ column, tasks, total, t }) {
  const meta = COLUMN_META[column]
  const [over, setOver] = React.useState(false)
  return React.createElement(
    'section',
    {
      className: `tb-col ${over ? 'is-over' : ''}`,
      'data-column': column,
      style: { '--tb-accent': meta.accent },
      onDragOver: event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
        if (!over) setOver(true)
      },
      onDragLeave: event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOver(false)
      },
      onDrop: event => {
        event.preventDefault()
        setOver(false)
        const id = event.dataTransfer.getData('text/task-id')
        if (id) actions.move(id, column)
      },
    },
    React.createElement(
      'header',
      { className: 'tb-col-head' },
      React.createElement('span', { className: 'tb-col-dot' }),
      React.createElement('h2', null, t(meta.key)),
      React.createElement('span', { className: 'tb-col-count' }, total),
      React.createElement('span', { className: 'tb-spacer' }),
      column === 'done' && total
        ? React.createElement(IconButton, {
            icon: IconTrash,
            label: t('Clear done'),
            onClick: async () => {
              const result = await actions.clearDone()
              if (result) notify(t('Done cards cleared'))
            },
          })
        : null,
      React.createElement(IconButton, { icon: IconPlus, label: t('Add a task'), onClick: () => openAddDialog(column) }),
    ),
    React.createElement(
      'div',
      { className: 'tb-col-body' },
      tasks.map(task => React.createElement(Card, { key: task.id, task, t })),
      total === 0 ? React.createElement('div', { className: 'tb-empty' }, t('No cards yet')) : null,
    ),
  )
}

function Header({ t, tasks, query, filter }) {
  const now = new Date()
  const locale = localeId()
  let month = ''
  let day = ''
  try {
    month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(now)
    day = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', weekday: 'long' }).format(now)
  } catch {
    month = ''
    day = now.toDateString()
  }
  const running = tasks.filter(task => task.column === 'doing').length
  const review = tasks.filter(task => task.column === 'review').length
  return React.createElement(
    'header',
    { className: 'tb-head' },
    React.createElement(
      'div',
      { className: 'tb-head-title' },
      React.createElement('span', { className: 'tb-kicker' }, month),
      React.createElement(
        'div',
        null,
        React.createElement('h1', null, t('Task board')),
        React.createElement(
          'p',
          null,
          t('Today is {date}', { date: day }),
          React.createElement('span', { className: 'tb-sep' }, '·'),
          t('{n} running', { n: running }),
          React.createElement('span', { className: 'tb-sep' }, '·'),
          t('{n} to review', { n: review }),
        ),
      ),
    ),
    React.createElement(
      'div',
      { className: 'tb-head-tools' },
      React.createElement(
        'label',
        { className: 'tb-search' },
        React.createElement(IconSearch, { size: 15 }),
        React.createElement('input', {
          type: 'search',
          value: query,
          placeholder: t('Search cards'),
          'aria-label': t('Search cards'),
          onChange: event => setQuery(event.target.value),
        }),
        query
          ? React.createElement('button', {
              type: 'button',
              className: 'tb-search-clear',
              'aria-label': t('Close'),
              onClick: () => setQuery(''),
            }, React.createElement(IconX, { size: 13 }))
          : null,
      ),
      React.createElement(
        'div',
        { className: 'tb-filters', role: 'group', 'aria-label': t('Task board overview') },
        FILTERS.map(entry =>
          React.createElement(
            'button',
            {
              key: entry.id,
              type: 'button',
              className: filter === entry.id ? 'is-on' : '',
              'aria-pressed': filter === entry.id,
              onClick: () => setFilter(entry.id),
            },
            t(entry.key),
          ),
        ),
      ),
      React.createElement(
        'button',
        { type: 'button', className: 'tb-primary', onClick: () => openAddDialog('todo') },
        React.createElement(IconPlus, { size: 15 }),
        t('New task'),
      ),
    ),
  )
}

function AddDialog({ t, defaultColumn, tags }) {
  const [title, setTitle] = React.useState('')
  const [note, setNote] = React.useState('')
  const [tag, setTag] = React.useState('')
  const [column, setColumn] = React.useState(defaultColumn || 'todo')
  const [repeatOn, setRepeatOn] = React.useState(false)
  const [rule, setRule] = React.useState(defaultAutomation)
  const [busy, setBusy] = React.useState(false)
  const inputRef = React.useRef(null)
  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const submit = async event => {
    event.preventDefault()
    if (!title.trim() || busy) return
    setBusy(true)
    const payload = { title, note, tag, column }
    if (repeatOn) payload.automation = automationPayload(rule)
    const result = await actions.add(payload)
    setBusy(false)
    if (result) {
      closeDialog()
      if (result.warning) notify(result.warning, { error: true })
      else notify(t('Card added'))
    }
  }

  return React.createElement(
    'form',
    { className: 'tb-form', onSubmit: submit, id: 'tb-add-form' },
    React.createElement(
      'label',
      { className: 'tb-field' },
      React.createElement('span', null, t('Title')),
      React.createElement('input', {
        ref: inputRef,
        value: title,
        required: true,
        maxLength: 200,
        placeholder: t('What needs to happen?'),
        onChange: event => setTitle(event.target.value),
      }),
    ),
    React.createElement(
      'label',
      { className: 'tb-field' },
      React.createElement('span', null, t('Notes')),
      React.createElement('textarea', {
        rows: 3,
        value: note,
        maxLength: 4000,
        placeholder: t('Any details, links, or acceptance criteria.'),
        onChange: event => setNote(event.target.value),
      }),
    ),
    React.createElement(
      'div',
      { className: 'tb-field-row' },
      React.createElement(
        'label',
        { className: 'tb-field' },
        React.createElement('span', null, t('Tag')),
        React.createElement('input', {
          value: tag,
          maxLength: 24,
          placeholder: t('Tag'),
          onChange: event => setTag(event.target.value),
        }),
      ),
      React.createElement(
        'div',
        { className: 'tb-field' },
        React.createElement('span', null, t('Column')),
        React.createElement(
          'div',
          { className: 'tb-seg' },
          Object.keys(COLUMN_META).map(key =>
            React.createElement(
              'button',
              {
                key,
                type: 'button',
                className: column === key ? 'is-on' : '',
                style: { '--tb-accent': COLUMN_META[key].accent },
                onClick: () => setColumn(key),
              },
              React.createElement('i'),
              t(COLUMN_META[key].key),
            ),
          ),
        ),
      ),
    ),
    tags.length
      ? React.createElement(
          'div',
          { className: 'tb-tagrow' },
          tags.slice(0, 6).map(value =>
            React.createElement(
              'button',
              { key: value, type: 'button', className: 'tb-tagchip', onClick: () => setTag(value) },
              `#${value}`,
            ),
          ),
        )
      : null,
    React.createElement(
      'div',
      { className: 'tb-field tb-auto-field' },
      React.createElement('span', null, t('Automation')),
      React.createElement(
        'div',
        { className: 'tb-seg' },
        React.createElement(
          'button',
          { type: 'button', className: repeatOn ? '' : 'is-on', onClick: () => setRepeatOn(false) },
          t('Off'),
        ),
        React.createElement(
          'button',
          { type: 'button', className: repeatOn ? 'is-on' : '', onClick: () => setRepeatOn(true) },
          React.createElement(IconClock, { size: 12 }),
          t('On a schedule'),
        ),
      ),
    ),
    repeatOn
      ? React.createElement(AutomationFields, {
          t,
          value: rule,
          onChange: patch => setRule(current => ({ ...current, ...patch })),
        })
      : null,
    React.createElement(
      'div',
      { className: 'tb-dialog-foot' },
      React.createElement(
        'button',
        { type: 'button', className: 'tb-btn', onClick: closeDialog },
        t('Cancel'),
      ),
      React.createElement('span', { className: 'tb-spacer' }),
      React.createElement(
        'button',
        { type: 'submit', className: 'tb-btn is-primary', disabled: busy || !title.trim() },
        t('Create'),
      ),
    ),
  )
}

function DetailSheet({ task, t }) {
  const [confirmDelete, setConfirmDelete] = React.useState(false)
  const [confirmRemove, setConfirmRemove] = React.useState(false)
  const [editing, setEditing] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [draft, setDraft] = React.useState(defaultAutomation)
  React.useEffect(() => {
    setConfirmDelete(false)
    setConfirmRemove(false)
    setEditing(false)
  }, [task.id])
  const meta = COLUMN_META[task.column]
  const running = isRunning(task)
  const phase = phaseLabel(task, t)

  const startEditing = () => {
    const automation = task.automation
    setDraft(
      automation
        ? {
            frequency: automation.frequency === 'custom' ? 'daily' : automation.frequency,
            time: automation.time || '09:00',
            weekdays: Array.isArray(automation.weekdays) && automation.weekdays.length ? [...automation.weekdays] : [todayWeekday()],
          }
        : defaultAutomation(),
    )
    setEditing(true)
  }

  const saveAutomation = async () => {
    if (saving) return
    setSaving(true)
    const result = await actions.update(task.id, { automation: automationPayload(draft) })
    setSaving(false)
    if (result) {
      setEditing(false)
      notify(result.warning ? result.warning : t('Automation updated'), { error: Boolean(result.warning) })
    }
  }

  const toggleAutomation = async () => {
    if (!task.automation) return
    const active = !task.automation.active
    const result = await actions.update(task.id, { automation: { active } })
    if (result) {
      if (result.warning) notify(result.warning, { error: true })
      else notify(active ? t('Automation resumed') : t('Automation paused'))
    }
  }

  const removeAutomation = async () => {
    if (!confirmRemove) {
      setConfirmRemove(true)
      return
    }
    const result = await actions.update(task.id, { automation: { frequency: 'none' } })
    if (result) {
      setConfirmRemove(false)
      if (result.warning) notify(result.warning, { error: true })
      else notify(t('Automation removed'))
    }
  }

  const remove = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true)
      return
    }
    closeDetail()
    const result = await actions.remove(task.id)
    if (result) notify(t('Card deleted'))
  }

  return React.createElement(
    Modal,
    {
      side: true,
      title: task.title,
      onClose: closeDetail,
      footer: React.createElement(
        React.Fragment,
        null,
        React.createElement('button', { type: 'button', className: `tb-btn is-danger ${confirmDelete ? 'is-armed' : ''}`, onClick: remove }, confirmDelete ? t('Delete twice to confirm') : t('Delete')),
        React.createElement('span', { className: 'tb-spacer' }),
        React.createElement(
          'button',
          {
            type: 'button',
            className: 'tb-btn',
            onClick: async () => {
              const result = await actions.move(task.id, 'todo')
              if (result) closeDetail()
            },
          },
          t('Back to todo'),
        ),
        task.column === 'done'
          ? null
          : React.createElement(
              'button',
              {
                type: 'button',
                className: 'tb-btn is-primary',
                onClick: async () => {
                  if (running) {
                    const result = await actions.stop(task.id)
                    if (result) notify(t('Stopped the run'))
                    return
                  }
                  const result = await actions.dispatch(task.id)
                  if (result) notify(t('Dispatched to its session'))
                },
              },
              running ? t('Stop') : task.sessionId ? t('Rerun') : t('Run'),
            ),
        task.column === 'review'
          ? React.createElement(
              'button',
              {
                type: 'button',
                className: 'tb-btn is-primary',
                onClick: async () => {
                  const result = await actions.accept(task.id)
                  if (result) {
                    notify(t(task.automation ? 'Accepted, back to todo' : 'Card accepted'))
                    closeDetail()
                  }
                },
              },
              t(task.automation ? 'Accept this run' : 'Accept'),
            )
          : null,
      ),
    },
    React.createElement(
      'div',
      { className: 'tb-detail' },
      React.createElement(
        'div',
        { className: 'tb-detail-chips' },
        React.createElement(StatusPill, { column: task.column, label: t(meta.key), accent: meta.accent }),
        task.tag ? React.createElement('span', { className: 'tb-chip' }, `#${task.tag}`) : null,
        task.source === 'session'
          ? React.createElement('span', { className: 'tb-chip is-quiet' }, React.createElement(IconChat, { size: 11 }), t('From a session'))
          : null,
      ),
      running
        ? React.createElement(
            'div',
            { className: 'tb-card-live' },
            React.createElement('span', { className: 'tb-pulse' }),
            React.createElement('span', null, phase),
            task.steps ? React.createElement('span', { className: 'tb-steps' }, `${t('Steps')} · ${task.steps}`) : null,
          )
        : null,
      React.createElement(
        'section',
        { className: 'tb-block' },
        React.createElement(
          'div',
          { className: 'tb-progress-top' },
          React.createElement('span', null, t('Progress')),
          React.createElement('b', null, `${task.progress}%`),
        ),
        React.createElement('div', { className: 'tb-bar' }, React.createElement('i', { style: { width: `${task.progress}%` } })),
      ),
      task.note
        ? React.createElement(
            'section',
            { className: 'tb-block' },
            React.createElement('h4', null, t('Description')),
            React.createElement('p', { className: 'tb-prose' }, task.note),
          )
        : null,
      React.createElement(
        'section',
        { className: 'tb-block tb-auto-block' },
        React.createElement(
          'div',
          { className: 'tb-auto-head' },
          React.createElement('h4', null, t('Automation')),
          task.automation
            ? React.createElement(
                'span',
                { className: `tb-auto-state ${task.automation.active ? 'is-live' : ''}` },
                task.automation.active ? t('Scheduled') : t('Paused'),
              )
            : null,
        ),
        editing
          ? React.createElement(
              React.Fragment,
              null,
              React.createElement(AutomationFields, {
                t,
                value: draft,
                onChange: patch => setDraft(current => ({ ...current, ...patch })),
              }),
              React.createElement(
                'div',
                { className: 'tb-auto-actions' },
                React.createElement('button', { type: 'button', className: 'tb-btn', onClick: () => setEditing(false) }, t('Cancel')),
                React.createElement(
                  'button',
                  { type: 'button', className: 'tb-btn is-primary', disabled: saving, onClick: saveAutomation },
                  t('Save'),
                ),
              ),
            )
          : task.automation
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'div',
                  { className: 'tb-auto-rule' },
                  React.createElement(IconClock, { size: 14 }),
                  React.createElement('span', null, automationLabel(task.automation, t)),
                ),
                React.createElement(
                  'dl',
                  { className: 'tb-auto-meta' },
                  React.createElement('dt', null, t('Next run')),
                  React.createElement(
                    'dd',
                    null,
                    task.automation.runtime?.nextAt
                      ? formatDateTime(task.automation.runtime.nextAt, localeId())
                      : t('No upcoming run'),
                  ),
                  React.createElement('dt', null, t('Last run')),
                  React.createElement(
                    'dd',
                    null,
                    task.automation.lastFiredAt ? formatRelative(task.automation.lastFiredAt, t) : t('Not run yet'),
                  ),
                ),
                React.createElement(
                  'div',
                  { className: 'tb-auto-actions' },
                  React.createElement('button', { type: 'button', className: 'tb-btn', onClick: toggleAutomation }, task.automation.active ? t('Pause') : t('Resume')),
                  React.createElement('button', { type: 'button', className: 'tb-btn', onClick: startEditing }, t('Edit rule')),
                  React.createElement(
                    'button',
                    { type: 'button', className: `tb-btn is-danger ${confirmRemove ? 'is-armed' : ''}`, onClick: removeAutomation },
                    confirmRemove ? t('Delete twice to confirm') : t('Remove automation'),
                  ),
                ),
              )
            : React.createElement(
                React.Fragment,
                null,
                React.createElement('p', { className: 'tb-muted' }, t('This card only runs when you start it.')),
                React.createElement(
                  'div',
                  { className: 'tb-auto-actions' },
                  React.createElement(
                    'button',
                    { type: 'button', className: 'tb-btn', onClick: startEditing },
                    React.createElement(IconSpark, { size: 13 }),
                    t('Make it automatic'),
                  ),
                ),
              ),
      ),
      React.createElement(
        'section',
        { className: 'tb-block' },
        React.createElement('h4', null, t('Session')),
        task.sessionId
          ? React.createElement(
              'div',
              { className: 'tb-session' },
              React.createElement('code', null, task.sessionId.slice(0, 8)),
              React.createElement(IconButton, {
                icon: IconExternal,
                label: t('Open session'),
                onClick: () => openSessionById(task.sessionId),
              }),
            )
          : React.createElement(
              'p',
              { className: 'tb-muted' },
              t('No session yet'),
              ' ',
              t('A session is created the first time you run this card.'),
            ),
      ),
      React.createElement(
        'section',
        { className: 'tb-block' },
        React.createElement('h4', null, t('Latest result')),
        task.result
          ? React.createElement('pre', { className: 'tb-result' }, task.result)
          : React.createElement('p', { className: 'tb-muted' }, t('No result yet.')),
        task.error ? React.createElement('p', { className: 'tb-error' }, task.error) : null,
      ),
      React.createElement(
        'div',
        { className: 'tb-meta' },
        t('Created'),
        ' ',
        formatDateTime(task.createdAt, localeId()),
        ' · ',
        t('Updated'),
        ' ',
        formatRelative(task.updatedAt, t),
      ),
    ),
  )
}

export function BoardPanel() {
  const t = useT()
  const state = useBoardState()
  const rootRef = React.useRef(null)
  const [width, setWidth] = React.useState(1200)

  React.useEffect(() => {
    refresh()
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') refresh()
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  React.useEffect(() => {
    const element = rootRef.current
    if (!element) return undefined
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const detailTask = state.detailId ? state.tasks.find(task => task.id === state.detailId) : null
  const tags = [...new Set(state.tasks.map(task => task.tag).filter(Boolean))]
  const query = state.query.trim().toLowerCase()

  const visible = state.tasks.filter(task => {
    if (state.filter === 'active' && task.column !== 'doing') return false
    if (state.filter === 'review' && task.column !== 'review') return false
    if (!query) return true
    return [task.title, task.note, task.tag].some(value => String(value || '').toLowerCase().includes(query))
  })

  return React.createElement(
    'div',
    { className: `tb-root ${width < 980 ? 'is-narrow' : ''}`, ref: rootRef },
    React.createElement('style', null, css),
    React.createElement('div', { className: 'tb-ambient', 'aria-hidden': 'true' }, React.createElement('i'), React.createElement('i'), React.createElement('i')),
    React.createElement(Header, { t, tasks: state.tasks, query: state.query, filter: state.filter }),
    state.error && !state.loaded
      ? React.createElement(
          'div',
          { className: 'tb-fail' },
          React.createElement('p', null, t('Could not reach the board')),
          React.createElement('span', null, state.error),
          React.createElement('button', { type: 'button', className: 'tb-btn', onClick: () => refresh() }, React.createElement(IconRefresh, { size: 14 }), t('Retry')),
        )
      : !state.loaded
        ? React.createElement('div', { className: 'tb-loading' }, t('Loading board…'))
        : React.createElement(
            'div',
            { className: 'tb-board-wrap' },
            React.createElement(
              'div',
              { className: 'tb-board' },
              state.columns.map(column => {
                const tasks = visible.filter(task => task.column === column)
                const total = state.tasks.filter(task => task.column === column).length
                return React.createElement(Column, { key: column, column, tasks, total, t })
              }),
            ),
            state.tasks.length > 0 && visible.length === 0
              ? React.createElement('p', { className: 'tb-none' }, t('Nothing matches this filter.'))
              : null,
          ),
    state.dialog ? React.createElement(Modal, { title: t('New task'), onClose: closeDialog, width: 520 }, React.createElement(AddDialog, { t, defaultColumn: state.dialog.column, tags })) : null,
    detailTask ? React.createElement(DetailSheet, { task: detailTask, t }) : null,
    React.createElement(Toast, { toast: state.toast, onClose: () => setState({ toast: null }) }),
  )
}
