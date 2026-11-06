# 实现

## 半片结构

| 路径 | 作用 |
|---|---|
| `src/host.js` | Host 半片：`/task-board/*` 接口、会话派发、定时任务对接、`task_board` 工具、提示词段落 |
| `src/board.js` | 看板数据层：任务折叠、进度与结果、自动化配置、持久化（纯 JSON，可单测） |
| `client/` | 浏览器半片：侧栏入口、看板面板、弹窗、拖拽、样式、i18n |
| `dist/client.js` | 构建产物（esbuild 打包，`react` 由宿主提供），安装时直接使用 |
| `cordis.patch.yml` | bundle patch，向 profile 插入 `task-board` 这一行 |
| `locale/` | 插件在插件管理页里的标题与描述 |

Host 半片通过 `ctx.get(...)` 可选依赖宿主服务：`sessionController`（建会话/派发）、`schedule`（定时任务）、`tools`（注册 `task_board` 工具）、`systemPrompt`（提示词段落）、`workingDirectory`（会话目录）、`workspaceRegistry`（工作区）。缺服务时功能降级而不是崩溃（例如没有 `schedule` 就没有自动化）。

## 派发与进度折叠

1. 手动派发：`dispatch()` 复用卡片已有会话，没有就用 `sessionController.create()` 新建；
2. 把卡片写成提示词（`buildPrompt`）塞进会话；
3. 宿主 `session/event` 把 `turn/start`、`tool/call`、`assistant/message`、`turn/end` 折算成进度、阶段与结果；
4. `turn/end` 且正常完成 → 进「待验收」，最后一次助手文本存为「最新结果」。

## 自动化投递链路

- 卡片上的自动化由 DSH 内置 `schedule` 服务承载（不自己维护定时器），规则用 RRULE：`DTSTART;TZID=<zone>:20260101THHMM00` + `RRULE:FREQ=...`。
- 目标用 `new_once`：创建时预留一个会话 id 存进卡片的 `automation.reservedSessionId`，到点由定时任务在**同一个会话**里投递提示词。
- 看板监听 `session/event`：来自预留会话的 `turn/start` 说明这一轮自动执行开始，卡片接管会话（写入 `taskId.sessionId`）、切到「进行中」并记录 `lastFiredAt`，后续进度照常折叠；上一轮结束后再来的 `turn/start` 视为新一次执行，进度重置。
- 「下次执行」来自 `schedule.catalog()`，本地缓存 1.5 秒，`schedule/changed` 时失效；状态变化通过 `schedulesRevision` 通知客户端刷新。
- 暂停/启用/改规则走 `schedule.edit`，取消自动化走 `schedule.edit` 删除任务；删卡会级联删除对应定时任务。

## 数据与持久化

- 卡片：`$DSH_HOME/task-board/board.json`，`Board` 类在内存里维护，`touch()` 攒 250ms 后原子写（临时文件 + rename）。
- 自动化规则：`$DSH_HOME/storages/schedule.json`，属于 DSH 定时任务服务。
