"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronRight, Calendar, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { Education } from "@/components/Education";
import { Volunteering } from "@/components/Volunteering";
import { Research } from "@/components/Research";
import Organization from "@/components/Organization";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AmbientGlow } from "@/components/AmbientGlow";

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
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20 space-y-24">
        
        {/* 2. HERO SECTION */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          <AmbientGlow className="w-96 h-96 -top-20 right-0 bg-[var(--accent)] opacity-50" />
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-1 space-y-6 text-center md:text-left"
          >

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)]">
              Fullstack <br />
              <span className="text-[var(--text-tertiary)]">Architect.</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Computer Science Undergraduate building <strong className="text-[var(--text-primary)]">distributed backend systems</strong>, <strong className="text-[var(--text-primary)]">AI/ML pipelines</strong>, and modern web platforms.
              Currently a Backend Software Engineering Intern at <strong className="text-[var(--text-primary)]">SIRCLO</strong>, alongside roles at <strong className="text-[var(--text-primary)]">Nexus Software</strong> and <strong className="text-[var(--text-primary)]">Galva Group</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              {/* CONTACT BUTTON -> Mailto */}
              <a
                href="mailto:nikko150905@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg)] px-8 py-3 text-sm font-semibold transition-transform hover:scale-105"
              >
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              {/* CV BUTTON -> Opens in New Tab */}
              <a
                href="/portfolio/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-8 py-3 text-sm font-medium transition-colors hover:bg-[var(--border)]"
              >
                CV <Download className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-6 pt-2 text-[var(--text-tertiary)] justify-center md:justify-start">
              {/* GITHUB */}
              <a href="https://github.com/NichoHo" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-[var(--text-primary)] cursor-pointer transition-colors" />
              </a>
              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/nichoho/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-[var(--accent)] cursor-pointer transition-colors" />
              </a>
              {/* EMAIL */}
              <a href="mailto:nikko150905@gmail.com">
                <Mail className="w-6 h-6 hover:text-[var(--text-primary)] cursor-pointer transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="relative"
          >
            <img
              src="/portfolio/photo.jpg"
              alt="Nicholas Ho"
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-[var(--surface)] shadow-xl"
            />
          </motion.div>
        </section>

        {/* 3. TECHNICAL SKILLS */}
        <section className="space-y-8">
            <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Technical Skills</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
                {/* Frontend Development */}
                <motion.div variants={fadeUp}>
                <Card className="p-6 border-t-4 border-t-emerald-500 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[var(--text-primary)]">Frontend Development</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI", "Vue.js", "Bootstrap", "Framer Motion", "Zod", "Figma", "Lucide React"].map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Specializing in building modern, responsive web interfaces and high-performance landing pages. Focus on creating seamless user experiences using the latest frontend frameworks.
                    </p>
                </Card>
                </motion.div>

                {/* Backend Development */}
                <motion.div variants={fadeUp}>
                <Card className="p-6 border-t-4 border-t-indigo-500 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[var(--text-primary)]">Backend Development</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Go", "Java", "Spring Boot", "C#", "ASP.NET Core", "Node.js", "Express", "PostgreSQL", "Docker", "Kubernetes", "Laravel", "PHP", "Supabase", "MySQL", "SQL Server"].map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Specializing in robust API architectures across C#, Go, and Java. Experienced in architecting complex Warehouse Management Systems (WMS), payment ledgers, and inventory tracking systems, with a focus on data correctness, idempotency, and distributed transactions.
                    </p>
                </Card>
                </motion.div>

                {/* Artificial Intelligence */}
                <motion.div variants={fadeUp}>
                <Card className="p-6 border-t-4 border-t-orange-500 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[var(--text-primary)]">Artificial Intelligence</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["LangChain", "HuggingFace", "FAISS", "TensorFlow", "Scikit-learn", "XGBoost", "SHAP", "OpenCV", "MediaPipe", "GRU", "Pandas", "NumPy"].map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        Engineering intelligent systems including RAG pipelines for document retrieval, real-time Computer Vision for sign language recognition, and predictive modeling for sports analytics. Published researcher in Explainable AI, applying predictive modeling to healthcare diagnostics with a focus on model interpretability.
                    </p>
                </Card>
                </motion.div>
            </motion.div>
        </section>

        {/* 4. WORK EXPERIENCE */}
        <section id="work" className="space-y-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="flex items-center justify-between"
            >
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Work Experience</h2>
            </motion.div>

            <div className="relative space-y-8 md:pl-0 md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:h-full md:before:w-px md:before:bg-[var(--border)]">

                {/* ROLE 0: SIRCLO (Intern) */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-sky-500 z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card className="p-6 border-l-4 border-l-sky-500">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Software Engineering Intern <span className="text-xs font-normal opacity-70">(Backend)</span></h3>
                                    <span className="font-mono text-sky-600 dark:text-sky-400 text-xs bg-sky-50 dark:bg-sky-900/30 px-2 py-1 rounded whitespace-nowrap">Aug 2026 - Present</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">SIRCLO</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Selected for a <strong className="text-[var(--text-primary)]">6-month, end-to-end</strong> project, collaborating with a cross-functional team (PM, Frontend, QA) from spec through delivery</li>
                                <li>Project scope and tech stack to be confirmed</li>
                            </ul>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 1: NEXUS */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-emerald-500 z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto md:pr-0">
                        <Card className="p-6 border-l-4 border-l-emerald-500">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Lead Developer</h3>
                                    <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded whitespace-nowrap">Oct 2025 - Present</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Nexus Software Agency</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Spearheaded the development of high-performance landing pages for diverse clients using <strong className="text-[var(--text-primary)]">Next.js</strong></li>
                                <li>Translated business requirements into modern, scalable frontend code</li>
                            </ul>

                            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Next.js</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Tailwind CSS</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">React</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 2: GALVA (Part-Time) */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-indigo-500 z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card className="p-6 border-l-4 border-l-indigo-500">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Full Stack Developer <span className="text-xs font-normal opacity-70">(Part-time)</span></h3>
                                    <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded whitespace-nowrap">Apr 2024 - July 2026</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Galva Group</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Architected a comprehensive <strong className="text-[var(--text-primary)]">Warehouse Management System (WMS)</strong> using ASP.NET.</li>
                                <li>Developed a comprehensive <strong className="text-[var(--text-primary)]">Transport Tracker</strong> system using React for the frontend and C# Web API for the backend to monitor product logistics in real-time.</li>
                                <li>Engineered a comprehensive <strong className="text-[var(--text-primary)]">Project Management System</strong> (PMS) using Next.js, Tailwind CSS, Supabase, and AWS S3.</li>
                            </ul>

                            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">C# ASP.NET</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">React</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">HTML</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">CSS</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">SQL Server</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">JavaScript</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">jQuery</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Next.js</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Tailwind CSS</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Supabase</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">AWS S3</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 3: GALVA (Freelance) */}
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--text-tertiary)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto md:pr-0">
                        <Card className="p-6 opacity-90 hover:opacity-100">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Full Stack Developer <span className="text-xs font-normal opacity-70">(Freelance)</span></h3>
                                    <span className="font-mono text-[var(--text-tertiary)] text-xs bg-[var(--border)] px-2 py-1 rounded whitespace-nowrap">May 2023 - Aug 2023</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Galva Group</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Built the <strong className="text-[var(--text-primary)]">Inventory Project</strong>, an API-driven finance module automating balanced double-entry General Ledger postings for multi-currency cash & bank disbursements</li>
                                <li>Architected a <strong className="text-[var(--text-primary)]">C# ASP.NET Web API 2</strong> backend using the Repository Pattern, Dapper, and TransactionScope-managed cross-database transactions with custom token authentication</li>
                                <li>Migrated the frontend to a decoupled <strong className="text-[var(--text-primary)]">Vue.js 3 SPA</strong> styled with Bootstrap 5</li>
                            </ul>

                             <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">C# ASP.NET Web API</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Vue.js</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Dapper</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Bootstrap 5</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">SQL Server</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">DataTables.net</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">JavaScript</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                 {/* ROLE 4: GALVA (Intern) */}
                 <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--text-tertiary)] z-10"></div>

                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card className="p-6 opacity-90 hover:opacity-100">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[var(--text-primary)] text-lg">Software Developer <span className="text-xs font-normal opacity-70">(Intern)</span></h3>
                                    <span className="font-mono text-[var(--text-tertiary)] text-xs bg-[var(--border)] px-2 py-1 rounded whitespace-nowrap">June 2022 - July 2022</span>
                                </div>
                                <span className="text-[var(--text-secondary)] font-medium text-sm">Galva Group</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                                <li>Engineered a <strong className="text-[var(--text-primary)]">geofencing access-control system</strong>, applying the Haversine formula to restrict app access to users within a set radius of office coordinates</li>
                                <li>Built <strong className="text-[var(--text-primary)]">real-time chat</strong> via SignalR/WebSockets for instant bi-directional messaging between field users</li>
                                <li>Integrated <strong className="text-[var(--text-primary)]">Google Maps API</strong> to visualize geotagged CRUD tracking data for supervisors</li>
                            </ul>

                             <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">VB.NET</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">SignalR</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">Google Maps API</span>
                                <span className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border)] px-1.5 py-0.5 rounded">SQL Server</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

            </div>
        </section>

        {/* 6. SELECTED PROJECTS */}
        <section id="projects" className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Selected Projects</h2>
                <Link href="/projects" className="group flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors">
                    View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* PROJECT 1: VAULT */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2"
                >
                    <Link href="/projects/vault">
                        <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <div className="grid md:grid-cols-5 gap-0">
                                <div className="md:col-span-3 h-auto md:h-auto bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative group-hover:opacity-90 transition-opacity">
                                     <img src="/portfolio/Vault Thumbnail.png" alt="Vault" className="object-cover w-full h-full"/>
                                </div>
                                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center border-l border-slate-200 dark:border-slate-800 relative">
                                    <div className="mb-4">
                                        <span className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">Marketplace & Payments</span>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-blue-500 transition-colors">Vault</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                        A marketplace with its own secure sign-in, escrow payments that hold money safely until an order is delivered, and an AI helper that turns a photo into a ready-to-post listing.
                                    </p>
                                    
                                    <div className="space-y-6 mt-auto">
                                      <div className="flex flex-wrap gap-2">
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Go</span>
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">OAuth 2.0</span>
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">PostgreSQL</span>
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Next.js</span>
                                      </div>

                                      <div className="flex sm:flex-row sm:items-center justify-start gap-4 sm:gap-6 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                        
                                        <a 
                                            href="https://github.com/NichoHo/vault"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} 
                                            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors sm:ml-auto"
                                        >
                                            Source <Github className="w-3.5 h-3.5" />
                                        </a>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* PROJECT 2: TALLY */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href="/projects/tally">
                         <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
                            <div className="h-auto bg-teal-50 dark:bg-teal-900/10 relative overflow-hidden flex items-center justify-center group-hover:bg-teal-100 dark:group-hover:bg-teal-900/20 transition-colors">
                                <img src="/portfolio/Tally Thumbnail.png" alt="Tally" className="object-cover"/>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-wider font-semibold">Payments Engine</span>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-teal-500 transition-colors">Tally</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                                    A payments engine that moves money between accounts so funds never go missing and no payment is charged twice. It also flags suspicious transfers.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Go</span>
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">gRPC</span>
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Kafka</span>
                                          <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">PostgreSQL</span>
                                </div>
                                <div className="mt-8 flex sm:flex-row sm:items-center justify-start gap-4 sm:gap-6">
                                    <div className="flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 group-hover:gap-3 transition-all">
                                        View Details <ArrowRight className="w-4 h-4" />
                                    </div>
                                    
                                    <a 
                                        href="https://tally-three-umber.vercel.app/"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} 
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors sm:ml-auto"
                                    >
                                        Live Site <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* PROJECT 3: LOCALIST */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Link href="/projects/localist">
                         <div className="group h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
                            <div className="h-auto bg-fuchsia-50 dark:bg-fuchsia-900/10 relative overflow-hidden flex items-center justify-center group-hover:bg-fuchsia-100 dark:group-hover:bg-fuchsia-900/20 transition-colors">
                                <img src="/portfolio/Localist Thumbnail.png" alt="Localist" className="object-cover"/>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="mb-4">
                                    <span className="text-fuchsia-600 dark:text-fuchsia-400 font-mono text-xs uppercase tracking-wider font-semibold">Directory & Subscriptions</span>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-fuchsia-500 transition-colors">Localist</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                                    An online directory of local businesses with about 5,400 pages built to rank on Google. Owners claim their page, edit it, and pay to rank higher.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Laravel</span>
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Livewire</span>
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Stripe</span>
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">Cloudflare</span>
                                    </div>

                                    <div className="flex sm:flex-row sm:items-center justify-start gap-4 sm:gap-6 mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 group-hover:text-fuchsia-500 transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                        
                                        <a 
                                            href="https://github.com/NichoHo/Localist"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} 
                                            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors sm:ml-auto"
                                        >
                                            Source <Github className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
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
        <section className="space-y-12 py-20 border-t border-gray-200 dark:border-gray-800">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. ALIBABA CLOUD */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col group hover:border-orange-500/50 transition-colors">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                <img src="/portfolio/alibaba-logo.png" alt="Alibaba" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Alibaba Cloud Associate</h3>
                                <p className="text-xs text-slate-500">Cloud Engineer</p>
                            </div>
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col justify-between gap-6">
                            <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex justify-between">
                                    <span>Issued</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200">May 2025</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>ID</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200 text-xs">IACA13250500210461L</span>
                                </div>
                            </div>
                            
                            <a 
                                href="/portfolio/alibaba-certificate.jpg" 
                                download="Alibaba_Certificate.jpg"
                                className="block w-full text-center py-2 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                            >
                                Download Certificate
                            </a>
                        </div>
                    </Card>
                </motion.div>

                {/* 2. NVIDIA */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col group hover:border-green-500/50 transition-colors">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                <img src="/portfolio/nvidia-logo.jpg" alt="NVIDIA" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Conversational AI</h3>
                                <p className="text-xs text-slate-500">NVIDIA Deep Learning Institute</p>
                            </div>
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col justify-between gap-6">
                            <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex justify-between">
                                    <span>Issued</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200">Aug 2025</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>ID</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200 text-xs truncate max-w-[120px]">C8GNGRZhTAicYiL42FWjVw</span>
                                </div>
                            </div>
                            
                            <div className="flex gap-2">
                                <a 
                                    href="/portfolio/nvidia-certificate.pdf" 
                                    download="NVIDIA_Certificate.pdf"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                                >
                                    PDF
                                </a>
                                <a 
                                    href="https://learn.nvidia.com/certificates?id=zMTLXpF7RrCNjBoxDcKf5A" 
                                    target="_blank"
                                    className="flex-1 flex items-center justify-center py-2 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                                >
                                    Verify
                                </a>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* 3. AWS COMPUTE */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col group hover:border-[#232F3E] transition-colors">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                <img src="/portfolio/aws-logo.jpg" alt="AWS" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Getting Started with Compute</h3>
                                <p className="text-xs text-slate-500">AWS Educate</p>
                            </div>
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col justify-between gap-6">
                            <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex justify-between">
                                    <span>Issued</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200">Oct 2024</span>
                                </div>
                            </div>
                                <a 
                                href="https://www.credly.com/badges/2f074998-a38b-4769-9bbc-14503a42893d/linked_in_profile" 
                                target="_blank"
                                className="block w-full text-center py-2 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-[#232F3E] hover:text-[#232F3E] dark:hover:text-white transition-colors"
                            >
                                Verify on Credly
                            </a>
                        </div>
                    </Card>
                </motion.div>

                {/* 4. AWS CLOUD 101 */}
                <motion.div whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col group hover:border-[#232F3E] transition-colors">
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                <img src="/portfolio/aws-logo.jpg" alt="AWS" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Introduction to Cloud 101</h3>
                                <p className="text-xs text-slate-500">AWS Educate</p>
                            </div>
                        </div>
                        
                        <div className="p-4 flex-1 flex flex-col justify-between gap-6">
                                <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <div className="flex justify-between">
                                    <span>Issued</span>
                                    <span className="font-mono text-slate-700 dark:text-slate-200">Oct 2024</span>
                                </div>
                            </div>
                                <a 
                                href="https://www.credly.com/badges/8bc28ca2-d1db-49e0-802a-f78b4ad922f8/linked_in_profile" 
                                target="_blank"
                                className="block w-full text-center py-2 rounded border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-[#232F3E] hover:text-[#232F3E] dark:hover:text-white transition-colors"
                            >
                                Verify on Credly
                            </a>
                        </div>
                    </Card>
                </motion.div>

            </div>
        </section>

      {/* END MASTER LAYOUT WRAPPER */}
      </div>

      {/* 12. CONTACT */}
      <ContactSection />

      {/* 13. FOOTER */}
      <Footer />
    </main>
  );
}