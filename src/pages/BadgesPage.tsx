import { Link } from "react-router-dom";
import { ArrowRight, LockKeyhole, Trophy } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useProgress } from "../context/ProgressContext";
import { useSettings } from "../context/SettingsContext";
import { getAwards } from "../utils/awards";
import { translate } from "../utils/i18n";

export function BadgesPage() {
  const { progress } = useProgress();
  const { settings } = useSettings();
  const t = (text: string) => translate(text, settings.language);
  const awards = getAwards(progress);
  const unlockedAwards = awards.filter((award) => award.unlocked);
  const nextLockedAward = awards.find((award) => !award.unlocked);

  return (
    <>
      <PageHeader eyebrow={t("Awards")} title={t("Badges you can earn")}>
        <Link className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-extrabold text-white shadow-soft transition hover:scale-[1.02]" to="/test">
          {t("Earn a Badge")} <ArrowRight size={18} />
        </Link>
      </PageHeader>

      <section className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <Panel>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-400/20 dark:text-amber-100">
              <Trophy size={24} />
            </span>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t("Progress")}</p>
              <p className="text-3xl font-black">{unlockedAwards.length}/{awards.length}</p>
            </div>
          </div>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
            <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${Math.round((unlockedAwards.length / awards.length) * 100)}%` }} />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {nextLockedAward ? t(`Next badge: ${nextLockedAward.title}`) : t("All badges unlocked.")}
          </p>
        </Panel>

        <Panel>
          <h2 className="text-2xl font-black">{t("Badge collection")}</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{t("Unlocked badges light up when your progress reaches the requirement.")}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {awards.map((award) => {
              const Icon = award.icon;
              return (
                <div
                  key={award.title}
                  className={`rounded-lg border p-4 transition ${
                    award.unlocked
                      ? "border-amber-300 bg-amber-50 text-amber-950 shadow-sm dark:border-amber-400/40 dark:bg-amber-950/30 dark:text-amber-50"
                      : "border-slate-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg ${award.unlocked ? "bg-amber-200 text-amber-800 dark:bg-amber-400/20 dark:text-amber-100" : "bg-slate-200 text-slate-500 dark:bg-white/10"}`}>
                      {award.unlocked ? <Icon size={23} /> : <LockKeyhole size={22} />}
                    </span>
                    <div>
                      <p className="font-black">{t(award.title)}</p>
                      <p className="mt-1 text-sm font-semibold opacity-80">{t(award.description)}</p>
                      <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.14em]">{award.unlocked ? t("Unlocked") : t("Locked")}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>
      </section>
    </>
  );
}
