# Neuvara Website

Neuvara is a research-stage neurotechnology website for rare disease prediction from brain MRI and supporting clinical data. The site presents Neuvara's platform direction, validation philosophy, technology architecture, roadmap, and partnership pathway.

## Mission

Neuvara exists to shorten the path from subtle neurological signals to reviewable clinical evidence. The website communicates a validation-first approach to AI research for rare neurological disease, with an emphasis on scanner-aware MRI modelling, multimodal clinical context, and specialist oversight.

## Features

- Static, performance-oriented Next.js App Router site
- Responsive single-page website with platform, technology, validation, roadmap, and contact sections
- Custom SVG/CSS medical visuals without external runtime asset dependencies
- Accessible semantic sections and keyboard-friendly navigation
- Client-side contact intent form prepared for a future secure backend handoff

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ESLint with Next.js rules

## Local Development

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:3000` by default.

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
npm run test:smoke
```

## Build

```bash
npm run build
```

The app is exported as static HTML into `out/`. After the build, `out/index.html` is the homepage and `out/privacy/index.html` is the privacy page.

## Deployment

### GitHub Pages

This repository includes `.github/workflows/pages.yml`, which publishes the exported site automatically when changes are pushed to `main`. In GitHub, set Pages to use **GitHub Actions** as the source.

The site is configured for the custom domain `neuvara.org` through `public/CNAME`. Build locally with:

```bash
npm run build
```

If you manually deploy, upload the generated `out/` folder.

### Other Static Hosts

Run `npm run build`, then deploy the generated `out/` directory to the static host. Review Next.js export constraints before changing `next.config.mjs`.

## Project Structure

```text
src/
  app/          Next.js routes and metadata
  components/   Shared UI and visual building blocks
  data/         Homepage content data
  sections/     Page-level sections and section-specific widgets
  styles/       Global Tailwind and custom CSS
public/         GitHub Pages domain and static-hosting files
tests/          Playwright smoke tests
.github/        CI, dependency review, and GitHub Pages deployment
```

## License

This project is licensed under the MIT License.
