import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export function getPrisma(): PrismaClient | null {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) return null;
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ adapter: new PrismaPg(connectionString) });
  }
  return globalForPrisma.prisma;
}

/** Accès strict (admin / seed). */
export function requirePrisma(): PrismaClient {
  const client = getPrisma();
  if (!client) throw new Error("DATABASE_URL manquant");
  return client;
}
