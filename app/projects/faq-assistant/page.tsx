"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function FaqPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-medium">
                Generative AI & RAG
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">FaQ Assistant</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                An intelligent document analysis tool that uses Retrieval-Augmented Generation (RAG) to let users converse with their PDF documents in real-time.
            </p>

            <div className="flex gap-4">
                <a 
                    href="https://github.com/NichoHo/faq-assistant" 
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
            className="w-full h-64 md:h-96 bg-violet-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative"
        >
             {/* Abstract UI representation */}
             <div className="absolute inset-x-20 top-16 bottom-0 bg-white dark:bg-slate-950 rounded-t-xl shadow-2xl border-x border-t border-slate-200 dark:border-slate-800 opacity-90 flex flex-col p-6 gap-4">
                <div className="w-full h-8 bg-slate-100 dark:bg-slate-900 rounded-lg animate-pulse" />
                <div className="w-3/4 h-8 bg-violet-100 dark:bg-violet-900/20 rounded-lg self-end" />
                <div className="w-5/6 h-8 bg-slate-100 dark:bg-slate-900 rounded-lg" />
             </div>
             <div className="relative z-10 text-slate-400 font-mono text-sm">[RAG Chat Interface]</div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
            
            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        FaQ Assistant bridges the gap between static documents and dynamic information retrieval. By uploading a PDF, the system creates semantic embeddings of the content, allowing users to ask natural language questions. The app retrieves the most relevant context and uses a Large Language Model (Gemini 1.5 Flash) to generate accurate, context-aware answers.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technical Architecture</h2>
                    <ul className="space-y-3">
                        {[
                            "RAG Pipeline Implementation using LangChain",
                            "Vector Embeddings with Google Generative AI",
                            "ChromaDB for Efficient Similarity Search",
                            "Recursive Character Text Splitting for Context Optimization",
                            "Flask Backend with Asynchronous Processing",
                            "Responsive Chat Interface with Real-time Updates"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
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
                        {["Python", "Flask", "LangChain", "Gemini 1.5 Flash", "ChromaDB", "HTML5", "CSS3"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Key Logic</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        The <code>rag_pipeline.py</code> handles the "Retrieval" by querying the vector store and the "Generation" by prompting the LLM with retrieved chunks.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}