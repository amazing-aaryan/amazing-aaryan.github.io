"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineEntry } from "@/content/timeline";

const kindColor: Record<TimelineEntry["kind"], string> = {
  project:    "#2ea6a4",
  research:   "#d6a84f",
  leadership: "#f04b32",
  job:        "rgba(230,214,184,0.35)",
};

const kindGlow: Record<TimelineEntry["kind"], string> = {
  project:    "0 0 18px rgba(46,166,164,0.55), 0 0 4px rgba(46,166,164,0.8)",
  research:   "0 0 18px rgba(214,168,79,0.55), 0 0 4px rgba(214,168,79,0.8)",
  leadership: "0 0 18px rgba(240,75,50,0.55), 0 0 4px rgba(240,75,50,0.8)",
  job:        "0 0 8px rgba(230,214,184,0.2)",
};

export default function TimelineSpine({ entries }: { entries: TimelineEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [pulse, setPulse]       = useState(false);
  const prevId                  = useRef<string | null>(null);

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

  // Pulse dot whenever active section changes
  useEffect(() => {
    if (activeId && activeId !== prevId.current) {
      prevId.current = activeId;
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 650);
      return () => clearTimeout(t);
    }
  }, [activeId]);

  const active  = entries.find((e) => e.id === activeId);
  const color   = active ? kindColor[active.kind] : "rgba(230,214,184,0.08)";
  const glow    = active ? kindGlow[active.kind]  : "none";
  const visible = activeId !== null;

  return (
    <>
      {/* Keyframe for the expanding ring */}
      <style>{`
        @keyframes spine-ring {
          from { transform: translate(-50%,-50%) scale(0.5); opacity: 0.7; }
          to   { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none fixed hidden xl:block z-30"
        style={{
          left: "calc(50% - 36rem + 20px)",
          top: 0,
          bottom: 0,
          width: "2px",
          transform: "translateX(-50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        {/* Gradient spine */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom,
              transparent 0%,
              ${color} 18%,
              ${color} 82%,
              transparent 100%
            )`,
            transition: "background 0.65s ease",
          }}
        />

        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: pulse ? "10px" : "7px",
            height: pulse ? "10px" : "7px",
            borderRadius: "50%",
            background: color,
            boxShadow: glow,
            transition: "background 0.5s ease, box-shadow 0.5s ease, width 0.15s ease, height 0.15s ease",
          }}
        />

        {/* Expanding ring on section change */}
        {pulse && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              border: `1px solid ${color}`,
              animation: "spine-ring 0.65s ease-out forwards",
            }}
          />
        )}
      </div>
    </>
  );
}
