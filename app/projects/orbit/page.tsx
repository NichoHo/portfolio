"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/Card";
import { easeOut } from "@/lib/motion";

const ORBIT_IMAGES = [
  "/portfolio/orbit-1.jpg",
  "/portfolio/orbit-2.jpg",
  "/portfolio/orbit-6.jpg",
  "/portfolio/orbit-3.jpg",
  "/portfolio/orbit-5.jpg",
  "/portfolio/orbit-4.jpg",
];

export default function OrbitPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 text-xs font-medium">
                Mobile & Offline-First Systems
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)]">Orbit</h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                A cross-platform, offline-first task and habit tracking engine. Built with React Native and Expo, it delivers an instant native experience where every action renders in one frame, with synchronization to Postgres happening transparently in the background.
            </p>

            <div className="flex flex-wrap gap-6">
                <a
                    href="https://github.com/NichoHo/Orbit"
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
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
        >
            <ImageCarousel images={ORBIT_IMAGES} alt="Orbit" accentClass="bg-blue-500" phonesPerSlide={3} />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT: DETAILS */}
            <div className="md:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Overview</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Orbit was designed around a strict set of architectural guarantees: writes must never be lost, the user interface must never stall on network spinners, and server data must maintain a single unified source of truth. Rather than introducing a complex dual-database reconciliation layer, Orbit treats the TanStack Query cache as the primary offline database, persisting cache snapshots synchronously to MMKV storage.
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
                        Every task toggle or habit check-in completes in a single frame via optimistic mutations. Client-minted UUIDs allow immediate creation and referencing of offline records without primary key collisions. When connectivity resumes, queued mutations replay in order against Supabase, where database triggers stamp canonical timestamps for deterministic Last-Write-Wins (LWW) merge resolution. Realtime WebSocket events synchronize live updates across devices, while native iOS widgets built with WidgetKit keep pending tasks directly accessible from the user&apos;s home screen.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">My Role</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        I architected and built the entire application from the ground up. This included engineering the offline-first sync pipeline and MMKV persistence layer, designing the PostgreSQL schema and Row-Level Security (RLS) policies, building the dynamic habit streak calculator and agenda views, creating the native iOS widget in Swift with WidgetKit, and implementing rate-limited Edge Functions for AI assistance.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Key Features</h2>
                    <ul className="space-y-3">
                        {[
                            "Offline-first architecture with 1-frame optimistic UI updates that never block on network latency",
                            "TanStack Query cache persisted synchronously to MMKV, surviving app force-quits and dead batteries",
                            "Client-minted UUIDs allowing immediate creation and referencing of offline tasks and habits without ID conflicts",
                            "Real-time multi-device synchronization via Supabase Realtime WebSockets with unit-tested Last-Write-Wins (LWW) merge logic",
                            "Native iOS home-screen widgets built with Swift and WidgetKit to keep pending tasks accessible",
                            "Habit engine with deterministically computed streaks and flexible cadences (daily, weekly, specific days)",
                            "Native full-text task search powered by PostgreSQL GIN indexing",
                            "Deterministic local notifications scheduled on-device without relying on external push servers",
                            "Secure Edge Functions with forwarded JWTs and caller rate-limiting, ensuring API keys never touch the client",
                            "One-tap CSV export of all personal data via the native OS share sheet",
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

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Role</h3>
                    <p className="text-[var(--text-secondary)] font-medium">
                        Full Stack & Mobile Developer (Built Alone)
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React Native",
                            "Expo SDK 57",
                            "Expo Router",
                            "TypeScript",
                            "TanStack Query",
                            "Zustand",
                            "Supabase",
                            "PostgreSQL 15+",
                            "Row-Level Security",
                            "react-native-mmkv",
                            "NativeWind",
                            "Tailwind CSS",
                            "Swift",
                            "WidgetKit",
                            "Deno",
                            "Edge Functions",
                        ].map(tech => (
                            <span key={tech} className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">How It Fits Together</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        The mobile app uses TanStack Query as its offline database, persisting cache state synchronously to MMKV storage. Mutations immediately patch the local cache and queue for replay. When online, mutations sync to Supabase (PostgreSQL) via PostgREST, where database triggers update canonical timestamps and broadcast changes over WebSockets via Realtime to other connected devices. Native iOS widgets read shared app-group storage to display pending tasks.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Proven Resilient</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Engineered with strict offline guarantees: paused mutation queues persist across restarts and replay idempotently upon reconnection. Sync merge logic is separated into pure functions and covered by automated tests to ensure conflicting concurrent updates never corrupt client state. Zero network spinners are used anywhere on the core write path.
                    </p>
                </Card>

                <Card>
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Good to Know</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Orbit was built to demonstrate modern offline-first mobile engineering and distributed client-server synchronization patterns. AI summarization runs server-side behind user-authenticated rate-limiting to protect credentials and manage costs.
                    </p>
                </Card>
            </div>

        </div>
      </div>
    </main>
  );
}
