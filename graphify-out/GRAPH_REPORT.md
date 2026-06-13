# Graph Report - personal-website  (2026-06-13)

## Corpus Check
- 52 files · ~20,032 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 214 nodes · 277 edges · 22 communities (13 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dba6ba15`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `GitHubIcon()` - 7 edges
3. `Chapter` - 6 edges
4. `scripts` - 5 edges
5. `LinkedInIcon()` - 5 edges
6. `MediaAsset` - 5 edges
7. `getWorkItem()` - 4 edges
8. `getResearchItem()` - 4 edges
9. `WorkItem` - 4 edges
10. `TimelineEntry` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ResearchPage()` --calls--> `NotFound()`  [INFERRED]
  src/app/research/[slug]/page.tsx → src/app/not-found.tsx
- `WorkPage()` --calls--> `NotFound()`  [INFERRED]
  src/app/work/[slug]/page.tsx → src/app/not-found.tsx
- `generateMetadata()` --calls--> `getResearchItem()`  [INFERRED]
  src/app/research/[slug]/page.tsx → src/content/portfolio.ts
- `ResearchPage()` --calls--> `getResearchItem()`  [INFERRED]
  src/app/research/[slug]/page.tsx → src/content/portfolio.ts
- `generateMetadata()` --calls--> `getWorkItem()`  [INFERRED]
  src/app/work/[slug]/page.tsx → src/content/portfolio.ts

## Import Cycles
- None detected.

## Communities (22 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (10): Award, Certification, Chapter, EvidenceMetric, ExperienceItem, Principle, ResearchItem, WorkItem (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (23): dependencies, framer-motion, lucide-react, next, react, react-dom, devDependencies, eslint (+15 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (11): chapters, proofLinks, timelineEntries, TimelineEntry, EDUCATION, ScrubberItem, kindColor, kindLabel (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (16): ireneMedia, placeholderMedia(), schedulingMedia, ssrn6545939Media, wwiCsvMedia, wwiRawMedia, awards, certifications (+8 more)

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (6): resumeMedia, AccessibleDialogProps, allowedEmbedHosts, MediaFrameProps, MediaLightboxProps, metadata

### Community 5 - "Community 5"
Cohesion: 0.16
Nodes (8): fadeUp(), Hero(), GitHubIcon(), LinkedInIcon(), ModalLink, ModalProps, Project, projects

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.25
Nodes (5): activeResearch, certifications, PubCardProps, Publication, publications

### Community 8 - "Community 8"
Cohesion: 0.32
Nodes (5): NotFound(), getWorkItem(), workItems, WorkPage(), generateMetadata()

### Community 9 - "Community 9"
Cohesion: 0.33
Nodes (4): fraunces, metadata, plexMono, plexSans

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (3): analytical, stats, technical

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **86 isolated node(s):** `PreToolUse`, `eslintConfig`, `nextConfig`, `name`, `version` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `PreToolUse`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _86 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09247311827956989 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09881422924901186 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._