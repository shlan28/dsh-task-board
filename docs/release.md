# 发布

发布到 npm 的包名是 `dsh-color-task-board`（无 scope）。名字的由来：最初的 `dsh-task-board` 与已有的 `dsh-taskboard` 过于相似，npm 以 403 拒绝，所以加上 `color` 区分。

## 流程

```bash
# 官方源和 GitHub 要走本地代理（ClashX 127.0.0.1:7890），见下节
export HTTPS_PROXY=http://127.0.0.1:7890 HTTP_PROXY=http://127.0.0.1:7890

node scripts/build.mjs                     # 1. 改了 client/ 就重新构建，dist/client.js 要一起提交
git add -A && git commit -m "feat: ..."     # 2. 提交改动
npm version patch -m "chore: release %s"    # 3. 版本号 +1 并打 tag（minor / major 同理）
npm publish                                # 4. 发布，prepublishOnly 会再构建一次
npm run sync-mirror                        # 5. 等官方落库并同步 npmmirror（必须，脚本会处理上游延迟）
git push --follow-tags                     # 6. 推代码和 tag，GitHub build CI 开始跑
```

## 本地代理与缓存

这台开发机访问 `registry.npmjs.org`、GitHub 和部分外网要走本地 ClashX（`127.0.0.1:7890`）。发布前先导出代理，否则 `npm publish` / `npm view` / `git push` 会超时：

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
export HTTP_PROXY=http://127.0.0.1:7890
```

- 只给单条命令带代理：`HTTPS_PROXY=http://127.0.0.1:7890 npm publish`、`curl -x http://127.0.0.1:7890 ...`、
  `git -c http.proxy=http://127.0.0.1:7890 push --follow-tags`。
- 先确认代理在跑：
  `curl -x http://127.0.0.1:7890 -sS -o /dev/null -w "%{http_code}" https://registry.npmjs.org/dsh-color-task-board`
  返回 200 即可。
- `~/.npm` 的日志目录没有写权限时，npm 会在写日志阶段报错退出。统一加 `--cache .npm-cache`
  （仓库 `.gitignore` 已忽略），例如 `npm --cache .npm-cache publish`、`npm --cache .npm-cache view ...`。
- **npmmirror 的同步请求是直连的**，不要挂代理；`https://registry.npmmirror.com` 在本机可直连，
  查询同步结果也不需要代理。

## 手动同步 npmmirror

发布后运行：

```bash
npm run sync-mirror            # 同步 package.json 里的当前版本
npm run sync-mirror 0.3.0      # 指定版本
SYNC_TIMEOUT_MS=600000 npm run sync-mirror   # 放宽等待上限（默认 5 分钟）
```

脚本 `scripts/sync-mirror.mjs` 会按顺序做四件事：

1. 轮询 npm 官方源，直到版本号和 tarball 都可见；
2. 上游镜像 `r.cnpmjs.org` 没有该版本时先触发上游同步，并等到同样可见；
3. 触发 npmmirror 同步；
4. 轮询 npmmirror，直到版本出现在 `versions` 里，并打印 latest 与链接。

脚本直连 registry，不读 `HTTPS_PROXY`；任何一步超时都会打印卡在哪一步并以非 0 退出。手工兜底命令见「要点」。

## 要点

- **版本号必须递增**，registry 不接受重复版本。发布后用 `npm view dsh-color-task-board version` 校验。
- **发布后要同步一次 npmmirror**（为什么见下）。优先跑 `npm run sync-mirror`：它会等官方源与上游镜像都就绪再触发，
  避免镜像把旧数据当成最新。手工兜底时先触发同步（返回 `{"ok":true,"id":"…","state":"waiting"}`，用 id 查状态）：

  ```bash
  curl -X PUT -H 'Content-Type: application/json' \
    -d '{"tips":"release <版本号>"}' \
    https://registry.npmmirror.com/-/package/dsh-color-task-board/syncs
  curl https://registry.npmmirror.com/-/package/dsh-color-task-board/syncs/<id>
  ```

  也可以打开 <https://npmmirror.com/sync/dsh-color-task-board> 手动触发。**发布后要立刻同步一次**（不等用户反馈），
  但若官方源刚发布还没落库，同步会拿到旧版本；等 1–3 分钟或直接交给 `npm run sync-mirror` 重试。
  同步完成的标准是镜像的 `dist-tags.latest` 和 `versions` 里出现新版本：

  ```bash
  curl -s https://registry.npmmirror.com/dsh-color-task-board | node -e \
    'const j=JSON.parse(require("fs").readFileSync(0,"utf8"));console.log(j["dist-tags"],Object.keys(j.versions))'
  ```

- **为什么必须同步镜像**：DSH 插件中心的「检查更新」用 `pnpm view` 问注册表，起点是这个包在 profile 里上次安装所用的源；一旦 profile 的 pnpm 元数据缓存里记的是 `registry.npmmirror.com`，而镜像「正常应答但版本列表还是旧的」，DSH 不会回退官方源，用户就会看到「没有更新」。2026-11-09 的 0.1.6 就踩过这个坑：官方源已有 0.1.6，镜像只到 0.1.5，插件中心一直显示 0.1.5，手动同步后立刻可见。
- `npm publish` 会自动执行 `prepublishOnly`（`node scripts/build.mjs`），所以不需要手动传 `--access`；发布时**不需要 `--otp`**——`~/.npmrc` 里的 `//registry.npmjs.org/:_authToken` 是带 **Bypass 2FA** 的 granular token。
- 这类 token 只能发布/读取包，**不能**做删包、改 2FA 等账号级操作；那些只能在网页上用安全密钥完成。
- 发布后 registry 是异步处理：`npm publish` 返回成功但 `npm view` 可能先 404，通常 1–3 分钟后可见；期间可能出现 `0.0.0-stage` 占位版本，属正常现象。官方源和镜像都确认可见后再对外说「已发布」。
- CI（`.github/workflows/build.yml`）会校验提交的 `dist/client.js` 与 `client/` 源码一致，改完客户端务必把重建结果一起提交。

## 首次发布 / 换名后

- 新名字先确认可用：`curl -s -o /dev/null -w "%{http_code}" https://registry.npmjs.org/<name>`（404 = 空闲）。
- 换名要同步改三处：`package.json` 的 `name`、`cordis.patch.yml` 里的 bundle 行名、README 的安装入口；并重新构建 `dist/client.js`（模块 id 取自包名），最后在 profile 里卸载旧包、安装新包。
