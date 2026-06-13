"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { TimelineEntry } from "@/content/timeline";

type Kind = TimelineEntry["kind"];

type TimelineItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  startDate: string;
  kind: Kind;
};

const kindTone: Record<Kind, string> = {
  project: "bg-verdigris text-ink shadow-[0_0_24px_rgba(46,166,164,0.32)]",
  research: "bg-old-gold text-ink shadow-[0_0_24px_rgba(214,168,79,0.32)]",
  leadership: "bg-vermilion text-paper shadow-[0_0_24px_rgba(240,75,50,0.30)]",
  job: "bg-bone/55 text-ink shadow-[0_0_18px_rgba(230,214,184,0.18)]",
};

const kindBorder: Record<Kind, string> = {
  project: "border-verdigris/50",
  research: "border-old-gold/55",
  leadership: "border-vermilion/55",
  job: "border-bone/25",
};

function dateNum(d: string): number {
  const [y, m = "0"] = d.split("-");
  return Number(y) * 100 + Number(m);
}

function formatDate(date: string): string {
  const [year, month = "01"] = date.split("-");
  const parsed = new Date(Number(year), Number(month) - 1, 1);
  return parsed.toLocaleDateString("en", { month: "short", year: "numeric" });
}

export default function ChronologicalScrubber({
  entries,
}: {
  entries: TimelineEntry[];
}) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const items = useMemo<TimelineItem[]>(
    () =>
      entries
        .map((entry) => ({
          id: entry.id,
          title: entry.title,
          org: entry.org,
          period: entry.period,
          startDate: entry.startDate,
          kind: entry.kind,
        }))
        .sort((a, b) => dateNum(b.startDate) - dateNum(a.startDate)),
    [entries]
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      (changes) => {
        const visible = changes
          .filter((c) => c.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    entries.forEach((e) => {
      const el = document.getElementById(e.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [entries]);

  useEffect(() => {
    if (!activeId || !window.matchMedia("(max-width: 1023px)").matches) return;
    const item = itemRefs.current[activeId];
    const strip = stripRef.current;

    if (!item || !strip) return;

    strip.scrollTo({
      left: item.offsetLeft - strip.clientWidth / 2 + item.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <nav
      aria-label="Chronological work timeline"
      className="z-40 border-y border-bone/10 bg-ink/92 text-paper shadow-[0_20px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl lg:sticky lg:top-[55px]"
    >
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-3 lg:grid-cols-[minmax(190px,0.6fr)_minmax(0,2.8fr)] lg:items-center lg:px-5">
        <div className="min-w-0 border-b border-bone/10 pb-3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/45">
            Active file
          </p>
          <div className="mt-1 flex min-h-10 items-center gap-3">
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-[10px] uppercase ${kindTone[active.kind]}`}
            >
              {formatDate(active.startDate).slice(0, 3)}
            </span>
            <div className="min-w-0">
              <p className="truncate font-serif text-lg leading-5 text-paper">
                {active.title}
              </p>
              <p className="truncate font-mono text-[11px] text-bone/45">
                {active.period}
              </p>
            </div>
          </div>
        </div>

        <div ref={stripRef} className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:px-0">
          <div className="relative flex min-w-max items-stretch gap-2 pb-1">
            <div className="pointer-events-none absolute left-0 right-0 top-8 h-px bg-bone/10" />
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[item.id] = node;
                  }}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative flex h-[5.35rem] w-[168px] shrink-0 flex-col gap-2 overflow-hidden border px-3 py-2.5 transition lg:w-[176px] ${
                    isActive
                      ? `${kindBorder[item.kind]} bg-paper text-ink shadow-[0_0_35px_rgba(214,168,79,0.16)]`
                      : "border-bone/10 bg-charcoal/48 text-bone/70 hover:border-bone/25 hover:bg-slate/70 hover:text-paper"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em]">
                      {formatDate(item.startDate)}
                    </span>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        isActive ? kindTone[item.kind] : "bg-bone/25 group-hover:bg-old-gold"
                      }`}
                    />
                  </span>
                  <span className="min-h-9 overflow-hidden text-sm font-medium leading-[1.18] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {item.title}
                  </span>
                  <span className={`truncate font-mono text-[10px] ${isActive ? "text-ink/55" : "text-bone/38"}`}>
                    {item.org}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
