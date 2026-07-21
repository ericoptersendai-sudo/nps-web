import { FormEvent, useState } from "react";
import { BarChart3, Languages, Moon, Palette, Sun, Type, Volume2 } from "lucide-react";
import { useSettings } from "../context/SettingsContext";
import { languageOptions, translate } from "../utils/i18n";
import type { Language } from "../utils/i18n";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useUsageAnalytics } from "../context/UsageAnalyticsContext";

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-4 font-bold dark:border-white/10">
      {label}
      <input className="h-5 w-5 accent-[var(--accent)]" type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}

function ColorControl({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-4 font-bold dark:border-white/10">
      {label}
      <input className="h-10 w-14 rounded border-0 bg-transparent" type="color" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function topEntries(counts: Record<string, number>) {
  return Object.entries(counts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 5);
}

const USAGE_PASSWORD = "140204";

export function SettingsPage() {
  const { settings, updateSettings } = useSettings();
  const { stats } = useUsageAnalytics();
  const [usagePassword, setUsagePassword] = useState("");
  const [usageUnlocked, setUsageUnlocked] = useState(() => sessionStorage.getItem("nps-usage-unlocked") === "true");
  const [usageError, setUsageError] = useState("");
  const t = (text: string) => translate(text, settings.language);

  function unlockUsage(event: FormEvent) {
    event.preventDefault();
    if (usagePassword === USAGE_PASSWORD) {
      sessionStorage.setItem("nps-usage-unlocked", "true");
      setUsageUnlocked(true);
      setUsageError("");
      setUsagePassword("");
      return;
    }
    setUsageError("Incorrect password.");
  }

  return (
    <>
      <PageHeader eyebrow={t("Settings")} title={t("Make the way this website looks, reads, and sound.")} />
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel>
          <div className="flex items-center gap-3">
            {settings.darkMode ? <Moon className="text-[var(--accent)]" /> : <Sun className="text-[var(--accent)]" />}
            <h2 className="text-2xl font-black">{t("Appearance")}</h2>
          </div>
          <div className="mt-5 grid gap-3">
            <Toggle label={t("Dark Mode")} checked={settings.darkMode} onChange={(darkMode) => updateSettings({ darkMode })} />
            <Toggle label={t("Light Mode")} checked={!settings.darkMode} onChange={(lightMode) => updateSettings({ darkMode: !lightMode })} />
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center gap-3">
            <Type className="text-[var(--accent)]" />
            <h2 className="text-2xl font-black">{t("Accessibility")}</h2>
          </div>
          <div className="mt-5 grid gap-3">
            <Toggle label={t("Dyslexia Font")} checked={settings.dyslexiaFont} onChange={(dyslexiaFont) => updateSettings({ dyslexiaFont })} />
            <Toggle label={t("Large Text")} checked={settings.largeText} onChange={(largeText) => updateSettings({ largeText })} />
            <Toggle label={t("High Contrast Mode")} checked={settings.highContrast} onChange={(highContrast) => updateSettings({ highContrast })} />
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center gap-3">
            <Languages className="text-[var(--accent)]" />
            <h2 className="text-2xl font-black">{t("Language")}</h2>
          </div>
          <label className="mt-5 block font-bold">
            {t("Interface language")}
            <select
              className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800 outline-none transition focus:border-[var(--accent)] dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
              value={settings.language}
              onChange={(event) => updateSettings({ language: event.target.value as Language })}
            >
              {languageOptions.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </select>
          </label>
        </Panel>

        <Panel>
          <div className="flex items-center gap-3">
            <Volume2 className="text-[var(--accent)]" />
            <h2 className="text-2xl font-black">{t("Audio and Brightness")}</h2>
          </div>
          <div className="mt-5 grid gap-5">
            <label className="font-bold">
              {t("Volume")}: {settings.volume}%
              <input className="mt-3 w-full accent-[var(--accent)]" type="range" min="0" max="100" value={settings.volume} onChange={(event) => updateSettings({ volume: Number(event.target.value) })} />
            </label>
            <label className="font-bold">
              {t("Brightness")}: {settings.brightness}%
              <input className="mt-3 w-full accent-[var(--accent)]" type="range" min="70" max="120" value={settings.brightness} onChange={(event) => updateSettings({ brightness: Number(event.target.value) })} />
            </label>
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center gap-3">
            <Palette className="text-[var(--accent)]" />
            <h2 className="text-2xl font-black">{t("Theme Colors")}</h2>
          </div>
          <div className="mt-5 grid gap-3">
            <ColorControl label={t("Accent color")} value={settings.accentColor} onChange={(accentColor) => updateSettings({ accentColor })} />
            <ColorControl label={t("Background color")} value={settings.backgroundColor} onChange={(backgroundColor) => updateSettings({ backgroundColor })} />
            <ColorControl label={t("Sidebar color")} value={settings.sidebarColor} onChange={(sidebarColor) => updateSettings({ sidebarColor })} />
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center gap-3">
            <BarChart3 className="text-[var(--accent)]" />
            <h2 className="text-2xl font-black">{t("Anonymous Usage")}</h2>
          </div>
          {!usageUnlocked ? (
            <form onSubmit={unlockUsage} className="mt-5 grid gap-3">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{t("Enter the usage password to view anonymous stats.")}</p>
              <input
                value={usagePassword}
                onChange={(event) => setUsagePassword(event.target.value)}
                type="password"
                inputMode="numeric"
                autoComplete="off"
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950 dark:focus:ring-blue-950"
                placeholder={t("Password")}
              />
              {usageError && <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-extrabold text-rose-700 dark:bg-rose-950/40 dark:text-rose-100">{t(usageError)}</p>}
              <button type="submit" className="rounded-lg bg-[var(--accent)] px-5 py-3 font-extrabold text-white shadow-soft">
                {t("Unlock Usage")}
              </button>
            </form>
          ) : (
            <>
              <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {t("These counts stay in this browser. They do not include usernames, passcodes, or school-wide totals from other devices.")}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-sm font-extrabold text-slate-500 dark:text-slate-300">{t("Site opens")}</p>
                  <p className="mt-1 text-3xl font-black">{stats.siteOpens}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-sm font-extrabold text-slate-500 dark:text-slate-300">{t("Tests completed")}</p>
                  <p className="mt-1 text-3xl font-black">{stats.testsCompleted}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-sm font-extrabold text-slate-500 dark:text-slate-300">{t("Events")}</p>
                  <p className="mt-1 text-3xl font-black">{stats.eventsRecorded}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-sm font-extrabold text-slate-500 dark:text-slate-300">{t("Account logins")}</p>
                  <p className="mt-1 text-3xl font-black">{stats.accountLogins}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="text-sm font-extrabold text-slate-500 dark:text-slate-300">{t("Accounts created")}</p>
                  <p className="mt-1 text-3xl font-black">{stats.accountsCreated}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="font-black">{t("Most opened pages")}</p>
                  <div className="mt-2 grid gap-2">
                    {topEntries(stats.pageViews).map(([label, count]) => (
                      <p key={label} className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold dark:bg-white/5">
                        <span>{label === "/" ? t("Home") : label}</span>
                        <span>{count}</span>
                      </p>
                    ))}
                    {topEntries(stats.pageViews).length === 0 && <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">{t("No page views yet.")}</p>}
                  </div>
                </div>
                <div>
                  <p className="font-black">{t("Score bands")}</p>
                  <div className="mt-2 grid gap-2">
                    {topEntries(stats.scoreBands).map(([label, count]) => (
                      <p key={label} className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold dark:bg-white/5">
                        <span>{label}</span>
                        <span>{count}</span>
                      </p>
                    ))}
                    {topEntries(stats.scoreBands).length === 0 && <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">{t("No completed tests yet.")}</p>}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="font-black">{t("Recent anonymous events")}</p>
                <div className="mt-2 grid gap-2">
                  {stats.recentEvents.map((event) => (
                    <p key={event} className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold dark:bg-white/5">{t(event)}</p>
                  ))}
                  {stats.recentEvents.length === 0 && <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">{t("No events yet.")}</p>}
                </div>
              </div>

            </>
          )}
        </Panel>
      </div>
    </>
  );
}
