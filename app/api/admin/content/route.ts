import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { getPortfolioContentFresh, savePortfolioContent } from "@/lib/content";
import type { PortfolioContent } from "@/lib/content-types";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  const content = await getPortfolioContentFresh();
  return NextResponse.json({ content });
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  try {
    const body = (await request.json()) as { content?: PortfolioContent };
    if (!body.content) {
      return NextResponse.json({ error: "CONTENT_REQUIRED" }, { status: 400 });
    }
    const saved = await savePortfolioContent(body.content, session.email);
    return NextResponse.json({ ok: true, content: saved });
  } catch (error) {
    const message = error instanceof Error ? error.message : "SAVE_FAILED";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
