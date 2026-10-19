import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { EditorialFooter, EditorialHeader } from "@/components/onirixa/editorial-chrome";
import trumpPutinCover from "@/assets/onirixa/trump-putin-alaska.jpg";

export const Route = createFileRoute("/articolo/trump-diesel-russo")({
  head: () => ({
    meta: [
      { title: "Trump riapre al diesel russo: accordo con Putin per frenare i prezzi — ONIRIXA" },
      { name: "description", content: "Washington allenta temporaneamente le sanzioni sul combustibile russo: oltre 300.000 tonnellate di diesel in arrivo, tra critiche di Kiev e del Congresso." },
      { property: "og:title", content: "Trump riapre al diesel russo: accordo con Putin per frenare i prezzi" },
      { property: "og:description", content: "Washington allenta temporaneamente le sanzioni sul combustibile russo: oltre 300.000 tonnellate di diesel in arrivo, tra critiche di Kiev e del Congresso." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticoloTrumpDieselRusso,
});

const intro = [
  "Il presidente degli Stati Uniti Donald Trump ha annunciato un accordo con il presidente russo Vladimir Putin per aumentare le forniture di diesel russo, nel tentativo di contenere il rincaro dei carburanti negli Stati Uniti. La decisione, comunicata il 9 ottobre, è accompagnata da un allentamento temporaneo delle sanzioni americane sul combustibile di origine russa e segna un cambiamento significativo nella strategia energetica di Washington nei confronti di Mosca.",
];

const paragraphGroups: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Le forniture e la sospensione delle sanzioni",
    paragraphs: [
      "Secondo quanto dichiarato da Trump sul proprio social network Truth Social, la Russia dovrebbe immettere inizialmente sul mercato oltre 300.000 tonnellate di diesel, seguite da altre 500.000 a novembre e da ulteriori forniture nei mesi successivi. L'intesa mira ad aumentare la disponibilità di carburante sul mercato internazionale, in una fase caratterizzata da prezzi elevati e tensioni sulle forniture energetiche.",
      "Il Dipartimento del Tesoro statunitense ha contestualmente autorizzato, attraverso una licenza temporanea, alcune operazioni relative alla vendita, al trasporto e all'importazione di diesel russo. La deroga riguarda specifiche partite di carburante già caricate sulle navi entro il 9 ottobre e consente le operazioni previste fino all'aprile 2027. Non si tratta quindi di una revoca generalizzata delle sanzioni contro la Russia.",
    ],
  },
  {
    heading: "Perché Trump punta sul diesel russo",
    paragraphs: [
      "La decisione arriva mentre il costo del diesel negli Stati Uniti è sottoposto a forti pressioni, con conseguenze per il trasporto merci, l'agricoltura e la logistica. L'aumento dei prezzi energetici rappresenta inoltre un tema politicamente sensibile in vista delle elezioni di metà mandato del 3 novembre.",
      "Gli analisti, tuttavia, invitano alla cautela sull'efficacia dell'accordo. Le quantità annunciate potrebbero contribuire ad aumentare l'offerta, ma difficilmente sarebbero sufficienti, da sole, a determinare una riduzione consistente e duratura dei prezzi negli Stati Uniti. Restano inoltre da chiarire i tempi effettivi delle consegne e la capacità delle raffinerie russe di sostenere i volumi previsti.",
    ],
  },
  {
    heading: "Le reazioni di Kiev e del Congresso",
    paragraphs: [
      "L'annuncio ha provocato critiche in Ucraina e negli stessi Stati Uniti. Il presidente ucraino Volodymyr Zelensky ha contestato la decisione, sostenendo che la riapertura del mercato al carburante russo rischia di favorire economicamente Mosca mentre prosegue la guerra. Anche sei senatori statunitensi, appartenenti sia al Partito repubblicano sia a quello democratico, hanno chiesto all'amministrazione di rivedere la misura, sollevando dubbi sulla sua coerenza con la legislazione americana sulle sanzioni energetiche russe.",
      "L'accordo riporta così al centro del dibattito il rapporto tra sicurezza energetica e politica estera. Washington punta ad aumentare l'offerta di carburante e a contenere i costi per consumatori e imprese, ma l'allentamento delle restrizioni rischia di ridurre la pressione economica esercitata sulla Russia dall'inizio dell'invasione dell'Ucraina.",
    ],
  },
];

function ArticoloTrumpDieselRusso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorialHeader compact />

      <main className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="border-b border-border py-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">← Homepage</Link>
        </div>

        <article>
          <header className="pt-12 sm:pt-20">
            <p className="font-sans text-[11px] uppercase tracking-wide text-muted-foreground">Esteri <span className="mx-2">·</span> 12 ottobre 2026 <span className="mx-2">·</span> 3 min di lettura</p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,7vw,4.6rem)] font-bold leading-[1.08]">Trump riapre al diesel russo: accordo con Putin per frenare i prezzi</h1>
            <p className="mt-7 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">Washington allenta temporaneamente le sanzioni sul combustibile russo: oltre 300.000 tonnellate di diesel in arrivo, tra critiche di Kiev e del Congresso.</p>
          </header>

          <div className="mx-auto mt-12 max-w-2xl space-y-6 font-display text-[17px] leading-[1.85] sm:text-[18px]">
            {intro.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className={paragraphIndex === 0
                  ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-display first-letter:text-[54px] first-letter:font-bold first-letter:leading-[0.85]"
                  : undefined}
              >
                {paragraph}
              </p>
            ))}

            <figure className="my-10">
              <img src={trumpPutinCover} alt="Donald Trump accoglie Vladimir Putin in Alaska, il 15 agosto 2025" className="h-auto w-full" />
              <figcaption className="mt-3 font-sans text-xs text-muted-foreground">Donald Trump accoglie Vladimir Putin alla Joint Base Elmendorf-Richardson, ad Anchorage, Alaska, il 15 agosto 2025. Foto: Benjamin Applebaum / U.S. Department of Defense.</figcaption>
            </figure>

            {paragraphGroups.map((group) => (
              <div key={group.heading}>
                <h2 className="mb-5 mt-12 border-t border-border pt-8 font-display text-[26px] font-bold leading-tight sm:text-[30px]">{group.heading}</h2>
                {group.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-foreground pt-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
            <p>Immagine di copertina: Benjamin Applebaum, U.S. Department of Defense.</p>
            <div className="mt-5 flex items-center justify-between">
              <span>ONIRIXA</span>
              <Link to="/" className="transition-colors hover:text-foreground">Torna alla homepage →</Link>
            </div>
          </div>
        </article>
      </main>

      <EditorialFooter />
    </div>
  );
}
