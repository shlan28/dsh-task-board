# 空间队列与已完成精简视图

## 背景

看板已经有空间隔离，但一次想清空一个空间的待办时，还是要逐张点「开始执行」，跑完再逐张验收。
已完成列也和其他列一样用大卡片，卡片一多就要滚很久；历史完成记录没有视图层过滤，时间久了会铺满整列。

目标：

- 每个空间有一个**整体启动按钮**：启动后把待办卡按当前从上到下的顺序逐张执行；
- 一轮执行成功结束后**自动验收进「已完成」**，队列继续下一张；失败的卡留在「待验收」等人处理，
  队列照常推进，并在队列上记下最后一次失败；
- 「已完成」列改用**两行小卡**（标题 + 完成时间/标签），不再展示说明、进度和操作按钮；
- 「已完成」列提供**按完成日期筛选**，默认只看最近 7 天，可切今天 / 7 天 / 30 天 / 全部。

已确认的产品选择：

- 落点：成功自动验收进「已完成」，队列继续下一张；
- 范围：启动那一刻的待办快照，运行期间新加的卡不自动加入；
- 已完成默认范围：最近 7 天。

## 数据模型

`board.json` 升到 `version: 4`，空间对象增加可选 `queue`：

```jsonc
{
  "version": 4,
  "spaces": [
    {
      "id": "default",
      "name": "",
      "order": 0,
      "createdAt": 1730000000000,
      "queue": {
        "active": true,
        "cardIds": ["t_a", "t_b", "t_c"],
        "index": 1,
        "currentId": "t_a",
        "startedAt": 1730000000000,
        "finishedAt": null,
        "stopped": false,
        "error": ""
      }
    }
  ]
}
```

- `cardIds` 是启动瞬间按 `tasks` 数组顺序（即面板从上到下）拍下的待办快照；
- `index` 是下一张要考察的卡的位置，`currentId` 是正在执行/等待执行结果的那张；
- `active` 为 `true` 时 Host 每隔约 2 秒推进一次，`turn/end` 等事件也会立刻触发推进；
- `finishedAt`、`stopped`、`error` 只用于界面反馈：自然跑完 vs 手动停止 vs 最近一次失败；
- 没有 `queue` 或字段不合法时按「没有队列」处理，旧文件读取后自动落盘成 v4。

## Host（src/board.js、src/host.js）

### Board

| 方法 | 行为 |
|---|---|
| `startQueue(spaceId)` | 校验空间与队列状态；快照该空间「待办 + 无自动化 + 未在执行」的卡；没有可跑卡时返回错误 |
| `stopQueue(spaceId)` | 只停后续派发：`active = false`、`stopped = true`、清空 `currentId`；正在跑的卡继续跑完 |
| `queueNext(spaceId)` | 从 `index` 往后找下一张仍在待办的卡并记为 `currentId`；取完则结束队列（`active = false`） |
| `queueRelease(spaceId, patch)` | 清空 `currentId`，可记录一条失败说明，等待下一张 |
| `list()` | 空间的 `queue` 深拷贝给客户端，避免界面改动回流到 Host |

队列卡按 `tasks` 数组顺序执行，和列里从上到下的视觉顺序一致。定时任务卡不进入队列：
它们有各自的调度，跑完还会回到待办，混进队列会互相抢跑。

### 队列引擎

`queueTick()` 顺序处理每个空间：

1. 当前卡还在 `running` → 等下一轮；
2. 当前卡结束：
   - 成功进「待验收」且没有错误 → `accept()` 进「已完成」；
   - 失败/被退回 → 留在待验收或待办，把错误写进 `queue.error`，继续；
   - 卡被删除或已被手动挪走 → 跳过；
3. 取下一张可执行卡派发（复用 `dispatch()`，DSH 卡建会话、Codex 卡进 ACP 队列）；
4. 派发失败同样记录错误并继续下一张，不重试同一张。

触发时机：

