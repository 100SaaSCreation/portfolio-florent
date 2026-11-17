import { NextResponse } from "next/server";
import {
  createAdminSession,
  ensureAdminUser,
  verifyAdminCredentials,
} from "@/lib/admin-auth";
import { assertLoginAllowed, clearLoginFailures } from "@/lib/login-rate-limit";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const gate = assertLoginAllowed(ip);
    if (!gate.ok) {
      return NextResponse.json(
        { error: "RATE_LIMITED", retryAfterSec: gate.retryAfterSec },
        { status: 429, headers: { "Retry-After": String(gate.retryAfterSec) } },
      );
    }

    await ensureAdminUser();
    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email?.trim() ?? "";
    const password = body.password ?? "";
    if (!email || !password) {
      return NextResponse.json({ error: "EMAIL_PASSWORD_REQUIRED" }, { status: 400 });
    }
    const user = await verifyAdminCredentials(email, password);
    if (!user) {
      return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
    }
    clearLoginFailures(ip);
    await createAdminSession(user.id, user.email);
    return NextResponse.json({ ok: true, email: user.email });
  } catch (error) {
    const message = error instanceof Error ? error.message : "LOGIN_FAILED";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
