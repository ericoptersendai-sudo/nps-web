import { BookOpenCheck, ClipboardCheck, Compass, ExternalLink, Rocket, UsersRound } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";

const sections = [
  { icon: Compass, title: "Mission", text: "Help motivated students prepare for grade-skipping examinations with clear lessons, useful practice, and confidence-building feedback." },
  { icon: ClipboardCheck, title: "Purpose", text: "NPS stands for Norman Public Schools, Oklahoma, and organizes study materials, untimed tests, and progress tracking into one calm workspace students can return to every day." },
  { icon: BookOpenCheck, title: "Features", text: "Grade-aware question banks, study guides, accessibility settings, and local progress storage are built into the first version." },
  { icon: Rocket, title: "Future Updates", text: "The app structure can expand into accounts, synced progress, teacher dashboards, reports, badges, streaks, and generated practice tests." }
];

const creators = [
  { role: "Founder", name: "Ericopter W.", photo: "/creators/ericopter-w.jpg", description: "Guides the vision for a focused Norman Public Schools proficiency-prep experience." },
  { role: "Curriculum Lead", name: "TBD", description: "Curriculum ownership will be assigned as the question bank and study paths continue to grow." },
  { role: "Design Partner", name: "Shima B.", photo: "/creators/shima-b.jpg", description: "Shapes the student-facing look and feel so practice stays clear, friendly, and easy to use." }
];

export function InfoPage() {
  const { settings } = useSettings();
  const t = (text: string) => translate(text, settings.language);

  return (
    <>
      <PageHeader eyebrow={t("About Norman Public Schools, Oklahoma")} title={t("A personalized preparation system for students ready to move ahead.")} />
      <section className="grid gap-5 lg:grid-cols-2">
        {sections.map((section) => (
          <Panel key={section.title}>
            <section.icon className="text-[var(--accent)]" size={28} />
            <h2 className="mt-4 text-2xl font-black">{t(section.title)}</h2>
            <p className="mt-3 font-medium leading-7 text-slate-600 dark:text-slate-300">{t(section.text)}</p>
          </Panel>
        ))}
      </section>

      <Panel className="mt-5">
        <div className="flex items-center gap-3">
          <ExternalLink className="text-[var(--accent)]" size={24} />
          <h2 className="text-2xl font-black">{t("Standards Source")}</h2>
        </div>
        <p className="mt-3 font-medium leading-7 text-slate-600 dark:text-slate-300">
          {t("Subject areas, units, and learning sections are organized from the Oklahoma Academic Standards subject table and Oklahoma Standards Satchel.")}
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a className="inline-flex rounded-lg border border-slate-200 px-4 py-3 font-extrabold text-[var(--accent)] hover:border-[var(--accent)] dark:border-white/10" href="https://oklahoma.gov/education/services/standards-learning/oklahoma-academic-standards.html" target="_blank" rel="noreferrer">
            {t("Open Oklahoma Academic Standards")}
          </a>
          <a className="inline-flex rounded-lg border border-slate-200 px-4 py-3 font-extrabold text-[var(--accent)] hover:border-[var(--accent)] dark:border-white/10" href="https://ok-satchel.commongoodlt.com/" target="_blank" rel="noreferrer">
            {t("Open Oklahoma Standards Satchel")}
          </a>
        </div>
      </Panel>

      <Panel className="mt-5">
        <div className="flex items-center gap-3">
          <UsersRound className="text-[var(--accent)]" />
          <h2 className="text-2xl font-black">{t("Creators")}</h2>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {creators.map((creator) => (
            <article key={creator.role} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950">
              {creator.photo ? (
                <img className="h-16 w-16 shrink-0 rounded-full object-cover object-center shadow-sm ring-2 ring-white [image-rendering:auto] dark:ring-white/10" src={creator.photo} alt={`${creator.name} portrait`} />
              ) : (
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--accent)]/10 text-lg font-black text-[var(--accent)]">TBD</div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t(creator.role)}</p>
                <h3 className="mt-2 text-xl font-black">{creator.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">{t(creator.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </Panel>
    </>
  );
}
