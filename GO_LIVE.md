# GO_LIVE — Site vitrine + admin Neon

Aligné UNICORE — PageSpeed online + DB backup PRO.

## Statut pipeline
- scaffold : `PASS`
- verify : `PASS`
- deep code : `PASS`

## Checklist PRO
1. [x] Contenu réel et vérifiable.
2. [x] `pnpm lint` + `pnpm typecheck` + `pnpm test` verts.
3. [x] Parcours desktop/mobile.
4. [x] Push GitHub → Vercel (git push ; pas `vercel deploy` CLI).
5. [x] Snyk test/monitor (0 vuln high/critical).
6. [x] Lighthouse **en ligne** Google PageSpeed 100/100/100/100 (mobile+desktop).
7. [x] DB backup PRO **PASS_PARTIAL** : snapshot Neon + restore probe PASS + Action `pg_dump` nightly.
8. [ ] **HUMAN** : upgrade Neon → Launch/Scale puis `neon snapshots schedule set --frequency daily` (schedule natif bloqué sur Free).
9. [ ] **HUMAN** : secret GitHub `DATABASE_URL` (pour que le cron `db-backup.yml` ne SKIP pas) ; optionnel S3/R2.

## Verdicts (SKIP ≠ PASS)
- Site vitrine ≠ SaaS COMMERCIAL_LIVE (SMTP/Stripe).
- Neon Free : PITR ~6 h + 1 snapshot ; **pas** de schedule auto.
- `PASS_PARTIAL` backup ≠ `PASS` schedule Launch.
- Sauvegarde ≠ restauration : restore probe déjà PASS (branche preview non finalisée, nettoyée).

## Commandes
```text
pnpm test
python ../../UNICORE/unicore.py lh-online-prove --root . --base-url https://portfolio-florent-le-bot.vercel.app/
python ../../UNICORE/unicore.py db-backup-prove --root .
```
