# STATE

The single board for who is doing what. Update it on your branch when you claim, block or finish a task (AGENTS.md, section 3).

Status: `todo` · `in-progress` · `review` · `blocked` · `done`

| ID    | Task                                                                            | Owner                                | Branch                        | Status      | Depends on |
| ----- | ------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------- | ----------- | ---------- |
| T-000 | Project scaffold, rules, CI and deploy                                          | Claude Code                          | main                          | done        |            |
| T-001 | Theme rules in `docs/DESIGN.md`, tokens, fonts, gradient images                 | Claude Code                          | claude/T-001-theme            | done        |            |
| T-002 | Layout components: SiteHeader, SiteFooter, Hero, Pill, Button, Card, ColorBlock | Claude Code                          | claude/T-002-components       | done        | T-001      |
| T-003 | Home page                                                                       | OpenCode                             | opencode/T-003-home           | done        | T-002      |
| T-004 | Research: content collection, list page, post page                              | Claude Code (spec), OpenCode (build) |                               | todo        | T-002      |
| T-005 | Products: `/products` index and the Horus page                                  | OpenCode                             | opencode/T-005-products       | done        | T-002      |
| T-006 | About and Contact pages                                                         | OpenCode (builder sub-agent)         | opencode/T-006-about-contact  | in-progress | T-002      |
| T-008 | Spectrum light on the header                                                    | Claude Code                          | claude/T-008-header-spectrum  | done        | T-002      |
| T-007 | Browser tests: Playwright smoke and axe accessibility checks in CI              | Claude Code                          |                               | todo        | T-003      |
| T-009 | Smaller, balanced spectrum light                                                | Claude Code                          | claude/T-009-spectrum-tune    | done        | T-008      |
| T-010 | A living spectrum light (spring, breath, shimmer, bloom)                        | OpenCode (architect)                 | opencode/T-010-alive-spectrum | done        | T-009      |

## Notes

- Architect: OpenCode (GLM-5.3), builder: OpenCode sub-agent (DeepSeek V4.1 Flash), from 2026-11-22.
- T-002 is merged: T-003 and T-005 are ready for OpenCode and can run in parallel.
- Open questions for Arda live in `docs/PRODUCT.md`, section "Open questions".
