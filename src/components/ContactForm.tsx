"use client";

import { useState, type FormEvent } from "react";

type Role = "rivenditore" | "architetto" | "cliente" | "altro";
type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      role: String(formData.get("role") ?? "") as Role,
      phone: String(formData.get("phone") ?? "").trim() || null,
      message: String(formData.get("message") ?? "").trim(),
    };

    // Client validation
    if (!payload.name || !payload.email || !payload.message) {
      setError("Compila i campi obbligatori.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("Indirizzo email non valido.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Errore invio");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore di rete.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-white">
        <p className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-white/65 mb-3">
          Messaggio ricevuto
        </p>
        <p className="h-display text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.1] text-white">
          Grazie. Ti rispondiamo entro la giornata.
        </p>
        <p className="mt-4 text-white/80 leading-relaxed font-medium">
          Riceverai una conferma all&apos;indirizzo email che ci hai lasciato.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-white/70 hover:text-white text-sm tracking-[0.18em] uppercase font-semibold underline-offset-4 hover:underline transition-colors"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="glass-label">
            Nome e cognome <span aria-hidden className="text-white/40">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Mario Rossi"
            className="glass-input"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="glass-label">
            Email <span aria-hidden className="text-white/40">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="mario@studio.it"
            className="glass-input"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-role" className="glass-label">
            Ruolo
          </label>
          <select
            id="cf-role"
            name="role"
            defaultValue="rivenditore"
            className="glass-select"
          >
            <option value="rivenditore">Rivenditore / Showroom</option>
            <option value="architetto">Architetto / Studio</option>
            <option value="cliente">Cliente finale</option>
            <option value="altro">Altro</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-phone" className="glass-label">
            Telefono
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+39 ..."
            className="glass-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="glass-label">
          Messaggio <span aria-hidden className="text-white/40">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Raccontaci del progetto. Tipo di intervento, tempistiche, area geografica."
          className="glass-textarea"
        />
      </div>

      {/* Honeypot anti-spam (hidden) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0"
        aria-hidden
      />

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "loading"}
          className="glass-btn disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>
            {status === "loading" ? "Invio in corso…" : "Invia messaggio"}
          </span>
          {status !== "loading" && (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="size-3.5"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        {status === "error" && error && (
          <p className="text-sm text-red-300 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>

      <p className="text-[0.72rem] tracking-[0.06em] text-white/55 leading-relaxed font-medium pt-2">
        Inviando questo modulo accetti che Motta Serramenti tratti i tuoi dati
        per rispondere alla richiesta.
      </p>
    </form>
  );
}
