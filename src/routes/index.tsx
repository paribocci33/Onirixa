import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import aiImg from "@/assets/onirixa/ai-editorial.jpg";
import tech1Img from "@/assets/onirixa/tech-1.jpg";
import tech2Img from "@/assets/onirixa/tech-2.jpg";
import tech3Img from "@/assets/onirixa/tech-3.jpg";
import lavoro1Img from "@/assets/onirixa/lavoro-1.jpg";
import lavoro2Img from "@/assets/onirixa/lavoro-2.jpg";
import milano1Img from "@/assets/onirixa/milano-1.jpg";
import milano2Img from "@/assets/onirixa/milano-2.jpg";
import milano3Img from "@/assets/onirixa/milano-3.jpg";
import cultura1Img from "@/assets/onirixa/cultura-1.jpg";
import cultura2Img from "@/assets/onirixa/cultura-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ONIRIXA — Idee sul presente" },
      { name: "description", content: "ONIRIXA è un magazine indipendente di società, tecnologia, lavoro, Milano e cultura. Idee sul presente, senza rumore." },
      { property: "og:title", content: "ONIRIXA — Idee sul presente" },
      { property: "og:description", content: "Un magazine indipendente per capire società, tecnologia, lavoro, Milano e cultura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Società", href: "#societa" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Lavoro", href: "#lavoro" },
  { label: "Milano", href: "#milano" },
  { label: "Cultura", href: "#cultura" },
];

const sections = [
  {
    id: "tecnologia", title: "Tecnologia", intro: "Nuovi linguaggi, nuove domande.",
    stories: [
      { image: tech1Img, alt: "Rete neurale luminosa", title: "Gli algoritmi hanno imparato la cortesia", summary: "Come il machine learning sta ridefinendo il tono delle conversazioni digitali.", tag: "Intelligenza artificiale" },
      { image: tech2Img, alt: "Schermo illuminato al tramonto", title: "Lo smartphone diventa una camera oscura", summary: "Il ritorno della fotografia analogica nelle mani di una generazione digitale.", tag: "Media" },
      { image: tech3Img, alt: "Cubo di vetro nella luce", title: "La memoria che non ci appartiene", summary: "Chi custodisce i nostri ricordi quando li affidiamo al cloud?", tag: "Digitale" },
    ],
  },
  {
    id: "lavoro", title: "Lavoro", intro: "Come cambia quello che facciamo.",
    stories: [
      { image: lavoro1Img, alt: "Mani al lavoro su una scrivania", title: "Il lavoro che nessuno ha ancora inventato", summary: "Le competenze che faranno la differenza nei prossimi cinque anni.", tag: "Nuove competenze" },
      { image: lavoro2Img, alt: "Ufficio vuoto al mattino", title: "Produttività: la parola più abusata del decennio", summary: "Perché misurare il tempo non significa rendere il lavoro migliore.", tag: "Analisi" },
    ],
  },
  {
    id: "milano", title: "Milano", intro: "La città come laboratorio.",
    stories: [
      { image: milano1Img, alt: "Piazza milanese alla prima luce", title: "La città che ha imparato a respirare", summary: "Strade, verde e tempo: la nuova geografia urbana di Milano.", tag: "Città" },
      { image: milano2Img, alt: "Interno di una bottega artigiana", title: "Botteghe: l'economia che non si fa online", summary: "Le piccole imprese che stanno riscrivendo i quartieri.", tag: "Economia locale" },
      { image: milano3Img, alt: "Tram milanese al tramonto", title: "Innovation district: oltre la vetrina", summary: "Quello che cambia davvero nei quartieri in trasformazione.", tag: "Innovazione urbana" },
    ],
  },
  {
    id: "cultura", title: "Cultura", intro: "Libri, media e idee che restano.",
    stories: [
      { image: cultura1Img, alt: "Libri aperti su un tavolo", title: "Il libro che ci aiuta a leggere il presente", summary: "Storie e idee che continuano a parlarci anche fuori dalla pagina.", tag: "Libri" },
      { image: cultura2Img, alt: "Luce su uno spazio dedicato ai media", title: "Perché i media che amiamo stanno cambiando", summary: "Tra streaming, carta e parola: i nuovi linguaggi della cultura.", tag: "Media" },
    ],
  },
];

