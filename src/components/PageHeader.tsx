import type { ReactNode } from "react";

export function PageHeader({ title, eyebrow, children }: { title: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <header className="mb-6 flex flex-col gap-3">
      {eyebrow && <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>}
      <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
        <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h1>
        {children}
      </div>
    </header>
  );
}
