#!/usr/bin/env node
// Builds the static help center under public/help/ (run by hand: `node scripts/help-gen.mjs`; the site build does not call it).
//  - adds the left sidebar (<aside><nav>) and the cookie banner script to every page, old and new (idempotent)
//  - writes the new articles from scripts/help-articles.mjs
//  - rewrites public/help/index.html
//  - writes public/sitemap.xml and public/robots.txt
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { NEW_ARTICLES, SECTIONS } from './help-articles.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const HELP = join(ROOT, 'public/help')
const SITE = 'https://roozfir.online'
const dir = join(HELP, 'articles')
const unesc = (s) => s.replace(/&amp;/g, '&').replace(/&raquo;/g, '»')

// ---- the existing 20 articles keep their content: read title + section from the files ----
const newSlugs = new Set(NEW_ARTICLES.map((a) => a.slug))
const old = readdirSync(dir).filter((f) => f.endsWith('.html')).map((f) => f.replace(/\.html$/, '')).filter((s) => !newSlugs.has(s)).map((slug) => {
  const html = readFileSync(join(dir, slug + '.html'), 'utf8')
  const title = unesc(html.match(/<h1>(.*?)<\/h1>/)[1])
  const section = unesc(html.match(/&raquo; ([^<]*)<\/p>/)[1])
  return { slug, title, section, lang: 'en' }
})
const order = ['create-a-project', 'start-and-stop-the-timer', 'add-a-customer', 'create-and-send-an-invoice', 'export-a-report-as-csv', 'invite-a-teammate', 'set-up-an-automation-rule',
  'connect-google-calendar', 'import-calendar-events-as-time-entries', 'connect-slack', 'choose-the-slack-channel-for-notifications', 'connect-xero', 'sync-invoices-to-xero']
old.sort((a, b) => (order.indexOf(a.slug) + 1 || 99) - (order.indexOf(b.slug) + 1 || 99) || a.slug.localeCompare(b.slug))
const all = [...old, ...NEW_ARTICLES]

const bySection = SECTIONS.map((s) => ({ name: s, items: all.filter((a) => a.section === s) }))
for (const a of all) if (!SECTIONS.includes(a.section)) throw new Error(`unknown section ${a.section} for ${a.slug}`)
const link = (a) => `/help/articles/${a.slug}.html`
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const sidebar = () => `<aside id="side"><nav aria-label="Help center sections">\n<p class="side-title"><a href="/help/index.html">All articles</a></p>\n${bySection.map((s) => `<h3>${esc(s.name)}</h3>\n<ul>\n${s.items.map((a) => `<li><a href="${link(a)}"${a.lang === 'de' ? ' lang="de"' : ''}>${esc(a.title)}</a></li>`).join('\n')}\n</ul>`).join('\n')}\n</nav></aside>`

const head = (title, rel, lang = 'en', extra = '') => `<!DOCTYPE html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} - Roozfir Help Center</title>
<link rel="stylesheet" href="${rel}style.css">${extra}</head>
<body>
<div id="top"><div class="wrap"><a class="brand" href="${rel}index.html">Roozfir Help Center</a> <a class="back" href="https://roozfir.online/">Back to roozfir.online</a></div></div>`
const foot = `<div id="foot"><div class="wrap">Roozfir Help Center. Roozfir is a fictional demo product made for testing.</div></div>
<script src="/help/cookie.js" defer></script>
</body></html>
`

// ---- old pages: wrap #main in the layout, add the cookie script ----
let touched = 0
for (const a of old) {
  const f = join(dir, a.slug + '.html')
  let html = readFileSync(f, 'utf8')
  if (html.includes('id="side"')) {
    html = html.replace(/<aside id="side">[\s\S]*?<\/aside>/, sidebar()) // refresh the link list
  } else {
    html = html.replace('<div class="wrap" id="main">', `<div class="wrap layout">\n${sidebar()}\n<div id="main">`)
    html = html.replace('</div>\n<div id="foot">', '</div></div>\n<div id="foot">')
  }
  if (!html.includes('cookie.js')) html = html.replace('</body>', '<script src="/help/cookie.js" defer></script>\n</body>')
  writeFileSync(f, html); touched++
}

// ---- new pages ----
for (const a of NEW_ARTICLES) {
  const html = `${head(a.title, '../', a.lang ?? 'en')}
<div class="wrap layout">
${sidebar()}
<div id="main">
<p class="crumbs"><a href="../index.html">Help Center</a> &raquo; ${esc(a.section)}</p>
<h1>${esc(a.title)}</h1>
<p class="meta">${a.lang === 'de' ? 'Zuletzt aktualisiert im November 2026' : 'Last updated November 2026'}</p>
${a.body.trim()}
<p><a href="../index.html">${a.lang === 'de' ? '&laquo; Zurück zu allen Artikeln' : '&laquo; Back to all articles'}</a></p>
</div></div>
${foot}`
  writeFileSync(join(dir, a.slug + '.html'), html)
}

// ---- index ----
const idx = `${head('Help articles', '')}
<div class="wrap layout">
${sidebar()}
<div id="main">
<h1>Roozfir Help Center</h1>
<p class="intro">Step-by-step guides for Roozfir, the time tracking and invoicing app. Pick a topic below.</p>
${bySection.map((s) => `<h2>${esc(s.name)}</h2>\n<ul class="list">\n${s.items.map((a) => `<li><a href="articles/${a.slug}.html"${a.lang === 'de' ? ' lang="de"' : ''}>${esc(a.title)}</a></li>`).join('\n')}\n</ul>`).join('\n')}
</div></div>
${foot}`
writeFileSync(join(HELP, 'index.html'), idx)

// ---- sitemap + robots ----
const urls = [`${SITE}/`, `${SITE}/pricing/`, `${SITE}/changelog/`, `${SITE}/help/`, ...all.map((a) => `${SITE}/help/articles/${a.slug}.html`)]
writeFileSync(join(ROOT, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(join(ROOT, 'public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`${old.length} old + ${NEW_ARTICLES.length} new = ${all.length} articles; ${touched} old pages updated; ${urls.length} sitemap urls`)
