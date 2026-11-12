# 实现

## 半片结构

| 路径 | 作用 |
|---|---|
| `src/host.js` | Host 半片：`/task-board/*` 接口、会话派发、定时任务对接、`task_board` 工具、提示词段落 |
| `src/board.js` | 看板数据层：任务折叠、进度与结果、自动化配置、执行者字段、持久化（纯 JSON，可单测） |
| `src/codex.js` | Codex 运行时：本机检测、`agent.json` 配置、ACP 运行队列、事件折叠 |
| `src/acp.js` | ACP stdio 客户端（零依赖 NDJSON JSON-RPC） |
| `src/rrule.js` | 时区感知的 RRULE 求值（每小时 / 每天 / 每周），给 Codex 卡自动化算下一次执行 |
| `client/` | 浏览器半片：侧栏入口、看板面板、弹窗、拖拽、样式、i18n |
| `dist/client.js` | 构建产物（esbuild 打包，`react` 由宿主提供），安装时直接使用 |
| `cordis.patch.yml` | bundle patch，向 profile 插入 `task-board` 这一行 |
| `locale/` | 插件在插件管理页里的标题与描述 |

Host 半片通过 `ctx.get(...)` 可选依赖宿主服务：`sessionController`（建会话/派发）、`schedule`（定时任务）、`tools`（注册 `task_board` 工具）、`systemPrompt`（提示词段落）、`workingDirectory`（会话目录）、`workspaceRegistry`（工作区）。缺服务时功能降级而不是崩溃（例如没有 `schedule` 就没有自动化）。

## 派发与进度折叠

1. 手动派发：`dispatch()` 复用卡片已有会话，没有就按卡片绑定的工作区新建（`openSession(task)`，见下）；
2. 把卡片写成提示词（`buildPrompt`）塞进会话；
3. 宿主 `session/event` 把 `turn/start`、`tool/call`、`assistant/message`、`turn/end` 折算成进度、阶段与结果；
4. `turn/end` 且正常完成 → 进「待验收」，最后一次助手文本存为「最新结果」。
5. 验收（`accept`）：普通卡进「已完成」；**自动化卡回到「待办」**（周期任务没有终态），进度归零，定时规则与上一轮结果都保留。

## 工作区绑定

- 卡片可选地记录 `workspaceId` / `workspacePath` / `workspaceTitle`，三个都为空就跟随宿主默认目录；`workspacePath` 是真正用来建会话的目录。
- `workspaceOf(task)` 每次派发时按 `workspaceRegistry.list()` 重新解析：id 命中优先，其次按路径匹配，注册表里没有这条记录时直接用保存的路径（工作区被移除后卡片还能继续跑）。
- `openSession(task)`：有工作区 → `create({ workspaceId })`，失败退 `create({ cwd })`；没有工作区 → 原来的默认目录逻辑（默认目录匹配的工作区，否则第一个工作区，最后 `cwd`）。
- 换工作区会清空卡片的 `sessionId`，下一次执行在新目录里新建会话；正在执行的卡不允许换（避免运行中会话和卡片标签对不上）。
- `task_board add` 没给 `workspace` 时，若发起会话的目录正好是某个已注册工作区，自动绑到那个工作区。

## 空间隔离

- `board.json` 升到 `version: 2`，多了 `spaces` 与 `activeSpaceId`，每张卡片带 `spaceId`。默认空间的 id 固定为 `default`，名称不落盘（空串），界面按语言显示「默认空间 / Default space」，所以切换界面语言不会改用户数据。
- 读取旧文件时补默认空间：没有 `spaceId` 的卡片回落默认空间，失效的 `spaceId` / `activeSpaceId` 也回落默认空间；迁移后 `touch()` 一次，把文件落盘成新版本，不会每次启动都重新迁移。
- `Board` 的空间操作：`addSpace`（空名、与默认空间同名、重名都拒绝，创建后切到新空间）、`removeSpace`（默认空间不可删，空间里的卡片移回默认空间后才删除空间）、`selectSpace`（写 `activeSpaceId`）。`add` 缺省写当前空间，`clearDone` 只清指定空间（缺省当前空间）。
- 接口：`GET /task-board/state` 额外返回 `spaces`、`activeSpaceId`、`spacesRevision`；`POST /task-board/op` 新增 `addSpace` / `removeSpace` / `selectSpace`，`add` 接受 `spaceId`，`clearDone` 接受 `spaceId`。
- `task_board` 工具新增 `space` 参数（`add` / `list`，空间 id 或名称，缺省当前空间）与 `spaces`（列空间和各自卡片数）、`addSpace`（新建空间）动作；`list` 只返回目标空间的卡片，`compact` 输出带 `spaceId`。
- 面板按 `activeSpaceId` 过滤：列计数、`tags`、搜索、`全部 / 进行中 / 待验收` 筛选、「清空已完成」都只算当前空间；切换空间由 Host 落盘，所以刷新页面或多个标签页看到的当前空间一致。
- 会话事件折叠（`applyEvent`）不分空间：卡片在别的空间里后台执行时进度照常折叠，切回去就能看到。

## Codex 执行者

