"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, BookOpen, Download } from "lucide-react";
import { Card } from "@/components/Card";

export function Research() {
  return (
    <section id="research" className="py-20 bg-slate-50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Research & Publications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Academic contributions to the field of Artificial Intelligence and Healthcare.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Card className="group overflow-hidden border-l-4 border-l-indigo-600 dark:border-l-indigo-500 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3 gap-0">
                    
                    {/* VISUAL SIDE (Image of Paper) */}
                    <div className="relative h-64 md:h-auto bg-slate-200 dark:bg-slate-800 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 overflow-hidden group-hover:opacity-90 transition-opacity">
                        <img 
                            src="/research.jpg" 
                            alt="Research Paper Preview" 
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        
                        {/* Overlay Gradient for readability if image fails or for style */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                            <span className="text-white font-medium text-sm flex items-center gap-2">
                                <FileText className="w-4 h-4" /> View Paper
                            </span>
                        </div>
                    </div>

                    {/* CONTENT SIDE */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-center space-y-6">
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span className="px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium">
                                    Published Paper
                                </span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                                    ICORIS 2024
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                Machine Learning Algorithms for HIV/AIDS Prediction using Explainable AI
                            </h3>
                            
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                Conducted in-depth research on applying Explainable Artificial Intelligence (XAI) to medical diagnostics. 
                                The study evaluates various ML models to predict HIV/AIDS susceptibility based on socio-behavioral data, using <strong>SHAP (SHapley Additive exPlanations)</strong> to provide transparent, interpretable reasoning for model decisions. 
                                This work aims to bridge the trust gap between AI systems and medical practitioners.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["Explainable AI (XAI)", "Healthcare Informatics", "SHAP Analysis", "Python", "Machine Learning"].map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a 
                                href="/research.pdf" 
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                <BookOpen className="w-4 h-4" />
                                Read Full Paper
                            </a>
                            <a 
                                href="/research.pdf" 
                                download="Machine Learning Algorithms for HIV/AIDS.pdf"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
      </div>
    </section>
  );
}