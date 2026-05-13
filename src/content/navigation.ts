import type { Chapter } from "./schema";

export const proofLinks = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Principles", href: "#principles" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

export const chapters: Chapter[] = [
  {
    id: "premise",
    kicker: "The premise",
    title: "Technical systems are institutional systems.",
    body:
      "I build AI and data systems that make institutions legible: courts, relief networks, schools, archives, and governments.",
    artifact: "Doctrine",
    proof: ["AI", "Law", "History", "Policy", "Systems"],
  },
  {
    id: "origin",
    kicker: "The origin",
    title: "Computer science and political science, held together.",
    body:
      "At Michigan, the work sits between implementation and institutional judgment: writing code, reading rules, and asking what the system makes easier or harder for people.",
    artifact: "UMICH / CS + POLSCI",
    proof: ["3.9 GPA", "research methods", "systems design"],
  },
  {
    id: "evidence",
    kicker: "The evidence",
    title: "Claims stay attached to receipts.",
    body:
      "The archive uses expandable evidence rather than a loose list of achievements. Metrics name their context, source type, and confidence.",
    artifact: "Evidence ledger",
    proof: ["100+ weekly users", "~3M records", "60M cases"],
  },
  {
    id: "field",
    kicker: "The field",
    title: "Accountable logistics AI for volunteer networks.",
    body:
      "IRENE treats AI decisions as operational records: every prediction can be reviewed, corrected, and traced back to a model version and input.",
    artifact: "IRENE",
    proof: ["human review", "decision logs", "sorting workflows"],
  },
  {
    id: "courtroom",
    kicker: "The courtroom",
    title: "Litigation analytics for unequal legal terrain.",
    body:
      "Federal case records can show where access to justice breaks down. The work uses retrieval and statistical tooling to surface disparities without flattening legal nuance.",
    artifact: "Court file",
    proof: ["60M cases", "$200M litigation support", "RAG"],
  },
  {
    id: "archive",
    kicker: "The archive",
    title: "WWI service records as political memory.",
    body:
      "Archival data becomes useful only after it is structured carefully enough for historians and political scientists to interrogate without losing uncertainty.",
    artifact: "NARA / WWI",
    proof: ["OCR", "county linkage", "~3M records"],
  },
  {
    id: "classroom",
    kicker: "The classroom",
    title: "Student data governance and scheduling operations.",
    body:
      "EdTech work connected compliance reviews, educator contracts, and automation systems where student data and daily operations meet.",
    artifact: "FERPA / COPPA",
    proof: ["30+ teachers", "10+ platforms", "50+ contracts"],
  },
  {
    id: "questions",
    kicker: "The questions",
    title: "Current research agenda.",
    body:
      "The research desk holds working papers and open questions on political trust, legal disparities, AI regulation, political messaging, and the laws of armed conflict.",
    artifact: "Research desk",
    proof: ["SSRN", "working papers", "methods"],
  },
  {
    id: "invitation",
    kicker: "The invitation",
    title: "For researchers, builders, lawyers, and policy people.",
    body:
      "The best conversations usually begin with a concrete institution, a messy dataset, and a question about accountability.",
    artifact: "Contact paths",
    proof: ["email", "GitHub", "LinkedIn", "resume"],
  },
];
