```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  EditorialFooter,
  EditorialHeader,
} from "@/components/onirixa/editorial-chrome";
import bocciataCover from "@/assets/onirixa/la-bocciata-cover.jpeg";

const sources = {
  reuters:
    "https://www.reuters.com/world/europe/serbia-votes-students-seek-unseat-vucic-snap-election-2026-10-25/",
  abc:
    "https://www.abc.net.au/news/2026-10-26/serbia-election-vucic-defeat-student-protest/107307808",
  cbs:
    "https://www.cbsnews.com/news/serbia-election-aleksandar-vucic-concedes-defeat/",
};

function Sources({ items }: { items: string[] }) {
  const sourceMap: Record<string, string> = {
    Reuters: sources.reuters,
    "ABC News": sources.abc,
    "CBS News": sources.cbs,
  };

  return (
    <span className="ml-1 font-sans text-xs text-muted-foreground">
      [
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && ", "}
          <a
            href={sourceMap[item]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            {item}
          </a>
        </span>
      ))}
      ]
    </span>
  );
}

const paragraphs: ReactNode[] = [
  <>
    Per quattordici anni la Serbia ha avuto un uomo al comando: Aleksandar
    Vučić, leader del cosiddetto Partito Progressista Serbo, una formazione
    che di progressista sembra avere soprattutto il nome. Oggi quel ciclo
    politico è finito. La lista sostenuta dal movimento studentesco nato
    dalle proteste contro corruzione e mala gestione del potere ha ottenuto
    una vittoria storica, costringendo Vučić ad ammettere la sconfitta.
    <Sources items={["Reuters", "ABC News", "CBS News"]} />
  </>,

  <>A Bruxelles si festeggia già.</>,

  <>
    Dopotutto, l'uscita di scena dell'uomo forte di Belgrado viene letta da
    molti come una vittoria della democrazia liberale e, soprattutto,
    dell'Europa.
  </>,

  <>Ma siamo sicuri che le cose stiano davvero così?</>,

  <>
    La protesta che ha travolto Vučić non è mai nata per chiedere più Europa.
    È nata per chiedere meno corruzione, più trasparenza e maggiore
    responsabilità delle istituzioni dopo anni di potere concentrato nelle
    stesse mani.
    <Sources items={["Reuters", "ABC News"]} />
  </>,

  <>
    Tutto ha origine il 1° novembre 2024, quando il crollo della pensilina
    della stazione ferroviaria di Novi Sad provoca la morte di 16 persone,
    tra cui un bambino. Quella che inizialmente appare come una tragedia
    locale si trasforma rapidamente in un caso nazionale. Per una parte
    crescente dell'opinione pubblica serba, quella pensilina non rappresenta
    soltanto un incidente, ma il simbolo di un sistema percepito come segnato
    da corruzione, appalti poco trasparenti e controlli insufficienti. Da lì
    nascono le proteste studentesche che, nel giro di due anni, si
    trasformeranno nel movimento capace di porre fine a quattordici anni di
    dominio politico di Aleksandar Vučić.
    <Sources items={["Reuters", "ABC News", "CBS News"]} />
  </>,

  <>
    C'è poi un elemento che rende ancora più difficile interpretare il voto.
    La cosiddetta Lista degli Studenti non nasce come un tradizionale partito
    politico, con una collocazione ideologica chiaramente definita. È una
    lista apartitica, costruita attorno alle richieste emerse dalle proteste
    e alla volontà di rompere con il sistema di potere che ha dominato il
    Paese negli ultimi quattordici anni.
    <Sources items={["Reuters", "ABC News"]} />
  </>,

  <>
    Proprio per questo risulta complicato incasellarla nelle categorie a cui
    siamo abituati. È europeista? È nazionalista? È liberale? È conservatrice?
    La risposta, almeno per ora, sembra essere: non lo sappiamo davvero.
  </>,

  <>
    Gli elettori hanno espresso con chiarezza ciò che non vogliono più.
    Molto meno chiaro è invece quale direzione prenderà il Paese adesso che
    quel sistema è stato sconfitto.
  </>,

  <>
    Sono battaglie che possono piacere a Bruxelles, ma non sono
    necessariamente battaglie europeiste.
  </>,

  <>
    Anzi, c'è un dettaglio che molti sembrano dimenticare. Per anni l'Unione
    Europea ha criticato Vučić sul piano democratico, ma al tempo stesso ha
    continuato a considerarlo un interlocutore indispensabile per garantire
    stabilità nei Balcani.
  </>,

  <>
    In altre parole, quello che oggi viene descritto come un ostacolo è stato
    spesso sostenuto o quantomeno tollerato perché garantiva ordine in una
    regione che l'Europa considera strategica.
  </>,

  <>Per questo la domanda vera non è se Vučić abbia perso.</>,

  <>La domanda è cosa farà la Serbia senza Vučić.</>,

  <>Perché la geografia non cambia con un'elezione.</>,

  <>
    La Serbia continua a trovarsi tra Est e Ovest, e continua ad avere
    interessi economici e strategici che vanno ben oltre Bruxelles. La Cina
    è diventata negli ultimi anni uno dei principali investitori nel Paese,
    mentre la Russia resta un partner fondamentale sul piano energetico e
    diplomatico.
  </>,

  <>Soprattutto sul Kosovo.</>,

  <>
    Ed è proprio qui che rischia di emergere il più grande equivoco
    occidentale.
  </>,

  <>
    Molti osservatori sembrano dare per scontato che una Serbia post-Vučić
    sarà automaticamente più vicina alle posizioni europee sulla questione
    kosovara.
  </>,

  <>Non è affatto detto.</>,

  <>
    La rivendicazione del Kosovo non appartiene esclusivamente a Vučić o al
    suo partito. È una posizione profondamente radicata nella società serba
    e attraversa sensibilità politiche molto diverse tra loro. Cambiare
    governo non significa necessariamente cambiare visione nazionale.
  </>,

  <>
    Anzi, se c'è un punto sul quale gran parte dell'opinione pubblica serba
    continua a convergere è proprio il rifiuto di riconoscere il Kosovo come
    uno Stato pienamente indipendente. La discussione politica riguarda
    spesso i modi, i tempi e la strategia diplomatica, molto meno il
    principio di fondo.
  </>,

  <>
    Chi immagina che il nuovo corso accetterà senza discussioni l'attuale
    assetto regionale potrebbe quindi scoprire che la realtà è più complessa
    di quanto appaia da Bruxelles.
  </>,

  <>
    Lo stesso vale per i rapporti con Mosca e Pechino.
  </>,

  <>
    I nuovi leader potranno certamente modificare toni, priorità e alleanze.
    Ma rompere improvvisamente accordi economici consolidati o rinunciare a
    partner che garantiscono investimenti, energia e sostegno diplomatico
    avrebbe un costo enorme.
  </>,

  <>I governi cambiano.</>,

  <>Gli interessi nazionali molto meno.</>,

  <>Per questo la vera notizia non è che gli studenti abbiano vinto.</>,

  <>
    La vera notizia è che per la prima volta dopo quattordici anni la Serbia
    dovrà decidere cosa vuole essere.
  </>,

  <>Un futuro membro dell'Unione Europea?</>,

  <>Un Paese ponte tra Europa, Russia e Cina?</>,

  <>Oppure qualcosa di completamente diverso?</>,

  <>
    L'Europa oggi brinda alla caduta di Vučić.
  </>,

  <>
    Potrebbe però scoprire domani che gli elettori serbi hanno votato contro
    un sistema di potere, non necessariamente per entrare nel proprio.
  </>,

  <>
    Perché la Serbia sa perfettamente contro chi ha votato.
  </>,

  <>Molto meno chiaro è per cosa abbia votato.</>,

  <>
    Ed è proprio in questa zona grigia che si giocherà il futuro del Paese.
  </>,
];

function ArticoloGliStudentiHannoVinto() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorialHeader compact />

      <main className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="border-b border-border py-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
          <Link
            to="/"
            className="transition-colors hover:text-foreground"
          >
            ← Homepage
          </Link>
        </div>

        <article>
          <header className="pt-12 sm:pt-20">
            <p className="font-display text-2xl font-bold sm:text-3xl">
              La bocciata
            </p>

            <p className="mt-4 font-sans text-[11px] uppercase tracking-wide text-muted-foreground">
              Rubrica del direttore
              <span className="mx-2">·</span>
              30 ottobre 2026
              <span className="mx-2">·</span>
              6 min di lettura
            </p>

            <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,7vw,4.6rem)] font-bold leading-[1.08]">
              Gli studenti hanno vinto. Ma chi ha detto che abbia vinto
              l'Europa?
            </h1>

            <p className="mt-7 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">
              La caduta di Vučić non significa necessariamente una vittoria
              dell'europeismo. La Serbia resta sospesa tra Bruxelles, Mosca
              e Pechino, mentre il voto degli studenti apre interrogativi
              sul futuro politico e geopolitico del Paese.
            </p>
          </header>

          <div className="mx-auto mt-12 flow-root max-w-2xl space-y-6 font-display text-[17px] leading-[1.85] sm:text-[18px]">
            <img
              src={bocciataCover}
              alt="Disegno a penna di un uomo in giacca che lancia una boccia"
              className="float-left mr-5 mb-2 w-32 sm:w-44"
            />

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl border-l-2 border-foreground pl-5 font-display text-[22px] font-bold leading-[1.45]">
            La Serbia sa perfettamente contro chi ha votato. Molto meno
            chiaro è per cosa abbia votato.
          </p>

          <div className="mt-14 flex items-center justify-between border-t border-foreground pt-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
            <span>La bocciata · Rubrica del direttore</span>

            <Link
              to="/"
              className="transition-colors hover:text-foreground"
            >
              Torna alla homepage →
            </Link>
          </div>
        </article>
      </main>

      <EditorialFooter />
    </div>
  );
}

export const Route = createFileRoute(
  "/articolo/gli-studenti-hanno-vinto"
)({
  head: () => ({
    meta: [
      {
        title:
          "La bocciata — Gli studenti hanno vinto. Ma chi ha detto che abbia vinto l'Europa? — ONIRIXA",
      },
      {
        name: "description",
        content:
          "La caduta di Vučić non significa necessariamente una vittoria dell'europeismo. La Serbia resta sospesa tra Bruxelles, Mosca e Pechino.",
      },
      {
        property: "og:title",
        content:
          "Gli studenti hanno vinto. Ma chi ha detto che abbia vinto l'Europa?",
      },
      {
        property: "og:description",
        content:
          "La Serbia dopo Vučić: la protesta contro il potere, gli interrogativi sull'europeismo e gli equilibri tra Europa, Russia e Cina.",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: ArticoloGliStudentiHannoVinto,
});
```