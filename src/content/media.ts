import type { MediaAsset } from "./schema";

export const resumeMedia: MediaAsset = {
  kind: "pdf",
  src: "/resume.pdf",
  title: "Aaryan Srivastava resume",
  caption: "Technical resume. Open or download directly if the embed is unavailable.",
};

export const ireneMedia: MediaAsset = {
  kind: "video",
  src: "/IRENE.mp4",
  title: "IRENE platform demo",
  caption: "AI logistics platform — volunteer sorting and confidence-aware review workflow.",
};

export const schedulingMedia: MediaAsset = {
  kind: "video",
  src: "/Outschool_scheduler_cdp.mp4",
  title: "Scheduling automation demo",
  caption: "Browser automation for class scheduling across teacher availability and constraints.",
};

export const wwiRawMedia: MediaAsset = {
  kind: "image",
  src: "/WW1_raw.png",
  alt: "WWI archival service record scan",
  caption: "Original archival scan — period handwriting, abbreviations, and damage intact.",
  aspect: "wide",
};

export const wwiCsvMedia: MediaAsset = {
  kind: "image",
  src: "/WW1_csv.png",
  alt: "WWI structured CSV data extracted from service records",
  caption: "Structured output after OCR extraction — ready for county-level political linkage.",
  aspect: "wide",
};

export function placeholderMedia(code: string, caption: string): MediaAsset {
  return {
    kind: "embed",
    src: `placeholder:${code}`,
    title: code,
    caption,
  };
}
