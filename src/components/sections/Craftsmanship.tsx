import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { homeContent } from "@/content/content";

export function Craftsmanship({ content }: { content: typeof homeContent.craftsmanship }) {
  return (
    <section id="savoir-faire" className="py-28 sm:py-36 lg:py-44">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-24">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base lg:pb-2">{content.description}</p>
        </div>
        <div className="image-zoom relative mt-16 aspect-[4/3] overflow-hidden bg-line sm:aspect-[16/9] lg:mt-24 lg:aspect-[2/1]">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1440px) 1312px, 100vw"
            className="object-cover"
          />
        </div>
        <ol className="grid border-b border-line lg:grid-cols-3">
          {content.steps.map((step) => (
            <li key={step.number} className="grid grid-cols-[3rem_1fr] gap-3 border-t border-line py-8 lg:block lg:border-r lg:border-t-0 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0">
              <span className="font-serif text-xl text-brand">{step.number}</span>
              <div>
                <h3 className="font-serif text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
