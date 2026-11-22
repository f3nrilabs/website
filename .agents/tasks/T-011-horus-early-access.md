# T-011: A real early-access flow on the Horus page

- **Owner:** OpenCode (builder sub-agent)
- **Reviewer:** OpenCode (architect)
- **Branch:** `opencode/T-011-horus-early-access`
- **Depends on:** T-005

## Goal

A company that wants Horus can request early access with a clear, honest picture: what early access includes, who it is for, how access opens, and exactly what to put in the request email. No exact dates, numbers or prices on the page.

## Facts decided by the owner (2026-11-22)

- Early access has a start schedule and a per-participant brand limit, but the site does not state the exact date or the exact number. The approved phrasings: access "opens in waves" and each wave takes "a small set of brands".
- No pricing claims anywhere. Cost stays unsaid.
- Everything else on the page comes from the approved Horus facts in `docs/PRODUCT.md`, "Horus (facts for copy)".

## Acceptance criteria

- [ ] A new "Early access." section (h2) on the Horus page, on the plain page background, between the feature cards and the closing access `ColorBlock`, following the page's existing section rhythm.
- [ ] Three short groups inside it, visually consistent with the page's labeled-block language (mono labels like the steps and features use):
  - **includes** — bullets only from the approved facts: monitoring across the five CT log operators (Google, Cloudflare, Sectigo, DigiCert, Let's Encrypt), typosquat/homoglyph/combosquat scoring, four-state tracking (`CERT_ISSUED` → `DNS_LIVE` → `HTTP_LIVE` → `CONTENT_MATCH`), alerts via Telegram, email or webhook.
  - **who it's for** — one or two sentences: teams protecting a company's brand (security, IT or brand protection).
  - **how it opens** — access opens in waves on a fixed schedule; each wave takes a small set of brands so every deployment gets attention. No exact date, no numbers.
- [ ] "What to send" guidance sits with the request control: the email should say which brands/domains to protect and the preferred alert channel.
- [ ] The closing access `ColorBlock` keeps the prefilled-subject `Button` (`mailto:hello@f3nri.com?subject=Horus%20early%20access`) and its current copy.
- [ ] If the content needs new frontmatter fields, extend the `products` schema in `src/content.config.ts` with optional fields only; leave the `research` schema and existing fields untouched.
- [ ] No new pages, no changes to other pages, no new components unless the groups need one, tokens only, zero client-side JavaScript.
- [ ] No `[TODO: …]` placeholders required; if a fact turns out to be missing, stop and write `Blocked:` instead of inventing it.
- [ ] 320–1920 px with no horizontal scroll; screenshots of the Horus page at 375, 768 and 1280 px in the PR.
- [ ] `docs/PRODUCT.md` product-page row description mentions the early access section.
- [ ] `.agents/STATE.md`: this task's row is added and claimed as the first commit; `npm run ci` passes.

## Spec

- Content source: the approved Horus facts (`docs/PRODUCT.md`, "Horus (facts for copy)") plus the owner decisions above.
- Tone: plain, precise, technical. "opens in waves" and "a small set of brands" are the approved phrasings.

## Out of scope

- Exact dates, participant numbers, brand limits, pricing.
- Changes to the home page, the research pages, the header/footer, or any other product page.
- A form (mailto only), analytics, any client-side JavaScript.

## Notes and follow-ups

- None yet. Write `Blocked:` here and stop if anything is unclear.
