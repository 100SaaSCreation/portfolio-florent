# GO_LIVE — Site vitrine

Généré / aligné UNICORE — stack `site_vitrine` + preuve PageSpeed online.

## Statut pipeline
- scaffold : `PASS`
- verify : `PASS`
- deep code : `PASS`

## Checklist PRO — site vitrine
1. [x] Contenu réel et vérifiable.
2. [x] `pnpm lint` + `pnpm typecheck` + `pnpm test:coverage` + `pnpm build` verts (preuves locales).
3. [x] Parcours rejoué desktop/mobile.
4. [x] Push GitHub → Vercel (git push ; pas `vercel deploy` CLI).
5. [x] Snyk test/monitor (0 vuln high/critical).
6. [ ] Lighthouse **en ligne** Google PageSpeed PASS (`lh-online-prove`) — localhost ≠ PASS.
7. [ ] Corriger FAIL PSI (robots.txt URL cassée par CR/LF env) puis rejouer.

## Verdicts (SKIP ≠ PASS)
- Site vitrine ≠ SaaS : `COMMERCIAL_LIVE` (SMTP/Stripe/LEGAL) ne s'applique pas.
- « En ligne » seulement après URL publique prouvée (HTTP 200).
- Lighthouse local ≠ preuve Google PageSpeed.

## Commandes utiles
```text
pnpm install
pnpm test:coverage
pnpm build
python ../../UNICORE/unicore.py lh-online-prove --root . --base-url https://portfolio-florent-le-bot.vercel.app/
```

## Notes
- Branding + contenu réel avant mise en ligne.
- `NEXT_PUBLIC_SITE_URL` doit être https **sans** espaces / CR / LF (sinon robots/sitemap invalides → SEO PSI < 100).
