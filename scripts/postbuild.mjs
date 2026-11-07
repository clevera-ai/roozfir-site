// GitHub Pages has no SPA fallback: 404.html is a copy of index.html, and each route gets a real index.html so it answers 200.
import { copyFileSync, mkdirSync } from 'node:fs'
const html = 'dist/index.html'
copyFileSync(html, 'dist/404.html')
for (const dir of ['pricing', 'changelog']) {
  mkdirSync(`dist/${dir}`, { recursive: true })
  copyFileSync(html, `dist/${dir}/index.html`)
}
