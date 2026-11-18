import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Board, DEFAULT_SPACE_ID } from '../src/board.js'

async function withBoard(fn) {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-task-board-queue-'))
  try {
    const board = await new Board(dir).load()
    return await fn(board, dir)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
}

function addTodo(board, title, extra = {}) {
  return board.add({ title, column: 'todo', ...extra })
}

test('启动队列：按待办顺序拍快照，跳过自动化卡', async () => {
  await withBoard(async board => {
    const first = addTodo(board, 'one')
    const second = addTodo(board, 'two')
    const scheduled = addTodo(board, 'scheduled')
    board.setAutomation(scheduled.id, {
      rrule: 'DTSTART;TZID=Asia/Shanghai:20260101T090000\nRRULE:FREQ=DAILY',
      frequency: 'daily',
      time: '09:00',
    })
    const third = addTodo(board, 'three')
    board.move(second.id, 'doing')

    const result = board.startQueue(DEFAULT_SPACE_ID)
    assert.equal(result.ok, true)
    assert.equal(result.count, 2)
    assert.deepEqual(board.space().queue.cardIds, [first.id, third.id])
    assert.equal(board.space().queue.active, true)
  })
})

test('队列推进：逐张取卡，跑完一张再取下一张，取完自动结束', async () => {
  await withBoard(async board => {
    const first = addTodo(board, 'one')
    const second = addTodo(board, 'two')
    board.startQueue(DEFAULT_SPACE_ID)

    const pickedFirst = board.queueNext(DEFAULT_SPACE_ID)
    assert.equal(pickedFirst.id, first.id)
    assert.equal(board.space().queue.currentId, first.id)

    board.queueRelease(DEFAULT_SPACE_ID)
    const pickedSecond = board.queueNext(DEFAULT_SPACE_ID)
    assert.equal(pickedSecond.id, second.id)

    board.queueRelease(DEFAULT_SPACE_ID)
    assert.equal(board.queueNext(DEFAULT_SPACE_ID), null)
    assert.equal(board.space().queue.active, false)
    assert.ok(board.space().queue.finishedAt > 0)
  })
})

test('队列跳过被删除或已不在待办的卡', async () => {
  await withBoard(async board => {
    const first = addTodo(board, 'one')
    const second = addTodo(board, 'two')
    board.startQueue(DEFAULT_SPACE_ID)
    board.remove(first.id)
    assert.equal(board.queueNext(DEFAULT_SPACE_ID).id, second.id)
    board.queueRelease(DEFAULT_SPACE_ID)
    assert.equal(board.queueNext(DEFAULT_SPACE_ID), null)
    assert.equal(board.space().queue.active, false)
  })
})

test('停止队列只停后续派发，记录 stopped', async () => {
  await withBoard(async board => {
    addTodo(board, 'one')
    board.startQueue(DEFAULT_SPACE_ID)
    board.queueNext(DEFAULT_SPACE_ID)
    const result = board.stopQueue(DEFAULT_SPACE_ID)
    assert.equal(result.ok, true)
    const queue = board.space().queue
    assert.equal(queue.active, false)
    assert.equal(queue.stopped, true)
    assert.equal(queue.currentId, null)
    assert.ok(queue.finishedAt > 0)
    assert.equal(board.queueNext(DEFAULT_SPACE_ID), null)
  })
})

test('队列随 board.json 落盘并在重新加载后恢复', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-task-board-queue-'))
  try {
    const board = await new Board(dir).load()
    const first = addTodo(board, 'one')
    addTodo(board, 'two')
    board.startQueue(DEFAULT_SPACE_ID)
    board.queueNext(DEFAULT_SPACE_ID)
    board.queueRelease(DEFAULT_SPACE_ID)
    await board.flushNow()

    const raw = JSON.parse(await readFile(join(dir, 'board.json'), 'utf8'))
    assert.equal(raw.version, 4)
    assert.equal(raw.spaces[0].queue.active, true)
    assert.equal(raw.spaces[0].queue.index, 1)

    const reloaded = await new Board(dir).load()
    const queue = reloaded.space().queue
    assert.equal(queue.active, true)
    assert.equal(queue.index, 1)
    assert.equal(queue.cardIds[0], first.id)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})

test('旧 v3 board.json 没有 queue 时按空处理并迁移到 v4', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-task-board-queue-'))
  try {
    await writeFile(
      join(dir, 'board.json'),
      JSON.stringify({
        version: 3,
        spaces: [{ id: 'default', name: '', order: 0, createdAt: 1 }],
        activeSpaceId: 'default',
        tasks: [{ id: 't_old', title: 'old', column: 'todo', spaceId: 'default', createdAt: 1, updatedAt: 1 }],
      }),
      'utf8',
    )
    const board = await new Board(dir).load()
    assert.equal(board.space().queue, null)
    assert.equal(board.find('t_old').title, 'old')
    await board.flushNow()
    const raw = JSON.parse(await readFile(join(dir, 'board.json'), 'utf8'))
    assert.equal(raw.version, 4)
    assert.equal(raw.spaces[0].queue, null)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})
