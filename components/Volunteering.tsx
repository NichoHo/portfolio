"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function Volunteering() {
  return (
    <section id="volunteering" className="py-20 bg-slate-50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            Volunteering
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Giving back to the community and fostering social impact.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm"
        >
            <div className="grid md:grid-cols-2 gap-0">
                
                {/* CONTENT SIDE */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Teach For Indonesia</h3>
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400">
                                Educator
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> Oct 2023 - Dec 2023</span>
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> Jakarta, Indonesia</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Supported orphaned children by facilitating social activities and engaging the community. I focused on building trust and emotional connections through interactive play and educational sessions, specifically raising awareness about corruption risks. Additionally, I helped supply essential items including food and cooking necessities to help meet their fundamental needs.
                        </p>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative h-64 md:h-auto bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <img 
                      src="/portfolio/volunteering.jpg"
                      alt="Volunteering" 
                      className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}