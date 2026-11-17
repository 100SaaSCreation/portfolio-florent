import { projects, type Project } from "@/lib/profile";
import { SectionHeading } from "@/components/section-heading";

function StatusBadge({ project, tone }: { project: Project; tone: "light" | "dark" }) {
  if (project.status === "live") {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-code text-[11px] tracking-wide ${
          tone === "dark" ? "bg-[#14532d]/60 text-[#86efac]" : "bg-[#dcfce7] text-live"
        }`}
      >
        <span className="size-1.5 animate-pulse-dot rounded-full bg-[#22c55e]" aria-hidden />
        En production
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 font-code text-[11px] tracking-wide text-muted">
      Démo sur demande
    </span>
  );
}

function StackList({ items, tone }: { items: readonly string[]; tone: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-md px-2.5 py-1 font-code text-[11px] ${
            tone === "dark" ? "bg-night-2 text-fog ring-1 ring-night-line" : "bg-canvas text-muted ring-1 ring-line"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`p-${project.slug}`}
      className="relative overflow-hidden rounded-3xl bg-night p-8 text-[#e7e9ee] md:p-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-bronze/30 blur-3xl"
      />
      <div className="relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-code text-[11px] tracking-[0.2em] text-ember uppercase">Projet phare</span>
            <StatusBadge project={project} tone="dark" />
          </div>
          <h3 id={`p-${project.slug}`} className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 font-heading text-xl text-ember">{project.tagline}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fog">{project.description}</p>
          <div className="mt-8">
            <StackList items={project.stack} tone="dark" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 lg:col-span-5">
          <ul className="space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-night-line bg-night-2/80 px-4 py-3.5 leading-snug"
              >
                <span className="mt-0.5 text-ember" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#e7e9ee] px-6 py-3.5 font-code text-[13px] text-night transition hover:bg-ember"
            >
              Ouvrir {project.name}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      aria-labelledby={`p-${project.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-[0_24px_60px_-30px_rgba(18,21,28,0.35)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-code text-[12px] text-bronze">{String(index).padStart(2, "0")}</span>
        <StatusBadge project={project} tone="light" />
      </div>
      <h3 id={`p-${project.slug}`} className="mt-6 font-heading text-2xl font-bold tracking-tight">
        {project.name}
      </h3>
      <p className="mt-1.5 font-heading text-[15px] text-bronze">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[15px]">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5 leading-snug">
            <span className="text-bronze" aria-hidden>
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <StackList items={project.stack} tone="light" />
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, ...others] = projects;
  return (
    <section id="projets" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          kicker="Projets"
          title="Des applications réelles, pas des maquettes."
          lead="Quatre SaaS conçus et développés de bout en bout : authentification, paiement, internationalisation, données. Les dépôts sont privés ; une démonstration est possible sur demande."
        />
        <div className="mt-14 space-y-6">
          <FeaturedProject project={featured} />
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
