"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AsiaTradingPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-500 text-xs font-medium">
                Corporate & Data Visualization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Asia Trading Export</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A premium B2B digital platform connecting Indonesian charcoal producers with global markets. Features interactive data visualizations using D3.js.
            </p>

            <div className="flex flex-wrap gap-6">
                <a 
                    href="https://www.asiatradingexport.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Visit Live Website
                </a>
                <a 
                    href="https://github.com/NichoHo/asia-trading-export" 
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
            className="w-full h-64 md:h-96 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative"
        >
             {/* Abstract Representation of Globe/Trade */}
             <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-64 h-64 rounded-full border border-amber-500/30 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-amber-500/50 flex items-center justify-center animate-pulse">
                         <div className="w-32 h-32 rounded-full bg-amber-500/20 blur-xl" />
                    </div>
                </div>
             </div>
             <div className="relative z-10 text-amber-500 font-mono text-sm">[Interactive D3.js Globe]</div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
            
            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Built to establish trust in the international market, this project focuses on high-performance B2B lead generation. It showcases product catalogs (Coconut Briquettes, Hardwood, Shisha) and logistics services with a premium, corporate aesthetic. The standout feature is an interactive globe visualization that highlights export routes and partner locations.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Interactive Globe Visualization (D3.js + TopoJSON)",
                            "Corporate Identity & Brand Storytelling",
                            "Product Catalog with Detailed Specs",
                            "Responsive & Accessible UI (Mobile First)",
                            "Performance Optimized (Next.js App Router)",
                            "Contact & Inquiry Lead Funnels"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
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
                        {["Next.js", "TypeScript", "D3.js", "TopoJSON", "Tailwind CSS", "Framer Motion", "React"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Data Viz</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Leverages <strong>D3.js</strong> to render complex geographical data, visualizing trade routes and global reach in real-time on the client side.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}