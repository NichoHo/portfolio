"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";

const EMAIL = "nikko150905@gmail.com";

const rowClass =
  "group grid grid-cols-[1fr_auto] sm:grid-cols-[7rem_1fr_auto] items-center gap-x-4 gap-y-1 py-5 md:py-6 transition-[padding] hover:pl-2";
const labelClass =
  "col-span-2 sm:col-span-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-tertiary)]";
const valueClass =
  "text-lg md:text-xl font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors break-all";
const iconClass =
  "w-5 h-5 text-[var(--text-tertiary)] group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all";

const links = [
  { label: "LinkedIn", value: "in/nichoho", href: "https://www.linkedin.com/in/nichoho/", Icon: ArrowUpRight },
  { label: "GitHub", value: "NichoHo", href: "https://github.com/NichoHo", Icon: ArrowUpRight },
  { label: "Resume", value: "Download CV", href: "/portfolio/CV.pdf", Icon: Download },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-[var(--border)]">
      <motion.div {...reveal} className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)] leading-[1.05]">
            Have a <span className="text-emerald-500">role or project</span>
            <br />
            in mind?
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] max-w-[52ch] leading-relaxed">
            Open to full-time roles and freelance work. Email is the fastest way to reach me.
          </p>
        </div>

        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)] border-b">
          <div className={`${rowClass} relative`}>
            <span className={labelClass}>Email</span>
            <a href={`mailto:${EMAIL}`} className={`${valueClass} after:absolute after:inset-0`}>
              {EMAIL}
            </a>
            <button
              onClick={handleCopy}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="relative z-10 p-1 text-[var(--text-tertiary)] hover:text-emerald-500 transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          {links.map(({ label, value, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <span className={labelClass}>{label}</span>
              <span className={valueClass}>{value}</span>
              <Icon className={iconClass} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
