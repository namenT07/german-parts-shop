# GERMANAUTO — static auto-parts site

Static HTML/CSS/JS site (Russian UI, `lang="ru"`). No `package.json`, no build step, no tests, no lint, no typecheck, no CI, no pre-commit.

## How to run
- Open any `.html` file directly in a browser, or serve the folder with any static server, e.g. `python3 -m http.server` or `npx serve`. There is no dev server command and no build to run.

## Structure & wiring
- One shared JS file: `app.js`, loaded by every page via `<script src="app.js">`. Do not split app logic into new files without updating all four HTML pages.
- Pages: `index.html` (home), `catalog.html` (catalog), `cart.html` (checkout). All share `styles.css`.
- All product/catalog data is hardcoded in `app.js`: `PRODUCTS_DATA` (12 items) and `CAR_DATA` (makes/models/generations). No backend, no API, no data files.
- Page-specific init runs only when its container exists: `initCatalogPage()` needs `#catalog-products-grid`; `renderCartPage()` needs `#cart-items-container`. The shared `DOMContentLoaded` handler always runs `initTheme()`, `updateCartBadges()`, `initCarSelector()`, `initHeaderSearch()`, `initTabs()`.

## Persistence (localStorage)
- Theme: key `ga_theme`, default `dark`. Toggled via `toggleTheme()`, written to `document.documentElement.dataset.theme`.
- Cart: key `ga_cart`, default `[{id:"p1",qty:1},{id:"p3",qty:2}]`. `completeCheckoutOrder()` clears `ga_cart` and redirects to `index.html`.

## Conventions
- UI strings and comments are in Russian. Keep new strings in Russian to match.
- Theme colors use CSS custom properties in `:root` (dark) and `[data-theme="light"]`.
- No test suite exists. Verify changes by opening the affected `.html` in a browser and interacting with the page.

## What to avoid
- Do not add a build step, bundler, or package manager without a matching reason; the repo intentionally has none.
- Do not reference `process.env`, `fetch()`, modules (`import`/`export`), or Node APIs — `app.js` is plain browser globals.