# STATE — portfolio-florent

<!-- PRODUCT:START -->
## Mémoire produit (STATE_CONTEXT)
- Nom : `portfolio-florent` — portfolio de Florent Le Bot (concepteur & développeur SaaS)
- Stack : `site_vitrine` UNICORE — Next 16.4.5, React 19.3.1, Tailwind 4.3.3 (`@theme` CSS), Vitest 4.1.12
- Design : preset design_soft `signal` — Syne / Source Serif 4 / JetBrains Mono via next/font
- Prod : https://portfolio-florent-silk.vercel.app
- Repo : https://github.com/100SaaSCreation/portfolio-florent (public)
- Mis à jour : 2026-11-17

### Architecture
- `app/page.tsx` compose `components/` : site-header, hero, projects, method, unicore, contact, site-footer
- Contenu : `lib/profile.ts` + `lib/site.ts` (URL canonique)
- Routes : `/`, `/credits`, `/mentions-legales`, `/confidentialite`, `/robots.txt`, `/sitemap.xml`, `/_not-found`, `/icon.svg`
- Aucune API, aucune base applicative, aucun secret. En-têtes sécurité Next.

### Preuves
- Local : lint 0 · tsc 0 · Vitest 16/16 · couverture lignes ~98 % · build 0 · Snyk 0 vuln · LH local ~90/100/100/100
- Public : HTTP 200 sur `/`, `/mentions-legales`, `/confidentialite`, `/robots.txt` · LH public perf 72 / a11y 100 / bp 100 / seo 100 · console OK
- UCDO : GitHub CREATED, Vercel CREATED, Snyk PASS ; C8 runtime SKIP (≠ PASS) — health runtime observé manuellement via URL silk
- Note : `portfolio-florent.vercel.app` sert encore un ancien site Vite (alias hors projet) — ne pas confondre avec la prod silk

### Next actions
- H3 : domaine clean / custom
- H4 : démos publiques optionnelles
<!-- PRODUCT:END -->
