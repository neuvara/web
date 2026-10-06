# Neuvara website

Static site for neuvara.org. Plain HTML, CSS and JavaScript: no framework, no build step, no dependencies. Edit a file, refresh, deploy.

## Structure

```
/                   Home: problem, the audit (flagship), data preparation, team
/audit/             Cross-scanner audit: full service description
/rankings/          Cross-scanner rankings table (currently placeholder values)
/contact/           Contact form (Web3Forms)
/privacy/           Privacy policy
/css/style.css      All styles for every page
/css/noscript.css   Fallback when JavaScript is off (shows the nav links)
/js/main.js         All behaviour: hero illustration, mobile menu, copy-email buttons, form, rankings tables
/js/rankings-data.js  The numbers shown in the rankings tables
logo.png, icon.png  Logo and favicon
CNAME               Custom domain (neuvara.org)
```

Each folder has its own short README with details.

## Preview locally

Paths are absolute (`/css/style.css`), so opening `index.html` directly will look unstyled. Run a local server from this folder instead:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Use Cmd+Shift+R after changes to bypass the cache.

## Deploy

Commit and push. The live site updates from the repo.

## Common changes

- **Text on a page:** edit that page's `index.html`.
- **Navigation or footer links:** these are copied into every page, so change them in all five: `index.html`, `audit/`, `rankings/`, `contact/`, `privacy/`.
- **Adding a page:** create `newpage/index.html`, copying the `<head>`, header and footer from an existing page, and add it to the nav and footer on every page.
- **Colours, fonts, spacing:** `css/style.css`. The colour tokens are at the top (`:root`).
- **Rankings numbers:** `js/rankings-data.js` only (see `js/README.md`).
- **Contact form key:** `contact/index.html` (see `contact/README.md`).

## Design rules

- Dark navy background, flat colour. No gradients, glows or large hover effects.
- Colours come from the logo: blue and purple (scanner A / scanner B), teal for Neuvara and actions.
- Fonts: Newsreader (serif headings; italics for highlighted words), Schibsted Grotesk (body), IBM Plex Mono (small labels).
- One coloured italic phrase per heading at most, and not on every heading.
- Breakpoints: 640px, 768px (hamburger menu below), 960px (two columns), 1100px (wide layout), 1440px (large laptops). Check phone, laptop and 1440 widths after layout changes.

## Content rules

- No performance claims or results that do not exist yet.
- Placeholder data must stay visibly labelled "Preview" until it is replaced with real results.
- Never use real model or company names next to placeholder numbers.
- The site states that the business works in writing (no calls), keeps no client data or models, and lists models publicly only with permission. Keep the copy consistent with that.