function StorySection({ section }: { section: typeof sections[number] }) {
  return (
    <section id={section.id} className="scroll-mt-24 border-t-2 border-ink pt-5 pb-12 md:pb-16">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-2">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{section.title}</h2>
        <p className="font-mono text-[11px] text-graphite">{section.intro}</p>
      </div>
      <div className={`grid gap-x-7 gap-y-9 ${section.stories.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {section.stories.map((story) => (
          <article key={story.title} className="group border-b border-border pb-6 md:border-b-0 md:pb-0">
            <div className="overflow-hidden bg-muted">
              <img src={story.image} alt={story.alt} width={1024} height={768} loading="lazy" className="aspect-[3/2] w-full object-cover grayscale-[18%] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0" />
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase text-accent">{story.tag}</p>
            <h3 className="mt-2 max-w-[30ch] font-display text-[22px] font-semibold leading-[1.13] text-ink md:text-[25px]">{story.title}</h3>
            <p className="mt-3 max-w-[45ch] text-sm leading-relaxed text-graphite">{story.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Index() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="border-b border-border bg-surface px-5 py-2 text-center font-mono text-[10px] uppercase text-graphite sm:px-8">
        Magazine indipendente · Idee sul presente
      </div>
      <header className="bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 md:py-7">
          <div className="flex flex-col">
            <span className="font-display text-[39px] font-black leading-none text-ink sm:text-[53px] md:text-[68px]">ONIRIXA<span className="text-accent">.</span></span>
            <span className="mt-2 font-mono text-[10px] uppercase text-graphite sm:text-xs">Idee sul presente</span>
          </div>
          <span className="hidden border-l border-border pl-5 font-mono text-[11px] uppercase text-graphite sm:block">Società / tecnologia / cultura<br />Una lettura diversa del presente</span>
        </div>
        <nav aria-label="Sezioni" className="border-y border-ink bg-surface px-5 sm:px-8">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto whitespace-nowrap py-3 md:gap-10">
            {navItems.map(item => <a key={item.label} href={item.href} className="font-sans text-xs font-bold uppercase text-ink transition-colors hover:text-accent">{item.label}</a>)}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="flex items-center justify-between border-b border-border py-4 font-mono text-[10px] uppercase text-graphite">
          <span>In primo piano</span><span>ONIRIXA / 01</span>
        </div>

        <section aria-label="In evidenza" className="grid gap-0 border-b border-border py-7 lg:grid-cols-[minmax(0,1.65fr)_minmax(270px,.7fr)] lg:gap-10 lg:py-9">
          <article className="min-w-0">
            <div className="overflow-hidden bg-muted"><img src={aiImg} alt="Una persona lavora al computer con una visualizzazione di dati sullo schermo" width={1600} height={900} className="aspect-[16/9] w-full object-cover" /></div>
            <div className="pt-5">
              <p className="font-mono text-[11px] uppercase text-accent">Tecnologia <span className="mx-2 text-graphite">/</span> 28 settembre 2026</p>
              <h1 className="mt-3 max-w-[22ch] font-display text-[36px] font-bold leading-[1.04] text-ink sm:text-[50px] lg:text-[57px]">E se la vera bolla dell'AI fosse la paura dell'AI?</h1>
              <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-graphite">L'intelligenza artificiale sta trasformando il lavoro e le nostre abitudini. Ma il cambiamento che temiamo è davvero quello che sta avvenendo?</p>
              <p className="mt-4 font-mono text-[11px] text-graphite">Di Marta Ferrero</p>
            </div>
          </article>
          <aside id="societa" className="mt-8 scroll-mt-24 border-t border-ink pt-5 lg:mt-0 lg:border-t-0 lg:border-l lg:border-border lg:pl-8 lg:pt-0">
            <div className="flex items-center justify-between border-b border-border pb-3"><span className="font-mono text-[11px] uppercase text-accent">Società</span><span className="font-mono text-[10px] text-graphite">L'editoriale</span></div>
            <h2 className="mt-5 font-display text-[30px] font-semibold leading-[1.08] md:text-[35px]">Il presente non aspetta che siamo pronti</h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-graphite">Ci sono mattine in cui la notizia più importante non è quella in prima pagina, ma il modo in cui ci prepariamo a leggerla.</p>
            <p className="mt-4 text-[15px] leading-[1.7] text-graphite">Non si tratta di prevedere il futuro, ma di abitare con più attenzione il presente. Chiedersi non soltanto «cos'è successo», ma «cosa ci sta succedendo».</p>
            <p className="mt-5 font-mono text-[11px] text-ink">A. Lombardi / Direttore</p>
            <div className="mt-8 border-t border-border pt-6">
              <span className="font-mono text-[10px] uppercase text-accent">La nostra prospettiva</span>
              <p className="mt-3 font-display text-[23px] leading-[1.2]">«Il presente è l'unico luogo da cui possiamo cominciare a capire.»</p>
            </div>
          </aside>
        </section>

        <div className="pt-12 md:pt-16">{sections.map(section => <StorySection key={section.id} section={section} />)}</div>

        <section aria-label="Newsletter" className="grid gap-8 border-t-2 border-ink bg-muted px-6 py-10 md:grid-cols-[1fr_1fr] md:gap-16 md:px-10 md:py-12">
          <div><p className="font-mono text-[11px] uppercase text-accent">La newsletter di Onirixa</p><h2 className="mt-3 max-w-[17ch] font-display text-3xl font-bold leading-tight sm:text-4xl">Ricevi nuove idee sul presente</h2></div>
          <div className="md:self-end"><p className="max-w-[48ch] text-sm leading-relaxed text-graphite">Una selezione degli articoli più interessanti direttamente nella tua casella email.</p>
            {subscribed ? <p className="mt-6 text-sm text-ink">Grazie per il tuo interesse.</p> : <form className="mt-6 flex flex-col gap-2 sm:flex-row" onSubmit={event => { event.preventDefault(); setSubscribed(true); }}><label className="sr-only" htmlFor="newsletter-email">Indirizzo email</label><input id="newsletter-email" type="email" required placeholder="La tua email" className="min-w-0 flex-1 border border-border bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-graphite focus:border-accent" /><Button type="submit" className="h-auto rounded-none px-6 py-3">Iscriviti</Button></form>}
          </div>
        </section>
      </main>
      <footer className="border-t border-ink bg-surface px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div><span className="font-display text-3xl font-black">ONIRIXA<span className="text-accent">.</span></span><p className="mt-2 font-mono text-[11px] text-graphite">Idee sul presente</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-graphite"><a className="hover:text-accent" href="mailto:redazione@onirixa.it">Contatti</a><a className="hover:text-accent" href="#">Privacy Policy</a><a className="hover:text-accent" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-accent" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-5 font-mono text-[10px] uppercase text-graphite">© 2026 ONIRIXA · Milano</div>
      </footer>
    </div>
  );
}
