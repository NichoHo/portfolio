"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans">
      
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-12">
        
        <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">All Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                A collection of my work in Fullstack Development, Data Visualization, and Artificial Intelligence.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. SIGNLINGO CARD (Standard) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link href="/projects/signlingo" className="block h-full">
                    <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="h-56 bg-emerald-50 dark:bg-emerald-900/10 relative overflow-hidden flex items-center justify-center">
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <span className="text-emerald-600/40 dark:text-emerald-400/20 font-mono text-4xl font-bold">SL</span>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="mb-4 flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Signlingo</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                    AI-powered sign language learning platform using TensorFlow and OpenCV for real-time feedback.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Python</span>
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">ML/AI</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>

            {/* 2. FLUX CARD (Standard) */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Link href="/projects/flux" className="block h-full">
                    <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="h-56 bg-indigo-50 dark:bg-indigo-900/10 relative overflow-hidden flex items-center justify-center">
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <span className="text-indigo-600/40 dark:text-indigo-400/20 font-mono text-4xl font-bold">FLX</span>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="mb-4 flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Flux Budget App</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                    Comprehensive financial tracking system with automated recurring billing and multi-currency support.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Laravel</span>
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">PHP</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>

             {/* 3. FAQ ASSISTANT CARD (Standard) */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Link href="/projects/faq-assistant" className="block h-full">
                    <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="h-56 bg-violet-50 dark:bg-violet-900/10 relative overflow-hidden flex items-center justify-center">
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <span className="text-violet-600/40 dark:text-violet-400/20 font-mono text-4xl font-bold">FAQ</span>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="mb-4 flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">FaQ Assistant</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                    Intelligent RAG-based document assistant using LangChain and Gemini to chat with uploaded PDF documents.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">LangChain</span>
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Gemini</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>

            {/* 4. F1 UNDERCUT PREDICTOR CARD (Standard) */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link href="/projects/f1-undercut-predictor" className="block h-full">
                    <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="h-56 bg-red-50 dark:bg-red-900/10 relative overflow-hidden flex items-center justify-center">
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             <span className="text-red-600/40 dark:text-red-400/20 font-mono text-4xl font-bold">F1</span>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="mb-4 flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">F1 Undercut Predictor</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                    Machine learning model predicting race strategy success probabilities using historical telemetry data.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Scikit-Learn</span>
                                    <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">FastF1</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>

             {/* 5. NEXUS AGENCY CARD (Dual Action) */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <Link href="/projects/nexus" className="h-56 bg-cyan-50 dark:bg-cyan-900/10 relative overflow-hidden flex items-center justify-center block">
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                         <span className="text-cyan-600/40 dark:text-cyan-400/20 font-mono text-4xl font-bold">NXS</span>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/nexus">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Nexus Agency</h3>
                            </Link>
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                High-performance digital agency website featuring advanced Framer Motion animations and modular Next.js architecture.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Next.js</span>
                                <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Framer Motion</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                <Link href="/projects/nexus" className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://www.nexdevsoftware.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 6. ASIA TRADING EXPORT CARD (Dual Action) */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <Link href="/projects/asia-trading-export" className="h-56 bg-amber-50 dark:bg-amber-900/10 relative overflow-hidden flex items-center justify-center block">
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                         <span className="text-amber-600/40 dark:text-amber-400/20 font-mono text-4xl font-bold">ATE</span>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/asia-trading-export">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Asia Trading Export</h3>
                            </Link>
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                Premium B2B export platform featuring interactive D3.js globe visualizations for global trade routes.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Next.js</span>
                                <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">D3.js</span>
                            </div>
                             <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                <Link href="/projects/asia-trading-export" className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://www.asiatradingexport.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 7. HAMMOUDA CHARCOAL CARD (Dual Action) */}
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <Link href="/projects/hammouda-charcoal" className="h-56 bg-stone-100 dark:bg-stone-900/50 relative overflow-hidden flex items-center justify-center block">
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                         <span className="text-stone-600/40 dark:text-stone-400/20 font-mono text-4xl font-bold">HC</span>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/hammouda-charcoal">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">Hammouda Charcoal</h3>
                            </Link>
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                Corporate website for a charcoal manufacturing company featuring extensive product galleries and client mapping.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Next.js</span>
                                <span className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Gallery</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                <Link href="/projects/hammouda-charcoal" className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://www.hammoudacharcoal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
      <Footer />
    </main>
  );
}