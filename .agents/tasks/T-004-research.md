# T-004: Research list, post page and "From the lab"

- **Owner:** OpenCode
- **Reviewer:** Claude Code
- **Branch:** `opencode/T-004-research`
- **Depends on:** T-002, T-003

## Goal

f3nri can publish a write-up by adding one Markdown file. Visitors find it on `/research`, read it on `/research/<slug>`, and see the latest ones on the home page.

## Acceptance criteria

- [ ] A content collection `research` in `src/content.config.ts` loads `src/content/research/*.md` with this schema:
  - `title: string`
  - `summary: string` (max 200 characters, enforced with `.max(200)`)
  - `date: date` (`z.coerce.date()`)
  - `updated?: date` (`z.coerce.date().optional()`)
  - `kind: "threat-intel" | "analysis" | "advisory"`
  - `tags: string[]` (lowercase, default `[]`)
  - `draft: boolean` (default `false`)
- [ ] One helper, `src/lib/research.ts`, exports `getPublishedResearch()`: every entry, newest `date` first, with drafts left out when `import.meta.env.PROD` is true. Every page below uses it; none calls `getCollection("research")` directly.
- [ ] `/research` (`src/pages/research/index.astro`, `Base` with `current="research"`, title "Research", description "Threat intelligence write-ups, analyses and advisories from f3nri."):
  - content page pattern from `docs/DESIGN.md`: h1 "Research", lead paragraph "Threat intelligence write-ups, analyses and advisories."
  - one `Card` per post in an `<ol>` (`as="li"`), label `<kind> · <date>`, title linking to the post, summary as body, tags as a mono line under it.
  - when there are no published posts: a single paragraph "No write-ups published yet." and nothing else (no fake cards).
- [ ] `/research/<slug>` (`src/pages/research/[...slug].astro`, `getStaticPaths` from `getPublishedResearch()`):
  - h1 = `title` in `--text-section`; under it a mono meta line `<kind> · <date>` (plus ` · updated <updated>` when set) and the tags; then `summary` as a lead paragraph; then the body inside `<Prose>`.
  - `<title>` and description from `title` and `summary`; `og:image` is the brand 1920 px gradient.
  - dates are rendered as `<time datetime="YYYY-MM-DD">` and formatted `22 Nov 2026` (`en-GB`, `day: "numeric", month: "short", year: "numeric"`), via one `formatDate` function in `src/lib/research.ts`.
  - a "Back to research" link at the end.
- [ ] New component `src/components/Prose.astro` (no props, one `<slot />`) applies the long-form rules in `docs/DESIGN.md` ("Content pages") with `:global` selectors scoped under `.prose`: `p`, `h2`, `h3`, `a`, `ul`, `ol`, `blockquote`, `code`, `pre`, `table`, `img`, `hr`. Only tokens; max width `--measure`.
- [ ] Home page (`src/pages/index.astro`): a "From the lab" section between the product block and the "Talk to us." block. h2 "From the lab."; the three newest posts as `Card`s (same content as on `/research`) and an "All research" `Button` to `/research`; when there are none, the sentence "No write-ups published yet." and the button.
- [ ] A formatting fixture `src/content/research/formatting-reference.md` with `draft: true`, title "Formatting reference", kind `analysis`, summary "Every Markdown element a write-up can use. Draft only, never published.", and a body that uses each element `Prose` styles: h2, h3, paragraphs, a link, both list types, a blockquote, inline code, a ` ```text ` block of defanged indicators written as `example[.]com` and `192.0.2[.]10` (documentation ranges only), a ` ```bash ` block, a small table and an `hr`. No invented findings, names or numbers.
- [ ] `npm run build` output contains no `/research/formatting-reference` page; `npm run dev` shows it.
- [ ] 320–1920 px with no horizontal page scroll, including the fixture's long code line and table at 320 px (they scroll inside their own box). Screenshots of `/research` (empty state), the fixture post (from dev) and the home section at 375, 768 and 1280 px in the PR.
- [ ] `docs/PRODUCT.md` site map: Research and Research post status set to "Built (T-004)". `docs/ARCHITECTURE.md`: `research/` listed as an existing collection.
- [ ] `npm run ci` passes.

## Spec

- Use only existing components (`Card`, `Button`) plus the new `Prose`. Use only existing tokens; code block colors already come from `--astro-code-*` (added with this task file).
- Markdown only, no MDX (MDX needs a new dependency).
- No client-side JavaScript.

## Out of scope

- Real write-ups (the owner writes them; each one is its own PR adding one Markdown file).
- Tag pages, search, pagination, RSS (RSS needs `@astrojs/rss`, a new dependency: follow-up with an ADR).
- Author names (open question in `docs/PRODUCT.md`).
- New tokens or changes to existing components (ask Claude Code).

## Notes and follow-ups

- Follow-up: canonical URLs in the build include `.html` (for example `https://f3nri.com/research.html`), because `Base` uses `Astro.url.pathname` with `build.format: "file"`. Pre-existing on every page; normalise it in a separate task.
- Follow-up: RSS feed with an ADR for `@astrojs/rss`.
- Follow-up: per-post OG images.
