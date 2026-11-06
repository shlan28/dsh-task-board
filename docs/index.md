# 文档索引

dsh-task-board 是 DeepSeek Harness 的侧栏任务看板插件：任务卡可以派发到自己的会话里执行，也可以按计划自动重复执行，结果回收到「待验收」。

README 只保留项目简介、安装和使用入口；技术、产品、部署、发布与方案文档都在本目录，并由本页登记。

## 项目结构

```text
src/
  host.js       Host 半片：/task-board/* 接口、会话派发、定时任务对接、task_board 工具、提示词段落
  board.js      看板数据层：任务折叠、进度与结果、自动化配置与持久化
client/         浏览器半片：侧栏入口、看板面板、弹窗、拖拽、样式、i18n
dist/           构建产物 dist/client.js，安装时直接使用
locale/         插件在插件管理页里的标题与描述
scripts/        构建脚本（esbuild 打包 client/）
docs/           项目文档（本目录）
cordis.patch.yml bundle patch，插入 task-board 这一行
```

## 文档

| 文档 | 内容 |
|---|---|
| [deploy.md](deploy.md) | 部署：安装方式、安装后验证、更新、卸载、数据位置、兼容性 |
| [release.md](release.md) | 发布：版本号、npm publish、tag、发布后校验 |
| [architecture.md](architecture.md) | 实现：host/client 分工、数据流、自动化投递链路 |
| [plans/](plans/) | 方案与计划文档 |

## 维护约定

- 技术、产品、bug 文档统一放本目录，并在上面的表格里登记。
- 新的方案/计划写进 `plans/`，命名 `YYYY-MM-<主题>.md`，完成后补上验证结果。
- 部署方式、依赖版本或数据位置变化时，同步更新 [deploy.md](deploy.md)。
- README 不写发布/部署细则，只放简介、功能、安装入口和使用说明，细则链接到本目录。
