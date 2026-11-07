import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termini e Condizioni d'Uso",
  description:
    "Termini e condizioni d'uso del sito Motta Serramenti S.r.l. — opt-out TDM, proprietà intellettuale, foro competente.",
};

export default function TerminiPage() {
  return (
    <main className="ms-legal">
      <header className="ms-legal__header">
        <h1>Termini e Condizioni d&apos;Uso</h1>
        <p className="ms-legal__intro">
          Benvenuti sul sito web (il &laquo;Sito&raquo;) di Motta Serramenti S.r.l. Vi invitiamo a
          leggere attentamente i presenti Termini e Condizioni d&apos;Uso (i &laquo;Termini
          d&apos;Uso&raquo;) prima di utilizzare il Sito.
        </p>
      </header>

      <section>
        <h2>1. Accettazione dei Termini d&apos;Uso</h2>
        <p>
          Nei presenti Termini d&apos;Uso, i termini &laquo;Utente&raquo;, &laquo;Lei&raquo; e &laquo;Suo&raquo; si riferiscono a
          ciascun visitatore del Sito; &laquo;noi&raquo;, &laquo;ci&raquo; e &laquo;nostro&raquo; si riferiscono a Motta
          Serramenti S.r.l.
        </p>
        <p>
          Accedendo e/o utilizzando il Sito, Lei riconosce di aver letto, compreso e accettato di
          rispettare ed essere vincolato dai presenti Termini d&apos;Uso.
        </p>
        <p>
          Lei si impegna altresì a rispettare tutte le leggi e normative applicabili. Qualora ritenga
          i presenti Termini d&apos;Uso inaccettabili, La invitiamo a non utilizzare il Sito.
        </p>
        <p>
          Ci riserviamo il diritto di modificare i presenti Termini d&apos;Uso in qualsiasi momento e
          senza preavviso. L&apos;uso continuato del Sito dopo la pubblicazione delle modifiche comporta
          l&apos;accettazione dei Termini d&apos;Uso così modificati.
        </p>
      </section>

      <section>
        <h2>2. Il Sito</h2>
        <p>
          Il Sito fornisce informazioni sui prodotti Motta Serramenti, in particolare sui sistemi
          residenziali in alluminio della linea <strong>Motta Premium</strong> — incluse le serie{" "}
          <strong>NEXA C75</strong> e <strong>INVISIA C82S</strong> — e sui serramenti in PVC, comprese
          le loro descrizioni, caratteristiche tecniche e dettagli architettonici.
        </p>
        <p>
          Motta Serramenti S.r.l. opera esclusivamente come produttore e non effettua vendita diretta
          né posa in opera. I prodotti sono disponibili esclusivamente tramite rivenditori e
          serramentisti autorizzati (Sezione 7).
        </p>
        <p>
          Il Sito non fornisce servizi di vendita né servizi a pagamento. Il Sito offre un modulo di
          contatto per richieste informative da parte di privati, architetti, progettisti, rivenditori
          e operatori del settore.
        </p>
      </section>

      <section>
        <h2>3. Uso del Sito e divieto di scraping per addestramento IA</h2>
        <p>
          Lei si impegna a utilizzare il Sito esclusivamente nei limiti espressamente consentiti dai
          presenti Termini d&apos;Uso. L&apos;uso è limitato a finalità lecite, personali e informative. I
          rivenditori, gli operatori del settore, gli architetti e i progettisti possono utilizzare il
          Sito per finalità professionali e commerciali direttamente connesse alla proposta e
          commercializzazione dei prodotti Motta Serramenti.
        </p>
        <p>
          È vietato tentare di ottenere accesso non autorizzato a qualsiasi parte del Sito, ai
          relativi server o alle reti collegate, nonché interferire con il suo corretto funzionamento.
          È vietato introdurre virus, malware o altro materiale tecnologicamente dannoso.
        </p>
        <p>
          <strong>
            È espressamente vietato l&apos;utilizzo di strumenti automatizzati non autorizzati — quali
            bot di estrazione massiva, scraper, harvester o qualsiasi altro mezzo automatizzato — per
            accedere, monitorare, copiare, estrarre, raccogliere o riprodurre, in tutto o in parte, i
            contenuti del Sito, i dati, le immagini, i testi, i render e qualsiasi altro materiale ivi
            pubblicato.
          </strong>
        </p>
        <p>
          Sono espressamente <strong>consentiti</strong>, fermo restando il divieto di utilizzo per
          addestramento di sistemi di IA di cui al successivo capoverso, l&apos;accesso da parte di:
        </p>
        <ul>
          <li>
            crawler di motori di ricerca tradizionali (Googlebot, Bingbot, Applebot, ecc.) per
            finalità di indicizzazione e visibilità nei risultati di ricerca;
          </li>
          <li>
            crawler di motori di ricerca generativi (OAI-SearchBot, PerplexityBot, ChatGPT-User,
            Perplexity-User, Claude-User, Claude-SearchBot, Gemini-Deep-Research, ecc.) per finalità
            di citazione e attribuzione delle fonti nelle risposte generate.
          </li>
        </ul>
        <p>
          <strong>
            È invece espressamente vietato l&apos;utilizzo dei contenuti del Sito — inclusi testi,
            immagini, render, fotografie, video, disegni tecnici e qualsiasi altro materiale — per
            finalità di estrazione di testo e dati (text and data mining), di addestramento, sviluppo,
            validazione, ottimizzazione o messa a punto di sistemi di intelligenza artificiale,
            modelli linguistici di grandi dimensioni, modelli generativi o di qualsiasi altro sistema
            automatizzato di apprendimento, indipendentemente dal soggetto che effettua tali
            operazioni.
          </strong>
        </p>
        <p>
          Motta Serramenti S.r.l. <strong>riserva espressamente</strong> i diritti di estrazione di
          testo e dati sui contenuti del Sito ai sensi dell&apos;art. 4, par. 3, della Direttiva (UE)
          2019/790 sul diritto d&apos;autore nel mercato unico digitale, degli artt. 70-ter e 70-quater
          della Legge 22 aprile 1941 n. 633, e in coerenza con gli obblighi previsti per i providers
          di modelli di IA per finalità generali dall&apos;art. 53(1)(c) del Regolamento (UE) 2024/1689
          (AI Act). Tale riserva costituisce manifestazione di volontà giuridicamente vincolante,
          leggibile da macchina (machine-readable) ai sensi del W3C TDM Reservation Protocol
          (TDMRep), espressa tramite:
        </p>
        <ul>
          <li>
            file <code>/.well-known/tdmrep.json</code> conforme alla specifica W3C TDMRep;
          </li>
          <li>
            header HTTP <code>tdm-reservation: 1</code> e <code>tdm-policy</code> in tutte le risposte
            del server;
          </li>
          <li>
            metatag <code>tdm-reservation</code> e <code>tdm-policy</code> in tutte le pagine HTML;
          </li>
          <li>
            file <code>robots.txt</code> con esclusione esplicita dei principali training crawler AI;
          </li>
          <li>le presenti clausole contrattuali, valide come opt-out in linguaggio naturale.</li>
        </ul>
        <p>
          L&apos;accesso ai contenuti del Sito da parte di crawler di motori di ricerca generativi è
          subordinato al rispetto integrale della presente riserva: i contenuti possono essere
          indicizzati e citati come fonte, ma non possono essere utilizzati per addestramento di
          modelli, conservazione persistente nei dataset di training o riproduzione generativa
          derivata.
        </p>
        <p>
          Lei accetta di manlevare e tenere indenne Motta Serramenti S.r.l. da qualsiasi pretesa,
          reclamo o richiesta di terzi e da qualsiasi danno derivante da un uso del Sito non conforme
          ai presenti Termini d&apos;Uso o alla normativa applicabile. La violazione delle previsioni del
          presente articolo potrà comportare l&apos;esercizio delle tutele giudiziarie civili, penali e
          amministrative previste dalla legge.
        </p>
      </section>

      <section>
        <h2>4. Disponibilità del Sito</h2>
        <p>
          Ci adoperiamo per garantire che il Sito rimanga accessibile; tuttavia, non garantiamo un
          accesso ininterrotto. Il Sito può risultare temporaneamente non disponibile per
          manutenzione, problemi tecnici o altre cause al di fuori del nostro controllo.
        </p>
        <p>
          Ci riserviamo il diritto, in qualsiasi momento e senza preavviso, di modificare, rimuovere o
          spostare contenuti, limitare temporaneamente l&apos;accesso o interrompere in via definitiva il
          Sito o alcune sue funzionalità.
        </p>
        <p>
          Possiamo limitare o revocare l&apos;accesso al Sito qualora ritenessimo, a nostra esclusiva
          discrezione, che un Utente abbia violato i presenti Termini d&apos;Uso — incluso l&apos;utilizzo di
          strumenti automatizzati di scraping non autorizzati o di tecniche di evasione delle misure
          di protezione tecnica del Sito.
        </p>
      </section>

      <section>
        <h2>5. Proprietà intellettuale</h2>
        <p>
          Tutti i contenuti presenti sul Sito — inclusi a titolo esemplificativo ma non esaustivo
          struttura, codice, software, testi, grafica, loghi, marchi (compresi{" "}
          <strong>Motta Premium</strong>, <strong>NEXA</strong>, <strong>INVISIA</strong>),
          denominazioni commerciali, design, nomi e immagini di prodotti, render, fotografie, video,
          disegni tecnici e altro materiale audiovisivo (collettivamente, i &laquo;Contenuti&raquo;) — sono di
          proprietà di Motta Serramenti S.r.l. o concessi in licenza e sono tutelati dalle leggi
          applicabili in materia di diritto d&apos;autore, marchi e proprietà intellettuale.
        </p>
        <p>
          Tutti i diritti di proprietà intellettuale sono riservati. Salvo nostra espressa
          autorizzazione scritta, l&apos;Utente non deve:
        </p>
        <ul>
          <li>riprodurre, duplicare o copiare i Contenuti del Sito;</li>
          <li>ripubblicare i Contenuti su qualsiasi supporto;</li>
          <li>vendere, concedere in sublicenza o sfruttare economicamente i Contenuti;</li>
          <li>ridistribuire i Contenuti, anche a titolo gratuito;</li>
          <li>modificare o alterare i Contenuti;</li>
          <li>creare opere derivate dai Contenuti;</li>
          <li>
            utilizzare i Contenuti per addestrare, sviluppare, validare o ottimizzare sistemi di
            intelligenza artificiale, modelli generativi o modelli linguistici;
          </li>
          <li>utilizzare i Contenuti in qualunque altro modo non espressamente previsto.</li>
        </ul>
        <p>
          L&apos;accesso e l&apos;utilizzo del Sito non comportano il conferimento di alcuna autorizzazione o
          diritto, espresso o implicito, relativamente ai Contenuti. Qualsiasi uso non autorizzato
          potrà comportare l&apos;esercizio delle azioni legali a tutela dei diritti di Motta Serramenti
          S.r.l.
        </p>
      </section>

      <section>
        <h2>6. Limitazione di responsabilità</h2>
        <p>
          Il Sito è fornito &laquo;così com&apos;è&raquo; e &laquo;come disponibile&raquo;, senza garanzie, espresse o implicite,
          di alcun tipo. L&apos;Utente riconosce che l&apos;accesso e l&apos;utilizzo del Sito avvengono a proprio
          rischio.
        </p>
        <p>
          Non garantiamo l&apos;accuratezza, la completezza o l&apos;attualità dei Contenuti. I dati tecnici,
          le specifiche prestazionali e le immagini dei prodotti hanno carattere illustrativo e non
          vincolante: per informazioni tecniche definitive si rimanda alle schede tecniche ufficiali e
          ai rivenditori autorizzati.
        </p>
        <p>
          Nella misura massima consentita dalla legge, non saremo responsabili per danni diretti,
          indiretti, incidentali, speciali, punitivi o consequenziali derivanti da o connessi
          all&apos;utilizzo del Sito.
        </p>
      </section>

      <section>
        <h2>7. Rivenditori Autorizzati</h2>
        <p>
          Motta Serramenti S.r.l. opera esclusivamente come produttore e distribuisce i propri
          prodotti attraverso una rete di rivenditori e serramentisti autorizzati indipendenti.
        </p>
        <p>
          Tutti i rivenditori autorizzati operano come entità indipendenti. Motta Serramenti S.r.l.
          non è responsabile per pretese, controversie o danni derivanti da interazioni o transazioni
          con tali soggetti indipendenti — inclusi quelli relativi a prezzi, pagamenti, consegne, posa
          in opera, servizi, dichiarazioni o altro — salvo quanto imposto dagli obblighi legali del
          produttore.
        </p>
        <p>
          Raccomandiamo di acquistare i prodotti Motta Serramenti esclusivamente tramite rivenditori
          autorizzati.
        </p>
      </section>

      <section>
        <h2>8. Cookie e Privacy</h2>
        <p>
          Il presente Sito utilizza cookie per migliorare l&apos;esperienza di navigazione. Vedi la{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>
        <p>
          La nostra <Link href="/privacy">Informativa sulla Privacy</Link> illustra come trattiamo i
          dati personali, in particolare quelli del modulo di contatto.
        </p>
      </section>

      <section>
        <h2>9. Legge applicabile e Foro competente</h2>
        <p>
          I presenti Termini d&apos;Uso sono disciplinati dalla legge della Repubblica Italiana. Per
          qualsiasi controversia sarà competente in via esclusiva il Foro di Monza, fatte salve le
          competenze inderogabili previste dalla legge a tutela del consumatore.
        </p>
      </section>

      <section>
        <h2>10. Contatti</h2>
        <address>
          <strong>Motta Serramenti S.r.l.</strong>
          <br />
          Via A. Gramsci, 7 — 20847 Albiate (MB), Italia
          <br />
          Tel.: 0362 913364
          <br />
          Email: <a href="mailto:info@mottaserramenti.it">info@mottaserramenti.it</a>
          <br />
          P. IVA / C.F.: 09730180966
          <br />
          REA: MB-1910578
        </address>
      </section>

      <footer className="ms-legal__footer">
        <p>Ultimo aggiornamento: maggio 2026</p>
        <p>© 2026 Motta Serramenti S.r.l. — Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}
