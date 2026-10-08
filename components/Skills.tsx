"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

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

const chip = "px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]";

export function Skills() {
  return (
    <section>
      <motion.div
        {...reveal}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Technical Skills</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="flex flex-col gap-4 rounded-2xl border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)] transition-colors duration-300 p-6">
              <p className="text-sm font-semibold text-emerald-500">{s.name}</p>
              <p className="text-2xl font-bold tracking-tight leading-tight text-[var(--text-primary)]">
                {s.lead.join(", ")}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">{s.summary}</p>
              <div className="mt-auto border-t border-[var(--border)] pt-4">
                <p className="mb-2 text-xs font-bold text-[var(--text-primary)]">Also used</p>
                <div className="flex flex-wrap gap-2">
                  {s.also.map((t) => <span key={t} className={chip}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
