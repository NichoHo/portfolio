"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const highlights = [
  {
    title: "Social activities",
    body: "Facilitated interactive play and educational sessions with orphaned children, building trust and emotional connection.",
  },
  {
    title: "Awareness",
    body: "Raised awareness about corruption risks and engaged the wider community.",
  },
  {
    title: "Essential supplies",
    body: "Helped supply food and cooking necessities to meet their fundamental needs.",
  },
];

export function Volunteering() {
  return (
    <section id="volunteering">
      <motion.div {...reveal} className="space-y-10">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Volunteering</h2>

        <div className="overflow-hidden rounded-2xl border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)] transition-colors duration-300">
          <img
            src="/portfolio/volunteering.jpg"
            alt="Teach For Indonesia volunteering"
            className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          />
          <div className="p-6 md:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border)] pb-5">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">Teach For Indonesia</h3>
                <p className="mt-1 text-sm font-semibold text-emerald-500">Educator</p>
              </div>
              <span className="text-sm text-[var(--text-tertiary)]">Oct 2023 - Dec 2023 · Jakarta, Indonesia</span>
            </div>

            <div className="mt-6 grid gap-7 md:grid-cols-3">
              {highlights.map((h, i) => (
                <div key={h.title}>
                  <p className="mb-2 text-xs font-bold tabular-nums text-emerald-500">{String(i + 1).padStart(2, "0")}</p>
                  <h4 className="mb-1.5 text-[15px] font-bold text-[var(--text-primary)]">{h.title}</h4>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
