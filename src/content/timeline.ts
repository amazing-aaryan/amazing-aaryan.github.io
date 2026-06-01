import { ireneMedia, schedulingMedia, wwiCsvMedia, wwiRawMedia } from "./media";
import type { MediaAsset } from "./schema";

export type TimelineEntry = {
  id: string;
  index: number;
  title: string;
  role: string;
  org: string;
  period: string;
  kind: "project" | "research" | "job" | "leadership";
  narrative: string;
  tags: string[];
  media: MediaAsset[];
  metrics?: { value: string; label: string }[];
  slug?: string;
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "irene",
    index: 1,
    title: "IRENE AI Logistics Platform",
    role: "Founder",
    org: "IRENE",
    period: "Jan 2026 – Present",
    kind: "project",
    narrative:
      "Volunteer networks receive chaotic, fast-moving resource inflows — handwritten labels, donor photos, routing notes that resist any clean classification. IRENE treats every AI decision as an operational record: the prediction, the confidence level, and the human correction all persist. Nothing disappears into a black box.",
    tags: ["Python", "Computer Vision", "OCR", "Human Review"],
    media: [ireneMedia],
    metrics: [
      { value: "100+", label: "weekly workflows" },
      { value: "~85%", label: "efficiency gain" },
      { value: "~50%", label: "overhead cut" },
    ],
    slug: "irene-ai-logistics",
  },
  {
    id: "wwi",
    index: 2,
    title: "WWI Soldier Service Dataset",
    role: "Research Assistant",
    org: "University of Michigan",
    period: "Jan 2026 – Present",
    kind: "research",
    narrative:
      "Three million American service records from World War I exist as archival scans — period handwriting, military abbreviations, damaged pages. Structured carefully, they become a dataset for testing how wartime sacrifice shaped political trust, turnout, and bond purchases decades later.",
    tags: ["OCR", "Document AI", "PostgreSQL", "Historical Data"],
    media: [wwiRawMedia, wwiCsvMedia],
    metrics: [{ value: "~3M", label: "target records" }],
    slug: "wwi-service-dataset",
  },
  {
    id: "litigation",
    index: 3,
    title: "Federal Litigation Bias Analysis",
    role: "Independent Researcher",
    org: "Independent",
    period: "Sep 2025 – Present",
    kind: "research",
    narrative:
      "Sixty million federal civil cases are public record. The patterns inside — who wins, who settles, which courts diverge — are not. Retrieval-augmented generation lets the dataset answer plain-language questions while keeping every answer grounded in actual case records, not model inference.",
    tags: ["LangChain", "Azure OpenAI", "RAG", "Legal Analytics"],
    media: [],
    metrics: [
      { value: "60M", label: "cases" },
      { value: "$200M", label: "litigation supported" },
    ],
    slug: "federal-litigation-bias-analysis",
  },
  {
    id: "scheduling",
    index: 4,
    title: "Scheduling Automation System",
    role: "Automation Builder",
    org: "Outschool",
    period: "Dec 2025 – Present",
    kind: "project",
    narrative:
      "No stable API, no documentation — just the browser surface a coordinator already uses. Playwright navigates it like a careful operator: models teacher availability and room constraints, and surfaces human-readable errors when no valid schedule exists rather than failing silently.",
    tags: ["Python", "Playwright", "Constraint Logic"],
    media: [schedulingMedia],
    metrics: [
      { value: "30+", label: "teachers scheduled" },
      { value: "~85%", label: "efficiency gain" },
      { value: "~15%", label: "revenue increase" },
    ],
    slug: "scheduling-automation-system",
  },
  {
    id: "lsa-gov",
    index: 5,
    title: "LSA Student Government",
    role: "Appointed Representative",
    org: "University of Michigan",
    period: "Sep 2025 – Present",
    kind: "leadership",
    narrative:
      "Appointed to represent students in the College of Literature, Science, and the Arts governance structure. Policy advocacy at the intersection of institutional process and student needs.",
    tags: ["Policy", "Governance"],
    media: [],
  },
  {
    id: "einsteins-square",
    index: 6,
    title: "Einsteins Square",
    role: "Part-Time Executive",
    org: "Einsteins Square",
    period: "Feb 2024 – Jul 2025",
    kind: "job",
    narrative:
      "Leadership and operations at an academic enrichment organization serving K–12 students. Managed educator coordination, curriculum operations, and organizational planning across a growing program.",
    tags: ["Operations", "Education Management"],
    media: [],
  },
  {
    id: "hedman-law",
    index: 7,
    title: "Hedman Law Firm",
    role: "Legal Associate",
    org: "Hedman Law",
    period: "Jul 2023 – Aug 2023",
    kind: "job",
    narrative:
      "Legal research and associate work at a private practice. Early exposure to how law operates at the document and institutional level — before the technical work made it analytical.",
    tags: ["Legal Research", "Law"],
    media: [],
  },
];
