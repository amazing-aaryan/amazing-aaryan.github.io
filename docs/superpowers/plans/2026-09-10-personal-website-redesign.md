# Personal Website Redesign Implementation Plan

> **Goal:** Rebuild Aaryan Srivastava's portfolio from scratch around the approved About / Experiences / Projects / Papers design, while retaining verified media and stable GitHub Pages deployment.

## Architecture

The public application surface is intentionally dependency-free and lives under `site/`. The prior Next.js source may remain as historical/dead source, but it is no longer part of deployment. `scripts/build-static.mjs` builds `dist/` by copying the existing verified `public/` assets to the deployment root and then overlaying `site/`.

## Global rules

- Read the canonical spec first: `docs/superpowers/specs/2026-09-10-personal-website-redesign-design.md`.
- Use only verified Aaryan content.
- Never copy fictional mockup content.
- The AI-agent prompt is visual-only in phase 1.
- Keep the site static and GitHub Pages friendly.
- Preserve `/resume/`, `/work/*`, and `/research/*` where practical.
- Use Fraunces + IBM Plex Sans with system fallbacks.
- Preserve keyboard accessibility and `prefers-reduced-motion`.

## Implementation tasks

### 1. Establish a clean static build

- Replace the production build command with `node scripts/build-static.mjs`.
- Keep binary source assets in `public/`.
- Copy `public/` to `dist/` first so existing URLs such as `/profile/aaryan.jpg`, `/projects/irene/demo.mp4`, and `/documents/resume/...` remain stable.
- Overlay `site/` afterward.
- Write `.nojekyll` into `dist/`.

### 2. Add automated content guards

Use Node's built-in test runner so the rebuild has no package-install dependency.

Tests must verify:
- all four primary source pages exist;
- the same four nav destinations appear everywhere;
- mockup-only fictional organizations/projects are absent;
- the AI surface makes no chat/API request;
- IRENE, NoScroll, Scheduling appear in the intended featured order;
- core research titles remain present.

### 3. Build the global design system

Create `site/assets/styles.css` with:
- warm white background;
- subtle radial gradient wash;
- dark navy/charcoal type;
- Fraunces display typography;
- IBM Plex Sans body typography;
- floating centered glass nav;
- active nav pill;
- responsive breakpoints for 1120, 860, and 560px;
- explicit keyboard focus treatment;
- reduced-motion overrides.

### 4. Build the About page

Create `site/index.html` with:
- real profile image;
- Builder · Researcher · Policy Enthusiast eyebrow;
- Aaryan Srivastava display heading;
- concise AI/policy/law/institutions introduction;
- inert “Talk to my AI Agent About me” prompt surface;
- four-row real experience preview;
- link to `/experiences/`.

### 5. Build Experiences

Create `site/experiences/index.html` with the approved accordion treatment.

Include verified rows for:
- IRENE AI Logistics;
- University of Michigan research;
- LSA Student Government;
- Einsteins Square;
- Visionary Summit;
- Hedman Law Firm.

Each row exposes concise verified highlights. Use real buttons with `aria-expanded` and `aria-controls`; `site/assets/site.js` keeps one row open at a time.

### 6. Build Projects

Create `site/projects/index.html`.

Featured order:
1. IRENE AI Logistics Platform — real `/projects/irene/demo.mp4`.
2. NoScroll — real screenshot collage from `/projects/noscroll-app/`.
3. Scheduling Automation System — real `/projects/scheduling-automation/demo.mp4`.

Below that, add a Project Directory with only verified entries such as Federal Litigation Bias Analysis, WWI Soldier Service Dataset, and Visionary Summit.

Never fabricate dashboard screenshots or links.

### 7. Build Papers

Create `site/papers/index.html` with the approved wide-row layout.

Use verified titles, dates/statuses, and SSRN links. Document previews are neutral CSS paper mockups only; they must not contain invented charts, data, or claims.

### 8. Preserve secondary routes

`build-static.mjs` generates lightweight new-shell detail pages for the existing project/research slugs and keeps the historical federal sentencing PDF route available.

Create `/resume/` with the new shell and embed/link the existing PDF.

### 9. SEO and discovery

Ship:
- route-specific titles/descriptions;
- `site/robots.txt`;
- `site/llms.txt`;
- `site/sitemap.xml`.

### 10. CI and deployment

CI on the redesign branch must run:
- `npm test`;
- `npm run build`;
- checks for primary generated HTML;
- checks that real profile/IRENE assets are present after build.

Production Pages deployment on `master` must run the same content tests before publishing `dist/`.

### 11. Visual acceptance

At 1440px, compare against the approved four renders in this order:
1. composition and proportions;
2. headline scale and line length;
3. nav width/height and active pill;
4. card radii and borders;
5. spacing and content density;
6. shadow strength and background wash.

Do not chase raster noise from the generated reference. Target approximately 95%+ perceptual similarity.

### 12. Responsive acceptance

Review at 1440, 1280, 1024, 768, 390, and 360px.

Must have:
- no horizontal overflow;
- usable four-item nav;
- stacked About hero on small screens;
- compact experience rows;
- one-column featured projects below tablet width;
- paper preview below content on smaller screens.

## Verification command set

```bash
npm test
npm run build
```

On GitHub CI, additionally confirm:

```bash
test -f dist/index.html
test -f dist/experiences/index.html
test -f dist/projects/index.html
test -f dist/papers/index.html
test -f dist/profile/aaryan.jpg
test -f dist/projects/irene/demo.mp4
```

## Phase-1 non-goals

Do not add:
- functional AI agent;
- RAG/vector database;
- backend API;
- CMS;
- authentication;
- analytics dashboard;
- new unverifiable claims;
- fake product/research media.
