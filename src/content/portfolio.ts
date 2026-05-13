import { placeholderMedia } from "./media";
import type { Award, EvidenceMetric, Principle, ResearchItem, WorkItem } from "./schema";

export const evidenceMetrics: EvidenceMetric[] = [
  {
    value: "3.9",
    label: "GPA",
    context:
      "Academic record while combining computer science, political science, research, and applied product work.",
    source: "resume",
    confidence: "resume",
  },
  {
    value: "100+",
    label: "weekly IRENE users/workflows",
    context:
      "Volunteer-network logistics workflows served by IRENE's AI sorting and review platform.",
    source: "project notes",
    confidence: "project",
  },
  {
    value: "~3M",
    label: "WWI service records",
    context:
      "Target scale for structured American World War I service records reconstructed from archival scans.",
    source: "research project",
    confidence: "in-progress",
  },
  {
    value: "60M",
    label: "federal cases",
    context:
      "Civil litigation records used for disparity analysis across federal courts and plaintiff categories.",
    source: "research dataset",
    confidence: "project",
  },
  {
    value: "$200M",
    label: "litigation supported",
    context:
      "Financial evidence and dashboard work supporting cryptocurrency litigation analysis.",
    source: "resume",
    confidence: "resume",
  },
  {
    value: "30+",
    label: "teachers scheduled",
    context:
      "Scheduling automation scope for class coordination and conflict handling in an EdTech setting.",
    source: "project notes",
    confidence: "project",
  },
  {
    value: "10+",
    label: "EdTech platforms reviewed",
    context:
      "Student data governance and compliance review across platforms touching COPPA and FERPA exposure.",
    source: "resume",
    confidence: "resume",
  },
];

export const principles: Principle[] = [
  {
    title: "Build with audit trails before scale.",
    body:
      "The projects that matter most are usually embedded in institutions. If a system cannot explain what happened, who reviewed it, and where uncertainty entered, it is not ready for people to depend on it.",
    signal: "accountability first",
  },
  {
    title: "Treat messy records as political material.",
    body:
      "Court files, service records, student data, and volunteer workflows are never neutral raw material. The extraction process decides what becomes visible and what disappears.",
    signal: "data has provenance",
  },
  {
    title: "Keep legal and technical reasoning in the same room.",
    body:
      "Compliance problems often have technical blind spots, and technical systems often create legal consequences. My edge is moving across both without flattening either one.",
    signal: "law x systems",
  },
  {
    title: "Make public-interest systems legible to non-specialists.",
    body:
      "A useful dataset or AI tool should not require everyone around it to become a machine-learning engineer. Researchers, lawyers, volunteers, and operators need interfaces they can challenge.",
    signal: "legibility",
  },
];

export const awards: Award[] = [
  {
    title: "University Honors",
    detail: "Recognized at the University of Michigan while combining CS, political science, research, and product work.",
    year: "Fall 2025",
  },
  {
    title: "Gold Medal of Honor",
    detail: "#11 in school history, listed on the technical resume.",
    year: "2025",
  },
  {
    title: "World Scholar's Cup",
    detail: "2 Gold Trophies, 4 Gold Medals, and 2 Silver Medals.",
    year: "2025",
  },
  {
    title: "Academic Excellence Award",
    detail: "Repeated academic recognition across multiple years.",
    year: "2023-2025",
  },
];

