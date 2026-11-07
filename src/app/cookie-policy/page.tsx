import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa estesa sull'utilizzo dei cookie sul sito Motta Serramenti S.r.l. ai sensi del Provv. Garante 10/06/2021 e Linee Guida EDPB 5/2020.",
};

export default function CookiePolicyPage() {
  return (
    <main className="ms-legal">
      <header className="ms-legal__header">
        <h1>Cookie Policy</h1>
        <p className="ms-legal__intro">
          Informativa estesa sull&apos;utilizzo dei cookie sul sito mottaserramenti.it, redatta ai sensi
          del Provvedimento del Garante per la Protezione dei Dati Personali del 10 giugno 2021 e
          delle Linee Guida 5/2020 EDPB.
        </p>
      </header>

      <section>
        <h2>Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al terminale
          dell&apos;Utente, dove vengono memorizzati per essere ritrasmessi al sito alla visita
          successiva.
        </p>
      </section>

      <section>
        <h2>Cookie utilizzati su questo Sito</h2>

        <h3>Cookie tecnici (sempre attivi — non richiedono consenso)</h3>
        <ul>
          <li>sicurezza e stabilità della sessione di navigazione;</li>
          <li>memorizzazione delle preferenze di consenso ai cookie;</li>
          <li>gestione del rate limiting del modulo di contatto.</li>
        </ul>

        <h3>Cookie analitici (richiedono consenso)</h3>
        <p>
          Qualora il Sito utilizzi strumenti di analisi del traffico, i relativi cookie verranno
          installati solo previo consenso esplicito tramite il banner di consenso.
        </p>

        <h3>Cookie di profilazione e marketing</h3>
        <p>
          Il Sito <strong>non utilizza</strong> cookie di profilazione o di marketing di alcun tipo.
        </p>
      </section>

      <section>
        <h2>Gestione delle preferenze</h2>
        <p>Può gestire i cookie dalle impostazioni del browser:</p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/it-it/microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Titolare del trattamento</h2>
        <address>
          <strong>Motta Serramenti S.r.l.</strong>
          <br />
          Via A. Gramsci, 7 — 20847 Albiate (MB)
          <br />
          Email: <a href="mailto:info@mottaserramenti.it">info@mottaserramenti.it</a>
          <br />
          Tel.: 0362 913364
        </address>
        <p>
          Vedi anche la <Link href="/privacy">Informativa sulla Privacy</Link>.
        </p>
      </section>

      <footer className="ms-legal__footer">
        <p>Ultimo aggiornamento: maggio 2026</p>
        <p>© 2026 Motta Serramenti S.r.l. — Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}
