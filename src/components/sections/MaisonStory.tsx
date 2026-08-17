import { Container } from "@/components/ui/Container";
import type { homeContent } from "@/content/content";

type MaisonStoryProps = {
  content: typeof homeContent.story;
  founded: string;
};

export function MaisonStory({ content, founded }: MaisonStoryProps) {
  return (
    <section id="maison" className="relative overflow-hidden bg-surface py-28 sm:py-36 lg:py-44">
      <span aria-hidden="true" className="pointer-events-none absolute -right-5 top-8 font-serif text-[10rem] leading-none text-foreground/[0.035] sm:text-[18rem] lg:right-8 lg:top-0 lg:text-[25rem]">
        {founded}
      </span>
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="eyebrow text-brand">{content.eyebrow}</p>
            <h2 className="mt-6 text-balance font-serif text-5xl font-normal leading-[0.94] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              {content.title}
            </h2>
          </div>
          <div className="lg:pt-16">
            <div className="grid gap-6 text-sm leading-7 text-muted sm:text-base">
              {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <blockquote className="mt-14 border-l border-accent pl-7 sm:pl-10">
              <p className="max-w-2xl font-serif text-3xl italic leading-tight sm:text-4xl">“{content.quote}”</p>
              <footer className="mt-5 text-[0.58rem] uppercase tracking-[0.18em] text-muted">{content.quoteAuthor}</footer>
            </blockquote>
          </div>
        </div>
        <ol className="mt-24 grid border-t border-line sm:grid-cols-3 lg:mt-32">
          {content.milestones.map((milestone) => (
            <li key={milestone.year} className="border-b border-line py-7 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
              <span className="font-serif text-3xl text-brand">{milestone.year}</span>
              <p className="mt-2 text-xs uppercase leading-5 tracking-[0.14em] text-muted">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
