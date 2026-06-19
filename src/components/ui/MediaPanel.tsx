import type { ReactNode } from "react";

type MediaPanelProps = {
  label?: string;
  className?: string;
  children?: ReactNode;
};

export function MediaPanel({ label, className = "", children }: MediaPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-stone-600/60 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="bg-roof-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="animate-ambient-glow pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl motion-reduce:animate-none" />
      <div className="animate-ambient-glow pointer-events-none absolute -bottom-20 -left-8 h-56 w-56 rounded-full bg-slate-500/20 blur-3xl motion-reduce:animate-none" style={{ animationDelay: "2s" }} />

      <svg aria-hidden viewBox="0 0 400 200" className="pointer-events-none absolute bottom-0 left-0 w-full opacity-35" preserveAspectRatio="none">
        <path d="M0 140 L80 90 L160 110 L240 70 L320 95 L400 60 L400 200 L0 200 Z" fill="url(#roofline)" />
        <path d="M0 120 L120 80 L220 100 L400 55 L400 140 L0 160 Z" fill="url(#roofplane)" opacity="0.5" />
        <defs>
          <linearGradient id="roofline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#78716c" />
            <stop offset="100%" stopColor="#44403c" />
          </linearGradient>
          <linearGradient id="roofplane" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#57534e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#292524" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex min-h-[22rem] flex-col gap-6 p-6 sm:min-h-[26rem] sm:justify-between">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-stone-600 bg-stone-900/80 px-3 py-1 text-xs font-medium text-stone-200">
          <span className="motion-safe:animate-status-pulse motion-reduce:animate-none inline-flex h-2 w-2 rounded-full bg-amber-400" />
          {label ?? "Roof inspection ready"}
        </span>
        {children}
      </div>
    </div>
  );
}
