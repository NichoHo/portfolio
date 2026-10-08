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
        "relative overflow-hidden rounded-2xl p-6 transition-colors duration-300",
        "border border-[var(--border-strong)] hover:border-[var(--border-strong-hover)]",
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
