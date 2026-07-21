import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lightbulb, PlayCircle, XCircle } from "lucide-react";
import { useGrade } from "../context/GradeContext";
import { useProgress } from "../context/ProgressContext";
import { getCurriculum, getGradeLabel, getStudyQuestionBank } from "../data/curriculum";
import type { Question } from "../data/curriculum";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";
import { shuffle } from "../utils/random";
import { useUsageAnalytics } from "../context/UsageAnalyticsContext";
import { trackEvent } from "../utils/analytics";

function skillLabel(question: Question) {
  return question.prompt.split(":")[0] || question.subject;
}

function detailedSolutionSteps(question: Question) {
  const correctAnswer = question.answers[question.correctIndex];
  const isMath = question.subject === "Mathematics";
  return [
    `Skill being tested: ${skillLabel(question)}. Read the whole question first and identify exactly what it asks you to find.`,
    isMath
      ? "Set up the math before choosing an answer. Write the numbers, operation, equation, graph fact, or formula that matches the situation."
      : "Look back at the wording of the question and match it to the strongest evidence, grammar rule, vocabulary clue, or reading strategy.",
    question.explanation,
    `The correct answer is: ${correctAnswer}.`,
    "Check your work by comparing the correct answer with the other choices. The wrong choices are usually close because they use a common mistake, skip a step, or answer a different question."
  ];
}

