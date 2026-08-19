# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the existing portfolio (dark-first "Solid Elevated" surfaces, Manrope type, framer-motion scroll/hover/navbar motion) per `docs/superpowers/specs/2026-08-19-portfolio-redesign-design.md`, without changing any visible text or the three locked project-card grid structures.

**Architecture:** Introduce CSS custom-property design tokens consumed via Tailwind arbitrary values (`bg-[var(--surface)]`), so light/dark no longer needs paired `dark:` classes for neutral colors. Extract the duplicated nav markup into one `components/Navbar.tsx` that owns hide-on-scroll. Centralize the two motion variants (`fadeUp`, `staggerContainer`) in `lib/motion.ts`. Every other change is a `className` restyle of existing JSX — no markup restructuring except the explicitly-permitted Certifications rework.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3 (JIT, `darkMode: "class"`), framer-motion 12, lucide-react, next-themes. No new dependencies. No test runner exists in this repo (no jest/vitest/playwright in `package.json`) — verification is `npm run build` (type/compile check) plus manual browser checks via the preview tools, matching the spec's own §9 checklist.

## Pre-existing WIP this plan builds on (found in `git status` before this plan was written)

Uncommitted, unstaged, **currently breaks the build**:
- All 10 `app/projects/<slug>/page.tsx` already `import { Navbar } from "@/components/Navbar"` and already wrap their nav in `<Navbar>...</Navbar>` — but `components/Navbar.tsx` does not exist yet. Task 3 fixes this.
- `components/Education.tsx`, `Organization.tsx`, `Research.tsx`, `Volunteering.tsx` already define local `fadeUp`/`staggerContainer` consts and use `variants={fadeUp} initial="hidden" whileInView="visible"` on their motion divs, but `staggerContainer` is unused dead code in all four (none of them wrap a real stagger list) and the consts are duplicated four times. Task 9 replaces the local consts with an import from `lib/motion.ts` and drops the unused `staggerContainer` where nothing consumes it.
- `.gitignore` gained a `.superpowers/` entry — unrelated to this feature, leave as-is.

Nothing else (globals.css, tailwind.config.ts, layout.tsx, Card.tsx, `app/page.tsx`, `app/projects/page.tsx`) has been touched yet.

## Global Constraints

- **Never change visible text.** Every heading, paragraph, list item, badge label, date, and link label stays byte-for-byte identical, with one explicit exception: Certifications action buttons become icon-only per §6 of the spec — their original label becomes an `aria-label` instead of visible text (see Task 8). Everywhere else, if a change would touch text, skip it and flag it instead of guessing.
- **Never change the three locked project-card grids** (home "Selected Projects", `/projects` listing, individual project page `md:grid-cols-3` content grid) — no `grid-template-columns`, column-span, image aspect/crop, or image-vs-text ordering changes. Only color/border/shadow/radius/font may change on these.
- **No new npm dependencies.** framer-motion is already installed; no new animation library. No font besides Manrope + existing Geist Mono.
- **No glassmorphism/blur on cards, no gradient borders** — opaque `--surface` + 1px `--border` + `rounded-2xl` only ("Solid Elevated").
- **Per-project accent hues stay untouched.** Each project page/card already uses a bespoke accent (Vault=blue, Tally=teal, Localist=fuchsia, Signlingo=emerald, Flux=indigo, FAQ Assistant=violet, Jet Engine Monitor=rose, F1 Predictor=red, Nexus=cyan, Asia Trading=amber, Hammouda=stone) for badges, hover title color, and icon color. Only the **neutral** slate/white/black scale gets tokenized to the new dark-first system — see the substitution table in Task 7.
- **Respect `prefers-reduced-motion`** for the ambient glow drift and the page-transition fade (via framer-motion's `useReducedMotion()`). Scroll-reveal and hover states are exempt (they're not autoplaying).
- Keep `sticky`, not `fixed`, positioning for the navbar.
- Every task ends with `npm run build` succeeding (no type errors) before moving on.

---

## Task 1: Design tokens, Tailwind wiring, and font fix

**Files:**
- Modify: `app/globals.css` (full rewrite)
- Modify: `tailwind.config.ts` (full rewrite)
- Modify: `app/layout.tsx` (full rewrite)
- Create: `lib/motion.ts`

