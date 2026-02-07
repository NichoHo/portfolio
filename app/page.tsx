"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-emerald-500/20 dark:selection:bg-emerald-500/30">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Nicholas Ho</span>
          <div className="flex items-center gap-4">
            <a href="#work" className="text-sm font-medium hover:text-emerald-500 transition-colors">Work</a>
            <a href="#contact" className="text-sm font-medium hover:text-emerald-500 transition-colors">Contact</a>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" /> 
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-20">
        
        {/* 2. HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* TEXT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Internships (July 2026)
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Fullstack <br />
              <span className="text-slate-400 dark:text-slate-600">Architect.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Computer Science Undergraduate engineering complex <strong className="text-slate-900 dark:text-white">Warehouse Management Systems</strong> and modern web solutions. 
              Currently driving technical strategy at <strong className="text-slate-900 dark:text-white">Nexus Software</strong> and <strong className="text-slate-900 dark:text-white">Galva Group</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              {/* CONTACT BUTTON -> Mailto */}
              <a 
                href="mailto:nikko150905@gmail.com" 
                className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 text-sm font-semibold transition-transform hover:scale-105"
              >
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              {/* CV BUTTON -> Opens in New Tab */}
              <a 
                href="/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 px-8 py-3 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                CV <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="flex gap-6 pt-2 text-slate-500 dark:text-slate-400 justify-center md:justify-start">
              {/* GITHUB */}
              <a href="https://github.com/NichoHo" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
              </a>
              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/nichoho/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-emerald-500 cursor-pointer transition-colors" />
              </a>
              {/* EMAIL */}
              <a href="mailto:nikko150905@gmail.com">
                <Mail className="w-6 h-6 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="relative"
          >
            <img 
              src="/photo.jpg"
              alt="Nicholas Ho" 
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl"
            />
          </motion.div>

        </section>

        {/* 3. TECHNICAL SKILLS (With Descriptions) */}
        <section className="space-y-8">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Frontend */}
                <Card className="p-6 border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Frontend Development</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery", "HTML5", "CSS3"].map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Specializing in building modern client web solutions and high-performance landing pages. Focus on translating business requirements into scalable frontend code.
                    </p>
                </Card>

                {/* Backend & Languages */}
                <Card className="p-6 border-t-4 border-t-indigo-500 hover:-translate-y-1 transition-transform flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Backend & Languages</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Node.js", "ASP.NET", "Laravel", "C#", "PHP", "Python", "SQL", "JavaScript"].map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Experienced in architecting complex Warehouse Management Systems (WMS) and optimizing database queries for performance.
                    </p>
                </Card>

                {/* Cloud & Tools */}
                <Card className="p-6 border-t-4 border-t-orange-500 hover:-translate-y-1 transition-transform flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Cloud & Soft Skills</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Alibaba Cloud", "AWS", "Git", "Technical Leadership", "Project Management"].map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Committed to delivering scalable software architectures. Experienced in cross-functional collaboration and technical mentorship.
                    </p>
                </Card>
            </div>
        </section>

        {/* 4. WORK EXPERIENCE (Responsive Timeline) */}
        <section id="work" className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
            </motion.div>
            
            {/* Timeline Container */}
            <div className="relative space-y-8 md:pl-0 md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-slate-300 md:before:to-transparent dark:md:before:via-slate-700">
                
                {/* ROLE 1: NEXUS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900 z-10 box-content shadow-[0_0_0_4px_rgba(16,185,129,0.2)]"></div>
                    
                    <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto md:pr-0">
                        <Card className="p-6 border-l-4 border-l-emerald-500 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Lead Developer</h3>
                                    <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">Present</span>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Nexus Software Agency</span>
                            </div>
                            
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                <li>Spearheaded the development of high-performance landing pages for diverse clients using <strong className="text-slate-900 dark:text-white">Next.js</strong></li>
                                <li>Translated business requirements into modern, scalable frontend code</li>
                            </ul>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">Next.js</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">Tailwind CSS</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">React</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 2: GALVA (Part-Time) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900 z-10 box-content shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"></div>
                    
                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card className="p-6 border-l-4 border-l-indigo-500 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Full Stack Developer <span className="text-xs font-normal opacity-70">(Part-time)</span></h3>
                                    <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">Present</span>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Galva Group</span>
                            </div>
                            
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                <li>Architected a comprehensive <strong className="text-slate-900 dark:text-white">Warehouse Management System (WMS)</strong> using ASP.NET & SQL.</li>
                                <li>Optimized database queries and frontend performance using jQuery.</li>
                            </ul>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">ASP.NET</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">SQL Server</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">jQuery</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* ROLE 3: GALVA (Freelance) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 z-10 box-content border-4 border-slate-50 dark:border-slate-950"></div>
                    
                    <div className="w-full md:w-[calc(50%-2rem)] md:mr-auto md:pr-0">
                        <Card className="p-6 opacity-90 hover:opacity-100 hover:shadow-md transition-all">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Full Stack Developer <span className="text-xs font-normal opacity-70">(Freelance)</span></h3>
                                    <span className="font-mono text-slate-500 text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">2023</span>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Galva Group</span>
                            </div>
                            
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                <li>Developed responsive internal sales dashboards using <strong className="text-slate-900 dark:text-white">ASP.NET & Bootstrap</strong></li>
                                <li>Designed complex backend logic to handle sales data processing.</li>
                            </ul>

                             <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">ASP.NET</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">Bootstrap</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">JavaScript</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                 {/* ROLE 4: GALVA (Intern) */}
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row items-center md:justify-between group"
                >
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 z-10 box-content border-4 border-slate-50 dark:border-slate-950"></div>
                    
                    <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto md:pl-0">
                        <Card className="p-6 opacity-90 hover:opacity-100 hover:shadow-md transition-all">
                            <div className="flex flex-col gap-1 mb-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Software Developer <span className="text-xs font-normal opacity-70">(Intern)</span></h3>
                                    <span className="font-mono text-slate-500 text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">2022</span>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">Galva Group</span>
                            </div>
                            
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                <li>Engineered a location-tracking CRUD application integrating <strong className="text-slate-900 dark:text-white">Google Maps API</strong></li>
                                <li>Built real-time chat features using VB.NET and SQL</li>
                            </ul>

                             <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">VB.NET</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">SQL</span>
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded">Google Maps API</span>
                            </div>
                        </Card>
                    </div>
                </motion.div>

            </div>
        </section>

        {/* 5. CERTIFICATIONS */}
        <section className="space-y-8">
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
                                <img src="/alibaba-logo.png" alt="Alibaba" className="w-full h-full object-cover" />
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
                                href="/alibaba-certificate.jpg" 
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
                                <img src="/nvidia-logo.jpg" alt="NVIDIA" className="w-full h-full object-cover" />
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
                                    href="/nvidia-certificate.pdf" 
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
                                <img src="/aws-logo.jpg" alt="AWS" className="w-full h-full object-cover" />
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
                                <img src="/aws-logo.jpg" alt="AWS" className="w-full h-full object-cover" />
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

      </div>
    </main>
  );
}