"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Users, Github, Users } from "lucide-react";

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
                            <Calendar className="w-4 h-4" /> Feb 2026 - Aug 2026
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
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden mb-8"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Binus University</h3>
                        <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
                            Computer Science (Global Class)
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                            2023 - Present
                        </p>
                    </div>
                    
                    {/* GPA BLOCK */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 text-center shadow-sm shrink-0">
                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-1">Cumulative GPA</p>
                        <p className="text-5xl md:text-6xl font-black text-slate-800 dark:text-slate-100 tracking-tighter">
                            3.83<span className="text-2xl md:text-3xl text-slate-400 dark:text-slate-500 font-bold">/4.00</span>
                        </p>
                    </div>
                </div>

                {/* FRESHMEN LEADER & PARTNER */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Freshmen Leader & Partner</h4>
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