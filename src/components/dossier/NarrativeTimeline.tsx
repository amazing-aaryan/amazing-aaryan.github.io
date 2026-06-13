"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import MediaFrame from "./MediaFrame";
import type { TimelineEntry } from "@/content/timeline";

const kindColor: Record<TimelineEntry["kind"], string> = {
  project: "text-verdigris",
  research: "text-old-gold",
  job: "text-bone/55",
  leadership: "text-vermilion",
};

const kindLabel: Record<TimelineEntry["kind"], string> = {
  project: "Project",
  research: "Research",
  job: "Role",
  leadership: "Leadership",
};

const sectionAtmosphere: Record<TimelineEntry["kind"], string> = {
  project:
    "radial-gradient(ellipse 52% 44% at 86% 46%, rgba(46,166,164,0.09) 0%, transparent 78%)",
  research:
    "radial-gradient(ellipse 52% 42% at 88% 22%, rgba(214,168,79,0.10) 0%, transparent 78%)",
  leadership:
    "radial-gradient(ellipse 48% 40% at 12% 54%, rgba(240,75,50,0.09) 0%, transparent 78%)",
  job: "linear-gradient(90deg, rgba(230,214,184,0.025), transparent 42%)",
};

function formatDate(date: string): string {
  const [year, month = "01"] = date.split("-");
  const parsed = new Date(Number(year), Number(month) - 1, 1);
  return parsed.toLocaleDateString("en", { month: "long", year: "numeric" });
}

export default function NarrativeTimeline({ entries }: { entries: TimelineEntry[] }) {
  const total = entries.length;

  return (
    <div id="work">
      {entries.map((entry) => {
        const hasMedia = entry.media.length > 0;

        return (
          <motion.section
            key={entry.id}
            id={entry.id}
            initial={{ opacity: 0.72 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="scroll-mt-28 border-t border-bone/10 bg-ink px-4 py-16 text-paper md:px-5 md:py-24 lg:flex lg:min-h-[calc(100vh-7rem)] lg:scroll-mt-[12rem] lg:items-center"
            style={{ backgroundImage: sectionAtmosphere[entry.kind] }}
          >
            <div className="mx-auto w-full max-w-6xl">
              <div
                className={`grid gap-10 md:gap-14 ${
                  hasMedia
                    ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start"
                    : "max-w-3xl"
                }`}
              >
                <motion.div
                  initial={{ y: 22, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="mb-6 grid gap-3 sm:flex sm:items-end sm:justify-between">
                    <div>
                      <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${kindColor[entry.kind]}`}>
                        {kindLabel[entry.kind]}
                      </p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-bone/45">
                        {formatDate(entry.startDate)} / {entry.period}
                      </p>
                    </div>
                    <span className="w-fit border border-bone/12 bg-charcoal/70 px-3 py-1.5 font-mono text-[11px] text-bone/45">
                      {String(entry.index).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="max-w-3xl font-serif text-4xl leading-[1.06] sm:text-5xl">
                    {entry.title}
                  </h2>

                  <p className="mt-4 font-mono text-sm leading-6 text-bone/50">
                    {entry.role} / {entry.org}
                  </p>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-bone/78 sm:text-lg">
                    {entry.narrative}
                  </p>

                  {entry.highlights && entry.highlights.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-6 text-bone/62"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-old-gold/70" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.metrics && entry.metrics.length > 0 && (
                    <div className="mt-9 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8">
                      {entry.metrics.map((metric) => (
                        <div key={metric.label} className="border-l border-old-gold/40 pl-4">
                          <p className="font-serif text-3xl text-old-gold">{metric.value}</p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] leading-4 text-bone/50">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-bone/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-bone/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {entry.slug && (
                    <div className="mt-8">
                      <Link
                        href={`/work/${entry.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-bone/55 transition hover:text-old-gold"
                      >
                        Full case study <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  )}
                </motion.div>

                {hasMedia && (
                  <div className="flex flex-col gap-5 lg:sticky lg:top-36">
                    {entry.media.map((asset, index) => (
                      <MediaFrame key={index} asset={asset} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
