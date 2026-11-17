import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Unicore } from "@/components/unicore";
import { getPortfolioContent } from "@/lib/content";

export const revalidate = 60;

export default async function Home() {
  const content = await getPortfolioContent();
  return (
    <>
      <a
        href="#contenu"
        className="absolute top-3 left-3 z-50 -translate-y-24 rounded-md bg-ink px-3 py-2 font-code text-xs text-canvas focus:translate-y-0"
      >
        Aller au contenu
      </a>
      <SiteHeader identity={content.identity} navigation={content.navigation} />
      <main id="contenu">
        <Hero content={content} />
        <Projects content={content} />
        <Method content={content} />
        <Unicore content={content} />
        <Contact content={content} />
      </main>
      <SiteFooter identity={content.identity} />
    </>
  );
}
