import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { defaultPortfolioContent } from "../lib/content-defaults";

function loadEnv(name: string) {
  const path = resolve(process.cwd(), name);
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#") || !t.includes("=")) continue;
    const i = t.indexOf("=");
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!(k in process.env)) process.env[k] = v;
  }
}

async function main() {
  loadEnv(".env");
  loadEnv(".env.local");
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL manquant");
  const prisma = new PrismaClient({ adapter: new PrismaPg(url) });
  await prisma.siteContent.upsert({
    where: { id: "main" },
    create: { id: "main", payload: defaultPortfolioContent, updatedBy: "resync" },
    update: { payload: defaultPortfolioContent, updatedBy: "resync" },
  });
  await prisma.$disconnect();
  console.log("content resynced live=", defaultPortfolioContent.projects.filter((p) => p.status === "live").length);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
