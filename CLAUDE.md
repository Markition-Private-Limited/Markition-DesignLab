# Markition DesignLab — Claude Code Guide

## Project
Next.js 16 · App Router · TypeScript · Tailwind CSS v4

## File Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Header + Footer wired here)
│   ├── page.tsx                # Home page — imports sections, nothing else
│   ├── globals.css             # Global styles + CSS brand tokens
│   ├── sitemap.ts              # Auto-generates /sitemap.xml
│   ├── robots.ts               # Auto-generates /robots.txt
│   └── <page>/page.tsx         # Every new page gets its own folder
│
├── components/
│   ├── layout/                 # Header.tsx, Footer.tsx
│   ├── sections/               # Home page sections — one folder per section
│   │   ├── hero/               # HeroSection.tsx + index.ts
│   │   ├── features/           # FeaturesSection.tsx + index.ts
│   │   ├── about/              # AboutSection.tsx + index.ts
│   │   ├── testimonials/       # TestimonialsSection.tsx + index.ts
│   │   └── cta/                # CtaSection.tsx + index.ts
│   └── ui/                     # Shared primitives: Button, Input, etc.
│
├── config/
│   └── site.ts                 # Site name, URL, OG image, keywords (edit here first)
│
└── lib/
    ├── seo.ts                  # generateMetadata() helper — use in every page
    └── utils.ts                # cn() Tailwind class merger
```

## Rules for collaborating

1. **Adding a home page section** — create `src/components/sections/<name>/` with
   `<Name>Section.tsx` + `index.ts`, then import it in `src/app/page.tsx`.
2. **Adding a page** — create `src/app/<slug>/page.tsx` and call `generateMetadata()`
   at the top. Add the route to `sitemap.ts`.
3. **SEO** — never hardcode `<title>` or `<meta>` tags. Always use `generateMetadata()`.
   Global defaults live in `src/config/site.ts`.
4. **Styling** — use Tailwind utility classes. Brand CSS variables are in `globals.css`.
   Use the `cn()` helper from `@/lib/utils` when composing conditional classes.
5. **Components** — reusable UI goes in `src/components/ui/`. Page-specific markup
   stays inside its section or page file.

## Common commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # TypeScript check only
```
