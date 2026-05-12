"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Role = {
  company: string;
  title: string;
  period: string;
  tag: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "IRENE",
    title: "Founder",
    period: "Jan 2026 – Present",
    tag: "AI / Startup",
    bullets: [
      "Founded an AI startup that reduced logistics errors for 100+ weekly volunteers — built the underlying system from the ground up, from data collection through deployment.",
      "Designed a self-improving platform: every user interaction generates training data, making the system more accurate without manual intervention.",
      "Achieved 50% faster sorting across the volunteer network by cutting wait times and building a review layer that flags uncertain decisions for human oversight.",
      "Built accountability into the product from day one — every AI decision is logged and traceable, so errors can be identified and corrected.",
    ],
  },
  {
    company: "University of Michigan",
    title: "Research Assistant",
    period: "Jan 2026 – Present",
    tag: "Research / Political Science",
    bullets: [
      "Reconstructed 3 million World War I service records from raw scans into a structured, searchable database — work requiring both computer vision expertise and historical knowledge.",
      "Creating the first publicly available large-scale dataset of American WWI soldier service records, enabling future research in history, political science, and public policy.",
      "Investigating a core question in political science: did wartime sacrifice strengthen or erode public trust in government?",
    ],
  },
  {
    company: "Einsteins Square",
    title: "Part-Time Executive",
    period: "Feb 2024 – Jul 2025",
    tag: "EdTech / Compliance",
    bullets: [
      "Protected children's data at 10+ EdTech platforms — mapped how student information flowed through each system and identified legal exposure under COPPA and FERPA before it became a liability.",
      "Brought legal clarity to 50+ educator contracts, creating standardized agreements that gave the company defensible governance documentation.",
      "Translated operational data into compliance insights, giving leadership a clear picture of regulatory standing ahead of audits.",
    ],
  },
  {
    company: "Hedman Law Firm",
    title: "Legal Associate",
    period: "Jul 2023 – Aug 2023",
    tag: "Law / FinTech",
    bullets: [
      "Built the analytical foundation for a $200M cryptocurrency lawsuit — designed a dashboard synthesizing market data and transaction records into a form courts and counsel could use.",
      "Streamlined the firm's international IP filing process by organizing datasets for WIPO submissions across multiple jurisdictions.",
      "Supported cross-border incorporation filings spanning Hong Kong and Estonia by researching regulatory requirements and structuring entity documentation.",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6 bg-[#f0e8d8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#b87333] tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-[#1e1008]">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-0"
        >
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-[#d0c0a8] shrink-0 md:w-48">
            {roles.map((role, index) => (
              <button
                key={role.company}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-3.5 text-sm text-left whitespace-nowrap transition-all duration-200 border-b md:border-b-0 md:border-l-2 -ml-px ${
                  activeIndex === index
                    ? "border-[#b87333] text-[#1e1008] bg-[#b87333]/5"
                    : "border-transparent text-[#6a5540] hover:text-[#9a8070] hover:bg-[#e8dcc8]"
                }`}
              >
                {role.company}
              </button>
            ))}
          </div>

          <div className="md:pl-12 pt-8 md:pt-0 flex-1 min-h-[280px]">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap items-start gap-3 mb-5">
                <h3 className="text-[#1e1008] font-semibold text-lg">
                  {roles[activeIndex].title}{" "}
                  <span className="text-[#b87333]">
                    @ {roles[activeIndex].company}
                  </span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full border border-[#d0c0a8] text-[#7a6248]">
                  {roles[activeIndex].tag}
                </span>
              </div>
              <p className="text-xs text-[#6a5540] mb-6 tracking-wide">
                {roles[activeIndex].period}
              </p>
              <ul className="space-y-4">
                {roles[activeIndex].bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-[#9a8070] leading-relaxed"
                  >
                    <span className="text-[#b87333] mt-1.5 shrink-0 text-[10px]">
                      ◆
                    </span>
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
