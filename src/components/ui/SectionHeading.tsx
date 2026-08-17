type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  introduction?: string;
  align?: "left" | "center";
  tone?: "default" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  introduction,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`eyebrow ${tone === "dark" ? "text-accent" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-5 text-balance font-serif text-5xl font-normal leading-[0.94] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {introduction ? (
        <p className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${tone === "dark" ? "text-on-deep/65" : "text-muted"}`}>
          {introduction}
        </p>
      ) : null}
    </div>
  );
}
