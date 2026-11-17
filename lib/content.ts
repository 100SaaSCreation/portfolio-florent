import { revalidatePath, revalidateTag } from "next/cache";
import { defaultPortfolioContent } from "@/lib/content-defaults";
import type { PortfolioContent } from "@/lib/content-types";
import { getPrisma, requirePrisma } from "@/lib/prisma";

function isPortfolioContent(value: unknown): value is PortfolioContent {
  if (!value || typeof value !== "object") return false;
  const v = value as PortfolioContent;
  return Boolean(v.identity?.name && Array.isArray(v.projects) && Array.isArray(v.navigation));
}

async function readFromDb(): Promise<PortfolioContent | null> {
  const prisma = getPrisma();
  if (!prisma) return null;
  try {
    const row = await prisma.siteContent.findUnique({ where: { id: "main" } });
    if (!row) return null;
    return isPortfolioContent(row.payload) ? row.payload : null;
  } catch {
    return null;
  }
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  return (await readFromDb()) ?? defaultPortfolioContent;
}

export async function getPortfolioContentFresh(): Promise<PortfolioContent> {
  return (await readFromDb()) ?? defaultPortfolioContent;
}

export async function savePortfolioContent(
  payload: PortfolioContent,
  updatedBy?: string,
): Promise<PortfolioContent> {
  if (!isPortfolioContent(payload)) {
    throw new Error("PAYLOAD_INVALID");
  }
  const prisma = requirePrisma();
  await prisma.siteContent.upsert({
    where: { id: "main" },
    create: { id: "main", payload, updatedBy: updatedBy ?? null },
    update: { payload, updatedBy: updatedBy ?? null },
  });
  revalidateTag("portfolio-content", "max");
  revalidatePath("/");
  revalidatePath("/admin");
  return payload;
}
