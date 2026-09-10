# Personal Website Agent Rules

Before changing the public website, read:

1. `docs/superpowers/specs/2026-09-10-personal-website-redesign-design.md`
2. `docs/superpowers/plans/2026-09-10-personal-website-redesign.md` when the task is part of the 2026 redesign.

The redesign deliberately replaces the previous Next.js dossier presentation with a dependency-free static application surface in `site/`. The existing `public/` directory remains the source of truth for verified profile, project, research, and resume media.

Do not reintroduce fictional content from visual mockups. The mockups are layout/style references only.

Build: `npm run build`
Test: `npm test`
Output: `dist/`
