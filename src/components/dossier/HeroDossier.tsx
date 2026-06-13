"use client";

import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function HeroDossier() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink px-5 pb-18 pt-28 text-paper">
      <div className="pointer-events-none absolute -right-24 top-8 h-[72vw] min-h-64 max-h-[620px] w-[72vw] min-w-64 max-w-[620px] rounded-full bg-[radial-gradient(circle,rgba(46,166,164,.12),transparent_62%)]" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-[64vw] min-h-56 max-h-[460px] w-[64vw] min-w-56 max-w-[460px] rounded-full bg-[radial-gradient(circle,rgba(214,168,79,.08),transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bone/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-bone/18">
            <Image
              src="/aaryan.jpg"
              alt="Aaryan Srivastava"
              fill
              unoptimized
              priority
              className="object-cover object-top"
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-bone/55 sm:tracking-[0.28em]">
            Archive x Machine
          </p>
        </div>

        <h1 className="max-w-4xl font-serif text-[2.8rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          I build AI and data systems that make institutions legible.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-bone/68 sm:text-xl sm:leading-9">
          Courts, relief networks, schools, archives - the systems that run them
          can be made more accountable and humane. That is the work.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#irene"
            className="inline-flex items-center gap-2 bg-old-gold px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-ink transition hover:bg-maize focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
          >
            See the work <ArrowDown size={16} />
          </a>
          <a
            href="#research"
            className="border border-bone/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-bone/70 transition hover:border-vermilion hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
          >
            Research
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-bone/45">
          <a
            href="https://github.com/amazing-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-old-gold"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaryan21/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-old-gold"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:aaryansr@umich.edu"
            aria-label="Email"
            className="transition hover:text-old-gold"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
