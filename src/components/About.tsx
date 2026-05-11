"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Python",
  "TypeScript",
  "C++",
  "SQL",
  "PyTorch",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "PostgreSQL",
  "Playwright",
  "Pydantic",
  "Docker",
  "LangChain",
  "scikit-learn",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#6ee7b7] text-sm mb-2 tracking-widest">
            01. about me
          </p>
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-12">About</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-[#6b7280] leading-relaxed"
          >
            <p>
              I&apos;m a sophomore at the{" "}
              <span className="text-[#f0f0f0]">University of Michigan</span>{" "}
              double majoring in Political Science and Computer Science, maintaining
              a 3.9 GPA. My work sits at the intersection of technology, law, and
              public accountability.
            </p>
            <p>
              I founded{" "}
              <span className="text-[#6ee7b7]">IRENE</span> — an AI-powered
              platform using multimodal OCR and computer vision to improve volunteer
              sorting workflows, serving 100+ weekly users.
            </p>
            <p>
              I also do research at UMich analyzing how soldier deaths in WWI
              influenced political support, building the first large-scale dataset
              (~3M records) of American WWI soldier service data.
            </p>
            <p>
              Outside tech, I&apos;ve won World Scholar&apos;s Cup medals, hold
              the Gold Medal of Honor (#11 in school history), and care deeply about
              how AI intersects with democracy, justice, and governance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-[#6b7280] mb-4 font-mono">
              Technologies I work with:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-[#6b7280]"
                >
                  <span className="text-[#6ee7b7] font-mono">▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
