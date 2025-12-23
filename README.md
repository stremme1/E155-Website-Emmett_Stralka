## Emmett Stralka – E155 Static Website

This repository now contains a **hand-coded static site** designed to look and feel like a professional, Apple-style landing page.

### How the site is structured

- `index.html` – The main (and only) page you need to edit.  
  - Contains the navbar, hero section, featured work, E155 labs, about, and contact sections.  
  - Uses clean HTML with anchors like `#featured-work`, `#labs`, `#about`, and `#contact`.
- `styles.css` – All of the premium Apple-inspired styling (already wired into `index.html`).
- `scroll-animations.js` – Small script that powers scroll-based animations.
- `Images/headshot.jpg` – The hero/about image.
- `labs/*.pdf` – Your E155 lab reports, linked directly from the Labs section.

> The original Quarto files (`_quarto.yml`, `*.qmd`, etc.) are no longer required for the static site and can be ignored. They are kept here only as a backup/reference.

### Editing the site

1. Open `index.html` in your editor (VS Code, Cursor, etc.).
2. Modify text, sections, or links directly in the HTML.
3. Save and refresh the browser to see changes.

### Previewing locally

From the repo folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser.

### Publishing (GitHub Pages – recommended)

1. Commit and push your changes to GitHub.
2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, select the branch you want to publish (e.g., `main` or `static-site`) and the root (`/`) as the folder.
4. Save. GitHub Pages will build and give you a public URL for the site.


