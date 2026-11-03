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
