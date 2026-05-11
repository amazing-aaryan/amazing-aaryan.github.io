"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technical = [
  "Python", "TypeScript", "C++", "PyTorch", "TensorFlow",
  "SQL", "LangChain", "Playwright", "Docker", "Pydantic",
];

const analytical = [
  "Statistical Analysis", "Legal Research", "Data Governance",
  "COPPA / FERPA Compliance", "Political Science Methods",
  "IP & WIPO Filings", "Regulatory Analysis", "OCR & Document AI",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#6ee7b7] tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl font-bold text-[#f0f0f0] leading-tight">
            One person. Two disciplines.
            <br />
            <span className="text-[#6b7280]">Fluent in both.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-[#9ca3af] leading-relaxed text-[15px]"
          >
            <p>
              I&apos;m a sophomore at the{" "}
              <span className="text-[#f0f0f0]">University of Michigan</span>{" "}
              double majoring in Political Science and Computer Science — a
              combination I chose deliberately because the hardest problems in
              AI aren&apos;t technical. They&apos;re political.
            </p>
            <p>
              I founded{" "}
              <span className="text-[#6ee7b7] font-medium">IRENE</span>, an AI
              platform improving logistics for nonprofit volunteer networks. I
              also research how governments earn — and lose — public trust
              through the lens of World War I casualty data and political
              mobilization.
            </p>
            <p>
              Earlier, I worked at a law firm building financial evidence
              systems for a $200M cryptocurrency lawsuit and at an EdTech company
              navigating COPPA and FERPA compliance. Both experiences taught me
              the same thing: technical systems have legal consequences, and legal
              systems have technical blind spots.
            </p>
            <p>
              My edge is being able to move between these worlds — writing the
              code, reading the statute, and connecting the two.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="rounded-xl border border-[#1a1a1a] bg-[#0f0f0f] p-5">
              <p className="text-xs text-[#6ee7b7] tracking-widest uppercase mb-4">
                Technical
              </p>
              <ul className="space-y-2">
                {technical.map((s) => (
                  <li key={s} className="text-sm text-[#6b7280] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6ee7b7] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#1a1a1a] bg-[#0f0f0f] p-5">
              <p className="text-xs text-[#6ee7b7] tracking-widest uppercase mb-4">
                Research &amp; Legal
              </p>
              <ul className="space-y-2">
                {analytical.map((s) => (
                  <li key={s} className="text-sm text-[#6b7280] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6ee7b7] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#1a1a1a] rounded-xl overflow-hidden"
        >
          {[
            { value: "3.9", label: "GPA" },
            { value: "100+", label: "Weekly users on IRENE" },
            { value: "~3M", label: "Historical records processed" },
            { value: "$200M", label: "Litigation supported" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0f0f0f] px-6 py-5">
              <p className="text-2xl font-bold text-[#f0f0f0] mb-1">{stat.value}</p>
              <p className="text-xs text-[#6b7280]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
