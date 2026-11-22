# T-010: A living spectrum light

- **Owner:** OpenCode (architect)
- **Reviewer:** the owner (approves in chat)
- **Branch:** `opencode/T-010-alive-spectrum`
- **Depends on:** T-009

## Goal

The owner finds the header light artificial and lifeless ("çok yapay ve cansız"). Keep the T-009 look (small, dim, symmetric band) but make it feel alive: organic motion, idle breathing, a landing moment.

## Acceptance criteria

- [ ] The glow follows the pointer on a slightly under-damped spring (stiffness 170, damping 21), so it settles with a hint of overshoot instead of gliding linearly.
- [ ] While the pointer rests on the bar, the glow breathes: scale ±`--spectrum-breath` at a `--spectrum-breath-period` sine, area preserved via an inverse-sqrt on the other axis.
- [ ] On `pointerenter` it lands with a small one-shot bloom (`--spectrum-bloom`): compressed, swell past 1, settle, damped-cosine decay.
- [ ] While lit, the gradient's colours drift: a CSS `hue-rotate` oscillation between ±`--spectrum-shimmer` over `--spectrum-shimmer-period`, alternating, disabled under `prefers-reduced-motion`.
- [ ] Size, opacity, shape and gradient unchanged from T-009 (11rem band, 0.55, warm core, blue edges).
- [ ] New tokens only for the motion parameters; recorded in `docs/DESIGN.md` change log; no other token touched.
- [ ] Still mouse-only and skipped under reduced motion; the rAF loop still runs only while the pointer is on the bar (plus one settling frame after).
- [ ] `npm run ci` passes.

## Spec

- Files: `src/components/SiteHeader.astro` (script + one CSS block), `src/styles/tokens.css` (five new `--spectrum-*` motion tokens), `docs/DESIGN.md` (component row + change log).
- Motion is felt, not screenshot-able; the PR carries one 1280 px header frame as proof of look, the owner judges the feel live.

## Out of scope

- Any change to the band's size, colour or opacity (T-009 settled those).
- Any other component, page or token.
- A settings toggle for the effect.

## Notes and follow-ups

- If it still feels wrong after this, the next lever is the gradient itself (flowing stops, not hue drift) — new task.
