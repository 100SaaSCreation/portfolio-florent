import { describe, expect, it, vi } from "vitest";
import { isValidElement, type ReactElement } from "react";

vi.mock("next/font/google", () => {
  const font = (variable: string) => () => ({ variable, className: variable, style: {} });
  return {
    Syne: font("font-display"),
    Source_Serif_4: font("font-body"),
    JetBrains_Mono: font("font-mono"),
  };
});

const { default: RootLayout, metadata, viewport } = await import("@/app/layout");

describe("layout racine", () => {
  it("déclare le français et charge les trois polices", () => {
    const html = RootLayout({ children: <p>contenu</p> }) as ReactElement<{ lang: string; className: string }>;
    expect(isValidElement(html)).toBe(true);
    expect(html.props.lang).toBe("fr");
    expect(html.props.className.split(" ")).toEqual(["font-display", "font-body", "font-mono"]);
  });

  it("expose des métadonnées SEO et Open Graph en français", () => {
    expect(String(metadata.title)).toContain("Florent Le Bot");
    expect(metadata.description).toMatch(/SaaS/);
    expect(metadata.openGraph).toMatchObject({ locale: "fr_FR", type: "website" });
    expect(viewport.themeColor).toBe("#e9ecf1");
  });
});
