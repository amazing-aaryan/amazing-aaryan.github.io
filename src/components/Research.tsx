"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Modal from "@/components/Modal";

type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  details: string[];
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
    details: [
      "Links county-level WWI casualty counts to political outcomes — voter turnout, party affiliation shifts, and bond purchase rates — to measure how sacrifice mapped onto trust or resentment.",
      "Primary dataset: ~3 million digitized service records from the National Archives, structured for linkage with county-level Census and electoral data from 1920–1932.",
      "Identification strategy uses geographic variation in casualty exposure as a quasi-natural experiment, with difference-in-differences models to isolate the effect of wartime loss.",
      "Competing hypotheses tested: 'rally-around-the-flag' identification vs. 'disillusionment' — the finding will distinguish whether states that sacrificed more became more or less supportive of the federal government.",
    ],
  },
  {
    title: "Assessing Federal Litigation Success Disparities",
    venue: "University of Michigan — Independent Research",
    year: "2025",
    description:
      "Federal courts are supposed to treat plaintiffs equally. Analyzed 60 million court records to identify systematic patterns in which types of plaintiffs win and lose — with direct implications for legal reform, access to justice, and how we evaluate judicial fairness.",
    tags: ["Legal Research", "Data Analysis", "AI-Assisted"],
    details: [
      "Dataset: 60 million civil cases from PACER spanning 1970–2023, covering all federal district courts — the most comprehensive public record of U.S. civil litigation outcomes.",
      "Key variables: plaintiff type (individual, corporation, government), filing circuit, case category, and win/loss outcome — analyzed across time and jurisdiction.",
      "AI-assisted outcome coding handled ambiguous case dispositions (settlements, procedural dismissals) that resist simple binary classification.",
      "Preliminary findings show systematic gaps in success rates correlated with plaintiff resources — directly relevant to debates about mandatory legal representation and court fee structures.",
    ],
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
    details: [
      "Agent pipeline autonomously queries, filters, and cross-tabulates the Sentencing Commission's public dataset — running analyses that would take a researcher weeks in hours.",
      "Surfaces disparities by demographic group, offense type, and judicial district — flagging anomalies that exceed expected statistical variance for human review.",
      "Methodology is reproducible: the agent prompts and pipeline logic are published alongside findings so other researchers can replicate or extend the analysis.",
    ],
  },
  {
    title: "What Explains Variation in State Compliance with the Laws of Armed Conflict Under Conditions of Low Reciprocity?",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6546018",
    description:
      "Explores why states follow international humanitarian law even when enforcement is absent — testing competing theories of reputation, norm internalization, and institutional pressure.",
    tags: ["International Law", "Political Science", "Conflict"],
    details: [
      "Tests three competing explanations: reputational costs (states comply to avoid future diplomatic penalties), norm internalization (militaries trained to follow IHL do so habitually), and institutional pressure (treaty membership correlates with compliance).",
      "Case selection focuses on low-reciprocity conflicts where the opposing party cannot retaliate in kind — removing the standard deterrence mechanism to isolate other drivers.",
      "Finds that institutional embeddedness and professional military training explain compliance better than strategic reputation concerns alone.",
    ],
  },
  {
    title: "Why Has International Cooperation on AI Regulation Been Difficult Between the EU and the United States?",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6662638",
    description:
      "Examines why two of the world's most powerful regulatory blocs struggle to align on AI governance despite shared democratic values and deep economic interdependence.",
    tags: ["AI Policy", "International Law", "EU Regulation"],
    details: [
      "Core tension: the EU's rights-based, precautionary regulatory philosophy (AI Act) conflicts structurally with the U.S. innovation-first, sector-specific approach — not just in details but in underlying regulatory logic.",
      "Economic interdependence creates pressure toward alignment but also generates distributional conflicts: harmonization would advantage one bloc's existing AI industry over the other's.",
      "Argues that divergence is not primarily a coordination failure but a reflection of genuinely different political economies of technology regulation — requiring different diplomatic tools than standard trade negotiations.",
    ],
  },
  {
    title: "How Successful Was India's Foreign Policy Under Jawaharlal Nehru During the Cold War?",
    venue: "SSRN",
    year: "2025",
    link: "https://ssrn.com/abstract=6663358",
    description:
      "Evaluates the strategic logic and long-term outcomes of India's non-aligned foreign policy — asking whether Nehru's approach was principled statesmanship or pragmatic ambiguity.",
    tags: ["Foreign Policy", "Cold War", "Political Science"],
    details: [
      "Non-alignment allowed India to extract aid and diplomatic support from both superpowers simultaneously — a rational strategy under material constraints, not mere idealism.",
      "Evaluates failures: the 1962 Sino-Indian War exposed the limits of non-alignment when a neighbor pursued territorial expansion regardless of India's diplomatic posture.",
      "Argues Nehru's legacy is mixed — non-alignment was coherent given India's resources and strategic position, but its institutionalization left India poorly positioned for realpolitik when it mattered.",
    ],
  },
  {
    title: "How Effectively Do LLM-Driven, Micro-Tailored Political Messages Influence Public Opinion?",
    venue: "SSRN",
    year: "2025",
    description:
      "Tests whether AI-generated, individually targeted political messages shift public opinion more effectively than generic persuasion — and examines the implications for democratic integrity at scale.",
    tags: ["AI", "Political Communication", "Democracy"],
    details: [
      "Experimental design: participants received either generic political messaging or LLM-generated messages tailored to their stated values, demographics, and prior expressed concerns.",
      "Micro-tailored messages showed meaningfully higher persuasion rates on policy attitude measures — raising questions about consent, transparency, and the scalability of AI-driven influence campaigns.",
      "Policy implications: if LLM-tailored messaging can move opinion at low cost and high scale, existing disclosure frameworks for political advertising are structurally inadequate.",
    ],
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
  onClick: () => void;
};

