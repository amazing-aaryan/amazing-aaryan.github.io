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
    period: "Jan 2026 - Present",
    kind: "project",
    narrative:
      "IRENE uses multimodal image intelligence to make supply-chain sorting legible in volunteer operations. The system keeps humans in the loop and treats each prediction as an operational record that can be reviewed, corrected, and traced.",
    tags: ["Python", "Computer Vision", "OCR", "Human Review"],
    media: [ireneMedia],
    metrics: [
      { value: "100+", label: "volunteer workflows" },
      { value: "~20%", label: "efficiency improvement" },
      { value: "100+", label: "weekly active users" },
    ],
    slug: "irene-ai-logistics",
  },
  {
    id: "wwi",
    index: 2,
    title: "WWI Soldier Service Dataset",
    role: "Research Assistant",
    org: "University of Michigan",
    period: "Jan 2026 - Present",
    kind: "research",
    narrative:
      "Three million American service records from World War I exist as archival scans - period handwriting, military abbreviations, damaged pages. Structured carefully, they become a dataset for testing how wartime sacrifice shaped political trust, turnout, and bond purchases decades later.",
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
    period: "Sep 2025 - Present",
    kind: "research",
    narrative:
      "Sixty thousand federal civil cases are public record. The patterns inside - who wins, who settles, and which courts diverge - are harder to inspect. This work uses retrieval-augmented analysis to let researchers query those records while keeping answers grounded in the underlying case data.",
    tags: ["LangChain", "Azure OpenAI", "RAG", "Legal Analytics"],
    media: [],
    metrics: [{ value: "60,000", label: "federal cases" }],
    slug: "federal-litigation-bias-analysis",
  },
  {
    id: "scheduling",
    index: 4,
    title: "Scheduling Automation System",
    role: "Automation Builder",
    org: "Outschool",
    period: "Dec 2025 - Present",
    kind: "project",
    narrative:
      "Browser-level automation turned a fragile scheduling workflow into a repeatable system. It handles operational edge cases through the same interface a human coordinator uses, while surfacing failures clearly instead of silently breaking.",
    tags: ["Python", "Playwright", "Constraint Logic"],
    media: [schedulingMedia],
    metrics: [
      { value: "100,000+", label: "meetings scheduled" },
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
    period: "Sep 2025 - Present",
    kind: "leadership",
    narrative:
      "Appointed to represent students in LSA governance, with work that includes AJC matters and the authorship proposal. The role sits where institutional process, policy drafting, and student advocacy meet.",
    tags: ["Policy", "Governance", "AJC", "Authorship Proposal"],
    media: [],
  },
  {
    id: "einsteins-square",
    index: 6,
    title: "Einsteins Square",
    role: "Part-Time Executive",
    org: "Einsteins Square",
    period: "Feb 2024 - Jul 2025",
    kind: "job",
    narrative:
      "Performed compliance audits across EdTech clients, mapped student-data flows, and helped standardize governance and contracts across a growing operating footprint.",
    tags: ["Operations", "Education Management", "Compliance"],
    media: [],
  },
  {
    id: "hedman-law",
    index: 7,
    title: "Hedman Law Firm",
    role: "Legal Associate",
    org: "Hedman Law",
    period: "Jul 2023 - Aug 2023",
    kind: "job",
    narrative:
      "Built financial models and cryptocurrency valuation tools supporting a $200M international class-action lawsuit, alongside cross-border IP and litigation support work.",
    tags: ["Legal Research", "Litigation Support", "Finance"],
    media: [],
  },
];
