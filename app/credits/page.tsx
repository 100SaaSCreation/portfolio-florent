import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Crédits — Florent Le Bot" };

export default function CreditsPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24">
      <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">Crédits</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight">Crédits & mentions</h1>
      <ul className="mt-8 space-y-4 leading-relaxed text-muted">
        <li>Typographies Syne, Source Serif 4 et JetBrains Mono, servies localement via next/font (licence OFL).</li>
        <li>Aucune image distante, aucun traceur, aucun cookie.</li>
        <li>Site conçu et développé par Florent Le Bot, fabriqué et vérifié avec UNICORE.</li>
      </ul>
      <Link href="/" className="mt-10 inline-block font-code text-[13px] text-bronze underline underline-offset-4">
        ← Retour au portfolio
      </Link>
    </main>
  );
}
