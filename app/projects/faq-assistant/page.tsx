"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent)]/20">

      {/* NAVBAR */}
      <Navbar>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-medium">
                Generative AI & RAG
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">FaQ Assistant</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                An intelligent document analysis tool that uses Retrieval-Augmented Generation (RAG) concepts to let users search their PDF documents in real-time.
            </p>

            <div className="flex gap-6">
                <a
                    href="https://faq-assistant.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:text-rose-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/faq-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-rose-500 transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO VISUAL */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
            className="w-full h-auto md:bg-rose-50 dark:bg-[var(--surface)] rounded-2xl flex items-center justify-center border border-[var(--border)] overflow-hidden relative"
        >
             <img src="/portfolio/faq-assistant.jpg" alt="FaQ Assistant" className="object-cover"/>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        FaQ Assistant bridges the gap between static documents and dynamic information retrieval. By uploading a PDF, the system creates local semantic embeddings of the content, allowing users to ask natural language questions. The app retrieves the most relevant context and deterministically formats the exact source excerpts, ensuring 100% accurate, hallucination-free answers without relying on external cloud APIs.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        As the <strong>Technical Lead & Full Stack Developer</strong>, I drove the end-to-end delivery of the application. I spearheaded a team of 3 developers through Agile sprints while taking hands-on ownership of both the frontend and backend architectures. I designed and built the responsive, intuitive user interface, and engineered the core document-ingestion framework using LangChain alongside the local semantic search logic via FAISS vector databases for highly accurate, low-latency retrieval.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Technical Architecture</h2>
                    <ul className="space-y-3">
                        {[
                            "RAG Pipeline Implementation using LangChain",
                            "Local Vector Embeddings with HuggingFace (all-MiniLM-L6-v2)",
                            "FAISS for Efficient In-Memory Similarity Search",
                            "Recursive Character Text Splitting for Context Optimization",
                            "Flask Backend with Asynchronous Processing",
                            "Responsive Chat Interface with Real-time Updates"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK & ROLE */}
            <div className="space-y-8">

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Role</h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                        Technical Lead & Full Stack Developer
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Python", "Flask", "LangChain", "HuggingFace", "FAISS", "HTML5", "CSS3"].map(tech => (
                            <span key={tech} className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Key Logic</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The <code>rag_pipeline.py</code> handles the "Retrieval" by querying the local FAISS vector store and formats the retrieved chunks deterministically to present exact document excerpts to the user.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
