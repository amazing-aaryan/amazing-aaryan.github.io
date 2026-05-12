"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[#b87333] tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e1008] mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-[#9a8070] leading-relaxed mb-12 max-w-lg mx-auto">
            Whether you&apos;re a researcher, a lawyer, a technologist, or
            someone thinking about the intersection of all three — I&apos;d like
            to hear from you. My inbox is open.
          </p>

          <a
            href="mailto:aaryansr@umich.edu"
            className="inline-block px-8 py-4 bg-[#b87333] text-white text-sm font-semibold rounded-lg hover:bg-[#a0622a] transition-colors duration-200 mb-16"
          >
            Say Hello
          </a>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a
              href="https://github.com/amazing-aaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7a6248] hover:text-[#b87333] transition-colors"
            >
              <GitHubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aaryan21/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7a6248] hover:text-[#b87333] transition-colors"
            >
              <LinkedInIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:aaryansr@umich.edu"
              className="flex items-center gap-2 text-sm text-[#7a6248] hover:text-[#b87333] transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#7a6248] hover:text-[#b87333] transition-colors"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <p className="font-mono text-xs text-[#7a6248]">
          Designed &amp; Built by Aaryan Srivastava
        </p>
      </motion.footer>
    </section>
  );
}
