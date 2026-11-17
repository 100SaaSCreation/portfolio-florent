import { redirect } from "next/navigation";
import { AdminEditor } from "@/components/admin-editor";
import { getAdminSession } from "@/lib/admin-auth";
import { getPortfolioContentFresh } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  const content = await getPortfolioContentFresh();
  return <AdminEditor initial={content} email={session.email} />;
}
