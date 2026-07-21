import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type UsageStats = {
  siteOpens: number;
  pageViews: Record<string, number>;
  gradeSelections: Record<string, number>;
  subjectSelections: Record<string, number>;
  testsCompleted: number;
  scoreBands: Record<string, number>;
  eventsRecorded: number;
  recentEvents: string[];
};

type UsageAnalyticsContextValue = {
  stats: UsageStats;
  recordSiteOpen: () => void;
  recordPageView: (path: string) => void;
  recordGradeSelection: (grade: number) => void;
  recordSubjectSelection: (subject: string) => void;
  recordTestCompleted: (score: number, total: number) => void;
  clearUsageStats: () => void;
};

const defaultStats: UsageStats = {
  siteOpens: 0,
  pageViews: {},
  gradeSelections: {},
  subjectSelections: {},
  testsCompleted: 0,
  scoreBands: {},
  eventsRecorded: 0,
  recentEvents: []
};

const UsageAnalyticsContext = createContext<UsageAnalyticsContextValue | null>(null);

function scoreBand(score: number, total: number) {
  const percent = total ? Math.round((score / total) * 100) : 0;
  const low = Math.min(100, Math.floor(percent / 10) * 10);
  const high = low === 100 ? 100 : low + 9;
  return low === 100 ? "100%" : `${low}-${high}%`;
}

function incrementCount(counts: Record<string, number>, key: string) {
  return {
    ...counts,
    [key]: (counts[key] ?? 0) + 1
  };
}

export function UsageAnalyticsProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useLocalStorage<UsageStats>("nps-anonymous-usage", defaultStats);

  const updateStats = useCallback((eventLabel: string, update: (current: UsageStats) => UsageStats) => {
    setStats((current) => {
      const next = update(current);
      return {
        ...next,
        eventsRecorded: next.eventsRecorded + 1,
        recentEvents: [eventLabel, ...next.recentEvents].slice(0, 6)
      };
    });
  }, [setStats]);

  const recordSiteOpen = useCallback(() => {
    updateStats("Opened website on this browser", (current) => ({
      ...current,
      siteOpens: current.siteOpens + 1
    }));
  }, [updateStats]);

  const recordPageView = useCallback((path: string) => {
    updateStats(`Opened ${path === "/" ? "Home" : path.replace("/", "")}`, (current) => ({
      ...current,
      pageViews: incrementCount(current.pageViews, path)
    }));
  }, [updateStats]);

  const recordGradeSelection = useCallback((grade: number) => {
    updateStats(`Selected Grade ${grade}`, (current) => ({
      ...current,
      gradeSelections: incrementCount(current.gradeSelections, `Grade ${grade}`)
    }));
  }, [updateStats]);

  const recordSubjectSelection = useCallback((subject: string) => {
    updateStats(`Selected ${subject}`, (current) => ({
      ...current,
      subjectSelections: incrementCount(current.subjectSelections, subject)
    }));
  }, [updateStats]);

  const recordTestCompleted = useCallback((score: number, total: number) => {
    const band = scoreBand(score, total);
    updateStats(`Completed test in ${band} band`, (current) => ({
      ...current,
      testsCompleted: current.testsCompleted + 1,
      scoreBands: incrementCount(current.scoreBands, band)
    }));
  }, [updateStats]);

  const clearUsageStats = useCallback(() => {
    setStats(defaultStats);
  }, [setStats]);

  const value = useMemo<UsageAnalyticsContextValue>(
    () => ({
      stats,
      recordSiteOpen,
      recordPageView,
      recordGradeSelection,
      recordSubjectSelection,
      recordTestCompleted,
      clearUsageStats
    }),
    [clearUsageStats, recordGradeSelection, recordPageView, recordSiteOpen, recordSubjectSelection, recordTestCompleted, stats]
  );

  return <UsageAnalyticsContext.Provider value={value}>{children}</UsageAnalyticsContext.Provider>;
}

export function useUsageAnalytics() {
  const context = useContext(UsageAnalyticsContext);
  if (!context) {
    throw new Error("useUsageAnalytics must be used inside UsageAnalyticsProvider");
  }
  return context;
}
