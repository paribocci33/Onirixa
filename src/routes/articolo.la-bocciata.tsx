import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { EditorialFooter, EditorialHeader } from "@/components/onirixa/editorial-chrome";
import bocciataCover from "@/assets/onirixa/la-bocciata-cover.jpeg";

export const Route = createFileRoute("/articolo/la-bocciata")({
  head: () => ({
    meta: [
      { title: "La bocciata — Dai Ciampi boys ai Trump boys — ONIRIXA" },
      { name: "description", content: "Ogni epoca ha i suoi boys. Dai tecnocrati di Ciampi alla Silicon Valley di Trump: chi controlla i nuovi frontier men della Super Intelligence?" },
      { property: "og:title", content: "La bocciata — Dai Ciampi boys ai Trump boys" },
      { property: "og:description", content: "La frontiera si è spostata dall'altra parte dell'Atlantico e ha cambiato natura: dalla finanza alla Super Intelligence. La rubrica del direttore." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticoloLaBocciata,
});

const paragraphs: string[] = [
  "Ogni epoca ha i suoi boys. Negli anni Novanta furono i Ciampi boys, la generazione di economisti, tecnocrati e funzionari che si raccolse attorno a Carlo Azeglio Ciampi e che avrebbe avuto in Mario Draghi il suo esponente più noto. Il termine, entrato persino nel vocabolario Treccani, indicava proprio i collaboratori e gli uomini che si riconoscevano nella scuola di Ciampi. Era l'Italia della lira, del debito pubblico, delle privatizzazioni e dell'ingresso nell'euro: la frontiera da conquistare era quella della finanza e dell'integrazione europea.",
  "A distanza di trent'anni, la frontiera sembra essersi spostata dall'altra parte dell'Atlantico e, soprattutto, aver cambiato natura. Oggi si chiama Super Intelligence. Donald Trump, il 29 settembre, ha riunito alla Casa Bianca alcuni dei principali protagonisti dell'industria tecnologica americana e, nello stesso giorno, ha firmato un ordine esecutivo con cui l'amministrazione federale ha deciso di sostituire nei propri documenti ufficiali il termine Artificial Intelligence con Super Intelligence.",
  "E allora viene quasi spontaneo chiedersi se, accanto alla nuova frontiera, non stia nascendo anche una nuova generazione di boys: i Trump boys.",
  "Il paragone, naturalmente, non va preso alla lettera. I Ciampi boys erano soprattutto uomini delle istituzioni, formati nella cultura economica e amministrativa dello Stato. I nuovi protagonisti della frontiera americana arrivano invece in gran parte dalla Silicon Valley: sono uomini che non rappresentano semplicemente lo Stato, ma aziende che possiedono una parte dell'infrastruttura dalla quale lo Stato dipenderà sempre di più. Chip, modelli, cloud, capitale e data center sono diventati elementi della potenza nazionale tanto quanto lo erano, per la generazione precedente, la moneta, il debito e le banche.",
  "Ed è proprio qui che il parallelo diventa interessante. I Ciampi boys portarono la competenza tecnica dentro le istituzioni; i Trump boys sembrano portare le istituzioni al tavolo con chi possiede la competenza, i capitali e le infrastrutture tecnologiche. La recente intesa sulla sicurezza della Super Intelligence, costruita attorno a impegni volontari delle grandi società tecnologiche, rappresenta bene questo nuovo rapporto: la regolazione di una tecnologia ancora in piena espansione viene discussa direttamente con coloro che quella tecnologia la stanno costruendo.",
  "Non è necessariamente una stranezza americana. È, piuttosto, una delle conseguenze della velocità con cui la tecnologia sta cambiando il rapporto tra Stato e mercato. Quando la legge arriva dopo l'innovazione, il legislatore si trova inevitabilmente a parlare con chi è già sulla frontiera. E qui ritorna il vecchio spirito del Far West, evocato anche nell'articolo sull'accordo della Casa Bianca: prima si conquista il territorio, poi si decide come amministrarlo.",
  "La differenza è che questa volta il territorio non è fatto di praterie, ma di server e capacità di calcolo; e i nuovi frontier men non portano la Colt alla cintura, ma fondano società da migliaia di miliardi di dollari.",
  "Forse è proprio questo il vero significato del passaggio dai Ciampi boys ai Trump boys: non il semplice avvicendamento di una classe dirigente con un'altra, ma il passaggio da un'epoca nella quale la politica cercava di governare la trasformazione economica a una nella quale deve imparare a governare una trasformazione tecnologica che, spesso, corre più velocemente delle sue stesse regole.",
  "E resta una domanda, che valeva allora come vale oggi: quando una nuova classe di uomini arriva sulla frontiera, chi controlla i frontier men?",
];

function ArticoloLaBocciata() {
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
            <p className="mt-4 font-sans text-[11px] uppercase tracking-wide text-muted-foreground">Rubrica del direttore <span className="mx-2">·</span> 2 ottobre 2026 <span className="mx-2">·</span> 5 min di lettura</p>
            <h1 className="mt-5 text-balance font-display text-[clamp(2.5rem,7vw,4.6rem)] font-bold leading-[1.08]">Dai Ciampi boys ai Trump boys</h1>
            <p className="mt-7 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">Ogni epoca ha i suoi boys. La frontiera si è spostata dall'altra parte dell'Atlantico e ha cambiato natura: dalla finanza e dall'integrazione europea alla Super Intelligence.</p>
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

          <p className="mx-auto mt-14 max-w-2xl border-l-2 border-foreground pl-5 font-display text-[22px] font-bold leading-[1.45]">Quando una nuova classe di uomini arriva sulla frontiera, chi controlla i frontier men?</p>

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
