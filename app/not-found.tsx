import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center px-5">
      <div className="max-w-md text-center">
        <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">Erreur 404</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight">Cette page n&apos;existe pas.</h1>
        <p className="mt-4 leading-relaxed text-muted">Le lien est peut-être ancien. Le portfolio, lui, est toujours là.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-ink px-6 py-3.5 font-code text-[13px] text-canvas transition hover:bg-bronze"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
