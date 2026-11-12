// 时区感知的 RRULE 求值：只覆盖看板会生成的三种重复规则（每小时 / 每天 / 每周）。
// Codex 卡片的自动化由插件自己调度，需要算「下一次执行时间」；DSH 卡的规则仍交给宿主 schedule。
//
// 支持：DTSTART;TZID=<zone>:YYYYMMDDTHHMMSS / DTSTART:...Z，
//      FREQ=HOURLY|DAILY|WEEKLY、INTERVAL、BYDAY（仅周规则）、BYHOUR、BYMINUTE、UNTIL、WKST。
// 其余部件一律拒绝，避免写出看起来生效、实际算错的规则。

const DAY_MS = 86_400_000
const WEEKDAYS = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 }
const SUPPORTED_KEYS = new Set(['FREQ', 'INTERVAL', 'BYDAY', 'BYHOUR', 'BYMINUTE', 'BYSECOND', 'UNTIL', 'WKST', 'COUNT'])
const MAX_LOOKAHEAD_DAYS = 3_700
const FORMATTERS = new Map()

export class RruleError extends Error {
  constructor(message) {
    super(message)
    this.name = 'RruleError'
  }
}

function zoneOf(value) {
  if (!value) return ''
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: value })
    return value
  } catch {
    return ''
  }
}

export function systemZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  } catch {
    return 'UTC'
  }
}

/** 某一时刻在指定时区里的墙上时间。 */
export function zonedParts(ms, zone) {
  let formatter = FORMATTERS.get(zone)
  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    })
    FORMATTERS.set(zone, formatter)
  }
  const parts = {}
  for (const part of formatter.formatToParts(new Date(ms))) {
    if (part.type !== 'literal') parts[part.type] = part.value
  }
  return {
    y: Number(parts.year),
    mo: Number(parts.month),
    d: Number(parts.day),
    h: Number(parts.hour),
    mi: Number(parts.minute),
    s: Number(parts.second),
  }
}

const civilMs = (y, mo, d, h = 0, mi = 0, s = 0) => Date.UTC(y, mo - 1, d, h, mi, s)

/** 把时区里的墙上时间转换成绝对时刻；落进夏令时缺口时返回 null。 */
function instantOf(zone, y, mo, d, h, mi, s = 0) {
  const target = civilMs(y, mo, d, h, mi, s)
  let guess = target
  for (let i = 0; i < 3; i += 1) {
    const parts = zonedParts(guess, zone)
    const actual = civilMs(parts.y, parts.mo, parts.d, parts.h, parts.mi, parts.s)
    const delta = target - actual
    if (delta === 0) {
      const check = zonedParts(guess, zone)
      // 缺口里的墙上时间会被抹平（例如 02:30 变成 03:30），这种时刻直接跳过。
      return check.h === h && check.mi === mi ? guess : null
    }
    guess += delta
  }
  return null
}

function dateOnly(civil) {
  return { y: civil.y, mo: civil.mo, d: civil.d }
}

function addDays(civil, days) {
  const date = new Date(civilMs(civil.y, civil.mo, civil.d))
  date.setUTCDate(date.getUTCDate() + days)
  return { y: date.getUTCFullYear(), mo: date.getUTCMonth() + 1, d: date.getUTCDate() }
}

const daysBetween = (from, to) => Math.round((civilMs(to.y, to.mo, to.d) - civilMs(from.y, from.mo, from.d)) / DAY_MS)
const weekdayOf = civil => new Date(civilMs(civil.y, civil.mo, civil.d)).getUTCDay()

function startOfWeek(civil, weekStart) {
  const offset = (weekdayOf(civil) - weekStart + 7) % 7
  return addDays(civil, -offset)
}

function parseDateValue(value) {
  const match = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/.exec(value)
  if (!match) throw new RruleError(`无法解析时间：${value}`)
  return {
    y: Number(match[1]),
    mo: Number(match[2]),
    d: Number(match[3]),
    h: Number(match[4]),
    mi: Number(match[5]),
    s: Number(match[6]),
    utc: Boolean(match[7]),
  }
}

function parseInteger(value, min, max, label) {
  const number = Number(value)
  if (!Number.isInteger(number) || number < min || number > max) throw new RruleError(`${label} 取值无效：${value}`)
  return number
}

