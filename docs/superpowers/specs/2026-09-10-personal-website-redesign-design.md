# Personal Website Redesign Design Specification

## Status

Approved visual direction based on:
1. the user's hand-drawn information-architecture sketch;
2. the generated About reference;
3. the generated Experiences reference;
4. the generated Projects reference;
5. the generated Papers reference.

This file is the canonical design source for all agents working on the website. The implementation should preserve the visual language of the references while using only real, verified Aaryan Srivastava content from the repository. The AI-agent surface is visual-only in this phase.

## Goal

Replace the current dark “Archive × Machine” dossier-style portfolio with a bright, premium, editorial personal website that is faster to scan, easier to navigate, and much closer to the preferred design.

## Implementation strategy

The active public site may be rebuilt from scratch rather than adapting the previous Next.js component tree. The existing `public/` directory should remain the source of truth for verified binary media and documents. A dependency-free static application surface is acceptable and preferred when it improves reliability and visual fidelity on GitHub Pages.

## Information Architecture

Primary routes:
- `/` — About
- `/experiences/` — Experiences
- `/projects/` — Projects
- `/papers/` — Papers

Secondary routes should remain available where practical:
- `/work/[slug]/`
- `/research/[slug]/`
- `/resume/`

## Global Visual Direction

- Bright off-white / warm-white background.
- Dark charcoal primary text.
- Muted blue-gray secondary text.
- Large editorial serif headings.
- Clean sans-serif body copy.
- Soft, extremely subtle abstract background gradients.
- Generous whitespace.
- Rounded white/glass surfaces with restrained borders and shadows.
- No dark dossier styling.
- No dense evidence-ledger visual language on the primary pages.
- Minimal use of accent color.
- The design should feel like a high-end researcher/builder portfolio, not a startup landing page.

## Navigation

A floating, centered, rounded “liquid glass” navigation bar appears on all primary routes.

Items in this exact order:
- About
- Experiences
- Projects
- Papers

Requirements:
- Active route uses a filled/soft-highlighted pill.
- Small simple icons plus labels.
- Fixed near the top.
- Backdrop blur with Safari-compatible fallback.
- Keyboard accessible.
- Must fit at 360px without horizontal page overflow.

## About Page

Desktop:
- Profile photo at left using `/profile/aaryan.jpg`.
- Name “Aaryan Srivastava” as the dominant headline.
- Eyebrow: “Builder · Researcher · Policy Enthusiast”.
- Short introduction centered on AI, policy, law, institutions, research, and building.
- A subtle right-side editorial statement may be used if it does not compete with the hero.
- Prominent horizontal AI-agent prompt surface below the intro.
- Prompt surface is visual only in phase 1:
  - “Talk to my AI Agent About me”
  - “Ask me anything...”
  - no network request
  - no fake chat
- Below the hero, show a compact experience preview using real experiences.
- “View all experiences” links to `/experiences/`.

Mobile:
- Stack profile, copy, and agent surface vertically.
- Experience preview becomes compact rows.

## Experiences Page

- Large “Experiences” heading and one-line introduction.
- Accordion list.
- Each row: monogram/logo, organization, role/title, date range, chevron.
- Only one row needs to be open by default.
- Expanded row reveals concise verified highlights.
- Accordion must use buttons with `aria-expanded` and `aria-controls`.
- No invented organizations, titles, dates, or metrics.

## Projects Page

Featured projects in this order:
1. IRENE AI Logistics Platform
2. NoScroll
3. Scheduling Automation System

Desktop alternation:
- Project 1 media left, copy right.
- Project 2 copy left, media right.
- Project 3 media left, copy right.

Each featured project:
- category/discipline eyebrow;
- title;
- period;
- concise description;
- real links only;
- actual project media from the repository where possible.

Media:
- IRENE: `/projects/irene/demo.mp4`.
- NoScroll: real screenshots under `/projects/noscroll-app/`.
- Scheduling: `/projects/scheduling-automation/demo.mp4`.
- Respect `prefers-reduced-motion`.
- Never autoplay audio.
- Do not create fake dashboards and present them as real product screenshots.

Project Directory:
- Use remaining verified work such as Federal Litigation Bias Analysis, WWI Soldier Service Dataset, and Visionary Summit.
- Cards include media where available, title, one-line summary, and real destination.
- Never add render-only fake projects such as “Climate Policy Insights” or “Civic Data Explorer”.

## Papers Page

- Large “Papers” heading and concise subtitle.
- Vertical stack of wide paper rows/cards.
- Left: title, year/status, short abstract/summary, venue/status, real destination.
- Right: document preview.
- If a local PDF exists, it may be linked directly.
- If no PDF preview exists, use a neutral document-cover treatment containing only title/year/status. Do not invent charts or figures.
- Preserve real SSRN links already present in repository content.

## Content Integrity

Visual mockups are design references only. Never copy their fictional content, including:
- OpenAI experience;
- Google experience;
- World Bank experience;
- Harvard experience;
- fake project dates;
- fake product screenshots or metrics;
- invented project names.

When repository sources disagree, prefer conservative public copy and avoid claiming “Present” or a metric unless reasonably supported.

## Typography

Primary web fonts:
- Fraunces for display/serif typography.
- IBM Plex Sans for body typography.
- System serif/sans fallbacks are required.

## Design Tokens

Initial targets:
- `--bg: #fbfaf7`
- `--surface: rgba(255,255,255,.78)`
- `--text: #111827`
- `--muted: #667085`
- `--border: rgba(31,41,55,.105)`
- `--nav-active: rgba(24,32,46,.055)`
- soft shadow roughly `0 18px 48px rgba(33,41,52,.075)`
- content max width roughly `1180–1240px`
- card radius roughly `16–28px`
- nav radius `999px`

Final tuning is visual-reference driven.

## Responsiveness

Acceptance widths:
- 1440 desktop
- 1280 laptop
- 1024 compact desktop/tablet landscape
- 768 tablet
- 390 mobile
- 360 narrow mobile

Rules:
- No horizontal page scroll.
- Nav remains usable at 360px.
- Featured project alternation collapses to one column on smaller widths.
- Paper preview moves below copy if needed.
- Experience rows preserve readable organization/title/date hierarchy.
- Hero profile and name remain visually dominant.

## Motion

Allowed:
- subtle active-state transitions;
- accordion open/close;
- restrained media treatment.

Disallowed:
- excessive parallax;
- distracting looping decorative animation;
- motion that ignores reduced-motion preference.

## Accessibility

- Semantic landmarks.
- One H1 per primary page.
- Correct heading hierarchy.
- Visible keyboard focus.
- Accessible accordion controls.
- Decorative visuals hidden where appropriate.
- Image/video alternatives.
- WCAG AA contrast.
- Reduced-motion support.

## Performance

- GitHub Pages deployment must remain static and dependency-light.
- Prefer local assets.
- Do not preload large project videos.
- Keep route JavaScript minimal.

## SEO / Discovery

- Unique title/description for each primary page.
- Keep/update `robots.txt`, `llms.txt`, and sitemap.
- Preserve resume and research URLs where possible.

## Non-Goals for Phase 1

- Functional AI agent.
- RAG/vector database.
- Chat API routes.
- CMS/admin.
- Authentication.
- Analytics dashboard.
- New unverifiable portfolio claims.
- Fabricated product/research screenshots.

## Acceptance Standard

At 1440px desktop, the implementation should achieve approximately 95%+ perceptual similarity to the approved visual references in composition, spacing, typography hierarchy, navigation proportions, card radii, shadows, background treatment, and content density. Exact pixel equality is not required because the references are rasterized concept renders rather than Figma measurements.
