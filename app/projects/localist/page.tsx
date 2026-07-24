"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";

const LOCALIST_IMAGES = [
  "/portfolio/localist.jpg",
  "/portfolio/localist-2.jpg",
  "/portfolio/localist-3.jpg",
  "/portfolio/localist-4.jpg",
  "/portfolio/localist-5.jpg",
  "/portfolio/localist-6.jpg",
];

export default function LocalistPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-emerald-500/20">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-medium hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">

        {/* HEADER */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 text-xs font-medium">
                Business Directory & Subscriptions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Localist</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                An online directory of local businesses, a bit like Yelp or Yellow Pages. It automatically creates about 5,400 pages designed to show up well on Google. Business owners can claim their own page, edit it, and pay a subscription to appear higher in the listings.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://github.com/NichoHo/Localist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-fuchsia-500 transition-colors"
                >
                    <Github className="w-5 h-5" /> View Source
                </a>
            </div>
        </motion.div>

        {/* HERO CAROUSEL */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
        >
            <ImageCarousel images={LOCALIST_IMAGES} alt="Localist" accentClass="bg-fuchsia-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Localist automatically builds a large directory website from a list of businesses. It creates a page for each business, plus pages grouped by category, by city, and by both together. Business owners can claim their page using a private link, edit their details, add photos, read enquiries from customers, and pay to upgrade to a Featured or Premium plan, which moves them higher up the listings. It shows the complete playbook behind directory websites, getting lots of pages to rank on Google, letting owners manage and pay for their own listing, and keeping the whole site fast for everyone.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Role</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        I built the whole platform on my own, from start to finish. That covers the public directory and how listings are ranked, the area where owners claim and manage their page, the payments and subscription plans, everything needed to rank on Google, the system that keeps pages loading fast, an admin area to approve listings, and the setup to run it all. I also wrote 48 automated tests to prove it works.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "About 5,400 pages created automatically, grouped by business, category, and city, with paying members shown first",
                            "An owner area where businesses claim their page with a private link, edit it live, reorder photos, and read customer enquiries",
                            "Paid subscriptions through Stripe, where businesses upgrade to Featured or Premium and move higher in the listings",
                            "Built to rank on Google, with the right behind-the-scenes tags, an automatic site map, and clean web addresses",
                            "If a business changes its name, its old web address automatically forwards to the new one, so search rankings are never lost",
                            "Pages are cached so they load fast, and a page refreshes the moment its owner edits it",
                            "An admin area to review, approve, and manage listings",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-5 h-5 text-fuchsia-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* RIGHT: TECH STACK & ROLE */}
            <div className="space-y-8">

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Role</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                        Full Stack Developer (Built Alone)
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {["PHP 8.3", "Laravel 12", "Livewire 3", "Alpine.js", "Blade", "Tailwind CSS 4", "Vite", "MySQL/MariaDB", "Stripe (Cashier)", "Cloudflare", "Docker", "PHPUnit"].map(tech => (
                            <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">How It Fits Together</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        It is one web app that serves two things, a fast public directory that anyone can browse, and a private area where signed-in owners manage their listing. Paying for a plan changes where a business appears in the rankings, and editing or approving a listing instantly refreshes that page for visitors. Public pages are made fast for everyone, while owner pages always stay private and up to date.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">Good to Know</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        This is a showcase project. The business data in it is made up, using 5,000 sample listings in Malaysia. To put it online for real, it would still need payment keys, an account with the caching service, and web hosting.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}
