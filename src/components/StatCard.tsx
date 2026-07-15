import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export function StatCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string | number }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-slate-900">
      <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
        <Icon size={20} />
      </div>
      <p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300">{label}</p>
    </motion.div>
  );
}
