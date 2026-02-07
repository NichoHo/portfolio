"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HammoudaPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 dark:bg-stone-500/10 text-stone-700 dark:text-stone-400 text-xs font-medium">
                Manufacturing & Export
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Hammouda Charcoal</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A robust digital presence for a charcoal manufacturing and export company. Features an extensive product gallery, global client mapping, and a dedicated corporate identity system.
            </p>

            <div className="flex flex-wrap gap-6">
                <a 
                    href="https://www.hammoudacharcoal.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Visit Live Website
                </a>
                <a 
                    href="https://github.com/NichoHo/coco-hamooda" 
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
            className="w-full h-64 md:h-96 bg-stone-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative"
        >
             {/* Abstract Texture Representation */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-700 via-stone-900 to-black" />
             <div className="relative z-10 grid grid-cols-3 gap-4 opacity-50 rotate-12 scale-110">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-24 h-24 bg-stone-800 rounded-lg border border-stone-700" />
                ))}
             </div>
             <div className="absolute z-20 text-stone-400 font-mono text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                [Product Gallery Showcase]
             </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
            
            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        This project serves as the primary digital touchpoint for Hammouda Charcoal, facilitating B2B connections between Indonesian manufacturers and Middle Eastern/Global markets. It moves beyond a simple landing page, offering a multi-page structure that details the company's manufacturing process, client portfolio, and extensive product specifications.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Dynamic Image Gallery Grid",
                            "Multi-page Routing (About, Clients, Contact)",
                            "Client Location Visualization",
                            "Responsive 'Masonry' Layouts",
                            "SEO-Optimized Content Structure",
                            "Direct WhatsApp/Inquiry Integration"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
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
                        {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "PostCSS"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Visual Design</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Uses a rugged, industrial aesthetic with earth tones (Stone/Zinc) to reflect the natural product (Charcoal) while maintaining a premium corporate feel.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}