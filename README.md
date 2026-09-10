# Aaryan Srivastava — Personal Website

The public website is a dependency-free static portfolio built for GitHub Pages.

## Source

- `site/` — About, Experiences, Projects, Papers, shared CSS/JS, and static detail pages.
- `public/` — verified media from the previous site: profile photo, project videos/screenshots, research PDF, and resume.
- `scripts/build-static.mjs` — builds `dist/` by flattening `public/` into the web root and overlaying `site/`.

## Commands

```bash
npm test
npm run build
```

## Design source of truth

Read `docs/superpowers/specs/2026-09-10-personal-website-redesign-design.md` before changing the public design.
