# 任务卡绑定工作区

## 背景

看板以前是「一块全局板」：卡片不记录工作区，点 ▶ 派发时 `sessionController.create()` 固定用宿主默认目录
（`workingDirectory.defaultDirectory`，再按路径匹配已注册工作区，匹配不到就用第一个）。结果是：

- 在任何工作区的会话里加卡，▶ 执行都落到默认目录，而不是加卡时所在的工作区；
- 想让卡片在别的项目里跑，只能先切默认目录，或在目标会话里用 `here: true` 手动执行。

目标：**每张卡可以指定派发到哪个工作区**（用户选择的是方案 A）。看板仍然是一块全局板，数据不分片。

## 现状（改动前）

- `Board` 只保存 `sessionId`，没有工作区/目录字段；`board.json` 全局一份。
- `openSession()` 用 `boardDirectory()` 建会话；`dispatch()` 只复用卡片已有会话。
- 自动化任务用 `automationDirectory(actorSessionId)` 决定 `new_once` 目标的 `cwd`：优先发起操作的会话目录，
  其次第一个已注册工作区，最后默认目录。
- 面板没有任何工作区相关的 UI。

## 方案

### 1. 卡片数据

`task` 新增三个字段（都可为空，空 = 跟随宿主默认目录）：

| 字段 | 含义 |
|---|---|
| `workspaceId` | `workspaceRegistry` 里的工作区 id（工作区被移除后保留，用于展示和回退） |
| `workspacePath` | 工作区的绝对路径（真正的派发目录；工作区移除后仍可继续用这个目录） |
| `workspaceTitle` | 选择时的展示标题，仅用于界面；派发以路径为准 |

自动化配置 `automation` 新增 `targetPath`：记住定时任务当前投递目录，用来判断换工作区时是否需要改 `target`。

`Board.update` 额外接受 `sessionId`（`null` 清除），换工作区时用它丢掉旧会话，保证下一次 ▶ 在
新工作区里新建会话，而不是复用旧目录里的会话。

### 2. 派发

新增 `workspaceOf(task)`：先按 `workspaceId` 在 `workspaceRegistry.list()` 里找，找不到再按
`workspacePath` 匹配或直接使用保存的路径，都没有返回 `null`。

`openSession(task)`：

1. 有工作区且 id 仍存在 → `sessionController.create({ workspaceId })`；
2. 失败或只有路径 → `create({ cwd: workspacePath })`；
3. 没有工作区 → 保持原来的默认目录逻辑。

`dispatch()` 把卡片传给 `openSession(task)`；`here: true` 仍然直接在当前会话执行，不受工作区影响。

### 3. 自动化

- 建定时任务时 `target.create.cwd = workspaceOf(task)?.path || automationDirectory(actorSessionId)`，
  并写回 `automation.targetPath`。
- 改卡时如果卡片工作区路径和 `targetPath` 不同，`schedule.edit` 的 patch 里带上
  `target: { kind: 'new_once', create: { cwd } }`，并从返回的 entry 里更新 `reservedSessionId`
  （定时服务会为新的 `new_once` 目标重新预留会话 id）。
- 卡片没有工作区时不动 `target`，保持旧行为（默认目录 / 发起会话目录）。

### 4. 面板

- 新建任务弹窗增加「工作区」下拉：默认目录 + 已注册工作区。
- 详情页增加「工作区」区块，直接切换；正在执行的卡不允许换工作区（避免运行中会话和标签不一致）。
- 卡片 chips 上显示工作区名（文件夹图标 + 标题，`title` 提示完整路径）。
- 工作区被移除的卡仍显示保存的标题/路径，派发继续用保存的路径。

### 5. Host 接口与工具

- `GET /task-board/state` 增加 `workspaces`（`{ id, path, title }` 列表）、`defaultWorkspacePath`、
  `workspacesRevision`；客户端把它算进刷新指纹，工作区增删改会自动刷新下拉。
- `POST /task-board/op` 的 `add`/`update` 接受 `workspaceId` / `workspacePath` / `workspaceTitle`，
  服务端按注册表重新解析、校验目录存在，不信任客户端传来的标题。
- `task_board` 工具新增 `workspace` 参数（add/update）：接受工作区 id、绝对路径或工作区标题；
  `''` 表示清除。`add` 没传时，如果当前会话目录正好对应某个已注册工作区，就自动绑到那个工作区；
  `list` / `result` 的输出带上工作区字段。

## 兼容性

- 旧 `board.json` 没有新字段 → 按 `null` 处理，行为与改动前完全一致。
- 旧自动化任务没有 `targetPath` → 不触发重投递；只有用户改卡工作区后才会改 `target`。
- 会话复用规则：只有「工作区设置发生变化」时才清空 `sessionId`；同一工作区内反复执行仍然复用会话。

## 验证

- `node --check src/host.js src/board.js dist/client.js` 通过；`node scripts/build.mjs` 产出 `dist/client.js` 61.6 KB。
- 本地 harness（临时 `DSH_HOME` + 假 `ctx` / `sessionController` / `schedule` / `workspaceRegistry`）跑了以下断言，全部通过：
  - add 用工作区标题解析出 id / 路径 / 标题；`run` 调 `create({ workspaceId })`；
  - 定时卡按卡片工作区创建（`target.create.cwd`）；改工作区后 `schedule.edit` 带 `target`，`reservedSessionId` 更新，`sessionId` 清空；
  - 不存在的工作区、不存在/非绝对路径被拒绝；`list` 输出带工作区字段；
  - `/state` 带 `workspaces`、`defaultWorkspacePath`、`workspacesRevision`；HTTP `add` / `update` 与工具行为一致；
  - 执行中的卡换工作区被拒绝；发起会话目录命中注册工作区时自动绑定；没有工作区的卡仍走默认目录；
  - `board.json` 新增 → 重载 → 清空工作区字段的持久化测试通过。
- 面板改动只做了构建与静态检查，界面交互（下拉、卡片工作区提示）在实机刷新后人工确认。
- 实机验证（desktop profile，`link:` 安装）：卸载 bundle 再装回后，`task_board` 工具说明已带 `workspace` 参数；用工具建卡时 `workspace: "codex-bridge"` 解析出真实工作区 id / 路径，改到 `default-workspace`、传 `workspace: ""` 清空、删卡都成功，验证后看板只剩原有卡片。
- 面板需要刷新页面才会加载新的 `dist/client.js`；`src/` 的改动要按 [deploy.md](../deploy.md) 卸载再安装才生效。
