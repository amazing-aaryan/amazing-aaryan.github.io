import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import MediaFrame from "@/components/dossier/MediaFrame";
import { getResearchItem, researchItems } from "@/content/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return researchItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} | Aaryan Srivastava`,
    description: item.story,
  };
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();
  const hasMedia = item.media.length > 0;

  return (
    <main className="min-h-screen bg-bone text-ink">
      <section className="bg-ink px-5 py-24 text-paper">
        <div className="mx-auto max-w-6xl">
          <Link href="/#research" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-bone/70 hover:text-paper">
            <ArrowLeft size={15} /> Research desk
          </Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
            {item.status} / {item.venue}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            {item.title}
          </h1>
        </div>
      </section>
      <div className={`mx-auto grid max-w-6xl gap-10 px-5 py-16 ${hasMedia ? "lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)]" : ""}`}>
        <div>
          {[
            ["Story", item.story],
            ["Method", item.method],
            ["Evidence", item.evidence],
            ["Status", `${item.venue}, ${item.year}. This page labels working papers and preprints as provisional.`],
          ].map(([title, body]) => (
            <section key={title} className="border-t border-ink/15 py-12 first:pt-0">
              <h2 className="font-serif text-4xl">{title}</h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">{body}</p>
            </section>
          ))}
        </div>

        {hasMedia && (
          <aside className="border-t border-ink/15 pt-8 lg:sticky lg:top-24 lg:self-start">
            <div className="grid gap-5">
              {item.media.map((asset, index) => (
                <MediaFrame key={index} asset={asset} />
              ))}
            </div>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 bg-ink px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-vermilion">
                Open preprint <ArrowUpRight size={15} />
              </a>
            )}
          </aside>
        )}
      </div>
    </main>
  );
}
