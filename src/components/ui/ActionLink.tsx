import type { NavigationItem } from "@/lib/types";

type ActionLinkProps = NavigationItem & {
  variant?: "light" | "dark" | "line";
};

export function ActionLink({ href, label, variant = "dark" }: ActionLinkProps) {
  const variants = {
    light: "bg-surface text-foreground hover:bg-white",
    dark: "bg-deep text-on-deep hover:bg-brand",
    line: "border-b border-current pb-1 text-current hover:text-brand",
  };

  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.2em] transition duration-500 ${
        variant === "line" ? variants.line : `px-6 py-4 ${variants[variant]}`
      }`}
    >
      <span>{label}</span>
      <svg
        aria-hidden="true"
        className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    </a>
  );
}
