# andrewpen.github.io

Personal portfolio site for Andrew Pendleton — Senior Executive in design infrastructure and agent-native systems at Verizon. Live at [andrewpendleton.io](https://andrewpendleton.io).

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- pnpm

## Structure

```
src/
  app/
    content.ts          # All site copy and data in one place
    App.tsx             # Root layout, section composition
    Resume.tsx          # Standalone resume page (/resume.html)
    components/         # One file per section (Hero, About, Experience, etc.)
  styles/               # Tailwind entry, theme tokens
case-studies/           # Static case-study pages, built as Vite entries
public/                 # Static assets copied verbatim (images, favicons, 404)
```

## Dev

```bash
pnpm install
pnpm dev                # Vite dev server — hot reloads on save
```

Opens at `http://localhost:5173` (or next available port). To check the exact production output:

```bash
pnpm build && pnpm preview
```

## Deploy

Push to `main`. GitHub Actions builds the site from source and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves. There is no local deploy step, and no build artifacts are committed.

## Content updates

All text, roles, projects, speaking events, and education live in [`src/app/content.ts`](src/app/content.ts). Edit that file to update the site without touching any component code.
