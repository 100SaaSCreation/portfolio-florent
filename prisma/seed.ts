import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { hash } from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { defaultPortfolioContent } from "../lib/content-defaults";

function loadEnvFile(name: string) {
  const path = resolve(process.cwd(), name);
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

async function main() {
  loadEnvFile(".env");
  loadEnvFile(".env.local");
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL manquant");
  const prisma = new PrismaClient({ adapter: new PrismaPg(url) });

  await prisma.siteContent.upsert({
    where: { id: "main" },
    create: { id: "main", payload: defaultPortfolioContent, updatedBy: "seed" },
    update: {},
  });

  const email = (process.env.ADMIN_EMAIL ?? "100SaaSCreation@proton.me").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (password && password.length >= 12) {
    const passwordHash = await hash(password, 12);
    await prisma.adminUser.upsert({
      where: { email },
      create: {
        email,
        passwordHash,
        name: process.env.ADMIN_NAME?.trim() || "Florent Le Bot",
      },
      update: { passwordHash },
    });
  }

  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
