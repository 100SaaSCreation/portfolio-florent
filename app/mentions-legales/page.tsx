import type { Metadata } from "next";
import Link from "next/link";
import { identity } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Mentions légales — Florent Le Bot",
  description: "Éditeur, hébergeur et responsabilités du portfolio de Florent Le Bot.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24">
      <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">Légal</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight">Mentions légales</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Éditeur / responsable de publication</h2>
          <p className="mt-2">
            {identity.name}
            <br />
            Personne physique — site personnel de présentation professionnelle
            <br />
            {identity.role}
            <br />
            Contact :{" "}
            <a className="font-code text-bronze underline underline-offset-4" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
          </p>
          <p className="mt-3 text-sm">
            Ce site n’exerce pas d’activité e-commerce, n’ouvre pas de compte utilisateur public et n’est pas
            immatriculé au RCS pour cette vitrine. Pas de SIRET affiché : publication à titre personnel.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Hébergeur</h2>
          <p className="mt-2">
            Vercel Inc.
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            <br />
            <a
              className="font-code text-bronze underline underline-offset-4"
              href="https://vercel.com"
              rel="noreferrer"
              target="_blank"
            >
              vercel.com
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Données personnelles</h2>
          <p className="mt-2">
            Politique détaillée :{" "}
            <Link href="/confidentialite" className="font-code text-bronze underline underline-offset-4">
              /confidentialite
            </Link>
            . Aucun cookie de suivi, aucun traceur publicitaire sur cette vitrine.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Propriété intellectuelle</h2>
          <p className="mt-2">
            Les textes, la structure et le code de ce portfolio sont la propriété de {identity.name}, sauf
            mention contraire (typographies OFL, dépendances open source).
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Responsabilité</h2>
          <p className="mt-2">
            Les liens vers des projets tiers (ex. LienMuet2, Ti Food, SpeedGest) renvoient vers des services
            distincts, soumis à leurs propres conditions. Ce portfolio n’héberge ni données clients ni paiements.
          </p>
        </section>
      </div>
      <Link href="/" className="mt-12 inline-block font-code text-[13px] text-bronze underline underline-offset-4">
        ← Retour au portfolio
      </Link>
    </main>
  );
}
