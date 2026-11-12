# Codex（ACP）执行者

## 背景

看板现在只有一种执行者：DSH 会话。卡片点 ▶ 时由 `sessionController.create()` 建会话，再把
`buildPrompt(task)` 投进去，进度靠 `session/event` 折叠（[architecture.md](../architecture.md)）。

本机还装了 OpenAI Codex CLI（`/opt/homebrew/bin/codex`，0.155.1，已登录）。Codex 没有原生 ACP 子命令，
需要用 ACP 适配器 `@agentclientprotocol/codex-acp`（`npx -y @agentclientprotocol/codex-acp`，stdio）
把它包成 ACP agent。看板里没有 DSH 侧的 Codex 运行时服务可复用（`@deepseek-ai/dsh-acp` 是把 DSH 暴露成
ACP **server**，方向相反），所以由插件自己当 ACP **client**。

目标：

1. 页头「新建任务」右侧加一个 agent 图标，点开配置弹窗，能检测本机 Codex（路径、版本、登录状态）并测试连接；
2. 每张卡可以选 **DSH** 或 **Codex** 执行；
3. Codex 执行同样有进度、步骤、最新结果、停止、重跑，结果进「待验收」；
4. **自动化卡也能用 Codex**（这是本次的重点补充）。

## 配置项取舍（参考 Codex 运行时配置页，只保留必须的）

| 参考项 | 取舍 | 说明 |
|---|---|---|
| 可用状态、版本、安装位置 | 保留（只读） | 检测结果一行展示 |
| 重新检测 | 保留 | 打开弹窗自动重检 + 手动按钮 |
| Codex CLI 路径 | 保留 | 留空自动探测；有值作为 `CODEX_PATH` |
| 测试连接 | 保留 | ACP `initialize` + `session/new`，不建卡、不花 token |
| 默认模型 | 保留（可空） | 空 = Codex 默认；有值写 `CODEX_CONFIG` |
| 运行权限 | 新增 | `只读 / 工作区可写（默认）/ 完全访问` → `INITIAL_AGENT_MODE` |
| 自动确认工具调用 | 新增 | 默认开；无人值守卡必需，沙箱由 Codex 兜底 |
| ACP 适配器命令 | 保留（高级） | 默认 `npx -y @agentclientprotocol/codex-acp`，可改成已安装的本地可执行文件 |
| 一键升级 | 不要 | 交给 `codex update` / npm，插件不做包管理 |
| 程序附加参数 | 不要 | 用运行权限覆盖主要诉求 |
| 环境变量 | 不要 | 继承 DSH 进程环境；登录态复用 `~/.codex`，不存密钥 |
| 「N 个 Agent」 | 不要 | 只接一个 Codex 运行时 |

## 方案

### 1. 执行者

- `board.json` 升 `version: 3`，卡片新增 `executor: 'dsh' | 'codex'`（默认 `dsh`）和 `codex` 运行信息
  （`sessionId`、`model`、`stopReason`、`startedAt`）。旧文件按 `dsh` 迁移并落盘。
- Codex 卡不复用 DSH 会话：`sessionId` 保持 `null`，ACP 会话 id 记在 `task.codex.sessionId`。
- 详情页/新建弹窗都能选执行者；运行中不允许切换（先停止）。切换时清掉另一种执行者的会话，并迁移自动化（见下）。

### 2. ACP 客户端（`src/acp.js`）

零依赖、NDJSON 的 JSON-RPC 客户端：

- `spawn` 适配器命令（默认 `npx -y @agentclientprotocol/codex-acp`；Windows 用 `npx.cmd`），
  环境带 `CODEX_PATH`、`INITIAL_AGENT_MODE`、`NO_BROWSER=1`、`CODEX_CONFIG`（有默认模型时）；
- 方法：`initialize`（`protocolVersion: 1`）、`session/new`、`session/prompt`、`session/set_config_option`、
  `session/cancel`；
- 通知：`session/update`（`agent_message_chunk` / `agent_thought_chunk` / `tool_call` / `tool_call_update` / `plan` 等）；
- 请求：`session/request_permission` → 自动批准（优先 `allow_once`），没有可批准项时回 `cancelled`；
- 进程管理：请求超时、stderr 环形缓冲（失败时带末尾日志）、退出码、kill（SIGTERM → SIGKILL）。

### 3. 检测与测试（`src/codex.js`）

- 检测：解析 Codex 路径（配置值 → `PATH`），跑 `codex --version`、`codex login status`（各 4s 超时）；
  适配器按配置命令 → `PATH` 里的 `codex-acp` → `npx` 解析；状态分 `ready / no-codex / no-adapter / error`。
- 测试：起适配器 → `initialize` → `session/new`（临时目录）→ 关闭；返回协议版本、Codex 登录提示、
  可用模型/模式（适配器公告时）。不发送提示词，不产生模型调用。
