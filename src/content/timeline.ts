import { ireneMedia, schedulingMedia, wwiCsvMedia, wwiRawMedia } from "./media";
import type { MediaAsset } from "./schema";

export type TimelineEntry = {
  id: string;
  index: number;
  title: string;
  role: string;
  org: string;
  period: string;
  startDate: string; // YYYY-MM, used by ChronologicalScrubber for ordering
  kind: "project" | "research" | "job" | "leadership";
  narrative: string;
  highlights?: string[];
  tags: string[];
  media: MediaAsset[];
  metrics?: { value: string; label: string }[];
  slug?: string;
};

// Ordered reverse-chronologically by startDate
export const timelineEntries: TimelineEntry[] = [
  {
    id: "noscroll",
    index: 1,
    title: "NoScroll",
    role: "Founder",
    org: "NoScroll",
    period: "May 2026 - Present",
    startDate: "2026-05",
    kind: "project",
    narrative:
      "The first app natively converting doom-scrolling behavior into reading. Identified an untapped behavioral market and built native Instagram quote-sharing to drive social engagement and organic user acquisition.",
    highlights: [
      "Identified untapped behavioral market and built the first app natively converting doom-scrolling to reading",
      "Integrated native Instagram quote-sharing to drive social engagement and organic user acquisition",
    ],
    tags: ["Product", "Behavioral Design", "Reading", "Mobile"],
    media: [],
  },
  {
    id: "irene",
    index: 2,
    title: "IRENE AI Logistics Platform",
    role: "Founder",
    org: "IRENE",
    period: "Jan 2026 - Present",
    startDate: "2026-01",
    kind: "project",
    narrative:
      "IRENE uses multimodal image intelligence to make supply-chain sorting legible in volunteer operations. The system keeps humans in the loop and treats each prediction as an operational record that can be reviewed, corrected, and traced.",
    highlights: [
      "Built a multimodal OCR + CV pipeline, reducing sorting errors and improving classification accuracy",
      "Automated data collection and retraining, enabling continuous model improvement and scalable dataset growth",
      "Improved volunteer sorting efficiency by ~20% for 100+ weekly users via optimized inference and UI-assisted validation",
      "Designed a traceability system linking predictions to logistics metadata, enabling end-to-end auditability",
    ],
    tags: ["Python", "Computer Vision", "OCR", "Human Review"],
    media: [ireneMedia],
    metrics: [
      { value: "~20%", label: "efficiency improvement" },
      { value: "100+", label: "weekly active users" },
    ],
    slug: "irene-ai-logistics",
  },
  {
    id: "wwi",
    index: 3,
    title: "WWI Soldier Service Dataset",
    role: "Research Assistant",
    org: "University of Michigan",
    period: "Jan 2026 - Present",
    startDate: "2026-01",
    kind: "research",
    narrative:
      "Three million American service records from World War I exist as archival scans — period handwriting, military abbreviations, damaged pages. Structured carefully, they become a dataset for testing how wartime sacrifice shaped political trust, turnout, and bond purchases decades later.",
    highlights: [
      "Designed an OCR + data processing pipeline to clean and structure ~3M historical records into a queryable dataset",
      "Building and publishing the first large-scale dataset of American WWI soldiers' service data for downstream research use",
      "Performing statistical analysis on millions of observations to evaluate how soldier deaths influenced political support",
    ],
    tags: ["OCR", "Document AI", "PostgreSQL", "Historical Data"],
    media: [wwiRawMedia, wwiCsvMedia],
    metrics: [{ value: "~3M", label: "target records" }],
    slug: "wwi-service-dataset",
  },
  {
    id: "scheduling",
    index: 4,
    title: "Scheduling Automation System",
    role: "Automation Builder",
    org: "Outschool",
    period: "Dec 2025 - Feb 2026",
    startDate: "2025-12",
    kind: "project",
    narrative:
      "Browser-level automation turned a fragile scheduling workflow into a repeatable system. It handles operational edge cases through the same interface a human coordinator uses, while surfacing failures clearly instead of silently breaking.",
    highlights: [
      "Built deterministic RPA system automating class scheduling on Outschool using Python, Pydantic, pandas, Playwright",
      "Improved efficiency by ~85% across 30+ teachers, increasing revenue by ~15% and reducing overhead cost by ~50%",
    ],
    tags: ["Python", "Playwright", "Constraint Logic"],
    media: [schedulingMedia],
    metrics: [
      { value: "~85%", label: "efficiency improvement" },
      { value: "30+", label: "teachers automated" },
      { value: "~50%", label: "overhead reduction" },
    ],
    slug: "scheduling-automation-system",
  },
  {
    id: "lsa-gov",
    index: 5,
    title: "LSA Student Government",
    role: "Appointed Representative",
    org: "University of Michigan",
    period: "Sep 2025 - Dec 2025",
    startDate: "2025-09",
    kind: "leadership",
    narrative:
      "Appointed to represent students in LSA governance, with work that includes AJC matters and the authorship proposal. The role sits where institutional process, policy drafting, and student advocacy meet.",
    highlights: [
      "Drafted bylaw and constitutional amendments for the Internal Review Committee",
      "Proposed an AI-authorship validation framework aiming to be adopted by the Academic Judiciary Committee, protecting academic integrity for 20,000+ students",
    ],
    tags: ["Policy", "Governance", "AJC", "Authorship Proposal"],
    media: [],
    metrics: [
      { value: "20,000+", label: "students protected" },
    ],
  },
  {
    id: "litigation",
    index: 6,
    title: "Federal Litigation Bias Analysis",
    role: "Independent Researcher",
    org: "Independent",
    period: "Sep 2025 - Present",
    startDate: "2025-09",
    kind: "research",
    narrative:
      "Sixty thousand federal civil cases are public record. The patterns inside — who wins, who settles, and which courts diverge — are harder to inspect. This work uses retrieval-augmented analysis to let researchers query those records while keeping answers grounded in the underlying case data.",
    highlights: [
      "Created a RAG database agent leveraging pandas and SQL, developed via LangChain and Azure OpenAI",
      "Constructed a comprehensive technical report discussing systematic biases discovered in the ~60M row dataset",
    ],
    tags: ["LangChain", "Azure OpenAI", "RAG", "Legal Analytics"],
    media: [],
    metrics: [{ value: "60,000", label: "federal cases" }],
    slug: "federal-litigation-bias-analysis",
  },
  {
    id: "einsteins-square",
    index: 7,
    title: "Einsteins Square",
    role: "Part-Time Executive",
    org: "Einsteins Square",
    period: "Feb 2024 - Jul 2025",
    startDate: "2024-02",
    kind: "job",
    narrative:
      "Performed compliance audits across EdTech clients, mapped student-data flows, and helped standardize governance and contracts across a growing operating footprint.",
    highlights: [
      "Audited 10+ EdTech platforms by mapping data flows and identifying compliance risks under COPPA/FERPA frameworks",
      "Structured data governance workflows by standardizing contracts for 50+ educators, ensuring scalable compliance processes",
      "Analyzed KPI-driven operational data to identify inefficiencies and improve compliance and audit readiness",
      "Delivered improvement roadmaps to organizational leadership, driving adoption of compliance reforms",
    ],
    tags: ["Operations", "Education Management", "Compliance", "COPPA", "FERPA"],
    media: [],
    metrics: [
      { value: "10+", label: "EdTech platforms audited" },
      { value: "50+", label: "educator contracts standardized" },
    ],
  },
  {
    id: "visionary-summit",
    index: 8,
    title: "Visionary Summit",
    role: "Founder",
    org: "Visionary Summit",
    period: "Nov 2023 - May 2025",
    startDate: "2023-11",
    kind: "leadership",
    narrative:
      "Founded and ran Visionary Summit for 18 months — a student-led organization in Tallinn built around the idea that high-school students should have direct access to the diplomats, founders, and lawyers shaping AI and law. Every event sold to capacity. At peak, it reached roughly 30% of Tallinn's international high school community.",
    highlights: [
      "Founded organization aimed at bridging students, diplomats, and founders on AI, law, and innovation",
      "Hosted panels with ambassadors, NGOs, VCs, and startup founders (Bolt, Alpa Kids, Forus Auto, Clanbeat)",
      "Achieved full capacity at events, engaging ~30% of Tallinn's international high school student community",
    ],
    tags: ["Leadership", "AI Policy", "Events", "Diplomacy"],
    media: [],
    metrics: [
      { value: "18", label: "months running" },
      { value: "~30%", label: "of Tallinn IHS community" },
    ],
  },
  {
    id: "hedman-law",
    index: 9,
    title: "Hedman Law Firm",
    role: "Legal Associate",
    org: "Hedman Law",
    period: "Jul 2023 - Aug 2023",
    startDate: "2023-07",
    kind: "job",
    narrative:
      "Built financial models and cryptocurrency valuation tools supporting a $200M international class-action lawsuit, alongside cross-border IP and litigation support work.",
    highlights: [
      "Built financial models and valuation tools supporting a $200M international class-action lawsuit",
      "Coordinated cross-border IP registrations across jurisdictions, reducing multi-jurisdictional friction",
      "Structured incorporation and compliance documentation for international Hong Kong–Estonia entities",
      "Advised on IP strategy, corporate structuring, and litigation alongside senior legal counsel",
    ],
    tags: ["Legal Research", "Litigation Support", "Finance", "IP Law"],
    media: [],
    metrics: [
      { value: "$200M", label: "litigation supported" },
    ],
  },
];