/** 解析 RRULE 文本；不支持的部件抛 RruleError。 */
export function parseRrule(text, fallbackZone) {
  if (typeof text !== 'string' || !text.trim()) throw new RruleError('重复规则为空')
  let start = null
  let ruleLine = ''
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim()
    if (!line) continue
    if (/^DTSTART/i.test(line)) {
      const match = /^DTSTART(?:;TZID=([^:]+))?:(.+)$/i.exec(line)
      if (!match) throw new RruleError(`无法解析 DTSTART：${line}`)
      const value = parseDateValue(match[2].trim())
      const zone = value.utc ? 'UTC' : zoneOf(match[1]?.trim()) || zoneOf(fallbackZone) || systemZone()
      start = { ...value, zone, ms: instantOf(zone, value.y, value.mo, value.d, value.h, value.mi, value.s) }
      if (start.ms === null) throw new RruleError('DTSTART 落在夏令时缺口里，请换一个时间')
    } else if (/^RRULE:/i.test(line)) {
      ruleLine = line.slice(line.indexOf(':') + 1)
    } else {
      throw new RruleError(`无法识别的规则行：${line}`)
    }
  }
  if (!start) throw new RruleError('规则缺少 DTSTART')
  if (!ruleLine) throw new RruleError('规则缺少 RRULE')
  const rule = { freq: '', interval: 1, byday: [], byhour: [], byminute: [], until: null, weekStart: 1 }
  for (const chunk of ruleLine.split(';')) {
    const separator = chunk.indexOf('=')
    if (separator < 0) throw new RruleError(`无法解析规则片段：${chunk}`)
    const key = chunk.slice(0, separator).trim().toUpperCase()
    const value = chunk.slice(separator + 1).trim()
    if (!SUPPORTED_KEYS.has(key)) throw new RruleError(`暂不支持规则部件：${key}`)
    switch (key) {
      case 'FREQ': {
        const freq = value.toUpperCase()
        if (!['HOURLY', 'DAILY', 'WEEKLY'].includes(freq)) throw new RruleError(`暂不支持频率：${value}`)
        rule.freq = freq
        break
      }
      case 'INTERVAL':
        rule.interval = parseInteger(value, 1, 10_000, 'INTERVAL')
        break
      case 'COUNT':
        throw new RruleError('暂不支持 COUNT，请改用 UNTIL 或让任务长期重复')
      case 'BYDAY': {
        const days = []
        for (const entry of value.split(',')) {
          const code = entry.trim().slice(-2).toUpperCase()
          if (!(code in WEEKDAYS) || /^[+-]?\d/.test(entry.trim())) throw new RruleError(`暂不支持 BYDAY：${entry}`)
          if (!days.includes(WEEKDAYS[code])) days.push(WEEKDAYS[code])
        }
        rule.byday = days.sort((a, b) => a - b)
        break
      }
      case 'BYHOUR':
        rule.byhour = value.split(',').map(entry => parseInteger(entry.trim(), 0, 23, 'BYHOUR'))
        break
      case 'BYMINUTE':
        rule.byminute = value.split(',').map(entry => parseInteger(entry.trim(), 0, 59, 'BYMINUTE'))
        break
      case 'BYSECOND': {
        const seconds = value.split(',').map(entry => parseInteger(entry.trim(), 0, 59, 'BYSECOND'))
        if (seconds.some(second => second !== 0)) throw new RruleError('BYSECOND 只能为 0')
        break
      }
      case 'UNTIL': {
        const until = parseDateValue(value)
        if (!until.utc) throw new RruleError('UNTIL 需要带 Z（UTC）')
        rule.until = Date.UTC(until.y, until.mo - 1, until.d, until.h, until.mi, until.s)
        break
      }
      case 'WKST': {
        const code = value.trim().toUpperCase()
        if (!(code in WEEKDAYS)) throw new RruleError(`WKST 无效：${value}`)
        rule.weekStart = WEEKDAYS[code]
        break
      }
      default:
        break
    }
  }
  if (!rule.freq) throw new RruleError('规则缺少 FREQ')
  rule.start = start
  return rule
}

/**
 * 求 `after` 之后的第一次发生时间（毫秒时间戳）。
 * 超过 `MAX_LOOKAHEAD_DAYS` 仍没有下一次时返回 null。
 */
