import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Source_Serif_4, Syne } from "next/font/google";
import { identity } from "@/lib/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});
const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  // Mono surtout hors LCP (CTA/code) — évite un téléchargement critique supplémentaire.
  preload: false,
});

const title = `${identity.name} — ${identity.role}`;
const description =
  "Portfolio de Florent Le Bot : conception et développement d'applications SaaS (Next.js, React, Prisma), du cadrage à la mise en production, avec preuves à l'appui.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, locale: "fr_FR", type: "website", url: siteUrl },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#e9ecf1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  jobTitle: identity.role,
  email: identity.email,
  url: siteUrl,
  sameAs: ["https://lienmuet2.vercel.app", "https://ti-food.fr", "https://speedgest.vercel.app"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <link rel="dns-prefetch" href={siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-canvas font-text text-ink">{children}</body>
    </html>
  );
}