**Interfaces:**
- Produces: CSS custom properties `--bg`, `--surface`, `--border`, `--border-hover`, `--text-primary`, `--text-secondary`, `--text-tertiary`, `--accent`, `--accent-soft` (light values on `:root`, dark values on `.dark`, matching `next-themes`' `attribute="class"` wiring already configured in `ThemeProvider`). Consumed everywhere downstream as `bg-[var(--surface)]`, `text-[var(--text-primary)]`, etc.
- Produces: Tailwind `font-sans` → Manrope, `font-mono` → Geist Mono (previously wired to nothing — see note below).
- Produces: `lib/motion.ts` exports `fadeUp` and `staggerContainer`, the two variant objects every scroll-reveal in the site imports from here on.

**Note on the font bug:** currently `app/layout.tsx` imports Geist fonts but never applies `geistSans.variable`/`geistMono.variable` to `<body>`, and `tailwind.config.ts` never extends `fontFamily`, so the `font-sans` class used throughout the app currently resolves to Tailwind's *default* sans stack, not Geist. Switching to Manrope requires actually wiring this (not just swapping the import) or the change will be invisible.

- [ ] **Step 1: Rewrite `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --border: #e2e8f0;
  --border-hover: #cbd5e1;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-tertiary: #64748b;
  --accent: #10b981;
  --accent-soft: #34d399;
}

.dark {
  --bg: #060706;
  --surface: #0d0f0d;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.14);
  --text-primary: #f2f5f2;
  --text-secondary: #a8ada9;
  --text-tertiary: #8b918c;
  --accent: #10b981;
  --accent-soft: #34d399;
}

body {
  background: var(--bg);
  color: var(--text-primary);
}

@keyframes glow-drift {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  50% { transform: translate(20px, -15px) scale(1.08); opacity: 0.65; }
}
.glow-ambient {
  animation: glow-drift 12s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .glow-ambient {
    animation: none;
  }
}
```

This drops the old `--background`/`--foreground` tokens and the vestigial `@theme inline` block (a Tailwind v4 construct that does nothing in this v3 project — confirmed via grep that no component uses `bg-background`/`text-foreground`) and the old `prefers-color-scheme` media query (superseded by the `.dark` class next-themes already manages — keeping both would fight each other).

- [ ] **Step 2: Rewrite `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 3: Rewrite `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicholas Ho - Portfolio",
  description: "Portfolio of Nicholas Ho, a Fullstack Developer building backend systems, AI/ML pipelines, and web platforms — Backend SE Intern at SIRCLO, Lead Developer at Nexus Software.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

`defaultTheme` changes from `"system"` to `"dark"` per spec §2 ("Dark is the default theme") — first-time visitors with no stored preference now land on dark instead of following OS preference. `enableSystem` stays so the stored-preference/system-sync machinery next-themes provides keeps working; the site's own toggle is still the only user-facing control (unchanged).

- [ ] **Step 4: Create `lib/motion.ts`**

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: succeeds (this step only changes tokens/fonts/config, no consumer references new classes yet, so nothing should break).

- [ ] **Step 6: Commit**

```bash
git add app/globals.css tailwind.config.ts app/layout.tsx lib/motion.ts
git commit -m "feat: add dark-first design tokens, wire Manrope, add shared motion variants"
```

---

## Task 2: Card.tsx — Solid Elevated base

**Files:**
- Modify: `components/Card.tsx` (full rewrite)

**Interfaces:**
- Consumes: `--surface`, `--border`, `--border-hover` tokens from Task 1.
- Produces: same `Card({ children, className })` signature every existing consumer (Technical Skills, Work Experience, Research, Education, Organization, Certifications) already uses — no call-site changes needed here.

- [ ] **Step 1: Rewrite `components/Card.tsx`**

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        "bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md hover:-translate-y-0.5",
        "dark:shadow-none dark:hover:border-[var(--border-hover)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:hover:-translate-y-1",
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 3: Commit**

```bash
git add components/Card.tsx
git commit -m "feat: restyle Card to Solid Elevated surface treatment"
```

---

## Task 3: Navbar.tsx — shared component with hide-on-scroll

**Files:**
- Create: `components/Navbar.tsx`

**Interfaces:**
- Produces: `Navbar({ children })` — a `<motion.nav>` shell owning sticky positioning, background/blur, and scroll-direction hide/show. Every page passes its existing inner nav content (logo+links or back-link, plus `ThemeToggle`) as `children`, unchanged.
- Consumes: `--bg`, `--border` tokens from Task 1.

This unblocks the 10 project detail pages that already reference this component (see "Pre-existing WIP" above) — the build is broken until this file exists.

- [ ] **Step 1: Create `components/Navbar.tsx`**

```tsx
"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function Navbar({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const scrollingDown = latest > previous;
    setHidden(scrollingDown && latest > 80);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md"
    >
      {children}
    </motion.nav>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds — the 10 project pages that already import `Navbar` now resolve correctly.

- [ ] **Step 3: Manual check in browser**

Start the dev server, open `/projects/vault`, scroll down then up. Expect: nav hides scrolling down past 80px, reappears immediately scrolling up, no layout jump (it's `sticky`, not `fixed`).

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add shared Navbar with hide-on-scroll-down/show-on-scroll-up"
```

---

## Task 4: Wire Navbar into `app/page.tsx` and `app/projects/page.tsx`

**Files:**
- Modify: `app/page.tsx:19-47` (nav block only)
- Modify: `app/projects/page.tsx:12-19` (nav block only)

**Interfaces:**
- Consumes: `Navbar` from Task 3.

These are the only two pages still using the old inline `<nav>` — all 10 project detail pages already use `<Navbar>` (pre-existing WIP).

- [ ] **Step 1: In `app/page.tsx`, replace the nav block**

Add the import:
```tsx
import { Navbar } from "@/components/Navbar";
```

Replace:
```tsx
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
```
with:
```tsx
      <Navbar>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
```
and the closing `</nav>` with `</Navbar>`. Everything inside (logo, desktop/mobile links, divider, `ThemeToggle`) is untouched here — its neutral-color restyle happens in Task 5.

- [ ] **Step 2: In `app/projects/page.tsx`, replace the nav block**

Add the import:
```tsx
import { Navbar } from "@/components/Navbar";
```

Replace:
```tsx
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
```
with:
```tsx
      <Navbar>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
```
and the closing `</nav>` with `</Navbar>`.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/projects/page.tsx
git commit -m "refactor: extract home and projects-listing nav into shared Navbar"
```

---

## Task 5: `app/template.tsx` page transitions + `AmbientGlow` component

**Files:**
- Create: `app/template.tsx`
- Create: `components/AmbientGlow.tsx`

**Interfaces:**
- Produces: `app/template.tsx` default export, auto-picked-up by Next.js App Router on every navigation (no import needed anywhere).
- Produces: `AmbientGlow({ className })` — a positioned `<div>` meant to sit inside a `relative` ancestor; caller controls size/position/color-opacity via `className` (e.g. `"w-72 h-72 -top-10 right-0 bg-[var(--accent)]"`). Internally applies the `.glow-ambient` drift animation from Task 1, or a static low-opacity version when `prefers-reduced-motion` is set.

- [ ] **Step 1: Create `app/template.tsx`**

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `components/AmbientGlow.tsx`**

```tsx
"use client";
import { useReducedMotion } from "framer-motion";

export function AmbientGlow({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[60px] ${
        reduceMotion ? "opacity-40" : "glow-ambient"
      } ${className}`}
    />
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Manual check in browser**

Navigate home → `/projects` → a project detail page. Expect a light fade/slide-in on each navigation (no exit animation — entry-only, per spec §5.5).

- [ ] **Step 5: Commit**

```bash
git add app/template.tsx components/AmbientGlow.tsx
git commit -m "feat: add page-transition template and reusable ambient glow"
```

---

## Task 6: Homepage — Hero + Technical Skills

**Files:**
- Modify: `app/page.tsx` (Hero section ~lines 56-124, Technical Skills section ~lines 126-188)

**Interfaces:**
- Consumes: `lib/motion.ts` (`fadeUp`, `staggerContainer`), `components/AmbientGlow.tsx`, design tokens from Task 1.

- [ ] **Step 1: Import motion variants and AmbientGlow at the top of `app/page.tsx`**

```tsx
import { fadeUp, staggerContainer } from "@/lib/motion";
import { AmbientGlow } from "@/components/AmbientGlow";
```

- [ ] **Step 2: Restyle the `<main>` wrapper and Hero section**

Replace the `<main>` className:
```tsx
<main className="min-h-screen transition-colors duration-300 bg-[var(--bg)] text-[var(--text-primary)] font-sans selection:bg-[var(--accent)]/20">
```

Make the Hero `<section>` a positioning context and add the glow, keep its existing flex/gap classes:
```tsx
<section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
  <AmbientGlow className="w-96 h-96 -top-20 right-0 bg-[var(--accent)] opacity-50" />
  {/* existing TEXT SIDE and IMAGE SIDE motion.divs unchanged in structure */}
```

Within the Hero, apply the neutral-token substitution (accent emerald stays emerald, only neutral slate/white classes change):
- `text-slate-900 dark:text-white` → `text-[var(--text-primary)]`
- `text-slate-400 dark:text-slate-600` (the "Architect." span) → `text-[var(--text-tertiary)]`
- `md:text-slate-600 dark:text-slate-400` → `text-[var(--text-secondary)]`
- `bg-slate-900 dark:bg-white text-white dark:text-slate-900` (Contact Me button) → `bg-[var(--text-primary)] text-[var(--bg)]`
- `border-slate-200 dark:border-slate-700` (CV button) → `border-[var(--border)]`
- `hover:bg-slate-100 dark:hover:bg-slate-800` → `hover:bg-[var(--border)]`
- `text-slate-500 dark:text-slate-400` (social icon row) → `text-[var(--text-tertiary)]`
- `hover:text-slate-900 dark:hover:text-white` (Github/Mail icons) → `hover:text-[var(--text-primary)]`
- `border-white dark:border-slate-800` (photo ring) → `border-[var(--surface)]`

Add entrance polish: give the existing text-side `motion.div` `transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}` and the image-side `motion.div` `transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}` (replacing the bare `transition={{ delay: 0.2 }}`) — matches the spec's premium easing curve (§5.1) without altering the existing `initial`/`animate` values.

- [ ] **Step 3: Restyle and stagger Technical Skills**

Section heading `motion.div`: switch from `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}` to `variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}`. Change heading text color class `text-slate-900 dark:text-white` → `text-[var(--text-primary)]`.

Wrap the 3-card grid with stagger:
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  className="grid grid-cols-1 md:grid-cols-3 gap-4"
>
```
Give each of the 3 `<Card>` a wrapping `<motion.div variants={fadeUp}>` (Card itself takes no `variants` prop — wrap it) so each cascades in; keep each Card's own `className` (`p-6 border-t-4 border-t-emerald-500 ...` etc. — the colored top border per skill category is intentional, not part of the neutral system, leave it) but drop the now-redundant `hover:-translate-y-1 transition-transform` since Card already provides hover lift. Restyle text inside each card:
- `text-slate-900 dark:text-white` → `text-[var(--text-primary)]`
- `text-slate-500 dark:text-slate-400` (description paragraph) → `text-[var(--text-secondary)]`

