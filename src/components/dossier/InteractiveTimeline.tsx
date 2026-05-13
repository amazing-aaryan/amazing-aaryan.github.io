"use client";

import { useState } from "react";
import type { Chapter } from "@/content/schema";

export default function InteractiveTimeline({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];

  return (
    <section id="timeline" className="bg-paper px-5 py-20 text-ink">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
              Story timeline
            </p>
            <h2 className="mt-4 font-serif text-5xl">Chapters with artifacts.</h2>
          </div>
          <p className="max-w-xl leading-7 text-ink/65">
            Select a chapter to update the side file. The same storyline remains
            readable as plain sections without JavaScript.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-px overflow-hidden border border-ink/15 bg-ink/15">
            {chapters.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`grid gap-3 bg-paper p-5 text-left transition md:grid-cols-[110px_1fr] ${
                  active === index ? "bg-ink text-paper" : "hover:bg-bone"
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-serif text-2xl">{item.kicker}</span>
                  <span className={`mt-2 block text-sm ${active === index ? "text-bone" : "text-ink/60"}`}>
                    {item.title}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <aside className="border border-ink/15 bg-charcoal p-6 text-paper">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
              {chapter.artifact}
            </p>
            <h3 className="mt-4 font-serif text-4xl">{chapter.title}</h3>
            <p className="mt-5 leading-7 text-bone/80">{chapter.body}</p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-bone/20">
              {chapter.proof.map((proof) => (
                <div key={proof} className="bg-ink p-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                  {proof}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
