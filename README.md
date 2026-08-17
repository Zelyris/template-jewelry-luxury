# Maison Auréline — Template Joaillerie Luxury

Template éditorial réutilisable pour une maison de bijouterie ou de haute joaillerie. La marque présentée, Maison Auréline, est entièrement fictive.

## Technologies

- Next.js 16 avec App Router
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Personnalisation centralisée

- `src/config/site.ts` : identité, coordonnées, navigation et thème actif.
- `src/content/content.ts` : textes, collections, pièces et chemins des visuels.
- `src/styles/themes.css` : palette et variables visuelles.
- `src/components` : sections et briques réutilisables.

Les visuels du template sont regroupés dans `public/images`.

## Formulaire de rendez-vous

Le formulaire ne transmet et ne stocke aucune donnée sur le site. Lors de sa validation, il construit une URL `mailto:` et ouvre la messagerie du visiteur avec un e-mail prérempli contenant le nom, l’adresse e-mail, le téléphone, le type de demande et le message saisis.

L’adresse destinataire provient de `siteConfig.contact.email` dans `src/config/site.ts`. Ce fonctionnement est prévu pour la démonstration et ne remplace pas un service d’envoi côté serveur.

## Commandes

```bash
pnpm dev
pnpm lint
pnpm build
```

Le serveur local est disponible sur `http://localhost:3000`.
