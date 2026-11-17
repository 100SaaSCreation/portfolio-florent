import { SectionHeading } from "@/components/section-heading";
import { defaultPortfolioContent } from "@/lib/content-defaults";
import type { PortfolioContent } from "@/lib/content-types";

export function Method({ content = defaultPortfolioContent }: { content?: PortfolioContent }) {
  return (
    <section id="methode" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          kicker={content.methodIntro.eyebrow}
          title={content.methodIntro.title}
          lead={content.methodIntro.lead}
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {content.method.map((item) => (
            <li key={item.step} className="bg-surface p-7 transition-colors hover:bg-canvas">
              <span className="font-code text-[12px] text-bronze">{item.step}</span>
              <h3 className="mt-8 font-heading text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-heading text-2xl font-bold tracking-tight">Boîte à outils</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Les outils que j&apos;utilise en production, sur les versions réellement installées.
            </p>
          </div>
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {content.skills.map((group) => (
              <div key={group.group}>
                <dt className="font-code text-[11px] tracking-[0.2em] text-muted uppercase">{group.group}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-canvas px-3 py-1.5 text-[14px] leading-none"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
