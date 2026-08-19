"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const TALLY_IMAGES = [
  "/portfolio/tally.jpg",
  "/portfolio/tally-2.jpg",
  "/portfolio/tally-3.jpg",
  "/portfolio/tally-4.jpg",
];

export default function TallyPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-medium">
                Payments & Money Systems
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Tally</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                The engine that moves money between accounts inside a banking or e-wallet app. I built it to get the money math exactly right, so funds can never go missing and the same payment is never charged twice. It also includes a tool that flags suspicious transfers and a simple dashboard to see everything.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://tally-three-umber.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/tally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-teal-500 transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO CAROUSEL */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
        >
            <ImageCarousel images={TALLY_IMAGES} alt="Tally" accentClass="bg-teal-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Tally recreates the core of a real payments system. It moves money between accounts, keeps perfect records so nothing is ever lost, makes sure a payment sent twice by accident only goes through once, and automatically flags transfers that look suspicious. There is also a dashboard for viewing accounts and transfers. The goal was to show the fundamentals that banks and money apps rely on, done correctly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I built the whole thing on my own, from start to finish. That includes the part that moves the money and keeps the records, the connection layer that other apps use to talk to it, the tool that flags suspicious transfers, the dashboard, and the setup to run it all.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Every transfer is recorded on both sides (money out of one account, money into another), so the books always balance",
                            "Money is stored as whole cents, never as decimals, so amounts stay exact",
                            "If a payment is accidentally sent twice, it still only moves money once",
                            "Handles many transfers happening at the same moment without ever getting a balance wrong",
                            "Automatically checks each transfer for signs of fraud",
                            "Marks every transfer as allow, review, or block, using a mix of AI and clear rules",
                            "A dashboard showing account balances, recent transfers, and a chart of the last 7 days",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
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
                        Full Stack Developer (Built Alone)
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Go", "gRPC", "Protocol Buffers", "chi", "pgx", "PostgreSQL", "Redpanda", "Python", "scikit-learn", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        A person uses the dashboard, which sends requests to the payment engine, which safely records everything in the database. Whenever a transfer finishes, the system passes it to a separate fraud-checking service. Nothing is announced to the rest of the system until the money has actually been saved, so the records and reality always match.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Proven Correct</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        A set of automated tests proves the important promises hold. All the money in the system always adds up (nothing appears or disappears), stored balances match a fresh recount, a payment sent twice only moves money once, and 50 transfers happening at the exact same time never lose track of a single one.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
