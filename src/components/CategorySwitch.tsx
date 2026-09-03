import { cn } from "@/lib/utils";

const categories = [
  { label: "Badkamer", domain: "badkamer365.nl", color: "bg-cat-badkamer", current: true },
  { label: "Sanitair", domain: "sanitair365.nl", color: "bg-cat-sanitair" },
  { label: "Keuken", domain: "keuken365.nl", color: "bg-cat-keuken" },
  { label: "Vloeren", domain: "vloeren365.nl", color: "bg-cat-vloeren" },
];

export function CategorySwitch({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {categories.map((c, i) => (
        <a
          key={c.domain}
          href={`https://${c.domain}`}
          className={cn(
            "group flex items-center justify-between rounded-full px-6 py-4 text-white transition-all duration-500 hover:translate-x-1",
            c.color,
            c.current && "ring-2 ring-white/60 ring-offset-2 ring-offset-navy",
          )}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <span className="font-semibold">{c.label}</span>
          <span className="text-sm font-medium opacity-80 transition-opacity group-hover:opacity-100">
            {c.domain}
          </span>
        </a>
      ))}
    </div>
  );
}