function PubCard({ pub, i, inView, accent, onClick }: PubCardProps) {
  const borderHover =
    accent === "tan"
      ? "hover:border-[#c99014]/50"
      : "hover:border-[#c4611a]/50";
  const titleHover =
    accent === "tan"
      ? "group-hover:text-[#c99014]"
      : "group-hover:text-[#c4611a]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onClick={onClick}
      className={`gradient-card group bg-[#2c1a08] border border-[#4a2c14] rounded-xl p-6 ${borderHover} transition-colors duration-300 cursor-pointer`}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3
          className={`text-[#f0d9a8] font-semibold text-base leading-snug ${titleHover} transition-colors`}
        >
          {pub.title}
        </h3>
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#8a6040] hover:text-[#c99014] transition-colors shrink-0 mt-0.5"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>
      <p className="text-xs text-[#8a6040] mb-3">
        {pub.venue} · {pub.year}
      </p>
      <p className="text-sm text-[#c4a070] leading-relaxed mb-4">
        {pub.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {pub.tags.map((t) => (
          <span
            key={t}
            className="text-xs text-[#d4a060] bg-[#3a2010] px-2.5 py-1 rounded-full"
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
  const [selected, setSelected] = useState<Publication | null>(null);

  return (
    <section id="research" className="py-28 px-6 bg-[#1e1008]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#c99014] tracking-[0.2em] uppercase mb-3">
            Research
          </p>
          <h2 className="text-4xl font-bold text-[#f0d9a8]">
            Questions I&apos;m working on
          </h2>
        </motion.div>

        <div className="space-y-4 mb-12">
          {activeResearch.map((pub, i) => (
            <PubCard
              key={pub.title}
              pub={pub}
              i={i}
              inView={inView}
              accent="emerald"
              onClick={() => setSelected(pub)}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xs text-[#c99014] tracking-widest uppercase mb-4"
        >
          Publications
        </motion.p>

        <div className="space-y-4 mb-16">
          {publications.map((pub, i) => (
            <PubCard
              key={pub.title}
              pub={pub}
              i={i + 2}
              inView={inView}
              accent="tan"
              onClick={() => setSelected(pub)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xs text-[#8a6040] tracking-widest uppercase mb-5">
            Certifications
          </p>
          <div className="flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-sm text-[#c4a070] border border-[#4a2c14] rounded-full px-4 py-1.5 hover:border-[#c99014]/40 hover:text-[#d4a060] transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        subtitle={`${selected?.venue ?? ""} · ${selected?.year ?? ""}`}
        description={selected?.description ?? ""}
        tags={selected?.tags}
        details={selected?.details}
        links={
          selected?.link
            ? [{ href: selected.link, label: "Read paper", icon: "external" }]
            : []
        }
      />
    </section>
  );
}
