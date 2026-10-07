"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const skills = [
  {
    name: "Backend",
    summary: "APIs for warehouses, payments and inventory, built for data correctness.",
    lead: ["Go", "Java", "C#"],
    also: ["Spring Boot", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "Laravel", "Supabase", "MySQL"],
  },
  {
    name: "Frontend",
    summary: "Responsive interfaces and fast landing pages.",
    lead: ["Next.js", "React", "TypeScript"],
    also: ["Tailwind CSS", "Redux Toolkit", "Material UI", "Vue.js", "Bootstrap", "Framer Motion", "Zod", "Figma"],
  },
  {
    name: "AI",
    summary: "RAG pipelines, real-time computer vision and explainable models.",
    lead: ["LangChain", "TensorFlow", "MediaPipe"],
    also: ["Hugging Face", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "XGBoost", "SHAP", "FAISS"],
  },
];

export function Skills() {
  const [active, setActive] = useState(0);
  const s = skills[active];
  return (
    <section>
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Technical Skills</h2>

        <div role="tablist" className="flex gap-8 border-b border-[var(--border)]">
          {skills.map((k, i) => (
            <button
              key={k.name} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
              className={`relative pb-3 text-lg font-semibold transition-colors ${i === active ? "text-[var(--text-primary)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"}`}
            >
              {k.name}
              {i === active && <motion.span layoutId="skills-tab" className="absolute inset-x-0 -bottom-px h-0.5 bg-emerald-500" />}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-8 min-h-72"
          >
            <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[var(--text-primary)]">
              {s.lead.join(", ")}
            </p>
            <p className="text-[var(--text-secondary)] max-w-[44ch]">{s.summary}</p>
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] max-w-[52ch]">
              <span className="text-emerald-500 font-semibold">Also </span>
              {s.also.join(", ")}.
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
