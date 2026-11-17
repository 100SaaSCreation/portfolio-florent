"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { PortfolioContent, Project } from "@/lib/content-types";

type Props = {
  initial: PortfolioContent;
  email: string;
};

export function AdminEditor({ initial, email }: Props) {
  const router = useRouter();
  const [content, setContent] = useState<PortfolioContent>(initial);
  const [raw, setRaw] = useState(() => JSON.stringify(initial, null, 2));
  const [mode, setMode] = useState<"form" | "json">("form");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const projectCount = useMemo(() => content.projects.length, [content.projects.length]);

  function updateIdentity<K extends keyof PortfolioContent["identity"]>(key: K, value: string) {
    setContent((prev) => ({ ...prev, identity: { ...prev.identity, [key]: value } }));
  }

  function updateProject(index: number, patch: Partial<Project>) {
    setContent((prev) => {
      const projects = prev.projects.map((p, i) => (i === index ? { ...p, ...patch } : p));
      return { ...prev, projects };
    });
  }

  async function save(payload: PortfolioContent) {
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: payload }),
      });
      const data = (await res.json()) as { error?: string; content?: PortfolioContent };
      if (!res.ok) {
        setError(data.error ?? "Échec de sauvegarde");
        return;
      }
      if (data.content) {
        setContent(data.content);
        setRaw(JSON.stringify(data.content, null, 2));
      }
      setMessage("Contenu enregistré. La page publique se met à jour.");
      router.refresh();
    } catch {
      setError("Réseau indisponible");
    } finally {
      setPending(false);
    }
  }

  async function onSubmitForm(event: FormEvent) {
    event.preventDefault();
    await save(content);
  }

  async function onSubmitJson(event: FormEvent) {
    event.preventDefault();
    try {
      const parsed = JSON.parse(raw) as PortfolioContent;
      await save(parsed);
    } catch {
      setError("JSON invalide");
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-code text-[12px] tracking-[0.2em] text-bronze uppercase">Backend contenu</p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight">Éditer le portfolio</h1>
          <p className="mt-2 text-sm text-muted">
            Connecté : <span className="font-code">{email}</span> · {projectCount} projets
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/" className="rounded-full border border-line px-4 py-2 font-code text-xs hover:border-ink">
            Voir le site
          </Link>
          <button
            type="button"
            onClick={() => void logout()}
            className="rounded-full bg-ink px-4 py-2 font-code text-xs text-canvas"
          >
            Déconnexion
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        <button
          type="button"
          onClick={() => setMode("form")}
          className={`rounded-full px-4 py-2 font-code text-xs ${mode === "form" ? "bg-bronze text-white" : "border border-line"}`}
        >
          Formulaire
        </button>
        <button
          type="button"
          onClick={() => {
            setRaw(JSON.stringify(content, null, 2));
            setMode("json");
          }}
          className={`rounded-full px-4 py-2 font-code text-xs ${mode === "json" ? "bg-bronze text-white" : "border border-line"}`}
        >
          JSON complet
        </button>
      </div>

      {message ? <p className="mt-6 text-sm text-live">{message}</p> : null}
      {error ? <p className="mt-6 text-sm text-bronze">{error}</p> : null}

      {mode === "form" ? (
        <form onSubmit={onSubmitForm} className="mt-8 space-y-10">
          <section className="space-y-4 rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-heading text-xl font-semibold">Identité</h2>
            {(
              [
                ["name", "Nom"],
                ["initials", "Initiales"],
                ["role", "Rôle"],
                ["email", "Email"],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="block space-y-1">
                <span className="font-code text-[11px] text-muted">{label}</span>
                <input
                  value={content.identity[key]}
                  onChange={(e) => updateIdentity(key, e.target.value)}
                  className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                />
              </label>
            ))}
            <label className="block space-y-1">
              <span className="font-code text-[11px] text-muted">Accroche (lead)</span>
              <textarea
                value={content.identity.lead}
                onChange={(e) => updateIdentity("lead", e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
              />
            </label>
          </section>

          <section className="space-y-4 rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-heading text-xl font-semibold">Hero</h2>
            <label className="block space-y-1">
              <span className="font-code text-[11px] text-muted">Titre ligne 1</span>
              <input
                value={content.hero.titleLine1}
                onChange={(e) => setContent((p) => ({ ...p, hero: { ...p.hero, titleLine1: e.target.value } }))}
                className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
              />
            </label>
            <label className="block space-y-1">
              <span className="font-code text-[11px] text-muted">Titre ligne 2 (accent)</span>
              <input
                value={content.hero.titleLine2}
                onChange={(e) => setContent((p) => ({ ...p, hero: { ...p.hero, titleLine2: e.target.value } }))}
                className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
              />
            </label>
          </section>

          <section className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">Projets</h2>
            {content.projects.map((project, index) => (
              <div key={project.slug} className="space-y-3 rounded-2xl border border-line bg-surface p-6">
                <p className="font-code text-[11px] text-muted">#{index + 1}</p>
                <label className="block space-y-1">
                  <span className="font-code text-[11px] text-muted">Nom</span>
                  <input
                    value={project.name}
                    onChange={(e) => updateProject(index, { name: e.target.value })}
                    className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="font-code text-[11px] text-muted">Accroche</span>
                  <input
                    value={project.tagline}
                    onChange={(e) => updateProject(index, { tagline: e.target.value })}
                    className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="font-code text-[11px] text-muted">Description</span>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(index, { description: e.target.value })}
                    rows={3}
                    className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                  />
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="block space-y-1">
                    <span className="font-code text-[11px] text-muted">Statut</span>
                    <select
                      value={project.status}
                      onChange={(e) =>
                        updateProject(index, { status: e.target.value as Project["status"] })
                      }
                      className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                    >
                      <option value="live">live</option>
                      <option value="private">private</option>
                    </select>
                  </label>
                  <label className="block space-y-1">
                    <span className="font-code text-[11px] text-muted">URL (si live)</span>
                    <input
                      value={project.url ?? ""}
                      onChange={(e) =>
                        updateProject(index, { url: e.target.value.trim() || undefined })
                      }
                      className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                    />
                  </label>
                </div>
                <label className="block space-y-1">
                  <span className="font-code text-[11px] text-muted">Highlights (une par ligne)</span>
                  <textarea
                    value={project.highlights.join("\n")}
                    onChange={(e) =>
                      updateProject(index, {
                        highlights: e.target.value
                          .split("\n")
                          .map((l) => l.trim())
                          .filter(Boolean),
                      })
                    }
                    rows={3}
                    className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="font-code text-[11px] text-muted">Stack (séparée par virgules)</span>
                  <input
                    value={project.stack.join(", ")}
                    onChange={(e) =>
                      updateProject(index, {
                        stack: e.target.value
                          .split(",")
                          .map((l) => l.trim())
                          .filter(Boolean),
                      })
                    }
                    className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
                  />
                </label>
              </div>
            ))}
          </section>

          <section className="space-y-4 rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-heading text-xl font-semibold">Contact</h2>
            <label className="block space-y-1">
              <span className="font-code text-[11px] text-muted">Titre</span>
              <input
                value={content.contact.title}
                onChange={(e) =>
                  setContent((p) => ({ ...p, contact: { ...p.contact, title: e.target.value } }))
                }
                className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
              />
            </label>
            <label className="block space-y-1">
              <span className="font-code text-[11px] text-muted">Texte</span>
              <textarea
                value={content.contact.body}
                onChange={(e) =>
                  setContent((p) => ({ ...p, contact: { ...p.contact, body: e.target.value } }))
                }
                rows={4}
                className="w-full rounded-xl border border-line bg-canvas px-3 py-2 text-sm"
              />
            </label>
          </section>

          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-bronze px-6 py-3 font-code text-sm text-white disabled:opacity-60"
          >
            {pending ? "Enregistrement…" : "Enregistrer"}
          </button>
        </form>
      ) : (
        <form onSubmit={onSubmitJson} className="mt-8 space-y-4">
          <textarea
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            rows={28}
            className="w-full rounded-2xl border border-line bg-night p-4 font-code text-[12px] text-[#e8eaed]"
            spellCheck={false}
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-bronze px-6 py-3 font-code text-sm text-white disabled:opacity-60"
          >
            {pending ? "Enregistrement…" : "Enregistrer le JSON"}
          </button>
        </form>
      )}
    </div>
  );
}
