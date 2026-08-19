# Portfolio Redesign — Implementation Prompt

You are redesigning an existing Next.js portfolio site. This document is the complete brief — read it fully before touching any code. It was produced through a design review with the site's owner (palette, typography, card style, and section decisions below are already approved, not open for reinterpretation). Where something is marked "your call," use good judgment; everything else is a fixed requirement.

## 0. Read this first — the two rules that override everything else

1. **Do not change any text content, anywhere.** Every heading, paragraph, list item, tag/badge label, date, and link label stays byte-for-byte identical to what's in the code today. This is a visual/styling and motion pass — not a copywriting pass, not a content reorganization.
2. **Project card layouts are locked** in all three places projects appear (full detail in section 5). You may restyle their surfaces (color, border, shadow, radius, font). You may **never** change their grid structure, column ratios, image aspect ratios/crop, or image-to-text position.

If you're ever unsure whether a change touches #1 or #2, don't make it — ask instead, or skip it and note it as a question.

## 1. Project context

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3, framer-motion 12 (already installed — do not add new animation libraries), lucide-react (icons), next-themes (dark/light toggle, class-based).
- **Structure:**
  - `app/page.tsx` — the home page. Contains, in order: navbar, hero, technical skills, work experience, selected projects, research, education, organizations, volunteering, certifications, contact, footer. All inline in one file.
  - `app/projects/page.tsx` — `/projects`, a grid listing of every project as a uniform card.
  - `app/projects/<slug>/page.tsx` — one file per project (10 total: `asia-trading-export`, `f1-undercut-predictor`, `faq-assistant`, `flux`, `hammouda-charcoal`, `jet-engine-monitor`, `localist`, `nexus`, `signlingo`, `tally`, `vault`). Each follows the same layout: sticky nav → header block (badge, title, description, source link) → hero `ImageCarousel` → 3-column content grid (2-col detail sections, 1-col sidebar cards for Role/Tech Stack/etc).
  - `components/Card.tsx` — shared base card component (`cn()`-merged classes), reused by Technical Skills, Certifications, and other non-project sections. **Not** currently used by the project cards in `page.tsx` / `projects/page.tsx` (those are hand-rolled divs).
  - `components/ContactSection.tsx`, `Education.tsx`, `Footer.tsx`, `ImageCarousel.tsx`, `Organization.tsx`, `Research.tsx`, `ThemeProvider.tsx`, `ThemeToggle.tsx`, `Volunteering.tsx`.
  - `app/globals.css`, `app/layout.tsx` (root layout, currently loads Geist Sans/Mono), `tailwind.config.ts`.
- **No shared `<Navbar>` component exists today** — the nav markup is duplicated inline in `app/page.tsx`, `app/projects/page.tsx`, and all 10 project detail pages, in two variants: a full nav (logo + anchor links + theme toggle, on the home page) and a simple back-link nav (← Back to X + theme toggle, on every other page). See section 6 for what to do about this.

## 2. Design tokens

Dark is the default theme. Light is a fully-restyled companion, not an inverted afterthought — same structure and rigor, different palette.

### Dark (default)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#060706` | page background |
| `--surface` | `#0d0f0d` | card background |
| `--border` | `rgba(255,255,255,0.08)` | card/nav borders (idle) |
| `--border-hover` | `rgba(255,255,255,0.14)` | card borders on hover |
| `--text-primary` | `#f2f5f2` | headings, primary text |
| `--text-secondary` | `#a8ada9` | body copy |
| `--text-tertiary` | `#8b918c` | meta labels, timestamps, captions |
| `--accent` | `#10b981` | links, CTAs, highlights, icons |
| `--accent-soft` | `#34d399` | secondary glow, hover accents |

### Light (companion)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f8fafc` (slate-50) | page background — unchanged from current |
| `--surface` | `#ffffff` | card background |
| `--border` | `#e2e8f0` (slate-200) | card/nav borders |
| `--text-primary` | `#0f172a` (slate-900) | headings, primary text |
| `--text-secondary` | `#475569` (slate-600) | body copy |
| `--text-tertiary` | `#64748b` (slate-500) | meta labels |
| `--accent` | `#10b981` | same accent as dark |
| `--accent-soft` | `#34d399` | same as dark |

**Important note:** `#10b981` is Tailwind's `emerald-500` — this is already the accent color used throughout the current codebase. You are not renaming or replacing the accent; you're changing the *background it sits on* (near-black instead of white) and *how it's used* (ambient glow, not just flat fills).

