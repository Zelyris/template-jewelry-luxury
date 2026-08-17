import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";

export function Header({ site }: { site: SiteConfig }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 text-white">
      <Container className="flex min-h-20 items-center justify-between gap-6 lg:min-h-24">
        <a href="#accueil" className="group flex shrink-0 items-center gap-3" aria-label={`${site.name}, accueil`}>
          <span className="flex size-8 items-center justify-center rounded-full border border-white/55 font-serif text-lg italic transition group-hover:border-accent group-hover:text-accent">
            A
          </span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-[0.08em] sm:text-2xl">
              {site.shortName}
            </span>
            <span className="mt-1 hidden text-[0.5rem] uppercase tracking-[0.24em] text-white/60 sm:block">
              {site.baseline}
            </span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.62rem] font-medium uppercase tracking-[0.17em] text-white/80 xl:gap-10">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a className="transition duration-300 hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#rendez-vous"
          className="hidden border-b border-white/60 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent sm:block"
        >
          Rendez-vous
        </a>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] [&::-webkit-details-marker]:hidden">
            <span>Menu</span>
            <span className="grid gap-1">
              <span className="block h-px w-5 bg-current transition group-open:translate-y-[2.5px] group-open:rotate-45" />
              <span className="block h-px w-5 bg-current transition group-open:-translate-y-[2.5px] group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute -right-6 top-10 w-screen border-y border-white/15 bg-deep/98 px-6 py-7 shadow-2xl backdrop-blur sm:-right-10 sm:px-10">
            <nav aria-label="Navigation mobile">
              <ul className="grid gap-1">
                {site.navigation.map((item) => (
                  <li key={item.href}>
                    <a className="block border-b border-white/10 py-3 font-serif text-2xl" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-accent" href="#rendez-vous">
                Prendre rendez-vous
              </a>
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
