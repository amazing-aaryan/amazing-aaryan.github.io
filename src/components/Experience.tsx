"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "IRENE",
    title: "Founder",
    period: "Jan 2026 – Present",
    bullets: [
      "Built a multimodal OCR + CV pipeline, reducing sorting errors across 100+ volunteer workflows.",
      "Automated data collection and retraining for continuous model improvement and scalable dataset growth.",
      "Improved volunteer sorting efficiency by 50% for 100+ weekly users via optimized inference and UI-assisted validation.",
      "Designed a traceability system linking predictions to logistics metadata for end-to-end auditability.",
    ],
  },
  {
    company: "University of Michigan",
    title: "Research Assistant",
    period: "Jan 2026 – Present",
    bullets: [
      "Designed an OCR + data processing pipeline to clean and structure ~3M historical records into a queryable dataset.",
      "Building and publishing the first large-scale dataset of American WWI soldiers' service data for downstream research.",
      "Performing statistical analysis on millions of observations to evaluate how soldier deaths influenced political support.",
    ],
  },
  {
    company: "Einsteins Square",
    title: "Part-Time Executive",
    period: "Feb 2024 – Jul 2025",
    bullets: [
      "Audited 10+ EdTech platforms by mapping data flows and identifying compliance risks under COPPA/FERPA frameworks.",
      "Structured data governance workflows by standardizing contracts for 50+ educators.",
      "Analyzed KPI-driven operational data to identify inefficiencies and improve audit readiness.",
    ],
  },
  {
    company: "Hedman Law Firm",
    title: "Legal Associate",
    period: "Jul 2023 – Aug 2023",
    bullets: [
      "Built a data-driven cryptocurrency valuation dashboard for a $200M lawsuit, integrating market and transaction datasets.",
      "Structured and processed IP datasets for WIPO filings, improving cross-border registration workflows.",
      "Analyzed regulatory and entity data to support incorporation and compliance filings across Hong Kong–Estonia jurisdictions.",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#6ee7b7] text-sm mb-2 tracking-widest">
            02. where i&apos;ve worked
          </p>
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-12">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-0"
        >
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-[#1f1f1f] shrink-0">
            {roles.map((role, index) => (
              <button
                key={role.company}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-3 text-sm text-left font-mono whitespace-nowrap transition-colors duration-200 border-b md:border-b-0 md:border-l-2 -ml-px ${
                  activeIndex === index
                    ? "border-[#6ee7b7] text-[#6ee7b7] bg-[#6ee7b7]/5"
                    : "border-transparent text-[#6b7280] hover:text-[#f0f0f0] hover:bg-[#111]"
                }`}
              >
                {role.company}
              </button>
            ))}
          </div>

          <div className="md:pl-10 pt-6 md:pt-0 flex-1 min-h-[260px]">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-[#f0f0f0] font-semibold text-lg">
                {roles[activeIndex].title}{" "}
                <span className="text-[#6ee7b7]">@ {roles[activeIndex].company}</span>
              </h3>
              <p className="font-mono text-xs text-[#6b7280] mt-1 mb-5">
                {roles[activeIndex].period}
              </p>
              <ul className="space-y-3">
                {roles[activeIndex].bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3 text-sm text-[#6b7280]">
                    <span className="text-[#6ee7b7] mt-0.5 shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
