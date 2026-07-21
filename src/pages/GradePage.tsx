import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useGrade } from "../context/GradeContext";
import { grades } from "../data/curriculum";
import { PageHeader } from "../components/PageHeader";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";
import { useUsageAnalytics } from "../context/UsageAnalyticsContext";

export function GradePage() {
  const { grade, setGrade } = useGrade();
  const { settings } = useSettings();
  const { recordGradeSelection } = useUsageAnalytics();
  const t = (text: string) => translate(text, settings.language);

  return (
    <>
      <PageHeader eyebrow={t("Grade Selection")} title={t("Choose the grade the student is trying to skip into.")} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {grades.map((item) => {
          const selected = item === grade;
          return (
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              key={item}
              onClick={() => {
                setGrade(item);
                recordGradeSelection(item);
              }}
              className={`relative flex min-h-36 flex-col items-center justify-center rounded-lg border p-6 text-center shadow-soft transition ${
                selected ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-slate-200 bg-white hover:border-[var(--accent)] dark:border-white/10 dark:bg-slate-900"
              }`}
            >
              <div className="flex w-full items-center justify-center">
                <span className="text-sm font-extrabold uppercase tracking-[0.16em]">{t("Grade")}</span>
                {selected && <CheckCircle2 className="absolute right-5 top-5" size={22} />}
              </div>
              <p className="mt-5 w-full text-center text-5xl font-black">{item}</p>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
