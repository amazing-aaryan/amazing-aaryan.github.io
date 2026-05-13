"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaAsset } from "@/content/schema";
import AccessibleDialog from "./AccessibleDialog";
import MediaFrame from "./MediaFrame";

type MediaLightboxProps = {
  assets: MediaAsset[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
};

export default function MediaLightbox({
  assets,
  initialIndex,
  open,
  onClose,
}: MediaLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const move = useCallback(
    (direction: 1 | -1) => {
      setIndex((current) => (current + direction + assets.length) % assets.length);
    },
    [assets.length],
  );

  useEffect(() => {
    if (!open || assets.length <= 1) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [assets.length, move, open]);

  const asset = assets[index];
  const title = asset
    ? asset.caption || ("title" in asset ? asset.title : asset.alt)
    : "Media";

  return (
    <AccessibleDialog
      open={open}
      title={title}
      onClose={onClose}
    >
      <div className="space-y-4 p-5">
        {asset && <MediaFrame asset={asset} priority />}
        {assets.length > 1 && (
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => move(-1)}
              className="inline-flex items-center gap-2 border border-ink/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition hover:bg-ink hover:text-paper"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <p className="font-mono text-xs text-ink/60">
              {index + 1} / {assets.length}
            </p>
            <button
              type="button"
              onClick={() => move(1)}
              className="inline-flex items-center gap-2 border border-ink/20 px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition hover:bg-ink hover:text-paper"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </AccessibleDialog>
  );
}
