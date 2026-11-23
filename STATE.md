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
- Local : lint 0 · tsc 0 · Vitest 19/19 · build 0 · Snyk 0 vuln
- Google PageSpeed (`pagespeed.web.dev`, 2026-11-17) mobile+desktop : perf/a11y/BP **100**, SEO **92** — FAIL audit `robots-txt` (URL Sitemap coupée : CR/LF dans env `NEXT_PUBLIC_SITE_URL` Vercel)
- Correctif : `lib/site.ts` `normalizeSiteUrl(trim)` — **redeploy requis** pour SEO 100
- UNICORE : `lh-online-prove` (PageSpeed online) ; LH localhost ≠ PASS online
- UCDO : GitHub + Vercel + Snyk PASS ; ancien domaine `portfolio-florent.vercel.app` = Vite legacy

### DB backup (2026-11-23)
- Preuve : `.unicore/audit/db_backup.json` → **PASS_PARTIAL** + debt
- Snapshot Neon `snap-lingering-sunset-ba7kjy39` + restore probe PASS (preview non finalisée)
- Workflow `.github/workflows/db-backup.yml` (cron 03:00 UTC `pg_dump`)
- Schedule Neon daily : **HUMAN** (Free — `backup schedule creation is not enabled`)

### Next actions
- Upgrade Neon Launch → `neon snapshots schedule set --branch main --frequency daily --hour 3 --retention 604800`
- Ajouter secret GitHub `DATABASE_URL` (hors chat) pour le cron pg_dump
- Optionnel : secrets S3/R2 pour offsite
- H3 : domaine custom (optionnel)
<!-- PRODUCT:END -->
