import test from 'node:test'
import assert from 'node:assert/strict'
import { doneInRange, doneRangeStart } from '../client/done-range.js'

const now = new Date(2026, 10, 18, 12, 0, 0).getTime()
const startOfToday = new Date(2026, 10, 18, 0, 0, 0).getTime()
const startOfSevenDays = new Date(2026, 10, 12, 0, 0, 0).getTime()

test('范围起点：今天 / 最近 7 天 / 最近 30 天 / 全部', () => {
  assert.equal(doneRangeStart('today', now), startOfToday)
  assert.equal(doneRangeStart('7d', now), startOfSevenDays)
  assert.equal(doneRangeStart('30d', now), new Date(2026, 9, 20, 0, 0, 0).getTime())
  assert.equal(doneRangeStart('all', now), null)
})

test('今天：只保留今天 00:00 之后完成的卡', () => {
  assert.equal(doneInRange({ finishedAt: startOfToday }, 'today', now), true)
  assert.equal(doneInRange({ finishedAt: startOfToday - 1 }, 'today', now), false)
})

test('最近 7 天：包含 6 天前的 00:00', () => {
  assert.equal(doneInRange({ finishedAt: startOfSevenDays }, '7d', now), true)
  assert.equal(doneInRange({ finishedAt: startOfSevenDays - 1 }, '7d', now), false)
})

test('旧卡没有 finishedAt 时回退到 updatedAt', () => {
  assert.equal(doneInRange({ finishedAt: null, updatedAt: startOfToday + 1 }, 'today', now), true)
  assert.equal(doneInRange({ finishedAt: null, updatedAt: startOfToday - 1 }, 'today', now), false)
})

test('全部：不过滤任何卡', () => {
  assert.equal(doneInRange({ updatedAt: 0 }, 'all', now), true)
  assert.equal(doneInRange({}, 'all', now), true)
})
