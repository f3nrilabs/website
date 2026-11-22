# T-013: No personal names in the repository

- **Owner:** OpenCode (architect)
- **Reviewer:** the owner (approves in chat)
- **Branch:** `opencode/T-013-no-personal-names`
- **Depends on:** none

## Goal

No personal name appears anywhere in the repository or on the rendered site. Rules, task files, templates, docs and agent instructions refer to "the owner" instead.

## Facts decided by the owner (2026-11-22)

- The owner's name must not appear in any repository file. This is an operational-security requirement, not a style preference.
- The GitHub handle used in `CODEOWNERS` identifies the owner personally, so the file is deleted. It can be restored later under a non-identifying account.

## Acceptance criteria

- [ ] No personal name in any text file of the working tree (verified by a grep across the repo; binary files excluded).
- [ ] `AGENTS.md` refers to the owner neutrally; the visible-placeholder convention becomes `[TODO: owner — …]`; the roles table row becomes **Owner**.
- [ ] Task files, `docs/PRODUCT.md`, the ADR, the PR template, `CLAUDE.md` and the builder agent profile all use "the owner".
- [ ] `CODEOWNERS` is deleted.
- [ ] File encoding intact: UTF-8 without BOM, em-dashes and other non-ASCII characters preserved byte-for-byte (the sweep was redone with .NET file IO after a PowerShell 5 pass corrupted non-ASCII characters).
- [ ] `npm run ci` passes.

## Out of scope

- Git history rewriting: older commits still contain the name in file contents; removing that requires a deliberate force-push or repository re-creation — the owner's call, done by the owner.
- GitHub account and org opsec (membership visibility, commit authorship, profile data).
- Existing PR titles, bodies and review comments on GitHub — edited separately by the architect right after this merges; review comments cannot be edited and are disclosed as residue.

## Notes and follow-ups

- Follow-up: history purge (force-push or repo re-creation) if the owner wants zero residue at the cost of losing repo history.
