export type ThemeName = "luxury";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  baseline: string;
  description: string;
  locale: string;
  theme: ThemeName;
  founded: string;
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    address: readonly string[];
    mapsHref: string;
    hours: readonly string[];
  };
  social: {
    instagram: string;
  };
  navigation: readonly NavigationItem[];
};
