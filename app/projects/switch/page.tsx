"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const SWITCH_IMAGES = [
  "/portfolio/switch.jpg",
  "/portfolio/switch-2.jpg",
  "/portfolio/switch-3.jpg",
  "/portfolio/switch-4.jpg",
  "/portfolio/switch-5.jpg",
];

export default function SwitchPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff3a]/30 dark:bg-[#d4ff3a]/10 text-[#5a6b00] dark:text-[#d4ff3a] text-xs font-medium">
                Payments & Risk Engineering
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Switch</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A card-payment switch, the piece of infrastructure that sits between a merchant and the banks behind a card network. It checks the card, screens the payment for fraud, decides which bank to route it to (with a backup if that bank is down), and keeps a ledger that always balances.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://switch-gateway.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#5a6b00] dark:text-[#d4ff3a] hover:text-[#b8e000] transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/switch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-[#b8e000] transition-colors"
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
            <ImageCarousel images={SWITCH_IMAGES} alt="Switch" accentClass="bg-[#d4ff3a]" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Switch recreates the routing core of a real payment platform, the part that decides what happens the instant a card is charged, rather than the checkout page itself. A payment request comes in, gets checked against a stored, encrypted card token, gets scored for fraud, gets sent to one of several banks with a backup if the first one fails, and gets logged in a ledger that always balances. Every stage a card payment can be in, like authorized, captured, refunded, or voided, is modeled as a strict state machine, so the system can never end up in a state that doesn&apos;t make sense. A server-rendered operator console sits on top, showing the payments, risk decisions, ledger, and settlement exceptions behind it, and a nightly job reconciles the bank&apos;s settlement file against Switch&apos;s own records.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I built the whole thing on my own, from start to finish. That includes the main gateway service (card vault, fraud checks, routing, ledger, settlement, and the operator console), a separate mock bank service that can simulate slow responses, errors, duplicate messages, and broken settlement files, the database schema and migrations, and the full automated test suite.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "A payment state machine covering 13 stages and 10 possible actions, tested against all 130 legal and illegal combinations so a broken transition fails a build instead of a real payment",
                            "If the same payment request is sent twice by accident, only one of them is ever processed, the rest get back the first one's result",
                            "Card numbers are tokenized and encrypted before they're stored, and never appear in plain text in a log file",
                            "Routes each payment to one of several simulated banks, automatically failing over to a backup if the first one is slow, down, or gives back an unclear response",
                            "A ledger that records both sides of every transaction; the database itself refuses to save an entry that doesn't balance",
                            "A fraud engine that scores every payment against ten weighted rules, with a shadow mode for trying out a new rule against live traffic before it's allowed to actually block a payment",
                            "A simulated bank-verification challenge step, including the outcome that decides who's liable if a payment is disputed",
                            "A nightly settlement job that compares the bank's settlement file against Switch's own records and automatically flags anything that doesn't match",
                            "A server-rendered operator console for browsing live payments, risk decisions, the ledger, and settlement exceptions, no separate frontend app needed",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-[#b8e000] shrink-0 mt-0.5" />
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
                        {["Java 21", "Spring Boot", "Thymeleaf", "Spring Data JPA", "PostgreSQL", "Flyway", "Resilience4j", "Bucket4j", "JUnit 5", "Testcontainers", "ArchUnit", "jqwik", "WireMock", "Docker", "Maven", "GitHub Actions"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The gateway is one service that owns the card vault, fraud checks, routing, ledger, payment state machine, and the operator console, backed by a single database with optimistic locking so two conflicting updates to the same payment can&apos;t both win. A separate service stands in for the banks; it can be told to time out, send back garbage, repeat itself, or hand back a broken settlement file, so the gateway&apos;s retry, failover, and reconciliation logic all get tested against a connection that actually misbehaves.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Proven Correct</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        An exhaustive test suite drives all 130 state-and-action combinations, plus thousands of randomly generated legal sequences, to prove balances never drift. Twenty requests racing to claim the same idempotency key still produce exactly one real claim and nineteen instant duplicates. Mutation testing checks how much of that suite actually catches a deliberately broken build rather than just passing, currently at 94%, and CI fails outright if it drops below 80%.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Good to Know</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        This models the design thinking behind card-payment infrastructure, it isn&apos;t a compliance claim. Only documented test card numbers are accepted (for example 411111); no real card data, real banks, or real money are ever involved. It&apos;s hosted on a free tier, so the first request after a while idle can take up to a minute to wake up.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
