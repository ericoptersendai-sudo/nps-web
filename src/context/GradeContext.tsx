import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Grade } from "../data/curriculum";

type GradeContextValue = {
  grade: Grade;
  setGrade: (grade: Grade) => void;
};

const GradeContext = createContext<GradeContextValue | null>(null);

export function GradeProvider({ children }: { children: ReactNode }) {
  const [grade, setGrade] = useLocalStorage<Grade>("nps-grade", 6);
  return <GradeContext.Provider value={{ grade, setGrade }}>{children}</GradeContext.Provider>;
}

export function useGrade() {
  const context = useContext(GradeContext);
  if (!context) {
    throw new Error("useGrade must be used inside GradeProvider");
  }
  return context;
}
