"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Organization() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Organizations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
            Active involvement in campus technology and community initiatives.
            </p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
        >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                HIMTI Bina Nusantara
                </h3>
                <p className="text-md text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                Activist / Web Development Division
                </p>
            </div>
            {/* DATE BADGE */}
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-md shrink-0 mt-2 md:mt-0">
                <Calendar className="w-4 h-4" />
                2023 - Present
            </span>
            </div>

            <div className="space-y-6 mb-8">
            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                <h4 className="text-md font-bold text-slate-800 dark:text-slate-200">
                HIMTI KIT & TECHNO 2024
                </h4>
                <p className="text-sm text-slate-500 mb-2 italic">
                Staff of KIT Division
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Collaborated on the development of the official TECHNO 2024 website and authored structured university material notes (HIMTI KIT) to support academic peer success.
                </p>
            </div>

            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                <h4 className="text-md font-bold text-slate-800 dark:text-slate-200">
                TECHFEST 2024
                </h4>
                <p className="text-sm text-slate-500 mb-2 italic">
                Web Development Division
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Managed the official digital platform for TECHFEST 2024, focusing on ensuring reliable performance and accessibility for event participants.
                </p>
            </div>
            </div>

            {/* TECH STACK CARDS */}
            <div className="flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript", "Team Collaboration"].map((tag) => (
                <span
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md"
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