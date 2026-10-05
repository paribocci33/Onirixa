import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import aiCover from "@/assets/onirixa/ai-reader-cover.jpg";
import { EditorialFooter, EditorialHeader } from "@/components/onirixa/editorial-chrome";

export const Route = createFileRoute("/articolo/corsa-ai-conto")({
  head: () => ({
    meta: [
      { title: "La grande corsa all'AI ha un problema: il conto — ONIRIXA" },
      { name: "description", content: "Le previsioni sull'estinzione dell'umanità arrivano mentre l'industria brucia capitali enormi. Quanto è sostenibile la corsa che sta costruendo l'intelligenza artificiale?" },
      { property: "og:title", content: "La grande corsa all'AI ha un problema: il conto" },
      { property: "og:description", content: "Previsioni apocalittiche e investimenti senza precedenti: la domanda urgente non è se l'AI ci distruggerà, ma se l'economia che stiamo costruendo intorno ad essa sia sostenibile oggi." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticoloCorsaAiConto,
});

const paragraphGroups: { heading?: string; paragraphs: string[] }[] = [
  {
    paragraphs: [
      "A settembre Jacob Coxon, ricercatore che ha lavorato sia per OpenAI sia per Anthropic, ha lasciato quest'ultima con un messaggio destinato a fare molto rumore: le aziende di AI, secondo lui, stanno correndo verso una forma di intelligenza artificiale capace di migliorarsi autonomamente, senza aver ancora risolto il problema di come mantenerla sotto controllo.",
      "Poco dopo, Evan Hubinger, responsabile della ricerca sull'allineamento di Anthropic, ha dichiarato di ritenere superiore al 10% la probabilità che l'AI possa uccidere tutta l'umanità entro il prossimo decennio.",
      "Numeri del genere sono impossibili da verificare scientificamente nel senso tradizionale del termine. Non esiste infatti un campione di precedenti superintelligenze sul quale calcolare una probabilità. Sono valutazioni prospettiche, basate su ipotesi estremamente incerte.",
      "Ma il punto interessante è un altro.",
    ],
  },
  {
    heading: "La paura arriva mentre l'industria corre",
    paragraphs: [
      "Le dichiarazioni di Coxon e Hubinger arrivano proprio mentre l'industria dell'intelligenza artificiale sta attraversando una fase di investimenti senza precedenti. La costruzione dell'infrastruttura necessaria per addestrare e far funzionare i nuovi modelli richiede enormi quantità di chip, energia e data center.",
      "Il problema è che i costi stanno crescendo mentre non è ancora altrettanto chiaro se i ricavi futuri saranno sufficienti a giustificare questa corsa.",
      "Il Financial Times ha riferito che OpenAI prevede quasi 280 miliardi di dollari di free cash flow negativo tra il 2026 e il 2030 e circa 856 miliardi di dollari di spesa per capacità di calcolo e infrastrutture nello stesso periodo.",
      "Una stima di Wharton ha inoltre osservato che l'enorme scommessa infrastrutturale di Big Tech richiederebbe una crescita della produttività dell'AI molto elevata per essere pienamente giustificata.",
      "La domanda, quindi, non è soltanto quanto sarà intelligente l'AI. È anche: quanto vale davvero l'AI che stiamo costruendo?",
    ],
  },
  {
    heading: "Il paradosso della superintelligenza",
    paragraphs: [
      "Qui nasce una contraddizione difficile da ignorare. Le aziende che stanno costruendo i sistemi più avanzati ci dicono contemporaneamente due cose: l'intelligenza artificiale è una tecnologia potentissima e potenzialmente pericolosa; dobbiamo quindi rallentare.",
      "È perfettamente possibile che queste preoccupazioni siano sincere. Coxon, per esempio, ha descritto il rischio come conseguenza della corsa competitiva verso sistemi sempre più autonomi, mentre Anthropic ha dichiarato a WIRED di sostenere una forma di coordinamento verificabile tra i laboratori per gestire il ritmo di sviluppo.",
      "Ma esiste anche un'altra possibilità, che merita almeno di essere discussa: la narrativa del rischio può diventare utile anche all'industria stessa.",
      "Se l'AI è una tecnologia quasi apocalittica, allora diventa naturale chiedere regole, controlli e barriere all'ingresso. E chi dispone già dei modelli più avanzati, dei capitali e dei data center è nella posizione migliore per sostenere il costo di queste regole.",
      "Questo non dimostra l'esistenza di una strategia coordinata. Ma mostra un possibile effetto collaterale della narrativa: spostare il dibattito dal valore economico attuale dell'AI verso una questione molto più astratta e difficile da verificare, quella della sopravvivenza dell'umanità.",
    ],
  },
  {
    heading: "La bolla potrebbe essere anche narrativa",
    paragraphs: [
      "Negli ultimi anni abbiamo investito nell'AI sulla base di una promessa enorme: macchine sempre più intelligenti, capaci di trasformare la produttività, la ricerca e l'economia. Ora stiamo iniziando a vedere anche il conto.",
      "Miliardi investiti in infrastrutture. Data center da costruire. Chip da produrre. Aziende valutate sulla base di una crescita futura ancora tutta da dimostrare.",
      "Un'analisi di Rothschild & Co ha recentemente segnalato rischi proprio nel livello «compute» della filiera, dove alcuni contratti per capacità di calcolo potrebbero essere sostenuti da capitali esterni a condizioni difficili da mantenere nel lungo periodo.",
      "In questo contesto, parlare di una possibile superintelligenza che potrebbe cambiare per sempre il destino dell'umanità sposta inevitabilmente l'attenzione verso il futuro più lontano.",
      "La domanda più urgente potrebbe non essere se l'AI ci distruggerà tra dieci anni. Potrebbe essere se l'economia che stiamo costruendo intorno all'AI sia realmente sostenibile oggi.",
    ],
  },
];

function ArticoloCorsaAiConto() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorialHeader compact />

      <main className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="border-b border-border py-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">← Homepage</Link>
        </div>

        <article>
          <header className="pt-12 sm:pt-20">
            <p className="font-sans text-[11px] uppercase tracking-wide text-muted-foreground">Tecnologia <span className="mx-2">·</span> 28 settembre 2026 <span className="mx-2">·</span> 8 min di lettura</p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,7vw,4.6rem)] font-bold leading-[1.08]">La grande corsa all'AI ha un problema: il conto</h1>
            <p className="mt-7 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">Le previsioni sull'estinzione dell'umanità arrivano mentre l'industria brucia capitali enormi. Il problema non è soltanto capire quanto sarà potente l'intelligenza artificiale, ma quanto sia sostenibile la corsa che la sta costruendo.</p>
            <p className="mt-6 font-sans text-xs text-muted-foreground">Di Filippo Bocciolesi</p>
          </header>

          <div className="mt-10">
            <img src={aiCover} alt="Scrivania con computer e schermi in uno studio" className="h-auto w-full" />
          </div>

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

          <p className="mx-auto mt-14 max-w-2xl border-l-2 border-foreground pl-5 font-display text-[22px] font-bold leading-[1.45]">Perché una tecnologia può essere contemporaneamente rivoluzionaria e sopravvalutata.</p>

          <div className="mt-14 flex items-center justify-between border-t border-foreground pt-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
            <span>Filippo Bocciolesi</span>
            <Link to="/" className="transition-colors hover:text-foreground">Torna alla homepage →</Link>
          </div>
        </article>
      </main>

      <EditorialFooter />
    </div>
  );
}
