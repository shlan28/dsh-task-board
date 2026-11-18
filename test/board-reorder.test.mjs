import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Board, DEFAULT_SPACE_ID } from '../src/board.js'

async function withBoard(fn) {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-task-board-reorder-'))
  try {
    const board = await new Board(dir).load()
    return await fn(board, dir)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
}

const ids = board => board.list().tasks.map(task => task.id)

test('同列卡片可以上下调整顺序', async () => {
  await withBoard(async board => {
    const a = board.add({ title: 'a', column: 'todo' })
    const b = board.add({ title: 'b', column: 'todo' })
    const c = board.add({ title: 'c', column: 'todo' })

    assert.equal(board.reorder(c.id, a.id, 'before').ok, true)
    assert.deepEqual(ids(board), [c.id, a.id, b.id])

    assert.equal(board.reorder(c.id, b.id, 'after').ok, true)
    assert.deepEqual(ids(board), [a.id, b.id, c.id])

    assert.equal(board.reorder(a.id, b.id, 'after').ok, true)
    assert.deepEqual(ids(board), [b.id, a.id, c.id])
    assert.deepEqual(
      board.list().tasks.map(task => task.order),
      [1, 2, 3],
    )
  })
})

test('targetId 为空时移到该列末尾', async () => {
  await withBoard(async board => {
    const a = board.add({ title: 'a', column: 'todo' })
    const b = board.add({ title: 'b', column: 'todo' })
    const c = board.add({ title: 'c', column: 'todo' })

    assert.equal(board.reorder(a.id, null).ok, true)
    assert.deepEqual(ids(board), [b.id, c.id, a.id])
  })
})

test('不同列之间拒绝调整顺序', async () => {
  await withBoard(async board => {
    const a = board.add({ title: 'a', column: 'todo' })
    const b = board.add({ title: 'b', column: 'doing' })

    const result = board.reorder(b.id, a.id, 'before')
    assert.equal(result.ok, false)
    assert.match(result.error, /同一列/)
    assert.deepEqual(ids(board), [a.id, b.id])
  })
})

test('拖到自己身上是空操作', async () => {
  await withBoard(async board => {
    const a = board.add({ title: 'a', column: 'todo' })
    const b = board.add({ title: 'b', column: 'todo' })

    assert.equal(board.reorder(a.id, a.id, 'after').ok, true)
    assert.deepEqual(ids(board), [a.id, b.id])
  })
})

test('空间队列按调整后的待办顺序执行', async () => {
  await withBoard(async board => {
    const a = board.add({ title: 'a', column: 'todo' })
    const b = board.add({ title: 'b', column: 'todo' })
    const c = board.add({ title: 'c', column: 'todo' })

    board.reorder(c.id, a.id, 'before')
    const result = board.startQueue(DEFAULT_SPACE_ID)
    assert.equal(result.ok, true)
    assert.deepEqual(board.space().queue.cardIds, [c.id, a.id, b.id])
  })
})

test('顺序调整后重新加载仍保持', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'dsh-task-board-reorder-'))
  try {
    const board = await new Board(dir).load()
    const a = board.add({ title: 'a', column: 'todo' })
    const b = board.add({ title: 'b', column: 'todo' })
    board.reorder(b.id, a.id, 'before')
    await board.flushNow()

    const reloaded = await new Board(dir).load()
    assert.deepEqual(ids(reloaded), [b.id, a.id])
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})
