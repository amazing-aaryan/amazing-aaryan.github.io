import type { MediaAsset } from "./schema";

export const resumeMedia: MediaAsset = {
  kind: "pdf",
  src: "/resume.pdf",
  title: "Aaryan Srivastava resume",
  caption: "Technical resume. Open or download directly if the embed is unavailable.",
};

export function placeholderMedia(code: string, caption: string): MediaAsset {
  return {
    kind: "embed",
    src: `placeholder:${code}`,
    title: code,
    caption,
  };
}
