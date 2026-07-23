import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { recordRemoteUsage } from "../utils/firebaseUsage";

type UsageStats = {
  siteOpens: number;
  accountLogins: number;
  accountsCreated: number;
  pageViews: Record<string, number>;
  gradeSelections: Record<string, number>;
  subjectSelections: Record<string, number>;
  testsCompleted: number;
  scoreBands: Record<string, number>;
  totalStudySeconds: number;
  eventsRecorded: number;
  recentEvents: string[];
};

type UsageAnalyticsContextValue = {
  stats: UsageStats;
  recordSiteOpen: () => void;
  recordAccountLogin: () => void;
  recordAccountCreated: () => void;
  recordPageView: (path: string, grade?: number) => void;
  recordGradeSelection: (grade: number) => void;
  recordSubjectSelection: (subject: string, grade?: number) => void;
  recordTestCompleted: (score: number, total: number, grade?: number, subject?: string) => void;
  recordStudySeconds: (seconds: number, grade?: number) => void;
};

const defaultStats: UsageStats = {
  siteOpens: 0,
  accountLogins: 0,
  accountsCreated: 0,
  pageViews: {},
  gradeSelections: {},
  subjectSelections: {},
  testsCompleted: 0,
  scoreBands: {},
  totalStudySeconds: 0,
  eventsRecorded: 0,
  recentEvents: []
};

const UsageAnalyticsContext = createContext<UsageAnalyticsContextValue | null>(null);

function normalizeStats(stats: UsageStats) {
  return {
    ...defaultStats,
    ...stats,
    siteOpens: Number.isFinite(stats.siteOpens) ? stats.siteOpens : 0,
    accountLogins: Number.isFinite(stats.accountLogins) ? stats.accountLogins : 0,
    accountsCreated: Number.isFinite(stats.accountsCreated) ? stats.accountsCreated : 0,
    pageViews: stats.pageViews ?? {},
    gradeSelections: stats.gradeSelections ?? {},
    subjectSelections: stats.subjectSelections ?? {},
    testsCompleted: Number.isFinite(stats.testsCompleted) ? stats.testsCompleted : 0,
    scoreBands: stats.scoreBands ?? {},
    totalStudySeconds: Number.isFinite(stats.totalStudySeconds) ? stats.totalStudySeconds : 0,
    eventsRecorded: Number.isFinite(stats.eventsRecorded) ? stats.eventsRecorded : 0,
    recentEvents: Array.isArray(stats.recentEvents) ? stats.recentEvents : []
  };
}

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
      const normalizedCurrent = normalizeStats(current);
      const next = normalizeStats(update(normalizedCurrent));
      return {
        ...next,
        eventsRecorded: next.eventsRecorded + 1,
        recentEvents: [eventLabel, ...next.recentEvents].slice(0, 6)
      };
    });
  }, [setStats]);

  const recordSiteOpen = useCallback(() => {
    void recordRemoteUsage("site_open");
    updateStats("Opened website on this browser", (current) => ({
      ...current,
      siteOpens: current.siteOpens + 1
    }));
  }, [updateStats]);

  const recordAccountLogin = useCallback(() => {
    void recordRemoteUsage("account_login");
    updateStats("Account logged in on this browser", (current) => ({
      ...current,
      accountLogins: current.accountLogins + 1
    }));
  }, [updateStats]);

  const recordAccountCreated = useCallback(() => {
    void recordRemoteUsage("account_created");
    updateStats("Account created on this browser", (current) => ({
      ...current,
      accountsCreated: current.accountsCreated + 1
    }));
  }, [updateStats]);

  const recordPageView = useCallback((path: string, grade?: number) => {
    void recordRemoteUsage("page_view", { path, grade: grade ?? null });
    updateStats(`Opened ${path === "/" ? "Home" : path.replace("/", "")}`, (current) => ({
      ...current,
      pageViews: incrementCount(current.pageViews, path)
    }));
  }, [updateStats]);

  const recordGradeSelection = useCallback((grade: number) => {
    void recordRemoteUsage("grade_selected", { grade });
    updateStats(`Selected Grade ${grade}`, (current) => ({
      ...current,
      gradeSelections: incrementCount(current.gradeSelections, `Grade ${grade}`)
    }));
  }, [updateStats]);

  const recordSubjectSelection = useCallback((subject: string, grade?: number) => {
    void recordRemoteUsage("subject_selected", { subject, grade: grade ?? null });
    updateStats(`Selected ${subject}`, (current) => ({
      ...current,
      subjectSelections: incrementCount(current.subjectSelections, subject)
    }));
  }, [updateStats]);

  const recordTestCompleted = useCallback((score: number, total: number, grade?: number, subject?: string) => {
    const band = scoreBand(score, total);
    void recordRemoteUsage("test_completed", { score, total, band, grade: grade ?? null, subject: subject ?? null });
    updateStats(`Completed test in ${band} band`, (current) => ({
      ...current,
      testsCompleted: current.testsCompleted + 1,
      scoreBands: incrementCount(current.scoreBands, band)
    }));
  }, [updateStats]);

  const recordStudySeconds = useCallback((seconds: number, grade?: number) => {
    const safeSeconds = Math.floor(seconds);
    if (safeSeconds <= 0) return;
    void recordRemoteUsage("study_time", { seconds: safeSeconds, grade: grade ?? null });
    updateStats(`Studied for ${safeSeconds} seconds`, (current) => ({
      ...current,
      totalStudySeconds: current.totalStudySeconds + safeSeconds
    }));
  }, [updateStats]);

  const value = useMemo<UsageAnalyticsContextValue>(
    () => ({
      stats: normalizeStats(stats),
      recordSiteOpen,
      recordAccountLogin,
      recordAccountCreated,
      recordPageView,
      recordGradeSelection,
      recordSubjectSelection,
      recordTestCompleted,
      recordStudySeconds
    }),
    [recordAccountCreated, recordAccountLogin, recordGradeSelection, recordPageView, recordSiteOpen, recordStudySeconds, recordSubjectSelection, recordTestCompleted, stats]
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
