import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function DropIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 3C24 3 44 26.5 44 38C44 49 35 57 24 57C13 57 4 49 4 38C4 26.5 24 3 24 3Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M15 38C17.5 43.5 21 46 24 46C27 46 30.5 43.5 33 38"
        stroke="var(--signal)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-3", className)}>
      <DropIcon
        className={cn(
          "h-8 w-auto transition-transform duration-500 group-hover:-translate-y-0.5",
          inverted ? "text-white" : "text-navy",
        )}
      />
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          inverted ? "text-white" : "text-navy",
        )}
      >
        badkamer<span className="text-signal">365</span>
        <span className="text-sm font-medium opacity-70">.nl</span>
      </span>
    </Link>
  );
}