Leave the three tag-pill color schemes (`bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300`, indigo, orange variants) untouched — they're intentional per-category accents, not neutral surface.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manual check in browser (dark and light)**

Load `/`, toggle theme, confirm Hero glow drifts slowly behind the photo and the 3 skill cards cascade in on scroll.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "style: restyle hero and technical skills to design tokens with glow and stagger"
```

---

## Task 7: Homepage — Work Experience timeline

**Files:**
- Modify: `app/page.tsx` (Work Experience section, ~lines 190-379)

**Interfaces:**
- Consumes: `lib/motion.ts`, design tokens.

- [ ] **Step 1: Simplify the center line**

Replace:
```tsx
<div className="relative space-y-8 md:pl-0 md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-slate-300 md:before:to-transparent dark:md:before:via-slate-700">
```
with:
```tsx
<div className="relative space-y-8 md:pl-0 md:before:absolute md:before:inset-0 md:before:left-1/2 md:before:-translate-x-px md:before:h-full md:before:w-px md:before:bg-[var(--border)]">
```
(1px solid low-opacity line via the token, no gradient — dropping the glow/gradient per spec §6.)

- [ ] **Step 2: Replace each role's marker with a flat tick**

For the two roles with colored ring markers (SIRCLO: sky, Nexus: emerald, Galva WMS: indigo — three total, each currently `w-4 h-4 rounded-full border-2 border-{color}-500 bg-white dark:bg-slate-900 z-10 box-content shadow-[0_0_0_4px_rgba(...,0.2)]`), replace with a small flat vertical tick keeping that role's hue, no ring shadow, no big circle:
```tsx
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-sky-500 z-10"></div>
```
(same pattern for the Nexus role using `bg-emerald-500`, and the Galva WMS role using `bg-indigo-500` — only the color word changes, everything else identical).

For the two muted markers (Galva Freelance, Galva Intern — currently `w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 z-10 box-content border-4 border-slate-50 dark:border-slate-950`), replace with the same flat-tick shape using the tertiary text token:
```tsx
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 h-6 rounded-full bg-[var(--text-tertiary)] z-10"></div>
```

- [ ] **Step 3: Restyle each role's motion.div and Card**

Each role `motion.div` currently uses `initial/whileInView/viewport` individually — switch each to `variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}` (5 occurrences, one per role — text content unchanged).

Each role's `<Card className="p-6 border-l-4 border-l-{color}-500 hover:shadow-lg transition-all hover:-translate-y-1">` (or `className="p-6 opacity-90 hover:opacity-100 hover:shadow-md transition-all"` for the two muted roles): drop `hover:shadow-lg transition-all hover:-translate-y-1` / `hover:shadow-md transition-all` since Card.tsx now supplies hover lift+shadow itself. Keep `border-l-4 border-l-{color}-500` (per-role accent, untouched) and `opacity-90 hover:opacity-100` on the muted roles (that's the "less prominent" signal for older/freelance roles, keep it).

Apply the neutral substitution table throughout each card's inner content (role title, company name, date badge background, description list, tech-tag pills):
- `text-slate-900 dark:text-white` → `text-[var(--text-primary)]`
- `text-slate-600 dark:text-slate-400` → `text-[var(--text-secondary)]`
- `border-slate-100 dark:border-slate-800` (tech-tag row divider) → `border-[var(--border)]`
- `text-slate-500` / `border-slate-200 dark:border-slate-700` (tech-tag pills) → `text-[var(--text-tertiary)]` / `border-[var(--border)]`
- `bg-slate-100 dark:bg-slate-800` (muted-role date badge) → `bg-[var(--border)]`

Leave each role's colored date-badge background (`bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400`, emerald, indigo variants) untouched — per-role accent.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manual check in browser**

Load `/`, scroll to Work Experience. Expect: thin 1px line, small flat ticks (no glowing rings, no thick gradient), cards reveal on scroll.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "style: simplify work-experience timeline markers and restyle to tokens"
```

