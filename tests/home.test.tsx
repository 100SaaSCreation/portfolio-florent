import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import Home from "@/app/page";
import NotFound from "@/app/not-found";
import CreditsPage from "@/app/credits/page";
import { identity, navigation, projects } from "@/lib/profile";

afterEach(cleanup);

async function renderHome() {
  const ui = await Home();
  return render(ui);
}

describe("page d'accueil", () => {
  it("affiche le titre principal et l'identité", async () => {
    await renderHome();
    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain("tenir en production");
    expect(screen.getAllByText(identity.name).length).toBeGreaterThan(0);
  });

  it("présente chaque projet avec son titre et sa stack", async () => {
    await renderHome();
    for (const project of projects) {
      const article = screen.getByRole("article", { name: project.name });
      expect(within(article).getByText(project.tagline)).toBeTruthy();
      expect(within(article).getByRole("list", { name: "Technologies" }).children).toHaveLength(project.stack.length);
    }
  });

  it("chaque ancre interne pointe vers une section existante", async () => {
    const { container } = await renderHome();
    const anchors = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    expect(anchors.length).toBeGreaterThan(0);
    for (const anchor of anchors) {
      const id = anchor.getAttribute("href")!.slice(1);
      expect(id, "ancre vide").not.toBe("");
      expect(container.querySelector(`#${id}`), `section #${id} absente`).not.toBeNull();
    }
    for (const item of navigation) {
      expect(container.querySelector(item.href)).not.toBeNull();
    }
  });

  it("le seul lien externe est le projet en production, ouvert de façon sûre", async () => {
    const { container } = await renderHome();
    const external = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]'));
    const live = projects.filter((p) => p.status === "live");
    expect(external.map((a) => a.href.replace(/\/$/, ""))).toEqual(live.map((p) => p.url));
    for (const anchor of external) {
      expect(anchor.getAttribute("target")).toBe("_blank");
      expect(anchor.getAttribute("rel")).toContain("noopener");
    }
  });

  it("propose un contact email fonctionnel", async () => {
    await renderHome();
    const mailLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href")?.startsWith(`mailto:${identity.email}`));
    expect(mailLinks.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("button", { name: "Copier l'adresse" })).toBeTruthy();
  });
});

describe("données du profil", () => {
  it("un projet live a une URL https, un projet privé n'en a pas", () => {
    for (const project of projects) {
      if (project.status === "live") expect(project.url).toMatch(/^https:\/\//);
      else expect(project.url).toBeUndefined();
    }
  });

  it("les slugs sont uniques", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("pages secondaires", () => {
  it("404 renvoie vers l'accueil", () => {
    render(<NotFound />);
    expect(screen.getByRole("link", { name: "Retour à l'accueil" }).getAttribute("href")).toBe("/");
  });

  it("crédits renvoie vers le portfolio", () => {
    render(<CreditsPage />);
    expect(screen.getByRole("link", { name: /Retour au portfolio/ }).getAttribute("href")).toBe("/");
  });

  it("le pied de page expose mentions légales et confidentialité", async () => {
    await renderHome();
    expect(screen.getByRole("link", { name: "Mentions légales" }).getAttribute("href")).toBe("/mentions-legales");
    expect(screen.getByRole("link", { name: "Confidentialité" }).getAttribute("href")).toBe("/confidentialite");
  });
});

describe("pages légales", () => {
  it("mentions légales citent l'éditeur et Vercel", async () => {
    const { default: Mentions } = await import("@/app/mentions-legales/page");
    render(<Mentions />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/Mentions légales/);
    expect(screen.getByText(/Vercel Inc/)).toBeTruthy();
  });

  it("confidentialité affirme l'absence de cookies et de traceurs", async () => {
    const { default: Confidentialite } = await import("@/app/confidentialite/page");
    render(<Confidentialite />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/confidentialité/i);
    expect(screen.getByText(/cookie de suivi/i)).toBeTruthy();
  });
});
