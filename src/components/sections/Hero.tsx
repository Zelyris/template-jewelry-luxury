import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import type { homeContent } from "@/content/content";

type HeroProps = { content: typeof homeContent.hero };

export function Hero({ content }: HeroProps) {
  return (
    <section id="accueil" className="relative flex min-h-[48rem] items-end overflow-hidden bg-deep text-white sm:min-h-[52rem] lg:min-h-screen">
      <Image
        src={content.image}
        alt={content.imageAlt}
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="hero-image object-cover object-[68%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,4,3,.92)_0%,rgba(4,4,3,.58)_40%,rgba(4,4,3,.08)_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,4,3,.62)_0%,transparent_45%)]" />

      <Container className="relative z-10 pb-14 pt-36 sm:pb-20 lg:pb-20">
        <div className="reveal-up max-w-3xl">
          <p className="eyebrow text-accent">{content.eyebrow}</p>
          <h1 className="mt-6 text-balance font-serif text-[4.4rem] font-normal leading-[0.82] tracking-[-0.045em] sm:text-[6.5rem] lg:text-[8.2rem]">
            {content.title}
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            {content.introduction}
          </p>
          <div className="mt-9 flex flex-wrap gap-7">
            <ActionLink {...content.primaryAction} variant="light" />
            <ActionLink {...content.secondaryAction} variant="line" />
          </div>
        </div>
        <p className="mt-16 text-[0.58rem] uppercase tracking-[0.2em] text-white/45 sm:absolute sm:bottom-20 sm:right-10 sm:mt-0 lg:right-14">
          {content.imageNote}
        </p>
      </Container>
    </section>
  );
}
