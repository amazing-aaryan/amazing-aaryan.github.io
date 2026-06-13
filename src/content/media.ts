import type { MediaAsset } from "./schema";

export const resumeMedia: MediaAsset = {
  kind: "pdf",
  src: "/documents/resume/aaryan-srivastava-resume.pdf",
  title: "Aaryan Srivastava resume",
  caption: "Technical resume. Open or download directly if the embed is unavailable.",
};

export const ireneMedia: MediaAsset = {
  kind: "video",
  src: "/projects/irene/demo.mp4",
  title: "IRENE platform demo",
  caption: "AI logistics platform — volunteer sorting and confidence-aware review workflow.",
};

export const schedulingMedia: MediaAsset = {
  kind: "video",
  src: "/projects/scheduling-automation/demo.mp4",
  title: "Scheduling automation demo",
  caption: "Browser automation for class scheduling across teacher availability and constraints.",
};

export const wwiRawMedia: MediaAsset = {
  kind: "image",
  src: "/projects/wwi-service-dataset/raw-service-record.png",
  alt: "WWI archival service record scan",
  caption: "Original archival scan — period handwriting, abbreviations, and damage intact.",
  aspect: "wide",
};

export const wwiCsvMedia: MediaAsset = {
  kind: "image",
  src: "/projects/wwi-service-dataset/structured-csv-output.png",
  alt: "WWI structured CSV data extracted from service records",
  caption: "Structured output after OCR extraction — ready for county-level political linkage.",
  aspect: "wide",
};

export const ssrn6545939Media: MediaAsset = {
  kind: "pdf",
  src: "/research/federal-sentencing-disparities/ssrn-6545939.pdf",
  title: "Autonomous Agent-Driven Analysis of Federal Sentencing Disparities",
  caption: "SSRN preprint preview. Open the paper directly if the inline viewer is unavailable.",
};

export const noScrollMedia: MediaAsset[] = [
  {
    kind: "image",
    src: "/projects/noscroll-app/setup.png",
    alt: "NoScroll setup screen showing required Android permissions",
    caption: "Setup flow for enabling NoScroll's display and accessibility permissions.",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/noscroll-app/blocker.png",
    alt: "NoScroll blocker screen appearing over Instagram",
    caption: "NoScroll intercepts the scroll surface and turns the moment into a reading cue.",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/noscroll-app/reader.png",
    alt: "NoScroll reader screen with a book page open",
    caption: "Reader surface opens directly where the user left off.",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/noscroll-app/library.png",
    alt: "NoScroll library screen with books and reading progress",
    caption: "Library view for progress, imports, and fast return to active books.",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/noscroll-app/quote-share.png",
    alt: "NoScroll quote sharing flow with Instagram targets",
    caption: "Quote-sharing flow that turns reading excerpts into native social posts.",
    aspect: "portrait",
  },
  {
    kind: "image",
    src: "/projects/noscroll-app/story-summary.png",
    alt: "NoScroll summary showing a blocked scroll attempt opening a book",
    caption: "End-to-end flow: scroll attempt blocked, book opened, reading resumed.",
    aspect: "portrait",
  },
];

export const visionarySummitMedia: MediaAsset[] = [
  {
    kind: "image",
    src: "/experiences/visionary-summit/panel-discussion.jpg",
    alt: "Visionary Summit panel discussion with speakers seated at the front of the room",
    caption: "Panel discussion at Visionary Summit with students, founders, and public-sector guests.",
    aspect: "wide",
  },
  {
    kind: "image",
    src: "/experiences/visionary-summit/student-audience.jpg",
    alt: "Students attending a Visionary Summit event",
    caption: "Student audience at a sold-out Visionary Summit session in Tallinn.",
    aspect: "wide",
  },
  {
    kind: "image",
    src: "/experiences/visionary-summit/international-summit.jpeg",
    alt: "Visionary Summit international event group photo",
    caption: "International Summit programming connecting high-school students with policy and innovation speakers.",
    aspect: "wide",
  },
  {
    kind: "image",
    src: "/experiences/visionary-summit/vc-summit-karolin-linamae.jpg",
    alt: "Visionary Summit venture capital event photographed by Karolin Linamae",
    caption: "VC Summit event photographed by Karolin Linamae.",
    aspect: "wide",
  },
  {
    kind: "image",
    src: "/experiences/visionary-summit/summit-portrait.jpg",
    alt: "Portrait from a Visionary Summit event",
    caption: "Founder presence and event operations across the Visionary Summit series.",
    aspect: "portrait",
  },
];

export function placeholderMedia(code: string, caption: string): MediaAsset {
  return {
    kind: "embed",
    src: `placeholder:${code}`,
    title: code,
    caption,
  };
}
