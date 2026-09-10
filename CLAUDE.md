# Personal Website Implementation Notes

Canonical redesign spec:
`docs/superpowers/specs/2026-09-10-personal-website-redesign-design.md`

Implementation plan:
`docs/superpowers/plans/2026-09-10-personal-website-redesign.md`

## Current architecture

- `site/` — the new public website source (HTML/CSS/JS).
- `public/` — existing verified binary assets and documents; keep these reusable assets intact.
- `scripts/build-static.mjs` — flattens `public/` into the deployment root, then overlays `site/`.
- `dist/` — generated deployment output; never edit by hand.

The active website is intentionally rebuilt from scratch rather than adapting the old dossier UI. Old `src/` files may remain temporarily as historical/dead source, but they are not part of the deployed build.

## Content integrity

Never copy render-only fictional experiences or projects into the site. Use verified repository/resume content only.

## Graphify

The legacy codebase may still have `graphify-out/`. It describes the previous Next.js implementation and is not authoritative for the new `site/` architecture.
