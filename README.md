# dsh-task-board

侧栏里的任务看板。每张卡都可以派发到自己的会话里执行，看板实时折叠进度，执行完把结论收回来。

## 能做什么

- **四列看板**：待办、进行中、待验收、已完成。拖拽换列，卡片上有标签、进度、会话状态。
- **派发到会话**：点卡片上的 ▶ 或「开始执行」，Host 会新建（或复用）一个会话，把任务卡写成提示词塞进去。执行过程中的 `turn/start`、`tool/call`、`assistant/message`、`turn/end` 会实时折算成进度。
- **结果回收**：任务结束自动进「待验收」，最后一次助手回复作为「最新结果」；验收后进「已完成」。
- **会话里加卡**：任意会话里的 agent 都能调用 `task_board` 工具加卡、查卡、改卡、派发或读结果。
- **打开会话**：卡片和详情里都能直接跳到执行它的会话。

## 数据

看板数据保存在 `$DSH_HOME/task-board/board.json`，是普通 JSON，不写会话日志，也不改 profile 配置。

## 安装

这是一个本地 bundle，包内已经带好构建产物：

```bash
# 在 DSH 的 Plugin Manager 里安装这个目录（绝对路径）
/Users/shilu/Documents/deepseek-harness/default-workspace/dsh-task-board
```

修改 `client/` 之后重新构建：

```bash
cd dsh-task-board
npm install            # 只在构建时需要 esbuild
node scripts/build.mjs
rm -rf node_modules
```

Host 半片改动需要重新安装 bundle（先移除再安装）才会加载新的 JavaScript。

## 说明

- 派发默认在侧栏第一个工作区里建会话；卡片会在第一次执行时记住会话，之后「重新执行」沿用它。
- 执行者被要求不要改自己的卡片，进度和结论由看板自动记录。
- 如果当前 profile 没有 `sessionController` 服务，看板仍可手动管理，但无法派发。
