import { Languages, Moon, Palette, Sun, Type, Volume2 } from "lucide-react";
import { useSettings } from "../context/SettingsContext";
import { languageOptions, translate } from "../utils/i18n";
import type { Language } from "../utils/i18n";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";

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

export function SettingsPage() {
  const { settings, updateSettings } = useSettings();
  const t = (text: string) => translate(text, settings.language);

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
      </div>
    </>
  );
}