- `session/event` 里的 `turn/end`（DSH 卡）；
- Codex 运行结束回调（`CodexAgent` 新增 `onTaskFinished`）；
- 手动停止、验收、移动、删除等 op 之后；
- 兜底定时器每 2 秒检查一次（`TASK_BOARD_QUEUE_TICK_MS` 可覆盖，用于冒烟测试）；
- 插件加载完成时恢复未结束的队列。

### 接口

`POST /task-board/op` 新增：

- `startQueue { spaceId }` → `{ ok, count, state }`；
- `stopQueue { spaceId }` → `{ ok, state }`。

`GET /task-board/state` 不需要新字段：空间对象里已经带 `queue`。会话事件折叠、定时任务、
工作区、执行者与工具接口都不变。

## 面板（client/）

- **空间启动按钮**放在页头空间下拉右侧：
  - 空闲时显示 ▶ +「按顺序执行待办」+ 可执行卡数；没有可执行卡时禁用；
  - 运行中显示脉冲点 +「执行中 2/5」+ 停止图标，点一下停止后续派发；
  - 队列自然结束/手动停止/带错误结束时用 Toast 说明。运行中刷新页面还能从快照恢复显示。
- **已完成小卡**：已完成列的卡片改为两行——第一行完成点 + 标题（单行省略），第二行完成时间 +
  标签；仍然可点击开详情、可拖回其他列，但不再渲染说明、进度点、标签行和底部操作。
- **日期筛选**：「已完成」列头下增加一个下拉（今天 / 最近 7 天 / 最近 30 天 / 全部，默认最近 7 天），
  并按 `finishedAt ?? updatedAt` 过滤；列计数显示当前筛选后的数量，筛选行显示该空间已完成总数。
  「清空已完成」语义不变：清空该空间全部已完成卡（包含被筛掉的）。
- 筛选状态只存在于客户端快照，切换空间保留，刷新页面回到默认「最近 7 天」。
- 中英文案都走 i18n；日期计算抽成 `client/done-range.js`，方便单测。

## 兼容性

- 旧 `board.json`（v3 及更早）没有 `queue`，读取后补空并落盘 v4；卡片、空间、自动化不受影响。
- 旧客户端不传 `startQueue`/`stopQueue`，行为不变。
- 队列只影响当前空间的待办卡顺序执行，不改动自动化规则、工作区、会话绑定与结果回收。
- 已完成日期筛选只影响界面展示，不删除任何卡片；删除仍走「清空已完成」或单卡删除。

## 验证

- `node --check src/board.js src/host.js src/codex.js client/store.js client/i18n.js client/done-range.js dist/client.js`
  全部通过。
- `npm test`：21 个用例全部通过，其中新增：
  - `test/board-queue.test.mjs`：队列按待办顺序拍快照并跳过自动化卡；逐张取卡/释放；删除卡后跳过；
    停止只停后续派发；队列随 v4 落盘并恢复；旧 v3 文件迁移后 `queue` 为空、版本变 4；
  - `test/done-range.test.mjs`：今天 / 7 天 / 30 天 / 全部的起点、边界与 `updatedAt` 回退。
- `npm run smoke` 全部通过：
  - 既有 Codex 与自动化冒烟不回归；
  - 新增 `scripts/dev/smoke-queue.mjs` 用假 `sessionController` 跑真实 Host：3 张待办按 `first → second → third`
    顺序派发；第一、第三张成功后自动进 `done`；第二张收到 `turn/end(error)` 后留在 `review` 且错误写到卡片；
    队列继续执行到最后一张，结束时 `active = false`、`queue.error` 记录失败卡，每张卡只派发一次。
- `node scripts/build.mjs` 产出 `dist/client.js` 99.1 KB，CI 的 bundle 一致性检查可通过。
- 未在真实 GUI 里点击验证：客户端半片需要刷新页面，Host 半片按 README 的约定要重新加载 bundle
  （移除后重新安装插件，或重启 DSH）后生效；实机视觉与点击效果待用户刷新/重载后确认。
