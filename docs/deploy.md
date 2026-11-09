# 部署

插件是一个 DSH bundle 包：同一个包提供 Host 半片和浏览器半片。装进某个 profile 后，对该 profile 下的**所有会话**生效，不需要重启 Harness（Host 模块在装载时读取，换代码要重装一次，见「更新」）。

## 兼容性

- DSH `>=0.2.1-rc.5 <0.3.0`
- Node `>=20`
- 仓库自带 `dist/client.js`，安装时不需要构建

## 安装方式

### 1. 从 npm 安装（推荐给使用者）

在 DSH 的「插件」页安装外部 bundle，填入包名：

```
dsh-color-task-board
```

指定版本：`dsh-color-task-board@0.1.6`。

用 `dsh` CLI 安装到某个 profile：

```bash
dsh plugin --profile desktop add dsh-color-task-board
```

### 2. 从 GitHub 安装

填入 pnpm spec，二选一：

```
github:shlan28/dsh-task-board
https://github.com/shlan28/dsh-task-board
```

### 3. 本地开发安装（link）

```bash
git clone https://github.com/shlan28/dsh-task-board.git
cd dsh-task-board
npm install
node scripts/build.mjs
```

然后在「插件」页安装这个目录的**绝对路径**，profile 里会以 `link:` 依赖指向它，改代码不用重新发布。

以上方式也可以让 agent 直接调用 `plugin_manager`：

- 安装：`install_bundle`，`target` 填上面的包名 / spec / 目录
- 已安装时先 `remove_bundle`（`target` 填包名）再 `install_bundle`

## 安装后验证

- 侧栏出现「任务看板」入口，点开显示四列看板
- 任意会话里 `task_board` 工具可调用（`list` 返回 `ok: true`）
- 宿主侧数据接口可用：`GET /task-board/state`（未带鉴权头会返回 401，属正常）
- 自动化卡片会在 Harness 的「自动化任务」页面出现同名任务（标题形如 `任务看板 · <卡片标题>`）

## 更新

- **开发模式（link 到本地目录）**：改 `client/` → `node scripts/build.mjs` → 刷新页面；改 `src/`（Host 半片）→ 卸载再安装一次，Host 才会加载新代码。
- **npm 安装**：插件页卸载 `dsh-color-task-board`，再安装新版本（`dsh-color-task-board@x.y.z`）。没有一键升级按钮，因为包和 bundle 行是绑定的。

## 卸载

插件页卸载 `dsh-color-task-board`。卸载不会删除看板数据，也不会删除已经创建在 DSH 定时任务服务里的自动化任务；需要的话在「自动化任务」页面单独删。

## 数据位置

| 数据 | 位置 | 说明 |
|---|---|---|
| 看板卡片 | `$DSH_HOME/task-board/board.json` | 普通 JSON，插件自己读写；原子写入（临时文件 + rename） |
| 自动化规则 | `$DSH_HOME/storages/schedule.json` | 由 DSH 内置定时任务服务持有，卡片里只存任务 id、规则和预留会话 |

插件不写会话日志、不改 profile 配置。
