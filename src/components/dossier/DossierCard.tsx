import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/content/schema";

export default function DossierCard({ item, featured = false }: { item: WorkItem; featured?: boolean }) {
  return (
    <article
      className={`group rounded-sm border border-ink/10 bg-paper p-6 transition hover:border-vermilion/45 hover:shadow-xl hover:shadow-ink/5 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-[.82fr_1.18fr] md:gap-10 md:p-8" : ""
      }`}
    >
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-vermilion">
          {item.status} / {item.period}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight">{item.title}</h3>
      </div>
      <div className="mt-5 md:mt-0">
        <p className="max-w-2xl leading-7 text-ink/70">{item.oneLine}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.slice(0, 5).map((tag) => (
            <span key={tag} className="rounded-full border border-ink/10 bg-bone px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/work/${item.slug}`}
            className="inline-flex items-center gap-2 bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-paper transition group-hover:bg-vermilion"
          >
            Full case study <ArrowUpRight size={15} />
          </Link>
          <a
            href={`/work/${item.slug}#evidence`}
            className="inline-flex items-center gap-2 border border-ink/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-ink/70 hover:text-ink"
          >
            Inspect evidence
          </a>
        </div>
      </div>
    </article>
  );
}
