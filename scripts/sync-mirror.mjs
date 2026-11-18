#!/usr/bin/env node
// 手动把刚发布的版本同步到 npmmirror：
// 1. 等 npm 官方源出现该版本（registry 是异步落库的）；
// 2. 必要时触发上游镜像 r.cnpmjs.org 并等它出现版本与 tarball；
// 3. 触发 npmmirror 同步，轮询到版本可见。
// 用法：node scripts/sync-mirror.mjs [version]；缺省用 package.json 的版本。
import { readFile } from 'node:fs/promises'

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
const name = pkg.name
const version = process.argv[2] || pkg.version
if (!/^\d+\.\d+\.\d+(?:[-+][\w.]+)?$/.test(version)) {
  console.error(`版本号不合法：${version}`)
  process.exit(1)
}

const OFFICIAL = 'https://registry.npmjs.org'
const UPSTREAM = 'https://r.cnpmjs.org'
const MIRROR = 'https://registry.npmmirror.com'
const TIMEOUT_MS = Math.max(30_000, Number(process.env.SYNC_TIMEOUT_MS) || 5 * 60_000)
const deadline = Date.now() + TIMEOUT_MS

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const log = (...args) => console.log(...args)

async function request(url, init = {}) {
  const response = await fetch(url, {
    ...init,
    signal: AbortSignal.timeout(15_000),
    headers: { 'cache-control': 'no-cache', ...(init.headers || {}) },
  })
  const text = await response.text()
  let body = null
  try {
    body = JSON.parse(text)
  } catch {
    // 非 JSON（例如 404 HTML）按空处理
  }
  return { response, body, text }
}

async function metadata(registry) {
  const { response, body } = await request(`${registry}/${encodeURIComponent(name)}?t=${Date.now()}`)
  return response.ok ? body : null
}

async function hasTarball(registry) {
  const url = `${registry}/${encodeURIComponent(name)}/-/${encodeURIComponent(name)}-${version}.tgz`
  try {
    const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(15_000) })
    return response.ok
  } catch {
    return false
  }
}

/** 轮询到该 registry 同时能看到版本元数据与 tarball，避免同步到「有版本号但没包」的中间状态。 */
async function waitForVersion(registry, label, { tarball = false } = {}) {
  for (;;) {
    const meta = await metadata(registry).catch(() => null)
    const visible = Boolean(meta?.versions?.[version])
    if (visible && (!tarball || (await hasTarball(registry)))) {
      log(`✔ ${label} 已可见 ${name}@${version}`)
      return meta
    }
    if (Date.now() > deadline) {
      throw new Error(`${label} 在 ${Math.round(TIMEOUT_MS / 1000)} 秒内没有出现 ${name}@${version}，确认 npm publish 成功后再重试`)
    }
    log(`… 等待 ${label} 出现 ${version}（10 秒后重试）`)
    await sleep(10_000)
  }
}

async function triggerSync(registry, label) {
  const { response, body, text } = await request(`${registry}/-/package/${encodeURIComponent(name)}/syncs`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ tips: `release ${version}` }),
  })
  if (!response.ok || !body?.ok) {
    throw new Error(`触发 ${label} 同步失败：HTTP ${response.status} ${text.slice(0, 200)}`)
  }
  log(`✔ 已触发 ${label} 同步（task ${body.id || '未知'}）`)
  return body
}

try {
  log(`检查 ${name}@${version} 的发布状态…`)
  await waitForVersion(OFFICIAL, 'npm 官方源', { tarball: true })

  const upstream = await metadata(UPSTREAM).catch(() => null)
  if (!upstream?.versions?.[version]) {
    log('上游镜像还没有该版本，先触发上游同步…')
    await triggerSync(UPSTREAM, '上游镜像')
  }
  await waitForVersion(UPSTREAM, '上游镜像', { tarball: true })

  await triggerSync(MIRROR, 'npmmirror')
  const mirror = await waitForVersion(MIRROR, 'npmmirror')
  const latest = mirror?.['dist-tags']?.latest || '-'
  log(`\n完成：${name}@${version} 已同步到 npmmirror（latest: ${latest}）`)
  log(`  https://www.npmjs.com/package/${name}/v/${version}`)
  log(`  https://registry.npmmirror.com/${name}`)
} catch (error) {
  console.error(`\n同步失败：${error?.message || error}`)
  process.exit(1)
}
