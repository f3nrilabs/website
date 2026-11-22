# AGENTS.md

Rules for every AI agent and human working on **f3nri.com**. This file wins over any habit, default or other instruction file. If something here is unclear or blocks you, stop and ask Arda; do not guess around it.

## 0. Before you touch anything

Read, in this order:

1. `AGENTS.md` (this file)
2. `docs/PRODUCT.md`: what the site is and what is on it
3. `docs/DESIGN.md`: brand, tokens and visual rules
4. `docs/ARCHITECTURE.md`: stack, folders, build and deploy
5. `.agents/STATE.md`: who is doing what right now
6. Your task file in `.agents/tasks/`

If your work would contradict any of these documents, the document wins. Propose a change to the document in your PR instead of quietly diverging.

## 1. The project

- **What:** the static website of f3nri, an independent security research team. Live at https://f3nri.com.
- **Stack:** Astro (static output), TypeScript (strictest), plain CSS with design tokens. Zero client-side JavaScript by default.
- **Node:** 22 (`.nvmrc`). Package manager: npm. Always commit `package-lock.json`.

| Command          | What it does                                                        |
| ---------------- | ------------------------------------------------------------------- |
| `npm ci`         | Install exactly what the lockfile says                              |
| `npm run dev`    | Local dev server at http://localhost:4321                           |
| `npm run check`  | Astro and TypeScript diagnostics                                    |
| `npm run format` | Format everything with Prettier                                     |
| `npm run ci`     | Format check + type check + build. **Must pass before every push.** |

Merging to `main` deploys to production within about a minute. `main` must always be deployable.

## 2. Roles

| Who                                        | Does                                                                                                   | Does not                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| **Arda** (owner)                           | Decides scope and priorities, writes or approves task files, approves design, merges PRs               |                                                              |
| **Architect** (Claude Code, see below)     | Architecture, design system, layout and complex components, specs for others, reviews every builder PR | Merge to `main` without Arda's approval for that PR          |
| **OpenCode** (builder: agent or sub-agent) | Pages, components and content from an approved task file, refactors, tests                             | Change architecture, tokens or dependencies; merge to `main` |
| **Other agents** (Codex, Command Code, …)  | Single-file tasks explicitly assigned to them                                                          | Anything else                                                |

The architect role is held by Claude Code, or by the agent Arda assigns to it (recorded in `.agents/STATE.md`, Notes). A PR written by the builder sub-agent counts as reviewed when the architect agent reviews it.

Every PR is reviewed by an agent other than its author before Arda merges it.

## 3. Workflow: no task file, no code

1. **Task.** Work starts from a file in `.agents/tasks/` (copy `_TEMPLATE.md`). It states the goal, the acceptance criteria and what is out of scope. If a request comes in chat, write the task file first and get it approved.
2. **Claim.** In `.agents/STATE.md`, set the task to `in-progress` with your agent name and branch. Commit that change on your branch as the first commit. Never take a task someone else has claimed.
3. **Branch and worktree.** One task = one branch = one PR. Branch name: `<agent>/<task-id>-<short-slug>`, for example `opencode/T-004-research-list`. Each agent works in its own git worktree, outside the main checkout:
   ```
   git worktree add ../website-opencode -b opencode/T-004-research-list origin/main
   ```
4. **Build.** Small steps, run `npm run ci` often. Stay inside the task's scope; if you find something else that needs fixing, write it down under "Follow-ups" in the task file instead of fixing it now.
5. **PR.** Push the branch and open a PR to `main` using the template. Fill every section. Attach screenshots at 375 px, 768 px and 1280 px for any visual change.
6. **Review.** The reviewing agent checks the PR against the task's acceptance criteria and this file, and leaves concrete comments. The author fixes them in new commits (no force-push after review starts).
7. **Merge.** Arda merges with "Squash and merge", or tells the architect agent to do the same for a PR he has explicitly approved in chat. The agent merging first checks that the branch is up to date with `main`, has no conflicts and a green CI run. The author sets the task to `done` in `.agents/STATE.md`.

Keep PRs small: under ~400 changed lines excluding the lockfile and images. Split larger work into several tasks.

## 4. Hard rules

**Design**

- Colors, fonts, sizes, spacing, radii and motion come only from `src/styles/tokens.css`. A hex value, `rgb()`, font name or magic pixel number in a component is a bug.
- The wordmark is the `Wordmark` component. The mark is `/brand/mark-neon.svg`. Never redraw, recolor, stretch or replace either.
- New tokens or changes to tokens: Claude Code only, recorded in `docs/DESIGN.md` in the same PR.

**Code**

- Zero client-side JavaScript unless the task says why it is needed. If it is needed, use an Astro island scoped to that component.
- No new dependency without an ADR in `docs/decisions/` approved by Arda. Prefer the platform and what is already installed.
- No third-party scripts, analytics, trackers, embeds, external fonts or CDNs. Everything is served from f3nri.com.
- TypeScript strictest stays on. No `any`, no `@ts-ignore` without a comment explaining why.
- Do not edit `package-lock.json` by hand, `dist/`, `.astro/`, or files in `public/brand/` (they come from `f3nrilabs/brand`).
- Do not edit `.github/workflows/` unless the task is about CI or deploy.

**Content**

- English only: all text on the site, code, comments, commits and PRs.
- No invented content: no made-up numbers, clients, testimonials, team members, findings or dates. Missing facts become a visible placeholder like `[TODO: Arda — tool description]` and are listed in the PR.
- Tone: plain, precise, technical. No hype, no emoji, no "cutting-edge", "revolutionary" or similar.

**Quality**

- Accessible by default: semantic HTML, one `h1` per page, headings in order, alt text on meaningful images (`alt=""` on decorative ones), every control reachable and visible with the keyboard, contrast at least WCAG AA, `prefers-reduced-motion` respected.
- Pages work from 320 px to 1920 px wide with no horizontal scroll.
- Performance: home page under 300 KB transferred excluding fonts; images sized and lazy-loaded below the fold.

**Security**

- No secrets, tokens, keys or private URLs in the repository, ever. There is nothing in this site that needs one.
- Links to external sites use `rel="noopener noreferrer"` when they open in a new tab.

## 5. Definition of done

A task is done when all of these are true:

- [ ] Every acceptance criterion in the task file is met.
- [ ] `npm run ci` passes locally and in GitHub Actions.
- [ ] Checked in a browser at 375, 768 and 1280 px; no console errors.
- [ ] Keyboard-only walkthrough of anything interactive.
- [ ] Docs updated if behavior, structure or design rules changed.
- [ ] `.agents/STATE.md` updated.
- [ ] PR reviewed by another agent, then merged by Arda.

## 6. Commits

Conventional Commits, imperative, English: `feat: add research list page`, `fix: correct focus ring on nav links`, `docs: record token change`, `chore: update astro`. One logical change per commit.

## 7. When something goes wrong

- **Blocked or unsure:** write `Blocked:` with the reason in your task file and `.agents/STATE.md`, then stop and ask Arda. Do not invent a workaround that breaks a rule above.
- **Conflict with another agent's work:** never overwrite or delete it. Rebase on `origin/main`; if the conflict is in their area, ask them or Arda.
- **Broke production:** say so immediately. Revert the merge commit with a PR titled `revert: …`; the VPS also keeps the last five releases for an instant rollback.
