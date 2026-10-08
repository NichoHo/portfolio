"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronRight, Calendar, ExternalLink, Server } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Education } from "@/components/Education";
import { Volunteering } from "@/components/Volunteering";
import { Certifications } from "@/components/Certifications";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import Organization from "@/components/Organization";
import { fadeUp, staggerContainer, reveal, enter } from "@/lib/motion";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-[var(--bg)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent)]/20">
      
      {/* 1. NAVBAR */}
      <Navbar>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight hidden md:block">Nicholas Ho</span>
          <span className="font-bold text-xl tracking-tight md:hidden">NH</span>
          
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#work" className="text-sm font-medium hover:text-emerald-500 transition-colors">Work</a>
              <a href="#projects" className="text-sm font-medium hover:text-emerald-500 transition-colors">Projects</a>
              <a href="#education" className="text-sm font-medium hover:text-emerald-500 transition-colors">Education</a>
              <a href="#volunteering" className="text-sm font-medium hover:text-emerald-500 transition-colors">Volunteering</a>
              <a href="#certifications" className="text-sm font-medium hover:text-emerald-500 transition-colors">Certifications</a>
              <a href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Navigation (Simplified) */}
            <div className="md:hidden flex items-center gap-4">
               <a href="#work" className="text-sm font-medium hover:text-emerald-500 transition-colors">Work</a>
               <a href="#projects" className="text-sm font-medium hover:text-emerald-500 transition-colors">Projects</a>
               <a href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">Contact</a>
            </div>

            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" /> 
            <ThemeToggle />
          </div>
        </div>
      </Navbar>

      {/* 
        MASTER LAYOUT WRAPPER 
        We use max-w-6xl for the main content to make it wider, 
        and wrap ALL sections inside it so they share the exact same padding.
      */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20 space-y-24 [&>section+section]:border-t [&>section+section]:border-[var(--border)] [&>section+section]:pt-24">
        
        {/* 2. HERO SECTION */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* TEXT SIDE */}
          <motion.div
            {...enter()}
            className="relative flex-1 space-y-6 text-center md:text-left"
          >

            <h1 className="text-5xl md:text-[3.25rem] lg:text-[3.6rem] font-extrabold tracking-tighter leading-[1.05] text-balance text-[var(--text-primary)]">
              I build <span className="text-emerald-500">full stack</span> apps and AI.
            </h1>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-[48ch] mx-auto md:mx-0">
              Computer Science undergraduate. Backend intern at <strong className="text-[var(--text-primary)]">SIRCLO</strong>, lead developer at <strong className="text-[var(--text-primary)]">Nexus</strong>, previously full stack at <strong className="text-[var(--text-primary)]">Galva Group</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              {/* CONTACT BUTTON -> Mailto */}
              <a
                href="mailto:nikko150905@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg)] px-8 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              {/* CV BUTTON -> Opens in New Tab */}
              <a
                href="/portfolio/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-8 py-3 text-sm font-bold transition-colors hover:bg-[var(--border)]"
              >
                CV <Download className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-6 pt-2 text-[var(--text-tertiary)] justify-center md:justify-start">
              {/* GITHUB */}
              <a href="https://github.com/NichoHo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 hover:text-[var(--text-primary)] cursor-pointer transition-colors" />
              </a>
              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/nichoho/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-[var(--accent)] cursor-pointer transition-colors" />
              </a>
              {/* EMAIL */}
              <a href="mailto:nikko150905@gmail.com" aria-label="Email">
                <Mail className="w-6 h-6 hover:text-[var(--text-primary)] cursor-pointer transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* IMAGE SIDE: top of the photo is empty backdrop, so crop it with a 6:7 box anchored to the bottom */}
          <motion.div
             {...enter(0.15)}
             className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-emerald-500/50" />
            <img
              src="/portfolio/photo-full.jpg"
              alt="Nicholas Ho sitting on a white block, smiling"
              className="relative aspect-[6/7] h-[min(62dvh,30rem)] w-auto rounded-2xl object-cover object-bottom"
            />
          </motion.div>
        </section>

        {/* 3. TECHNICAL SKILLS */}
        <Skills />

        {/* 4. WORK EXPERIENCE */}
        <section id="work" className="space-y-8">
            <motion.div
              {...reveal}
              className="flex items-center justify-between"
            >
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Work Experience</h2>
            </motion.div>

            <div className="relative space-y-8 md:pl-0 md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:h-full md:before:w-px md:before:bg-[var(--border)]">

                {/* ROLE 0: SIRCLO (Intern) */}
                <motion.div
                    {...reveal}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--accent)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card>
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start gap-3">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Software Engineering Intern</h3>
                                    <span className="inline-flex items-center gap-1.5 text-[var(--accent)] text-xs font-bold bg-[var(--accent)]/10 px-2 py-1 rounded whitespace-nowrap shrink-0">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
                                        </span>
                                        Aug 2026 - Present
                                    </span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">SIRCLO · Backend</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Building and deploying the backend of the <strong className="text-[var(--text-primary)]">Project Portfolio Dashboard (PPD)</strong>, an internal app that turns GitHub Projects boards into progress, risk, and QA views for leadership, hosted on a company VM with Docker Compose and Caddy</li>
                                <li>Gathered requirements with stakeholders (VP, Engineering and QA Managers, PMs) and co-authored the technical spec and ERD</li>
                                <li>Built a <strong className="text-[var(--text-primary)]">GitHub GraphQL sync job</strong> and an org webhook receiver that logs every status change and who made it, plus Google sign-in, per-menu access control, and At Risk email alerts</li>
                            </ul>

                            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">TypeScript</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">PostgreSQL</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Drizzle ORM</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Auth.js</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">GitHub GraphQL API</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Webhooks</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Docker Compose</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Caddy</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 1: NEXUS */}
                <motion.div
                    {...reveal}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--accent)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto md:pr-0">
                        <Card>
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start gap-3">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Lead Developer</h3>
                                    <span className="inline-flex items-center gap-1.5 text-[var(--accent)] text-xs font-bold bg-[var(--accent)]/10 px-2 py-1 rounded whitespace-nowrap shrink-0">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]"></span>
                                        </span>
                                        Oct 2025 - Present
                                    </span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Nexus Software Agency</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Spearheaded the development of high-performance landing pages for diverse clients using <strong className="text-[var(--text-primary)]">Next.js</strong></li>
                                <li>Translated business requirements into modern, scalable frontend code</li>
                            </ul>

                            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Tailwind CSS</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">React</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 2: GALVA (Part-Time) */}
                <motion.div
                    {...reveal}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--text-tertiary)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card>
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Full Stack Developer <span className="text-xs font-normal opacity-70">(Part-time)</span></h3>
                                    <span className="text-[var(--accent)] text-xs font-bold bg-[var(--accent)]/10 px-2 py-1 rounded whitespace-nowrap">Apr 2024 - July 2026</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Galva Group</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Architected a comprehensive <strong className="text-[var(--text-primary)]">Warehouse Management System (WMS)</strong> using ASP.NET.</li>
                                <li>Built <strong className="text-[var(--text-primary)]">Kargolo</strong>, a logistics data management system using React for the frontend and C# Web API for the backend to configure carrier networks and expedition shipping services.</li>
                                <li>Engineered a comprehensive <strong className="text-[var(--text-primary)]">Project Management System</strong> (PMS) using Next.js, Tailwind CSS, Supabase, and AWS S3.</li>
                            </ul>

                            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">C# ASP.NET</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">React</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">HTML</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">CSS</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">SQL Server</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">JavaScript</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">jQuery</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Tailwind CSS</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Supabase</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">AWS S3</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 3: GALVA (Freelance) */}
                <motion.div
                    {...reveal}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--text-tertiary)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto md:pr-0">
                        <Card className="p-6 opacity-90 hover:opacity-100">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Full Stack Developer <span className="text-xs font-normal opacity-70">(Freelance)</span></h3>
                                    <span className="text-[var(--accent)] text-xs font-bold bg-[var(--accent)]/10 px-2 py-1 rounded whitespace-nowrap">May 2023 - Aug 2023</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Galva Group</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Built the <strong className="text-[var(--text-primary)]">Inventory Project</strong>, an API-driven finance module automating balanced double-entry General Ledger postings for multi-currency cash & bank disbursements</li>
                                <li>Architected a <strong className="text-[var(--text-primary)]">C# ASP.NET Web API 2</strong> backend using the Repository Pattern, Dapper, and TransactionScope-managed cross-database transactions with custom token authentication</li>
                                <li>Migrated the frontend to a decoupled <strong className="text-[var(--text-primary)]">Vue.js 3 SPA</strong> styled with Bootstrap 5</li>
                            </ul>

                             <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">C# ASP.NET Web API</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Vue.js</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Dapper</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Bootstrap 5</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">SQL Server</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">DataTables.net</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">JavaScript</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                 {/* ROLE 4: GALVA (Intern) */}
                 <motion.div
                    {...reveal}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--text-tertiary)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card className="p-6 opacity-90 hover:opacity-100">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Software Developer <span className="text-xs font-normal opacity-70">(Intern)</span></h3>
                                    <span className="text-[var(--accent)] text-xs font-bold bg-[var(--accent)]/10 px-2 py-1 rounded whitespace-nowrap">June 2022 - July 2022</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Galva Group</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Engineered a <strong className="text-[var(--text-primary)]">geofencing access-control system</strong>, applying the Haversine formula to restrict app access to users within a set radius of office coordinates</li>
                                <li>Built <strong className="text-[var(--text-primary)]">real-time chat</strong> via SignalR/WebSockets for instant bi-directional messaging between field users</li>
                                <li>Integrated <strong className="text-[var(--text-primary)]">Google Maps API</strong> to visualize geotagged CRUD tracking data for supervisors</li>
                            </ul>

                             <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">VB.NET</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">SignalR</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Google Maps API</span>
                                <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">SQL Server</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

            </div>
        </section>

        {/* 6. SELECTED PROJECTS */}
        <section id="projects" className="space-y-8">
            <motion.div
              {...reveal}
              className="flex items-center justify-between"
            >
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Selected Projects</h2>
                <Link href="/projects" className="group flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-soft)] transition-colors">
                    View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={reveal.viewport}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >

                {/* PROJECT 1: AGORA */}
                <motion.div
                    variants={fadeUp}
                    className="md:col-span-2"
                >
                        <div className="group relative rounded-2xl overflow-hidden border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)] transition-colors duration-300 cursor-pointer">
                            <Link href="/projects/agora" aria-label="View Agora details" className="absolute inset-0 z-10" />
                            <div className="grid md:grid-cols-5 gap-0">
                                <div className="md:col-span-3 h-auto md:h-auto bg-[var(--border)] flex items-center justify-center overflow-hidden relative transition-opacity">
                                     <img src="/portfolio/Agora Thumbnail.jpg" alt="Agora" className="object-cover w-full h-full"/>
                                </div>
                                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center border-l border-[var(--border)] relative">
                                    <div className="mb-4">
                                        <span className="text-orange-600 dark:text-orange-400 font-mono text-xs uppercase tracking-wider font-semibold">Marketplace & Payments</span>
                                        <h3 className="text-3xl font-bold text-[var(--text-primary)] mt-2 transition-colors">Agora</h3>
                                    </div>
                                    <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                                        A marketplace platform built around the hard parts: its own secure sign-in, escrow payments that never lose a cent, and limited-stock sales that stay fair when thousands of people hit buy at once. Every purchase is also checked for fraud.
                                    </p>

                                    <div className="space-y-6 mt-auto">
                                      <div className="flex flex-wrap gap-2">
                                          <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Go</span>
                                          <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">OAuth 2.0</span>
                                          <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">PostgreSQL</span>
                                          <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Next.js</span>
                                      </div>

                                      <div className="flex sm:flex-row sm:items-center justify-start gap-4 sm:gap-6 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400 transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>

                                        <a
                                            href="https://github.com/NichoHo/agora"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-20 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors sm:ml-auto"
                                        >
                                            Source <Github className="w-3.5 h-3.5" />
                                        </a>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </motion.div>

                {/* PROJECT 2: SWITCH */}
                <motion.div variants={fadeUp}>
                         <div className="group relative h-full rounded-2xl overflow-hidden border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)] transition-colors duration-300 flex flex-col cursor-pointer">
                             <Link href="/projects/switch" aria-label="View Switch details" className="absolute inset-0 z-10" />
                            <div className="h-auto bg-[#d4ff3a]/10 relative overflow-hidden flex items-center justify-center transition-colors">
                                <img src="/portfolio/Switch Thumbnail.jpg" alt="Switch" className="object-cover"/>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="text-[#5a6b00] dark:text-[#d4ff3a] font-mono text-xs uppercase tracking-wider font-semibold">Payment Gateway</span>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-2 transition-colors">Switch</h3>
                                </div>
                                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm">
                                    A card-payment switch that sits between a merchant and the banks behind it: checks the card, screens the transaction for fraud, picks which bank to route it to, and keeps a ledger that always balances.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Java</span>
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Spring Boot</span>
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">PostgreSQL</span>
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Docker</span>
                                    </div>

                                    <div className="flex sm:flex-row sm:items-center justify-start gap-4 sm:gap-6 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-bold text-[#5a6b00] dark:text-[#d4ff3a] transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>

                                        <a
                                            href="https://switch-gateway.onrender.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-20 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors sm:ml-auto"
                                        >
                                            Live Site <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </motion.div>

                {/* PROJECT 3: LOCALIST */}
                <motion.div variants={fadeUp}>
                         <div className="group relative h-full rounded-2xl overflow-hidden border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)] transition-colors duration-300 flex flex-col cursor-pointer">
                             <Link href="/projects/localist" aria-label="View Localist details" className="absolute inset-0 z-10" />
                            <div className="h-auto bg-yellow-50 dark:bg-yellow-900/10 relative overflow-hidden flex items-center justify-center transition-colors">
                                <img src="/portfolio/Localist Thumbnail.jpg" alt="Localist" className="object-cover"/>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="text-yellow-700 dark:text-yellow-400 font-mono text-xs uppercase tracking-wider font-semibold">Directory & Subscriptions</span>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-2 transition-colors">Localist</h3>
                                </div>
                                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm">
                                    An online directory of local businesses with about 6,100 pages built to rank on Google. Owners claim their page, edit it, and pay to rank higher.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Laravel</span>
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Livewire</span>
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Stripe</span>
                                        <span className="px-2.5 py-1 text-xs rounded-full border border-[var(--border)] text-[var(--text-secondary)]">Cloudflare</span>
                                    </div>

                                    <div className="flex sm:flex-row sm:items-center justify-start gap-4 sm:gap-6 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-bold text-yellow-700 dark:text-yellow-400 transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>

                                        <a
                                            href="https://localist-0mlt.onrender.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-20 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors sm:ml-auto"
                                        >
                                            Live Site <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </motion.div>
            </motion.div>
        </section>

        {/* 7. RESEARCH */}
        <Research />

        {/* 8. EDUCATION */}
        <Education />

        {/* 9. ORGANIZATIONS SECTION */}
        <Organization />

        {/* 10. VOLUNTEERING */}
        <Volunteering />

        {/* 11. CERTIFICATIONS */}
        <Certifications />

      {/* END MASTER LAYOUT WRAPPER */}
      </div>

      {/* 12. CONTACT */}
      <ContactSection />

      {/* 13. FOOTER */}
      <Footer />
    </main>
  );
}