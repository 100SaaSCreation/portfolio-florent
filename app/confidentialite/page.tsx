import type { Metadata } from "next";
import Link from "next/link";
import { identity } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Confidentialité — Florent Le Bot",
  description: "Politique de confidentialité du portfolio : pas de cookies, pas de traceurs, contact e-mail uniquement.",
};

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24">
      <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">RGPD</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Responsable</h2>
          <p className="mt-2">
            {identity.name} —{" "}
            <a className="font-code text-bronze underline underline-offset-4" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Données collectées</h2>
          <p className="mt-2">
            Ce site est une vitrine statique. Il ne crée pas de compte, ne stocke pas de formulaire serveur, et
            n’utilise ni cookie de suivi, ni balise publicitaire, ni outil d’analytics tiers embarqué.
          </p>
          <p className="mt-3">
            Si vous m’écrivez via le lien mailto, l’échange relève de votre messagerie et de la mienne
            (Proton Mail). Aucune base de données applicative n’est associée à ce portfolio.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Journaux techniques</h2>
          <p className="mt-2">
            L’hébergeur (Vercel) peut conserver des journaux techniques d’accès (adresse IP, user-agent, URL)
            pour sécurité et exploitation, selon sa propre politique. Ces journaux ne sont pas exploités ici
            à des fins marketing.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous pouvez demander l’accès, la rectification ou l’effacement des données
            vous concernant en écrivant à {identity.email}. Réclamation possible auprès de la CNIL
            (cnil.fr).
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Mise à jour</h2>
          <p className="mt-2">Dernière mise à jour : 17 novembre 2026.</p>
        </section>
      </div>
      <Link href="/" className="mt-12 inline-block font-code text-[13px] text-bronze underline underline-offset-4">
        ← Retour au portfolio
      </Link>
    </main>
  );
}