---

## Task 8: Homepage — Selected Projects (locked grid) + Certifications rework

**Files:**
- Modify: `app/page.tsx` (Selected Projects ~lines 381-544, Certifications ~lines 558-714)

**Interfaces:**
- Consumes: `lib/motion.ts`, design tokens.
- **Selected Projects is a locked grid** (spec §7.1): `md:grid-cols-5` featured Vault card (image spans 3 cols, text spans 2, image-left) and `md:grid-cols-2` for Tally/Localist (image-top, text-bottom) must not change shape. Only surface/color/shadow/radius/font.
- Certifications has explicit layout freedom (spec §6): rework the 2-col large-card grid into compact horizontal rows. Preserve every piece of visible text (name, issuer, date, ID) except the four action-button labels (Download Certificate / PDF / Verify / Verify on Credly), which become icon-only with the original text preserved as `aria-label`.

- [ ] **Step 1: Restyle Selected Projects (Vault, Tally, Localist) without touching grid structure**

Section heading `motion.div`: switch to `variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}`; `text-slate-900 dark:text-white` → `text-[var(--text-primary)]`; the "View All Projects" link's `text-emerald-600 dark:text-emerald-400 hover:text-emerald-500` → `text-[var(--accent)] hover:text-[var(--accent-soft)]`.

