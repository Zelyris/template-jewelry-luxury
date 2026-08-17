import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { homeContent } from "@/content/content";

export function Gallery({ content }: { content: typeof homeContent.gallery }) {
  return (
    <section id="galerie" className="bg-deep py-28 text-on-deep sm:py-36">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} align="center" tone="dark" />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-24">
          {content.items.map((item, index) => (
            <figure key={item.caption} className={`${item.className} image-zoom group relative overflow-hidden bg-white/5 ${index === 2 ? "md:col-span-2" : ""}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={index === 2 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                className={`object-cover ${index === 3 ? "object-[70%_center]" : "object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 p-6 text-[0.6rem] uppercase tracking-[0.2em] text-white/80 sm:p-8">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
