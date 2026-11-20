# STATE

The single board for who is doing what. Update it on your branch when you claim, block or finish a task (AGENTS.md, section 3).

Status: `todo` · `in-progress` · `review` · `blocked` · `done`

| ID    | Task                                                               | Owner                                | Branch | Status                                                 | Depends on |
| ----- | ------------------------------------------------------------------ | ------------------------------------ | ------ | ------------------------------------------------------ | ---------- |
| T-000 | Project scaffold, rules, CI and deploy                             | Claude Code                          | main   | done                                                   |            |
| T-001 | Turn the reference theme into concrete rules in `docs/DESIGN.md`   | Claude Code                          |        | blocked: waiting for theme video and example from Arda |            |
| T-002 | Base layout: header, footer, navigation, content container         | Claude Code                          |        | todo                                                   | T-001      |
| T-003 | Home page                                                          | OpenCode                             |        | todo                                                   | T-002      |
| T-004 | Research: content collection, list page, post page                 | Claude Code (spec), OpenCode (build) |        | todo                                                   | T-002      |
| T-005 | Tools page                                                         | OpenCode                             |        | todo                                                   | T-002      |
| T-006 | About and Contact pages                                            | OpenCode                             |        | todo                                                   | T-002      |
| T-007 | Browser tests: Playwright smoke and axe accessibility checks in CI | Claude Code                          |        | todo                                                   | T-003      |

## Notes

- Task files for T-001 onward are written when the task is picked up, from `.agents/tasks/_TEMPLATE.md`.
- Open questions for Arda live in `docs/PRODUCT.md`, section "Open questions".
