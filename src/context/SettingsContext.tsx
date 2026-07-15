import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Language } from "../utils/i18n";

export type Settings = {
  darkMode: boolean;
  dyslexiaFont: boolean;
  largeText: boolean;
  highContrast: boolean;
  language: Language;
  volume: number;
  brightness: number;
  accentColor: string;
  backgroundColor: string;
  sidebarColor: string;
};

const defaultSettings: Settings = {
  darkMode: false,
  dyslexiaFont: false,
  largeText: false,
  highContrast: false,
  language: "English",
  volume: 70,
  brightness: 100,
  accentColor: "#2563eb",
  backgroundColor: "#f6f8fc",
  sidebarColor: "#132238"
};

type SettingsContextValue = {
  settings: Settings;
  updateSettings: (patch: Partial<Settings>) => void;
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [storedSettings, setSettings] = useLocalStorage<Settings>("nps-settings", defaultSettings);
  const settings = { ...defaultSettings, ...storedSettings };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", settings.darkMode);
    root.classList.toggle("dyslexic", settings.dyslexiaFont);
    root.classList.toggle("large-text", settings.largeText);
    root.classList.toggle("high-contrast", settings.highContrast);
    root.lang = settings.language === "Spanish" ? "es" : settings.language === "Chinese" ? "zh" : settings.language === "French" ? "fr" : settings.language === "Vietnamese" ? "vi" : settings.language === "Arabic" ? "ar" : settings.language === "Korean" ? "ko" : "en";
    root.dir = settings.language === "Arabic" ? "rtl" : "ltr";
    root.style.setProperty("--accent", settings.accentColor);
    root.style.setProperty("--app-bg", settings.darkMode ? "#07111f" : settings.backgroundColor);
    root.style.setProperty("--sidebar", settings.darkMode ? "#08111f" : settings.sidebarColor);
    root.style.setProperty("--brightness", `${settings.brightness}%`);
  }, [settings]);

  const updateSettings = (patch: Partial<Settings>) => setSettings({ ...settings, ...patch });

  return <SettingsContext.Provider value={{ settings, updateSettings }}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }
  return context;
}
