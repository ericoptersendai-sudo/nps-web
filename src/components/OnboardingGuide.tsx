import { BookOpenCheck, ClipboardCheck, GraduationCap, Settings, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const GUIDE_KEY_PREFIX = "nps-guide-seen";

const guideSteps = [
  {
    icon: GraduationCap,
    title: "Start in Prep",
    body: "Use Prep Mode for unlimited practice problems with worked solutions before you take a test.",
    to: "/prep",
    action: "Open Prep"
  },
  {
    icon: ClipboardCheck,
    title: "Take the Test",
    body: "Use Test when you are ready for a 50-question proficiency-style check for your selected grade and subject.",
    to: "/test",
    action: "Open Test"
  },
  {
    icon: BookOpenCheck,
    title: "Pick the Grade",
    body: "Choose the grade you are trying to skip into so the app gives you the right level of difficulty.",
    to: "/grade",
    action: "Choose Grade"
  },
  {
    icon: Settings,
    title: "Adjust Settings",
    body: "Change language, theme, text size, and other settings to make the website easier to use.",
    to: "/settings",
    action: "Open Settings"
  }
];

export function OnboardingGuide() {
  const { currentUser } = useAuth();
  const [seen, setSeen] = useState<boolean | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setSeen(false);
      return;
    }
    setSeen(localStorage.getItem(`${GUIDE_KEY_PREFIX}-${currentUser.toLowerCase()}`) === "true");
  }, [currentUser]);

  if (!currentUser) return null;
  const guideKey = `${GUIDE_KEY_PREFIX}-${currentUser.toLowerCase()}`;
  if (seen !== false) return null;

  function closeGuide() {
    localStorage.setItem(guideKey, "true");
    setSeen(true);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm">
      <section className="w-full max-w-4xl rounded-lg border border-white/15 bg-white p-5 shadow-2xl dark:bg-slate-950">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">Welcome</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">Here is how to use the app</h2>
            <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">This guide only appears once for this account on this browser.</p>
          </div>
          <button onClick={closeGuide} aria-label="Close guide" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-slate-100">
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {guideSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[var(--accent)] shadow-sm dark:bg-slate-900">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{step.body}</p>
                    <Link onClick={closeGuide} to={step.to} className="mt-3 inline-flex rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-extrabold text-white">
                      {step.action}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
