import { defaultPortfolioContent } from "@/lib/content-defaults";
import type { Identity, NavItem } from "@/lib/content-types";

export function SiteHeader({
  identity = defaultPortfolioContent.identity,
  navigation = defaultPortfolioContent.navigation,
}: {
  identity?: Identity;
  navigation?: NavItem[];
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg bg-ink font-code text-[11px] font-semibold tracking-wider text-ember transition-transform group-hover:-rotate-6"
          >
            {identity.initials}
          </span>
          <span className="font-heading text-[1.05rem] font-bold tracking-tight whitespace-nowrap">{identity.name}</span>
          <span className="sr-only">, retour en haut</span>
        </a>
        <nav aria-label="Sections principales" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-code text-[12px] tracking-wide text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 font-code text-[12px] tracking-wide text-canvas transition hover:bg-bronze"
        >
          Discutons
        </a>
      </div>
      <nav
        aria-label="Sections (mobile)"
        className="flex gap-5 overflow-x-auto border-t border-line/60 px-5 py-2.5 md:hidden"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 font-code text-[12px] text-muted hover:text-ink">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