export function PrepPage() {
  const { grade } = useGrade();
  const { recordSubject } = useProgress();
  const { settings } = useSettings();
  const { recordSubjectSelection } = useUsageAnalytics();
  const t = (text: string) => translate(text, settings.language);
  const gradeLabel = getGradeLabel(grade);
  const curriculum = getCurriculum(grade);
  const [activeSubject, setActiveSubject] = useState(curriculum[0].subject);
  const [studyMode, setStudyMode] = useState(false);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [checkedAnswer, setCheckedAnswer] = useState(false);
  const active = curriculum.find((item) => item.subject === activeSubject) ?? curriculum[0];
  const practiceQuestions = useMemo(
    () => getStudyQuestionBank().filter((question) => question.grade === grade && question.subject === activeSubject),
    [grade, activeSubject]
  );
  const [practiceQueue, setPracticeQueue] = useState(() => shuffle(practiceQuestions));
  const activeProblem = practiceQueue[practiceIndex] ?? null;

  useEffect(() => {
    setPracticeQueue(shuffle(practiceQuestions));
    setPracticeIndex(0);
    resetProblem();
  }, [practiceQuestions]);

  function resetProblem() {
    setSelectedAnswer(null);
    setShowSolution(false);
    setCheckedAnswer(false);
  }

  function nextProblem() {
    setPracticeIndex((value) => value + 1);
    resetProblem();
  }

  return (
    <>
      <PageHeader eyebrow={t("Study Materials")} title={t(`${gradeLabel} standards prep`)} />
      <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
        <div className="grid gap-2 self-start">
          {curriculum.map((item) => (
            <button
              key={item.subject}
              onClick={() => {
                setActiveSubject(item.subject);
                recordSubject(item.subject);
                recordSubjectSelection(item.subject);
                trackEvent("prep_subject_selected", { subject: item.subject, grade });
                setStudyMode(false);
                setPracticeIndex(0);
                resetProblem();
              }}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left font-extrabold transition ${
                activeSubject === item.subject
                  ? "border-[var(--accent)] bg-white text-[var(--accent)] shadow-soft dark:bg-slate-900"
                  : "border-slate-200 bg-white/70 text-slate-700 hover:bg-white hover:text-[var(--accent)] dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
              }`}
            >
              <span className={`grid h-10 w-10 place-items-center rounded-lg ${item.color}`}>
                <item.icon size={20} />
              </span>
              {t(item.subject)}
            </button>
          ))}
        </div>

        <Panel>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black">{t(active.subject)}</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300">{t(`Lessons and unlimited practice for ${gradeLabel} standards mastery.`)}</p>
            </div>
            <button
              onClick={() => setStudyMode((value) => !value)}
              className={`inline-flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition hover:scale-[1.02] ${active.color}`}
            >
              {studyMode ? <XCircle size={18} /> : <PlayCircle size={18} />}
              {studyMode ? t("Close Study Mode") : t("Study Mode")}
            </button>
          </div>

          {studyMode && (
            <div className="mt-5 rounded-lg border border-[var(--accent)] bg-slate-50 p-4 dark:bg-slate-950">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t("Unlimited practice")}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{t(`Solve one ${active.subject} problem at a time. Check the answer, read the solution, then move to another problem.`)}</p>
                </div>
                <p className="text-sm font-black text-emerald-600">{t(`Problem ${Math.min(practiceIndex + 1, practiceQueue.length || 1)}${practiceQueue.length ? ` of ${practiceQueue.length}` : ""}`)}</p>
              </div>

              {activeProblem ? (
              <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t(`${gradeLabel} standards problem`)}</p>
                <p className="mt-3 text-lg font-black">{t(activeProblem.prompt)}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {activeProblem.answers.slice(0, 4).map((answer, index) => {
                    const answered = checkedAnswer;
                    const correct = index === activeProblem.correctIndex;
                    const selected = selectedAnswer === index;
                    return (
                      <button
                        key={answer}
                        onClick={() => {
                          setSelectedAnswer(index);
                        }}
                        className={`rounded-lg border p-4 text-left font-bold transition ${
                          answered && correct
                            ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                            : answered && selected
                              ? "border-rose-500 bg-rose-50 text-rose-800"
                            : selected
                              ? "border-blue-500 bg-blue-50 text-blue-800 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-100"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
                        }`}
                      >
                        {t(answer)}
                      </button>
                    );
                  })}
                </div>

                {checkedAnswer && selectedAnswer !== null && (
                  <div className={`mt-4 flex items-center gap-2 rounded-lg p-3 text-sm font-black ${selectedAnswer === activeProblem.correctIndex ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                    {selectedAnswer === activeProblem.correctIndex ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                    {selectedAnswer === activeProblem.correctIndex ? t("Correct") : t("Not yet. Review the solution, then try another problem.")}
                  </div>
                )}

                {(showSolution || checkedAnswer) && (
                  <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300">
                    <p className="font-black text-slate-900 dark:text-white">{t("Solution")}</p>
                    <div className="mt-3 grid gap-2">
                      {detailedSolutionSteps(activeProblem).map((step, index) => (
                        <div key={step} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-950">
                          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--accent)]">{t(`Step ${index + 1}`)}</p>
                          <p className="mt-1">{t(step)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button
                    disabled={selectedAnswer === null}
                    onClick={() => {
                      setCheckedAnswer(true);
                      setShowSolution(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-extrabold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300 disabled:opacity-70"
                  >
                    <CheckCircle2 size={16} /> {t("Check Answer")}
                  </button>
                  <button
                    onClick={() => setShowSolution((value) => !value)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-extrabold text-slate-700 transition hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:text-slate-100"
                  >
                    <Lightbulb size={16} /> {showSolution ? t("Hide Solution") : t("Show Solution")}
                  </button>
                  <button
                    onClick={nextProblem}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-extrabold text-white"
                  >
                    {t("Next Problem")} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              ) : (
                <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-white p-5 text-center dark:border-white/10 dark:bg-slate-900">
                  <p className="text-lg font-black">{practiceQuestions.length ? t("All available practice problems have been completed.") : t("No practice problems added yet.")}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{practiceQuestions.length ? t("Switch grades or subjects for a new unused question set.") : t("Tell me what curriculum to add, and practice mode will fill back in.")}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-5 grid gap-4">
            {active.lessons.length === 0 && (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-white/10 dark:bg-slate-950">
                <p className="text-xl font-black">{t("No lessons added yet.")}</p>
                <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">{t("This subject is ready for the curriculum you want to add next.")}</p>
              </div>
            )}
            {active.lessons.map((lesson, index) => (
              <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} key={lesson.title} className="rounded-lg border border-slate-200 p-5 dark:border-white/10">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t(lesson.unit)}</p>
                <h3 className="mt-2 text-xl font-black">{t("Section")} {index + 1}: {t(lesson.title)}</h3>
                <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">{t(lesson.standard)}</p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">{t(lesson.explanation)}</p>
                <div className="mt-4 rounded-lg bg-slate-50 p-4 dark:bg-white/5">
                  <p className="font-extrabold">{t("Example problem")}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t(lesson.example)}</p>
                </div>
                <div className="mt-4 grid gap-2">
                  {lesson.solution.map((step) => (
                    <div key={step} className="flex gap-3 rounded-lg bg-white p-3 text-sm font-semibold shadow-sm dark:bg-slate-950">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                      <span>{t(step)}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}
