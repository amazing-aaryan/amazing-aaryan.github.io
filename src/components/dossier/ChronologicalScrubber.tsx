"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
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
    let frame = 0;

    const centeredLeft = (item: HTMLAnchorElement, strip: HTMLDivElement) =>
      clamp(
        item.offsetLeft - strip.clientWidth / 2 + item.clientWidth / 2,
        0,
        Math.max(0, strip.scrollWidth - strip.clientWidth)
      );

    const update = () => {
      frame = 0;
      const strip = stripRef.current;
      if (!strip) return;

      const points = items
        .map((item) => {
          const section = document.getElementById(item.id);
          const node = itemRefs.current[item.id];
          if (!section || !node) return null;

          const rect = section.getBoundingClientRect();

          return {
            item,
            node,
            top: rect.top + window.scrollY,
            viewportTop: rect.top,
            viewportBottom: rect.bottom,
          };
        })
        .filter((point): point is NonNullable<typeof point> => point !== null)
        .sort((a, b) => a.top - b.top);

      if (points.length === 0) return;

      const trackingY = window.scrollY + window.innerHeight * 0.46;
      const activePoint =
        points.find(
          (point) =>
            point.viewportTop <= window.innerHeight * 0.5 &&
            point.viewportBottom >= window.innerHeight * 0.5
        ) ??
        points.reduce((best, point) =>
          Math.abs(
            (point.viewportTop + point.viewportBottom) / 2 -
              window.innerHeight / 2
          ) <
          Math.abs(
            (best.viewportTop + best.viewportBottom) / 2 -
              window.innerHeight / 2
          )
            ? point
            : best
      );

      setActiveId((current) =>
        current === activePoint.item.id ? current : activePoint.item.id
      );

      let targetLeft = centeredLeft(activePoint.node, strip);

      for (let i = 0; i < points.length - 1; i += 1) {
        const current = points[i];
        const next = points[i + 1];

        if (trackingY >= current.top && trackingY <= next.top) {
          const segmentProgress = clamp(
            (trackingY - current.top) / Math.max(1, next.top - current.top),
            0,
            1
          );

          targetLeft = lerp(
            centeredLeft(current.node, strip),
            centeredLeft(next.node, strip),
            segmentProgress
          );
          break;
        }
      }

      if (trackingY <= points[0].top) {
        targetLeft = centeredLeft(points[0].node, strip);
      }

      if (trackingY >= points[points.length - 1].top) {
        targetLeft = centeredLeft(points[points.length - 1].node, strip);
      }

      strip.scrollLeft = targetLeft;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [items]);

  const active = items.find((item) => item.id === activeId) ?? items[0];
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === active.id)
  );

  function scrollToIndex(index: number) {
    const item = items[index];

    if (!item) return;

    document.getElementById(item.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollStrip(direction: -1 | 1) {
    const nextIndex = Math.min(
      items.length - 1,
      Math.max(0, activeIndex + direction)
    );

    scrollToIndex(nextIndex);
    setActiveId(items[nextIndex]?.id ?? active.id);
  }

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

        <div className="grid min-w-0 gap-2 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <button
            type="button"
            aria-label="Show newer timeline entries"
            onClick={() => scrollStrip(-1)}
            disabled={activeIndex === 0}
            className="hidden h-10 w-10 place-items-center border border-bone/12 text-bone/55 transition hover:border-old-gold/50 hover:text-old-gold disabled:pointer-events-none disabled:opacity-25 lg:grid"
          >
            <ChevronLeft size={16} />
          </button>

          <div
            ref={stripRef}
            onWheel={(event) => {
              if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
              event.currentTarget.scrollLeft += event.deltaY;
            }}
            className="-mx-4 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
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

          <button
            type="button"
            aria-label="Show older timeline entries"
            onClick={() => scrollStrip(1)}
            disabled={activeIndex === items.length - 1}
            className="hidden h-10 w-10 place-items-center border border-bone/12 text-bone/55 transition hover:border-old-gold/50 hover:text-old-gold disabled:pointer-events-none disabled:opacity-25 lg:grid"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
}
