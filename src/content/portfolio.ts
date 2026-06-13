import { ireneMedia, noScrollMedia, placeholderMedia, schedulingMedia, ssrn6545939Media, visionarySummitMedia, wwiCsvMedia, wwiRawMedia } from "./media";
import type { Award, Certification, EvidenceMetric, ExperienceItem, Principle, ResearchItem, WorkItem } from "./schema";

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
    label: "weekly active users",
    context:
      "Weekly active users on IRENE's AI sorting and review platform.",
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
    value: "60,000",
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
    value: "100,000+",
    label: "meetings scheduled",
    context:
      "Scheduling automation scope across coordinated class and meeting operations in an EdTech setting.",
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
    year: "2023–2025",
  },
];

export const certifications: Certification[] = [
  {
    id: "google-ai-agents",
    title: "AI Agents Intensive Course",
    issuer: "Google",
    year: "2025",
  },
  {
    id: "stanford-ml",
    title: "Supervised Machine Learning",
    issuer: "Stanford / Coursera",
    year: "2024",
  },
  {
    id: "microsoft-rag",
    title: "RAG Database Agent Course",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    id: "landingai-doc",
    title: "Agentic Document Extraction",
    issuer: "LandingAI",
    year: "2025",
  },
  {
    id: "agi-inc-browser",
    title: "AI Browser Agents",
    issuer: "AGI Inc",
    year: "2025",
  },
  {
    id: "harvard-govtech",
    title: "The Governance of Emerging Technologies",
    issuer: "Harvard Summer School",
    year: "2025",
  },
  {
    id: "oxford-criminal",
    title: "Criminal Law",
    issuer: "Oxford Summer School",
    year: "2025",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "irene",
    role: "Founder",
    org: "IRENE AI Logistics",
    period: "Jan 2026 – Present",
    kind: "project",
    oneLine: "Accountable AI logistics platform for nonprofit volunteer networks — reviewable sorting decisions and human-in-the-loop design.",
  },
  {
    id: "wwi-research",
    role: "Research Assistant",
    org: "University of Michigan",
    period: "Jan 2026 – Present",
    kind: "project",
    oneLine: "Structured ~3M WWI service records for county-level political trust research using OCR and document extraction pipelines.",
  },
  {
    id: "lsa-gov",
    role: "Appointed Representative",
    org: "LSA Student Government",
    period: "Sep 2025 – Present",
    kind: "leadership",
    oneLine:
      "Represents student interests in LSA governance, including AJC matters and the authorship proposal.",
  },
  {
    id: "einsteins-square",
    role: "Part-Time Executive",
    org: "Einsteins Square",
    period: "Feb 2024 – Jul 2025",
    kind: "job",
    oneLine: "Leadership and operations at an academic enrichment and tutoring organization serving K–12 students.",
  },
  {
    id: "hedman-law",
    role: "Legal Associate",
    org: "Hedman Law Firm",
    period: "Jul 2023 – Aug 2023",
    kind: "job",
    oneLine:
      "Built financial models and cryptocurrency valuation tools supporting a $200M international class-action lawsuit.",
  },
  {
    id: "visionary-summit",
    role: "Founder",
    org: "Visionary Summit",
    period: "Nov 2023 – May 2025",
    kind: "leadership",
    oneLine:
      "Founded an organization bridging students, diplomats, and founders on AI, law, and innovation in Tallinn — hosted panels with ambassadors, NGOs, and VCs.",
  },
];

