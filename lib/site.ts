/** URL canonique publique (mise à jour après le premier déploiement Vercel si le slug change). */
/** Domaine canonique actuel (alias *.vercel.app du projet). `portfolio-florent.vercel.app` est déjà pris ailleurs. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-florent-silk.vercel.app"
).replace(/\/$/, "");