- 配置存 `$DSH_HOME/task-board/agent.json`（独立于 `board.json`），字段：
  `codexPath`、`adapterCommand`、`model`、`permissionMode`、`autoApprove`、`lastDetectedAt`。
  密钥不落盘。

### 4. 运行链路

一次 Codex 运行：

```text
spawn 适配器（cwd = 卡片工作区 / 默认目录）
→ initialize
→ session/new { cwd, mcpServers: [] }     卡片：进行中，progress 6
→ session/prompt(buildPrompt(task))
← session/update*                        折叠进度、步骤、结果
→ prompt 结果 stopReason                 待验收 / 待办 / 错误
```

事件折叠（`board.js` 新增 `applyCodex`，阶段词汇与 DSH 一致）：

| ACP | 卡片 |
|---|---|
| `session/new` 成功 | `doing`、progress 6、`phase: queued` |
| `agent_thought_chunk` | `thinking`，progress ≥ 12 |
| `tool_call` | `steps++`、`tool`、`toolName`、progress 26+7n（≤86） |
| `agent_message_chunk` | 追加到「最新结果」、`writing`、progress ≥ 88 |
| `stopReason: end_turn` | `review`、progress 100 |
| `cancelled` | `todo`、`stopped` |
| 其他 / 进程异常 | `review` + `error` |

并发与生命周期：

- 默认同时 1 个 Codex 运行，其余卡 FIFO 排队（`phase: queued`）；停止排队卡直接出队。
- 停止运行卡：`session/cancel` → 3s 后 SIGTERM → 5s 后 SIGKILL；卡片回待办。
- 单次运行 45 分钟看门狗，超时取消并置错误。
- 插件卸载/宿主退出时杀掉所有子进程。
- 插件启动时把 `running` 的 Codex 卡标记为「运行中断」（子进程已不在），回待办并写错误。

### 5. 自动化（Codex 卡）

DSH 的 `schedule` 只能把提示词投递到 DSH 会话，Codex 卡没有会话可投。因此：

- `automation.engine` 区分 `dsh`（DSH 定时任务）与 `board`（插件内调度）；
- Codex 卡的自动化用 `board` 引擎：卡片里存 `rrule / frequency / time / weekdays / timeZone / nextAt /
  lastFiredAt / active`，不创建 DSH 定时任务；
- 插件每 30s 检查一次到期的 `board` 自动化，到点把卡交给 Codex 运行队列，然后算下一次 `nextAt`；
- `src/rrule.js` 实现时区感知的「下一次执行」，覆盖 UI 生成的三种规则：
  `FREQ=HOURLY`、`FREQ=DAILY`、`FREQ=WEEKLY;BYDAY=...`（支持 `INTERVAL`、`BYHOUR`、`BYMINUTE`）；
  自定义 RRULE 里出现不支持的部件时，Codex 卡拒绝保存该规则并给出提示；
- 暂停/恢复只改 `active`；「已完成」列暂停、「待办/进行中」恢复（与现有自动化的停表语义一致）；
- 「立即执行」直接进 Codex 队列，不移动 `nextAt`；
- 停机错过的发生点只补一次（启动后第一次 tick 触发），与 DSH 定时任务行为一致；
- **切换执行者时迁移自动化**：DSH → Codex 删除 DSH 定时任务、按同一 RRULE 建 `board` 自动化；
  Codex → DSH 反过来建 DSH 定时任务、清掉 `board` 字段。

### 6. 接口与工具

- `GET /task-board/state` 增加 `agent`（`status` + `config`）和 `agentRevision`；
- `POST /task-board/op` 增加 `agentDetect` / `agentTest` / `agentSave`；`add` / `update` 接受 `executor`；
  `dispatch` / `stop` 按卡片执行者分流；
- `task_board` 工具：`add` / `update` 增加 `executor`，`run` 遵守卡片执行者（Codex 卡不支持 `here`），
  新增 `agent` 动作读取运行时状态；`list` / `result` 输出 `executor` 与自动化引擎。

## 兼容与限制

- 旧 `board.json`（v2）自动迁移成 v3，行为不变；旧自动化按有 `scheduleId` 判定为 `dsh`。
- Codex 运行不产生 DSH 会话：详情页没有「打开会话」，只能看 ACP 会话 id、进度和结果。
- 首次使用需要网络拉取 `@agentclientprotocol/codex-acp`（或预装并填本地命令）；未登录时提示
  `codex login`，插件不代做登录。
- 无人值守默认「工作区可写 + 自动确认工具调用」，安全边界由 Codex 沙箱承担；「完全访问」需要手选。
- Windows 只做 `npx.cmd` 兼容，未实机验证。
- 自定义 RRULE 的 Codex 自动化只支持上述三种频率。

## 验证

（实现完成后补）
