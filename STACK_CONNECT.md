# STACK_CONNECT

```
git push main
  → GitHub Actions (lint / test / build ; Snyk CI SKIP+debt si pas de secret — ≠ PASS)
  → agent: `snyk-connect-open` (ouvre web Snyk — clic humain, **pas de secret chat**)
  → hook Vercel
```

## Checklist GitHub PRO
- [ ] Description repo non vide
- [ ] Branch protection / ruleset `main` (PR + checks) **ou** dette HUMAN documentée
- [ ] Après push : `python UNICORE/unicore.py snyk-connect-open --root <app>` → Florent clique (login + import repo)
- [ ] CI Snyk : scans CLI OAuth suffisent ; Actions sans token = SKIP debt=true (**≠ PASS**) — **interdit** de coller `SNYK_TOKEN` dans le chat
- [ ] Mode push : PR obligatoire **ou** `PUSH_DIRECT` noté en session
- [ ] Dependabot alerts activés (HUMAN UI)
- [ ] Pas de secret dans git

## Interdits
- Force-push `main`
- Contourner CI / présenter SKIP comme PASS
- Demander / coller un secret Snyk dans le chat
- `vercel deploy` CLI
