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
    "/portfolio/asia-trading-export.jpg",
    "/portfolio/asia-trading-export-2.jpg"
];

export default function AsiaTradingPage() {
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
                Corporate & Data Visualization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Asia Trading Export</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A premium B2B digital platform connecting Indonesian charcoal producers with global markets. Features interactive data visualizations using D3.js.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://www.asiatradingexport.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Visit Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/asia-trading-export"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-blue-500 transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO VISUAL (CAROUSEL) */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
            className="group relative w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-md"
        >
             {/* Sizer: invisible first image keeps container height stable */}
             <img src={PROJECT_IMAGES[0]} alt="" aria-hidden className="w-full h-auto object-contain block invisible" />
             {/* Stacked images crossfade */}
             {PROJECT_IMAGES.map((src, idx) => (
                 <img
                     key={src}
                     src={src}
                     alt={`Asia Trading Export Screenshot ${idx + 1}`}
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
                            ? "w-6 bg-blue-500"
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
                        Built to establish trust in the international market, this project focuses on high-performance B2B lead generation. It showcases product catalogs (Coconut Briquettes, Hardwood, Shisha) and logistics services with a premium, corporate aesthetic. The standout feature is an interactive globe visualization that highlights export routes and partner locations.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Serving as the <strong>Lead Developer</strong>, I drove the technical execution of this B2B platform from concept to launch. By personally authoring over 90% of the codebase, I ensured a cohesive, easily maintainable architecture. My focus was on delivering a robust digital storefront with optimized load times for international clients, ensuring seamless UI/UX workflows that actively drive business inquiries.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Interactive Globe Visualization (D3.js + TopoJSON)",
                            "Corporate Identity & Brand Storytelling",
                            "Product Catalog with Detailed Specs",
                            "Responsive & Accessible UI (Mobile First)",
                            "Performance Optimized (Next.js App Router)",
                            "Contact & Inquiry Lead Funnels"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
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
                        {["Next.js", "TypeScript", "D3.js", "TopoJSON", "Tailwind CSS", "Framer Motion", "React"].map(tech => (
                            <span key={tech} className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Data Viz</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        Leverages <strong>D3.js</strong> to render complex geographical data, visualizing trade routes and global reach in real-time on the client side.
                    </p>
                </Card>
            </div>
        </div>
      </div>
    </main>
  );
}
