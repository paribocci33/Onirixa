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
