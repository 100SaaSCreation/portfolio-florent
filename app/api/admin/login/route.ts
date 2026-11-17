import { NextResponse } from "next/server";
import {
  createAdminSession,
  ensureAdminUser,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
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
    await createAdminSession(user.id, user.email);
    return NextResponse.json({ ok: true, email: user.email });
  } catch (error) {
    const message = error instanceof Error ? error.message : "LOGIN_FAILED";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
