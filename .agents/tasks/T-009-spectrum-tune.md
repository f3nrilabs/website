# T-009: Smaller, balanced spectrum light

- **Owner:** Claude Code
- **Reviewer:** OpenCode
- **Branch:** `claude/T-009-spectrum-tune`
- **Depends on:** T-008

## Goal

The owner found the T-008 light too big and unbalanced on the live site. Make it smaller, dimmer and symmetric.

## Acceptance criteria

- [x] Glow is an 11rem-wide band as tall as the bar at 0.55 opacity, a symmetric gradient with a warm core (`--cw-horus-accent`, `--color-neon`) and violet/blue edges.
- [x] At the bar's left and right ends the light takes the pill's rounded shape (clipped by the bar).
- [x] It no longer flips with the direction of travel; speed stretch is capped at 25%.
- [x] Only `--spectrum-*` tokens change; `docs/DESIGN.md` updated; `npm run ci` passes.

## Out of scope

Any other header change.
