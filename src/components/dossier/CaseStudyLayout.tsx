import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/content/schema";
import MediaFrame from "./MediaFrame";

export default function CaseStudyLayout({ item }: { item: WorkItem }) {
  return (
    <main className="bg-bone text-ink">
      <section className="bg-ink px-5 py-24 text-paper">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-bone/70 hover:text-paper">
            <ArrowLeft size={15} /> Archive
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
                {item.status} / {item.role}
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
                {item.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-bone/82">
                {item.oneLine}
              </p>
            </div>
            <aside className="border border-bone/20 bg-charcoal p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/55">
                period
              </p>
              <p className="mt-2 text-lg">{item.period}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-bone/55">
                stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.stack.map((tag) => (
                  <span key={tag} className="border border-bone/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-20">
        <Section id="stakes" title="Why it matters" body={item.stakes} />
        <Section id="problem" title="Problem" body={item.problem} />
        <ListSection id="constraints" title="Constraints" items={item.constraints} />
        <ListSection id="built" title="What I built" items={item.approach} />

        <section id="evidence" className="scroll-mt-24 border-t border-ink/15 py-14">
          <h2 className="font-serif text-4xl">Evidence</h2>
          <div className="mt-6 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
            {item.outcomes.map((metric) => (
              <article key={metric.label} className="bg-paper p-5">
                <p className="font-serif text-4xl">{metric.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-vermilion">
                  {metric.label}
                </p>
                <p className="mt-4 leading-7 text-ink/68">{metric.context}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {item.media.map((asset, index) => (
              <MediaFrame key={index} asset={asset} />
            ))}
          </div>
        </section>

        <section id="system" className="scroll-mt-24 border-t border-ink/15 py-14">
          <h2 className="font-serif text-4xl">System diagram</h2>
          <div className="mt-8 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-4">
            {["Inputs", "Extraction", "Review", "Audit"].map((step, index) => (
              <div key={step} className="bg-ink p-5 text-paper">
                <p className="font-mono text-xs text-old-gold">0{index + 1}</p>
                <p className="mt-4 font-serif text-2xl">{step}</p>
                <p className="mt-3 text-sm leading-6 text-bone/75">
                  {item.approach[index] || item.constraints[index] || item.oneLine}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ListSection id="ethics" title="Ethics and failure modes" items={item.ethics} />
        <Section id="result" title="Result" body={item.outcomes.map((metric) => `${metric.value} ${metric.label}`).join("; ")} />
        <Section id="learned" title="What I learned" body={item.learned} />

        <section className="border-t border-ink/15 py-14">
          <h2 className="font-serif text-4xl">Next</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#work" className="inline-flex items-center gap-2 bg-ink px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-vermilion">
              More work <ArrowUpRight size={15} />
            </Link>
            {item.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ink/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-vermilion">
                {link.label} <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({ id, title, body }: { id: string; title: string; body: string }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/15 py-14">
      <h2 className="font-serif text-4xl">{title}</h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{body}</p>
    </section>
  );
}

function ListSection({ id, title, items }: { id: string; title: string; items: string[] }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-ink/15 py-14">
      <h2 className="font-serif text-4xl">{title}</h2>
      <ul className="mt-6 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="bg-paper p-5 leading-7 text-ink/72">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
