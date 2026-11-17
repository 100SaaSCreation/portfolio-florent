# STATE — portfolio-florent

<!-- PRODUCT:START -->
## Mémoire produit (STATE_CONTEXT)
- Nom : `portfolio-florent` — portfolio de Florent Le Bot (concepteur & développeur SaaS)
- Stack : `site_vitrine` UNICORE — Next 16.4.5, React 19.3.1, Tailwind 4.3.3 (`@theme` CSS), Vitest 3.2.7
- Design : preset design_soft `signal` (gris froid, encre, bronze) — Syne / Source Serif 4 / JetBrains Mono via next/font
- Mis à jour : 2026-11-17

### Architecture
- `app/page.tsx` compose `components/` : site-header, hero, projects, method, unicore, contact (+ copy-email-button client), site-footer
- Contenu unique : `lib/profile.ts` (identité, 4 projets, faits, méthode, piliers UNICORE, compétences)
- Routes : `/`, `/credits`, `/_not-found`, `/icon.svg` — toutes statiques
- Aucune API, aucune base, aucun secret. En-têtes : nosniff, referrer strict, frame DENY, permissions fermées

### Preuves (2026-11-17, local)
- lint 0 · tsc 0 · Vitest 11/11 · couverture lignes 91,02 % · build 0
- UNICORE : validate_scaffold PASS, verify_scaffold --code PASS, quality_loop PASS, fabricate-prove C1/C2/C6 PASS (C3–C5 SKIP ≠ PASS)
- Navigateur : desktop 1440 et mobile 390 sans débordement, `/credits` 200, 404 OK, images OK
- Console navigateur : NON VÉRIFIÉE

### Next actions
- Mise en ligne GitHub → Vercel (HUMAN_TASKS H1, accord WRITE_SHARED requis)
- Snyk + Lighthouse sur l'URL publique
<!-- PRODUCT:END -->
