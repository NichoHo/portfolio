"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { reveal } from "@/lib/motion";

type Cert = {
  logo: string;
  org: string;
  title: string;
  issuer: string;
  date: string;
  id?: string;
  file?: { href: string; name: string };
  verify?: string;
};

const groups: { name: string; certs: Cert[] }[] = [
  {
    name: "Cloud",
    certs: [
      {
        logo: "/portfolio/alibaba-logo.png",
        org: "Alibaba",
        title: "Alibaba Cloud Associate",
        issuer: "Cloud Engineer",
        date: "May 2025",
        id: "IACA13250500210461L",
        file: { href: "/portfolio/alibaba-certificate.jpg", name: "Alibaba_Certificate.jpg" },
      },
      {
        logo: "/portfolio/aws-logo.jpg",
        org: "AWS",
        title: "Getting Started with Compute",
        issuer: "AWS Educate",
        date: "Oct 2024",
        verify: "https://www.credly.com/badges/2f074998-a38b-4769-9bbc-14503a42893d/linked_in_profile",
      },
    ],
  },
  {
    name: "AI",
    certs: [
      {
        logo: "/portfolio/nvidia-logo.jpg",
        org: "NVIDIA",
        title: "Building Conversational AI Applications",
        issuer: "NVIDIA Deep Learning Institute",
        date: "Aug 2025",
        id: "C8GNGRZhTAicYiL42FWjVw",
        file: { href: "/portfolio/nvidia-certificate.pdf", name: "NVIDIA_Certificate.pdf" },
        verify: "https://learn.nvidia.com/certificates?id=zMTLXpF7RrCNjBoxDcKf5A",
      },
      {
        logo: "/portfolio/azure-logo.jpg",
        org: "Microsoft Azure",
        title: "Azure AI Fundamentals (AI-900T00-A)",
        issuer: "Microsoft elevAIte Indonesia",
        date: "Apr 2025",
        id: "69a03d23-9008-4c0a-ae46-96afc813dc8c",
        file: { href: "/portfolio/azure-certificate.pdf", name: "Azure_AI_Fundamentals_Certificate.pdf" },
      },
    ],
  },
  {
    name: "Language",
    certs: [
      {
        logo: "/portfolio/ielts.webp",
        org: "IELTS",
        title: "IELTS Academic, Band 7.5",
        issuer: "British Council / IDP / Cambridge English",
        date: "Jun 2025",
        id: "25ID500396HON161A",
        file: { href: "/portfolio/IELTS.pdf", name: "IELTS.pdf" },
      },
    ],
  },
];

const action =
  "inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-secondary)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors";

export function Certifications() {
  return (
    <section id="certifications">
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Certifications</h2>

        <div className="divide-y divide-[var(--border)]">
          {groups.map((g) => (
            <motion.div
              key={g.name}
              {...reveal}
              className="grid gap-5 md:grid-cols-[12rem_1fr] md:gap-10 py-9 first:pt-0"
            >
              <div>
                <p className="text-lg font-bold tracking-tight text-[var(--text-primary)]">{g.name}</p>
                <p className="text-[13px] text-[var(--text-tertiary)]">
                  {g.certs.length} {g.certs.length > 1 ? "certificates" : "certificate"}
                </p>
              </div>

              <div className="space-y-7">
                {g.certs.map((c) => (
                  <div key={c.title} className="grid grid-cols-[44px_1fr] gap-x-4 gap-y-3 sm:grid-cols-[44px_1fr_auto]">
                    <div className="w-11 h-11 rounded-[10px] overflow-hidden bg-white border border-[var(--border)]">
                      <img src={c.logo} alt={c.org} className="w-full h-full object-cover" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[1.0625rem] font-bold tracking-tight text-[var(--text-primary)]">{c.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {c.issuer} <span className="ml-1 text-[var(--text-tertiary)]">{c.date}</span>
                      </p>
                      {c.id && (
                        <p className="mt-1.5 font-mono text-xs text-[var(--text-tertiary)] break-all">ID {c.id}</p>
                      )}
                    </div>

                    <div className="col-start-2 flex gap-4 sm:col-start-3 sm:justify-end">
                      {c.file && (
                        <a href={c.file.href} download={c.file.name} className={action}>
                          <Download className="w-3.5 h-3.5" /> Certificate
                        </a>
                      )}
                      {c.verify && (
                        <a href={c.verify} target="_blank" rel="noopener noreferrer" className={action}>
                          <ExternalLink className="w-3.5 h-3.5" /> Verify
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
