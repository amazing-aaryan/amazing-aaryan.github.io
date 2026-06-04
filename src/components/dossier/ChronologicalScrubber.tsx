"use client";

import { useEffect, useState } from "react";
import type { TimelineEntry } from "@/content/timeline";

type ScrubberItem = {
  id: string;
  label: string;
  startDate: string;
  isSection: boolean;
  kind: TimelineEntry["kind"] | "education";
};

const EDUCATION: ScrubberItem = {
  id: "umich",
  label: "Univ. of Michigan",
  startDate: "2024-09",
  isSection: false,
  kind: "education",
};

function dateNum(d: string): number {
  const [y, m = "0"] = d.split("-");
  return Number(y) * 100 + Number(m);
}

export default function ChronologicalScrubber({
  entries,
}: {
  entries: TimelineEntry[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items: ScrubberItem[] = [
    ...entries.map((e) => ({
      id: e.id,
      label: e.title,
      startDate: e.startDate,
      isSection: true,
      kind: e.kind,
    })),
    EDUCATION,
  ].sort((a, b) => dateNum(b.startDate) - dateNum(a.startDate));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (changes) => {
        changes.forEach((c) => {
          if (c.isIntersecting) setActiveId(c.target.id);
        });
      },
      { threshold: 0.5 }
    );
    entries.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [entries]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center pointer-events-none select-none">
      <div className="relative flex flex-col items-center gap-0.5">
        {/* vertical spine */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-bone/8" />

        {items.map((item, i) => {
          const currYear = item.startDate.slice(0, 4);
          const prevYear = i > 0 ? items[i - 1].startDate.slice(0, 4) : null;
          const showYear = currYear !== prevYear;
          const isActive = activeId === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              {showYear && (
                <span className="font-mono text-[7px] tracking-widest text-bone/20 mt-2 mb-0.5">
                  {currYear}
                </span>
              )}

              {item.isSection ? (
                <a
                  href={`#${item.id}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="pointer-events-auto relative flex items-center justify-center w-7 h-5"
                  aria-label={item.label}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2 h-2 bg-old-gold shadow-[0_0_6px_rgba(214,168,79,0.5)]"
                        : "w-1.5 h-1.5 bg-bone/18 hover:bg-bone/45"
                    }`}
                  />
                  {hoveredId === item.id && (
                    <span className="absolute right-6 whitespace-nowrap font-mono text-[9px] text-bone/60 bg-charcoal/95 border border-bone/10 px-2 py-0.5 pointer-events-none">
                      {item.label}
                    </span>
                  )}
                </a>
              ) : (
                <div className="flex items-center justify-center w-7 h-5">
                  <span className="w-1.5 h-1.5 rounded-full border border-bone/15" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
