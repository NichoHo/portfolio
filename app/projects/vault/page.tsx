"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";

const VAULT_IMAGES = [
  "/portfolio/vault.jpg",
  "/portfolio/vault-2.jpg",
  "/portfolio/vault-3.jpg",
  "/portfolio/vault-4.jpg",
];

export default function VaultPage() {
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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
                Login, Payments & Marketplace
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Vault</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A small online marketplace where people buy and sell to each other. I built the three hardest parts from scratch: a secure sign-in system, a payment system that holds money safely until an order is delivered, and an AI helper that writes item listings.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://github.com/NichoHo/vault"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <ImageCarousel images={VAULT_IMAGES} alt="Vault" accentClass="bg-blue-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Vault recreates the three parts of a real online marketplace that are the hardest to get right. The <strong>sign-in</strong> is its own secure login system. People log in safely, can switch on two-step verification using a phone app for extra protection, and get backup codes in case they lose their phone. The <strong>payments</strong> use escrow, which means a buyer&apos;s money is held safely in the middle and only released to the seller once the order is delivered. The accounting is done so carefully that money can never quietly go missing or be counted twice. The <strong>AI helper</strong> lets a seller take a photo of an item and instantly get a suggested title, description, category, and fair price range. Behind the scenes, every action and the record of it are saved together, so nothing can ever get out of sync even if part of the system restarts.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I built the whole thing on my own, from start to finish. That includes the sign-in system, the marketplace, the payment handling, the AI helper, the website people see, the automated tests that prove it all works, and the setup to run it in the cloud. I also turned one reusable piece of it (the part that reliably passes messages between the different services) into its own open-source tool called <strong>outboxkit</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Its own secure sign-in system, built to the same standards used by large companies",
                            "Two-step verification with a phone authenticator app, plus one-time backup codes",
                            "Automatically detects and shuts down stolen login sessions",
                            "Escrow payments, where money is held safely and only released to the seller once the buyer confirms delivery, and the books always balance",
                            "Orders move through clear stages (waiting for payment, paid, shipped, delivered), and unpaid orders are released automatically after 15 minutes",
                            "Reliable behind-the-scenes messaging, so no action is ever lost or accidentally repeated",
                            "An AI assistant that turns a photo of an item into a ready-to-post listing with a suggested price",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK & ROLE */}
            <div className="space-y-8">

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Role</h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                        Full Stack Developer (Built Alone)
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Go", "PostgreSQL 17", "pgx", "Python", "FastAPI", "Anthropic API", "Redpanda", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Terraform", "GitHub Actions", "Playwright"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The website talks to three separate services, one for logging in, one for the marketplace and orders, and one for handling money. Each keeps its own records. Whenever something important happens, a message is sent reliably to the other parts that need to know, including an AI service that checks listings for trust and safety.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Good to Know</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        This is a learning project. In the real world, companies should use trusted, ready-made login systems. Building one from scratch was the whole point here, to show how it works underneath. It uses pretend deliveries and made-up data, and no real money is involved.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}
