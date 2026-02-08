"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Users, Github } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            My academic background and organizational leadership journey.
          </p>
        </motion.div>

        <div className="space-y-8">
            {/* BINUS UNIVERSITY */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Binus University</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">Computer Science (Global Class)</p>
                    </div>
                    <div className="text-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                            <Calendar className="w-4 h-4" /> 2023 - Present
                        </div>
                        <p className="text-sm text-slate-500 mt-2 font-mono">GPA: 3.81</p>
                    </div>
                </div>

                {/* ACTIVITIES & SOCIETIES */}
                <div className="space-y-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                    
                    {/* Freshmen Leader */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-emerald-500" />
                            <h4 className="font-bold text-slate-900 dark:text-white">Freshmen Leader & Partner</h4>
                        </div>
                        <p className="text-xs text-slate-500 font-mono">Sep 2024 - Present · 1 yr 6 mos</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Guided freshmen through their first year, delivering presentations and providing ongoing mentorship to help them adapt to university life and academic expectations.
                        </p>
                    </div>

                    {/* HIMTI TECHNO */}
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-indigo-500" />
                                <h4 className="font-bold text-slate-900 dark:text-white">Staff of HIMTI KIT Division (TECHNO 2024)</h4>
                            </div>
                            <p className="text-xs text-slate-500 font-mono">Jul 2024 - Sep 2024 · 3 mos</p>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Created the HIMTI KIT (university material notes) and developed the official TECHNO 2024 website, ensuring intuitive navigation and reliable performance.
                        </p>
                        <a 
                            href="https://github.com/NichoHo/Techno2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                            View Source
                        </a>
                    </div>

                    {/* HIMTI TECHFEST */}
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-indigo-500" />
                                <h4 className="font-bold text-slate-900 dark:text-white">Web Development Division (TECHFEST 2024)</h4>
                            </div>
                            <p className="text-xs text-slate-500 font-mono">Apr 2024 - Jul 2024 · 4 mos</p>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Developed and managed the official TECHFEST 2024 website, playing a key role in delivering a reliable digital platform for participant engagement.
                        </p>
                        <a 
                            href="https://github.com/NichoHo/techfest2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                            View Source
                        </a>
                    </div>

                </div>
            </motion.div>

            {/* SANTA URSULA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Santa Ursula BSD Highschool</h3>
                        <p className="text-slate-600 dark:text-slate-400">High School Diploma</p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                        <Calendar className="w-4 h-4" /> 2021 - 2023
                    </div>
                </div>
                
                <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Student Council (2022-2023)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Managed the Student Council's social media accounts, creating content to increase engagement and inform the student body of upcoming events.
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}