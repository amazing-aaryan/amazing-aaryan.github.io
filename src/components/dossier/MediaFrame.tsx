"use client";

import Image from "next/image";
import { FileText, Play, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MediaAsset } from "@/content/schema";

const allowedEmbedHosts = new Set([
  "www.youtube-nocookie.com",
  "player.vimeo.com",
  "docs.google.com",
]);

type MediaFrameProps = {
  asset: MediaAsset;
  priority?: boolean;
};

function Placeholder({ label, caption }: { label: string; caption?: string }) {
  return (
    <figure className="border border-dashed border-bone/35 bg-charcoal p-6 text-paper">
      <div className="grid aspect-video place-items-center bg-[linear-gradient(90deg,rgba(244,232,208,.06)_1px,transparent_1px),linear-gradient(rgba(244,232,208,.06)_1px,transparent_1px)] bg-[size:26px_26px]">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-old-gold">
            {label}
          </p>
          <p className="mt-3 text-sm text-bone">media coming soon</p>
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-sm text-bone/75">{caption}</figcaption>}
    </figure>
  );
}

export default function MediaFrame({ asset, priority = false }: MediaFrameProps) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (asset.kind !== "video" || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [asset]);

  if (asset.kind === "embed" && asset.src.startsWith("placeholder:")) {
    return <Placeholder label={asset.title} caption={asset.caption} />;
  }

  if (asset.kind === "image") {
    const aspect = asset.aspect === "portrait" ? "aspect-[3/4]" : asset.aspect === "square" ? "aspect-square" : "aspect-video";
    return (
      <figure className="border border-bone/20 bg-charcoal p-3 text-paper">
        <div className={`relative ${aspect} overflow-hidden bg-ink`}>
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority={priority}
            className="object-cover"
          />
        </div>
        {asset.caption && <figcaption className="mt-3 text-sm text-bone/75">{asset.caption}</figcaption>}
      </figure>
    );
  }

  if (asset.kind === "youtube" || asset.kind === "vimeo") {
    const src =
      asset.kind === "youtube"
        ? `https://www.youtube-nocookie.com/embed/${asset.id}`
        : `https://player.vimeo.com/video/${asset.id}`;
    return (
      <figure className="border border-bone/20 bg-charcoal p-3 text-paper">
        <div className="relative grid aspect-video place-items-center overflow-hidden bg-ink">
          {loaded ? (
            <iframe
              src={src}
              title={asset.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex items-center gap-3 border border-bone/25 bg-paper px-5 py-3 text-ink transition hover:bg-old-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-vermilion"
            >
              <Play size={18} /> Load video
            </button>
          )}
        </div>
        {asset.caption && <figcaption className="mt-3 text-sm text-bone/75">{asset.caption}</figcaption>}
      </figure>
    );
  }

  if (asset.kind === "video") {
    return (
      <figure className="border border-bone/20 bg-charcoal p-3 text-paper">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster={asset.poster}
          className="aspect-video w-full bg-ink"
        >
          <source src={asset.src} />
          {asset.captions && <track src={asset.captions} kind="captions" />}
        </video>
        {asset.caption && <figcaption className="mt-3 text-sm text-bone/75">{asset.caption}</figcaption>}
      </figure>
    );
  }

  if (asset.kind === "pdf") {
    return (
      <figure className="border border-bone/20 bg-charcoal p-3 text-paper">
        <object data={asset.src} type="application/pdf" className="h-[72vh] w-full bg-paper">
          <div className="grid min-h-[360px] place-items-center bg-paper p-8 text-center text-ink">
            <FileText className="mx-auto mb-3" />
            <a className="underline decoration-vermilion underline-offset-4" href={asset.src}>
              Open {asset.title}
            </a>
          </div>
        </object>
        {asset.caption && <figcaption className="mt-3 text-sm text-bone/75">{asset.caption}</figcaption>}
      </figure>
    );
  }

  if (asset.kind !== "embed") {
    return null;
  }

  let safe = false;
  try {
    safe = allowedEmbedHosts.has(new URL(asset.src).host);
  } catch {
    safe = false;
  }

  if (!safe) {
    return (
      <Placeholder
        label={asset.title}
        caption={asset.caption || "External embed host is not allowlisted for inline rendering."}
      />
    );
  }

  return (
    <figure className="border border-bone/20 bg-charcoal p-3 text-paper">
      <div className="flex items-center gap-2 border-b border-bone/15 pb-2 font-mono text-xs uppercase tracking-[0.18em] text-bone/70">
        <Shield size={14} /> Sandboxed embed
      </div>
      <iframe
        src={asset.src}
        title={asset.title}
        sandbox="allow-scripts allow-same-origin allow-popups"
        className="mt-3 aspect-video w-full bg-ink"
      />
      {asset.caption && <figcaption className="mt-3 text-sm text-bone/75">{asset.caption}</figcaption>}
    </figure>
  );
}
