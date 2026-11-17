/** URL canonique publique (mise à jour après le premier déploiement Vercel si le slug change). */
/** Domaine canonique du projet Vercel `portfolio-florent-le-bot` (`portfolio-florent` était déjà pris). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-florent-le-bot.vercel.app"
).replace(/\/$/, "");
