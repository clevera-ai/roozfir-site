# Roozfir site

Marketing site for **Roozfir**, a fictional time-tracking and invoicing product for small agencies. Roozfir is a fictional demo product made for testing.

- Live: https://roozfir.online (`www.roozfir.online` redirects here via GitHub Pages)
- Pages: `/` (hero, features, how it works, quotes), `/pricing/`, `/changelog/`
- "Log in" and "Start free" go to the product app at https://app.roozfir.online/ (repo: `clevera-ai/roozfir-app`)
- Stack: Vite, React, TypeScript, Tailwind, React Router. Base path `/`; `public/CNAME` is `roozfir.online`.

## Changelog

`/changelog/` renders `CHANGELOG.md` in this repo, newest first. Real app releases are written here by the release script in `roozfir-app` (it commits and pushes to this repo, which redeploys the site in a minute or two). Site-only entries (heading `News - <date>`) are written the same way by `npm run release -- t13` in `roozfir-app`.

## Build

```sh
npm run build   # tsc, vite build, then postbuild: pricing/ and changelog/ folders plus 404.html
```

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).
