"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export function Volunteering() {
  return (
    <section id="volunteering">
      <div className="space-y-12">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] flex items-center gap-3">
            Volunteering
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl">
            Giving back to the community and fostering social impact.
          </p>
        </motion.div>

        <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300"
        >
            <div className="grid md:grid-cols-2 gap-0">

                {/* CONTENT SIDE */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">Teach For Indonesia</h3>
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400">
                                Educator
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-tertiary)] mb-6">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> Oct 2023 - Dec 2023</span>
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> Jakarta, Indonesia</span>
                        </div>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Supported orphaned children by facilitating social activities and engaging the community. I focused on building trust and emotional connections through interactive play and educational sessions, specifically raising awareness about corruption risks. Additionally, I helped supply essential items including food and cooking necessities to help meet their fundamental needs.
                        </p>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative h-64 md:h-auto bg-[var(--border)] flex items-center justify-center">
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