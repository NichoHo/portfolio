"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Github } from "lucide-react";

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
            {/* SEJONG UNIVERSITY */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Sejong University</h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">Computer Science (Student Exchange Program)</p>
                        <p className="text-sm text-slate-500 mt-1 font-mono">Seoul, South Korea</p>
                    </div>
                    <div className="text-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                            <Calendar className="w-4 h-4" /> Feb 2026 - June 2026
                        </div>
                    </div>
                </div>

                <div className="space-y-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                    <div className="space-y-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Currently participating in a student exchange program, expanding global perspectives and adapting to an international academic environment.
                        </p>
                    </div>
                </div>
            </motion.div>
            
            {/* BINUS UNIVERSITY */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-8"
            >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Binus University</h3>
                        <p className="text-md text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                            Computer Science (Global Class)
                        </p>
                    </div>
                    
                    {/* DATE & GPA ALIGNMENT */}
                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 mt-2 md:mt-0">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-md">
                            <Calendar className="w-4 h-4" />
                            2023 - Present
                        </span>
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 px-1">
                            GPA: 3.83
                        </span>
                    </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-md font-bold text-slate-900 dark:text-white">Freshmen Leader & Partner</h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">Sep 2024 - Present • 1 yr 6 mos</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        Guided freshmen through their first year, delivering presentations and providing ongoing mentorship to help them adapt to university life and academic expectations.
                    </p>
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