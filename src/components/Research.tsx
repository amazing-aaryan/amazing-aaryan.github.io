"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
      "Do governments that send citizens to die earn their loyalty — or lose it? This research investigates how WWI soldier deaths shaped political support for the U.S. government. We built the first large-scale, queryable database of American WWI service records (~3M entries) to answer this question with data, not speculation.",
    tags: ["Political Science", "Historical Data", "Statistics"],
  },
  {
    title: "Assessing Federal Litigation Success Disparities",
    venue: "University of Michigan — Independent Research",
    year: "2025",
    description:
      "Federal courts are supposed to treat plaintiffs equally. This research examined whether they do — analyzing 60 million court records to identify systematic patterns in which types of plaintiffs win and lose. The findings have implications for legal reform, access to justice, and how we evaluate judicial fairness.",
    tags: ["Legal Research", "Data Analysis", "AI-Assisted"],
  },
];

const certifications = [
  "Google — AI Agents Intensive",
  "Stanford — Supervised Machine Learning",
  "Microsoft — RAG Database Agents",
  "LandingAI — Agentic Document Extraction",
  "AGI Inc — AI Browser Agents",
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-28 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#6ee7b7] tracking-[0.2em] uppercase mb-3">
            Research
          </p>
          <h2 className="text-4xl font-bold text-[#f0f0f0]">
            Questions I&apos;m working on
          </h2>
        </motion.div>

        <div className="space-y-5 mb-16">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-card group bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-7 hover:border-[#6ee7b7]/25 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[#f0f0f0] font-semibold text-lg leading-snug group-hover:text-[#6ee7b7] transition-colors">
                  {pub.title}
                </h3>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4b5563] hover:text-[#6ee7b7] transition-colors shrink-0 mt-1"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-xs text-[#4b5563] mb-4">
                {pub.venue} · {pub.year}
              </p>
              <p className="text-sm text-[#9ca3af] leading-relaxed mb-5">
                {pub.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#6b7280] bg-[#1a1a1a] px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-[#6b7280] tracking-widest uppercase mb-5">
            Certifications
          </p>
          <div className="flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-sm text-[#6b7280] border border-[#1a1a1a] rounded-full px-4 py-1.5 hover:border-[#6ee7b7]/30 hover:text-[#9ca3af] transition-colors"
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
