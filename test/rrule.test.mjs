import test from 'node:test'
import assert from 'node:assert/strict'
import { nextOccurrence, parseRrule, RruleError, zonedParts } from '../src/rrule.js'

const at = (iso) => Date.parse(iso)

test('每小时：对齐到整点', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=HOURLY'
  assert.equal(nextOccurrence(rrule, at('2026-11-12T19:26:00+08:00')), at('2026-11-12T20:00:00+08:00'))
})

test('每小时：INTERVAL 按锚点相位', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=HOURLY;INTERVAL=3'
  assert.equal(nextOccurrence(rrule, at('2026-11-12T19:26:00+08:00')), at('2026-11-12T21:00:00+08:00'))
})

test('每天：保留墙上时间', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=DAILY'
  assert.equal(nextOccurrence(rrule, at('2026-11-12T19:26:00+08:00')), at('2026-11-13T09:00:00+08:00'))
})

test('每天：今天还没到就今天', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=DAILY'
  assert.equal(nextOccurrence(rrule, at('2026-11-12T08:00:00+08:00')), at('2026-11-12T09:00:00+08:00'))
})

test('每周：按 BYDAY 找下一个工作日', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR'
  assert.equal(nextOccurrence(rrule, at('2026-11-11T10:00:00+08:00')), at('2026-11-13T09:00:00+08:00'))
  assert.equal(nextOccurrence(rrule, at('2026-11-13T10:00:00+08:00')), at('2026-11-16T09:00:00+08:00'))
})

test('每周 INTERVAL=2 从锚点那一周起算', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=TH'
  const next = nextOccurrence(rrule, at('2026-11-12T19:26:00+08:00'))
  assert.equal(new Date(next).getUTCDay(), 4)
  const parts = zonedParts(next, 'Asia/Shanghai')
  assert.equal(parts.h, 9)
})

test('夏令时：纽约每天 9 点仍是当地 9 点', () => {
  const rrule = 'DTSTART;TZID=America/New_York:20260101T090000\nRRULE:FREQ=DAILY'
  const next = nextOccurrence(rrule, at('2026-03-07T10:00:00-05:00'))
  const parts = zonedParts(next, 'America/New_York')
  assert.equal(parts.h, 9)
  assert.equal(parts.d, 8)
})

test('UNTIL 到期后没有下一次', () => {
  const rrule = 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=DAILY;UNTIL=20260110T010000Z'
  assert.equal(nextOccurrence(rrule, at('2026-11-12T19:26:00+08:00')), null)
})

test('拒绝不支持的部件', () => {
  assert.throws(() => parseRrule('DTSTART:20260101T090000Z\nRRULE:FREQ=MINUTELY'), RruleError)
  assert.throws(() => parseRrule('DTSTART:20260101T090000Z\nRRULE:FREQ=MONTHLY'), RruleError)
  assert.throws(() => parseRrule('DTSTART:20260101T090000Z\nRRULE:FREQ=DAILY;BYMONTH=1'), RruleError)
  assert.throws(() => parseRrule('DTSTART:20260101T090000Z\nRRULE:FREQ=DAILY;COUNT=3'), RruleError)
})

test('UTC 的 DTSTART 不依赖宿主时区', () => {
  const rrule = 'DTSTART:20260101T090000Z\nRRULE:FREQ=DAILY'
  assert.equal(nextOccurrence(rrule, at('2026-11-12T19:26:00Z')), at('2026-11-13T09:00:00Z'))
})
