import type { Chapter } from "@/content/schema";

export default function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <section id={chapter.id} className="scroll-mt-24 border-b border-ink/10 py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-vermilion">
            {String(index + 1).padStart(2, "0")} / {chapter.kicker}
          </p>
          <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight md:text-5xl">
            {chapter.title}
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-ink/72">{chapter.body}</p>
          <div className="mt-7 rounded-sm border border-ink/10 bg-paper/65 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
                  artifact
                </p>
                <p className="mt-2 font-serif text-2xl">{chapter.artifact}</p>
              </div>
              <div className="flex max-w-xl flex-wrap gap-2">
              {chapter.proof.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-bone px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/62"
                >
                  {item}
                </span>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
