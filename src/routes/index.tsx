import { createFileRoute, Link } from "@tanstack/react-router";
import aiCover from "@/assets/onirixa/ai-reader-cover.jpg";
import bocciataCover from "@/assets/onirixa/la-bocciata-cover.jpeg";
import { EditorialFooter, EditorialHeader } from "@/components/onirixa/editorial-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONIRIXA — Idee sul presente" },
      { name: "description", content: "ONIRIXA è una rivista editoriale indipendente dedicata a società, tecnologia, lavoro, Milano e cultura." },
      { property: "og:title", content: "ONIRIXA — Idee sul presente" },
      { property: "og:description", content: "Una rivista indipendente per leggere il presente con più tempo e meno rumore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Article = {
  id?: string;
  category: string;
  date: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  href?: "/articolo/la-bocciata" | "/articolo/corsa-ai-conto";
  cover?: string;
  coverAlt?: string;
  readingTime?: string;
  author?: string;
};

// Add new articles here with an ISO publication date; the newest automatically leads the home.
const articles: Article[] = [
  {
    id: "societa",
    category: "La bocciata",
    date: "2 ottobre 2026",
    publishedAt: "2026-10-02",
    title: "Dai Ciampi boys ai Trump boys",
    excerpt: "Ogni epoca ha i suoi boys. La frontiera si è spostata dall'altra parte dell'Atlantico e ha cambiato natura: dalla finanza alla Super Intelligence.",
    href: "/articolo/la-bocciata",
    cover: bocciataCover,
    coverAlt: "Disegno a penna di un uomo in giacca che lancia una boccia",
    readingTime: "5 min di lettura",
  },
  {
    id: "tecnologia",
    category: "Tecnologia",
    date: "28 settembre 2026",
    publishedAt: "2026-09-28",
    title: "La grande corsa all’AI ha un problema: il conto",
    excerpt: "Le previsioni sull’estinzione dell’umanità arrivano mentre l’industria brucia capitali enormi. Quanto è sostenibile la corsa che sta costruendo l’intelligenza artificiale?",
    href: "/articolo/corsa-ai-conto",
    cover: aiCover,
    coverAlt: "Scrivania con computer e schermi in uno studio",
    readingTime: "8 min di lettura",
    author: "Filippo Bocciolesi",
  },
  {
    category: "Tecnologia",
    date: "24 settembre 2026",
    publishedAt: "2026-09-24",
    title: "Gli algoritmi hanno imparato la cortesia",
    excerpt: "Come il machine learning sta ridefinendo il tono delle conversazioni digitali, e cosa perdiamo quando una macchina impara a rassicurarci.",
  },
  {
    category: "Media",
    date: "19 settembre 2026",
    publishedAt: "2026-09-19",
    title: "Lo smartphone diventa una camera oscura",
    excerpt: "Il ritorno della fotografia analogica nelle mani di una generazione cresciuta dentro gli schermi.",
  },
  {
    category: "Digitale",
    date: "15 settembre 2026",
    publishedAt: "2026-09-15",
    title: "La memoria che non ci appartiene",
    excerpt: "Chi custodisce i nostri ricordi quando li affidiamo al cloud, e quale parte della nostra storia resta davvero nostra.",
  },
  {
    id: "lavoro",
    category: "Lavoro",
    date: "10 settembre 2026",
    publishedAt: "2026-09-10",
    title: "Il lavoro che nessuno ha ancora inventato",
    excerpt: "Le competenze che faranno la differenza nei prossimi cinque anni non sono necessariamente quelle che oggi sappiamo misurare.",
  },
  {
    category: "Analisi",
    date: "5 settembre 2026",
    publishedAt: "2026-09-05",
    title: "Produttività: la parola più abusata del decennio",
    excerpt: "Perché misurare il tempo non significa rendere il lavoro migliore, né comprendere ciò che produce davvero valore.",
  },
  {
    id: "milano",
    category: "Milano",
    date: "30 agosto 2026",
    publishedAt: "2026-08-30",
    title: "La città che ha imparato a respirare",
    excerpt: "Strade, verde e tempo: la nuova geografia urbana di Milano raccontata da chi la attraversa ogni giorno.",
  },
  {
    category: "Economia locale",
    date: "22 agosto 2026",
    publishedAt: "2026-08-22",
    title: "Botteghe: l’economia che non si fa online",
    excerpt: "Le piccole imprese che stanno riscrivendo i quartieri, lontano dalle retoriche della città vetrina.",
  },
  {
    category: "Innovazione urbana",
    date: "14 agosto 2026",
    publishedAt: "2026-08-14",
    title: "Innovation district: oltre la vetrina",
    excerpt: "Quello che cambia davvero nei quartieri in trasformazione, tra investimenti, spazi pubblici e nuove disuguaglianze.",
  },
  {
    id: "cultura",
    category: "Cultura",
    date: "8 agosto 2026",
    publishedAt: "2026-08-08",
    title: "Il libro che ci aiuta a leggere il presente",
    excerpt: "Storie e idee che continuano a parlarci anche fuori dalla pagina e oltre il tempo della novità.",
  },
  {
    category: "Media",
    date: "1 agosto 2026",
    publishedAt: "2026-08-01",
    title: "Perché i media che amiamo stanno cambiando",
    excerpt: "Tra streaming, carta e parola: i nuovi linguaggi della cultura e le abitudini che trasformano il nostro sguardo.",
  },
];

