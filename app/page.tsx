import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Unicore } from "@/components/unicore";

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="absolute top-3 left-3 z-50 -translate-y-24 rounded-md bg-ink px-3 py-2 font-code text-xs text-canvas focus:translate-y-0"
      >
        Aller au contenu
      </a>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <Projects />
        <Method />
        <Unicore />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
