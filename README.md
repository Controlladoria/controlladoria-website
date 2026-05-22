# controlladoria-website

Marketing and landing page for the ControlladorIA platform. Static Next.js site with anchor-based single-page navigation, no backend calls, no CMS, and no authentication.

- **Framework:** Next.js 16.2 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Language:** pt-BR throughout
- **Deployed on:** Vercel (recommended) or AWS Amplify

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2 |
| Language | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Fonts | Geist Sans + Geist Mono (next/font) |

---

## Quick Start

```bash
npm install
npm run dev    # http://localhost:3000
```

No environment variables required. The site has zero runtime dependencies on the backend.

---

## Page Structure

Single page (`app/page.tsx`) with anchor-scrolling sections:

| Section | Anchor | Content |
|---------|--------|---------|
| Hero | — | Headline, CTA buttons, product demo visual |
| Recursos | `#recursos` | Feature grid — upload, AI extraction, reports, multi-org |
| Como Funciona | `#como-funciona` | 3-step flow: upload → validate → report |
| Casos de Uso | `#casos-de-uso` | Accounting firms, SMEs, financial managers |
| Planos | `#planos` | Pricing cards — Starter, Equipe, Enterprise |
| FAQ | `#faq` | Common questions accordion |
| CTA | — | Final conversion section |
| Footer | — | Links, legal, social |

---

## Design

| Token | Value |
|-------|-------|
| Primary color | Teal `#0d767b` |
| Accent color | Orange `#f86a15` |
| Background | Dark (`#0a1f20` range) |
| Theme | Dark throughout |
| Language | pt-BR |

---

## Deployment

**Vercel (recommended):**
1. Import repo on vercel.com
2. Framework: Next.js (auto-detected)
3. No environment variables needed
4. Connect domain `controlladoria.com.br`

**AWS Amplify (alternative):**
1. Connect repo to Amplify Console
2. No `amplify.yml` needed — Next.js auto-detected
3. No environment variables needed
4. Connect domain via Amplify custom domain settings

**Production domain:** `controlladoria.com.br`

---

## Notes

- All pricing and plan details are hardcoded — update `app/page.tsx` directly when plans change.
- CTA buttons link to `app.controlladoria.com.br/register` and `app.controlladoria.com.br/login` (the customer UI).
- Contact form links to `/contato` on the customer UI, not this site.