const sortedArticles = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
const featured = sortedArticles.find((article) => article.href);
const latest = sortedArticles.filter((article) => article !== featured);

function Index() {
  if (!featured) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorialHeader />

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <section id={featured.id} aria-labelledby="featured-title" className="scroll-mt-8">
          <p className="mb-6 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">In evidenza</p>
          <Link to={featured.href ?? "/"} className="group block">
            <div>
              {featured.category === "La bocciata" && <p className="mb-5 font-display text-2xl font-bold sm:text-3xl">La bocciata</p>}
              <div className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-[11px] uppercase tracking-wide text-muted-foreground">
                {featured.category !== "La bocciata" && <><span>{featured.category}</span><span aria-hidden="true">·</span></>}<time dateTime={featured.publishedAt}>{featured.date}</time>{featured.readingTime && <><span aria-hidden="true">·</span><span>{featured.readingTime}</span></>}
              </div>
              <h1 id="featured-title" className="mt-5 text-balance font-display text-[clamp(2.35rem,7vw,4.75rem)] font-bold leading-[1.08] text-foreground decoration-1 underline-offset-8 group-hover:underline">
                {featured.title}
              </h1>
              <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {featured.excerpt}
              </p>
              {featured.author && <p className="mt-6 font-sans text-xs text-muted-foreground">Di {featured.author}</p>}
            </div>
            {featured.cover && <div className="mx-auto mt-9 max-w-md overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.coverAlt ?? ""}
                className="h-auto w-full transition duration-700 group-hover:scale-[1.01]"
              />
            </div>}
          </Link>
        </section>

        <section aria-labelledby="latest-title" className="mt-24 sm:mt-32">
          <div className="border-b border-foreground pb-4">
            <h2 id="latest-title" className="font-sans text-[11px] font-medium uppercase tracking-[0.18em]">Ultimi articoli</h2>
          </div>
          <div>
            {latest.map((article) => (
              <article key={article.title} id={article.id} className="scroll-mt-8 border-b border-border py-10 sm:py-14">
                {"href" in article && article.href ? (
                  <Link to={article.href} className="group block">
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      <span className={article.category === "La bocciata" ? "font-display text-lg font-bold normal-case text-foreground" : undefined}>{article.category}</span><span aria-hidden="true">·</span><time dateTime={article.publishedAt}>{article.date}</time>
                    </div>
                    <h3 className="mt-4 max-w-[25ch] text-balance font-display text-[clamp(1.8rem,5vw,2.75rem)] font-bold leading-[1.15] decoration-1 underline-offset-8 group-hover:underline">{article.title}</h3>
                    <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-muted-foreground sm:text-base">{article.excerpt}</p>
                  </Link>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-sans text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      <span className={article.category === "La bocciata" ? "font-display text-lg font-bold normal-case text-foreground" : undefined}>{article.category}</span><span aria-hidden="true">·</span><time dateTime={article.publishedAt}>{article.date}</time>
                    </div>
                    <h3 className="mt-4 max-w-[25ch] text-balance font-display text-[clamp(1.8rem,5vw,2.75rem)] font-bold leading-[1.15]">{article.title}</h3>
                    <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-muted-foreground sm:text-base">{article.excerpt}</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <EditorialFooter />
    </div>
  );
}