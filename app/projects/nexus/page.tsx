"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function NexusPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                Frontend Architecture & UX
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Nexus Agency</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A high-performance digital agency website engineered with Next.js 14. Features advanced scroll animations, a modular component architecture, and a highly responsive design system.
            </p>

            <div className="flex flex-wrap gap-6">
                <a 
                    href="https://www.nexdevsoftware.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Visit Live Website
                </a>
                <a 
                    href="https://github.com/NichoHo/nexus-agency" 
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
            className="w-full h-64 md:h-96 bg-cyan-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative"
        >
             {/* Abstract UI representation */}
             <div className="absolute inset-20 bg-white dark:bg-slate-950 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col p-6 gap-4 opacity-90 transform -rotate-2">
                <div className="w-1/3 h-6 bg-cyan-100 dark:bg-cyan-900/20 rounded-md" />
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="h-24 bg-slate-100 dark:bg-slate-900 rounded-md" />
                    <div className="h-24 bg-slate-100 dark:bg-slate-900 rounded-md" />
                </div>
             </div>
             <div className="relative z-10 text-slate-400 font-mono text-sm">[Modern Landing Page UI]</div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
            
            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Nexus serves as a comprehensive portfolio and service platform for a digital agency. The project focuses on "Technical Aesthetics"—using clean code to drive a visually stunning user experience. It leverages the latest Next.js 14 App Router for performance and Framer Motion for sophisticated, scroll-triggered animations that guide the user journey.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Next.js 14 App Router Architecture",
                            "Advanced Scroll Animations with Framer Motion",
                            "Component-Driven UI Development",
                            "Responsive Mobile-First Design System",
                            "Performance Optimized (Core Web Vitals)",
                            "Interactive Service & Portfolio Sections"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
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
                        {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Lucide Icons", "ESLint"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Design Philosophy</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Built with a "content-first" approach, utilizing whitespace and motion to create a premium, trustworthy digital presence.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}