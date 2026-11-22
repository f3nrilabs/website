# Product: f3nri.com

## Purpose

f3nri.com is the home of f3nri, an independent security research team. It exists to:

1. Present f3nri's products, each on its own page, and let people ask for access.
2. Publish research: threat intelligence write-ups, analyses and advisories.
3. Give anyone who needs to reach the team (companies, researchers, recruiters, people reporting a vulnerability) a clear way to do it: email.

## Audience

- Security practitioners (SOC, CTI, red and blue teams) reading research and evaluating products.
- Companies looking for brand-protection and threat-intelligence tooling.
- Recruiters and peers checking the team's work.

They are technical and skeptical. The site earns trust through precise writing, real work and a clean, fast, private experience, not through marketing.

## Approved copy

Use these exactly; change only with Arda's approval.

- **Home hero h1:** "Break the chain before it breaks you." (a nod to Fenrir, the chain-breaking wolf)
- **Home hero lead:** "f3nri is an independent security research team. We study threats, build the tools to catch them, and publish what we find."
- **Disciplines h2:** "Three disciplines." / "One team."
- **Closing CTA h2:** "Talk to us."

## Products

| Product | Path              | Colorway | Status                        |
| ------- | ----------------- | -------- | ----------------------------- |
| Horus   | `/products/horus` | `horus`  | In development · early access |

### Horus (facts for copy)

Only these facts may be stated. Anything else is a `[TODO: Arda — …]`.

- Catches typosquat, homoglyph and combosquat domains of a brand.
- Reads Certificate Transparency logs from Google, Cloudflare, Sectigo, DigiCert and Let's Encrypt, and scores every new domain against the registered brands.
- Tracks each candidate through four states: `CERT_ISSUED` → `DNS_LIVE` → `HTTP_LIVE` → `CONTENT_MATCH`.
- Alerts by Telegram, email or webhook.
- Status: in development, early access by request.

## Pages

| Page          | Path                        | Content                                                                       | Status          |
| ------------- | --------------------------- | ----------------------------------------------------------------------------- | --------------- |
| Home          | `/`                         | Hero, disciplines, product blocks, latest research, contact call to action    | Planned (T-003) |
| Products      | `/products`                 | One block per product, linking to its page                                    | Planned (T-005) |
| Product page  | `/products/<slug>`          | Hero, problem, how it works, features, access call to action                  | Planned (T-005) |
| Research      | `/research`                 | List of write-ups, newest first, with tags                                    | Planned (T-004) |
| Research post | `/research/<slug>`          | One write-up in Markdown/MDX: title, date, summary, body, IOCs in code blocks | Planned (T-004) |
| About         | `/about`                    | What f3nri does and how it works                                              | Built (T-006)   |
| Contact       | `/contact`                  | Email, responsible disclosure note, security.txt link                         | Built (T-006)   |
| 404           | any                         | Short not-found page                                                          | Done            |
| security.txt  | `/.well-known/security.txt` | RFC 9116 contact file                                                         | Done            |

## Contact

No forms. All contact goes to `hello@f3nri.com` through `mailto:` links (an email service on the f3nri VPS handles the inbox). Product access requests use a prefilled subject, for example `mailto:hello@f3nri.com?subject=Horus%20early%20access`.

## Content principles

- English only.
- Every claim about a finding is backed by evidence in the post itself.
- No invented content. Unknowns stay visible as `[TODO: …]` until Arda fills them.
- No empty "coming soon" products. A product appears on the site when it has a real page.

## Non-goals (for now)

- No accounts, login or comments.
- No forms and no CMS: content lives as Markdown in the repository.
- No analytics or tracking of any kind.
- No newsletter until there is content to send.

## Open questions for Arda

- [TODO: Arda — will the team members be named on the About page, or stay anonymous?]
- [TODO: Arda — PGP key for the contact page, yes or no]
