# FABRICATION_CONTEXT (MICRO-1.2)

Mission : `fab_28fe5a14a6a7`
État : `QUALITY_LOOP` / status `BLOCKED`
Tâche : `FAB_CORE_001`
Next : Parcours core (pages publiques)
Plan hash : `20ca581ff2686f6d971430e1e01beba49b233bab5b2455c911d14ed276ce88d5`
Checkpoint : `cp_20261117T101802Z_7a007f`
Delivery : `BLOCKED`

## Human gates
- Remplir `.env` depuis `.env.example` (secrets locaux).
- SMTP_* optionnel (soft skip sinon).
- SENTRY_DSN optionnel (no-op sinon).
- PRODUCTION_CERTIFY ASGS : secret approbateur + audit — jamais auto.

## Host capabilities
- `filesystem` : AVAILABLE
- `terminal` : AVAILABLE
- `tests` : AVAILABLE
- `network` : AVAILABLE
- `persistent_session` : LIMITED
- `multi_cycle_loop` : LIMITED
- `background` : UNKNOWN
