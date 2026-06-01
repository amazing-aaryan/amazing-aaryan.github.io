import type { Certification } from "@/content/schema";

export default function Certifications({ items }: { items: Certification[] }) {
  return (
    <section id="certifications" className="bg-charcoal px-5 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
          Certifications
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          Technical credentials.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((cert) => (
            <div
              key={cert.id}
              className="rounded-sm border border-bone/10 bg-ink/40 p-5 transition hover:border-bone/25"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-old-gold">
                {cert.issuer}
              </p>
              <p className="mt-3 font-serif text-lg leading-snug">{cert.title}</p>
              <p className="mt-2 font-mono text-xs text-bone/50">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
