# 自动化卡的验收流程

日期：2026-11
状态：已实现

## 背景

原先 `accept()` 对任何卡片都硬编码 `column = 'done'`，而自动化（周期任务）本身并不知道「已完成」这个终态：

- 卡片被验收进「已完成」后，`automation` 配置和底层定时任务都还在；
- 下一轮到点，定时任务照常投递一个会话，`applyEvent` 通过 `reservedSessionId` 认领这张卡；
- `bindAutomationRun` → `markDispatched` 里有一行 `task.column = 'doing'`，把卡片从「已完成」拽回「进行中」，进度归 6；
- 这一轮跑完时 `column` 已是 `doing`，于是按 `completed` 落到「待验收」。

净效果：已收尾的卡第二天自己复活。更糟的是「清空已完成」——卡片被删掉，定时任务还在，变成界面上完全看不见的孤儿任务每天空跑。

## 方案

原则：**周期任务没有终态，只有轮次。**

1. `Board.accept(id)` 按类型分叉：
   - 自动化卡 → 回到「待办」（`applyColumn(task, 'todo')`），进度归零，`automation` 与上一轮 `result` 都保留，等下一轮；
   - 普通卡 → 进「已完成」，维持原行为。
2. 客户端「验收」按钮文案按卡类型切换：自动化卡显示「验收本轮，回待办」（`Accept this run`），普通卡仍是「验收完成」（`Accept`）；完成后提示分别为「已验收，回到待办等下一轮」与「已验收」。
3. 防守：`syncAutomationByColumn` 在 `move` 时同步定时任务状态——自动化卡进「已完成」则暂停定时，移出则恢复。这样「已完成」对自动化卡表达的是「停表」，不会再出现复活。
4. 文案同步更新自动化说明：结果进待验收，验收后回到待办等待下一轮。

## 涉及文件

| 文件 | 改动 |
|---|---|
| `src/board.js` | `accept()` 按 `automation` 分叉 |
| `src/host.js` | 新增 `syncAutomationByColumn`，`move` 分支调用 |
| `client/app.jsx` | 验收按钮文案与提示按类型切换 |
| `client/i18n.js` | 新增 `Accept this run` / `Accepted, back to todo`，调整自动化说明 |
| `dist/client.js` | 重新构建 |
| `docs/architecture.md`、`README.md` | 同步说明 |

## 验证结果

- `node scripts/build.mjs` 通过，产出 `dist/client.js`。
- `node --check` 通过：`src/board.js`、`src/host.js`、`client/i18n.js`。
- 数据层用例（直接实例化 `Board`）：

```text
自动化卡验收后 → todo | progress 0 | phase idle | automation 保留: true | 结果保留: "上一轮结果"
普通卡验收后   → done | progress 100
```

结论：自动化卡验收后回待办且保留规则与结果，普通卡行为未变。`syncAutomationByColumn` 依赖宿主 `schedule` 服务，未做自动化用例，按分支条件人工核对：

- 自动化卡 `active: true` 移入「已完成」→ `shouldRun=false`，触发暂停；
- 移出「已完成」且 `active: false` → 触发恢复；
- 在非「已完成」列之间移动 → 条件相等，不发请求。

## 遗留

- `board.js:bindAutomationRun` 目前没有调用点（投递接管实际走 `applyEvent`），属既有冗余，未在本轮清理。
- 若卡片在「已完成」被删掉但定时任务删除失败，仍可能留下孤儿任务；`remove` 分支已有失败提示，但不会回滚删卡。
