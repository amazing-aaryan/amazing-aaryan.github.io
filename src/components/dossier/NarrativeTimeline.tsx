import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MediaFrame from "./MediaFrame";
import type { TimelineEntry } from "@/content/timeline";

const kindColor: Record<TimelineEntry["kind"], string> = {
  project: "text-verdigris",
  research: "text-old-gold",
  job: "text-bone/50",
  leadership: "text-vermilion",
};

const kindLabel: Record<TimelineEntry["kind"], string> = {
  project: "Project",
  research: "Research",
  job: "Role",
  leadership: "Leadership",
};

export default function NarrativeTimeline({ entries }: { entries: TimelineEntry[] }) {
  const total = entries.length;

  return (
    <div id="work">
      {entries.map((entry) => {
        const hasMedia = entry.media.length > 0;
        return (
          <section
            key={entry.id}
            id={entry.id}
            className="scroll-mt-16 snap-section border-t border-bone/10 bg-ink px-5 py-24 min-h-[calc(100vh-4rem)] flex items-center"
          >
            <div className="mx-auto w-full max-w-6xl">
              <div
                className={`grid gap-14 ${hasMedia ? "lg:grid-cols-[1fr_1.1fr] lg:items-start" : "max-w-3xl"}`}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`font-mono text-[11px] uppercase tracking-[0.22em] ${kindColor[entry.kind]}`}>
                      {kindLabel[entry.kind]}
                    </span>
                    <span className="font-mono text-[11px] text-bone/28">
                      {String(entry.index).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl leading-[1.06] md:text-5xl">
                    {entry.title}
                  </h2>

                  <p className="mt-3 font-mono text-sm text-bone/42">
                    {entry.role} · {entry.org} · {entry.period}
                  </p>

                  <p className="mt-8 text-lg leading-8 text-bone/75">{entry.narrative}</p>

                  {entry.highlights && entry.highlights.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {entry.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm leading-6 text-bone/60">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-old-gold/60" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.metrics && entry.metrics.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-10">
                      {entry.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-serif text-3xl text-old-gold">{m.value}</p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/45">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-bone/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-bone/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {entry.slug && (
                    <div className="mt-8">
                      <Link
                        href={`/work/${entry.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-bone/45 transition hover:text-old-gold"
                      >
                        Full case study <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>

                {hasMedia && (
                  <div className="flex flex-col gap-5 lg:sticky lg:top-24">
                    {entry.media.map((asset, i) => (
                      <MediaFrame key={i} asset={asset} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
