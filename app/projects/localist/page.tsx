"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const LOCALIST_IMAGES = [
  "/portfolio/localist.jpg",
  "/portfolio/localist-2.jpg",
  "/portfolio/localist-3.jpg",
  "/portfolio/localist-4.jpg",
  "/portfolio/localist-5.jpg",
  "/portfolio/localist-6.jpg",
  "/portfolio/localist-7.jpg",
  "/portfolio/localist-8.jpg",
];

export default function LocalistPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-500/15 text-yellow-800 dark:text-yellow-300 text-xs font-medium">
                Business Directory & Subscriptions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Localist</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                An online directory of local businesses, a bit like Yelp or Yellow Pages. It automatically creates about 6,100 pages designed to show up well on Google. Business owners can claim their own page, edit it, and pay a subscription to appear higher in the listings.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://localist-0mlt.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-yellow-700 dark:text-yellow-400 hover:text-yellow-600 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" /> Live Website
                </a>
                <a
                    href="https://github.com/NichoHo/Localist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-yellow-500 transition-colors"
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
            <ImageCarousel images={LOCALIST_IMAGES} alt="Localist" accentClass="bg-yellow-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Localist automatically builds a large directory website from a list of businesses. It creates a page for each business, plus pages grouped by category, by city, and by both together. Business owners can claim their page using a private link, edit their details, add photos, read enquiries from customers, and pay to upgrade to a Featured or Premium plan, which moves them higher up the listings. It shows the complete playbook behind directory websites, getting lots of pages to rank on Google, letting owners manage and pay for their own listing, and keeping the whole site fast for everyone.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I built the whole platform on my own, from start to finish. That covers the public directory and how listings are ranked, the area where owners claim and manage their page, the payments and subscription plans, everything needed to rank on Google, the system that keeps pages loading fast, an admin area to approve listings, and the setup to run it all. I also wrote 60 automated tests to prove it works.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "About 6,100 pages created automatically, grouped by business, category, and city, with paying members shown first",
                            "An owner area where businesses claim their page with a private link, edit it live, reorder photos, and read customer enquiries",
                            "Paid subscriptions through Stripe in Malaysian ringgit, where businesses upgrade to Featured or Premium and move higher in the listings, and changing plan updates the existing subscription instead of billing twice",
                            "Built to rank on Google, with the right behind-the-scenes tags, an automatic site map, and clean web addresses",
                            "If a business changes its name, its old web address automatically forwards to the new one, so search rankings are never lost",
                            "Pages are cached so they load fast, and a page refreshes the moment its owner edits it",
                            "An admin area to review, approve, and manage listings",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
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
                        {["PHP 8.3", "Laravel 12", "Livewire 3", "Alpine.js", "Blade", "Tailwind CSS 4", "Vite", "MySQL/MariaDB", "Stripe (Cashier)", "Cloudflare", "Docker", "PHPUnit"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        It is one web app that serves two things, a fast public directory that anyone can browse, and a private area where signed-in owners manage their listing. Paying for a plan changes where a business appears in the rankings, and editing or approving a listing instantly refreshes that page for visitors. Public pages are made fast for everyone, while owner pages always stay private and up to date.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Good to Know</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        This is a showcase project. The listings are real, not made up: about 5,800 Malaysian businesses from Foursquare's open Places dataset, so most are unclaimed until an owner steps in. Payments run in Stripe's test mode, so no real money moves.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
