# andrewpen.github.io

Personal portfolio site for Andrew Pendleton — Senior Executive in design infrastructure and agent-native systems at Verizon.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- Radix UI primitives

## Structure

```
src/
  app/
    content.ts          # All site copy and data in one place
    App.tsx             # Root layout, section composition
    Resume.tsx          # Standalone resume page (/resume.html)
    components/         # One file per section (Hero, About, Experience, etc.)
    styles/             # Tailwind config, theme tokens, fonts
```

## Dev

```bash
npm install
npm run dev             # Vite dev server — hot reloads on save
```

Opens at `http://localhost:5173` (or next available port).

## Deploy

```bash
node deploy.mjs         # Builds and publishes to GitHub Pages
```

> After deploying, `index.html` will be rewritten to reference the built asset bundle. To resume local development, restore it to use `/src/main.tsx` as the script entry point, or re-run `npm run dev` which handles this automatically via Vite.

## Content updates

All text, roles, projects, speaking events, and education live in [`src/app/content.ts`](src/app/content.ts). Edit that file to update the site without touching any component code.
