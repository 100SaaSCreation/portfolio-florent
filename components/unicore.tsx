import { unicorePillars } from "@/lib/profile";
import { SectionHeading } from "@/components/section-heading";

const gates = ["P0", "P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"] as const;

export function Unicore() {
  return (
    <section id="unicore" className="relative scroll-mt-24 overflow-hidden bg-night text-[#e7e9ee]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ember/60 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          tone="dark"
          kicker="UNICORE"
          title="Mon usine logicielle, gouvernée de bout en bout."
          lead="J'ai écrit UNICORE pour fabriquer et livrer des SaaS sans raccourci : chaque intervention passe des portes, chaque commande laisse une trace, et rien n'est déclaré terminé sans preuve."
        />
        <ol aria-label="Portes de gouvernance" className="mt-12 flex items-center overflow-x-auto pb-2">
          {gates.map((gate, index) => (
            <li key={gate} className={`flex items-center ${index < gates.length - 1 ? "flex-1" : ""}`}>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-night-line bg-night-2 font-code text-[12px] text-[#86efac] md:size-12">
                {gate}
              </span>
              {index < gates.length - 1 ? (
                <span aria-hidden className="mx-1 h-px min-w-3 flex-1 bg-gradient-to-r from-[#86efac]/50 to-night-line" />
              ) : null}
            </li>
          ))}
        </ol>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {unicorePillars.map((pillar) => (
            <li
              key={pillar.title}
              className="rounded-2xl border border-night-line bg-night-2/70 p-7 transition-colors hover:border-ember/50"
            >
              <h3 className="font-heading text-xl font-bold tracking-tight text-[#f4f5f7]">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-fog">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