export function nextOccurrence(text, after, fallbackZone) {
  const rule = parseRrule(text, fallbackZone)
  const { start } = rule
  const zone = start.zone
  const anchorDate = dateOnly(start)
  const anchorHour = start.h
  const anchorMinute = start.mi
  const anchorWall = instantOf(zone, start.y, start.mo, start.d, start.h, start.mi)
  const floor = Math.max(Number(after) || 0, (anchorWall ?? start.ms) - 1)
  const afterParts = zonedParts(floor, zone)
  const afterDate = dateOnly(afterParts)
  const hours = rule.byhour.length ? [...rule.byhour].sort((a, b) => a - b) : [anchorHour]
  const minutes = rule.byminute.length ? [...rule.byminute].sort((a, b) => a - b) : [anchorMinute]

  const accept = (y, mo, d, h, mi) => {
    const instant = instantOf(zone, y, mo, d, h, mi)
    if (instant === null) return null
    if (instant <= floor) return null
    if (rule.until !== null && instant > rule.until) return null
    return instant
  }

  if (rule.freq === 'HOURLY') {
    let wallHours = Math.floor(
      (civilMs(afterParts.y, afterParts.mo, afterParts.d, afterParts.h) -
        civilMs(anchorDate.y, anchorDate.mo, anchorDate.d, anchorHour)) /
        3_600_000,
    )
    if (!Number.isFinite(wallHours) || wallHours < 0) wallHours = 0
    const remainder = wallHours % rule.interval
    if (remainder) wallHours += rule.interval - remainder
    for (let step = 0; step < 24 * MAX_LOOKAHEAD_DAYS; step += rule.interval) {
      const total = wallHours + step
      const date = addDays(anchorDate, Math.floor(total / 24))
      const hour = ((anchorHour + (total % 24)) % 24 + 24) % 24
      for (const minute of minutes) {
        const instant = accept(date.y, date.mo, date.d, hour, minute)
        if (instant !== null) return instant
      }
      const probe = instantOf(zone, date.y, date.mo, date.d, hour, minutes[0])
      if (probe !== null && rule.until !== null && probe > rule.until) return null
    }
    return null
  }

  if (rule.freq === 'DAILY') {
    let days = daysBetween(anchorDate, afterDate)
    if (days < 0) days = 0
    const remainder = days % rule.interval
    if (remainder) days += rule.interval - remainder
    for (let step = 0; step < MAX_LOOKAHEAD_DAYS; step += rule.interval) {
      const date = addDays(anchorDate, days + step)
      if (rule.byday.length && !rule.byday.includes(weekdayOf(date))) continue
      let stopped = false
      for (const hour of hours) {
        for (const minute of minutes) {
          const instant = accept(date.y, date.mo, date.d, hour, minute)
          if (instant !== null) return instant
          const probe = instantOf(zone, date.y, date.mo, date.d, hour, minute)
          if (probe !== null && rule.until !== null && probe > rule.until) stopped = true
        }
      }
      if (stopped) return null
    }
    return null
  }

  // WEEKLY
  const anchorWeek = startOfWeek(anchorDate, rule.weekStart)
  const afterWeek = startOfWeek(afterDate, rule.weekStart)
  let weeks = Math.floor(daysBetween(anchorWeek, afterWeek) / 7)
  if (weeks < 0) weeks = 0
  const remainder = weeks % rule.interval
  if (remainder) weeks += rule.interval - remainder
  const days = rule.byday.length ? rule.byday : [weekdayOf(anchorDate)]
  for (let step = 0; step < Math.ceil(MAX_LOOKAHEAD_DAYS / 7); step += rule.interval) {
    const weekStart = addDays(anchorWeek, (weeks + step) * 7)
    for (const weekday of days) {
      const offset = (weekday - rule.weekStart + 7) % 7
      const date = addDays(weekStart, offset)
      for (const hour of hours) {
        for (const minute of minutes) {
          const instant = accept(date.y, date.mo, date.d, hour, minute)
          if (instant !== null) return instant
          const probe = instantOf(zone, date.y, date.mo, date.d, hour, minute)
          if (probe !== null && rule.until !== null && probe > rule.until) return null
        }
      }
    }
  }
  return null
}
