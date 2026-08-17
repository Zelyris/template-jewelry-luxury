import { Container } from "@/components/ui/Container";
import type { homeContent } from "@/content/content";

export function Introduction({ content }: { content: typeof homeContent.introduction }) {
  return (
    <section className="bg-surface py-28 sm:py-36 lg:py-44">
      <Container className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
        <p className="eyebrow pt-3 text-brand">{content.eyebrow}</p>
        <div>
          <h2 className="max-w-5xl text-balance font-serif text-5xl font-normal leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-muted sm:ml-auto sm:text-base">
            {content.text}
          </p>
        </div>
      </Container>
    </section>
  );
}
