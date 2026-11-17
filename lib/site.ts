/** URL canonique publique (mise à jour après le premier déploiement Vercel si le slug change). */
/** Domaine canonique du projet Vercel `portfolio-florent-le-bot` (`portfolio-florent` était déjà pris). */
/** trim() obligatoire : un CR/LF dans l'env Vercel casse robots.txt / sitemap (PSI SEO < 100). */
function normalizeSiteUrl(raw: string): string {
  const cleaned = raw.trim().replace(/[\r\n\t]/g, "").replace(/\/$/, "");
  let parsed: URL;
  try {
    parsed = new URL(cleaned);
  } catch {
    throw new Error(`INVALID_SITE_URL:${cleaned.slice(0, 80)}`);
  }
  if (parsed.protocol !== "https:") {
    throw new Error("SITE_URL_MUST_BE_HTTPS");
  }
  return `${parsed.protocol}//${parsed.host}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-florent-le-bot.vercel.app",
);
