# dsh-task-board

[![npm](https://img.shields.io/npm/v/dsh-color-task-board.svg)](https://www.npmjs.com/package/dsh-color-task-board)
[![build](https://github.com/shlan28/dsh-task-board/actions/workflows/build.yml/badge.svg)](https://github.com/shlan28/dsh-task-board/actions/workflows/build.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

DeepSeek Harness 的侧栏任务看板。任务卡可以派发到自己的会话里执行，看板实时折叠进度，执行完把结论收回来；也可以按计划自动重复执行。

![任务看板](docs/images/task-board.png)

## 功能

- **四列看板**：待办、进行中、待验收、已完成。拖拽换列，卡片上有标签、进度条和执行阶段。
- **派发到会话**：点卡片上的 ▶ 或详情里的「开始执行」，Harness 会新建（或复用）一个会话，把任务卡写成提示词派发进去。执行过程中的 `turn/start`、`tool/call`、`assistant/message`、`turn/end` 会实时折算成进度。
- **自动化任务**：新建任务时切到「定时执行」，按每小时、每天或每周（可多选星期几）重复。到点由 DSH 的定时任务自动把这张卡派发进它自己的会话，执行结果照常进「待验收」。卡片和详情里会显示规则与下次执行时间，可以暂停、启用、改规则或取消自动化。
- **结果回收**：任务结束自动进「待验收」，最后一次助手回复存为「最新结果」；验收后进「已完成」。
- **会话里加卡**：任意会话里的 agent 都能调用 `task_board` 工具加卡、查卡、改卡、派发或读结果。
- **打开会话**：卡片和详情里都能直接跳到执行它的会话。
- **跟随宿主**：中英文案走 DSH locale，颜色走 `--dsw-alias-*` 主题 token，明暗主题通用。

## 安装

要求 DSH `>=0.2.1-rc.5 <0.3.0`、Node `>=20`。仓库里已经带好构建产物 `dist/client.js`，安装时不需要构建。

### 从 npm 安装（推荐）

包名：**`dsh-color-task-board`** · [npm 页面](https://www.npmjs.com/package/dsh-color-task-board)

在 DSH 的「插件」页安装外部 bundle，把包名填进去：

```text
dsh-color-task-board
```

需要固定版本时写成 `dsh-color-task-board@0.1.4`。也可以用 `dsh` CLI 安装到某个 profile：

```bash
dsh plugin --profile desktop add dsh-color-task-board
```

### 从 GitHub 安装

在插件页填 pnpm spec：

```text
github:shlan28/dsh-task-board
```

或者用完整仓库地址 `https://github.com/shlan28/dsh-task-board`。

### 本地开发安装

安装本目录的**绝对路径**，profile 里会以 `link:` 依赖指向它，改代码不用重新发布：

```bash
git clone https://github.com/shlan28/dsh-task-board.git
cd dsh-task-board
npm install
node scripts/build.mjs
```

安装、更新、卸载与数据位置的完整说明见 [docs/deploy.md](docs/deploy.md)。

## 使用

1. 点侧栏的看板图标进入面板，右上角「新建任务」。
2. 想让这张卡自己跑，就在新建面板里把「自动化」切到「定时执行」，选频率、时间（每周再选星期几）后创建。
3. 卡片上点 ▶ 开始执行；卡片详情里能看到绑定会话、执行阶段、最新结果，也能停止、验收、退回待办或删除。
4. 详情里的「自动化」区块可以看下次执行时间、暂停 / 启用、修改规则、取消自动化。
5. 在任意会话里说「把 XX 加到看板」或「每天 9 点检查部署」，agent 会调用 `task_board` 建卡，`automation` 参数负责定时规则。

`task_board` 工具的动作：`add`、`list`、`update`、`move`、`run`（`here: true` 表示在当前会话执行）、`result`、`remove`。`add` 和 `update` 还接受 `automation`：`{ frequency: 'daily' | 'weekly' | 'hourly' | 'none', time: 'HH:MM', weekdays: ['MO', …], timeZone, active, rrule }`。

## 数据

看板数据保存在 `$DSH_HOME/task-board/board.json`，是普通 JSON。不写会话日志，不改 profile 配置。

自动化规则交给 DSH 自带的定时任务服务保存（`$DSH_HOME/storages/schedule.json`），卡片里只存任务 id、规则和预留会话。所以这张卡也会出现在 Harness 的「自动化任务」页面里；在那边停用或删除，看板卡片会显示为已暂停 / 没有后续执行。

## 开发

```bash
npm install              # 只在构建时需要 esbuild
node scripts/build.mjs   # 产出 dist/client.js
npm run watch            # 监听 client/
```

- 只改 `client/`：重新构建后刷新页面。
- 改 `src/`（Host 半片）：需要先移除 bundle 再安装一次，Harness 才会加载新的 Host 代码。
- CI 会校验提交的 `dist/client.js` 与 `client/` 源码一致，改完记得一起提交。

## 文档

- [docs/index.md](docs/index.md) — 文档索引与项目结构
- [docs/deploy.md](docs/deploy.md) — 部署与更新
- [docs/release.md](docs/release.md) — 发布新版本
- [docs/architecture.md](docs/architecture.md) — 实现说明
- [docs/plans/](docs/plans/) — 方案与计划

## License

[MIT](LICENSE)
