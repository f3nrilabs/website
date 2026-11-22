# T-008: Spectrum light on the header

- **Owner:** Claude Code
- **Reviewer:** OpenCode
- **Branch:** `claude/T-008-header-spectrum`
- **Depends on:** T-002

## Goal

When a visitor moves the mouse over the header bar, a soft spectrum light glides after the pointer inside the pill: pink/orange at the front, blue/violet trailing behind. Approved by the owner on 2026-11-22 from a recorded demo.

## Acceptance criteria

- [x] With a mouse, a blurred light appears when the pointer enters the bar, follows it with easing, and fades out when the pointer leaves.
- [x] The light faces the direction of travel (orange front, blue trail) and stretches slightly with speed.
- [x] The light is clipped to the bar's pill shape and sits under the links, wordmark and button; text contrast is unchanged.
- [x] Nothing happens on touch screens (`hover: none`) or with `prefers-reduced-motion: reduce`.
- [x] The animation loop runs only while the light is moving or the pointer is on the bar.
- [x] Every color, size, blur and duration comes from `src/styles/tokens.css`; new tokens are recorded in `docs/DESIGN.md`.
- [x] `npm run ci` passes.

## Spec

- `src/styles/tokens.css`: `--color-electric`, `--spectrum-width`, `--spectrum-height`, `--spectrum-blur`, `--spectrum-opacity`, `--spectrum-glow`, `--spectrum-mask`, `--spectrum-fade`.
- `src/components/SiteHeader.astro`: an `aria-hidden` `.spectrum` layer as the bar's first child with one `.spectrum__glow`; a small inline script (no island, no dependency) that eases the glow toward the pointer with `requestAnimationFrame`.

## Why client-side JavaScript

AGENTS.md section 4 allows JavaScript when the task says why. Pointer-following motion cannot be done in CSS alone. The script is about 40 lines, inline and progressive: without it, or on touch and reduced-motion devices, the header is exactly the static header from T-002.

## Out of scope

- Effects on other components (buttons, cards).
- Touch or keyboard-focus variants of the light.

## Notes and follow-ups

- Earlier prototypes (static glow, rotating rings, ripple waves) were rejected by the owner; the branch history keeps them.