export const workItems: WorkItem[] = [
  {
    slug: "irene-ai-logistics",
    title: "IRENE AI Logistics Platform",
    role: "Founder",
    period: "Jan 2026 - Present",
    status: "in-progress",
    oneLine:
      "An accountable AI logistics platform for nonprofit volunteer networks, built around reviewable sorting decisions.",
    problem:
      "Volunteer networks receive messy, fast-moving resource inflows. Labels, donor notes, photos, and routing needs rarely arrive as clean structured data.",
    stakes:
      "A wrong classification can delay relief, hide scarcity, or teach volunteers to trust a black-box system that cannot explain itself.",
    constraints: [
      "Unstructured photos and labels from real operating environments.",
      "Human review needs to be fast enough for volunteer workflows.",
      "Every AI decision needs a traceable record for correction and audit.",
    ],
    approach: [
      "Built a computer-vision and OCR pipeline for item labels and donor tags.",
      "Designed a confidence-aware review queue that exposes uncertain predictions before they become operational decisions.",
      "Logged model version, input, confidence, and final human-confirmed label so later errors can be traced.",
      "Used corrected volunteer actions as labeled training data for a self-improving loop.",
    ],
    outcomes: [
      evidenceMetrics[1],
      {
        value: "50%",
        label: "faster sorting target",
        context:
          "Projected workflow improvement from reduced wait time and reviewable classification.",
        source: "project notes",
        confidence: "estimate",
      },
    ],
    stack: ["Python", "Computer Vision", "OCR", "Decision Logs", "Human Review"],
    media: [
      placeholderMedia("IRN-01", "Architecture, screenshots, and workflow videos can slot in here."),
    ],
    links: [{ label: "GitHub", href: "https://github.com/amazing-aaryan", kind: "github" }],
    ethics: [
      "Avoid silent automation by routing uncertainty to humans.",
      "Keep model outputs auditable by preserving input, confidence, and version metadata.",
      "Treat corrections as governance data, not merely product telemetry.",
    ],
    learned:
      "AI products in civic operations need accountability primitives early, before scale makes them expensive to retrofit.",
  },
  {
    slug: "wwi-service-dataset",
    title: "WWI Soldier Service Dataset",
    role: "Research Assistant",
    period: "Jan 2026 - Present",
    status: "research",
    oneLine:
      "A structured, queryable dataset of American World War I service records for political trust research.",
    problem:
      "Archival service records are rich but difficult to use at scale because scans, handwriting, abbreviations, and damaged pages resist simple extraction.",
    stakes:
      "Without careful reconstruction, political scientists cannot test how wartime sacrifice affected later trust, turnout, and public support.",
    constraints: [
      "Period-specific handwriting and non-standard military abbreviations.",
      "Records need linkage to county-level political and demographic data.",
      "Uncertainty must remain visible instead of becoming false precision.",
    ],
    approach: [
      "Built OCR and document extraction workflows for scanned service records.",
      "Designed schema fields for name, county, unit, casualty status, and discharge signals.",
      "Prepared linkage paths to Census, electoral, and bond-purchase outcomes.",
    ],
    outcomes: [evidenceMetrics[2]],
    stack: ["OCR", "Document AI", "PostgreSQL", "Historical Data", "Statistics"],
    media: [placeholderMedia("ARC-03", "Archival scan examples and schema diagrams can be added as media.")],
    links: [],
    ethics: [
      "Represent archival uncertainty honestly in the dataset.",
      "Avoid overclaiming causal findings before the identification strategy is complete.",
      "Keep the dataset legible to non-technical historians and policy researchers.",
    ],
    learned:
      "Historical datasets are not just extraction problems; they are translation problems between records, institutions, and research designs.",
  },
  {
    slug: "federal-litigation-bias-analysis",
    title: "Federal Litigation Bias Analysis",
    role: "Independent Researcher",
    period: "Sep 2025 - Present",
    status: "research",
    oneLine:
      "An AI-assisted legal analytics workflow for surfacing disparities in federal civil litigation outcomes.",
    problem:
      "Federal courts produce enormous public records, but outcome patterns are difficult to inspect across plaintiff type, jurisdiction, claim category, and time.",
    stakes:
      "If legal outcomes vary systematically with resources or court context, access-to-justice debates need evidence at institutional scale.",
    constraints: [
      "Case dispositions are often ambiguous and resist naive win/loss coding.",
      "Legal nuance requires source-grounded answers, not unsupported model summaries.",
      "Large datasets need statistical summaries and case-level drilldown.",
    ],
    approach: [
      "Structured federal civil case metadata for statistical querying.",
      "Used retrieval-augmented generation for plain-language legal questions grounded in case records.",
      "Separated exploratory findings from policy claims so the system can support review rather than replace it.",
    ],
    outcomes: [evidenceMetrics[3]],
    stack: ["LangChain", "Azure OpenAI", "RAG", "Legal Analytics", "SQL"],
    media: [placeholderMedia("CRT-60M", "Charts, query examples, and sourced answer demos can be added here.")],
    links: [],
    ethics: [
      "Mark AI-assisted outcome coding as provisional where dispositions are ambiguous.",
      "Keep retrieved records visible beside synthesized answers.",
      "Avoid translating statistical disparity directly into legal causation without review.",
    ],
    learned:
      "Legal AI is most useful when it narrows the question and preserves the record, not when it pretends to be a court.",
  },
  {
    slug: "scheduling-automation-system",
    title: "Scheduling Automation System",
    role: "Automation Builder",
    period: "Dec 2025 - Present",
    status: "in-progress",
    oneLine:
      "A browser automation system for class scheduling across teacher availability, constraints, and operational edge cases.",
    problem:
      "Manual class scheduling creates avoidable coordination load, especially when teacher availability, subjects, and room constraints shift.",
    stakes:
      "Scheduling failures waste teacher time, disrupt students, and expose operational fragility inside education platforms.",
    constraints: [
      "No stable API assumption; the system interacts through browser-level automation.",
      "Conflict handling needs human-readable errors when no valid schedule exists.",
      "Student and educator data requires careful handling.",
    ],
    approach: [
      "Used Playwright to automate the scheduling platform through the same browser surface a coordinator would use.",
      "Modeled hard and soft constraints for availability, rooms, subjects, and preferences.",
      "Built error summaries for cases that need human review rather than silent failure.",
    ],
    outcomes: [evidenceMetrics[5]],
    stack: ["Python", "Playwright", "Constraint Logic", "Automation"],
    media: [placeholderMedia("SCH-30", "A redacted workflow capture or constraint diagram can be mounted here.")],
    links: [{ label: "GitHub", href: "https://github.com/amazing-aaryan", kind: "github" }],
    ethics: [
      "Make automation failures explicit and recoverable.",
      "Avoid storing unnecessary student or teacher data.",
      "Keep manual override available for edge cases.",
    ],
    learned:
      "The best automation for fragile institutional workflows often behaves like a careful operator, not a brittle API client.",
  },
];

