# T-014: Clean canonical URLs

- **Owner:** OpenCode (architect)
- **Reviewer:** the owner (approves in chat)
- **Branch:** `opencode/T-014-clean-urls`
- **Depends on:** none

## Goal

Canonical URLs, Open Graph URLs and sitemap entries stop carrying a `.html` extension (`https://f3nri.com/research.html` → `https://f3nri.com/research`). Found by the T-004 builder as a pre-existing site-wide issue.

## Acceptance criteria

- [ ] `astro.config.mjs` builds with `format: "directory"` (was `"file"`); no other config change.
- [ ] `npm run ci` passes; the built output has `dist/<page>/index.html` layout.
- [ ] Verified in the built HTML: canonical and `og:url` for every page are extensionless (`/research`, `/about`, …) and the sitemap entries are extensionless too.
- [ ] After deploy: all ten public routes still answer 200 on the live site (nginx `try_files` serves directories), and the 404 page still works.

## Spec

- One line of config. No redirects needed: the site is young, no `.html` links are published anywhere.

## Out of scope

- Trailing-slash behaviour (unchanged: `trailingSlash: "never"`).
- Any other URL or routing change.

## Notes and follow-ups

- If nginx fails to serve the new layout, revert this PR immediately (`revert: clean canonical URLs`) — check the ten routes right after deploy.
