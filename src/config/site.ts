import type { SiteConfig } from "@/lib/types";

export const siteConfig = {
  name: "Maison Auréline",
  shortName: "Auréline",
  baseline: "Haute joaillerie · Paris",
  description:
    "Maison Auréline, haute joaillerie parisienne fictive. Des pièces sculptées par la lumière, façonnées à la main dans notre atelier.",
  locale: "fr",
  theme: "luxury",
  founded: "1927",
  contact: {
    phone: "+33 (0)1 48 07 19 27",
    phoneHref: "tel:+33148071927",
    email: "conciergerie@maison-aureline.fr",
    address: ["18, rue de la Paix", "75002 Paris, France"],
    mapsHref: "https://maps.google.com/?q=18+rue+de+la+Paix+75002+Paris",
    hours: ["Lundi — Vendredi, 10h — 19h", "Samedi, sur rendez-vous"],
  },
  social: {
    instagram: "https://www.instagram.com/",
  },
  navigation: [
    { label: "Collections", href: "#collections" },
    { label: "Pièces signature", href: "#signatures" },
    { label: "La Maison", href: "#maison" },
    { label: "Savoir-faire", href: "#savoir-faire" },
    { label: "Services", href: "#services" },
  ],
} as const satisfies SiteConfig;
