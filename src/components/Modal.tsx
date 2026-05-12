"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

type ModalLink = {
  href: string;
  label: string;
  icon?: "github" | "external";
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
  details?: string[];
  links?: ModalLink[];
};

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  tags,
  details,
  links,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#1e1008]/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f0e8d8] border border-[#d0c0a8] rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto pointer-events-auto shadow-2xl"
            >
              <div className="flex items-start justify-between p-6 pb-4 border-b border-[#d0c0a8]">
                <div className="flex-1 pr-4">
                  <h2 className="text-[#1e1008] font-bold text-xl leading-snug">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-xs text-[#6a5540] mt-1.5">{subtitle}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-[#6a5540] hover:text-[#b87333] transition-colors shrink-0 mt-0.5"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-[#7a6248] bg-[#d0c0a8] px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-[#6a5540] leading-relaxed">
                  {description}
                </p>

                {details && details.length > 0 && (
                  <ul className="space-y-3 pt-1">
                    {details.map((d, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-[#9a8070] leading-relaxed"
                      >
                        <span className="text-[#b87333] mt-1.5 shrink-0 text-[10px]">
                          ◆
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                {links && links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#6a5540] hover:text-[#b87333] transition-colors border border-[#d0c0a8] hover:border-[#b87333]/40 px-3 py-1.5 rounded-lg"
                      >
                        {link.icon === "github" ? (
                          <GitHubIcon size={14} />
                        ) : (
                          <ExternalLink size={14} />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
