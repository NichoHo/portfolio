"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Linkedin, Github, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "nikko150905@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      
      {/* 1. REQUESTED BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_80%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
          
          {/* LEFT SIDE: HEADLINE & TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                Let's work <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                  together.
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                Currently open to new opportunities. Let's build polished UIs and robust backends for your next ambitious project.
              </p>
            </div>

            {/* Status Indicators */}
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for work
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-3.5 h-3.5" />
                    Tangerang, Indonesia
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <Clock className="w-3.5 h-3.5" />
                    GMT+7
                </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: ACTIONS & SOCIALS */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-6 md:items-end"
          >
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Get in touch
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                
                <button
                  onClick={handleCopy}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
                >
                  {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                  {copied ? "Copied!" : "Copy Email"}
                </button>
            </div>

            {/* Social Pills */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto mt-4">
                <a 
                    href="https://www.linkedin.com/in/nichoho/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white transition-colors duration-300 group"
                >
                    <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-white transition-colors" />
                    <span className="font-medium text-sm">LinkedIn</span>
                </a>
                
                <a 
                    href="https://github.com/NichoHo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors duration-300 group"
                >
                    <Github className="w-5 h-5 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900 transition-colors" />
                    <span className="font-medium text-sm">GitHub</span>
                </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}