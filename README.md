# Mythos

An interactive network-graph explorer for Greek mythology — visualize how gods, Titans, demigods, heroes, and monsters are related, what each one is known for, and read their story.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run validate` — check the character/relationship dataset for dangling references and asymmetric family links
- `npm run lint` — run oxlint

## Adding a character

Add an entry to the appropriate file in `src/data/characters/` (grouped by era: primordials, titans, olympians, heroes, monsters) and, if it's a mortal enemy/ally/rival/etc. link rather than a family tie, add a record to `src/data/relationships.ts`. Run `npm run validate` afterward to catch typos in referenced ids or one-sided family links.