export const researchItems: ResearchItem[] = [
  {
    slug: "sacrifice-for-the-state",
    title: "Sacrifice for the State: Identification or Disillusionment?",
    venue: "University of Michigan",
    year: "Ongoing",
    status: "active research",
    story:
      "Do governments that send citizens to die earn loyalty, or lose it? The project studies how World War I losses shaped later political trust.",
    method:
      "Link county-level casualty exposure to turnout, party shifts, bond purchases, Census data, and related political outcomes.",
    evidence:
      "Built around a large structured service-record dataset, with archival uncertainty carried into the research workflow.",
    tags: ["Political Science", "Historical Data", "WWI", "Statistics"],
    media: [placeholderMedia("RST-WWI", "Working notes, tables, and maps can be added here.")],
  },
  {
    slug: "federal-litigation-success-disparities",
    title: "Assessing Federal Litigation Success Disparities",
    venue: "Independent Research",
    year: "2025",
    status: "working paper",
    story:
      "Federal courts promise equal treatment, but litigation records can reveal systematic outcome disparities.",
    method:
      "Analyze plaintiff type, court, circuit, category, time, and disposition signals across large-scale civil case records.",
    evidence:
      "Uses a 60M-record federal civil litigation dataset and AI-assisted coding for difficult dispositions.",
    tags: ["Legal Research", "Data Analysis", "Access to Justice"],
    media: [placeholderMedia("RST-CRT", "Charts and sourced examples can be added here.")],
  },
  {
    slug: "autonomous-agent-sentencing-disparities",
    title: "Autonomous Agent-Driven Analysis of Federal Sentencing Disparities",
    venue: "SSRN",
    year: "2025",
    status: "preprint",
    story:
      "Autonomous analysis agents can help surface sentencing patterns that are too slow to find manually.",
    method:
      "Agentic querying, filtering, and cross-tabulation over public sentencing data for human review.",
    evidence:
      "Published as an SSRN preprint with reproducible prompts and pipeline logic.",
    tags: ["AI Agents", "Sentencing", "Legal Analytics"],
    link: "https://ssrn.com/abstract=6545939",
    media: [placeholderMedia("SSRN-6545939", "Preprint and replication materials can be linked here.")],
  },
  {
    slug: "ai-regulation-eu-us",
    title: "Why Has International Cooperation on AI Regulation Been Difficult Between the EU and the United States?",
    venue: "SSRN",
    year: "2025",
    status: "preprint",
    story:
      "Two democratic regulatory blocs share concerns about AI but diverge in legal philosophy and political economy.",
    method:
      "Compare rights-based precautionary governance with sector-specific innovation-first governance.",
    evidence:
      "Frames divergence as institutional and economic conflict, not merely diplomatic failure.",
    tags: ["AI Policy", "EU", "United States", "International Law"],
    link: "https://ssrn.com/abstract=6662638",
    media: [placeholderMedia("SSRN-6662638", "Preprint link and policy timeline can be added here.")],
  },
  {
    slug: "llm-microtargeted-political-messaging",
    title: "How Effectively Do LLM-Driven, Micro-Tailored Political Messages Influence Public Opinion?",
    venue: "Working draft",
    year: "2025",
    status: "draft",
    story:
      "AI-generated persuasion at low cost raises practical questions for campaign disclosure and democratic consent.",
    method:
      "Compare generic messaging against LLM-tailored messaging aligned to stated values and demographics.",
    evidence:
      "Focuses on measurable attitude movement and the policy implications of scalable persuasion.",
    tags: ["LLMs", "Political Communication", "Democracy"],
    media: [placeholderMedia("RST-MSG", "Experiment design and consent materials can be added here.")],
  },
  {
    slug: "loac-low-reciprocity",
    title: "What Explains Variation in State Compliance with the Laws of Armed Conflict Under Conditions of Low Reciprocity?",
    venue: "SSRN",
    year: "2025",
    status: "preprint",
    story:
      "States sometimes follow humanitarian law even when the opposing side cannot reciprocate or punish violations.",
    method:
      "Test reputation, norm internalization, and institutional pressure across low-reciprocity conflict settings.",
    evidence:
      "Argues institutional embeddedness and professional military training explain compliance better than reputation alone.",
    tags: ["International Law", "Conflict", "Political Science"],
    link: "https://ssrn.com/abstract=6546018",
    media: [placeholderMedia("SSRN-6546018", "Preprint and case comparison materials can be linked here.")],
  },
];

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getResearchItem(slug: string) {
  return researchItems.find((item) => item.slug === slug);
}
