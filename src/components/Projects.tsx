"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Modal from "@/components/Modal";

type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  details: string[];
  github?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Scheduling Automation System",
    period: "Dec 2025 – Present",
    description:
      "Automated the class scheduling workflow for 30+ teachers on an EdTech platform — a process that previously required hours of manual coordination. The system handles conflicts, edge cases, and preferences without human input, targeting an 85% reduction in administrative overhead.",
    tags: ["Python", "Playwright", "Automation"],
    details: [
      "Uses browser-level automation via Playwright to interact with the scheduling platform the same way a human would — no fragile API integrations required.",
      "Conflict resolution logic handles overlapping teacher availability, room constraints, and subject requirements simultaneously, falling back to a priority queue when hard constraints can't all be satisfied.",
      "Designed as a headless pipeline: runs on a schedule, detects changes in teacher preferences or constraints, and recomputes affected slots without touching unrelated assignments.",
      "Error reporting is built in — when an edge case can't be resolved automatically, it surfaces a clear summary for a human to review rather than silently failing.",
    ],
    github: "https://github.com/amazing-aaryan",
  },
  {
    title: "Federal Litigation Bias Analysis",
    period: "Sep 2025 – Present",
    description:
      "Built an AI research tool to surface systemic disparities in a 60M-record federal litigation dataset. The system allows researchers to ask legal questions in plain language and receive answers grounded in court records — making case law analysis accessible beyond just trained attorneys.",
    tags: ["LangChain", "Azure OpenAI", "Legal Analytics", "RAG"],
    details: [
      "Dataset spans 60 million civil cases from PACER (1970–2023), covering plaintiff type, filing circuit, judge assignment, and final outcome — structured for statistical querying.",
      "RAG pipeline embeds case metadata and outcome summaries so researchers can ask questions like 'do pro se plaintiffs lose more often in the 9th Circuit?' and get sourced answers.",
      "Azure OpenAI handles query decomposition and answer synthesis; LangChain orchestrates retrieval, context assembly, and response grounding.",
      "Findings are designed to inform policy discussions around access to justice and judicial accountability — the tool makes patterns visible that would otherwise require thousands of hours of manual review.",
    ],
  },
  {
    title: "IRENE — AI Logistics Platform",
    period: "Jan 2026 – Present",
    description:
      "An AI platform helping nonprofit volunteer networks sort and route resources accurately. Reduced sorting errors across 100+ weekly users. Every AI decision is logged with its reasoning — so volunteers, coordinators, and auditors can review and override.",
    tags: ["Computer Vision", "OCR", "AI", "Python"],
    details: [
      "Computer vision pipeline reads item labels and donor tags from photos taken on-site — no barcode scanners or pre-structured data required.",
      "Self-improving architecture: each confirmed or corrected volunteer action is fed back as a labeled training example, incrementally tightening the model without manual data annotation.",
      "Uncertain predictions are routed to a human review queue with a confidence score and the top two candidate classifications shown side by side — reducing blind trust in AI outputs.",
      "Full decision log: every classification is stored with its input image, model version, confidence, and the final human-confirmed label, enabling downstream audits and error root-cause analysis.",
    ],
  },
  {
    title: "WWI Soldier Service Dataset",
    period: "Jan 2026 – Present",
    description:
      "The first large-scale, structured dataset of American WWI soldier service records — built from millions of scanned documents. Designed to be accessible to historians, political scientists, and policy researchers without technical backgrounds.",
    tags: ["Historical Data", "OCR", "PostgreSQL", "Open Dataset"],
    details: [
      "Source material: ~3 million service records held at the National Archives — handwritten and typewritten documents spanning draft registration, deployment orders, and discharge records.",
      "OCR pipeline fine-tuned on period-specific handwriting to handle faded ink, non-standard abbreviations, and damaged pages common in archival military records.",
      "Structured schema captures soldier name, state, county, unit, casualty status, and discharge type — enabling linkage to county-level political and demographic data for research.",
      "Planned as a public dataset with a query interface, so researchers without SQL or Python backgrounds can filter and export subsets for their own analysis.",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#b87333] tracking-[0.2em] uppercase mb-3">
            Projects
          </p>
          <h2 className="text-4xl font-bold text-[#1e1008]">
            What I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelected(project)}
              className="gradient-card group bg-[#e8dcc8] border border-[#d0c0a8] rounded-xl p-6 hover:border-[#b87333]/40 transition-colors duration-300 flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[#7a6248] bg-[#d0c0a8] px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="flex gap-3 ml-2 shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6a5540] hover:text-[#b87333] transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={17} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6a5540] hover:text-[#b87333] transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-[#1e1008] font-semibold mb-1 group-hover:text-[#b87333] transition-colors text-base">
                {project.title}
              </h3>
              <p className="text-xs text-[#6a5540] mb-4">{project.period}</p>
              <p className="text-sm text-[#9a8070] leading-relaxed flex-1">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        subtitle={selected?.period}
        description={selected?.description ?? ""}
        tags={selected?.tags}
        details={selected?.details}
        links={[
          ...(selected?.github
            ? [{ href: selected.github, label: "GitHub", icon: "github" as const }]
            : []),
          ...(selected?.link
            ? [{ href: selected.link, label: "View project", icon: "external" as const }]
            : []),
        ]}
      />
    </section>
  );
}
