# T-005: Products index and the Horus page

- **Owner:** OpenCode
- **Reviewer:** Claude Code
- **Branch:** `opencode/T-005-products`
- **Depends on:** T-002

## Goal

Give every product its own page from one template, starting with Horus, plus a `/products` index.

## Acceptance criteria

- [ ] Products are data, not hand-written pages: a content collection `products` in `src/content.config.ts` with one Markdown file per product (`src/content/products/horus.md`). Schema: `name`, `slug`, `colorway` (`Colorway`), `status` (`"in-development" | "beta" | "live"`), `statusLabel`, `tagline`, `problem` (`title`, `paragraphs: string[]`), `steps` (`code`, `title`, `text`)[], `features` (`label`, `title`, `text`)[], `accessSubject`.
- [ ] `src/pages/products/[slug].astro` renders the product page pattern from `docs/DESIGN.md` using the T-002 components and the page `colorway` of the product.
- [ ] `src/pages/products/index.astro` lists every product as a `ColorBlock` in its colorway (name, status pill, tagline, "See <name>" button).
- [ ] Horus content uses only the facts in `docs/PRODUCT.md` ("Horus"):
  - Hero: label "in development · early access"; h1 "Horus" (`titleSize="giant"`); lead "See lookalike domains of your brand the moment their certificate is issued, before they go live."; buttons "Request early access" (`dark`, mailto with subject `Horus early access`) and "How it works" (`ghost`, `#how`).
  - Problem: h2 "Phishing starts with a certificate." ("certificate." in `--cw-horus-accent`); paragraphs: "A lookalike domain needs a TLS certificate before it can host a convincing login page. Every public certificate is written to Certificate Transparency logs, often hours or days before the site goes live." and "Horus reads those logs as they are written, so you see the domain while it is still being set up, not after your customers have been sent to it."
  - How it works (`id="how"`, ordered list of `Card as="li"`): `01 · CERT_ISSUED` Certificate seen · "A new certificate matching one of your brands appears in a CT log and is scored as a candidate." / `02 · DNS_LIVE` Domain resolves · "Horus keeps checking until the domain starts resolving in DNS." / `03 · HTTP_LIVE` Site answers · "The domain starts serving a web page." / `04 · CONTENT_MATCH` Impersonation confirmed · "The page content matches your brand. You get an alert with the evidence."
  - Features: `sources` Five CT log operators · "Google, Cloudflare, Sectigo, DigiCert and Let's Encrypt." / `detection` Typosquats, homoglyphs, combosquats · "Swapped letters, look-alike characters and brand names glued to other words." / `alert` Telegram, email, webhook · "Send alerts where your team already works."
  - Access `ColorBlock` (horus, centered): h2 "Get early access."; "Horus is in development. Tell us which brands you want to protect and we will reach out when your spot opens."; `Button variant="dark"` "Request early access".
- [ ] Each product page sets its own `<title>` and description (`Base` props) and an `og:image` of its colorway (1920 px gradient is acceptable until product OG images exist).
- [ ] 320–1920 px, no horizontal scroll; screenshots at 375, 768, 1280 px in the PR; `npm run ci` passes.

## Out of scope

New colorways or tokens; screenshots or diagrams of the Horus UI (follow-up when the owner provides them).
