import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const paths = [
  {
    title: "Research collaboration",
    body: "Historical data, legal analytics, political trust, AI governance, or public-interest datasets.",
  },
  {
    title: "Product / building",
    body: "Accountable AI workflows, document extraction, automation, data systems, or reviewable interfaces.",
  },
  {
    title: "Legal / policy",
    body: "Compliance, litigation analytics, institutional risk, AI regulation, and legal research tooling.",
  },
  {
    title: "General",
    body: "A concrete question, a messy dataset, or a system that needs clearer accountability.",
  },
];

export default function ContactPaths() {
  return (
    <section id="contact" className="bg-bone px-5 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
            Invitation
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Four useful ways in.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {paths.map((path) => (
            <article key={path.title} className="rounded-sm border border-ink/10 bg-paper p-5">
              <h3 className="font-serif text-2xl">{path.title}</h3>
              <p className="mt-4 leading-7 text-ink/68">{path.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="mailto:aaryansr@umich.edu" className="inline-flex items-center gap-2 bg-ink px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-vermilion">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/amazing-aaryan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ink/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-vermilion">
            <GitHubIcon size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aaryan21/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ink/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-vermilion">
            <LinkedInIcon size={16} /> LinkedIn
          </a>
          <Link href="/resume" className="inline-flex items-center gap-2 border border-ink/20 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink hover:border-vermilion">
            <FileText size={16} /> Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
