import { CheckCircle2, ClipboardCheck, GraduationCap, HelpCircle, Settings, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";

const helpSections = [
  {
    title: "Start Prep Mode",
    icon: GraduationCap,
    steps: [
      "Click Prep in the side menu.",
      "Choose Mathematics or English Language Arts.",
      "Click Study Mode.",
      "Pick an answer, then click Check Answer to see the worked solution.",
      "Click Next Problem to keep practicing."
    ],
    link: "/prep",
    action: "Open Prep"
  },
  {
    title: "Take a Test",
    icon: ClipboardCheck,
    steps: [
      "Click Grade and choose the grade you are trying to skip into.",
      "Click Test in the side menu.",
      "Choose Mathematics or English Language Arts.",
      "Answer all 50 questions.",
      "Click Submit to see your final score and explanations."
    ],
    link: "/test",
    action: "Open Test"
  },
  {
    title: "Change Grade",
    icon: CheckCircle2,
    steps: [
      "Click Grade in the side menu.",
      "Choose the grade you want to skip into.",
      "The Prep and Test pages will update to match that grade."
    ],
    link: "/grade",
    action: "Choose Grade"
  },
  {
    title: "Use Settings",
    icon: Settings,
    steps: [
      "Click Settings in the side menu.",
      "Change language, dark mode, text size, colors, or brightness.",
      "Anonymous Usage is protected by the usage password."
    ],
    link: "/settings",
    action: "Open Settings"
  },
  {
    title: "Recover a Passcode",
    icon: UserRound,
    steps: [
      "Click Login in the side menu.",
      "Click Forgot passcode?",
      "Enter your username, your recovery passkey, and a new passcode.",
      "Click Reset passcode, then log in with the new passcode."
    ],
    link: "/login",
    action: "Open Login"
  }
];

export function HelpPage() {
  const { settings } = useSettings();
  const t = (text: string) => translate(text, settings.language);

  return (
    <>
      <PageHeader eyebrow={t("Help")} title={t("How to use the website.")} />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-4">
          {helpSections.map((section) => {
            const Icon = section.icon;
            return (
              <Panel key={section.title}>
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-slate-100 text-[var(--accent)] dark:bg-white/10">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-black">{t(section.title)}</h2>
                    <div className="mt-4 grid gap-2">
                      {section.steps.map((step, index) => (
                        <div key={step} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--accent)] text-xs font-black text-white">{index + 1}</span>
                          <span>{t(step)}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={section.link} className="mt-4 inline-flex rounded-lg bg-[var(--accent)] px-4 py-2 font-extrabold text-white">
                      {t(section.action)}
                    </Link>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>

        <Panel>
          <div className="flex items-center gap-3">
            <HelpCircle className="text-[var(--accent)]" />
            <h2 className="text-2xl font-black">{t("Quick tips")}</h2>
          </div>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <p>{t("Prep is for learning and unlimited practice. Test is for checking readiness.")}</p>
            <p>{t("If a question feels tricky, read the solution and compare why the wrong choices do not work.")}</p>
            <p>{t("Save your recovery passkey somewhere private when you create an account.")}</p>
          </div>
        </Panel>
      </div>
    </>
  );
}
