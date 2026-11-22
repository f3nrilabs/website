# Architecture

## Overview

A static site built with Astro. `npm run build` renders every page to plain HTML and CSS in `dist/`. There is no server code and, by default, no client-side JavaScript.

## Folders

```
.
├── AGENTS.md              rules for every agent (read first)
├── CLAUDE.md              Claude Code entry point (imports AGENTS.md)
├── .agents/
│   ├── STATE.md           task board: who works on what
│   └── tasks/             one file per task (T-XXX-*.md)
├── docs/
│   ├── PRODUCT.md         what the site is, pages, content rules
│   ├── DESIGN.md          brand and visual rules
│   ├── ARCHITECTURE.md    this file
│   └── decisions/         architecture decision records (ADRs)
├── public/                served as-is (favicon, OG image, brand mark, robots, security.txt)
│   ├── brand/             copied from f3nrilabs/brand, never edited here
│   └── images/gradients/  colorway gradient images (docs/DESIGN.md, "Colorways")
├── src/
│   ├── styles/tokens.css  all design tokens
│   ├── styles/global.css  fonts, reset, base element styles
│   ├── layouts/           page shells (Base.astro: <head>, meta, skip link)
│   ├── components/        reusable pieces (Wordmark.astro, …)
│   └── pages/             one file per route
└── .github/workflows/     ci.yml (checks on every PR), deploy.yml (ship main to the VPS)
```

Content collections live under `src/content/` with their schemas in `src/content.config.ts`: `products/` (T-005) and `research/` (T-004).

## Styling

Plain CSS. Global tokens in `tokens.css`; component styles in a scoped `<style>` block inside each `.astro` file, using only tokens. No CSS framework (see ADR 0001).

## Build, CI and deploy

1. Every push and PR runs `.github/workflows/ci.yml`: `npm ci`, then `npm run ci` (Prettier check, `astro check`, build).
2. A push to `main` runs `.github/workflows/deploy.yml`: the same checks, then the `dist/` folder is streamed as a tar.gz over SSH to the f3nri VPS.
3. On the VPS, the `deploy` user can only run `f3nri-deploy`, which unpacks the upload into a new release folder under `/srv/f3nri/website/releases/` and atomically switches `/srv/f3nri/website/current`. The last five releases are kept for instant rollback.
4. nginx serves `current`. Cloudflare sits in front (proxied DNS, SSL Full strict).

The deploy needs org secrets `DEPLOY_HOST`, `DEPLOY_KNOWN_HOSTS`, `DEPLOY_SSH_KEY` and the repo variable `SITE=website`. Until they exist, the deploy job builds and then skips the upload with a notice.

## Decisions

Recorded in `docs/decisions/NNNN-title.md`. Write one before adding a dependency, changing the stack, or changing how deploy works.
