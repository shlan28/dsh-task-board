# 发布

发布到 npm 的包名是 `dsh-color-task-board`（无 scope）。名字的由来：最初的 `dsh-task-board` 与已有的 `dsh-taskboard` 过于相似，npm 以 403 拒绝，所以加上 `color` 区分。

## 流程

```bash
node scripts/build.mjs                     # 1. 改了 client/ 就重新构建，dist/client.js 要一起提交
git add -A && git commit -m "feat: ..."     # 2. 提交改动
npm version patch -m "chore: release %s"    # 3. 版本号 +1 并打 tag（minor / major 同理）
npm publish                                # 4. 发布，prepublishOnly 会再构建一次
git push --follow-tags                     # 5. 推代码和 tag，GitHub build CI 开始跑
```

## 要点

- **版本号必须递增**，registry 不接受重复版本。发布后用 `npm view dsh-color-task-board version` 校验。
- `npm publish` 会自动执行 `prepublishOnly`（`node scripts/build.mjs`），所以不需要手动传 `--access`；发布时**不需要 `--otp`**——`~/.npmrc` 里的 `//registry.npmjs.org/:_authToken` 是带 **Bypass 2FA** 的 granular token。
- 这类 token 只能发布/读取包，**不能**做删包、改 2FA 等账号级操作；那些只能在网页上用安全密钥完成。
- 发布后 registry 是异步处理：`npm publish` 返回成功但 `npm view` 可能先 404，通常 1–3 分钟后可见；期间可能出现 `0.0.0-stage` 占位版本，属正常现象。
- CI（`.github/workflows/build.yml`）会校验提交的 `dist/client.js` 与 `client/` 源码一致，改完客户端务必把重建结果一起提交。

## 首次发布 / 换名后

- 新名字先确认可用：`curl -s -o /dev/null -w "%{http_code}" https://registry.npmjs.org/<name>`（404 = 空闲）。
- 换名要同步改三处：`package.json` 的 `name`、`cordis.patch.yml` 里的 bundle 行名、README 的安装入口；并重新构建 `dist/client.js`（模块 id 取自包名），最后在 profile 里卸载旧包、安装新包。
