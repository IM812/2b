import { cpSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'

// `output: 'standalone'` recreates .next/standalone on every build without
// static assets, so the server would render unstyled pages. Copy them in as
// part of the build so manual VPS redeploys can't skip this step.
const root = process.cwd()
const standaloneDir = path.join(root, '.next', 'standalone')

if (!existsSync(standaloneDir)) {
  process.exit(0)
}

const staticSrc = path.join(root, '.next', 'static')
const staticDest = path.join(standaloneDir, '.next', 'static')
mkdirSync(path.dirname(staticDest), { recursive: true })
cpSync(staticSrc, staticDest, { recursive: true, force: true })

const publicSrc = path.join(root, 'public')
if (existsSync(publicSrc)) {
  cpSync(publicSrc, path.join(standaloneDir, 'public'), { recursive: true, force: true })
}

console.log('Copied .next/static and public into .next/standalone')
