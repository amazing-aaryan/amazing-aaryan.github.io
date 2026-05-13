"use client";

import { useEffect, useState } from "react";
import type { Chapter } from "@/content/schema";

export default function StoryProgressNav({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const observers = chapters.map((chapter) => {
      const node = document.getElementById(chapter.id);
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(chapter.id);
        },
        { rootMargin: "-35% 0px -50% 0px" },
      );
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [chapters]);

  return (
    <nav
      aria-label="Story chapters"
      className="sticky top-16 hidden max-h-[calc(100vh-5rem)] overflow-auto py-8 lg:block"
    >
      <ol className="space-y-2 border-l border-ink/15">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className={`block border-l-2 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition ${
                active === chapter.id
                  ? "border-vermilion text-ink"
                  : "border-transparent text-ink/45 hover:text-ink"
              }`}
            >
              {chapter.kicker}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
