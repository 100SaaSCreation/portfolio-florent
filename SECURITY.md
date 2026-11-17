# Security

Signaler une vulnérabilité en privé (pas d'issue publique avec exploit).

## Attendu usine UNICORE
- Pas de secret dans git
- CI Snyk si `SNYK_TOKEN` ; sinon artefact SKIP `debt: true` (≠ PASS)
- Dependabot alerts / security updates activés côté GitHub (HUMAN)
- Branch protection / rulesets sur `main` (HUMAN ; Free private peut bloquer l'API)
