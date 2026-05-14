"use client";

import { useState } from "react";
import type { EvidenceMetric } from "@/content/schema";

export default function EvidenceLedger({ metrics }: { metrics: EvidenceMetric[] }) {
  const [active, setActive] = useState(0);

  return (
    <section id="evidence" className="border-y border-bone/10 bg-charcoal px-5 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
              Evidence ledger
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Proof stays attached to context.
            </h2>
          </div>
          <p className="mt-5 text-lg leading-8 text-bone/76">
            The archive makes evidence inspectable. Each metric opens into a source note,
            confidence label, and operational context so the site reads less like a pitch
            deck and more like a case file.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <button
              key={metric.label}
              type="button"
              onClick={() => setActive(index)}
              className={`min-h-32 rounded-sm border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion ${
                active === index
                  ? "border-old-gold bg-paper text-ink"
                  : "border-bone/10 bg-ink/40 hover:border-bone/30 hover:bg-ink/60"
              }`}
              aria-pressed={active === index}
            >
              <span className="block font-serif text-3xl font-semibold">
                {metric.value}
              </span>
              <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.16em]">
                {metric.label}
              </span>
            </button>
          ))}
        </div>

        <article className="mt-6 rounded-sm border border-bone/15 bg-paper p-6 text-ink">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-vermilion">
              {metrics[active].confidence}
            </p>
            {metrics[active].source && (
              <p className="font-mono text-xs text-ink/55">source: {metrics[active].source}</p>
            )}
          </div>
          <h3 className="mt-3 font-serif text-3xl">
            {metrics[active].value} {metrics[active].label}
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-ink/75">
            {metrics[active].context}
          </p>
        </article>
      </div>
    </section>
  );
}
