import type { Chapter } from "@/content/schema";
import ChapterSection from "./ChapterSection";
import StoryProgressNav from "./StoryProgressNav";

export default function StoryShell({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="bg-bone px-5 text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[230px_1fr]">
        <StoryProgressNav chapters={chapters} />
        <div>
          {chapters.map((chapter, index) => (
            <ChapterSection key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
