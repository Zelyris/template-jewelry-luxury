import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { homeContent } from "@/content/content";

export function Services({ content }: { content: typeof homeContent.services }) {
  return (
    <section id="services" className="bg-surface py-28 sm:py-36 lg:py-44">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-16 grid border-t border-line lg:mt-24 lg:grid-cols-3">
          {content.items.map((item) => (
            <article key={item.number} className="flex min-h-80 flex-col border-b border-line py-8 lg:min-h-[25rem] lg:border-b-0 lg:border-r lg:px-9 lg:py-10 lg:first:pl-0 lg:last:border-r-0">
              <span className="text-[0.6rem] tracking-[0.2em] text-brand">{item.number}</span>
              <h3 className="mt-12 max-w-xs font-serif text-4xl leading-[1.02] sm:text-5xl">{item.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted">{item.text}</p>
              <div className="mt-auto pt-9">
                <ActionLink {...item.link} variant="line" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
