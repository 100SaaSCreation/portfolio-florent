type SectionHeadingProps = {
  kicker: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ kicker, title, lead, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className="max-w-3xl">
      <p
        className={`flex items-center gap-3 font-code text-[11px] tracking-[0.2em] uppercase ${dark ? "text-ember" : "text-bronze"}`}
      >
        <span className={`h-px w-8 ${dark ? "bg-ember" : "bg-bronze"}`} aria-hidden />
        {kicker}
      </p>
      <h2 className="mt-5 font-heading text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em]">
        {title}
      </h2>
      {lead ? (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-fog" : "text-muted"}`}>{lead}</p>
      ) : null}
    </div>
  );
}