export const workItems: WorkItem[] = [
  {
    slug: "irene-ai-logistics",
    title: "IRENE AI Logistics Platform",
    role: "Founder",
    period: "Jan 2026 – Present",
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
      {
        value: "~20%",
        label: "efficiency improvement",
        context:
          "Medical-item sorting efficiency gain from end-to-end workflow redesign and automation.",
        source: "resume",
        confidence: "resume",
      },
      {
        value: "100+",
        label: "weekly active users",
        context:
          "Platform usage level reported for ongoing volunteer-network operations.",
        source: "resume",
        confidence: "resume",
      },
    ],
    stack: ["Python", "Computer Vision", "OCR", "Decision Logs", "Human Review"],
    media: [ireneMedia],
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
    period: "Jan 2026 – Present",
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
    media: [wwiRawMedia, wwiCsvMedia],
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
    period: "Sep 2025 – Present",
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
    media: [placeholderMedia("CRT-60000", "Charts, query examples, and sourced answer demos can be added here.")],
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
    period: "Dec 2025 – Present",
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
    outcomes: [
      evidenceMetrics[5],
      {
        value: "~50%",
        label: "management overhead reduction",
        context:
          "Management overhead reduction from consolidating scheduling, finance, and hiring into a single AI-driven system.",
        source: "resume",
        confidence: "resume",
      },
      {
        value: "+25%",
        label: "MRR growth",
        context:
          "MRR increase from roughly $30k to roughly $40k during the AI agents and dashboards project.",
        source: "resume",
        confidence: "resume",
      },
    ],
    stack: ["Python", "Playwright", "Constraint Logic", "Automation"],
    media: [schedulingMedia],
    links: [{ label: "GitHub", href: "https://github.com/amazing-aaryan", kind: "github" }],
    ethics: [
      "Make automation failures explicit and recoverable.",
      "Avoid storing unnecessary student or teacher data.",
      "Keep manual override available for edge cases.",
    ],
    learned:
      "The best automation for fragile institutional workflows often behaves like a careful operator, not a brittle API client.",
  },
  {
    slug: "noscroll-app",
    title: "NoScroll",
    role: "Founder",
    period: "May 2026 – Present",
    status: "in-progress",
    oneLine:
      "The first app natively converting doom-scrolling behavior into reading, with Instagram quote-sharing for organic growth.",
    problem:
      "Doom-scrolling is a pervasive behavioral habit with no native disruption mechanic inside existing social platforms.",
    stakes:
      "Attention reclaimed from passive feed consumption is meaningfully reallocated only if the replacement behavior is frictionless and socially reinforced.",
    constraints: [
      "Replacement behavior must feel as fluid as scrolling, not like a chore.",
      "Social sharing loop needed to drive organic discovery without paid acquisition.",
    ],
    approach: [
      "Identified the behavioral gap where no app natively intercepted the doom-scroll loop at the content level.",
      "Built native Instagram quote-sharing so users could post reading excerpts directly to Stories and Reels.",
      "Designed the reading surface to mirror the scroll cadence — bite-sized passages with forward momentum.",
    ],
    outcomes: [],
    stack: ["Mobile", "Product Design", "Behavioral Design"],
    media: noScrollMedia,
    links: [],
    ethics: [
      "Do not replace one compulsive loop with another — reading sessions should have natural end points.",
      "No dark patterns in the sharing flow; sharing is always opt-in per excerpt.",
    ],
    learned:
      "Behavioral product design works best when the new habit hijacks the same trigger and reward structure as the old one.",
  },
  {
    slug: "visionary-summit",
    title: "Visionary Summit",
    role: "Founder",
    period: "Nov 2023 - May 2025",
    status: "archived",
    oneLine:
      "A student-led Tallinn summit series connecting high-school students with diplomats, founders, lawyers, NGOs, and venture leaders.",
    problem:
      "High-school students interested in AI, law, and innovation rarely get direct access to the people shaping those fields locally and internationally.",
    stakes:
      "Without serious student-facing spaces, emerging technology and policy conversations stay abstract, credential-gated, and disconnected from the people who will inherit their consequences.",
    constraints: [
      "Events had to feel serious enough for senior speakers and accessible enough for high-school students.",
      "Programming needed to bridge AI, diplomacy, law, entrepreneurship, and civic institutions without becoming unfocused.",
      "Capacity, venue, speaker coordination, and audience trust had to be handled by a student-led team.",
    ],
    approach: [
      "Founded and ran the organization for 18 months in Tallinn.",
      "Built event programming around diplomats, NGOs, VCs, startup founders, and lawyers working on AI, law, and innovation.",
      "Hosted panels with ambassadors and founders from organizations including Bolt, Alpa Kids, Forus Auto, and Clanbeat.",
      "Positioned the summit as a bridge between international high-school students and the institutions shaping emerging technology policy.",
    ],
    outcomes: [
      {
        value: "18",
        label: "months running",
        context:
          "Duration of the Visionary Summit organization and event series.",
        source: "project notes",
        confidence: "project",
      },
      {
        value: "~30%",
        label: "Tallinn IHS reach",
        context:
          "Peak reach across Tallinn's international high school community.",
        source: "project notes",
        confidence: "estimate",
      },
    ],
    stack: ["Event Strategy", "Speaker Relations", "AI Policy", "Diplomacy"],
    media: visionarySummitMedia,
    links: [],
    ethics: [
      "Keep student access meaningful rather than performative.",
      "Present technical and legal topics without flattening uncertainty or institutional stakes.",
      "Treat speaker credibility and student trust as the core operating constraint.",
    ],
    learned:
      "Serious youth-facing institutions work when the format respects students as participants in public life, not just an audience for inspiration.",
  },
];

export const researchItems: ResearchItem[] = [
  {
    slug: "gotv-vs-persuasion-abm",
    title: "GOTV versus Persuasion in U.S. Battleground States",
    venue: "Complex Systems 270",
    year: "2026",
    status: "working paper",
    story:
      "An agent-based campaign model asking when turnout mobilization beats persuasion, and when network structure flips that answer.",
    method:
      "Modeled seven battleground states as stochastic block networks with Democratic, swing, and Republican communities. Each eight-week simulation runs social influence, activation contagion, persuasion, and party-targeted GOTV phases, then sweeps 11x11 Democratic and Republican mobilization mixes across siloed, baseline, and porous network regimes.",
    evidence:
      "Produced 2,541 strategy runs across seven states and three connectivity profiles. The main result is conditional rather than universal: no single mobilization-versus-persuasion mix dominates across states; strategic performance changes with local electorate composition and cross-group exposure.",
    tags: ["Agent-Based Modeling", "Political Science", "Networks", "Campaign Strategy"],
    media: [
      placeholderMedia(
        "ABM-2541",
        "Heatmaps and connectivity-profile exports from the notebook can be added here."
      ),
    ],
  },
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
      "Uses a 60,000-record federal civil litigation dataset and AI-assisted coding for difficult dispositions.",
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
    media: [ssrn6545939Media],
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
    slug: "nehru-foreign-policy-cold-war",
    title: "How Successful Was India's Foreign Policy Under Jawaharlal Nehru During the Cold War?",
    venue: "SSRN",
    year: "2025",
    status: "preprint",
    story:
      "India's non-alignment doctrine under Nehru positioned a newly independent state between two superpowers, but the diplomatic record reveals tensions between principled neutrality and strategic pragmatism.",
    method:
      "Evaluate Nehru's foreign policy outcomes across Cold War flashpoints: Kashmir, Sino-Indian relations, Non-Aligned Movement leadership, and Korean War mediation.",
    evidence:
      "Non-alignment succeeded as a diplomatic posture but produced strategic vulnerabilities exposed by the 1962 Sino-Indian War.",
    tags: ["Political Science", "International Relations", "Cold War", "India"],
    link: "https://ssrn.com/abstract=6663358",
    media: [placeholderMedia("SSRN-6663358", "Preprint available on SSRN.")],
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
