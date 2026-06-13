import { Download, FileText } from "lucide-react";
import { resumeMedia } from "@/content/media";
import MediaFrame from "./MediaFrame";

const resumePdfHref = "/documents/resume/aaryan-srivastava-resume.pdf";

export default function ResumeViewer() {
  return (
    <main className="min-h-screen bg-bone px-5 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-vermilion">
          Resume
        </p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-serif text-6xl">Aaryan Srivastava</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/68">
              PDF viewer with a direct file link for browsers that block inline PDF rendering.
            </p>
          </div>
          <a
            href={resumePdfHref}
            download
            className="inline-flex items-center gap-2 bg-ink px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-vermilion"
          >
            <Download size={16} /> Download
          </a>
        </div>
        <div className="mt-10">
          <MediaFrame asset={resumeMedia} priority />
        </div>
        <a href={resumePdfHref} className="mt-6 inline-flex items-center gap-2 text-sm underline decoration-vermilion underline-offset-4">
          <FileText size={16} /> Open PDF directly
        </a>
      </div>
    </main>
  );
}
