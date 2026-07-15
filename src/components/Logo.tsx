import { Sparkles } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-[var(--accent)] shadow-soft">
        <Sparkles size={22} strokeWidth={2.5} />
      </div>
      {!compact && (
        <div>
          <p className="text-lg font-black leading-tight text-white">NPS</p>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Norman Public Schools</p>
        </div>
      )}
    </div>
  );
}
