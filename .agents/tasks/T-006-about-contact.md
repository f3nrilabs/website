# T-006: About and Contact pages

- **Owner:** OpenCode (builder sub-agent)
- **Reviewer:** OpenCode (architect)
- **Branch:** `opencode/T-006-about-contact`
- **Depends on:** T-002, T-003

## Goal

A visitor can read what f3nri is and how it works, and anyone who needs the team (companies, researchers, recruiters, vulnerability reporters) has one obvious way to make contact: an email to `hello@f3nri.com`.

## Facts decided by the owner (2026-11-22)

- The team name is **f3nri**. There is no separate group name and members are not individually named.
- Contact is **mailto only**. There is no form and there will not be one.
- PGP key on the contact page is still an open question: keep it as a `[TODO: the owner — …]`.

## Acceptance criteria

### `/about` (`src/pages/about.astro`)

- [ ] Uses `Base` with `current="about"`, `title="About"`, and a description taken from the lead paragraph.
- [ ] Content page pattern (`docs/DESIGN.md`, "Page patterns"): no gradient hero, h1 "About" in `--text-section`, body inside `--content-max`.
- [ ] Lead paragraph is exactly the approved sentence from `docs/PRODUCT.md`: "f3nri is an independent security research team. We study threats, build the tools to catch them, and publish what we find."
- [ ] Section "What we do." (h2): the three disciplines as `Card`s, using the same labels and body copy as the home page (`01 / research`, `02 / tools`, `03 / intel` in `src/pages/index.astro`). No new discipline text.
- [ ] Section "How we work." (h2): one or two honest paragraphs. Only verifiable statements; anything not yet decided is a `[TODO: the owner — …]` (at most two) instead of invented content.
- [ ] One short paragraph presenting the team: the work is published under the single name f3nri; members are not individually named.
- [ ] Closing: h2 "Talk to us." (approved copy) with a primary `Button` to `mailto:hello@f3nri.com`.
- [ ] One h1, headings in order, semantic HTML, all text ≥ WCAG AA on `--bg`.

### `/contact` (`src/pages/contact.astro`)

- [ ] Uses `Base` with `title="Contact"` and no `current` (Contact is not a nav section).
- [ ] Content page pattern: h1 "Contact" in `--text-section`, no gradient.
- [ ] The address `hello@f3nri.com` is shown as mono text and linked: at least one `mailto:hello@f3nri.com` control (a primary `Button` labeled "Email us").
- [ ] Section "Responsible disclosure." (h2): a short note that vulnerabilities in f3nri sites and products can be reported to the same address, plus a plain link to `/.well-known/security.txt` (same tab, no `rel` needed) and the `[TODO: the owner — PGP key yes or no]` placeholder.
- [ ] No form, no client-side JavaScript, no third-party anything.
- [ ] One h1, headings in order, semantic HTML.

### Both pages

- [ ] No new tokens, no new dependencies, no changes to existing components, `AGENTS.md`, `tokens.css`, `docs/DESIGN.md` or `.github/workflows/`.
- [ ] 320–1920 px with no horizontal scroll; screenshots at 375, 768 and 1280 px in the PR.
- [ ] `docs/PRODUCT.md` pages table: About and Contact status set to "Built (T-006)".
- [ ] `.agents/STATE.md`: claim as the first commit; set to `done` after merge.
- [ ] `npm run ci` passes.

## Spec

- Reuse existing components only: `Base`, `Card`, `Button`. The pages are quiet content pages: plain `--bg`, `--content-max` column, `--space-24` rhythm between sections.
- Approved copy that may be reused: the hero lead sentence, "Talk to us.", and the home discipline card text (`docs/PRODUCT.md`, section "Approved copy", and `src/pages/index.astro`).
- Tone (`AGENTS.md` section 4): plain, precise, technical; no hype words, no emoji.
- The footer already links About and Contact; no navigation changes are needed.

## Out of scope

- A contact form (rejected by the owner, 2026-11-22).
- Team member names, bios or photos.
- The PGP key itself (open question in `docs/PRODUCT.md`).
- Social links, a press section, response-time promises, analytics.

## Notes and follow-ups

- None yet. Write `Blocked:` here and stop if anything is unclear.
