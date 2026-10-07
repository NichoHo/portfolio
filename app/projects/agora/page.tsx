"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const AGORA_IMAGES = [
  "/portfolio/agora.jpg",
  "/portfolio/agora-2.jpg",
  "/portfolio/agora-3.jpg",
  "/portfolio/agora-4.jpg",
  "/portfolio/agora-5.jpg",
  "/portfolio/agora-6.jpg",
];

export default function AgoraPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-medium">
                Marketplace, Payments & Scale
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Agora</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A marketplace platform that tackles three hard problems as separate services: secure sign-in, money that can never go missing, and selling limited stock when thousands of people click buy at the same moment. Every purchase is also checked for fraud.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://github.com/NichoHo/agora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-orange-500 transition-colors"
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
            <ImageCarousel images={AGORA_IMAGES} alt="Agora" accentClass="bg-orange-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Agora models the parts of a marketplace that are genuinely difficult to get right. The <strong>sign-in</strong> is its own secure login system, with two-step verification through a phone app and backup codes. The <strong>payments</strong> use escrow: a buyer&apos;s money is held safely in the middle and only released to the seller once the order is delivered, and the accounting guarantees money is never lost or counted twice. The <strong>limited-stock sales</strong> (&quot;drops&quot;) put buyers in a fair queue and hand out exactly as many items as exist, never one more, even under a rush of traffic. Card payments are passed to a separate payment switch written in Java. A <strong>fraud checker</strong> scores every important event, such as logins, reservations and payments, and shows suspicious ones on a review console. Every action and its record are saved together, so nothing gets out of sync even if part of the system restarts.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I built the whole thing on my own, from start to finish. That includes the sign-in system, the marketplace, the payment handling, the limited-stock sales service, the fraud checker and its review console, the website people see, the automated tests that prove it all works, and the setup to run it in the cloud. I also turned one reusable piece of it (the part that reliably passes messages between services) into its own open-source tool called <strong>outboxkit</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Its own secure sign-in system, built to the same standards used by large companies, with two-step verification and one-time backup codes",
                            "Escrow payments, where money is held safely and only released to the seller once the buyer confirms delivery, and the books always balance",
                            "Limited-stock sales with a fair waiting queue that sells exactly the number of items available, never more",
                            "Card payments handled by a separate payment switch, including the tricky case where the bank's answer gets lost on the way",
                            "A fraud checker that scores logins, reservations and payments and flags suspicious ones on a review console",
                            "Reliable behind-the-scenes messaging, so no action is ever lost or accidentally repeated",
                            "An AI assistant that turns a photo of an item into a ready-to-post listing with a suggested price",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
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
                        {["Go", "PostgreSQL 17", "Redis", "Python", "FastAPI", "scikit-learn", "Anthropic API", "Redpanda", "Java", "OpenTelemetry", "k6", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Terraform", "GitHub Actions", "Playwright"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The website talks to separate services for logging in, the marketplace and orders, limited-stock sales, and handling money. Each keeps its own records. Whenever something important happens, a message is sent reliably to the other parts that need to know, including a fraud checker that scores it. Card payments go out to a separate payment switch.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Good to Know</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        This is a simulation and a learning project. In the real world, companies should use trusted, ready-made login systems. Building one from scratch was the whole point here, to show how it works underneath. It uses pretend deliveries and made-up data, and no real money is involved.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
