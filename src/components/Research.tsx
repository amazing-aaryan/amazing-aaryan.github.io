"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  link?: string;
  tags: string[];
};

const publications: Publication[] = [
  {
    title: "Sacrifice for the State: Identification or Disillusionment?",
    venue: "University of Michigan — Prof. Miller",
    year: "2026",
    description:
      "Investigating whether WWI soldier deaths increased or decreased political support for the U.S. government. Building the first large-scale queryable dataset (~3M records) of American WWI soldier service data via OCR and statistical analysis on millions of observations.",
    tags: ["Political Science", "OCR", "Statistics", "Historical Data"],
  },
  {
    title: "Assessing Federal Litigation Success Disparities",
    venue: "University of Michigan — Independent Research",
    year: "2025",
    description:
      "Created a RAG database agent using LangChain and Azure OpenAI to surface systematic biases in a ~60M-record federal litigation dataset. Documented disparities in federal litigation success rates across plaintiff demographics.",
    tags: ["RAG", "LangChain", "Azure OpenAI", "Legal Analytics"],
  },
];

const certifications = [
  "Google — AI Agents Intensive Course",
  "Stanford — Supervised Machine Learning",
  "Microsoft — RAG Database Agent Course",
  "LandingAI — Agentic Document Extraction",
  "AGI Inc — AI Browser Agents",
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#6ee7b7] text-sm mb-2 tracking-widest">
            04. research &amp; publications
          </p>
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-12">Research</h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#111] border border-[#1f1f1f] rounded-lg p-6 hover:border-[#6ee7b7]/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <BookOpen size={20} className="text-[#6ee7b7] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[#f0f0f0] font-semibold group-hover:text-[#6ee7b7] transition-colors">
                      {pub.title}
                    </h3>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors shrink-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="font-mono text-xs text-[#6b7280] mt-1 mb-3">
                    {pub.venue} · {pub.year}
                  </p>
                  <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-[#6ee7b7] bg-[#6ee7b7]/5 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-sm font-mono text-[#6b7280] mb-5 tracking-widest">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-sm text-[#6b7280] border border-[#1f1f1f] rounded px-3 py-1.5 hover:border-[#6ee7b7]/30 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
