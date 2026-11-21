# T-003: Home page

- **Owner:** OpenCode
- **Reviewer:** Claude Code
- **Branch:** `opencode/T-003-home`
- **Depends on:** T-002

## Goal

Replace the placeholder `src/pages/index.astro` with the approved home page, built only from the T-002 components.

## Acceptance criteria

- [ ] Sections in this order, with this exact copy (from `docs/PRODUCT.md`, "Approved copy"):
  1. `Hero` (colorway `brand`, `titleSize="display"`): label `research · tools · intel`; h1 "Break the chain before it breaks you." (line break after "chain"); lead paragraph as approved; actions: `Button variant="dark"` "Explore Horus" → `/products/horus`, `Button variant="ghost"` "Contact us" → `mailto:hello@f3nri.com`.
  2. Disciplines: h2 "Three disciplines." with "One team." on a second line in `--accent`; to the right a muted paragraph: "Everything we publish comes from the same loop: find it, prove it, ship something that catches it next time." Below, three `Card`s in a responsive grid (`repeat(auto-fit, minmax(280px, 1fr))`):
     - `01 / research` · Research · "Threat analysis and write-ups on phishing, impersonation and the infrastructure behind them, with the evidence attached."
     - `02 / tools` · Tools · "Software that turns what we learn into detection: monitoring, scanning and automation for security teams."
     - `03 / intel` · Intel · "Indicators, patterns and context that defenders can act on, written plainly and published openly."
  3. Horus `ColorBlock` (colorway `horus`): `Pill` "product 01 · in development · early access"; h2 "Horus" in `--text-giant`; paragraph "Catches typosquat, homoglyph and combosquat domains of your brand the moment their certificate is issued, before they go live."; three `Card onMedia` items with labels `watch`, `score`, `alert` and the texts from the Horus facts in `docs/PRODUCT.md`; buttons "See Horus" (`dark`, `/products/horus`) and "Request early access" (`ghost`, `mailto:hello@f3nri.com?subject=Horus%20early%20access`).
  4. "From the lab": h2 "From the lab", link "All research →" to `/research`. Until research posts exist, a dashed-border empty state: mono line `$ ls research/`, "The first write-ups are on the way.", muted "Follow along on GitHub or X to read them first." When the research collection (T-004) has posts, show the latest three instead.
  5. `ColorBlock` (colorway `dark`, centered): h2 "Talk to us." in `--text-display`; paragraph "Early access to Horus, research collaboration, or something you found. We read every message."; `Button variant="primary"` "hello@f3nri.com" → `mailto:hello@f3nri.com`.
- [ ] One h1 on the page; headings in order.
- [ ] Home page under 300 KB transferred excluding fonts (check in the browser's network panel and note the number in the PR).
- [ ] Works from 320 px to 1920 px with no horizontal scroll; screenshots at 375, 768, 1280 px in the PR.
- [ ] `npm run ci` passes.

## Out of scope

Products, research, about and contact pages. Any new component or token (ask Claude Code instead).
