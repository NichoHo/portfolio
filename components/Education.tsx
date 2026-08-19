"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export function Education() {
  return (
    <section id="education">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] flex items-center gap-3">
            Education
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl">
            My academic background and organizational leadership journey.
          </p>
        </motion.div>

        <div className="space-y-8">
            {/* SEJONG UNIVERSITY */}
            <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">Sejong University</h3>
                        <p className="text-[var(--accent)] font-medium">Computer Science (Student Exchange Program)</p>
                        <p className="text-sm text-[var(--text-tertiary)] mt-1 font-mono">Seoul, South Korea</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 mt-2 md:mt-0">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] text-sm font-medium rounded-md">
                            <Calendar className="w-4 h-4" /> Feb 2026 - June 2026
                        </span>
                        <span className="text-sm font-bold text-[var(--text-tertiary)] px-1">
                            GPA: 4.40/4.50 (98th percentile)
                        </span>
                    </div>
                </div>

                <div className="space-y-8 border-t border-[var(--border)] pt-6">
                    <div className="space-y-2">
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            Currently participating in a student exchange program, expanding global perspectives and adapting to an international academic environment.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* BINUS UNIVERSITY */}
            <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                className="bg-[var(--surface)] rounded-2xl p-6 md:p-8 border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300 mb-8"
            >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">Binus University</h3>
                        <p className="text-md text-[var(--accent)] font-medium mt-1">
                            Computer Science (Global Class)
                        </p>
                    </div>

                    {/* DATE & GPA ALIGNMENT */}
                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 mt-2 md:mt-0">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] text-sm font-medium rounded-md">
                            <Calendar className="w-4 h-4" />
                            2023 - Present
                        </span>
                        <span className="text-sm font-bold text-[var(--text-tertiary)] px-1">
                            GPA: 3.83/4.00
                        </span>
                    </div>
                </div>

                <div className="border-t border-[var(--border)] pt-6">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-md font-bold text-[var(--text-primary)]">Freshmen Leader & Partner</h4>
                    </div>
                    <p className="text-xs text-[var(--text-tertiary)] mb-3 font-mono">Sep 2024 - June 2025 • 10 mos</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        Guided freshmen through their first year, delivering presentations and providing ongoing mentorship to help them adapt to university life and academic expectations.
                    </p>
                </div>
            </motion.div>

            {/* SANTA URSULA */}
            <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">Santa Ursula BSD Highschool</h3>
                        <p className="text-[var(--accent)] font-medium">High School Diploma</p>
                    </div>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--border)] text-[var(--text-secondary)] text-sm font-medium rounded-md">
                            <Calendar className="w-4 h-4" /> 2021 - 2023
                    </span>
                </div>

                <div className="border-t border-[var(--border)] pt-6">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-md font-bold text-[var(--text-primary)]">Student Council</h4>
                    </div>
                    <p className="text-xs text-[var(--text-tertiary)] mb-3 font-mono">2022 - 2023 • 4 mos</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        Managed the Student Council's social media accounts, creating content to increase engagement and inform the student body of upcoming events.
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}