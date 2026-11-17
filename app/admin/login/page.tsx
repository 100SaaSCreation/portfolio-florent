"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("100SaaSCreation@proton.me");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error === "INVALID_CREDENTIALS" ? "Identifiants incorrects." : data.error ?? "Erreur");
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Impossible de joindre le serveur.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-16">
      <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">Admin</p>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight">Connexion portfolio</h1>
      <p className="mt-3 text-sm text-muted">Réservé à l&apos;édition du contenu public.</p>
      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        <label className="block space-y-2">
          <span className="font-code text-[12px] text-muted">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-line bg-surface px-4 py-3 font-code text-sm outline-none focus:border-bronze"
            autoComplete="username"
          />
        </label>
        <label className="block space-y-2">
          <span className="font-code text-[12px] text-muted">Mot de passe</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-line bg-surface px-4 py-3 font-code text-sm outline-none focus:border-bronze"
            autoComplete="current-password"
          />
        </label>
        {error ? <p className="text-sm text-bronze">{error}</p> : null}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-ink px-5 py-3 font-code text-sm text-canvas disabled:opacity-60"
        >
          {pending ? "Connexion…" : "Entrer"}
        </button>
      </form>
    </main>
  );
}
