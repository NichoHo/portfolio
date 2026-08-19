"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function Organization() {
  return (
    <section id="organization" className="py-20 bg-[var(--surface)]/50 border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            Organizations
            </h2>
            <p className="text-[var(--text-secondary)] mt-2">
            Active involvement in campus technology and community initiatives.
            </p>
        </div>

        <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="bg-[var(--surface)] rounded-2xl p-6 md:p-8 border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300"
        >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                HIMTI Bina Nusantara
                </h3>
                <p className="text-md text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                Activist / Web Development Division
                </p>
            </div>
            {/* DATE BADGE */}
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] text-sm font-medium rounded-md shrink-0 mt-2 md:mt-0">
                <Calendar className="w-4 h-4" />
                2023 - Present
            </span>
            </div>

            <div className="space-y-6 mb-8">
            <div className="relative pl-4 border-l-2 border-[var(--border)]">
                <h4 className="text-md font-bold text-[var(--text-primary)]">
                HIMTI KIT & TECHNO 2024
                </h4>
                <p className="text-sm text-[var(--text-tertiary)] mb-2 italic">
                Staff of KIT Division
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Collaborated on the development of the official TECHNO 2024 website and authored structured university material notes (HIMTI KIT) to support academic peer success.
                </p>
            </div>

            <div className="relative pl-4 border-l-2 border-[var(--border)]">
                <h4 className="text-md font-bold text-[var(--text-primary)]">
                TECHFEST 2024
                </h4>
                <p className="text-sm text-[var(--text-tertiary)] mb-2 italic">
                Web Development Division
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Managed the official digital platform for TECHFEST 2024, focusing on ensuring reliable performance and accessibility for event participants.
                </p>
            </div>
            </div>

            {/* TECH STACK CARDS */}
            <div className="flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript", "Team Collaboration"].map((tag) => (
                <span
                key={tag}
                className="px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] text-xs font-medium rounded-md"
                >
                {tag}
                </span>
            ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}