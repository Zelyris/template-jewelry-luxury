export const homeContent = {
  hero: {
    eyebrow: "Collection Lueur · Chapitre I",
    title: "La lumière devient matière.",
    introduction:
      "Des lignes d’or sculptées à la main, où chaque pierre semble retenir un éclat du jour.",
    image: "/images/hero-collier-aureline.png",
    imageAlt:
      "Collier Lueur en or brossé et diamant champagne sur un socle en pierre ivoire",
    primaryAction: { label: "Découvrir la collection", href: "#collections" },
    secondaryAction: { label: "Prendre rendez-vous", href: "#rendez-vous" },
    imageNote: "Collier Lueur N°01 · Pièce unique",
  },
  introduction: {
    eyebrow: "Maison de haute joaillerie",
    title:
      "Auréline imagine des joyaux qui ne cherchent pas l’éclat — ils le révèlent.",
    text:
      "À Paris, nos maîtres artisans donnent vie à des pièces en séries très limitées. Chaque création naît d’un dessin, d’un geste et d’une rencontre avec une pierre singulière.",
  },
  collections: {
    eyebrow: "Les collections",
    title: "Trois écritures, une même lumière.",
    introduction:
      "Des créations pensées comme des fragments d’architecture, à porter au plus près de soi.",
    items: [
      {
        number: "01",
        name: "Lueur",
        description:
          "Des rubans d’or mat s’enroulent autour de diamants aux nuances de miel.",
        image: "/images/hero-collier-aureline.png",
        imageAlt: "Collier sculptural de la collection Lueur",
        href: "#signatures",
      },
      {
        number: "02",
        name: "Éclat",
        description:
          "Une ligne vive et aérienne, ponctuée de pierres comme une constellation intime.",
        image: "/images/boucles-eclat.png",
        imageAlt: "Boucles d’oreilles en or et diamants de la collection Éclat",
        href: "#signatures",
      },
      {
        number: "03",
        name: "Sillage",
        description:
          "Des courbes souples qui suivent le corps et prolongent chacun de ses mouvements.",
        image: "/images/portrait-ligne-or.png",
        imageAlt: "Collier Sillage porté dans un intérieur parisien",
        href: "#galerie",
      },
    ],
  },
  signatures: {
    eyebrow: "Pièces signature",
    title: "Lueur N°01",
    subtitle: "Un collier, une ligne, un souffle.",
    description:
      "Façonné dans un seul ruban d’or jaune 18 carats, Lueur N°01 enlace un diamant champagne taille poire. Plus de cent vingt heures de travail sont nécessaires pour obtenir son tombé parfaitement naturel.",
    details: [
      { value: "18 ct", label: "Or jaune brossé" },
      { value: "4,12 ct", label: "Diamant champagne" },
      { value: "120 h", label: "Façonnage à la main" },
    ],
    image: "/images/hero-collier-aureline.png",
    imageAlt: "Détail du collier signature Lueur N°01",
    action: { label: "Demander une présentation privée", href: "#rendez-vous" },
  },
  story: {
    eyebrow: "L’histoire de la Maison",
    title: "Paris, 1927. Une autre idée de l’éclat.",
    paragraphs: [
      "Dans un atelier baigné de lumière, Élise Auréline dessine son premier bijou : une broche souple inspirée par le reflet du soleil sur la Seine. Son parti pris est alors radical — laisser le métal vivre, respirer, capter la lumière sans jamais l’éblouir.",
      "Près d’un siècle plus tard, la Maison poursuit cette vision. Les archives dialoguent avec le présent, et chaque pièce conserve l’empreinte de la main qui l’a façonnée.",
    ],
    quote:
      "Le plus beau joyau est celui dont on oublie la matière pour ne garder que la lumière.",
    quoteAuthor: "Élise Auréline, carnet d’atelier, 1929",
    milestones: [
      { year: "1927", text: "Ouverture du premier atelier parisien" },
      { year: "1956", text: "Création du motif Ruban de lumière" },
      { year: "2026", text: "Réinterprétation des archives Auréline" },
    ],
  },
  craftsmanship: {
    eyebrow: "Le savoir-faire",
    title: "La patience comme signature.",
    description:
      "Du premier trait de gouache au dernier poli, une création passe entre les mains d’artisans spécialisés. Le temps n’est jamais compté : il accompagne la justesse du geste.",
    image: "/images/atelier-sertissage.png",
    imageAlt:
      "Maître joaillier sertissant une pierre champagne sur une bague en or brossé",
    steps: [
      {
        number: "I",
        title: "Le dessin",
        text: "L’intention prend forme à la gouache, grandeur nature, jusqu’à trouver son équilibre.",
      },
      {
        number: "II",
        title: "La matière",
        text: "L’or est fondu, laminé puis sculpté pour conserver la souplesse du trait initial.",
      },
      {
        number: "III",
        title: "La lumière",
        text: "Chaque pierre est orientée et sertie pour révéler sa nuance la plus personnelle.",
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Fragments d’Auréline",
    items: [
      {
        image: "/images/portrait-ligne-or.png",
        alt: "Portrait portant le collier Lueur",
        caption: "Lueur portée",
        className: "gallery-tall",
      },
      {
        image: "/images/boucles-eclat.png",
        alt: "Boucles Éclat dans une niche ivoire",
        caption: "Éclat N°08",
        className: "gallery-standard",
      },
      {
        image: "/images/atelier-sertissage.png",
        alt: "Geste de sertissage dans l’atelier",
        caption: "Le geste juste",
        className: "gallery-wide",
      },
      {
        image: "/images/hero-collier-aureline.png",
        alt: "Collier Lueur sur pierre ivoire",
        caption: "Lueur N°01",
        className: "gallery-standard",
      },
    ],
  },
  services: {
    eyebrow: "Les services de la Maison",
    title: "Un accompagnement personnel, au fil du temps.",
    items: [
      {
        number: "01",
        title: "Création sur mesure",
        text: "Une pièce dessinée pour vous, de la première conversation au choix de la pierre.",
        link: { label: "Imaginer une création", href: "#rendez-vous" },
      },
      {
        number: "02",
        title: "Rendez-vous privé",
        text: "Découvrez nos collections dans l’intimité de nos salons de la rue de la Paix.",
        link: { label: "Choisir un moment", href: "#rendez-vous" },
      },
      {
        number: "03",
        title: "Entretien & restauration",
        text: "Nos artisans veillent sur vos bijoux Auréline et leur rendent leur éclat d’origine.",
        link: { label: "Contacter l’atelier", href: "#contact" },
      },
    ],
  },
  appointment: {
    eyebrow: "Prise de rendez-vous",
    title: "Entrons en conversation.",
    introduction:
      "Notre conciergerie vous répondra personnellement sous un jour ouvré pour imaginer votre visite.",
    form: {
      name: "Nom complet",
      email: "Adresse e-mail",
      phone: "Téléphone",
      interest: "Votre demande",
      message: "Quelques mots, si vous le souhaitez",
      submit: "Ouvrir ma messagerie",
      options: [
        "Découvrir les collections",
        "Imaginer une pièce sur mesure",
        "Entretien ou restauration",
        "Autre demande",
      ],
      emailSubject: "Demande de rendez-vous — Maison Auréline",
      emailIntroduction:
        "Bonjour, je souhaite prendre rendez-vous avec la Maison Auréline.",
      emptyValue: "Non renseigné",
      privacyNote:
        "Votre messagerie s’ouvrira avec un e-mail prérempli. Aucune donnée n’est envoyée ni stockée sur ce site.",
    },
  },
} as const;
