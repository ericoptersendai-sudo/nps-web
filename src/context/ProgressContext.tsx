import { createContext, useCallback, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Progress = {
  testsCompleted: number;
  averageScore: number;
  timeStudiedMinutes: number;
  timeStudiedSeconds?: number;
  subjectsPracticed: string[];
  recentActivity: string[];
};

const defaultProgress: Progress = {
  testsCompleted: 0,
  averageScore: 0,
  timeStudiedMinutes: 0,
  timeStudiedSeconds: 0,
  subjectsPracticed: [],
  recentActivity: []
};

type ProgressContextValue = {
  progress: Progress;
  recordTest: (score: number, total: number) => void;
  recordSubject: (subject: string) => void;
  recordActiveSeconds: (seconds: number) => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useLocalStorage<Progress>("nps-progress", defaultProgress);

  useEffect(() => {
    const hasOldDemoProgress =
      progress.testsCompleted === 0 &&
      progress.averageScore === 0 &&
      progress.timeStudiedMinutes === 45 &&
      (progress.timeStudiedSeconds === undefined || progress.timeStudiedSeconds === 2700) &&
      progress.subjectsPracticed.includes("Mathematics") &&
      progress.subjectsPracticed.includes("English Language Arts");

    if (hasOldDemoProgress) {
      setProgress(defaultProgress);
    }
  }, [progress, setProgress]);

  const recordActiveSeconds = useCallback((seconds: number) => {
    const safeSeconds = Math.min(Math.floor(seconds), 15);
    if (safeSeconds <= 0) return;
    setProgress((current) => {
      const nextSeconds = (current.timeStudiedSeconds ?? current.timeStudiedMinutes * 60) + safeSeconds;
      return {
        ...current,
        timeStudiedSeconds: nextSeconds,
        timeStudiedMinutes: Math.floor(nextSeconds / 60)
      };
    });
  }, [setProgress]);

  const recordTest = useCallback((score: number, total: number) => {
    const percent = Math.round((score / total) * 100);
    setProgress((current) => {
      const completed = current.testsCompleted + 1;
      return {
        ...current,
        testsCompleted: completed,
        averageScore: Math.round((current.averageScore * current.testsCompleted + percent) / completed),
        recentActivity: [`Completed a test with ${percent}%`, ...current.recentActivity].slice(0, 5)
      };
    });
  }, [setProgress]);

  const recordSubject = useCallback((subject: string) => {
    setProgress((current) => ({
      ...current,
      subjectsPracticed: Array.from(new Set([subject, ...current.subjectsPracticed])).slice(0, 6),
      recentActivity: [`Studied ${subject}`, ...current.recentActivity].slice(0, 5)
    }));
  }, [setProgress]);

  return <ProgressContext.Provider value={{ progress, recordTest, recordSubject, recordActiveSeconds }}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }
  return context;
}
