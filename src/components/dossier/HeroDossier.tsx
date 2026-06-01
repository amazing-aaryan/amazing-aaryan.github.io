"use client";

import Image from "next/image";
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
    <section className="relative overflow-hidden bg-ink px-5 pt-28 text-paper">
      <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(46,166,164,.18),transparent_62%)]" />
      <div className="absolute bottom-10 left-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(214,168,79,.12),transparent_64%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 pb-20 lg:grid-cols-[1.08fr_.72fr]">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-bone/20">
              <Image
                src="/aaryan.jpg"
                alt="Aaryan Srivastava"
                fill
                unoptimized
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-old-gold">
                Archive x Machine
              </p>
              <p className="mt-1 text-sm text-bone/65">Aaryan Srivastava</p>
            </div>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
            I build AI and data systems that make institutions legible.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-bone/82">
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

        <div className="relative rounded-sm border border-bone/14 bg-paper/5 p-5 shadow-2xl shadow-black/20">
          <div className="mb-5 flex items-center justify-between border-b border-bone/10 pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-bone/65">
              Choose a lens
            </p>
            <p className="font-mono text-xs text-old-gold">AS / 05</p>
          </div>
          <div className="grid gap-2">
            {nodes.map((node, index) => (
              <button
                key={node.label}
                type="button"
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`flex items-center justify-between rounded-sm border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion ${
                  active === index
                    ? "border-old-gold bg-paper text-ink"
                    : "border-bone/14 bg-ink/35 text-bone hover:border-bone/35 hover:bg-ink/55"
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em]">
                  {node.label}
                </span>
                <span className="font-mono text-[10px] text-current/50">
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-sm border border-bone/12 bg-ink/45 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-verdigris">
              {nodes[active].label} proof
            </p>
            <p className="mt-3 text-base leading-7 text-bone/80">{nodes[active].proof}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
