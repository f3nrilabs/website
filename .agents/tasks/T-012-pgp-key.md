# T-012: PGP key for the contact page

- **Owner:** OpenCode (architect)
- **Reviewer:** Arda (approves in chat)
- **Branch:** `opencode/T-012-pgp-key`
- **Depends on:** T-006

> Executed by the architect as an urgent hotfix on Arda's order: the previous `[TODO: Arda — PGP key yes or no]` placeholder exposed his name on the live contact page, and his name must not appear anywhere on the site. The builder sub-agent did not run for this task.

## Goal

Anyone with a sensitive report can send f3nri encrypted mail: the public PGP key is served from the site, referenced from `security.txt`, and shown with its fingerprint on the contact page. The last visible `[TODO: Arda — …]` on the site disappears.

## Facts decided by Arda (2026-11-22)

- PGP: yes. A key pair for `hello@f3nri.com` already exists on Arda's machine (primary ed25519, cv25519 encryption subkey, passphrase-protected; the private key never leaves his machine).
- Primary key fingerprint: `4941B770C40CE520F81C81842780DDABD6767400` (display format: `4941 B770 C40C E520 F81C 8184 2780 DDAB D676 7400`).
- The public key block is at `C:\Users\ASUS\Desktop\f3nri-pgp-public.asc` (ASCII armor, ~700 bytes). Copy it byte-for-byte; never retype or reformat it.

## Acceptance criteria

- [ ] `public/.well-known/pgp.txt` contains the public key block exactly as it is in `C:\Users\ASUS\Desktop\f3nri-pgp-public.asc`, ending with a single newline.
- [ ] `public/.well-known/security.txt` gains one line, RFC 9116 `Encryption:` field, pointing to `https://f3nri.com/.well-known/pgp.txt`. No other line changes.
- [ ] `/contact` (`src/pages/contact.astro`): the `[TODO: Arda — PGP key yes or no]` paragraph is replaced by a short encrypted-mail note: the fingerprint `4941 B770 C40C E520 F81C 8184 2780 DDAB D676 7400` for `hello@f3nri.com` in mono type, plus a same-tab link "PGP key" to `/.well-known/pgp.txt`. Plain tone, no new section heading unless it fits the page's existing structure.
- [ ] `docs/PRODUCT.md`: the open question `[TODO: Arda — PGP key for the contact page, yes or no]` is resolved — replaced by a short decision note recording the key, its fingerprint and the `/.well-known/pgp.txt` location (T-012).
- [ ] `.agents/STATE.md`: T-012 row added and claimed `in-progress` in the first commit (run `npm run format` before committing — a previous PR failed CI over table alignment).
- [ ] No new components, tokens or dependencies; zero client-side JavaScript; the private key never appears in the repository.
- [ ] `npm run ci` passes; screenshots of `/contact` at 375, 768 and 1280 px in the PR; verify in the browser that `/.well-known/pgp.txt` renders as text and the fingerprint line does not overflow at 320 px (wrap allowed, no horizontal scroll).

## Spec

- Tone: plain, precise, technical. Suggested contact wording (may be adjusted within tone rules): "Sensitive reports can be sent encrypted to hello@f3nri.com." followed by the fingerprint and the key link.
- The fingerprint is public information; display it in `--font-mono` at a size that wraps instead of overflowing on narrow screens.

## Out of scope

- The private key, passphrases, key rotation or expiry policy.
- Key discovery via WKD/Web Key Directory (separate follow-up task if wanted).
- Any other page, component or token.

## Notes and follow-ups

- Follow-up candidate: WKD (`/.well-known/openpgpkey/…`) so MUAs can fetch the key automatically — new task if Arda wants it.
