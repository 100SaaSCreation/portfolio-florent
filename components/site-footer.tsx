import Link from "next/link";
import { identity } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-code text-[12px] text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {identity.name} — {identity.role}
        </p>
        <nav aria-label="Pied de page" className="flex gap-6">
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
