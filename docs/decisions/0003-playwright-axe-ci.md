# 0003: Playwright and axe in CI

- **Date:** 2026-11-22
- **Status:** accepted (owner approved in chat, 2026-11-22)

## Context

Pages are hand-checked in a browser per PR (AGENTS.md, "Definition of done"), but nothing in CI
catches rendering, layout or accessibility regressions automatically.

## Decision

Add dev-only test tooling: `@playwright/test` for end-to-end smoke tests against the production
build served by `npm run preview`, and `@axe-core/playwright` for accessibility checks.
Chromium only for now. A new `e2e` job in `ci.yml` runs them on every push and PR.
Nothing ships to the browser: the site stays zero client-side JavaScript; both packages are
devDependencies used only in CI and local test runs.

## Consequences

- CI grows by roughly one to two minutes per run.
- The workflow installs the Chromium binary with `npx playwright install --with-deps chromium`.
- New pages should extend the route list in the smoke spec.
- A draft leaking into the build would fail the drafts spec.
