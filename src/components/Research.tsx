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

const activeResearch: Publication[] = [
  {
    title: "Sacrifice for the State: Identification or Disillusionment?",
    venue: "University of Michigan — Prof. Miller",
    year: "Ongoing",
    description:
      "Do governments that send citizens to die earn their loyalty — or lose it? Investigating how WWI soldier deaths shaped political support for the U.S. government. Built the first large-scale, queryable database of American WWI service records (~3M entries) to answer this question with data, not speculation.",
    tags: ["Political Science", "Historical Data", "Statistics"],
  },
  {
    title: "Assessing Federal Litigation Success Disparities",
    venue: "University of Michigan — Independent Research",
    year: "2025",
    description:
      "Federal courts are supposed to treat plaintiffs equally. Analyzed 60 million court records to identify systematic patterns in which types of plaintiffs win and lose — with direct implications for legal reform, access to justice, and how we evaluate judicial fairness.",
    tags: ["Legal Research", "Data Analysis", "AI-Assisted"],
  },
];

const publications: Publication[] = [
  {
    title: "Autonomous Agent-Driven Analysis of Federal Sentencing Disparities",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6545939",
    description:
      "Used autonomous AI agents to surface systemic disparities across the U.S. Sentencing Commission's FY2024 dataset — making patterns in sentencing outcomes visible without case-by-case manual review.",
    tags: ["AI Agents", "Legal Analytics", "Sentencing"],
  },
  {
    title: "What Explains Variation in State Compliance with the Laws of Armed Conflict Under Conditions of Low Reciprocity?",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6546018",
    description:
      "Explores why states follow international humanitarian law even when enforcement is absent — testing competing theories of reputation, norm internalization, and institutional pressure.",
    tags: ["International Law", "Political Science", "Conflict"],
  },
  {
    title: "Why Has International Cooperation on AI Regulation Been Difficult Between the EU and the United States?",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6662638",
    description:
      "Examines why two of the world's most powerful regulatory blocs struggle to align on AI governance despite shared democratic values and deep economic interdependence.",
    tags: ["AI Policy", "International Law", "EU Regulation"],
  },
  {
    title: "How Successful Was India's Foreign Policy Under Jawaharlal Nehru During the Cold War?",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6663358",
    description:
      "Evaluates the strategic logic and long-term outcomes of India's non-aligned foreign policy — asking whether Nehru's approach was principled statesmanship or pragmatic ambiguity.",
    tags: ["Foreign Policy", "Cold War", "Political Science"],
  },
  {
    title: "How Effectively Do LLM-Driven, Micro-Tailored Political Messages Influence Public Opinion?",
    venue: "SSRN",
    year: "2025",
    description:
      "Tests whether AI-generated, individually targeted political messages shift public opinion more effectively than generic persuasion — and examines the implications for democratic integrity at scale.",
    tags: ["AI", "Political Communication", "Democracy"],
  },
];

const certifications = [
  "Google — AI Agents Intensive",
  "Stanford — Supervised Machine Learning",
  "Microsoft — RAG Database Agents",
  "LandingAI — Agentic Document Extraction",
  "AGI Inc — AI Browser Agents",
];

type PubCardProps = {
  pub: Publication;
  i: number;
  inView: boolean;
  accent: "emerald" | "tan";
};

function PubCard({ pub, i, inView, accent }: PubCardProps) {
  const borderHover =
    accent === "tan"
      ? "hover:border-[#c9a96e]/25"
      : "hover:border-[#b87333]/25";
  const titleHover =
    accent === "tan"
      ? "group-hover:text-[#c9a96e]"
      : "group-hover:text-[#b87333]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={`gradient-card group bg-[#e8dcc8] border border-[#d0c0a8] rounded-xl p-6 ${borderHover} transition-colors duration-300`}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3
          className={`text-[#1e1008] font-semibold text-base leading-snug ${titleHover} transition-colors`}
        >
          {pub.title}
        </h3>
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6a5540] hover:text-[#c9a96e] transition-colors shrink-0 mt-0.5"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>
      <p className="text-xs text-[#6a5540] mb-3">
        {pub.venue} · {pub.year}
      </p>
      <p className="text-sm text-[#9a8070] leading-relaxed mb-4">
        {pub.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {pub.tags.map((t) => (
          <span
            key={t}
            className="text-xs text-[#7a6248] bg-[#d0c0a8] px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-28 px-6 bg-[#f0e8d8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#c9a96e] tracking-[0.2em] uppercase mb-3">
            Research
          </p>
          <h2 className="text-4xl font-bold text-[#1e1008]">
            Questions I&apos;m working on
          </h2>
        </motion.div>

        <div className="space-y-4 mb-12">
          {activeResearch.map((pub, i) => (
            <PubCard key={pub.title} pub={pub} i={i} inView={inView} accent="emerald" />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xs text-[#c9a96e] tracking-widest uppercase mb-4"
        >
          Publications
        </motion.p>

        <div className="space-y-4 mb-16">
          {publications.map((pub, i) => (
            <PubCard key={pub.title} pub={pub} i={i + 2} inView={inView} accent="tan" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xs text-[#7a6248] tracking-widest uppercase mb-5">
            Certifications
          </p>
          <div className="flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-sm text-[#7a6248] border border-[#d0c0a8] rounded-full px-4 py-1.5 hover:border-[#c9a96e]/30 hover:text-[#9a8070] transition-colors"
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
