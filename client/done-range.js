// 「已完成」列的日期范围：按完成时间（旧卡回退到更新时间）过滤展示。
export const DONE_RANGES = ['today', '7d', '30d', 'all']

/** 范围起点：今天 00:00、最近 7 / 30 个自然日的 00:00；`all` 返回 null。 */
export function doneRangeStart(range, now = Date.now()) {
  if (range === 'all') return null
  const start = new Date(now)
  start.setHours(0, 0, 0, 0)
  if (range === 'today') return start.getTime()
  const days = range === '30d' ? 29 : 6
  start.setDate(start.getDate() - days)
  return start.getTime()
}

/** 这张已完成卡是否落在范围内；未知范围按「全部」处理。 */
export function doneInRange(task, range, now = Date.now()) {
  const start = doneRangeStart(range, now)
  if (start === null) return true
  const at = Number(task?.finishedAt || task?.updatedAt || 0)
  return at >= start
}
