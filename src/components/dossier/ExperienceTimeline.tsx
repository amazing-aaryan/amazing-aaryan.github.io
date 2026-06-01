import type { ExperienceItem } from "@/content/schema";

const kindLabel: Record<ExperienceItem["kind"], string> = {
  project: "Project",
  job: "Role",
  leadership: "Leadership",
};

const kindColor: Record<ExperienceItem["kind"], string> = {
  project: "text-verdigris",
  job: "text-old-gold",
  leadership: "text-vermilion",
};

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="bg-slate px-5 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-verdigris">
          Experience
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          Roles, projects, and responsibilities.
        </h2>
        <div className="relative mt-14 space-y-10 border-l border-bone/15 pl-8">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-bone/30 bg-slate" />
              <p className={`font-mono text-[11px] uppercase tracking-[0.22em] ${kindColor[item.kind]}`}>
                {kindLabel[item.kind]} · {item.period}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-tight">{item.role}</h3>
              <p className="mt-0.5 font-mono text-sm text-bone/60">{item.org}</p>
              <p className="mt-3 max-w-2xl leading-7 text-bone/75">{item.oneLine}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
