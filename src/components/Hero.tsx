"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6ee7b7 1px, transparent 1px), linear-gradient(90deg, #6ee7b7 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative">
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono text-[#6ee7b7] text-sm mb-4 tracking-widest"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-7xl font-bold text-[#f0f0f0] leading-tight mb-2"
        >
          Aaryan Srivastava.
        </motion.h1>

        <motion.h2
          {...fadeUp(0.3)}
          className="text-4xl sm:text-6xl font-bold text-[#6b7280] leading-tight mb-8"
        >
          I build AI at the intersection
          <br className="hidden sm:block" /> of law &amp; policy.
        </motion.h2>

        <motion.p
          {...fadeUp(0.4)}
          className="max-w-xl text-[#6b7280] text-lg leading-relaxed mb-12"
        >
          B.A. Political Science &amp; B.S. Computer Science student at{" "}
          <span className="text-[#f0f0f0]">University of Michigan</span>. Founder
          of IRENE. Building systems that are accountable, transparent, and
          actually useful.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex items-center gap-6 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 border border-[#6ee7b7] text-[#6ee7b7] text-sm font-mono rounded hover:bg-[#6ee7b7]/10 transition-colors duration-200"
          >
            See my work
          </a>
          <a
            href="mailto:aaryansr@umich.edu"
            className="text-sm text-[#6b7280] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            Get in touch →
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="flex items-center gap-5">
          <a
            href="https://github.com/amazing-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaryan21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:aaryansr@umich.edu"
            className="text-[#6b7280] hover:text-[#6ee7b7] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b7280]"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
