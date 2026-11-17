# COVERAGE — portfolio-florent

Mesure : `pnpm test:coverage` (Vitest 3.2.7, v8) — 2026-11-17.

| Périmètre | Lignes | Branches | Fonctions |
|---|---|---|---|
| Global | 91,02 % | 91,8 % | 90,47 % |
| components/ | 99,55 % | 94,44 % | 100 % |
| lib/profile.ts | 100 % | 100 % | 100 % |

Non couverts (configuration, sans logique) : `app/layout.tsx`, `next.config.ts`, `postcss.config.mjs`, `lib/design-preset.ts` (seed design, inutilisé à l'exécution).

Tests : `tests/home.test.tsx` (9), `tests/copy-email-button.test.tsx` (2).
