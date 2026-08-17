import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import type { homeContent } from "@/content/content";

export function SignaturePieces({ content }: { content: typeof homeContent.signatures }) {
  return (
    <section id="signatures" className="overflow-hidden bg-deep py-28 text-on-deep sm:py-36 lg:py-0">
      <Container className="grid gap-16 lg:min-h-[56rem] lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24">
        <div className="order-2 py-0 lg:order-1 lg:py-28">
          <p className="eyebrow text-accent">{content.eyebrow}</p>
          <p className="mt-14 text-[0.62rem] uppercase tracking-[0.24em] text-on-deep/45">{content.title}</p>
          <h2 className="mt-4 max-w-xl text-balance font-serif text-6xl font-normal leading-[0.9] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
            {content.subtitle}
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-7 text-on-deep/65 sm:text-base">
            {content.description}
          </p>
          <dl className="mt-12 grid grid-cols-3 border-y border-white/15 py-7">
            {content.details.map((detail) => (
              <div key={detail.label} className="border-r border-white/15 px-3 first:pl-0 last:border-r-0 last:pr-0 sm:px-6">
                <dt className="font-serif text-2xl text-accent sm:text-3xl">{detail.value}</dt>
                <dd className="mt-2 text-[0.55rem] uppercase leading-4 tracking-[0.16em] text-on-deep/45">
                  {detail.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <ActionLink {...content.action} variant="line" />
          </div>
        </div>
        <div className="image-zoom relative order-1 aspect-[4/5] overflow-hidden lg:order-2 lg:h-full lg:min-h-[56rem] lg:aspect-auto">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
