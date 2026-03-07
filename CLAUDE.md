# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the New Mexico Public Schools Insurance Authority (NMPSIA). No build tools, bundlers, or server-side processing—just HTML, CSS, and vanilla JavaScript served directly.

## Development

**Local development**: Open any HTML file directly in a browser, or use a local server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

**No build step required**—changes to HTML, CSS, or JS are immediately reflected on refresh.

## Architecture

### Web Components Pattern

All reusable UI is built with native Web Components (custom elements). Components follow this pattern:

```javascript
class ComponentName extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<div>...</div>`;
  }
}
customElements.define("component-name", ComponentName);
```

Components are loaded via `<script>` tags in HTML pages, then used as custom elements:
```html
<script src="./scripts/components/wellness/dental-health.js"></script>
...
<dental-health></dental-health>
```

### Navigation System

- **Hash-based routing**: Pages use URL fragments (`#section`) for client-side navigation
- **SidebarNavigation class** (`scripts/sidebar-navigation.js`): Handles sidebar toggle, scroll spy, and section visibility
- Two modes: scroll mode (smooth scroll to sections) and hide mode (show/hide sections)

### Key Scripts

| File | Purpose |
|------|---------|
| `scripts/sidebar-navigation.js` | Sidebar toggle, scroll spy, hash navigation |
| `scripts/search-engine.js` | Client-side search with weighted relevance scoring |
| `scripts/meetingsData.js` | Board meeting data (large file ~49K lines) |
| `scripts/main.js` | General page functionality |

### Component Organization

Components in `scripts/components/` are grouped by domain:
- `carriers/` — Insurance carrier info (BCBS, Delta, CVS Caremark, etc.)
- `wellness/` — Wellness program content
- `risk/` — Risk management and training content
- `procurements/` — Procurement listings
- `navbar/`, `footer/` — Site-wide navigation

### External Dependencies (CDN)

- Bootstrap 5.1.3 (CSS framework and JS)
- Boxicons, Font Awesome, Ionicons (icons)
- Swiper (carousels on homepage)
- Webflow navbar CSS (legacy integration in `css/webflow_navbar/`)

### CSS Structure

- `css/main.css` — Primary styles, utility classes
- `css/queries.css` — Responsive breakpoints (768px, 860px, 1024px, 1300px)
- `css/footer.css`, `css/form.css` — Feature-specific styles

## Conventions

- PDF links use absolute paths from site root: `/pdfs/filename.pdf`
- Icons use Boxicons classes: `<i class="bx bxs-file-pdf"></i>`
- External links include `target="_blank"`
- Bootstrap modals are used for archived content popups
- Component HTML uses `/*html*/` pragma for syntax highlighting in editors
