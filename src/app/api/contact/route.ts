import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  role?: unknown;
  phone?: unknown;
  message?: unknown;
  /** honeypot */
  company?: unknown;
};

const ROLES = ["rivenditore", "architetto", "cliente", "altro"] as const;
type Role = (typeof ROLES)[number];

function asString(v: unknown, max = 5000): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — anti-spam silente
  if (asString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 120);
  const email = asString(body.email, 200);
  const role = asString(body.role, 40) as Role;
  const phone = asString(body.phone, 40);
  const message = asString(body.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email non valida" }, { status: 400 });
  }
  const safeRole: Role = ROLES.includes(role) ? role : "altro";

  // ── Email via Resend (se configurato) ─────────────────────────
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO = process.env.CONTACT_TO ?? "info@mottaserramenti.it";
  const CONTACT_FROM = process.env.CONTACT_FROM ?? "Motta Serramenti <no-reply@mottaserramenti.it>";

  const subject = `[Sito Motta] Nuova richiesta — ${name} (${safeRole})`;
  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; color: #111; line-height: 1.5;">
      <h2 style="font-weight:600;font-size:18px;margin:0 0 16px">Nuova richiesta dal sito Motta</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-size:14px">
        <tr><td style="color:#666">Nome</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="color:#666">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="color:#666">Ruolo</td><td>${escapeHtml(safeRole)}</td></tr>
        ${phone ? `<tr><td style="color:#666">Telefono</td><td>${escapeHtml(phone)}</td></tr>` : ""}
      </table>
      <h3 style="font-weight:600;font-size:14px;margin:20px 0 8px;color:#666">Messaggio</h3>
      <div style="white-space:pre-wrap;font-size:14px;border-left:3px solid #a07b4b;padding:12px 16px;background:#faf7f2">${escapeHtml(message)}</div>
    </div>
  `;
  const text = [
    `Nome: ${name}`,
    `Email: ${email}`,
    `Ruolo: ${safeRole}`,
    phone ? `Telefono: ${phone}` : null,
    "",
    "Messaggio:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (RESEND_API_KEY) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: CONTACT_FROM,
          to: [CONTACT_TO],
          reply_to: email,
          subject,
          html,
          text,
        }),
      });
      if (!r.ok) {
        const errBody = await r.text();
        console.error("Resend error:", r.status, errBody);
        return NextResponse.json({ error: "Provider email failure" }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Resend exception:", err);
      return NextResponse.json({ error: "Network failure" }, { status: 502 });
    }
  }

  // Fallback: nessun provider configurato. Logga e ritorna ok (UX intatto).
  // Configura RESEND_API_KEY su Vercel per attivare l'invio reale.
  console.log("[contact] (no provider configured)", {
    name,
    email,
    role: safeRole,
    phone,
    message: message.slice(0, 200),
  });
  return NextResponse.json({ ok: true, warning: "Provider not configured" });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
