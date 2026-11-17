"use client";

import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "error";

const LABELS: Record<CopyState, string> = {
  idle: "Copier l'adresse",
  copied: "Adresse copiée",
  error: "Copie impossible — sélectionnez l'adresse",
};

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-ink/20 px-6 py-3.5 font-code text-[13px] tracking-wide transition hover:border-ink"
    >
      <span aria-live="polite">{LABELS[state]}</span>
    </button>
  );
}
