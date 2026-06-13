# Implementation Plan: Personal Website Redesign

## Scope
Complete overhaul of navigation, content, wording, media integration, and experience sections for amazing-aaryan.github.io.

---

## Assets Available
| File | Use |
|------|-----|
| `public/aaryan.jpg` | Hero headshot |
| `public/IRENE.mp4` | IRENE demo video |
| `public/Outschool_scheduler_cdp.mp4` | Scheduling automation demo |
| `public/WW1_raw.png` | WWI archival scan |
| `public/WW1_csv.png` | WWI structured CSV data |
| `public/resume.pdf` | Resume download |

---

## Phase 1 — Content & Data Layer

### 1.1 `src/content/media.ts`
- Replace all `placeholderMedia()` calls with real assets:
  - IRENE → `{ kind: "video", src: "/IRENE.mp4" }`
  - Scheduling → `{ kind: "video", src: "/Outschool_scheduler_cdp.mp4" }`
  - WWI → two image assets: `/WW1_raw.png`, `/WW1_csv.png`
  - Federal Litigation → placeholder (no media yet)
- Add `kind: "image"` to MediaAsset schema if not present

### 1.2 `src/content/portfolio.ts` — Wording Audit + New Entries

#### Fix existing metrics (scheduling):
- Replace "50% faster sorting target" with three evidence metrics:
  - `~85%` efficiency improvement
  - `~15%` revenue increase
  - `~50%` overhead cost reduction

#### Add new WorkItems:
1. **Einsteins Square (Part-Time Executive)** — Feb 2024 – Jul 2025
2. **Hedman Law Firm (Legal Associate)** — Jul 2023 – Aug 2023
3. **LSA Student Government (Appointed Representative)** — Sep 2025 – Present

#### Add new ResearchItem:
- "How Successful Was India's Foreign Policy Under Jawaharlal Nehru During the Cold War?"
  - Link: https://ssrn.com/abstract=6663358

#### Add certifications array (7 entries: Google, Stanford, Microsoft, LandingAI, AGI Inc, Harvard, Oxford)

### 1.3 `src/content/schema.ts`
- Add `"image"` to MediaAsset kind union
- Add `Certification` type
- Add `ExperienceItem` type

---

## Phase 2 — Hero Section
- Add headshot via Next.js `<Image unoptimized />`
- Replace AS monogram with photo

---

## Phase 3 — Navigation
- Mobile hamburger menu (md:hidden toggle)
- Scroll progress bar (thin vermilion line at top)
- Active section highlighting via IntersectionObserver

---

## Phase 4 — Experience Timeline (New Component)
- `src/components/dossier/ExperienceTimeline.tsx`
- Vertical timeline: IRENE, WWI Research, Einsteins Square, Hedman, LSA Gov
- Section ID `#experience` added to nav

---

## Phase 5 — Certifications Section (New Component)
- `src/components/dossier/Certifications.tsx`
- Grid of 7 certification cards
- Section ID `#certifications` added to nav

---

## Phase 6 — Media Integration
- `MediaFrame.tsx`: video renders as `<video controls muted playsInline>`, image renders as `<Image>`
- Remove the dead "Media archive" placeholder section from page.tsx

---

## Phase 7 — Wording Audit
- Full pass on all `body`, `oneLine`, `story`, `method`, `evidence`, `learned`, chapter text
- Resume-grade active verbs, impact-first construction, no hedging

---

## Phase 8 — Design Polish
- DossierCard: show external links (GitHub, SSRN) directly on card
- ResearchDesk: SSRN badge on papers that have links
- EvidenceLedger: source tooltip on hover
- Footer: name + year + GitHub
- Global: `scroll-behavior: smooth`

---

## Execution Order
1. Schema + content data
2. MediaFrame fixes
3. Hero photo
4. Experience timeline
5. Certifications
6. Nav overhaul
7. Design polish
8. Remove placeholder section
9. Build + verify
