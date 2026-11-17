# AGENT_CONTEXT (UNICORE 1.2.0)

Généré : `2026-11-17T15:38:19.361605+00:00`
Racine : `C:\dev\moteur\projets\portfolio-florent`

## Règles agent
- Avant toute écriture : context-pack puis context-prove --session <id>.
- Lire must_read ; ne jamais inventer intervention.gates.
- Continuer la session (session-append) ; ne pas démarrer une mémoire parallèle.
- Id session stable ⊂ intervention.objective sinon INTERVENTION_SESSION_DRIFT (M19).
- Respecter out_of_scope et le contrat SaaS PRO (STANDARD V3.1).
- Sans AGENT_PROVE frais lié au pack : UNICORE refuse authorize/build/scaffold/…
- Dual-log + compliance-preflight/score (AGENT_COMPLIANCE_CONTRACT) ; SKIP ≠ PASS.
- Score conformité < 70 : interdiction du récit « UNICORE a prouvé la fiabilité ».

## Must-read
- (obligatoire) `C:\dev\moteur\UNICORE\ASGS_Adaptive_Systemic_Governance_System.txt` — gouvernance ASGS
- (obligatoire) `C:\dev\moteur\UNICORE\GOUVERNANCE_SOI.md` — gouvernance du moteur sur lui-même
- (obligatoire) `C:\dev\moteur\UNICORE\OUT_OF_FACTORY.md` — limites usine
- (obligatoire) `C:\dev\moteur\projets\portfolio-florent\.unicore\AGENT_CONTEXT.json` — pack contexte courant
- (obligatoire) `C:\dev\moteur\projets\portfolio-florent\.unicore\AGENT_PROVE.json` — preuve de lecture (context-prove)
- (si présent) `C:\dev\moteur\projets\portfolio-florent\.unicore\AGENT_SESSION.jsonl` — journal de session agent
- (si présent) `C:\dev\moteur\projets\portfolio-florent\.unicore\intervention.json` — dossier d'intervention
- (si présent) `C:\dev\moteur\projets\portfolio-florent\.unicore\restitution.json` — dernière restitution
- (si présent) `C:\dev\moteur\projets\portfolio-florent\STATE.md` — mémoire projet STATE.md
- (si présent) `C:\dev\moteur\projets\portfolio-florent\.unicore\PRODUCT_STATE.json` — mémoire produit STATE_CONTEXT
- (obligatoire) `C:\dev\moteur\UNICORE\STANDARD_QUALITE_SAAS_PRO.md` — référentiel SaaS professionnel (définition officielle)
- (si présent) `C:\dev\moteur\UNICORE\STACKS\SAAS_CONTRACT.md` — contrat SaaS usine PRO
- (si présent) `C:\dev\moteur\UNICORE\DESIGN_SOFT_CONTRACT.md` — contrat design soft
- (si présent) `C:\dev\moteur\UNICORE\STATE_CONTEXT_CONTRACT.md` — contrat mémoire produit
- (obligatoire) `C:\dev\moteur\UNICORE\AGENT_COMPLIANCE_CONTRACT.md` — contrat conformité agent ↔ UNICORE

## Intervention
- Statut : `COMPLETE` / empreinte `STANDARD`
- Objectif : unicore-portfolio: portfolio PRO florent-le-bot (site_vitrine)
- Périmètre : projets/portfolio-florent site vitrine Next 16
- Hors scope : auth; billing; base de donnees; secrets chat; vercel deploy CLI; mutation cloud sans WRITE_SHARED
- Risque : MODERATE mode STANDARD B=33.0
- Portes : P0=CLOSED, P1=CLOSED, P2=CLOSED, P3=CLOSED, P4=CLOSED, P5=CLOSED, P6=CLOSED, P7=OPEN, P8=OPEN

## Session
- tip `ddff0f770c58427b7409ec37f08a581af948c4a822c4cffafe3c3a94a94b5e6e` session `unicore-portfolio` @ 2026-11-17T15:38:19.115798+00:00

## Limites
- UNICORE ne contrôle pas la fenêtre de tokens d'un LLM tiers.
- Il refuse l'action sans prove+session — c'est la garantie actionnable.
- Pas de RAG / vector store / mémoire vendor.
