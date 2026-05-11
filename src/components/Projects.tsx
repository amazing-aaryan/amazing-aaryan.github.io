"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon, FolderIcon } from "@/components/icons";

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
    title: "Automating Scheduling RPA System",
    period: "Dec 2025 – Present",
    description:
      "Deterministic RPA system automating class scheduling on Outschool using Python, Pydantic, pandas, and Playwright. Targeting ~85% efficiency improvement across 30+ teachers, increasing revenue by ~15% and reducing overhead by ~50%.",
    tags: ["Python", "Playwright", "Pydantic", "Pandas", "RPA"],
    github: "https://github.com/amazing-aaryan",
  },
  {
    title: "Federal Litigation Bias Analysis",
    period: "Sep 2025 – Present",
    description:
      "RAG database agent leveraging pandas and SQL via LangChain and Azure OpenAI to analyze systematic biases in a ~60M record federal litigation dataset. Published a comprehensive technical report on disparities discovered.",
    tags: ["Python", "LangChain", "Azure OpenAI", "SQL", "RAG"],
  },
  {
    title: "IRENE — AI Logistics Platform",
    period: "Jan 2026 – Present",
    description:
      "Multimodal OCR + computer vision pipeline reducing sorting errors across 100+ volunteer workflows. Automated retraining pipeline with end-to-end traceability linking predictions to logistics metadata.",
    tags: ["Python", "Computer Vision", "OCR", "PyTorch"],
  },
  {
    title: "WWI Soldier Service Dataset",
    period: "Jan 2026 – Present",
    description:
      "First large-scale dataset of ~3M American WWI soldier service records built via an OCR + data processing pipeline. Supports downstream historical and political science research at University of Michigan.",
    tags: ["Python", "OCR", "PostgreSQL", "Pandas", "Statistical Analysis"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#6ee7b7] text-sm mb-2 tracking-widest">
            03. what i&apos;ve built
          </p>
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-12">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#111] border border-[#1f1f1f] rounded-lg p-6 hover:border-[#6ee7b7]/30 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <FolderIcon className="text-[#6ee7b7]" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-[#f0f0f0] font-semibold mb-1 group-hover:text-[#6ee7b7] transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[#6b7280] mb-3">{project.period}</p>
              <p className="text-sm text-[#6b7280] leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#6ee7b7] bg-[#6ee7b7]/5 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
