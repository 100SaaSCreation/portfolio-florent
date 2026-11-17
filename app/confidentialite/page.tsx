import type { Metadata } from "next";
import Link from "next/link";
import { identity } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Confidentialité — Florent Le Bot",
  description: "Politique de confidentialité du portfolio : pas de cookies publics de suivi, contact e-mail, admin authentifié.",
};

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24">
      <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">RGPD</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Responsable du traitement</h2>
          <p className="mt-2">
            {identity.name} —{" "}
            <a className="font-code text-bronze underline underline-offset-4" href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Pages publiques</h2>
          <p className="mt-2">
            La vitrine publique n’utilise ni cookie de suivi, ni balise publicitaire, ni outil d’analytics tiers
            embarqué. Aucun compte visiteur n’est créé.
          </p>
          <p className="mt-3">
            Si vous m’écrivez via mailto, l’échange relève de votre messagerie et de la mienne (Proton Mail).
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Espace d’administration</h2>
          <p className="mt-2">
            L’URL <span className="font-code">/admin</span> est réservée à l’éditeur. Elle utilise un cookie de
            session httpOnly (authentification) et une base Neon pour stocker le contenu éditorial du site
            (textes, projets). Pas de finalité marketing.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Journaux techniques</h2>
          <p className="mt-2">
            L’hébergeur (Vercel) et le fournisseur de base (Neon) peuvent conserver des journaux techniques
            (IP, user-agent, URL) pour sécurité et exploitation, selon leurs politiques. Pas d’usage marketing
            de mon côté.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">Durées & droits</h2>
          <p className="mt-2">
            Session admin : 12 heures maximum. Contenu éditorial : conservé tant que le site est en ligne.
            Conformément au RGPD : accès, rectification, effacement via {identity.email}. Réclamation : CNIL
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
