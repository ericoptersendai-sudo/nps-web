import { ArrowRight, BarChart3, BookOpenCheck, Clock3, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGrade } from "../context/GradeContext";
import { useProgress } from "../context/ProgressContext";
import { getCurriculum, getGradeLabel } from "../data/curriculum";
import { formatStudyTime } from "../utils/random";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { StatCard } from "../components/StatCard";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";

export function HomePage() {
  const { grade } = useGrade();
  const { progress } = useProgress();
  const { settings } = useSettings();
  const t = (text: string) => translate(text, settings.language);
  const gradeLabel = getGradeLabel(grade);
  const recentSubjects = getCurriculum(grade).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={t("Norman Public Schools, Oklahoma")} title={t(`Welcome back. Your ${gradeLabel} skip-readiness plan is ready.`)}>
        <Link className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-extrabold text-white shadow-soft transition hover:scale-[1.02]" to="/prep">
          {t("Start Learning")} <ArrowRight size={18} />
        </Link>
      </PageHeader>

      <section className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <Panel className="overflow-hidden bg-slate-950 p-0 text-white">
          <div className="relative min-h-72 p-6 sm:p-8">
            <div className="absolute inset-0 opacity-35">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.55),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(20,184,166,0.42),transparent_26%),linear-gradient(135deg,#111827,#172554_50%,#0f766e)]" />
            </div>
            <div className="relative max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold">
                <Sparkles size={16} /> {t("Personalized exam readiness")}
              </div>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">{t("Focused proficiency practice turns hard exams into familiar territory.")}</h2>
              <p className="mt-4 max-w-xl text-base font-medium text-white/78">{t("Study targeted lessons, work through challenging untimed proficiency checks, and review clear solutions whenever a concept feels slippery.")}</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t("Current Grade")}</p>
          <p className={grade >= 8 ? "mt-3 text-4xl font-black text-slate-950 dark:text-white" : "mt-3 text-6xl font-black text-slate-950 dark:text-white"}>{t(gradeLabel)}</p>
          <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-300">{t("All tests, prep lessons, and study guides are tuned to the grade the student is trying to skip into.")}</p>
          <Link to="/grade" className="mt-5 inline-flex w-full justify-center rounded-lg border border-slate-200 px-4 py-3 font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10">
            {t("Change Grade")}
          </Link>
        </Panel>
      </section>

      <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpenCheck} label={t("Tests completed")} value={progress.testsCompleted} />
        <StatCard icon={BarChart3} label={t("Average score")} value={`${progress.averageScore}%`} />
        <StatCard icon={Clock3} label={t("Time studied")} value={formatStudyTime(progress.timeStudiedSeconds ?? progress.timeStudiedMinutes * 60)} />
        <StatCard icon={GraduationCap} label={t("Subjects practiced")} value={progress.subjectsPracticed.length} />
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-2">
        <Panel>
          <h3 className="text-xl font-black">{t("Recently studied")}</h3>
          <div className="mt-4 grid gap-3">
            {recentSubjects.map((subject) => (
              <motion.div whileHover={{ x: 4 }} key={subject.subject} className="flex items-center justify-between rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-lg ${subject.color}`}>
                    <subject.icon size={20} />
                  </span>
                  <div>
                    <p className="font-extrabold">{t(subject.subject)}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{t("Curriculum not added yet")}</p>
                  </div>
                </div>
                <ArrowRight size={18} />
              </motion.div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h3 className="text-xl font-black">{t("Recent activity")}</h3>
          <div className="mt-4 space-y-3">
            {progress.recentActivity.map((activity, index) => (
              <div key={`${activity}-${index}`} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold dark:border-white/10">
                {activity}
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </>
  );
}
