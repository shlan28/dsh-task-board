# 任务看板空间隔离

## 背景

看板现在是一块全局板：所有卡片混在同一个 `board.json` 里，四列一视同仁。卡片多了以后，
不同用途的任务（工作、营销、个人）挤在一起，筛选只能靠标签和搜索。

目标：

- 看板可以**新建空间**，不同空间的卡片互相隔离，只看得到当前空间的卡；
- 页面右上角有一个**空间下拉筛选**，初始为「默认空间」，可以随时切换；
- 每个空间有自己的列计数、搜索/筛选结果和「清空已完成」范围。

用户选择的是「空间过滤视图」而不是多套物理文件：数据仍写在同一份 `board.json`，卡片带
`spaceId`，界面按当前空间过滤；agent 的 `task_board` 工具也只读写当前空间（可用参数指定）。

## 数据模型

`board.json` 升到 `version: 2`：

```jsonc
{
  "version": 2,
  "spaces": [
    { "id": "default", "name": "", "order": 0, "createdAt": 0 },
    { "id": "s_...", "name": "工作", "order": 1, "createdAt": 1730000000000 }
  ],
  "activeSpaceId": "default",
  "tasks": [ { "id": "t_...", "spaceId": "default", "...": "..." } ]
}
```

- 默认空间的 `id` 固定为 `default`，`name` 留空，界面按宿主语言显示「默认空间 / Default space」，
  切换语言不会把用户数据改掉。
- 自定义空间的 `name` 是用户数据（≤60 字符，去掉首尾空白，同名不允许），`id` 由 `newId('s')` 生成。
- `activeSpaceId` 由 Host 持久化：刷新页面、换会话、agent 调工具看到的都是同一个当前空间。
- 读取旧文件（没有 `spaces` / `spaceId` / `activeSpaceId`）时：
  - 补上默认空间；`activeSpaceId` 回落到 `default`；
  - 每张旧卡片的 `spaceId` 回落到 `default`（旧卡片全部进默认空间，行为不变）；
  - 未知的 `spaceId`（空间被手工删掉）同样回落到默认空间。

## Host（src/board.js、src/host.js）

### Board

| 方法 | 行为 |
|---|---|
| `space(selector)` | 按 id / 名称（含「默认空间」「Default space」）解析空间；不传表示当前空间；找不到返回 `null` |
| `addSpace(name)` | 校验非空、不重名，追加空间并切换为当前空间，返回 `{ ok, space }` 或 `{ ok: false, error }` |
| `removeSpace(id)` | 默认空间拒绝删除；删除后该空间的卡片**移到默认空间**（不丢数据），当前空间被删时回落到默认空间 |
| `selectSpace(id)` | 切换当前空间；空间不存在返回 `null` |
| `add(input)` | `input.spaceId` 命中空间就放进去，否则放当前空间 |
| `clearDone(spaceId)` | 只清空指定空间（缺省当前空间）的已完成卡片 |
| `list()` | 额外返回 `spaces` 与 `activeSpaceId`；卡片都带 `spaceId` |

`spaceId` 会跟 `spaces`、`activeSpaceId` 一起写进 `board.json`（`Board.flush` 的 payload）。

### 接口与工具

- `GET /task-board/state` 增加 `spaces`、`activeSpaceId`、`spacesRevision`；客户端把
  `spacesRevision` 算进刷新指纹，空间增删改与切换会自动同步到其他页面。
- `POST /task-board/op` 新增：
  - `addSpace { name }` → `{ ok, space, state }`；
  - `removeSpace { id }` → `{ ok, moved, state }`；
  - `selectSpace { id }` → `{ ok, state }`；
  - `clearDone` 接受可选 `spaceId`（缺省当前空间）。
- `task_board` 工具：
  - 新参数 `space`：空间 id 或名称，用于 `add` / `list`，缺省当前空间；
  - 新 action `spaces`：列出空间与各自卡片数、当前空间；
  - 新 action `addSpace`：用 `name`（或 `title`）新建空间并切过去；
  - `list` 只返回目标空间里的卡片，并在结果里带上 `space` / `spaces` / `activeSpaceId`；
  - 提示词段落补一句「卡片按空间隔离，默认读写当前空间」。

