import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informativa sulla Privacy",
  description:
    "Informativa privacy ai sensi dell'art. 13 GDPR — Motta Serramenti S.r.l. Trattamento dati del modulo di contatto, trasferimenti extra-UE, diritti dell'interessato.",
};

export default function PrivacyPage() {
  return (
    <main className="ms-legal">
      <header className="ms-legal__header">
        <h1>Informativa sulla Privacy</h1>
        <p className="ms-legal__intro">
          Informativa ai sensi dell&apos;articolo 13 del Regolamento (UE) 2016/679 (GDPR).
        </p>
      </header>

      <section>
        <h2>Titolare del Trattamento</h2>
        <p>
          <strong>Motta Serramenti S.r.l.</strong>, Via A. Gramsci 7, 20847 Albiate (MB), Italia.
          <br />
          P. IVA / C.F.: 09730180966
          <br />
          Email: <a href="mailto:info@mottaserramenti.it">info@mottaserramenti.it</a>
          <br />
          Tel.: 0362 913364
        </p>
      </section>

      <section>
        <h2>Dati trattati</h2>
        <ul>
          <li>Nome e Cognome</li>
          <li>Indirizzo email</li>
          <li>Numero di telefono</li>
          <li>Contenuto del messaggio inviato tramite il modulo di contatto</li>
          <li>Indirizzo IP e dati tecnici di navigazione</li>
          <li>Data e ora dell&apos;invio del modulo di contatto</li>
        </ul>
      </section>

      <section>
        <h2>Base giuridica e finalità del trattamento</h2>
        <ul>
          <li>
            <strong>Riscontro alle richieste informative</strong> — art. 6, par. 1, lett. b) GDPR.
          </li>
          <li>
            <strong>Inoltro a rivenditori autorizzati</strong> — art. 6, par. 1, lett. b) e f) GDPR.
          </li>
          <li>
            <strong>Sicurezza del Sito e prevenzione di abusi</strong> — art. 6, par. 1, lett. f)
            GDPR: rate limiting, protezione da scraping e attacchi automatizzati.
          </li>
          <li>
            <strong>Adempimento di obblighi di legge</strong> — art. 6, par. 1, lett. c) GDPR.
          </li>
        </ul>
      </section>

      <section>
        <h2>Natura del conferimento</h2>
        <p>
          I dati contrassegnati come obbligatori (Nome, Email, Messaggio) sono necessari per gestire
          la richiesta. Il numero di telefono è facoltativo.
        </p>
      </section>

      <section>
        <h2>Destinatari dei dati</h2>
        <ul>
          <li>personale autorizzato di Motta Serramenti S.r.l.;</li>
          <li>rivenditori autorizzati Motta Serramenti, qualora necessario;</li>
          <li>
            fornitori di servizi tecnici come Responsabili del trattamento ex art. 28 GDPR: Vercel
            Inc. (hosting), Zapier Inc. (automazione modulo), Google LLC
            (Google Workspace/Sheets/Gmail);
          </li>
          <li>soggetti ai quali la comunicazione sia dovuta per obblighi di legge.</li>
        </ul>
      </section>

      <section>
        <h2>Trasferimento dei dati extra-UE</h2>
        <p>
          Alcuni fornitori (Vercel Inc., Zapier Inc., Google LLC) hanno sede negli Stati Uniti. Il
          trasferimento avviene nel rispetto del{" "}
          <strong>Data Privacy Framework UE-USA</strong> (decisione di adeguatezza CE del 10 luglio
          2023) e delle <strong>Clausole Contrattuali Standard</strong> ex art. 46 GDPR.
        </p>
      </section>

      <section>
        <h2>Periodo di conservazione</h2>
        <ul>
          <li>
            dati del modulo di contatto: <strong>24 mesi</strong> dall&apos;ultimo contatto;
          </li>
          <li>
            dati di navigazione e log tecnici: <strong>massimo 12 mesi</strong>;
          </li>
          <li>dati per obblighi di legge: per il periodo previsto dalla normativa applicabile.</li>
        </ul>
      </section>

      <section>
        <h2>Diritti dell&apos;interessato</h2>
        <p>
          Ai sensi degli artt. 15-22 GDPR Lei può esercitare i diritti di accesso, rettifica,
          cancellazione, limitazione, portabilità, opposizione e revoca del consenso.
        </p>
        <p>
          Per esercitare i Suoi diritti scriva a{" "}
          <a href="mailto:info@mottaserramenti.it">info@mottaserramenti.it</a>. Può inoltre proporre
          reclamo al{" "}
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
            Garante per la Protezione dei Dati Personali
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Processi decisionali automatizzati</h2>
        <p>
          Il trattamento non comporta processi decisionali automatizzati né profilazione ai sensi
          dell&apos;art. 22 GDPR.
        </p>
      </section>

      <footer className="ms-legal__footer">
        <p>Ultimo aggiornamento: maggio 2026</p>
        <p>© 2026 Motta Serramenti S.r.l. — Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}
