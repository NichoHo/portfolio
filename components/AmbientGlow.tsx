export function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[60px] glow-ambient ${className}`}
    />
  );
}
