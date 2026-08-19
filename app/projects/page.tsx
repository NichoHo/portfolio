"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans">
      <Navbar>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </Navbar>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-12">
        <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">All Projects</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
                A collection of my work in Fullstack Development, Data Visualization, and Artificial Intelligence.
            </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

            {/* VAULT CARD */}
            <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/vault" className="h-auto bg-blue-50 dark:bg-blue-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/Vault Thumbnail.png" alt="Vault" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/vault">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Vault</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                An online marketplace where people buy and sell to each other. It has its own secure sign-in, holds payments safely until an order arrives, and uses AI to help write listings.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Go</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">OAuth 2.0</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">PostgreSQL</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/vault" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://github.com/NichoHo/vault"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Source <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* TALLY CARD */}
            <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/tally" className="h-auto bg-teal-50 dark:bg-teal-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/Tally Thumbnail.png" alt="Tally" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/tally">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Tally</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                The engine that moves money between accounts inside a banking or e-wallet app. Built so money can never go missing and the same payment is never charged twice. It also flags suspicious transfers.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Go</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">gRPC</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Kafka</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">PostgreSQL</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/tally" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://tally-three-umber.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* LOCALIST CARD */}
            <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/localist" className="h-auto bg-fuchsia-50 dark:bg-fuchsia-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/Localist Thumbnail.png" alt="Localist" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/localist">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Localist</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                An online directory of local businesses with about 5,400 pages built to rank on Google. Owners can claim their page, edit it, and pay to move their listing higher up.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Laravel</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Livewire</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Stripe</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Cloudflare</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/localist" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://github.com/NichoHo/Localist"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Source <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 1. SIGNLINGO CARD (Standard) */}
            <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/signlingo" className="h-auto bg-emerald-50 dark:bg-emerald-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/Signlingo Thumbnail.png" alt="Signlingo" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/signlingo">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Signlingo</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                AI-powered sign language learning platform using TensorFlow and OpenCV for real-time feedback.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">TensorFlow</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">OpenCV</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">MediaPipe</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">GRU</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/signlingo" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://signlingo-django.onrender.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. FLUX CARD */}
            <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/flux" className="h-auto bg-indigo-50 dark:bg-indigo-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/Flux Thumbnail.png" alt="Flux" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/flux">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Flux Budget App</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                Comprehensive financial tracking system with automated recurring billing and multi-currency support.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Laravel</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">PHP</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">MySQL</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/flux" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://flux-budget-app.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

             {/* 3. FAQ ASSISTANT CARD (Dual Action) */}
             <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/faq-assistant" className="h-auto bg-violet-50 dark:bg-violet-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/FaQ Assistant Thumbnail.png" alt="FAQ Assistant" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/faq-assistant">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">FaQ Assistant</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                Intelligent RAG-based document assistant using LangChain and Gemini to chat with uploaded PDF documents.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">LangChain</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Gemini</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">ChromaDB</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/faq-assistant" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://faq-assistant.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 4. JET ENGINE HEALTH MONITOR CARD */}
            <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/jet-engine-monitor" className="h-auto bg-rose-50 dark:bg-rose-900/10 relative overflow-hidden flex items-center justify-center block">
                        <img src="/portfolio/Jet Engine Monitor Thumbnail.png" alt="Jet Engine Health Monitor" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/jet-engine-monitor">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Jet Engine Monitor</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                Predictive maintenance dashboard calculating Remaining Useful Life (RUL) of turbofan engines using NASA C-MAPSS data and Explainable AI.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Python</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">XGBoost</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">SHAP</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Streamlit</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/jet-engine-monitor" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://colab.research.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    Notebook <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 5. F1 UNDERCUT PREDICTOR CARD */}
             <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/f1-undercut-predictor" className="h-auto bg-red-50 dark:bg-red-900/10 relative overflow-hidden flex items-center justify-center block">
                         <img src="/portfolio/F1 Undercut Predictor Thumbnail.png" alt="F1 Undercut Predictor" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/f1-undercut-predictor">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">F1 Undercut Predictor</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                Machine learning model predicting race strategy success probabilities using historical telemetry data.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Scikit-Learn</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">FastF1</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Pandas</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/f1-undercut-predictor" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://f1-undercut-predictor.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

             {/* 6. NEXUS AGENCY CARD (Dual Action) */}
             <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/nexus" className="h-auto bg-cyan-50 dark:bg-cyan-900/10 relative overflow-hidden flex items-center justify-center block">
                         <img src="/portfolio/Nexus Development Thumbnail.png" alt="Nexus Agency" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/nexus">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Nexus Agency</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                High-performance digital agency website featuring advanced Framer Motion animations and modular Next.js architecture.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Framer Motion</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/nexus" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://www.nexdevsoftware.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 7. ASIA TRADING EXPORT CARD (Dual Action) */}
             <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/asia-trading-export" className="h-auto bg-amber-50 dark:bg-amber-900/10 relative overflow-hidden flex items-center justify-center block">
                         <img src="/portfolio/Asia Trading Export Thumbnail.png" alt="Asia Trading Export" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/asia-trading-export">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Asia Trading Export</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                Premium B2B export platform featuring interactive D3.js globe visualizations for global trade routes.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">D3.js</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Tailwind CSS</span>
                            </div>
                             <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/asia-trading-export" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://www.asiatradingexport.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 8. HAMMOUDA CHARCOAL CARD (Dual Action) */}
             <motion.div variants={fadeUp}>
                <div className="group h-full bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
                    <Link href="/projects/hammouda-charcoal" className="h-auto bg-stone-100 dark:bg-stone-900/50 relative overflow-hidden flex items-center justify-center block">
                         <img src="/portfolio/Coco Hamodah Thumbnail.png" alt="Hammouda Charcoal" className="object-cover"/>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4 flex-1">
                            <Link href="/projects/hammouda-charcoal">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">Hammouda Charcoal</h3>
                            </Link>
                            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                                Corporate website for a charcoal manufacturing company featuring extensive product galleries and client mapping.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md bg-[var(--border)] text-[var(--text-secondary)]">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                <Link href="/projects/hammouda-charcoal" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] hover:gap-2 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="https://www.hammoudacharcoal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                                    Live Site <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
