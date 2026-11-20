# Design

Brand source of truth: [github.com/f3nrilabs/brand](https://github.com/f3nrilabs/brand). Code source of truth: `src/styles/tokens.css`. This file explains both; when they disagree, fix this file.

## Brand canon

- **Wordmark:** `f3nri_` in JetBrains Mono ExtraBold, letter spacing -0.03em; `f3nri` in the text color, `_` in the accent color. Use the `Wordmark` component.
- **Mark:** `/brand/mark-neon.svg`, Neon on Void. Minimum 32 px. Never redraw, recolor, rotate or add effects.
- **Tagline:** `research · tools · intel`

## Color

Dark theme only for now (`color-scheme: dark`).

| Token (role)      | Palette  | Hex     | Use                                        |
| ----------------- | -------- | ------- | ------------------------------------------ |
| `--bg`            | Void     | #0B0710 | Page background                            |
| `--surface`       | Obsidian | #16101E | Cards, panels, code blocks                 |
| `--border`        | Seam     | #2A2135 | Borders, dividers                          |
| `--text`          | Bone     | #EDE6F2 | Body text, headings                        |
| `--text-muted`    | Ash      | #9A92AC | Secondary text, metadata                   |
| `--accent`        | Neon     | #F2A1FF | Links, highlights, the wordmark underscore |
| `--accent-strong` | Amethyst | #7B2CBF | Filled buttons (with `--text` on top)      |
| `--danger`        | Signal   | #FF6B8B | Warnings and severity only                 |

Contrast on `--bg`: text 16.4:1, muted 5.8:1, accent 10.8:1, danger 7.4:1. Text on `--accent-strong`: 5.8:1.

## Type

| Token            | Typeface               | Use                                          |
| ---------------- | ---------------------- | -------------------------------------------- |
| `--font-display` | Unbounded 700          | h1–h3                                        |
| `--font-body`    | Inter 400/600          | Body text                                    |
| `--font-mono`    | JetBrains Mono 400/800 | Wordmark, code, IOCs, metadata, small labels |

Sizes: `--text-xs` to `--text-2xl` for UI and body, `--text-3xl` for page titles, `--text-hero` for the home hero only. Fonts are self-hosted through `@fontsource` packages.

## Space, layout, motion

- Spacing uses the 4 px scale `--space-1` … `--space-24`. No other values.
- Content width `--content-max` (72rem) with `--gutter` side padding.
- Radii: `--radius-sm` for inputs and tags, `--radius-md` for cards.
- Motion is subtle and fast (`--duration-fast`, `--duration-base`, `--ease-out`) and always disabled under `prefers-reduced-motion`.

## Theme

[TODO: T-001 — Arda picked a reference theme for the site. Claude Code turns it into concrete rules here: layout patterns, header and footer, cards, buttons, code blocks, hover and focus states, motion, and imagery. Until then, build nothing beyond what the brand canon above defines.]

## Changing tokens

Only Claude Code changes `tokens.css`, and every change is recorded in this file in the same PR with the reason.
