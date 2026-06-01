"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Certifications from "@/components/dossier/Certifications";
import ContactPaths from "@/components/dossier/ContactPaths";
import DossierCard from "@/components/dossier/DossierCard";
import EvidenceLedger from "@/components/dossier/EvidenceLedger";
import ExperienceTimeline from "@/components/dossier/ExperienceTimeline";
import HeroDossier from "@/components/dossier/HeroDossier";
import PrinciplesArchive from "@/components/dossier/PrinciplesArchive";
import ResearchDesk from "@/components/dossier/ResearchDesk";
import ScrollProgress from "@/components/dossier/ScrollProgress";
import StoryShell from "@/components/dossier/StoryShell";
import { chapters, proofLinks } from "@/content/navigation";
import {
  awards,
  certifications,
  evidenceMetrics,
  experienceItems,
  principles,
  researchItems,
  workItems,
} from "@/content/portfolio";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/82 px-5 text-paper backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-4" aria-label="Primary">
          <a href="#" className="font-mono text-sm uppercase tracking-[0.22em] text-old-gold">
            Aaryan
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {proofLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/68 hover:text-paper"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/68 hover:text-paper"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid place-items-center text-bone hover:text-paper md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-bone/10 pb-5 md:hidden">
            <ul className="mt-4 space-y-1">
              {proofLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-1 py-2 font-mono text-xs uppercase tracking-[0.18em] text-bone/75 hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-1 py-2 font-mono text-xs uppercase tracking-[0.18em] text-bone/75 hover:text-paper"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <main>
        <HeroDossier />
        <StoryShell chapters={chapters} />
        <EvidenceLedger metrics={evidenceMetrics} />
        <PrinciplesArchive principles={principles} awards={awards} />
        <ExperienceTimeline items={experienceItems} />
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
        <Certifications items={certifications} />
        <ContactPaths />
      </main>
      <footer className="border-t border-bone/10 bg-ink px-5 py-8 text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-bone/45">
            Aaryan Srivastava · {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/amazing-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-bone/45 hover:text-old-gold"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  );
}
