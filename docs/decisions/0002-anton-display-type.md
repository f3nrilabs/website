# 0002: Anton for display headlines, Unbounded removed

- **Status:** accepted (approved by the owner on 2026-11-21)
- **Date:** 2026-11-21

## Context

The approved theme (T-001) is built around huge, condensed, uppercase headlines over blurred gradient blocks. Unbounded, the previous display face, is very wide: it cannot set two-word headlines at 150 px on one line and does not give the dense poster look the theme depends on.

## Decision

- Replace `@fontsource/unbounded` with `@fontsource/anton` (SIL Open Font License 1.1).
- Anton is used only for h1 and h2, always uppercase. Inter stays for body text and h3, JetBrains Mono for the wordmark, code and labels.

## Consequences

- Same number of font dependencies; Anton has a single weight (400), so the page loads one display file instead of one Unbounded weight.
- `--font-display` changes in `tokens.css`; any heading that relied on Unbounded's width now wraps differently and is checked in T-003.
