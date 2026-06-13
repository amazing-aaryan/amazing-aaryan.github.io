"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden">
      {/* Ambient glows — much stronger than before */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(196,97,26,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(201,144,20,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative">
        {/* Identity badge */}
        <motion.div {...fadeUp(0.05)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c4611a]/30 bg-[#c4611a]/10 text-[#c4611a] text-xs tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4611a] animate-pulse" />
            Computer Science × Political Science — University of Michigan
          </span>
        </motion.div>

        {/* Circular avatar */}
        <motion.div {...fadeUp(0.10)} className="mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#c4611a]/30 ring-4 ring-[#c4611a]/10">
            <Image
              src="/profile/aaryan.jpg"
              alt="Aaryan Srivastava"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-6xl sm:text-8xl font-bold text-[#1e1008] leading-[1.05] tracking-tight mb-6"
        >
          Aaryan
          <br />
          Srivastava.
        </motion.h1>

        <motion.h2
          {...fadeUp(0.25)}
          className="text-xl sm:text-2xl font-medium text-[#7a4c26] leading-relaxed mb-8 max-w-2xl"
        >
          Technology shaped by principle.{" "}
          <span className="text-[#967040]">Research informed by data.</span>
          <br />I bridge the gap between what systems can do and what they{" "}
          <em>should</em> do.
        </motion.h2>

        <motion.p
          {...fadeUp(0.35)}
          className="max-w-lg text-[#7a4c26] text-base leading-relaxed mb-12"
        >
          Founder of{" "}
          <span className="text-[#1e1008]">IRENE</span>. Researcher at UMich
          studying how wartime sacrifice shaped political trust. Previously
          advising on legal compliance and building financial evidence systems for
          litigation.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#c4611a] text-white text-sm font-semibold rounded-lg hover:bg-[#b05218] transition-colors duration-200"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#c2a468] text-[#967040] text-sm rounded-lg hover:border-[#c4611a]/50 hover:text-[#1e1008] transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.55)} className="flex items-center gap-5">
          <a
            href="https://github.com/amazing-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68481e] hover:text-[#c4611a] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaryan21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#68481e] hover:text-[#c4611a] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:aaryansr@umich.edu"
            className="text-[#68481e] hover:text-[#c4611a] transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="text-[#68481e]"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
