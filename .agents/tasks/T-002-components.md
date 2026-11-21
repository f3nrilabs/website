# T-002: Layout components

- **Owner:** Claude Code
- **Reviewer:** OpenCode
- **Branch:** `claude/T-002-components`
- **Depends on:** T-001

## Goal

Build the shared components from `docs/DESIGN.md` ("Components") so page tasks (T-003, T-005, T-006) only assemble them.

## Acceptance criteria

- [ ] `src/components/` contains `SiteHeader`, `SiteFooter`, `Hero`, `Pill`, `Button`, `Card`, `ColorBlock`, each matching its row in `docs/DESIGN.md`.
- [ ] `Base.astro` renders `SiteHeader` and `SiteFooter` around the page slot, and accepts a `colorway` prop (`"brand" | "horus" | "dark"`, default `"brand"`) that sets `--page-accent` for the page.
- [ ] A typed `Colorway` union and a `colorways` map (image paths and accent token per colorway) live in `src/lib/colorways.ts`; components never hard-code image paths.
- [ ] `Hero` and `ColorBlock` render the gradient as an `<img>` with `srcset` (960w, 1920w), `sizes="100vw"`, `alt=""`, `object-fit: cover`, plus the `.grain` overlay. `Hero` uses `fetchpriority="high"`; `ColorBlock` uses `loading="lazy"`.
- [ ] `SiteHeader` works without JavaScript: under 768 px the section links collapse into a `<details>` menu.
- [ ] `Button` renders an `<a>` when given `href`, otherwise a `<button>`; variants `primary`, `dark`, `ghost`.
- [ ] Only tokens are used in component styles (no hex, no font names, no magic pixel values beyond the documented paddings).
- [ ] The placeholder home page uses `Base` with the new header and footer; `npm run ci` passes; no console errors at 375, 768 and 1280 px.

## Spec

### Props

| Component    | Props                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `SiteHeader` | `current?: "products" \| "research" \| "about"`                                                                         |
| `SiteFooter` | none                                                                                                                    |
| `Hero`       | `colorway: Colorway`, `label: string`, `title: string`, `titleSize?: "display" \| "giant"`, slot `lead`, slot `actions` |
| `Pill`       | `label: string`, `accent?: string` (CSS var name, default `--page-accent`)                                              |
| `Button`     | `href?: string`, `variant?: "primary" \| "dark" \| "ghost"`, slot                                                       |
| `Card`       | `label: string`, `title: string`, `onMedia?: boolean`, slot (body text), `as?: "article" \| "li" \| "div"`              |
| `ColorBlock` | `colorway: Colorway`, `align?: "start" \| "center"`, slot                                                               |

### Header links

Products → `/products`, Research → `/research`, About → `/about`, "Contact us" → `mailto:hello@f3nri.com`.

### Footer columns

- products: Horus → `/products/horus`
- company: Research, About, Contact (`/contact`)
- follow: GitHub `https://github.com/f3nrilabs`, X `https://x.com/f3nrilabs`, Instagram `https://instagram.com/f3nrilabs`
- security: `security.txt` → `/.well-known/security.txt`, `hello@f3nri.com` (mailto)

## Out of scope

Page content (T-003, T-005, T-006).