Implement these as CSS custom properties in `app/globals.css` (light values on `:root`, dark values under `.dark` or the existing dark-mode selector — check how `next-themes`/Tailwind's `darkMode: "class"` is wired before picking the selector), then reference them from Tailwind via arbitrary values (`bg-[var(--surface)]`) or by extending `tailwind.config.ts` `theme.extend.colors` with these token names. Either approach is fine — pick whichever keeps the diff smaller.

## 3. Typography

Replace Geist Sans with **Manrope** (weights 500/600/700/800) as the primary typeface for all headings and body text, site-wide. Update `app/layout.tsx`'s `next/font/google` import from `Geist` to `Manrope`, and update the CSS variable / Tailwind font-family wiring accordingly.

Keep **Geist Mono** only for small monospace accents — timeline dates, version-style badges — where a technical contrast currently reads well. Do not introduce a third font family.

## 4. Surface style — "Solid Elevated"

One card treatment, used everywhere (skills, timeline entries, certifications, contact cards, project cards): opaque `--surface` background, 1px `--border`, `rounded-2xl`, shadow that strengthens on hover, slight lift (`translateY(-2px to -4px)`) on hover. **No glassmorphism/blur, no gradient borders** — that was considered and explicitly rejected in favor of this cleaner, more Vercel-like surface.

Since `components/Card.tsx` is already shared across most non-project sections, **update it in place** rather than creating a new component:

```tsx
export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
      "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5",
      "dark:bg-[#0d0f0d] dark:border-white/[0.08] dark:shadow-none",
      "dark:hover:border-white/[0.14] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] dark:hover:-translate-y-1",
      className
    )}
  >
    <div className="relative z-10 h-full">{children}</div>
  </div>
);
```
(Illustrative — adjust to however you end up wiring the tokens, but match this look and this hover behavior.)

The project cards in `app/page.tsx` and `app/projects/page.tsx` are hand-rolled divs, not `<Card>`. Restyle their existing `className` strings directly to the same Solid Elevated look — do not migrate their markup into `<Card>`, since that risks disturbing the locked grid structure.

Background glows (radial, blurred ~60px, accent-colored, `opacity` 0.4–0.55) are a signature touch for the hero and major section dividers. Use them sparingly — not on every card, or they stop reading as a highlight.

## 5. Motion system

The owner's explicit direction: **"I want it to be smooth by having animations. I want it to look like polished Framer templates."** — this is not a subtle, minimal-motion site. Every section should feel considered and alive on scroll and on interaction. The one guardrail: nothing gimmicky. No cursor-follow effects, no scroll-jacking, no heavy 3D tilts, no parallax layers fighting each other. Smooth and abundant, not flashy.

### 5.1 Scroll reveals

Every major section and every card/list item should animate in on scroll, not just appear. Use a consistent variant and a slightly premium easing curve (avoid the default linear/ease):

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// usage
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
>
  ...
</motion.div>
```

For grids/lists (skills cards, project cards, timeline entries, certification rows), stagger the children so they cascade in rather than popping simultaneously:

```tsx
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
```
Wrap the grid container with `variants={staggerContainer}` + `initial="hidden"` + `whileInView="visible"`, and give each child `variants={fadeUp}` (no need to repeat `initial`/`whileInView` on children — they inherit from the parent).

### 5.2 Hover micro-interactions

Keep and refine what's already there: card lift + shadow strengthen on hover, button scale (~1.03–1.05), link arrow/gap shift on hover (e.g. `gap-2` → `gap-3` with a transition). Apply this consistently to every interactive card and link, not just some.

### 5.3 Ambient background glow

Hero and major section-divider glows should drift slowly, not sit static — this is a big part of what makes Framer-style templates feel "alive":

```css
@keyframes glow-drift {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  50% { transform: translate(20px, -15px) scale(1.08); opacity: 0.65; }
}
.glow-ambient {
  animation: glow-drift 12s ease-in-out infinite;
}
```
Keep the movement small and the duration slow (10–15s) — it should read as ambient, not noticeable unless someone's actually watching for it.

### 5.4 Navbar — hide on scroll down, show on scroll up

**This is a required behavior change**, not just a restyle. Keep the navbar's current visual design (logo/links or back-link + theme toggle, sticky, blurred background) — only add scroll-direction awareness: scrolling down hides it, scrolling up reveals it immediately.

Since the nav markup is currently duplicated across 12 files (see section 1), **extract it into a shared component first**, so this behavior is implemented once:

```tsx
// components/Navbar.tsx
"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function Navbar({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const scrollingDown = latest > previous;
    setHidden(scrollingDown && latest > 80); // don't hide near the very top
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

Then have each page render `<Navbar>` with its existing inner content (the home page's full link set, or the sub-pages' back-link) passed as `children` — same visual content as today, just wrapped in the shared shell that owns the show/hide behavior. Keep it `sticky`, not `fixed` — the transform-based hide works fine on a sticky element and avoids having to compensate layout for a fixed-position nav.

### 5.5 Page transitions

Add a light fade/slide-in on route change (home → `/projects` → project detail) so navigation feels continuous rather than a hard cut. The simplest correct way to do this in the App Router is a `template.tsx`, which Next.js re-mounts on every navigation (unlike `layout.tsx`, which persists):

```tsx
// app/template.tsx
"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```
This gives an entry animation only (no exit), which is deliberately simpler and more robust than wiring up `AnimatePresence` around the root layout — good enough for "smooth," without the added fragility. Only reach for `AnimatePresence` if an entry-only fade feels insufficient once it's built.

### 5.6 Accessibility

Respect `prefers-reduced-motion`. framer-motion exposes a `useReducedMotion()` hook — use it to skip or shorten the ambient glow drift and page-transition motion for users who've asked for reduced motion at the OS level. Scroll-reveal and hover states can stay (they're triggered by explicit user action/scroll, not autoplaying), but looping/ambient animation should not run unconditionally.

