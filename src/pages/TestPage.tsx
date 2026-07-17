import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useGrade } from "../context/GradeContext";
import { useProgress } from "../context/ProgressContext";
import { getCurriculum, getGradeLabel, getTestQuestionBank } from "../data/curriculum";
import type { Subject } from "../data/curriculum";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";
import { shuffle } from "../utils/random";
import type { Question } from "../data/curriculum";

const TEST_LENGTH = 15;

function getQuestionType(question: Question) {
  const text = `${question.prompt} ${question.explanation}`.toLowerCase();

  if (text.includes("absolute value")) return "absolute value";
  if (
    text.includes("pythagorean") ||
    text.includes("a^2 + b^2") ||
    text.includes("right triangle") ||
    text.includes("hypotenuse")
  ) {
    return "pythagorean and right-triangle side lengths";
  }
  if (text.includes("slope") || text.includes("y-intercept") || text.includes("rate of change") || text.includes("line of best fit")) {
    return "linear rate and slope";
  }

  return question.questionType ?? question.prompt.split(":")[0] ?? question.id;
}

function getQuestionDomain(question: Question) {
  return question.prompt.split(":")[0]?.trim() || getQuestionType(question);
}

function buildRandomTest(questionBank: Question[], usedQuestionIds: string[]) {
  const used = new Set(usedQuestionIds);
  const available = shuffle(questionBank.filter((question) => !used.has(question.id)));
  const domainGroups = new Map<string, Question[]>();

  available.forEach((question) => {
    const domain = getQuestionDomain(question);
    domainGroups.set(domain, [...(domainGroups.get(domain) ?? []), question]);
  });

  const selected: Question[] = [];
  const selectedIds = new Set<string>();
  const selectedTypes = new Set<string>();
  const domainCounts = new Map<string, number>();
  const domainEntries = shuffle([...domainGroups.entries()]).map(([domain, questions]) => [domain, shuffle(questions)] as const);
  const maxPerDomain = domainEntries.length ? Math.ceil(TEST_LENGTH / domainEntries.length) : TEST_LENGTH;

  let madeSelection = true;
  while (selected.length < TEST_LENGTH && madeSelection) {
    madeSelection = false;
    domainEntries.forEach(([domain, questions]) => {
      if (selected.length >= TEST_LENGTH || (domainCounts.get(domain) ?? 0) >= maxPerDomain) return;
      const choice = questions.find((question) => !selectedIds.has(question.id) && !selectedTypes.has(getQuestionType(question)));
      if (!choice) return;
      selected.push(choice);
      selectedIds.add(choice.id);
      selectedTypes.add(getQuestionType(choice));
      domainCounts.set(domain, (domainCounts.get(domain) ?? 0) + 1);
      madeSelection = true;
    });
  }

  if (selected.length < TEST_LENGTH) {
    available.forEach((question) => {
      const type = getQuestionType(question);
      if (selected.length >= TEST_LENGTH || selectedIds.has(question.id) || selectedTypes.has(type)) return;
      selected.push(question);
      selectedIds.add(question.id);
      selectedTypes.add(type);
    });
  }

  return shuffle(selected);
}

