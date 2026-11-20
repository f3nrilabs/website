# Product: f3nri.com

## Purpose

f3nri.com is the home of f3nri, an independent security research team. It exists to:

1. Publish research: threat intelligence write-ups, analyses and advisories.
2. Present the tools f3nri builds, with links to their repositories.
3. Give anyone who needs to reach the team (researchers, companies, recruiters, people reporting a vulnerability) a clear way to do it.

## Audience

- Security practitioners (SOC, CTI, red and blue teams) reading research and using tools.
- Companies evaluating f3nri for work or collaboration.
- Recruiters and peers checking the team's work.

They are technical and skeptical. The site earns trust through precise writing, real work and a clean, fast, private experience, not through marketing.

## Pages

| Page          | Path                        | Content                                                                       | Status           |
| ------------- | --------------------------- | ----------------------------------------------------------------------------- | ---------------- |
| Home          | `/`                         | Who f3nri is in one line, latest research, featured tools, links              | Placeholder live |
| Research      | `/research`                 | List of write-ups, newest first, with tags                                    | Planned (T-004)  |
| Research post | `/research/<slug>`          | One write-up in Markdown/MDX: title, date, summary, body, IOCs in code blocks | Planned (T-004)  |
| Tools         | `/tools`                    | Tools with one-line description, status and GitHub link                       | Planned (T-005)  |
| About         | `/about`                    | What f3nri does and how it works                                              | Planned (T-006)  |
| Contact       | `/contact`                  | Email, PGP key if any, responsible disclosure note                            | Planned (T-006)  |
| 404           | any                         | Short not-found page                                                          | Done             |
| security.txt  | `/.well-known/security.txt` | RFC 9116 contact file                                                         | Done             |

## Content principles

- English only.
- Every claim about a finding is backed by evidence in the post itself.
- No invented content. Unknowns stay visible as `[TODO: …]` until Arda fills them.

## Non-goals (for now)

- No accounts, login or comments.
- No CMS: content lives as Markdown in the repository.
- No analytics or tracking of any kind.
- No newsletter until there is content to send.

## Open questions for Arda

- [TODO: Arda — one-sentence description of f3nri for the home page]
- [TODO: Arda — which tools to list first, with their repository URLs]
- [TODO: Arda — will the team members be named on the About page, or stay anonymous?]
- [TODO: Arda — PGP key for the contact page, yes or no]
