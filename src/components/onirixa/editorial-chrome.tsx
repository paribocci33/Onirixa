import { Link } from "@tanstack/react-router";

const navItems = [
  { label: "Società", href: "/#societa" },
  { label: "Tecnologia", href: "/#tecnologia" },
  { label: "Lavoro", href: "/#lavoro" },
  { label: "Milano", href: "/#milano" },
  { label: "Cultura", href: "/#cultura" },
];

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "font-display text-2xl font-bold uppercase" : "font-display text-[clamp(3.4rem,10vw,7.5rem)] font-bold uppercase leading-[0.85]"}>
      ONIRIXA<span className="text-accent">.</span>
    </span>
  );
}

export function EditorialHeader({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-5 py-6 sm:px-8">
          <Link to="/" aria-label="Onirixa, homepage"><Wordmark compact /></Link>
          <span className="font-sans text-[10px] uppercase tracking-wide text-muted-foreground">Idee sul presente</span>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-background px-5 sm:px-8">
      <div className="mx-auto flex min-h-[64vh] max-w-5xl flex-col items-center justify-center py-20 text-center sm:min-h-[70vh]">
        <Link to="/" aria-label="Onirixa, homepage"><Wordmark /></Link>
        <p className="mt-7 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Idee sul presente</p>
        <p className="mt-10 max-w-xl font-display text-xl leading-relaxed text-foreground sm:text-2xl">
          Una rivista indipendente per leggere tecnologia, società, lavoro e cultura con più tempo e meno rumore.
        </p>
      </div>
      <nav aria-label="Sezioni" className="border-y border-border">
        <div className="mx-auto flex max-w-5xl gap-6 overflow-x-auto whitespace-nowrap py-4 sm:justify-center sm:gap-9">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className="font-sans text-[11px] font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function EditorialFooter() {
  return (
    <footer className="border-t border-border px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <Link to="/" aria-label="Onirixa, homepage"><Wordmark compact /></Link>
        <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Idee sul presente</p>
        <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 font-sans text-xs text-muted-foreground">
          <a className="transition-colors hover:text-foreground" href="mailto:redazione@onirixa.it">Contatti</a>
          <a className="transition-colors hover:text-foreground" href="#">Privacy Policy</a>
          <a className="transition-colors hover:text-foreground" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="transition-colors hover:text-foreground" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <p className="mt-10 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">© 2026 ONIRIXA · Milano</p>
      </div>
    </footer>
  );
}