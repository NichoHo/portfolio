"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const PROJECT_IMAGES = [
  "/portfolio/hammouda-charcoal-2.jpg",
  "/portfolio/hammouda-charcoal.jpg",
  "/portfolio/hammouda-charcoal-3.jpg"
];

export default function HammoudaPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length);
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent)]/20">

      {/* NAVBAR */}
      <Navbar>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </Navbar>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">

        {/* HEADER */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5b8def]/15 dark:bg-[#5b8def]/10 text-[#2f5fc4] dark:text-[#8fb0f5] text-xs font-medium">
                Manufacturing & Export
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Hammouda Charcoal</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A robust digital presence for a charcoal manufacturing and export company. Features an extensive product gallery, global client mapping, and a dedicated corporate identity system.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://www.hammoudacharcoal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2f5fc4] dark:text-[#8fb0f5] hover:text-[#5b8def] transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Visit Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/coco-hamooda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-[#5b8def] transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO VISUAL (CAROUSEL) */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
            className="group relative w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-md"
        >
             {/* Sizer: invisible first image keeps container height stable */}
             <img src={PROJECT_IMAGES[0]} alt="" aria-hidden className="w-full h-auto object-contain block invisible" />
             {/* Stacked images crossfade */}
             {PROJECT_IMAGES.map((src, idx) => (
                 <img
                     key={src}
                     src={src}
                     alt={`Hammouda Charcoal Screenshot ${idx + 1}`}
                     className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                         idx === currentImageIndex ? "opacity-100" : "opacity-0"
                     }`}
                 />
             ))}

             {/* Carousel Controls */}
             <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={prevImage}
                    className="pointer-events-auto p-2 rounded-full bg-white/90 dark:bg-black/60 text-[var(--text-primary)] hover:scale-110 transition-transform backdrop-blur-sm shadow-lg border border-[var(--border)]"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextImage}
                    className="pointer-events-auto p-2 rounded-full bg-white/90 dark:bg-black/60 text-[var(--text-primary)] hover:scale-110 transition-transform backdrop-blur-sm shadow-lg border border-[var(--border)]"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
             </div>

             {/* Dots Indicator */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {PROJECT_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm border border-black/10 ${
                            idx === currentImageIndex
                            ? "w-6 bg-[#5b8def]"
                            : "w-2 bg-white/70 hover:bg-white"
                        }`}
                    />
                ))}
             </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        This project serves as the primary digital touchpoint for Hammouda Charcoal, facilitating B2B connections between Indonesian manufacturers and Middle Eastern/Global markets. It moves beyond a simple landing page, offering a multi-page structure that details the company's manufacturing process, client portfolio, and extensive product specifications.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        As the <strong>Lead Developer</strong>, I spearheaded the technical strategy and execution, writing most of the application's code. I engineered a responsive, high-conversion corporate site tailored for global audiences. My work ensured strict adherence to modern web standards and accessibility, resulting in a fast, highly reliable lead-generation tool that aligns directly with the client's business objectives.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Dynamic Image Gallery Grid",
                            "Multi-page Routing (About, Clients, Contact)",
                            "Client Location Visualization",
                            "Responsive 'Masonry' Layouts",
                            "SEO-Optimized Content Structure",
                            "Direct WhatsApp/Inquiry Integration"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-[#5b8def] shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK */}
            <div className="space-y-8">
                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Role</h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                        Lead Developer
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "PostCSS"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Visual Design</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        Uses a rugged, industrial aesthetic with earth tones (Stone/Zinc) to reflect the natural product (Charcoal) while maintaining a premium corporate feel.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
