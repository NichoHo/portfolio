"use client";

import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";
import { Card } from "@/components/Card";
import { fadeUp } from "@/lib/motion";

export function Research() {
  return (
    <section id="research" className="py-20 bg-[var(--surface)]/50 border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] flex items-center gap-3">
            Research & Publications
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl">
            Academic contributions to the field of Artificial Intelligence and Healthcare.
          </p>
        </motion.div>

        <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        >
            <Card className="group overflow-hidden border-l-4 border-l-[var(--border-hover)] group-hover:border-l-indigo-600 dark:group-hover:border-l-indigo-500 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3 gap-0">

                    {/* VISUAL SIDE (Image of Paper) */}
                    <div className="hidden md:block relative bg-[var(--surface)] border-r border-[var(--border)] overflow-hidden">
                        <img
                            src="/portfolio/research.jpg"
                            alt="Research Paper Preview"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-center space-y-6">
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className="px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium">
                                    Published Paper
                                </span>
                                <span className="text-[var(--text-tertiary)] font-medium flex items-center gap-1.5">
                                    ICORIS 2025
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--text-primary)] leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                Machine Learning Algorithms for HIV/AIDS Prediction using Explainable AI
                            </h3>

                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                Conducted in-depth research on applying Explainable Artificial Intelligence (XAI) to medical diagnostics.
                                The study evaluates various ML models to predict HIV/AIDS susceptibility based on socio-behavioral data, using <strong>SHAP (SHapley Additive exPlanations)</strong> to provide transparent, interpretable reasoning for model decisions.
                                This work aims to bridge the trust gap between AI systems and medical practitioners.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["Explainable AI (XAI)", "Healthcare Informatics", "SHAP Analysis", "Python", "Machine Learning"].map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="/portfolio/research.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                <BookOpen className="w-4 h-4" />
                                Read Full Paper
                            </a>
                            <a
                                href="/portfolio/research.pdf"
                                download="Machine Learning Algorithms for HIV/AIDS.pdf"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] font-medium text-sm hover:bg-[var(--border)] transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>

        <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        >
            <Card className="group overflow-hidden border-l-4 border-l-[var(--border-hover)] group-hover:border-l-emerald-600 dark:group-hover:border-l-emerald-500 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3 gap-0">

                    {/* VISUAL SIDE (Image of Paper) */}
                    <div className="hidden md:block relative bg-[var(--surface)] border-r border-[var(--border)] overflow-hidden">
                        <img
                            src="/portfolio/research-2.jpg"
                            alt="Research Paper Preview"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-center space-y-6">
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium">
                                    Thesis
                                </span>
                                <span className="text-[var(--text-tertiary)] font-medium flex items-center gap-1.5">
                                    2025-ongoing
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--text-primary)] leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                Hybrid MediaPipe-GRU Architecture for Efficient BISINDO Recognition Integrating Non-Manual Markers in LowResource Environments
                            </h3>

                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                This thesis develops a highly efficient Sign Language Recognition (SLR) system for Indonesian Sign Language (BISINDO) targeting low-resource environments. By shifting to a MediaPipe-GRU architecture, the model accurately captures both manual gestures and non-manual signals with minimal computational overhead. The optimized system achieves robust real-time performance on budget devices, promoting greater accessibility in communication technology.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["Deep Learning", "MediaPipe", "GRU", "Sign Language Recognition", "Low-Resource"].map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="/portfolio/research-2.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20"
                            >
                                <BookOpen className="w-4 h-4" />
                                Read Current Version
                            </a>
                            <a
                                href="/portfolio/research-2.pdf"
                                download="Hybrid_MediaPipe_GRU_Architecture.pdf"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] font-medium text-sm hover:bg-[var(--border)] transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
      </div>
    </section>
  );
}