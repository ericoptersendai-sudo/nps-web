import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { ANALYTICS_CONSENT_KEY, loadGoogleAnalytics, trackEvent, trackPageView } from "../utils/analytics";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";

export function CookieConsent({ onAccepted }: { onAccepted?: () => void }) {
  const { settings } = useSettings();
  const t = (text: string) => translate(text, settings.language);
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    const savedChoice = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    setChoice(savedChoice);
    if (savedChoice === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    setChoice(value);
    if (value === "accepted") {
      loadGoogleAnalytics();
      trackPageView(window.location.pathname);
      trackEvent("analytics_consent_accepted");
      onAccepted?.();
    }
  }

  if (choice === "accepted") return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-slate-950 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-[var(--accent)] dark:bg-white/10">
          <Cookie size={22} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-black text-slate-950 dark:text-white">{t("Cookie choices")}</p>
          {choice === "declined" && (
            <p className="mt-3 rounded-lg bg-amber-50 px-4 py-3 text-sm font-extrabold text-amber-800 dark:bg-amber-950/40 dark:text-amber-100">
              {t("Cookies must be accepted before using this website. They keep settings, accounts, progress, and anonymous usage tracking working.")}
            </p>
          )}
          <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {t("This website uses local browser storage for settings and progress. If you accept, Google Analytics also tracks anonymous site usage. No usernames, passcodes, or answers are sent.")}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button onClick={() => choose("accepted")} className="rounded-lg bg-[var(--accent)] px-4 py-2 font-extrabold text-white">
              {t("Accept cookies")}
            </button>
            <button onClick={() => choose("declined")} className="rounded-lg border border-slate-200 px-4 py-2 font-extrabold text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-slate-100">
              {t("Decline cookies")}
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