会话事件折叠（`applyEvent`）不区分空间：后台自动执行中的卡片在别的空间里也会照常更新进度。

## 面板（client/）

- `store.js`：快照增加 `spaces`、`activeSpaceId`、`spacesRevision`；新增 `actions.addSpace` /
  `removeSpace` / `selectSpace`，`selectSpace` 会先关掉详情抽屉（避免看着别的空间的卡）。
- 页头右侧工具栏（搜索、筛选旁）加**空间下拉**：
  - 按钮显示当前空间名 + 卡片数 + 展开箭头；
  - 菜单列出所有空间（名称、卡片数、选中态），每项非默认空间带删除按钮；
  - 菜单底部「+ 新建空间」；
  - 点外部 / Esc 关闭。
- 新建空间弹窗：名称输入 + 创建；创建成功后自动切到新空间。
- 删除空间确认弹窗：说明「该空间的卡片会移到默认空间」，确认后删除并回落到默认空间。
- 看板只渲染当前空间的卡片：列计数、标签快捷按钮、搜索与「全部 / 进行中 / 待验收」筛选、
  「清空已完成」都以当前空间为范围；页头的「n 个进行中 / n 个待验收」也按当前空间统计。
- 新建卡片自动落在当前空间（`add` 带 `spaceId`，Host 也会兜底）。
- 中英文案走 i18n：`Space` / `Default space` / `New space` / `Delete space` 等。

## 兼容性

- 旧 `board.json` 无空间字段 → 全部进默认空间，界面与改动前一致。
- 旧客户端（不传 `spaceId`）建卡 → Host 兜底放进当前空间。
- 空间删除不删卡片，只把卡片移回默认空间；自动化规则、工作区、会话绑定都保留。
- 未改动派发、工作区与定时任务链路：空间只是卡片的分组维度。

## 验证

- `node --check src/board.js src/host.js dist/client.js client/store.js client/i18n.js` 通过；`node scripts/build.mjs`
  产出 `dist/client.js` 71.6 KB。
- 临时 harness（`DSH_HOME` 指向临时目录 + 假 `ctx` / `webServer` / `tools` / `sessionController`）跑了以下断言，全部通过：
  - Board：新建空间后新卡进新空间、切回默认空间后新卡进默认空间；空名 / 重名 / 与默认空间同名被拒绝；
    `space('工作')`、`space('默认空间')`、`space('Default space')` 解析正确；未知空间返回 `null`；
  - `clearDone(spaceId)` 只清该空间的已完成卡，别的空间不受影响；
  - `flushNow` 写出 `version: 2`、`spaces`、`activeSpaceId`、`tasks[].spaceId`；重新加载后空间列表与当前空间保持；
  - 删除空间把卡片移回默认空间、当前空间回落到默认空间；默认空间不能删；
  - 旧 `version: 1` 文件加载后补默认空间、卡片 `spaceId` 回落，并落盘迁移为 v2；
  - HTTP：`/state` 带 `spaces` / `activeSpaceId` / `spacesRevision`（增删空间后 `spacesRevision` 变化）；
    `addSpace` / `selectSpace` / `removeSpace` / `clearDone` 行为与上一致；不存在的空间 id、重名空间被拒绝；
  - 工具：`spaces` 列出空间与卡片数；`list` 默认只看当前空间、传 `space: '工作'` 只看该空间；
    `add` 落到 `space` 指定空间、无效空间被拒绝；`addSpace` 新建并切换当前空间；
  - Host 启动路径加载旧文件（`apply(ctx)`）后，`/state` 与 `list` 都只看到默认空间里的旧卡。
- 面板改动通过构建与静态检查；还没在真实 GUI 里点过空间下拉、新建和删除弹窗，实机效果要等装进 profile 后刷新确认。