export function TestPage() {
  const { grade } = useGrade();
  const { recordTest } = useProgress();
  const { settings } = useSettings();
  const t = (text: string) => translate(text, settings.language);
  const gradeLabel = getGradeLabel(grade);
  const subjects = useMemo(() => getCurriculum(grade), [grade]);
  const [selectedSubject, setSelectedSubject] = useState<Subject>(subjects[0].subject);
  const questionBank = useMemo(
    () => getTestQuestionBank().filter((question) => question.grade === grade && question.subject === selectedSubject),
    [grade, selectedSubject]
  );
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([]);
  const [questions, setQuestions] = useState(() => buildRandomTest(questionBank, []));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!subjects.some((item) => item.subject === selectedSubject)) {
      setSelectedSubject(subjects[0].subject);
    }
  }, [selectedSubject, subjects]);

  useEffect(() => {
    setUsedQuestionIds([]);
    setQuestions(buildRandomTest(questionBank, []));
    setCurrent(0);
    setAnswers({});
    setSubmitted(false);
  }, [grade, selectedSubject, questionBank]);

  const validQuestions = questions.filter(Boolean);
  const safeCurrent = Math.min(current, Math.max(validQuestions.length - 1, 0));
  const active = validQuestions[safeCurrent];
  const answeredCount = validQuestions.filter((question) => answers[question.id] !== undefined).length;
  const progressPercent = validQuestions.length ? Math.round((answeredCount / validQuestions.length) * 100) : 0;
  const score = validQuestions.filter((question) => answers[question.id] === question.correctIndex).length;
  const percent = validQuestions.length ? Math.round((score / validQuestions.length) * 100) : 0;

  function submitTest() {
    if (!validQuestions.length) return;
    setSubmitted(true);
    recordTest(score, validQuestions.length);
  }

  function startNewTest() {
    const usedNow = [...new Set([...usedQuestionIds, ...questions.map((question) => question.id)])];
    setUsedQuestionIds(usedNow);
    setQuestions(buildRandomTest(questionBank, usedNow));
    setCurrent(0);
    setAnswers({});
    setSubmitted(false);
  }

  if (validQuestions.length === 0) {
    return (
      <>
        <PageHeader eyebrow={t("Practice Test")} title={t(`${gradeLabel} standards test`)} />
        <Panel>
          <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((item) => (
              <button
                key={item.subject}
                onClick={() => setSelectedSubject(item.subject)}
                className={`flex items-center gap-3 rounded-lg border px-3 py-3 text-left font-extrabold transition ${
                  selectedSubject === item.subject
                    ? "border-[var(--accent)] bg-white text-[var(--accent)] shadow-soft dark:bg-slate-900"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
                }`}
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${item.color}`}>
                  <item.icon size={18} />
                </span>
                <span>{t(item.subject)}</span>
              </button>
            ))}
          </div>
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-white/10 dark:bg-slate-950">
            <p className="text-xl font-black">{questionBank.length ? t("All available test questions have been completed.") : t("No test questions added yet.")}</p>
            <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">{questionBank.length ? t("Switch grades or subjects for a new unused question set.") : t("Tell me what curriculum to add, and this test will fill back in.")}</p>
          </div>
        </Panel>
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <PageHeader eyebrow={t("Test Results")} title={`${t(selectedSubject)}: ${score} ${t("out of")} ${validQuestions.length} ${t("correct")}`} />
        <section className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <Panel>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t("Final score")}</p>
            <p className="mt-3 text-6xl font-black">{percent}%</p>
            <p className="mt-2 font-bold text-emerald-600">{score} {t("correct")}</p>
            <p className="font-bold text-rose-600">{validQuestions.length - score} {t("incorrect")}</p>
            <button onClick={startNewTest} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-3 font-extrabold text-white">
              <RotateCcw size={18} /> {t("New Test")}
            </button>
          </Panel>
          <div className="grid gap-3">
            {validQuestions.map((question, index) => {
              const correct = answers[question.id] === question.correctIndex;
              return (
                <Panel key={question.id}>
                  <div className="flex gap-3">
                    {correct ? <CheckCircle2 className="shrink-0 text-emerald-600" /> : <XCircle className="shrink-0 text-rose-600" />}
                    <div>
                      <p className="font-black">{t("Question")} {index + 1}: {t(question.prompt)}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{t("Correct answer")}: {t(question.answers[question.correctIndex])}</p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t(question.explanation)}</p>
                    </div>
                  </div>
                </Panel>
              );
            })}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow={t("Practice Test")} title={t(`${gradeLabel} standards test`)} />
      <Panel>
        <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((item) => (
            <button
              key={item.subject}
              onClick={() => setSelectedSubject(item.subject)}
              className={`flex items-center gap-3 rounded-lg border px-3 py-3 text-left font-extrabold transition ${
                selectedSubject === item.subject
                  ? "border-[var(--accent)] bg-white text-[var(--accent)] shadow-soft dark:bg-slate-900"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
              }`}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${item.color}`}>
                <item.icon size={18} />
              </span>
              <span>{t(item.subject)}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold text-[var(--accent)]">{t(active.subject)}</p>
            <h2 className="mt-1 text-2xl font-black">{t(`Question ${safeCurrent + 1} of ${validQuestions.length}`)}</h2>
          </div>
          <p className="w-fit rounded-lg bg-slate-100 px-3 py-2 text-sm font-black text-slate-700 dark:bg-white/10 dark:text-slate-100">{t("Untimed practice")}</p>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
          <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
        <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-300">{answeredCount} {t("out of")} {validQuestions.length} {t("answered")}</p>

        <p className="mt-7 text-xl font-black">{t(active.prompt)}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {active.answers.slice(0, 4).map((answer, index) => (
            <button
              key={answer}
              onClick={() => setAnswers({ ...answers, [active.id]: index })}
              className={`rounded-lg border p-4 text-left font-bold transition ${
                answers[active.id] === index
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
              }`}
            >
              {t(answer)}
            </button>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button disabled={safeCurrent === 0} onClick={() => setCurrent((value) => value - 1)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-bold disabled:opacity-40 dark:border-white/10">
            <ArrowLeft size={18} /> {t("Previous")}
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button disabled={safeCurrent === validQuestions.length - 1} onClick={() => setCurrent((value) => value + 1)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-bold disabled:opacity-40 dark:border-white/10">
              {t("Next")} <ArrowRight size={18} />
            </button>
            <button
              disabled={answeredCount < validQuestions.length}
              onClick={submitTest}
              className="rounded-lg bg-[var(--accent)] px-5 py-3 font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              {answeredCount < validQuestions.length ? `${t("Submit")} (${answeredCount}/${validQuestions.length})` : t("Submit")}
            </button>
          </div>
        </div>
      </Panel>
    </>
  );
}
