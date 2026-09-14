# reasoning.md — Design Memory

Append-only. Never delete entries. Agents read this before making design decisions.

## Format
```
## [YYYY-MM-DD HH:MM] <one-line summary>
**Decision:** ...
**Why:** ...
**Impact:** ...
```

---

## [2026-09-13 13:05] Stabilized live visual surfaces and legacy routes
**Decision:** Replace live PDF object viewers with generated static page previews, remove obsolete Experiences links from project detail navigation, add fixed-nav anchor spacing, preserve legacy route aliases, and add a custom 404 page.
**Why:** Live GitHub Pages QA showed blank PDF panels and inconsistent detail-page navigation; recruiter-facing routes should remain reachable with predictable visual rendering.
**Impact:** Static build now serves image-based paper/resume previews, three-item navigation, reachable `/about/`, `/experience/`, `/cv/` aliases, and a branded fallback page.

## [2026-09-13 13:22] Added poster frames for autoplay demos
**Decision:** Extract first-use poster frames from IRENE and Scheduling demo videos and attach them to the featured project video elements.
**Why:** Live browser capture briefly showed neutral gray media frames before video metadata loaded; poster frames preserve visual continuity during first paint.
**Impact:** Projects page now has immediate media content while autoplay videos initialize, with source assets covered by regression tests.

## [2026-09-13 13:48] Refined IRENE first-paint poster
**Decision:** Use a later IRENE video frame showing the scanned product instead of the earlier loading-spinner frame.
**Why:** The live responsive capture confirmed the poster prevented blank media, but the later frame communicates the project faster to first-time visitors.
**Impact:** Featured IRENE media now opens with a clearer product state at every tested viewport.

## [2026-09-13 14:10] Improve NoScroll continuity and add theme control
**Decision:** Preserve complete NoScroll 4:5 screenshots with contain framing, then add a persistent light/dark theme toggle to the shared static shell.
**Why:** Live collage capture showed cover cropping across the three screens, and the site had no dark mode despite the visual system being suited to a night reading palette.
**Impact:** NoScroll screens remain legible and aligned across breakpoints; all primary, detail, generated, and diagram routes can switch themes consistently.

## [2026-09-13 14:25] Keep theme toggle inside navigation chrome
**Decision:** Position theme control absolutely within the shared nav and reserve its space in the three-link grid across responsive breakpoints.
**Why:** Live GitHub Pages capture showed the button becoming an implicit fourth grid row, creating a large broken strip below navigation.
**Impact:** Theme control stays compact, aligned, and usable on desktop and mobile while preserving the three-link navigation layout.

## [2026-09-13 15:05] Add fallback posters to project detail videos
**Decision:** Give IRENE and Scheduling detail-page videos the same static poster frames already used on the Projects listing.
**Why:** Live media audit found both detail videos served successfully but remained at `readyState=0` until playback, leaving a blank first paint when autoplay or metadata loading was delayed.
**Impact:** Detail pages show useful project media immediately while videos load or remain blocked, with no route or asset contract changes.

## [2026-09-14 10:15] Center theme control within shared navigation
**Decision:** Vertically center the absolute theme toggle against the nav capsule with `top:50%` and `translateY(-50%)`.
**Why:** Live geometry showed the control sitting roughly 6px below nav links at responsive widths because fixed `top:8px` ignored shorter nav rows.
**Impact:** Moon/sun control shares the same vertical center as About, Projects, and Papers across desktop, tablet, and mobile layouts.

## [2026-09-14 10:25] Version theme stylesheet to defeat stale browser cache
**Decision:** Add a commit version query to shared `styles.css` references and static-build output.
**Why:** Current browser cache continued serving pre-fix CSS after successful deployment, hiding the responsive centering change.
**Impact:** Existing and new page loads request corrected nav CSS immediately; tests now require cache-busted theme stylesheet references.
