export type MediaAsset =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption?: string;
      aspect?: "square" | "video" | "portrait" | "wide";
    }
  | {
      kind: "youtube" | "vimeo";
      id: string;
      title: string;
      poster?: string;
      caption?: string;
    }
  | {
      kind: "video";
      src: string;
      title: string;
      poster?: string;
      captions?: string;
      caption?: string;
    }
  | {
      kind: "pdf";
      src: string;
      title: string;
      caption?: string;
    }
  | {
      kind: "embed";
      src: string;
      title: string;
      caption?: string;
    };

export type EvidenceMetric = {
  value: string;
  label: string;
  context: string;
  source?: string;
  confidence: "resume" | "project" | "estimate" | "in-progress";
};

export type WorkItem = {
  slug: string;
  title: string;
  role: string;
  period: string;
  status: "live" | "in-progress" | "research" | "archived";
  oneLine: string;
  problem: string;
  stakes: string;
  constraints: string[];
  approach: string[];
  outcomes: EvidenceMetric[];
  stack: string[];
  media: MediaAsset[];
  links: {
    label: string;
    href: string;
    kind: "github" | "paper" | "demo" | "external";
  }[];
  ethics: string[];
  learned: string;
};

export type ResearchItem = {
  slug: string;
  title: string;
  venue: string;
  year: string;
  status: "working paper" | "preprint" | "active research" | "draft";
  story: string;
  method: string;
  evidence: string;
  tags: string[];
  link?: string;
  media: MediaAsset[];
};

export type Chapter = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  artifact: string;
  proof: string[];
};

export type Principle = {
  title: string;
  body: string;
  signal: string;
};

export type Award = {
  title: string;
  detail: string;
  year: string;
};
