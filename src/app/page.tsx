import ContactPaths from "@/components/dossier/ContactPaths";
import DossierCard from "@/components/dossier/DossierCard";
import EvidenceLedger from "@/components/dossier/EvidenceLedger";
import HeroDossier from "@/components/dossier/HeroDossier";
import PrinciplesArchive from "@/components/dossier/PrinciplesArchive";
import ResearchDesk from "@/components/dossier/ResearchDesk";
import StoryShell from "@/components/dossier/StoryShell";
import { chapters, proofLinks } from "@/content/navigation";
import { awards, evidenceMetrics, principles, researchItems, workItems } from "@/content/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/82 px-5 text-paper backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-4" aria-label="Primary">
          <a href="#" className="font-mono text-sm uppercase tracking-[0.22em] text-old-gold">
            Aaryan
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {proofLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/68 hover:text-paper">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/68 hover:text-paper">
                  {link.label}
                </a>
              )
            ))}
          </div>
        </nav>
      </header>
      <main>
        <HeroDossier />
        <StoryShell chapters={chapters} />
        <EvidenceLedger metrics={evidenceMetrics} />
        <PrinciplesArchive principles={principles} awards={awards} />
        <section id="work" className="bg-bone px-5 py-24 text-ink">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
                  Featured case files
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  Work as institutional evidence.
                </h2>
              </div>
              <p className="mt-5 text-lg leading-8 text-ink/68">
                Four projects anchor the archive: relief logistics, court records,
                historical service data, and education operations.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {workItems.map((item, index) => (
                <div id={item.slug} key={item.slug}>
                  <DossierCard item={item} featured={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <ResearchDesk items={researchItems} />
        <section id="media" className="bg-charcoal px-5 py-24 text-paper">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
              Media archive
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Slots for records, demos, papers, screenshots, and datasets.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {["video", "screenshots", "photos", "PDFs", "datasets"].map((slot) => (
                <div key={slot} className="rounded-sm border border-bone/12 bg-ink/55 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-verdigris">
                    {slot}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-bone/70">
                    Polished fallback now, real media-ready when assets are available.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactPaths />
      </main>
    </>
  );
}
