"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const MARAVELLANTE_IMAGES = [
  "/portfolio/maravellante.jpg",
  "/portfolio/maravellante-2.jpg",
  "/portfolio/maravellante-3.jpg",
  "/portfolio/maravellante-4.jpg",
  "/portfolio/maravellante-5.jpg",
  "/portfolio/maravellante-6.jpg",
];

export default function MaravellantePage() {
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
                Frontend Architecture & Design Systems
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Mara Vellante</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                An editorial, zero-dependency portfolio and artwork catalogue for a contemporary painter based in Marseille. Engineered with bespoke design tokens, fluid catalogue filtering and view-switching, mouse-gated tactile physics, and first-class light/dark theming.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://maravellante.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/maravellante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-blue-500 transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO CAROUSEL */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
        >
            <ImageCarousel images={MARAVELLANTE_IMAGES} alt="Mara Vellante" accentClass="bg-blue-600" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Mara Vellante is a high-craft static web showcase created without framework dependencies or build pipelines. Inspired by editorial monographs and physical art catalogues, the platform presents ten original canvases across three series (Tide Register, Salt Index, and Quarry Light). Visitors can seamlessly browse and filter works by series, switch between a responsive card grid and an expansive typography-driven list view with pointer-following live artwork previews (&ldquo;peek&rdquo;), read museum-grade wall labels and studio notes on dedicated artwork pages (`?id=`), and submit commission enquiries through an accessible, validated form.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I designed and developed the entire website independently from concept to deployment. I formulated the tokenized design system directly in CSS custom properties, authored the interactive catalogue logic in vanilla JavaScript, built bespoke micro-interactions (mouse-bound magnetic button pulls, 3D perspective card tilt, and floating header sentinel observers), curated the editorial typography (Archivo and JetBrains Mono), and guaranteed complete offline performance and accessibility compliance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Zero build step, zero runtime dependencies: pure standards-compliant HTML5, modern CSS, and vanilla JavaScript running directly on disk or CDN",
                            "Dynamic catalogue with real-time series filtering, fluid view toggle between card grid and structured list, and pointer-following artwork preview popups",
                            "URL parameter-driven detail view (work.html?id=...) providing wall labels, studio technical notes, and bidirectional series pagination",
                            "Rigorous tokenized design system using a single unified radius scale, intentional typography hierarchies, and flat ultramarine blue (#1b2fd8) pigment accents",
                            "Hardware-accelerated micro-interactions including mouse-only magnetic button pull (translate3d) and 3D card tilt (perspective rotateX/rotateY)",
                            "High-performance floating navigation bar with 1px IntersectionObserver sentinel detection and directional velocity scroll-hiding",
                            "First-class dual theme support (light and dark) with flash-of-unstyled-theme prevention and OS preference synchronization",
                            "Strict motion accessibility: full graceful degradation under prefers-reduced-motion: reduce without losing visual coherence",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK & ROLE */}
            <div className="space-y-8">

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Role</h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                        Frontend Architect & Designer (Built Alone)
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["HTML5", "CSS3 / Custom Properties", "JavaScript (ES6+)", "IntersectionObserver", "Phosphor Icons", "Vercel"].map(tech => (
                            <span key={tech} className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The codebase is organized into a clean tokenized stylesheet, a central artwork data store, and a modular vanilla controller script where every functional block no-ops if its markup is absent. State transitions mutate DOM attributes directly, enabling CSS transitions to render fluid 60fps animations without virtual DOM overhead.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Design Philosophy</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Restraint is the core design principle: one accent color reflecting the ultramarine pigment in the paintings, two deliberate typefaces, and mouse-gated event listeners ensuring that touchscreen users retain smooth native gestures while desktop users enjoy tactile interactivity.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
