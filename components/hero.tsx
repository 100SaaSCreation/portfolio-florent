import { facts, identity } from "@/lib/profile";

const proofLines = [
  { label: "Cadrage, architecture, risque", state: "P0 → P3" },
  { label: "Autorisation explicite", state: "P4" },
  { label: "pnpm lint", state: "PASS" },
  { label: "pnpm test", state: "PASS" },
  { label: "pnpm build", state: "PASS" },
  { label: "Audit + restitution", state: "P6 → P8" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[38rem] rounded-full bg-bronze-soft blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 md:pt-24 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28">
        <div className="animate-rise lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-code text-[11px] tracking-wider text-muted uppercase">
            <span className="size-1.5 rounded-full bg-bronze" aria-hidden />
            {identity.role}
          </p>
          <h1 className="mt-7 font-heading text-[clamp(2.6rem,6.4vw,5.2rem)] leading-[0.98] font-bold tracking-[-0.04em]">
            Des SaaS conçus pour
            <span className="block text-bronze">tenir en production.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{identity.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projets"
              className="rounded-full bg-bronze px-6 py-3.5 font-code text-[13px] tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(154,52,18,0.7)] transition hover:-translate-y-0.5 hover:bg-ink"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 bg-surface/60 px-6 py-3.5 font-code text-[13px] tracking-wide transition hover:-translate-y-0.5 hover:border-ink"
            >
              Me contacter
            </a>
          </div>
        </div>

        <figure
          className="animate-rise lg:col-span-5 [animation-delay:150ms]"
          aria-label="Chaîne de vérification appliquée à chaque livraison"
        >
          <div className="overflow-hidden rounded-2xl border border-night-line bg-night text-[#e7e9ee] shadow-[0_30px_80px_-30px_rgba(14,17,23,0.65)]">
            <div className="flex items-center gap-2 border-b border-night-line px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
              <span className="ml-3 font-code text-[11px] text-fog">unicore — chaîne de livraison</span>
            </div>
            <ul className="space-y-0.5 px-4 py-4 font-code text-[12.5px]">
              {proofLines.map((line) => (
                <li key={line.label} className="flex items-center justify-between gap-4 rounded-md px-2 py-1.5">
                  <span className="flex items-center gap-2.5">
                    <span className="text-ember" aria-hidden>
                      ›
                    </span>
                    {line.label}
                  </span>
                  <span className="shrink-0 rounded bg-night-2 px-2 py-0.5 text-[11px] whitespace-nowrap text-[#86efac]">
                    {line.state}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2.5 border-t border-night-line px-6 py-3.5 font-code text-[12px] text-fog">
              <span className="size-2 animate-pulse-dot rounded-full bg-live" aria-hidden />
              Livré seulement quand tout est vert.
            </div>
          </div>
          <figcaption className="mt-3 text-center font-code text-[11px] text-muted">
            La chaîne que chaque livraison doit franchir.
          </figcaption>
        </figure>
      </div>

      <div className="relative border-y border-line bg-surface/70">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`py-7 pr-4 ${index > 0 ? "md:border-l md:border-line md:pl-6" : ""} ${index % 2 === 1 ? "border-l border-line pl-5 md:pl-6" : ""}`}
            >
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="block font-heading text-3xl font-bold tracking-tight md:text-4xl">{fact.value}</span>
                <span className="mt-1.5 block text-sm leading-snug text-muted">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
