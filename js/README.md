# js

- `main.js`: loaded on every page. Independent sections, each only runs if its elements are on the page:
  1. Hero illustration (home): draws the synthetic brain slice and intensity plot on `<canvas>`. Synthetic, not real data.
  2. Mobile menu: hamburger toggle below 768px.
  3. Copy buttons: `<button class="copy" data-copy="...">` copies an email address instead of opening a mail app.
  4. Contact form: sends to Web3Forms, shows success or error, preselects the topic from `?topic=audit|data|rankings`.
  5. Rankings tables: fills any element with `data-rankings` using `rankings-data.js`.
- `rankings-data.js`: the rankings numbers. Loaded only on `/audit/` and `/rankings/`.

## Rankings data

Currently PLACEHOLDER values. Each model has: `name`, `type`, `cv` (cross-scanner variation %, lower is better, used for ranking), `dice` (agreement 0–1), `worst` (worst single-scanner offset %), `scanners` (count). Three structures: `whole`, `hippocampus`, `ventricles`.

When real results exist: replace the values, rename models only if the company has agreed to be named, set `preview: false`, and remove the preview notice from `rankings/index.html` and the preview tag from `audit/index.html` by hand.
