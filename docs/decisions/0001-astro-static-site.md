# 0001: Astro static site, plain CSS with tokens

- **Status:** accepted
- **Date:** 2026-11-21

## Context

f3nri.com is a content site: research write-ups, a tools list, about and contact. It is built by several AI agents (Claude Code, OpenCode) under human review, deployed to a single VPS behind Cloudflare, and must be fast, private and easy to audit.

## Decision

- **Astro** with `output: "static"`: every page is plain HTML at build time, Markdown content collections fit research posts, and components are single files that agents handle well.
- **No client JavaScript by default**; islands only when a task justifies it.
- **Plain CSS with design tokens** instead of a CSS framework: one file defines every value, scoped component styles reference it, and reviewers can spot an off-token value at a glance.
- **TypeScript strictest** to catch agent mistakes at build time.
- **Self-hosted fonts** via `@fontsource`, so no request leaves f3nri.com.

## Consequences

- No server-side features (forms, search) without a new decision; contact is by email.
- Agents must use tokens rather than utility classes; the rule is enforced in review.
- Deploys are file copies, so rollback is instant and the VPS needs only nginx.
