import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Nicholas Ho</h2>
            <p className="text-[var(--text-secondary)] max-w-sm">
              Fullstack Developer building polished UIs and robust backends. Based in Tangerang, Indonesia.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Home</Link></li>
              <li><Link href="/#work" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Work Experience</Link></li>
              <li><Link href="/#projects" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Projects</Link></li>
              <li><Link href="/#contact" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/NichoHo" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nichoho/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:nikko150905@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-tertiary)]">
          <p>© {currentYear} Nicholas Ho. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Next.js and Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}