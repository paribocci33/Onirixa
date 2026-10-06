import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { EditorialFooter, EditorialHeader } from "@/components/onirixa/editorial-chrome";
import icecubeCover from "@/assets/onirixa/icecube-south-pole.jpg";

export const Route = createFileRoute("/articolo/nobel-halzen")({
  head: () => ({
    meta: [
      { title: "Nobel per la Fisica 2026 a Francis Halzen — ONIRIXA" },
      { name: "description", content: "Il fisico belga-statunitense riceve il Nobel per aver trasformato il ghiaccio dell'Antartide in un osservatorio capace di catturare i neutrini provenienti dagli angoli più remoti dell'Universo." },
      { property: "og:title", content: "Nobel per la Fisica 2026 a Francis Halzen: premiato il “cacciatore di particelle fantasma”" },
      { property: "og:description", content: "Il ghiaccio dell'Antartide è diventato un telescopio: la storia di IceCube e del premio Nobel a Francis Halzen." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticoloNobelHalzen,
});

const paragraphGroups: { heading?: string; paragraphs: string[] }[] = [
  {
    paragraphs: [
      "Il Premio Nobel per la Fisica 2026 è stato assegnato a Francis Halzen, fisico belga naturalizzato statunitense dell'Università del Wisconsin-Madison, per il suo ruolo decisivo nello sviluppo dell'osservatorio IceCube e nella scoperta dei neutrini ad alta energia di origine astrofisica.",
      "L'annuncio è arrivato oggi dalla Reale Accademia Svedese delle Scienze, che ha riconosciuto a Halzen il merito di aver aperto una nuova finestra sull'Universo grazie allo studio di queste particelle estremamente elusive, note anche come “particelle fantasma”.",
    ],
  },
  {
    heading: "Un telescopio nascosto sotto il ghiaccio dell'Antartide",
    paragraphs: [
      "L'intuizione che ha portato al Nobel risale al 1988, quando Halzen propose di utilizzare il ghiaccio del Polo Sud come gigantesco rivelatore naturale di neutrini. Da quell'idea è nato IceCube, un osservatorio costruito nelle profondità dei ghiacci antartici e dotato di migliaia di sensori in grado di individuare i rarissimi segnali prodotti dall'interazione dei neutrini con la materia.",
      "L'impianto, completato nel 2011, occupa un volume di circa un chilometro cubo di ghiaccio. Grazie a questa infrastruttura, gli scienziati sono riusciti a rilevare neutrini provenienti da regioni molto lontane del cosmo, fornendo informazioni preziose su alcuni dei fenomeni più energetici dell'Universo.",
    ],
  },
  {
    heading: "Cosa sono i neutrini",
    paragraphs: [
      "I neutrini sono particelle subatomiche estremamente leggere che attraversano continuamente la Terra e il nostro corpo senza lasciare tracce visibili. Interagiscono con la materia solo in casi rarissimi, motivo per cui sono stati soprannominati “particelle fantasma”.",
      "A differenza di altre particelle cosmiche, i neutrini possono viaggiare per miliardi di anni luce senza deviare dalla loro traiettoria né perdere energia. Questo li rende messaggeri unici, capaci di trasportare informazioni dirette su buchi neri, stelle in esplosione e altri eventi estremi che avvengono nell'Universo profondo.",
    ],
  },
  {
    heading: "Una nuova era dell'astronomia",
    paragraphs: [
      "Secondo il Comitato Nobel, il lavoro di Halzen ha dato origine a una vera e propria forma di astronomia dei neutrini, complementare alle osservazioni tradizionali basate sulla luce e sulle onde elettromagnetiche. Le osservazioni effettuate con IceCube stanno infatti aiutando gli scienziati a comprendere meglio l'origine dei raggi cosmici e i meccanismi che alimentano gli eventi più violenti del cosmo.",
      "Nel motivare il premio, l'Accademia svedese ha sottolineato come la visione scientifica e la perseveranza di Halzen abbiano consentito alla comunità scientifica di costruire uno strumento che sta cambiando la nostra comprensione dell'Universo.",
      "Con questo riconoscimento, Francis Halzen entra nell'albo d'oro del Nobel accanto ad alcuni dei più grandi protagonisti della fisica moderna, premiato per aver trasformato un'intuizione audace in uno degli strumenti scientifici più innovativi del XXI secolo.",
    ],
  },
];

function ArticoloNobelHalzen() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorialHeader compact />

      <main className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="border-b border-border py-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">← Homepage</Link>
        </div>

        <article>
          <header className="pt-12 sm:pt-20">
            <p className="font-sans text-[11px] uppercase tracking-wide text-muted-foreground">Scienza <span className="mx-2">·</span> 6 ottobre 2026 <span className="mx-2">·</span> 3 min di lettura</p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,7vw,4.6rem)] font-bold leading-[1.08]">Nobel per la Fisica 2026 a Francis Halzen: premiato il "cacciatore di particelle fantasma"</h1>
            <p className="mt-7 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">Il fisico belga-statunitense riceve il Nobel per aver trasformato il ghiaccio dell'Antartide in un osservatorio capace di catturare i neutrini provenienti dagli angoli più remoti dell'Universo.</p>
            <p className="mt-6 font-sans text-xs text-muted-foreground">Di Anselmo Paribocci</p>
          </header>

          <figure className="mt-10">
            <img src={icecubeCover} alt="L'IceCube Laboratory al Polo Sud di notte, sotto la Via Lattea e l'aurora australe" className="h-auto w-full" />
            <figcaption className="mt-3 font-sans text-xs text-muted-foreground">L'IceCube Laboratory al Polo Sud. Foto: John Hardin (CC BY 4.0).</figcaption>
          </figure>

          <div className="mx-auto mt-12 max-w-2xl space-y-6 font-display text-[17px] leading-[1.85] sm:text-[18px]">
            {paragraphGroups.map((group, groupIndex) => (
              <div key={group.heading ?? `intro-${groupIndex}`}>
                {group.heading && <h2 className="mb-5 mt-12 border-t border-border pt-8 font-display text-[26px] font-bold leading-tight sm:text-[30px]">{group.heading}</h2>}
                {group.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className={groupIndex === 0 && paragraphIndex === 0
                      ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-display first-letter:text-[54px] first-letter:font-bold first-letter:leading-[0.85]"
                      : undefined}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-foreground pt-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
            <p>Immagine di copertina: John Hardin, licenza Creative Commons Attribution 4.0 (CC BY 4.0).</p>
            <div className="mt-5 flex items-center justify-between">
              <span>Anselmo Paribocci</span>
              <Link to="/" className="transition-colors hover:text-foreground">Torna alla homepage →</Link>
            </div>
          </div>
        </article>
      </main>

      <EditorialFooter />
    </div>
  );
}
