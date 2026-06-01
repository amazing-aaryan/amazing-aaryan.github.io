"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactPaths from "@/components/dossier/ContactPaths";
import HeroDossier from "@/components/dossier/HeroDossier";
import NarrativeTimeline from "@/components/dossier/NarrativeTimeline";
import ResearchDesk from "@/components/dossier/ResearchDesk";
import ScrollProgress from "@/components/dossier/ScrollProgress";
import { proofLinks } from "@/content/navigation";
import { researchItems } from "@/content/portfolio";
import { timelineEntries } from "@/content/timeline";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/88 px-5 text-paper backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-4" aria-label="Primary">
          <a href="#" className="font-mono text-sm uppercase tracking-[0.22em] text-old-gold">
            Aaryan
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {proofLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/55 transition hover:text-paper"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone/55 transition hover:text-paper"
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
            className="grid place-items-center text-bone/60 transition hover:text-paper md:hidden"
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
                      className="block px-1 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-bone/65 hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-1 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-bone/65 hover:text-paper"
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
        <NarrativeTimeline entries={timelineEntries} />
        <ResearchDesk items={researchItems} />
        <ContactPaths />
      </main>
      <footer className="border-t border-bone/10 bg-ink px-5 py-8 text-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="font-mono text-xs text-bone/30">
            Aaryan Srivastava · {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/amazing-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-bone/30 transition hover:text-old-gold"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  );
}
