import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";

export function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer id="contact" className="border-t border-line bg-surface py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.7fr]">
          <div>
            <a href="#accueil" className="inline-flex items-center gap-3" aria-label="Retour à l’accueil">
              <span className="flex size-10 items-center justify-center rounded-full border border-foreground/40 font-serif text-xl italic">A</span>
              <span className="font-serif text-3xl tracking-[0.06em]">{site.shortName}</span>
            </a>
            <p className="mt-5 max-w-xs text-xs uppercase leading-5 tracking-[0.16em] text-muted">{site.baseline}</p>
          </div>
          <div>
            <p className="eyebrow text-brand">La Maison</p>
            <address className="mt-5 text-sm not-italic leading-7 text-muted">
              <a href={site.contact.mapsHref} target="_blank" rel="noreferrer" className="transition hover:text-foreground">
                {site.contact.address.map((line) => <span key={line} className="block">{line}</span>)}
              </a>
            </address>
          </div>
          <div>
            <p className="eyebrow text-brand">Horaires</p>
            <div className="mt-5 text-sm leading-7 text-muted">
              {site.contact.hours.map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
          <div>
            <p className="eyebrow text-brand">Suivre</p>
            <div className="mt-5 grid gap-2 text-sm text-muted">
              <a className="transition hover:text-foreground" href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="transition hover:text-foreground" href={`mailto:${site.contact.email}`}>E-mail</a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[0.58rem] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Maison fictive.</p>
          <p>Créations façonnées à Paris</p>
        </div>
      </Container>
    </footer>
  );
}
