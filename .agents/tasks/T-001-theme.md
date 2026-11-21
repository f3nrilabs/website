# T-001: Theme rules, tokens, fonts and gradient images

- **Owner:** Claude Code
- **Reviewer:** Arda (design approval)
- **Branch:** `claude/T-001-theme`
- **Depends on:** none

## Goal

Turn the theme Arda approved on 2026-11-21 into rules and tokens every agent can build from without making design decisions.

## Acceptance criteria

- [x] `docs/DESIGN.md` describes colorways, type, layout, components, page patterns, contact, motion and accessibility on gradients.
- [x] `tokens.css` has every value the components in T-002 need (colorway accents, overlays, display sizes, radii, wide container).
- [x] Anton replaces Unbounded (ADR 0002); fonts still self-hosted.
- [x] Gradient images for the `brand`, `horus` and `dark` colorways in `public/images/gradients/` at 960 and 1920 px, each under 20 KB.
- [x] `docs/PRODUCT.md` lists the approved copy, products, Horus facts and the email-only contact rule.
- [x] Task files for T-002, T-003 and T-005 are written with specs.
- [x] `npm run ci` passes.

## Out of scope

Building the components and pages (T-002, T-003, T-005).

## Notes and follow-ups

- Reference: Arda approved a dark mock-up of the home page and the Horus page (shared privately). The rules here are written from it, so the mock-up itself is not needed to build.
- Gradients are rendered without grain; grain is the `.grain` CSS overlay. That keeps each image around 15 KB instead of 270 KB.
