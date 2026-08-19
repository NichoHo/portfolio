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
