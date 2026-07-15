import type { ReactNode } from "react";

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-lg border border-slate-200/80 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-slate-900 ${className}`}>{children}</section>;
}
