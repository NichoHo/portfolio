"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { reveal } from "@/lib/motion";

const papers = [
  {
    year: "2025",
    kind: "Published paper",
    venue: "ICORIS 2025",
    title: "Machine Learning Algorithms for HIV/AIDS Prediction using Explainable AI",
    summary:
      "Compares ML models for predicting HIV/AIDS susceptibility from socio-behavioral data, then uses SHAP to show which features drive each prediction, so clinicians can check the reasoning.",
    tags: ["Explainable AI", "Healthcare", "SHAP", "Python"],
    cover: "/portfolio/research.jpg",
    pdf: "/portfolio/research.pdf",
    cta: "Read full paper",
  },
  {
    year: "2025",
    kind: "Thesis",
    venue: "In progress",
    title: "Hybrid MediaPipe-GRU Architecture for Efficient BISINDO Recognition",
    summary:
      "A lightweight Indonesian Sign Language recognizer that reads hand gestures and facial markers, and runs offline in real time on budget devices.",
    tags: ["Deep Learning", "MediaPipe", "GRU", "Low-resource"],
    cover: "/portfolio/research-2.jpg",
    pdf: "/portfolio/research-2.pdf",
    cta: "Read current version",
  },
];

export function Research() {
  return (
    <section id="research">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Research & Publications</h2>

        <div className="divide-y divide-[var(--border)]">
          {papers.map((p) => (
            <motion.div
              key={p.title}
              {...reveal}
              className="grid gap-4 md:grid-cols-[9rem_1fr_12rem] md:gap-10 py-10 md:py-12 items-start"
            >
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-emerald-500">{p.year}</p>
                <p className="mt-2 text-sm text-[var(--text-tertiary)]">{p.kind}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.1] text-[var(--text-primary)] max-w-[24ch]">
                  {p.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-[58ch]">{p.summary}</p>
                <p className="text-sm text-[var(--text-tertiary)]">
                  {p.venue}. {p.tags.join(", ")}.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                  <a href={p.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4">
                    {p.cta}
                  </a>
                  <a href={p.pdf} download className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    <Download className="w-4 h-4" /> PDF
                  </a>
                </div>
              </div>

              <a href={p.pdf} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="block w-44 md:w-full">
                <img
                  src={p.cover} alt={`First page of ${p.title}`} loading="lazy"
                  className="w-full rotate-2 rounded-lg border border-[var(--border)] shadow-2xl"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
