/** URL canonique publique (mise à jour après le premier déploiement Vercel si le slug change). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-florent.vercel.app").replace(
  /\/$/,
  "",
);
