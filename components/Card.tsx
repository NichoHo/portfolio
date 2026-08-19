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
