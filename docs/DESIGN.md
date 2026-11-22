# Design

Brand source of truth: [github.com/f3nrilabs/brand](https://github.com/f3nrilabs/brand). Code source of truth: `src/styles/tokens.css`. This file explains both; when they disagree, fix this file.

The approved look, in one line: **dark page, big blurred gradient blocks with the f3nri mark melted into them, huge condensed uppercase headlines, quiet dark cards, pill-shaped controls.** Every product has its own gradient "colorway"; everything else stays the same across the site.

## Brand canon

- **Wordmark:** `f3nri_` in JetBrains Mono ExtraBold, letter spacing -0.03em; `f3nri` in the text color, `_` in the accent color. Use the `Wordmark` component.
- **Mark:** `/brand/mark-neon.svg`, Neon on Void. Minimum 32 px. Never redraw, recolor, rotate or add effects.
- **Tagline:** `research · tools · intel`

## Color

Dark theme only (`color-scheme: dark`). There is no light mode.

| Token (role)      | Palette  | Hex     | Use                                        |
| ----------------- | -------- | ------- | ------------------------------------------ |
| `--bg`            | Void     | #0B0710 | Page background                            |
| `--surface`       | Obsidian | #16101E | Cards, panels, code blocks                 |
| `--border`        | Seam     | #2A2135 | Borders, dividers                          |
| `--text`          | Bone     | #EDE6F2 | Body text, headings on the page background |
| `--text-muted`    | Ash      | #9A92AC | Secondary text, metadata                   |
| `--accent`        | Neon     | #F2A1FF | Links, highlights, the wordmark underscore |
| `--accent-strong` | Amethyst | #7B2CBF | Filled buttons (with `--text` on top)      |
| `--danger`        | Signal   | #FF6B8B | Warnings and severity only                 |
| `--text-on-media` |          | #FFF4FC | Text placed on a gradient                  |

Contrast on `--bg`: text 16.4:1, muted 5.8:1, accent 10.8:1, danger 7.4:1. Text on `--accent-strong`: 5.8:1.

### Overlays

Translucent layers used on top of gradients, all defined as tokens: `--glass` and `--glass-border` (the sticky nav), `--scrim` (pills on gradients), `--scrim-strong` (cards on gradients), `--ghost-bg` and `--ghost-border` (secondary buttons on gradients).

## Colorways

A colorway is a gradient image plus one accent color. The brand has one, and every product gets its own. A page uses the brand colorway unless it is a product page, which uses that product's.

| Colorway | Image                                     | Accent token                       | Mood                                                              |
| -------- | ----------------------------------------- | ---------------------------------- | ----------------------------------------------------------------- |
| `brand`  | `/images/gradients/brand-{960,1920}.webp` | `--cw-brand-accent` (Neon #F2A1FF) | Neon pink, violet, electric blue                                  |
| `horus`  | `/images/gradients/horus-{960,1920}.webp` | `--cw-horus-accent` (#FFB86B)      | Sunset: red, orange, gold (Horus is the Egyptian sky and sun god) |
| `dark`   | `/images/gradients/dark-{960,1920}.webp`  | `--cw-brand-accent`                | Night violet, for closing call-to-action blocks                   |

Rules:

- Gradients are rendered once from the brand mark and saved as images (no grain baked in). Never recreate them with CSS gradients, never use a gradient image that was not produced for the brand.
- A new product gets a new colorway in the same PR that adds its page: a new image pair and one `--cw-<product>-accent` token, recorded in this table.
- Grain is a CSS overlay (`.grain` utility in `global.css`) on every gradient block, so the images stay small.

## Type

| Token            | Typeface               | Use                                                         |
| ---------------- | ---------------------- | ----------------------------------------------------------- |
| `--font-display` | Anton 400              | h1 and h2 only, always uppercase                            |
| `--font-body`    | Inter 400/500/600      | Body text, h3 (Inter 600), buttons, navigation              |
| `--font-mono`    | JetBrains Mono 400/800 | Wordmark, code, IOCs, labels, pills, step numbers, metadata |

| Size token                 | Value                      | Use                                          |
| -------------------------- | -------------------------- | -------------------------------------------- |
| `--text-display`           | clamp(4rem, 10vw, 8.5rem)  | Page h1 in a hero                            |
| `--text-giant`             | clamp(5.5rem, 15vw, 15rem) | A product name used as the h1 or block title |
| `--text-section`           | clamp(3rem, 7vw, 6rem)     | Section h2                                   |
| `--text-xs` … `--text-3xl` |                            | UI and body text                             |

- Display text: `--leading-display` (0.9), letter spacing -0.01em, uppercase, color `--text` on the page or `--text-on-media` on a gradient, with `--glow-text` on gradients only.
- Body text on the page: 17–19 px, `--leading-body`, max 60 characters per line.
- Headlines are short: two lines at most. Second line may be in the accent color for emphasis.

## Layout

- Page background `--bg` everywhere. Content width `--content-max` (72rem); full-bleed blocks use `--content-wide` (87rem) with `--gutter` side padding.
- Vertical rhythm between sections: `--space-24` (6rem) on desktop, `--space-16` on phones.

### Components (build these once, in `src/components/`)

| Component             | Look                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SiteHeader`          | Sticky pill nav, 16 px from the top, `--glass` background with `backdrop-filter: blur(16px)`, `--glass-border`, `--radius-pill`. Left: mark (28 px) + `Wordmark` small. Center: Products, Research, About. Right: primary pill button "Contact us". The current section's link uses the page's colorway accent. Under 768 px the center links move into a disclosure menu (`<details>`, no JavaScript). With a mouse, a spectrum light (`--spectrum-*` tokens) follows the pointer inside the pill on a slightly under-damped spring: a soft band as tall as the bar, warm core and blue edges, shaped by the pill's rounded ends; it breathes and shimmers at rest and lands with a small bloom; off on touch and reduced motion (T-008, T-010). |
| `Hero`                | Full-bleed gradient (colorway image as a covered `<img>`, `fetchpriority="high"`), min-height 820 px (100svh on phones, max 860 px), content aligned to the bottom-left: pill label → h1 → row with lead paragraph (left) and buttons (right). Slides up under the sticky header.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `Pill`                | Mono 13 px label in a `--scrim` pill with an 8 px dot in the colorway accent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `Button`              | Pill shape, Inter 600, 14×26 px padding. Variants: `primary` (Bone background, Void text), `dark` (Void background, Bone text, used on gradients), `ghost` (`--ghost-bg`, `--ghost-border`, `--text-on-media`, used on gradients). Always an `<a>` or `<button>`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `ButtonRow` (pattern) | Any group of buttons is a flex row with `flex-wrap: wrap` and `gap: var(--space-3)`, so buttons wrap on phones instead of overflowing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `Card`                | `--surface`, 1 px `--border`, `--radius-lg`, 28–32 px padding. Top: mono label in the accent color. Then an Inter 600 title (20–26 px) and muted body text. On gradients use `--scrim-strong` and no border.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `ColorBlock`          | Rounded (`--radius-xl`) full-bleed-wide section with a colorway image behind it and the grain overlay. Holds a product teaser or a call to action. Images below the fold are `loading="lazy"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `SiteFooter`          | Top border, link columns (products, company, follow, security), then a giant `f3nri_` in JetBrains Mono 800 colored `--surface` with an Amethyst underscore, then a © line and the tagline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Page patterns

- **Home:** Hero (brand) → three discipline cards → product ColorBlock per product → "From the lab" (latest research or an honest empty state) → "Talk to us." ColorBlock (dark) → footer.
- **Product page:** Hero (product colorway, product name in `--text-giant`, status pill) → problem (h2 left, two paragraphs right) → "How it works" numbered steps → feature cards → access ColorBlock (product colorway) → footer.
- **Content pages** (research post, about, contact): no gradient hero; h1 in `--text-section` on the plain background, then body content at `--content-max`. Long-form text (a research post body) is limited to `--measure` and styled by the `Prose` component: Inter at `--text-lg`, `--leading-body`, h2/h3 in Inter 700 (not Anton), links in `--accent` with underline, inline code and code blocks in `--font-mono` on `--surface` with `--radius-md`, code blocks and tables scroll horizontally inside their own box.

## Contact

There is no form. Every "Contact us", "Talk to us" and "Request early access" control is a `mailto:hello@f3nri.com` link, with a prefilled subject for product requests (for example `?subject=Horus%20early%20access`).

## Motion

- Subtle and fast: `--duration-fast`, `--duration-base`, `--ease-out`. Hover: buttons lighten or darken slightly, cards lift their border to the accent color.
- Optional scroll reveal for section headings using CSS only (`animation-timeline: view()` inside `@supports`). Content must be fully visible without it.
- Everything is disabled under `prefers-reduced-motion`.

## Accessibility on gradients

- Text on a gradient is `--text-on-media`, at least 18 px or bold, and sits on the darker part of the image or on a `--scrim` / `--scrim-strong` layer. Never put small muted text directly on a gradient.
- Every gradient image is decorative: `alt=""`.

## Changing tokens

Only Claude Code changes `tokens.css`, and every change is recorded in this file in the same PR with the reason.

### Change log

- **2026-11-22:** the spectrum light now moves on a slightly under-damped spring and, at rest, breathes (`--spectrum-breath`), shimmers (`--spectrum-shimmer`) and lands with a small bloom (`--spectrum-bloom`), so it stops feeling lifeless (T-010).
- **2026-11-22:** spectrum light is now an 11rem band as tall as the bar, dimmer (0.55) and symmetric, so the pill's rounded ends shape it; it no longer flips with the direction of travel (T-009).
- **2026-11-22:** added `--measure` (68ch line length for long-form text) and the `--astro-code-*` tokens; Markdown code blocks use Shiki's `css-variables` theme so their colors come from the palette (T-004).
- **2026-11-22:** added `--color-electric` and the `--spectrum-*` tokens for the header spectrum light (T-008).
- **2026-11-21:** `--text-display` max lowered from 9.75rem to 8.5rem so the two-line home headline does not break into three lines on 1440 px and wider screens.
- **2026-11-21:** every h2 now defaults to `--text-section` in `global.css`; a section heading without its own size was rendering at the browser default.
- **T-002 (2026-11-21):** added `--page-accent` (the active colorway accent, set by `Base`, `Hero` and `ColorBlock`) and `--header-height`.
- **T-001 (2026-11-21):** display face changed from Unbounded to Anton (ADR 0002); added colorway accents, overlay, display size, radius and wide-container tokens for the approved theme.
