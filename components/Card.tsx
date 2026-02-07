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
        // BASE STYLES
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        
        // LIGHT MODE (Clean, subtle grey border)
        "bg-white border border-slate-200 shadow-sm hover:shadow-md",
        
        // DARK MODE (Glassy, slate border)
        "dark:bg-slate-900/50 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:shadow-slate-900/50",
        
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};