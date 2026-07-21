import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const COOKIE_KEY = "nps-cookie-consent";

export function CookieConsent() {
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    setChoice(localStorage.getItem(COOKIE_KEY));
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(COOKIE_KEY, value);
    setChoice(value);
  }

  if (choice) return null;

  return (
    <div className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-slate-950 md:bottom-5 md:left-auto md:right-5 md:mx-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-[var(--accent)] dark:bg-white/10">
          <Cookie size={22} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-black text-slate-950 dark:text-white">Cookie choices</p>
          <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
            This website uses local browser storage for settings, progress, login, and cookie choice. You can accept or decline.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button onClick={() => choose("accepted")} className="rounded-lg bg-[var(--accent)] px-4 py-2 font-extrabold text-white">
              Accept cookies
            </button>
            <button onClick={() => choose("declined")} className="rounded-lg border border-slate-200 px-4 py-2 font-extrabold text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-slate-100">
              Decline cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
