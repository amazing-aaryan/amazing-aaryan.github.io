"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const nodes = [
  { label: "AI", proof: "Accountable classification, RAG, agents, and human review." },
  { label: "Law", proof: "Litigation analytics, compliance, IP filings, and legal research." },
  { label: "History", proof: "WWI service records structured for political trust research." },
  { label: "Policy", proof: "AI regulation, LOAC, democratic persuasion, public trust." },
  { label: "Systems", proof: "Automation that respects constraints, audit trails, and operators." },
];

export default function HeroDossier() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink px-5 pt-28 text-paper">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(230,214,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(230,214,184,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(46,166,164,.25),transparent_38%),radial-gradient(circle_at_45%_60%,rgba(240,75,50,.15),transparent_30%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center border border-bone/30 bg-paper text-ink">
              <span className="font-serif text-2xl font-semibold">AS</span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-old-gold">
                Archive x Machine
              </p>
              <p className="mt-1 text-sm text-bone/65">Aaryan Srivastava</p>
            </div>
          </div>

          <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-7xl xl:text-8xl">
            I build AI and data systems that make institutions legible.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-bone/82 md:text-xl">
            Courts, relief networks, schools, archives, and governments all run on
            technical systems. My work asks whether those systems can be made more
            accountable, searchable, and humane.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#premise"
              className="inline-flex items-center gap-2 bg-old-gold px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-maize focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              Read the story <ArrowDown size={16} />
            </a>
            <a
              href="#evidence"
              className="border border-bone/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bone transition hover:border-vermilion hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              Scan the proof
            </a>
            <Link
              href="/resume"
              className="border border-bone/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bone transition hover:border-verdigris hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              Resume
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5 text-bone/65">
            <a href="https://github.com/amazing-aaryan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-old-gold">
              <GitHubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aaryan21/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-old-gold">
              <LinkedInIcon size={20} />
            </a>
            <a href="mailto:aaryansr@umich.edu" aria-label="Email" className="hover:text-old-gold">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[540px] border border-bone/20 bg-charcoal/80 p-5 shadow-2xl">
          <div className="mb-5 flex items-center justify-between border-b border-bone/15 pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-bone/65">
              Identity constellation
            </p>
            <p className="font-mono text-xs text-vermilion">OCR: live</p>
          </div>
          <div className="relative h-[390px]">
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center border border-old-gold/60 bg-paper text-ink shadow-[0_0_50px_rgba(214,168,79,.20)]">
              <span className="font-serif text-4xl">AS</span>
            </div>
            {nodes.map((node, index) => {
              const positions = [
                "left-[6%] top-[10%]",
                "right-[4%] top-[16%]",
                "left-[2%] bottom-[18%]",
                "right-[8%] bottom-[10%]",
                "left-[39%] top-[2%]",
              ];
              return (
                <button
                  key={node.label}
                  type="button"
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`absolute ${positions[index]} border px-4 py-3 font-mono text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion ${
                    active === index
                      ? "border-vermilion bg-vermilion text-paper"
                      : "border-bone/25 bg-ink text-bone hover:border-old-gold"
                  }`}
                >
                  {node.label}
                </button>
              );
            })}
          </div>
          <div className="border-l-4 border-verdigris bg-ink p-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-verdigris">
              {nodes[active].label} proof
            </p>
            <p className="mt-3 leading-7 text-bone/80">{nodes[active].proof}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
