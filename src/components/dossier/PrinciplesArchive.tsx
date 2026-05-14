import type { Award, Principle } from "@/content/schema";

export default function PrinciplesArchive({
  principles,
  awards,
}: {
  principles: Principle[];
  awards: Award[];
}) {
  return (
    <section id="principles" className="bg-paper px-5 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
              Operating notes
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              The site should show the mind behind the work.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">
              The strongest personal sites do not only list credentials. They
              reveal a durable way of thinking. These are the principles that
              connect the projects, papers, and institutional problems.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-sm border border-ink/10 bg-bone/70 p-5 transition hover:border-vermilion/35">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
                  {principle.signal}
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">
                  {principle.title}
                </h3>
                <p className="mt-4 leading-7 text-ink/70">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-ink/15 pt-10">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
                Background signals
              </p>
              <h3 className="mt-3 font-serif text-4xl">Honors and recognition.</h3>
            </div>
            <p className="max-w-xl leading-7 text-ink/60">
              Kept as supporting evidence, not the main story. The site should
              be remembered for the thesis and artifacts first.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {awards.map((award) => (
              <article key={award.title} className="rounded-sm border border-ink/10 bg-bone/40 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
                  {award.year}
                </p>
                <h4 className="mt-4 font-serif text-2xl">{award.title}</h4>
                <p className="mt-3 text-sm leading-6 text-ink/62">{award.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
