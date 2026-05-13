"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ResearchItem } from "@/content/schema";

const modes = ["story", "method", "evidence", "status"] as const;

export default function ResearchDesk({ items }: { items: ResearchItem[] }) {
  const [mode, setMode] = useState<(typeof modes)[number]>("story");

  return (
    <section id="research" className="bg-ink px-5 py-24 text-paper">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
              Research desk
            </p>
            <h2 className="mt-4 font-serif text-5xl">Papers, notes, open problems.</h2>
          </div>
          <div>
            <div className="inline-flex flex-wrap gap-px border border-bone/20 bg-bone/20">
              {modes.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition ${
                    mode === item ? "bg-old-gold text-ink" : "text-bone hover:bg-slate"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-px border border-bone/15 bg-bone/15 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.slug} className="bg-charcoal p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-verdigris">
                    {item.status} / {item.year}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">{item.title}</h3>
                </div>
                <Link href={`/research/${item.slug}`} aria-label={`Open ${item.title}`} className="text-bone hover:text-old-gold">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p className="min-h-28 leading-7 text-bone/78">
                {mode === "story" && item.story}
                {mode === "method" && item.method}
                {mode === "evidence" && item.evidence}
                {mode === "status" && `${item.venue}. Clearly labeled as ${item.status}; links marked when available.`}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="border border-bone/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/70">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
