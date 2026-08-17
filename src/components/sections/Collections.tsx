import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { homeContent } from "@/content/content";

export function Collections({ content }: { content: typeof homeContent.collections }) {
  return (
    <section id="collections" className="border-t border-line py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          introduction={content.introduction}
        />
        <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-3 lg:mt-24 lg:gap-x-8">
          {content.items.map((item, index) => (
            <article key={item.name} className={index === 1 ? "md:mt-20" : ""}>
              <a href={item.href} className="group block">
                <div className="image-zoom relative aspect-[3/4] overflow-hidden bg-line">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${index === 0 ? "object-[70%_center]" : "object-center"}`}
                  />
                </div>
                <div className="mt-6 flex items-start gap-5 border-t border-line pt-5">
                  <span className="pt-2 text-[0.6rem] tracking-[0.2em] text-brand">{item.number}</span>
                  <div>
                    <h3 className="font-serif text-4xl leading-none">{item.name}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em]">
                      Explorer
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
