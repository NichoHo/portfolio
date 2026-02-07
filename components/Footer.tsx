import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Nicholas Ho</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Fullstack Developer building polished UIs and robust backends. Based in Tangerang, Indonesia.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link href="/#work" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Work Experience</Link></li>
              <li><Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/NichoHo" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nichoho/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:nikko150905@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Nicholas Ho. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Next.js and Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}