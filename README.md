# Portfolio v2

This repository contains my personal portfolio site. I use it to present my work, case studies, writing, certifications, and contact details in a more editorial and motion-heavy format than a standard portfolio grid.

It is built with Astro as the main framework, with React-based UI pieces where they make sense, and it is set up for deployment on Cloudflare.

## What This Site Includes

- A custom home experience with animated sections for my hero, projects, blog, certifications, and profile highlights
- Individual project pages with detailed case-study style layouts
- A blog index and individual blog post pages
- A contact page with a working form flow
- Motion-driven UI and WebGL-inspired visual effects such as `LightRays`

## Tech Stack

- Astro 6
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP
- Lenis
- OGL / Three.js
- Cloudflare via `@astrojs/cloudflare`

## Getting Started

### Prerequisites

- Node.js `22.12.0` or newer
- npm

### Install

```sh
npm install
```

### Run locally

```sh
npm run dev
```

The site will usually be available at `http://localhost:4321`.

## Available Scripts

| Command                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `npm run dev`            | Start the local Astro development server       |
| `npm run build`          | Build the production site into `dist/`         |
| `npm run preview`        | Preview the production build locally           |
| `npm run generate-types` | Generate Cloudflare Worker types with Wrangler |
| `npm run astro`          | Run Astro CLI commands                         |

## Project Structure

```text
.
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable site sections and UI pieces
│   ├── data/                # Portfolio data and content metadata
│   ├── layouts/             # Shared page layouts
│   ├── lib/                 # Client and server helpers
│   ├── pages/               # Astro routes
│   ├── styles/              # Global styles
│   └── actions/             # Server actions
├── astro.config.mjs
├── wrangler.jsonc
├── package.json
└── tsconfig.json
```

## Important Files

- `src/pages/index.astro`: my home page composition
- `src/pages/[slug].astro`: individual project pages
- `src/pages/blog/index.astro`: blog landing page
- `src/pages/blog/[slug].astro`: individual blog post pages
- `src/pages/contact.astro`: contact page and form UI
- `src/components/HomeHero.astro`: main landing hero
- `src/components/HomeProjectsSection.astro`: featured project section
- `src/components/HomeBlogSection.astro`: blog preview section
- `src/components/AboutCards.astro`: experience and featured work cards
- `src/components/Certifications.astro`: certifications section
- `src/components/ui/LightRays.tsx`: reusable WebGL-style background effect

## Deployment

This project is configured for Cloudflare deployment through the Astro Cloudflare adapter.

Build:

```sh
npm run build
```

Preview:

```sh
npm run preview
```
