# STATE — portfolio-florent

<!-- PRODUCT:START -->
## Mémoire produit (STATE_CONTEXT)
- Nom : `portfolio-florent` — portfolio de Florent Le Bot (concepteur & développeur SaaS)
- Stack : Next 16.4.5, React 19.3.1, Tailwind 4.3.3, Vitest 4.1.12, Prisma 7.10.1, Neon
- Design : preset design_soft `signal` — Syne / Source Serif 4 / JetBrains Mono via next/font
- Prod : https://portfolio-florent-le-bot.vercel.app
- Admin : https://portfolio-florent-le-bot.vercel.app/admin
- Repo : https://github.com/100SaaSCreation/portfolio-florent (public)
- Mis à jour : 2026-11-17

### Architecture
- Contenu éditable : table `SiteContent` (JSON) + `AdminUser` (bcrypt) ; API `/api/admin/*` ; UI `/admin`
- Fallback : `lib/content-defaults.ts` si DB absente
- Pages publiques : `getPortfolioContent()` → composants
- Routes : `/`, `/admin`, `/admin/login`, légales, robots/sitemap

### Preuves
- Local : lint 0 · tsc 0 · Vitest 16/16 · couverture lignes ~98 % · build 0 · Snyk 0 vuln · LH local ~90/100/100/100
- Public : HTTP 200 sur `/`, `/mentions-legales`, `/confidentialite`, `/robots.txt` · LH public perf 72 / a11y 100 / bp 100 / seo 100 · console OK
- UCDO : GitHub CREATED, Vercel CREATED, Snyk PASS ; C8 runtime SKIP (≠ PASS) — health runtime observé manuellement via URL silk
- Note : `portfolio-florent.vercel.app` = ancien Vite ; prod officielle = `portfolio-florent-le-bot.vercel.app`

### Next actions
- H3 : domaine custom (optionnel)
- H4 : démos publiques optionnelles
<!-- PRODUCT:END -->
