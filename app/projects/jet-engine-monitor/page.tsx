"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, FileCode2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const PROJECT_IMAGES = [
  "/portfolio/jet-engine-monitor.jpg",
  "/portfolio/jet-engine-monitor-2.jpg",
  "/portfolio/jet-engine-monitor-3.jpg"
];

export default function JetEnginePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length);
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent)]/20">

      {/* NAVBAR */}
      <Navbar>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-medium hover:text-rose-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </Navbar>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">

        {/* HEADER */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-medium">
                Machine Learning & Data Science
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Jet Engine Health Monitor</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A predictive maintenance dashboard engineered to calculate the Remaining Useful Life (RUL) of turbofan engines using the NASA C-MAPSS dataset.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://colab.research.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-rose-500 transition-colors"
                >
                    <FileCode2 className="w-5 h-5" /> View Notebook
                </a>
            </div>
        </motion.div>

        {/* HERO VISUAL (CAROUSEL) */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
            className="group relative w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--border)] flex justify-center items-center"
        >
             {/* Sizer: Removed 'aspect-video' and 'object-cover' to let the natural aspect ratio dictate container height */}
             <img src={PROJECT_IMAGES[0]} alt="" aria-hidden className="w-full h-auto block invisible" />

             {/* Stacked images crossfade: Switched to 'object-contain' to ensure images fit without cropping */}
             {PROJECT_IMAGES.map((src, idx) => (
                 <img
                     key={src}
                     src={src}
                     alt={`Jet Engine Monitor Screenshot ${idx + 1}`}
                     className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                         idx === currentImageIndex ? "opacity-100" : "opacity-0"
                     }`}
                 />
             ))}

             {/* Carousel Controls */}
             <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={prevImage}
                    className="pointer-events-auto p-2 rounded-full bg-white/90 dark:bg-black/60 text-[var(--text-primary)] hover:scale-110 transition-transform backdrop-blur-sm shadow-lg border border-[var(--border)]"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextImage}
                    className="pointer-events-auto p-2 rounded-full bg-white/90 dark:bg-black/60 text-[var(--text-primary)] hover:scale-110 transition-transform backdrop-blur-sm shadow-lg border border-[var(--border)]"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
             </div>

             {/* Dots Indicator */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {PROJECT_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm border border-black/10 ${
                            idx === currentImageIndex
                            ? "w-6 bg-rose-500"
                            : "w-2 bg-white/70 hover:bg-white"
                        }`}
                    />
                ))}
             </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        This system tackles the critical challenge of predictive maintenance in aviation. By analyzing complex time-series sensor data from the NASA C-MAPSS dataset, the application predicts the Remaining Useful Life (RUL) of jet engines. To ensure algorithmic transparency and meet industrial safety standards, the predictions are broken down using Explainable AI (SHAP) so operators can see exactly which sensor readings are driving the model's decisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        As the <strong>Team Lead & ML Developer</strong>, I guided a 6-person engineering team through a 16-week development lifecycle. I took ownership of the core machine learning pipeline, executing the exploratory data analysis, engineering the rolling features for the RUL calculations, and hyperparameter tuning an XGBoost model via Optuna. Additionally, I handled the frontend quality assurance to ensure our final Streamlit dashboard was highly interactive and reliable.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "XGBoost Regression Model for time-series forecasting",
                            "Hyperparameter optimization via Optuna",
                            "Explainable AI (XAI) integration using SHAP waterfalls",
                            "Real-time operations dashboard built with Streamlit & Plotly",
                            "Automated NASA Safety Score & RMSE evaluation",
                            "Rolling window feature engineering for sensor noise reduction"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK */}
            <div className="space-y-8">
                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Role</h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                        Team Lead & ML Developer
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "XGBoost", "Optuna", "SHAP", "Streamlit", "Pandas", "Plotly", "Scikit-Learn"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Performance</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The model was strictly evaluated against the <strong>NASA Safety Score</strong>, penalizing over-predictions (late maintenance) more heavily than under-predictions.
                    </p>
                </Card>
            </div>
        </div>
      </div>
    </main>
  );
}
