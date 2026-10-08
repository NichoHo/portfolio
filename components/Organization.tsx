"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const events = [
  {
    role: "Staff, KIT Division",
    title: "HIMTI KIT & TECHNO 2024",
    description:
      "Collaborated on the development of the official TECHNO 2024 website and authored structured university material notes (HIMTI KIT) to support academic peer success.",
    repo: "https://github.com/NichoHo/Techno2024",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    role: "Web Development Division",
    title: "TECHFEST 2024",
    description:
      "Managed the official digital platform for TECHFEST 2024, focusing on ensuring reliable performance and accessibility for event participants.",
    repo: "https://github.com/NichoHo/techfest2024",
    skills: ["JavaScript", "Team Collaboration"],
  },
];

const chip = "px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]";

export default function Organization() {
  return (
    <section id="organization">
      <motion.div
        {...reveal}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Organizations</h2>

        <div className="space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border)] pb-5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">HIMTI Bina Nusantara</h3>
              <p className="mt-1 text-sm font-semibold text-emerald-500">Activist, Web Development Division</p>
            </div>
            <span className="text-sm text-[var(--text-tertiary)]">2023 - 2024</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {events.map((e) => (
              <div key={e.title} className="flex flex-col gap-4 rounded-2xl border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)] transition-colors duration-300 p-6">
                <p className="text-sm font-semibold text-emerald-500">{e.role}</p>
                <h4 className="text-2xl font-bold tracking-tight leading-tight text-[var(--text-primary)]">{e.title}</h4>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{e.description}</p>
                <a
                  href={e.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start text-sm font-semibold text-emerald-500 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
                >
                  View on GitHub &rarr;
                </a>
                <div className="mt-auto border-t border-[var(--border)] pt-4">
                  <p className="mb-2 text-xs font-bold text-[var(--text-primary)]">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {e.skills.map((t) => <span key={t} className={chip}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
