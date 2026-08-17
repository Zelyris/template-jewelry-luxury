import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { Container } from "@/components/ui/Container";
import type { homeContent } from "@/content/content";
import type { SiteConfig } from "@/lib/types";

type AppointmentProps = {
  content: typeof homeContent.appointment;
  site: SiteConfig;
};

export function Appointment({ content, site }: AppointmentProps) {
  return (
    <section id="rendez-vous" className="bg-deep py-28 text-on-deep sm:py-36 lg:py-44">
      <Container className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
        <div>
          <p className="eyebrow text-accent">{content.eyebrow}</p>
          <h2 className="mt-6 text-balance font-serif text-6xl font-normal leading-[0.9] tracking-[-0.03em] sm:text-7xl">
            {content.title}
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-on-deep/60">{content.introduction}</p>
          <div className="mt-12 border-t border-white/15 pt-7 text-sm leading-7 text-on-deep/65">
            <a className="block transition hover:text-accent" href={site.contact.phoneHref}>{site.contact.phone}</a>
            <a className="block transition hover:text-accent" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>
        <AppointmentForm content={content.form} recipientEmail={site.contact.email} />
      </Container>
    </section>
  );
}
