import { compare, hash } from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { requirePrisma } from "@/lib/prisma";

const COOKIE = "portfolio_admin_session";
const MAX_AGE = 60 * 60 * 12; // 12 h

function secretKey() {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET manquant ou trop court (≥ 32 caractères)");
  }
  return new TextEncoder().encode(secret);
}

export async function ensureAdminUser() {
  const email = (process.env.ADMIN_EMAIL ?? "100SaaSCreation@proton.me").trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!password || password.length < 12) {
    throw new Error("ADMIN_PASSWORD manquant ou trop court (≥ 12 caractères)");
  }
  const prisma = requirePrisma();
  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) return existing;
  const passwordHash = await hash(password, 12);
  return prisma.adminUser.create({
    data: {
      email,
      passwordHash,
      name: process.env.ADMIN_NAME?.trim() || "Florent Le Bot",
    },
  });
}

export async function verifyAdminCredentials(email: string, password: string) {
  const prisma = requirePrisma();
  const user = await prisma.adminUser.findUnique({
    where: { email: email.trim().toLowerCase() },
  });
  if (!user) return null;
  const ok = await compare(password, user.passwordHash);
  return ok ? user : null;
}

export async function createAdminSession(userId: string, email: string) {
  const token = await new SignJWT({ sub: userId, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secretKey());
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function getAdminSession(): Promise<{ userId: string; email: string } | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    const userId = typeof payload.sub === "string" ? payload.sub : null;
    const email = typeof payload.email === "string" ? payload.email : null;
    if (!userId || !email) return null;
    return { userId, email };
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession();
  if (!session) throw new Error("UNAUTHORIZED");
  return session;
}
