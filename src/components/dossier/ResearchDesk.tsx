import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ResearchItem } from "@/content/schema";

export default function ResearchDesk({ items }: { items: ResearchItem[] }) {
  return (
    <section id="research" className="scroll-mt-16 border-t border-bone/10 bg-ink px-5 py-24 text-paper min-h-[calc(100vh-4rem)] flex items-center">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
            Research desk
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Papers, notes, open problems.
          </h2>
        </div>

        <div className="grid gap-px border border-bone/10 bg-bone/10">
          {items.map((item) => (
            <article key={item.slug} className="bg-ink px-6 py-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-verdigris">
                      {item.status} · {item.year}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-old-gold hover:text-maize transition"
                      >
                        SSRN ↗
                      </a>
                    )}
                  </div>
                  <h3 className="font-serif text-xl leading-snug text-paper">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-bone/60">{item.story}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-bone/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-bone/45">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/research/${item.slug}`}
                  aria-label={`Open ${item.title}`}
                  className="shrink-0 text-bone/30 transition hover:text-old-gold"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
