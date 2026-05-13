import type { Chapter } from "@/content/schema";

export default function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <section id={chapter.id} className="scroll-mt-24 border-b border-ink/10 py-20">
      <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
            {String(index + 1).padStart(2, "0")} / {chapter.kicker}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
            {chapter.title}
          </h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-ink/72">{chapter.body}</p>
          <div className="mt-8 border border-ink/15 bg-paper p-5 shadow-[8px_8px_0_rgba(6,8,11,.08)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
              artifact
            </p>
            <p className="mt-3 font-serif text-3xl">{chapter.artifact}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {chapter.proof.map((item) => (
                <span
                  key={item}
                  className="border border-ink/15 bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
