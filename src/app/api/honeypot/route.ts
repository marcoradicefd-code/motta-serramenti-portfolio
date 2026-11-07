import { NextRequest } from "next/server";

export const runtime = "edge";

const ALERT_WEBHOOK = process.env.ZAPIER_SCRAPER_ALERT_WEBHOOK;

export async function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const userAgent = req.headers.get("user-agent") ?? "unknown";
  const referrer = req.headers.get("referer") ?? "diretto";

  if (ALERT_WEBHOOK) {
    fetch(ALERT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Tipo: "SCRAPER RILEVATO (honeypot)",
        Data: new Date().toISOString(),
        IP: ip,
        User_Agent: userAgent,
        Referrer: referrer,
        Path: "/api/honeypot",
      }),
    }).catch(() => {});
  }

  return new Response("Not Found", { status: 404 });
}
