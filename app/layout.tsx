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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        {/* next/font auto-héberge les woff2 : pas d'origine tierce à préconnecter.
            dns-prefetch sur l'origine de prod accélère les assets hashés au premier hit froid. */}
        <link rel="dns-prefetch" href={siteUrl} />
      </head>
      <body className="bg-canvas font-text text-ink">{children}</body>
    </html>
  );
}
