import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { EditorialFooter, EditorialHeader } from "@/components/onirixa/editorial-chrome";
import bocciataCover from "@/assets/onirixa/la-bocciata-cover.jpeg";

export const Route = createFileRoute("/articolo/francia-spesa-pubblica")({
  head: () => ({
    meta: [
      { title: "La bocciata — La Francia spende più dell'Unione Sovietica? — ONIRIXA" },
      { name: "description", content: "Una frase provocatoria che contiene un fondo di verità. Ma non quello che molti immaginano. La rubrica del direttore." },
      { property: "og:title", content: "La bocciata — La Francia spende più dell'Unione Sovietica?" },
      { property: "og:description", content: "Spesa pubblica, debito e costo degli interessi: perché il paragone tra Parigi e l'URSS continua a riemergere. La rubrica del direttore." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticoloFranciaSpesaPubblica,
});

const paragraphs: string[] = [
  "Ogni tanto emerge una statistica talmente controintuitiva da sembrare falsa. L'ultima riguarda la Francia: secondo alcuni commentatori, oggi Parigi spenderebbe una quota della propria ricchezza nazionale superiore a quella sostenuta dall'Unione Sovietica negli anni che precedettero il collasso del 1991.",
  "Detta così sembra l'ennesima esagerazione da social network.",
  "Eppure vale la pena approfondire.",
  "La Francia è oggi uno dei Paesi avanzati con il più alto livello di spesa pubblica. Negli ultimi anni la spesa dello Stato e degli enti pubblici si è collocata stabilmente tra il 55% e il 58% del PIL, con punte ancora più elevate durante la pandemia.",
  "In altre parole, più di metà della ricchezza prodotta ogni anno nel Paese transita direttamente o indirettamente attraverso il settore pubblico.",
  "È da qui che nasce il paragone con l'URSS.",
  "Secondo alcune ricostruzioni storiche, alla fine degli anni Ottanta la spesa pubblica sovietica, rapportata alla dimensione dell'economia, si collocava su livelli comparabili o inferiori rispetto a quelli della Francia contemporanea.",
  "La conclusione, però, sarebbe sbagliata.",
  "L'Unione Sovietica non era uno Stato sociale come lo intendiamo oggi. Era un'economia pianificata nella quale imprese, banche, industria e agricoltura erano controllate direttamente dallo Stato. Confrontare i due sistemi utilizzando una singola statistica equivale a confrontare due bilanci costruiti con regole completamente diverse.",
  "La provocazione, tuttavia, ha il merito di evidenziare un dato reale: la Francia è arrivata a livelli di spesa pubblica eccezionalmente elevati per un'economia sviluppata.",
  "Non a caso il Paese convive oggi con un debito pubblico superiore al 110% del PIL e con disavanzi che negli ultimi anni hanno più volte attirato l'attenzione delle istituzioni europee.",
  "Ma il dato più interessante potrebbe essere un altro: il costo degli interessi.",
  "Per oltre un decennio la Francia, come il resto dell'Europa, ha beneficiato di tassi d'interesse eccezionalmente bassi. Il debito cresceva, ma il costo per finanziarlo rimaneva gestibile. Oggi quello scenario è cambiato. Con il ritorno di tassi più elevati, una quota crescente delle entrate pubbliche viene assorbita semplicemente per pagare gli interessi sul debito accumulato negli anni precedenti.",
  "È qui che il dibattito smette di essere ideologico e torna a essere matematico.",
  "Uno Stato può aumentare la spesa, espandere il welfare e ricorrere al deficit per molto tempo. Quello che non può fare indefinitamente è finanziare una montagna di debito a costi sempre crescenti.",
  "Paradossalmente, il confronto con l'Unione Sovietica diventa interessante proprio a questo punto. L'URSS non fallì perché aveva troppo debito. Il suo debito era relativamente contenuto rispetto agli standard occidentali. Fallì perché la sua economia non era più in grado di sostenere il peso del sistema che aveva costruito.",
  "La Francia si trova oggi in una situazione completamente diversa. Ma la domanda che emerge da questa provocazione resta legittima: quanto a lungo uno Stato può continuare ad aumentare spesa, debito e costo degli interessi senza compromettere la propria sostenibilità finanziaria?",
  "Forse è per questo che il paragone continua a riemergere. Non perché la Francia assomigli all'Unione Sovietica, ma perché sempre più osservatori si chiedono se il modello economico francese stia avvicinandosi ai propri limiti.",
];

function ArticoloFranciaSpesaPubblica() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorialHeader compact />

      <main className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="border-b border-border py-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">← Homepage</Link>
        </div>

        <article>
          <header className="pt-12 sm:pt-20">
            <p className="font-display text-2xl font-bold sm:text-3xl">La bocciata</p>
            <p className="mt-4 font-sans text-[11px] uppercase tracking-wide text-muted-foreground">Rubrica del direttore <span className="mx-2">·</span> 19 ottobre 2026 <span className="mx-2">·</span> 4 min di lettura</p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,7vw,4.6rem)] font-bold leading-[1.08]">La Francia spende più dell'Unione Sovietica?</h1>
            <p className="mt-7 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">Una frase provocatoria che contiene un fondo di verità. Ma non quello che molti immaginano.</p>
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

          <p className="mx-auto mt-14 max-w-2xl border-l-2 border-foreground pl-5 font-display text-[22px] font-bold leading-[1.45]">Quanto a lungo uno Stato può continuare ad aumentare spesa, debito e costo degli interessi senza compromettere la propria sostenibilità?</p>

          <div className="mt-14 flex items-center justify-between border-t border-foreground pt-5 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">
            <span>La bocciata · Rubrica del direttore</span>
            <Link to="/" className="transition-colors hover:text-foreground">Torna alla homepage →</Link>
          </div>
        </article>
      </main>

      <EditorialFooter />
    </div>
  );
}
