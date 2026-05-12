"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
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
    github: "https://github.com/amazing-aaryan",
  },
  {
    title: "Federal Litigation Bias Analysis",
    period: "Sep 2025 – Present",
    description:
      "Built an AI research tool to surface systemic disparities in a 60M-record federal litigation dataset. The system allows researchers to ask legal questions in plain language and receive answers grounded in court records — making case law analysis accessible beyond just trained attorneys.",
    tags: ["LangChain", "Azure OpenAI", "Legal Analytics", "RAG"],
  },
  {
    title: "IRENE — AI Logistics Platform",
    period: "Jan 2026 – Present",
    description:
      "An AI platform helping nonprofit volunteer networks sort and route resources accurately. Reduced sorting errors across 100+ weekly users. Every AI decision is logged with its reasoning — so volunteers, coordinators, and auditors can review and override.",
    tags: ["Computer Vision", "OCR", "AI", "Python"],
  },
  {
    title: "WWI Soldier Service Dataset",
    period: "Jan 2026 – Present",
    description:
      "The first large-scale, structured dataset of American WWI soldier service records — built from millions of scanned documents. Designed to be accessible to historians, political scientists, and policy researchers without technical backgrounds.",
    tags: ["Historical Data", "OCR", "PostgreSQL", "Open Dataset"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
              className="gradient-card group bg-[#e8dcc8] border border-[#d0c0a8] rounded-xl p-6 hover:border-[#b87333]/25 transition-colors duration-300 flex flex-col"
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
                <div className="flex gap-3 ml-2 shrink-0">
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
    </section>
  );
}
