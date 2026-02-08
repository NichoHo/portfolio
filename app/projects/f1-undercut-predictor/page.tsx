"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function F1PredictorPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-emerald-500/20">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">
        
        {/* HEADER */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium">
                Sports Analytics & ML
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">F1 Undercut Predictor</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A machine learning model designed to predict the success probability of undercut strategies in Formula 1 races using historical telemetry data.
            </p>

            <div className="flex gap-4">
                <a 
                    href="https://github.com/NichoHo/f1-undercut-predictor" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO VISUAL */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-auto md:bg-red-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative"
        >
             <img src="/portfolio/f1-undercut-predictor.jpg" alt="F1 Undercut Predictor" className="object-cover"/>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
            
            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        In Formula 1, an "undercut" is a strategic pit stop made to overtake a rival by utilizing fresh tires. This project leverages the <strong>FastF1</strong> library to mine thousands of laps of historical race data (2022-2024). It uses a Random Forest Classifier to calculate the probability of a successful overtake based on variables like tire degradation, pit stop time loss, and gap to the driver ahead.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Data Mining pipeline using FastF1 API",
                            "Random Forest Classification Model",
                            "Analysis of Tire Compound Performance & Degradation",
                            "Flask Web Interface for Real-time Predictions",
                            "Visualization of Driver Gaps and Pit Windows",
                            "Comprehensive Dataset Construction (CSV)"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK */}
            <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "Flask", "Scikit-Learn", "Pandas", "FastF1", "NumPy", "Matplotlib", "HTML/CSS"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Model Logic</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        The model evaluates the 'Gap to Driver Ahead', 'Tyre Age', and 'Compound Difference' to output a binary classification (Successful/Failed Undercut) with a confidence score.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}