- 卡片新增 `executor: 'dsh' | 'codex'`，默认 `dsh`；旧 `board.json`（v2）读取时补 `dsh` 并升到 v3。
- Codex 卡不建 DSH 会话：`dispatch` 进 `CodexAgent` 的运行队列（默认并发 1，其余排队），启动适配器
  `npx -y @agentclientprotocol/codex-acp`。检测到的本机 Codex 路径会作为 `CODEX_PATH` 传给适配器（npx 缓存里
  自带的 codex 可能缺平台依赖），`INITIAL_AGENT_MODE` / `CODEX_CONFIG` 由 `agent.json` 注入；默认模型在
  `session/new` 之后通过 ACP `session/set_config_option` 应用。
- ACP 握手：`initialize` → `session/new { cwd: workspace }` → `session/prompt(buildPrompt)`；`session/update` 里的
  thought / tool_call / agent_message_chunk 折成 `board.markCodex*`，复用与 DSH 相同的阶段与进度；`stopReason` 决定
  待验收 / 待办 / 错误。
- `session/request_permission` 默认自动批准（优先 `allow_once`），沙箱由 Codex 自己执行；关闭自动批准时一律拒绝。
- 停止：`session/cancel` → 3s 后关闭连接；45 分钟看门狗兜底；插件卸载或宿主重启时子进程被杀，启动时把仍在
  `running` 的 Codex 卡标成「运行中断」。
- 检测与测试：解析 Codex 路径后跑 `--version` / `login status`；测试连接只做 `initialize` + 临时 `session/new`，
  不发送提示词。配置存 `$DSH_HOME/task-board/agent.json`，不存密钥。

## 自动化双引擎

- `automation.engine`：`dsh` 走宿主 `schedule`；`board` 走插件内调度，只用于 Codex 卡（DSH 定时任务只能投递到会话）。
- `board` 引擎把 `rrule`、`nextAt`、`lastFiredAt` 存在卡片里，插件每 30 秒检查一次到期卡，交给 Codex 队列后
  用 `src/rrule.js` 算下一次；停机错过的发生点只补一次。
- 暂停 / 恢复只改 `active`；「已完成」列暂停、「待办/进行中」恢复，与 DSH 卡一致。
- 切换执行者时自动迁移：DSH → Codex 删除定时任务、按同一规则建 `board` 自动化；Codex → DSH 反过来建定时任务。
  规则里出现不支持的部件（如 `FREQ=MINUTELY`、`BYMONTH`、`COUNT`）时拒绝切换并提示。
- 兼容：旧自动化没有 `engine`，按「有 `scheduleId` 就是 dsh」处理。

## 自动化投递链路

- 卡片上的自动化由 DSH 内置 `schedule` 服务承载（不自己维护定时器），规则用 RRULE：`DTSTART;TZID=<zone>:20260101THHMM00` + `RRULE:FREQ=...`。
- 目标用 `new_once`：创建时预留一个会话 id 存进卡片的 `automation.reservedSessionId`，到点由定时任务在**同一个会话**里投递提示词。投递目录取卡片工作区，没有就用 `automationDirectory(actorSessionId)`（发起操作的会话目录 → 第一个工作区 → 默认目录）。
- 卡片工作区变了：`schedule.edit` 的 patch 带 `target: { kind: 'new_once', create: { cwd } }` 把定时目标改到新目录，返回的 entry 里新的预留会话 id 写回卡片；`automation.targetPath` 记住当前投递目录，用来判断是否真的需要改。
- 看板监听 `session/event`：来自预留会话的 `turn/start` 说明这一轮自动执行开始，卡片接管会话（写入 `taskId.sessionId`）、切到「进行中」并记录 `lastFiredAt`，后续进度照常折叠；上一轮结束后再来的 `turn/start` 视为新一次执行，进度重置。
- 「下次执行」来自 `schedule.catalog()`，本地缓存 1.5 秒，`schedule/changed` 时失效；状态变化通过 `schedulesRevision` 通知客户端刷新。
- 暂停/启用/改规则走 `schedule.edit`，取消自动化走 `schedule.edit` 删除任务；删卡会级联删除对应定时任务。
- 「已完成」对自动化卡是**停表**而不是终点：手动拖进「已完成」会暂停对应定时任务，拖出时自动恢复（`syncAutomationByColumn`）。否则下一轮到点会把卡从「已完成」拽回「进行中」，跑完落到「待验收」，看起来像自己复活。

## 数据与持久化

- 卡片与空间：`$DSH_HOME/task-board/board.json`（`version: 2`，含 `spaces`、`activeSpaceId`、`tasks[].spaceId`），`Board` 类在内存里维护，`touch()` 攒 250ms 后原子写（临时文件 + rename）；卡片里的工作区字段和 `automation.targetPath` 一起持久化，旧文件缺这些字段按空处理。
- 自动化规则：`$DSH_HOME/storages/schedule.json`，属于 DSH 定时任务服务。
- 工作区列表不落盘：每次 `/task-board/state` 从 `workspaceRegistry.list()` 现读，客户端把 `workspacesRevision` 算进刷新指纹。