## 6. Section-by-section plan

| Section | Layout | What changes |
|---|---|---|
| Navbar | keep | Extract to shared `components/Navbar.tsx`; add hide-on-scroll-down/show-on-scroll-up (5.4); restyle to dark-first system |
| Theme toggle | keep | Stays the current small icon-only circular button (Moon/Sun). Restyle its colors to the new tokens. **Do not** turn it into a larger switch/pill — explicitly flagged as a risk of looking tacky |
| Hero | keep | Restyle: dark bg, ambient glow (5.3) behind photo/heading, Manrope type, restyled CTAs, entrance animation |
| Technical Skills (3-card grid) | keep | Restyle to Solid Elevated + stagger-in on scroll |
| **Work Experience (timeline)** | **keep the zigzag**, simplify markers | Drop the glowing circular nodes and thick gradient center line. Replace with a thin (1px, low-opacity) center line and a small flat tick mark — no glow, no big circle. Cards move to Solid Elevated |
| Selected Projects (home) | **locked** — see section 7 | Restyle to Solid Elevated only; keep scroll-reveal, add stagger |
| Research / Education / Organizations / Volunteering | keep | Restyle only, apply the same system + reveal/stagger |
| **Certifications** | **rework, more compact** | Current 2-col grid of large cards (logo + issuer + dates + verify/download buttons) is too bulky for 4 items. Replace with a tighter, denser treatment — compact horizontal rows: small logo, name + issuer inline, issue date, small icon-only verify/download actions — instead of large cards. If the exact spacing isn't obvious, err toward denser/simpler over another large card |
| Contact section | keep | Restyle only |
| Footer | keep | Restyle only |
| `/projects` listing page | **locked** — see section 7 | Restyle to Solid Elevated only; navbar gets the shared component (5.4) |
| Individual project pages (all 10) | **locked** — see section 7 | Restyle to Solid Elevated only; navbar gets the shared component (5.4); apply page transition (5.5) |

## 7. Project layout lock — exact detail

This is the constraint the owner cares about most. Read carefully.

1. **Home page "Selected Projects"** (`app/page.tsx`): the featured Vault card uses `md:grid-cols-5` with the image spanning 3 columns and text spanning 2, image on the left. The standard cards (Tally, Localist) stack image-top, text-bottom in a `md:grid-cols-2` grid. **Keep these exact ratios, keep image-left for the featured card, keep image-top for standard cards.**
2. **`/projects` listing** (`app/projects/page.tsx`): a responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` grid of uniform cards, each image-top/text-bottom. **Keep the column counts and image-top structure.**
3. **Individual project pages**: sticky nav → header block → hero `ImageCarousel` → `md:grid-cols-3` content grid (2 columns of detail sections on the left, 1 column of sidebar cards — Role, Tech Stack, "How It Fits Together," "Good to Know" — on the right). **Keep this exact structure for all 10 project pages.**

In all three cases: change border, background, shadow, radius, color, and font freely. Do not change grid-template-columns values, column-span values, image `object-fit`/aspect handling, or the order of image vs. text.

## 8. Out of scope

- No copy edits, no reordering of content, no adding/removing sections.
- No change to project grid ratios, image aspect ratios, or image position in any of the three project surfaces (section 7).
- No cursor-follow effects, scroll-jacking, or heavy 3D/parallax motion.
- No new animation library (framer-motion is already installed and sufficient) and no new font families beyond Manrope (+ existing Geist Mono for accents).

## 9. Verification checklist

Before considering this done:

- [ ] `npm run build` succeeds with no type errors.
- [ ] Every page (`/`, `/projects`, all 10 `/projects/<slug>`) renders correctly in both dark and light mode.
- [ ] Navbar hides on scroll-down and reappears on scroll-up, on every page, without layout jump.
- [ ] Project card grids visually match the original column/image ratios (compare side-by-side with the pre-redesign screenshots if possible) — only surface styling differs.
- [ ] No text differs from the original — a diff of visible copy against the pre-redesign version should be empty.
- [ ] Reduced-motion users don't get the ambient glow drift or page-transition animation.
- [ ] Mobile viewport (375px) still works: nav collapses sensibly, project cards stack, timeline reads top-to-bottom.

---

**Reminder of the two rules from section 0:** no text content changes, and project grid layouts (section 7) are locked to restyling only. Everything else in this document is the target to build toward.
