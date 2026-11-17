import Link from "next/link";
import { defaultPortfolioContent } from "@/lib/content-defaults";
import type { Identity } from "@/lib/content-types";

export function SiteFooter({ identity = defaultPortfolioContent.identity }: { identity?: Identity }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-code text-[12px] text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {identity.name} — {identity.role}
        </p>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/mentions-legales" className="hover:text-ink">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="hover:text-ink">
            Confidentialité
          </Link>
          <Link href="/credits" className="hover:text-ink">
            Crédits
          </Link>
          <a href="#top" className="hover:text-ink">
            Haut de page ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
