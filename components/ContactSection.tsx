"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin } from "lucide-react";

const EMAIL = "nikko150905@gmail.com";

const linkClass =
  "inline-flex items-center gap-2 font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-[var(--border)]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)] leading-[1.05] max-w-[18ch]">
          Have a role or project in mind?
        </h2>
        <p className="mt-4 text-base text-[var(--text-secondary)] max-w-[52ch] leading-relaxed">
          Open to full-time roles and freelance work. Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="group mt-10 flex items-center justify-between gap-6 border-b border-[var(--border-hover)] pb-5 hover:border-[var(--accent)] transition-colors"
        >
          <span className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors break-all">
            {EMAIL}
          </span>
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </a>

        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
          <button onClick={handleCopy} className={linkClass}>
            {copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy address"}
          </button>
          <a href="https://www.linkedin.com/in/nichoho/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://github.com/NichoHo" target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="/portfolio/CV.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Download className="w-4 h-4" /> CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
