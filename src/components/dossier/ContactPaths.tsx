import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function ContactPaths() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-bone/10 bg-ink px-5 py-24 text-paper min-h-[calc(100vh-4rem)] flex items-center">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            The best conversations start with a concrete problem.
          </h2>
          <p className="mt-5 text-lg leading-8 text-bone/60">
            Research collaboration, accountable AI, legal and policy work, or something that doesn&apos;t fit a category yet.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:aaryansr@umich.edu"
            className="inline-flex items-center gap-2 bg-old-gold px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition hover:bg-maize focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://github.com/amazing-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-bone/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-bone/70 transition hover:border-bone/50 hover:text-paper"
          >
            <GitHubIcon size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaryan21/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-bone/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-bone/70 transition hover:border-bone/50 hover:text-paper"
          >
            <LinkedInIcon size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
