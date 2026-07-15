import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Progress = {
  testsCompleted: number;
  averageScore: number;
  timeStudiedMinutes: number;
  subjectsPracticed: string[];
  recentActivity: string[];
};

const defaultProgress: Progress = {
  testsCompleted: 0,
  averageScore: 0,
  timeStudiedMinutes: 45,
  subjectsPracticed: ["Mathematics", "English Language Arts"],
  recentActivity: ["Opened Math practice", "Opened ELA practice", "Opened Prep Library"]
};

type ProgressContextValue = {
  progress: Progress;
  recordTest: (score: number, total: number) => void;
  recordSubject: (subject: string) => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useLocalStorage<Progress>("nps-progress", defaultProgress);

  const recordTest = (score: number, total: number) => {
    const percent = Math.round((score / total) * 100);
    const completed = progress.testsCompleted + 1;
    setProgress({
      ...progress,
      testsCompleted: completed,
      averageScore: Math.round((progress.averageScore * progress.testsCompleted + percent) / completed),
      recentActivity: [`Completed a test with ${percent}%`, ...progress.recentActivity].slice(0, 5)
    });
  };

  const recordSubject = (subject: string) => {
    setProgress({
      ...progress,
      timeStudiedMinutes: progress.timeStudiedMinutes + 10,
      subjectsPracticed: Array.from(new Set([subject, ...progress.subjectsPracticed])).slice(0, 6),
      recentActivity: [`Studied ${subject}`, ...progress.recentActivity].slice(0, 5)
    });
  };

  return <ProgressContext.Provider value={{ progress, recordTest, recordSubject }}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }
  return context;
}
