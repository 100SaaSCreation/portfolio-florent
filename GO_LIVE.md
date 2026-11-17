# GO_LIVE — Site vitrine

Généré par UNICORE ship `1.0.0` — stack `site_vitrine`.

## Statut pipeline
- scaffold : `PASS`
- verify : `PASS`
- deep code : `PASS`

## Checklist PRO — site vitrine (pas d'auth, pas de paiement, pas de base)
1. [ ] Contenu réel et vérifiable (aucun chiffre, client ou lien inventé).
2. [ ] `pnpm lint` + `pnpm typecheck` + `pnpm test:coverage` + `pnpm build` verts.
3. [ ] Parcours rejoué : chaque ancre, lien et bouton mène quelque part ; 404 propre ; mobile 390 px sans débordement.
4. [ ] Push GitHub puis deploy via **git push** → Vercel (interdit `vercel deploy` CLI ; jamais projet `moteur`).
5. [ ] Après push : `snyk-connect-open` → clic humain → `snyk test` (pas de secret dans le chat).
6. [ ] Lighthouse sur l'URL réelle (ou SKIP documenté `debt: true` — ≠ PASS).

## Verdicts (SKIP ≠ PASS)
- Site vitrine ≠ SaaS : `COMMERCIAL_LIVE` (SMTP/Stripe/LEGAL) ne s'applique pas.
- « En ligne » seulement après URL publique prouvée (HTTP 200) ; sinon local uniquement.

## Commandes utiles
```text
pnpm install
pnpm test:coverage
pnpm build
```

## Notes preset
- Branding + contenu réel avant mise en ligne.
- Pas de Better Auth requis sur ce preset.
