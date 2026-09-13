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