Wrap the projects grid container with stagger (grid structure/classes unchanged, just add motion props):
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
>
```
Each project's existing outer `motion.div` (`initial={{opacity:0,scale:0.95}}...` for Vault, `initial={{opacity:0,y:20}}...` for Tally/Localist) switches to `variants={fadeUp}` (drop `initial`/`whileInView`/`viewport`/`transition` — inherited from the stagger parent now; keep any `className="md:col-span-2"` on the Vault wrapper, that's the locked grid-span).

On all three cards, restyle only the neutral classes on the card shell and text — leave `md:grid-cols-5`/`md:col-span-3`/`md:col-span-2` (Vault) and the standard-card image/content split completely untouched:
- `bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300` → `bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300`
- `bg-slate-100 dark:bg-slate-800` (image placeholder bg on Vault) → `bg-[var(--border)]`
- `border-slate-200 dark:border-slate-800` (Vault's internal divider between image/text) → `border-[var(--border)]`
- `text-slate-900 dark:text-white` (titles) → `text-[var(--text-primary)]`
- `text-slate-600 dark:text-slate-400` (descriptions) → `text-[var(--text-secondary)]`
- `border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900` (tech-tag pills, all three cards) → `border-[var(--border)] bg-[var(--border)]`
- `border-slate-100 dark:border-slate-800/50` (Tally/Localist footer divider) → `border-[var(--border)]`
- `text-slate-600 dark:text-slate-400 hover:text-emerald-500` (Source/Live Site links) → `text-[var(--text-secondary)] hover:text-[var(--accent)]`

Leave each project's per-project accent (Vault=blue, Tally=teal, Localist=fuchsia — badge text, title hover color, "View Details" color, image-area tint background) untouched.

- [ ] **Step 2: Rework Certifications into compact rows**

Replace the entire Certifications `<section>` body (keep `id`-less section, same heading text "Certifications") with:

```tsx
{/* 11. CERTIFICATIONS */}
<section className="space-y-8 py-20 border-t border-[var(--border)]">
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
    >
        <h2 className="text-3xl font-bold text-[var(--text-primary)]">Certifications</h2>
    </motion.div>

    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] divide-y divide-[var(--border)] overflow-hidden"
    >
        {/* ALIBABA CLOUD */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 p-4 hover:bg-[var(--border)]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-[var(--border)] shrink-0">
                <img src="/portfolio/alibaba-logo.png" alt="Alibaba" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="font-bold text-[var(--text-primary)] text-sm truncate">Alibaba Cloud Associate</p>
                <p className="text-xs text-[var(--text-tertiary)] truncate">Cloud Engineer · Issued May 2025 · ID IACA13250500210461L</p>
            </div>
            <a
                href="/portfolio/alibaba-certificate.jpg"
                download="Alibaba_Certificate.jpg"
                aria-label="Download Certificate"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-colors shrink-0"
            >
                <Download className="w-4 h-4" />
            </a>
        </motion.div>

        {/* NVIDIA */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 p-4 hover:bg-[var(--border)]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-[var(--border)] shrink-0">
                <img src="/portfolio/nvidia-logo.jpg" alt="NVIDIA" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="font-bold text-[var(--text-primary)] text-sm truncate">Conversational AI</p>
                <p className="text-xs text-[var(--text-tertiary)] truncate">NVIDIA Deep Learning Institute · Issued Aug 2025 · ID C8GNGRZhTAicYiL42FWjVw</p>
            </div>
            <a
                href="/portfolio/nvidia-certificate.pdf"
                download="NVIDIA_Certificate.pdf"
                aria-label="PDF"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-colors shrink-0"
            >
                <Download className="w-4 h-4" />
            </a>
            <a
                href="https://learn.nvidia.com/certificates?id=zMTLXpF7RrCNjBoxDcKf5A"
                target="_blank"
                aria-label="Verify"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-colors shrink-0"
            >
                <ExternalLink className="w-4 h-4" />
            </a>
        </motion.div>

        {/* AWS COMPUTE */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 p-4 hover:bg-[var(--border)]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-[var(--border)] shrink-0">
                <img src="/portfolio/aws-logo.jpg" alt="AWS" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="font-bold text-[var(--text-primary)] text-sm truncate">Getting Started with Compute</p>
                <p className="text-xs text-[var(--text-tertiary)] truncate">AWS Educate · Issued Oct 2024</p>
            </div>
            <a
                href="https://www.credly.com/badges/2f074998-a38b-4769-9bbc-14503a42893d/linked_in_profile"
                target="_blank"
                aria-label="Verify on Credly"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-colors shrink-0"
            >
                <ExternalLink className="w-4 h-4" />
            </a>
        </motion.div>

        {/* AWS CLOUD 101 */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 p-4 hover:bg-[var(--border)]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-[var(--border)] shrink-0">
                <img src="/portfolio/aws-logo.jpg" alt="AWS" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="font-bold text-[var(--text-primary)] text-sm truncate">Introduction to Cloud 101</p>
                <p className="text-xs text-[var(--text-tertiary)] truncate">AWS Educate · Issued Oct 2024</p>
            </div>
            <a
                href="https://www.credly.com/badges/8bc28ca2-d1db-49e0-802a-f78b4ad922f8/linked_in_profile"
                target="_blank"
                aria-label="Verify on Credly"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-colors shrink-0"
            >
                <ExternalLink className="w-4 h-4" />
            </a>
        </motion.div>
    </motion.div>
</section>
```

`Download` and `ExternalLink` are already imported at the top of `app/page.tsx` (confirmed in the current lucide-react import line) — no new import needed.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Manual check in browser**

Load `/`, compare Selected Projects grid ratios against the pre-change screenshot (Vault image-left 3:2 split, Tally/Localist image-top) — only surface styling should differ. Scroll to Certifications and confirm 4 compact rows with icon-only actions, hover states, and every original label/date/ID text still present (verify via `read_page` or `get_page_text`, not just visually).

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "style: restyle selected-projects cards to tokens; rework certifications into compact rows"
```

---

## Task 9: Homepage — Research / Education / Organization / Volunteering + Contact + Footer

**Files:**
- Modify: `components/Research.tsx`
- Modify: `components/Education.tsx`
- Modify: `components/Organization.tsx`
- Modify: `components/Volunteering.tsx`
- Modify: `components/ContactSection.tsx`
- Modify: `components/Footer.tsx`

**Interfaces:**
- Consumes: `lib/motion.ts` (replaces the local duplicated `fadeUp`/`staggerContainer` consts already sitting in the first four files from prior WIP).

- [ ] **Step 1: In `Research.tsx`, `Education.tsx`, `Organization.tsx`, `Volunteering.tsx` — replace local motion consts with the shared import**

In each of the four files, delete the locally-declared block:
```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
```
and add:
```tsx
import { fadeUp } from "@/lib/motion";
```
(`staggerContainer` is unused in all four of these files — none wraps a real stagger grid, each section's items already reveal individually via their own `whileInView`, which is sufficient per spec §6's "Research / Education / Organizations / Volunteering — restyle only, apply the same system + reveal/stagger" — the per-item reveal already in place from the prior WIP satisfies this. Do not import or wire it in these four files.)

The existing `variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}` usages on every motion.div in these four files are already correct from the prior WIP — leave them as-is.

- [ ] **Step 2: Restyle neutral classes in `Research.tsx`**

- `text-slate-900 dark:text-white` (h2, h3 titles) → `text-[var(--text-primary)]`
- `text-slate-600 dark:text-slate-400` (paragraphs) → `text-[var(--text-secondary)]`
- `bg-slate-50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800` (section bg) → `bg-[var(--surface)]/50 border-y border-[var(--border)]`
- `bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700` (paper image panel) → `bg-[var(--surface)] border-r border-[var(--border)]`
- `bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700` (tag pills) → `bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]`
- `border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800` (Download PDF button) → `border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--border)]`
- `text-slate-500 dark:text-slate-400` (venue label) → `text-[var(--text-tertiary)]`

Leave the two per-paper accent hues (indigo for the HIV/AIDS paper, emerald for the thesis — badge bg, title hover color, "Read..." button bg) untouched. Card's own base styling (via Task 2) already handles the outer surface — `Card`'s `className` prop here only adds `group overflow-hidden border-l-4 border-l-slate-300 dark:border-l-slate-700 group-hover:border-l-{color}-600 ...` — tokenize the neutral half: `border-l-slate-300 dark:border-l-slate-700` → `border-l-[var(--border-hover)]`, keep the colored `group-hover:border-l-{color}` untouched.

- [ ] **Step 3: Restyle neutral classes in `Education.tsx`**

Same substitution table as Step 2, applied to: section heading, each of the 3 entries' `bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800` (or `shadow-sm`) card shell → `bg-[var(--surface)] border border-[var(--border)]`, date/GPA badge `bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300` → `bg-[var(--border)] text-[var(--text-secondary)]`, all `text-slate-900 dark:text-white` / `text-slate-600 dark:text-slate-400` / `text-slate-500` per the same rules, and `border-slate-100 dark:border-slate-800` (inner dividers) → `border-[var(--border)]`. Leave the emerald major/degree text (`text-emerald-600 dark:text-emerald-400`) untouched — that's the existing site accent already correctly emerald, optionally switch to `text-[var(--accent)]` for consistency with the token system (equivalent color, cleaner going forward).

Since these three cards are hand-rolled divs (not `<Card>`), also add the Solid Elevated hover per spec §4: append `hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1` alongside each entry's existing `hover:shadow-lg transition-all duration-300` (replace `hover:shadow-lg` with the dark-aware pair).

- [ ] **Step 4: Restyle neutral classes in `Organization.tsx`**

Same table: section bg `bg-slate-50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800` → `bg-[var(--surface)]/50 border-y border-[var(--border)]`; card shell `bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm` → `bg-[var(--surface)] border border-[var(--border)] shadow-sm`; heading/body text per the standard rules; date badge `bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300` → `bg-[var(--border)] text-[var(--text-secondary)]`; sub-entry left border `border-slate-200 dark:border-slate-700` → `border-[var(--border)]`; tag pills `bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300` → `bg-[var(--border)] text-[var(--text-secondary)]`. Leave the indigo "Activist / Web Development Division" text untouched (existing accent).

- [ ] **Step 5: Restyle neutral classes in `Volunteering.tsx`**

Card shell `bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm` → `bg-[var(--surface)] border border-[var(--border)] shadow-sm`; heading/body text per the standard rules; image-side placeholder `bg-slate-200 dark:bg-slate-800` → `bg-[var(--border)]`. Leave the rose "Educator" badge untouched (per-entry accent).

- [ ] **Step 6: Restyle `ContactSection.tsx`**

- `text-slate-900 dark:text-white` (headline) → `text-[var(--text-primary)]`
- `text-slate-600 dark:text-slate-400` (paragraph) → `text-[var(--text-secondary)]`
- `bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700` (three status pills) → `bg-[var(--border)]/60 border border-[var(--border)]`
- `bg-slate-900 dark:bg-white dark:text-slate-900` (primary CTA) → `bg-[var(--text-primary)] text-[var(--bg)]`
- `text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800` (Copy Email button) → `text-[var(--text-secondary)] bg-[var(--surface)] border border-[var(--border)] hover:bg-[var(--border)]`
- `bg-slate-100 dark:bg-slate-800/50` (social pills base) → `bg-[var(--border)]/60`

Leave the emerald gradient headline span, the emerald "available" pulse dot, and the LinkedIn/GitHub brand-hover colors untouched — all intentional accents. Give the existing decorative blob (`bg-emerald-500/5 dark:bg-emerald-500/10 blur-[100px]`) the `.glow-ambient` class (append to its className) so it drifts like the Hero glow — cheap reuse of Task 5's keyframe, and `useReducedMotion` isn't needed here since it's a plain `<div>`, not going through `AmbientGlow`; instead add `motion-reduce:animate-none` as a Tailwind utility alongside `glow-ambient` to respect reduced motion without pulling in the component (this div isn't a good fit for `AmbientGlow` since it already has bespoke sizing/positioning — a one-utility addition is simpler than refactoring it).

- [ ] **Step 7: Restyle `Footer.tsx`**

- `bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800` → `bg-[var(--bg)] border-t border-[var(--border)]`
- `text-slate-900 dark:text-white` (brand heading, column headings) → `text-[var(--text-primary)]`
- `text-slate-600 dark:text-slate-400` (all link/paragraph text) → `text-[var(--text-secondary)]`
- `hover:text-emerald-500` → `hover:text-[var(--accent)]`
- `border-slate-200 dark:border-slate-800` (bottom bar divider) → `border-[var(--border)]`
- `text-slate-500 dark:text-slate-400` (bottom bar copy) → `text-[var(--text-tertiary)]`

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 9: Manual check in browser (dark and light)**

Load `/`, scroll through Research, Education, Organizations, Volunteering, Contact, Footer in both themes. Confirm no visible text changed and every per-section accent color survived.

- [ ] **Step 10: Commit**

```bash
git add components/Research.tsx components/Education.tsx components/Organization.tsx components/Volunteering.tsx components/ContactSection.tsx components/Footer.tsx
git commit -m "style: restyle research/education/organization/volunteering/contact/footer to tokens; dedupe motion variants"
```

---

## Task 10: `/projects` listing page (locked grid)

**Files:**
- Modify: `app/projects/page.tsx`

**Interfaces:**
- Consumes: `lib/motion.ts`, design tokens. Navbar already wired in Task 4.
- **Locked grid** (spec §7.2): `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, every card image-top/text-bottom. Do not change column counts or the image-top structure.

- [ ] **Step 1: Add the motion import**

```tsx
import { fadeUp, staggerContainer } from "@/lib/motion";
```

- [ ] **Step 2: Restyle the page header**

`<main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans">` → `<main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans">`.

`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white` (h1) → `text-[var(--text-primary)]`; `text-lg text-slate-600 dark:text-slate-400` (intro paragraph) → `text-[var(--text-secondary)]`.

- [ ] **Step 3: Wrap the card grid with stagger, without touching its column classes**

```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
```
Every existing `<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:...}}>` wrapper (11 of them, one per project) becomes `<motion.div variants={fadeUp}>` — drop `initial`/`animate`/`transition`, inherited from the stagger parent. (This switches from `animate` on-mount to `whileInView` scroll-reveal via the parent, matching spec §5.1's "every card/list item should animate in on scroll.")

- [ ] **Step 4: Restyle every card's neutral classes (11 cards, identical pattern)**

Every card shares this exact shell class string — apply the substitution once, identically, to all 11:
- `bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300` → `bg-[var(--surface)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-300`
- `text-slate-900 dark:text-white` (title) → `text-[var(--text-primary)]`
- `text-slate-600 dark:text-slate-400` (description) → `text-[var(--text-secondary)]`
- `bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300` (tech-tag pills) → `bg-[var(--border)] text-[var(--text-secondary)]`
- `border-slate-100 dark:border-slate-800/50` (footer divider) → `border-[var(--border)]`
- `text-slate-900 dark:text-white hover:text-emerald-500` (View Project / Source / Live Site links) → `text-[var(--text-primary)] hover:text-[var(--accent)]`

Leave each card's image-panel tint background (`bg-blue-50 dark:bg-blue-900/10`, teal, fuchsia, emerald, indigo, violet, rose, red, cyan, amber, stone — one per project) untouched — per-project accent, and leave `hover:text-emerald-500` on the title (`group-hover:text-emerald-500`) untouched, it's already the site accent color (optionally could switch to `group-hover:text-[var(--accent)]`, equivalent value — do so for consistency since it's zero-risk).

Do not touch: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, any `h-auto`, `object-cover`, or the image/content div ordering.

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 6: Manual check in browser**

Load `/projects` at desktop and 375px mobile width. Confirm 3/2/1 column behavior unchanged, all 11 cards restyled, stagger-in on scroll.

- [ ] **Step 7: Commit**

```bash
git add app/projects/page.tsx
git commit -m "style: restyle projects listing cards to tokens with stagger, grid untouched"
```

---

## Task 11: All 10 project detail pages (locked 3-col content grid)

**Files:**
- Modify: `app/projects/vault/page.tsx`
- Modify: `app/projects/tally/page.tsx`
- Modify: `app/projects/localist/page.tsx`
- Modify: `app/projects/signlingo/page.tsx`
- Modify: `app/projects/flux/page.tsx`
- Modify: `app/projects/faq-assistant/page.tsx`
- Modify: `app/projects/jet-engine-monitor/page.tsx`
- Modify: `app/projects/f1-undercut-predictor/page.tsx`
- Modify: `app/projects/nexus/page.tsx`
- Modify: `app/projects/asia-trading-export/page.tsx`
- Modify: `app/projects/hammouda-charcoal/page.tsx`

**Interfaces:**
- Consumes: `lib/motion.ts`, design tokens. `<Navbar>` wiring already done (pre-existing WIP, verified working after Task 3).
- **Locked grid** (spec §7.3): sticky nav → header block → `ImageCarousel` → `md:grid-cols-3` content grid (2-col detail sections left, 1-col sidebar right). Do not change grid/column values or reorder image vs. text.

All 10 files share byte-identical structural class strings (confirmed via grep — same nav wrapper, same header pattern, same sidebar-card pattern `p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800`, occurring 3-4 times per file depending on how many sidebar cards that project has). Apply this one substitution table identically to all 10 — only each file's own pre-existing per-project accent color word (already in the code, e.g. `blue` for vault, `teal` for tally) stays as-is; nothing else varies file to file.

- [ ] **Step 1: Add the motion import to each of the 10 files**

```tsx
import { fadeUp } from "@/lib/motion";
```

- [ ] **Step 2: Apply this substitution table to each of the 10 files**

| Old (neutral only) | New |
|---|---|
| `bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200` (on `<main>`) | `bg-[var(--bg)] text-[var(--text-primary)]` |
| `bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400` (header badge) | **leave untouched** — per-project accent |
| `text-slate-900 dark:text-white` (h1, h2, h3, all headings) | `text-[var(--text-primary)]` |
| `text-slate-600 dark:text-slate-400` (all body paragraphs, list items) | `text-[var(--text-secondary)]` |
| `p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800` (every sidebar card: Role, Tech Stack, "How It Fits Together", "Good to Know") | `p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300` |
| `bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700` (tech-stack tag pills) | `bg-[var(--border)] text-[var(--text-secondary)] border border-[var(--border)]` |
| `text-slate-900 dark:text-white hover:text-{accent}-500` (View Source link in header) | keep the per-project `hover:text-{accent}-500`, only swap `text-slate-900 dark:text-white` → `text-[var(--text-primary)]` |

Every `<CheckCircle2>`/feature-list icon color (e.g. `text-blue-500` on Vault) is per-project accent — leave untouched. Every header badge, "Key Features" checkmark color, and title-hover color is per-project accent — leave untouched.

- [ ] **Step 3: Wrap the header's `motion.div` and hero-carousel `motion.div` with the shared `fadeUp` pattern**

Each file's header block currently does `initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}` and the carousel block does `initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:0.2}}`. These animate on mount (not scroll) since they're above the fold — leave the `animate` (not `whileInView`) trigger as-is (correct for header content), but add the shared easing curve for polish: change the header's `animate` call to also carry `transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}` and the carousel's existing `transition={{ delay: 0.2 }}` to `transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}`. No structural change — the imported `fadeUp` const isn't actually needed for these two (they use plain `initial`/`animate`, not `variants`, since they're single elements, not scroll-triggered lists) — **skip Step 1's import for these two blocks specifically**; it's only needed if a file has a genuine scroll-triggered list further down its content grid, which none of these 10 files do (their content is 2-4 static sections/cards, already covered by the mount-animation above). Given that, **drop Step 1 entirely** — no file in this task actually needs `lib/motion.ts`; each file's existing `initial`/`animate` motion props on the header and carousel are sufficient and are being polished in place, not replaced.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manual check in browser**

Load each of the 10 `/projects/<slug>` routes in dark and light mode (spot-check at least vault, tally, and one more with a 3-sidebar-card layout like faq-assistant). Confirm: sticky nav hides/shows on scroll, header/carousel/sidebar all restyled, `md:grid-cols-3` content split and image ordering unchanged, no text differs from before.

- [ ] **Step 6: Commit**

```bash
git add app/projects/vault/page.tsx app/projects/tally/page.tsx app/projects/localist/page.tsx app/projects/signlingo/page.tsx app/projects/flux/page.tsx app/projects/faq-assistant/page.tsx app/projects/jet-engine-monitor/page.tsx app/projects/f1-undercut-predictor/page.tsx app/projects/nexus/page.tsx app/projects/asia-trading-export/page.tsx app/projects/hammouda-charcoal/page.tsx
git commit -m "style: restyle all 10 project detail pages to design tokens, grid structure untouched"
```

---

## Task 12: ThemeToggle restyle + final verification pass

**Files:**
- Modify: `components/ThemeToggle.tsx`

**Interfaces:** none new — this is the last visual piece (spec §6: "stays the current small icon-only circular button... restyle its colors to the new tokens... do not turn it into a larger switch/pill").

- [ ] **Step 1: Restyle `ThemeToggle.tsx`**

```tsx
className="p-2 rounded-full bg-[var(--border)] text-[var(--text-secondary)] transition-all hover:scale-110"
```
(replacing `bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200`). No size or shape change.

- [ ] **Step 2: Run the full verification checklist**

Run: `npm run build`
Expected: exit 0, no type errors.

- [ ] **Step 3: Browser verification pass**

Using the dev server preview:
1. Load `/`, toggle dark/light — confirm every section (hero, skills, timeline, projects, research, education, organizations, volunteering, certifications, contact, footer) renders correctly in both.
2. Load `/projects`, toggle dark/light.
3. Spot-check 3 of the 10 project detail pages in both themes.
4. Scroll down then up on `/` and one project page — navbar hides/reappears without layout jump.
5. Resize to 375px width — nav, hero, project cards, and timeline all stack/read sensibly.
6. In devtools, emulate `prefers-reduced-motion: reduce`, reload `/` — confirm the hero `AmbientGlow` is static (no drift) and the Contact section blob has `.glow-ambient` disabled; navigate to `/projects` — confirm the page-transition fade is skipped (`app/template.tsx`'s `reduceMotion` branch).
7. Use `get_page_text` on `/` before/after comparison (or eyeball against the earlier full-file reads in this plan) to confirm no visible copy changed.

- [ ] **Step 4: Commit**

```bash
git add components/ThemeToggle.tsx
git commit -m "style: restyle theme toggle to design tokens"
```

---

## Self-review notes (from writing this plan)

- **Spec coverage:** §2 tokens → Task 1. §3 typography → Task 1. §4 Solid Elevated / Card.tsx → Task 2. §5.1 scroll reveal + stagger → Tasks 6-11 (per-section). §5.2 hover micro-interactions → Card.tsx base (Task 2) + explicit hover additions on hand-rolled cards (Tasks 6, 7, 9, 10, 11). §5.3 ambient glow → Task 5 (`AmbientGlow`) + Task 6 (Hero) + Task 9 (Contact blob). §5.4 Navbar → Tasks 3-4. §5.5 page transitions → Task 5. §5.6 reduced motion → Task 5 (`template.tsx`, `AmbientGlow`) + Task 9 (Contact blob's `motion-reduce:animate-none`), checked end-to-end in Task 12. §6 section table → every homepage section has an assigned task; Certifications rework → Task 8. §7 grid locks → called out explicitly in Tasks 8, 10, 11 with "do not touch" lists. §8 out-of-scope → enforced via Global Constraints. §9 verification checklist → Task 12 Step 3 maps to it item-for-item.
- **Placeholder scan:** no "TBD"/"handle edge cases"/"similar to Task N" language; the per-file substitution tables (Tasks 9, 10, 11) are exact literal find→replace pairs, not descriptions of intent, so an implementer doesn't need to infer anything.
- **Type consistency:** `fadeUp`/`staggerContainer` signatures defined once in Task 1 and referenced identically everywhere; `Navbar({ children })` and `AmbientGlow({ className })` prop shapes match their Task 3/5 definitions in every later usage.
