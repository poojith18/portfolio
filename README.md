# Poojith Reddy Maligireddy — Portfolio

[![CI](https://github.com/poojith18/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/poojith18/portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/poojith18/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/poojith18/portfolio/actions/workflows/deploy.yml)

**Live site:** [https://poojith18.github.io/portfolio/](https://poojith18.github.io/portfolio/)

A production-focused developer portfolio built with React, TypeScript, and Tailwind CSS. Showcases experience, projects, skills, and contact information for Software Engineering, AI/ML, and cloud systems work.

## Features

- Single-page layout with smooth scroll navigation and active section highlighting
- Light / dark theme toggle with system preference support
- Scroll reveal animations and animated stats (respects `prefers-reduced-motion`)
- Project category filters (Backend, FinTech, AI/ML, Reinforcement Learning)
- Contact form with [Formspree](https://formspree.io) integration
- Copy-to-clipboard email, scroll progress bar, and back-to-top button
- Profile photo with initials fallback (add `public/profile.jpg` to use your own)
- SEO meta tags, Open Graph PNG preview, JSON-LD structured data, sitemap, and favicon
- Error boundary and GitHub Pages deployment

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, CSS variables, next-themes |
| Routing | React Router (HashRouter for GitHub Pages) |
| Icons | Lucide React |
| Deploy | gh-pages → GitHub Pages |

## Project Structure

```text
portfolio/
├── public/                  # Static assets (favicon, og-image, sitemap, robots.txt)
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, About, Experience, Work, Skills, Contact
│   │   ├── ProfileAvatar.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ...
│   ├── data/                # Site content (edit here to update copy)
│   │   ├── site.ts          # Nav, contact, social links, stats
│   │   ├── projects.ts      # Project cards
│   │   └── experience.ts    # Jobs and education
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── App.tsx
└── index.html               # Meta tags and font preconnect
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install and run

```bash
git clone https://github.com/poojith18/portfolio.git
cd portfolio
npm install
npm run dev
```

The dev server runs at [http://localhost:8080](http://localhost:8080).

### Environment variables

Create a `.env` file in the project root for local development:

```bash
VITE_FORMSPREE_FORM_ID=your_formspree_form_id
```

| Variable | Description |
|----------|-------------|
| `VITE_FORMSPREE_FORM_ID` | Formspree form ID for in-browser contact form submission |

Set the same variable as a repository secret (**Settings → Secrets and variables → Actions**) so it is baked into the production build on deploy.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run optimize:assets` | Compress profile photo, generate OG PNG and apple-touch-icon |
| `npm run deploy` | Optimize assets, build, and publish to GitHub Pages |

## Updating Content

Most site content lives in `src/data/`:

- **`site.ts`** — navigation, contact info, social links, availability badge, tech marquee
- **`projects.ts`** — project titles, descriptions, tags, and links
- **`experience.ts`** — work history and education

Section components in `src/components/sections/` handle layout and presentation.

### Profile photo

Add `public/profile.jpg`, then run `npm run optimize:assets` to generate a compressed JPEG, WebP variant, and apple-touch-icon.

### Social preview image

Edit `public/og-image.svg`, then run `npm run optimize:assets` to regenerate `public/og-image.png`.

## Continuous Integration

Every push and pull request to `main` runs [`.github/workflows/ci.yml`](.github/workflows/ci.yml), which lints, typechecks, and builds the project. Keep these green before merging.

## Deployment

The site is deployed to GitHub Pages at `/portfolio/` (configured in `vite.config.ts`).

### Automated (recommended)

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages via the official Pages action.

One-time setup: in **Settings → Pages**, set **Source** to **GitHub Actions**.

### Manual (fallback)

```bash
npm run deploy
```

This runs `npm run build` and pushes the `dist/` folder to the `gh-pages` branch. If you use this method, set the Pages source back to the `gh-pages` branch.

## License

Private portfolio project. All rights reserved.
