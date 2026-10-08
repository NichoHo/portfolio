"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const schools = [
  {
    year: "2026",
    school: "Sejong University",
    degree: "Computer Science, exchange program",
    place: "Seoul, South Korea",
    dates: "Feb 2026 to Jun 2026",
    gpa: "GPA 4.40 / 4.50",
    note: "98th percentile",
    blurb: "Exchange semester in a new academic system, studying Computer Science alongside local students.",
    current: false,
  },
  {
    year: "2023",
    school: "Binus University",
    degree: "Computer Science, Global Class",
    place: "Alam Sutera, Indonesia",
    dates: "2023 to Present",
    gpa: "GPA 3.83 / 4.00",
    note: "",
    blurb: "Freshmen Leader & Partner (Sep 2024 to Jun 2025). Mentored first-year students and presented their orientation sessions.",
    current: true,
  },
  {
    year: "2021",
    school: "Santa Ursula BSD",
    degree: "High School Diploma",
    place: "BSD, Indonesia",
    dates: "2021 to 2023",
    gpa: "",
    note: "",
    blurb: "Student Council (2022 to 2023). Ran the council's social media and kept students updated on events.",
    current: false,
  },
];

export function Education() {
  return (
    <section id="education">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Education</h2>

        <div className="divide-y divide-[var(--border)]">
          {schools.map((s) => (
            <motion.div
              key={s.school}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="grid gap-3 md:grid-cols-[9rem_1fr_14rem] md:gap-10 py-8 md:py-10 items-start"
            >
              {/* only the current school is green, so the eye lands on "now" */}
              <p className={`text-4xl md:text-5xl font-bold tracking-tighter ${s.current ? "text-emerald-500" : "text-[var(--text-tertiary)]"}`}>
                {s.year}
              </p>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">{s.school}</h3>
                <p className="font-medium text-emerald-600 dark:text-emerald-400">{s.degree}</p>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-[56ch] pt-1">{s.blurb}</p>
              </div>

              <div className="space-y-1 text-sm text-[var(--text-tertiary)] md:text-right">
                <p>{s.place}</p>
                <p>{s.dates}</p>
                {s.gpa && <p className="font-bold text-[var(--text-primary)]">{s.gpa}</p>}
                {s.note && <p>{s.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
