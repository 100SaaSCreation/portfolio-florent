import { identity } from "@/lib/profile";
import { CopyEmailButton } from "@/components/copy-email-button";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-7 py-14 md:px-14 md:py-20">
          <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-50" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-bronze-soft blur-3xl"
          />
          <div className="relative max-w-3xl">
            <p className="flex items-center gap-3 font-code text-[11px] tracking-[0.2em] text-bronze uppercase">
              <span className="h-px w-8 bg-bronze" aria-hidden />
              Contact
            </p>
            <h2 className="mt-5 font-heading text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.035em]">
              Un SaaS à lancer, ou à remettre d&apos;aplomb&nbsp;?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Décrivez le contexte, les utilisateurs et le délai. Je réponds sur la conception, le développement et la
              vérification — avec un avis franc sur ce qui est faisable.
            </p>
            <a
              href={`mailto:${identity.email}?subject=Projet%20SaaS`}
              className="mt-10 inline-block font-code text-[clamp(1.15rem,3vw,2rem)] font-semibold tracking-tight break-all underline decoration-bronze decoration-2 underline-offset-[6px] transition-colors hover:text-bronze"
            >
              {identity.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${identity.email}?subject=Projet%20SaaS`}
                className="rounded-full bg-ink px-6 py-3.5 font-code text-[13px] tracking-wide text-canvas transition hover:bg-bronze"
              >
                Écrire un email
              </a>
              <CopyEmailButton email={identity.email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
