import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { CookieConsent } from "../components/CookieConsent";
import { OnboardingGuide } from "../components/OnboardingGuide";
import { useAuth } from "../context/AuthContext";
import { useGrade } from "../context/GradeContext";
import { useProgress } from "../context/ProgressContext";
import { useUsageAnalytics } from "../context/UsageAnalyticsContext";
import { ANALYTICS_CONSENT_KEY, hasAnalyticsConsent, loadGoogleAnalytics, trackPageView } from "../utils/analytics";

const SESSION_OPEN_RECORDED_KEY = "nps-usage-open-recorded";
const ACTIVE_STUDY_PATHS = new Set(["/prep", "/test"]);
const ACTIVE_WINDOW_MS = 60_000;
const MAX_TIMER_TICK_SECONDS = 15;

function isStudyPath(pathname: string) {
  return ACTIVE_STUDY_PATHS.has(pathname);
}

export function AppLayout() {
  const location = useLocation();
  const { currentUser } = useAuth();
  const { grade } = useGrade();
  const { recordActiveSeconds } = useProgress();
  const { recordPageView, recordSiteOpen, recordStudySeconds } = useUsageAnalytics();
  const [cookiesAccepted, setCookiesAccepted] = useState(() => hasAnalyticsConsent());

  useEffect(() => {
    if (!cookiesAccepted) return;
    if (!sessionStorage.getItem(SESSION_OPEN_RECORDED_KEY)) {
      recordSiteOpen();
      sessionStorage.setItem(SESSION_OPEN_RECORDED_KEY, "true");
    }
    loadGoogleAnalytics();
  }, [cookiesAccepted, recordSiteOpen]);

  useEffect(() => {
    if (!cookiesAccepted) return;
    recordPageView(location.pathname, grade);
    trackPageView(location.pathname);
  }, [cookiesAccepted, grade, location.pathname, recordPageView]);

  useEffect(() => {
    const updateConsent = () => setCookiesAccepted(localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted");
    window.addEventListener("storage", updateConsent);
    return () => window.removeEventListener("storage", updateConsent);
  }, []);

  useEffect(() => {
    if (!cookiesAccepted || !currentUser || !isStudyPath(location.pathname)) return;
    let lastTick = Date.now();
    let lastActivity = Date.now();
    let remoteStudySeconds = 0;

    const markActive = () => {
      lastActivity = Date.now();
    };

    const recordVisibleTime = () => {
      const now = Date.now();
      const elapsedSeconds = Math.min(Math.floor((now - lastTick) / 1000), MAX_TIMER_TICK_SECONDS);
      const recentlyActive = now - lastActivity <= ACTIVE_WINDOW_MS;
      lastTick = now;
      if (document.visibilityState === "visible" && recentlyActive && elapsedSeconds > 0) {
        recordActiveSeconds(elapsedSeconds);
        remoteStudySeconds += elapsedSeconds;
        if (remoteStudySeconds >= 60) {
          recordStudySeconds(remoteStudySeconds, grade);
          remoteStudySeconds = 0;
        }
      }
    };

    const timer = window.setInterval(recordVisibleTime, 10000);
    document.addEventListener("visibilitychange", recordVisibleTime);
    window.addEventListener("pointerdown", markActive, { passive: true });
    window.addEventListener("keydown", markActive);
    window.addEventListener("scroll", markActive, { passive: true });
    window.addEventListener("touchstart", markActive, { passive: true });

    return () => {
      recordVisibleTime();
      if (remoteStudySeconds > 0) {
        recordStudySeconds(remoteStudySeconds, grade);
      }
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", recordVisibleTime);
      window.removeEventListener("pointerdown", markActive);
      window.removeEventListener("keydown", markActive);
      window.removeEventListener("scroll", markActive);
      window.removeEventListener("touchstart", markActive);
    };
  }, [cookiesAccepted, currentUser, grade, location.pathname, recordActiveSeconds, recordStudySeconds]);

  if (!cookiesAccepted) {
    return (
      <div className="min-h-screen bg-[var(--app-bg)] text-slate-900 brightness-[var(--brightness)] transition dark:text-white">
        <CookieConsent onAccepted={() => setCookiesAccepted(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--app-bg)] text-slate-900 brightness-[var(--brightness)] transition dark:text-white">
      <Sidebar />
      <main className="min-h-screen pb-24 md:ml-64 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-9"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <OnboardingGuide />
      <CookieConsent onAccepted={() => setCookiesAccepted(true)} />
    </div>
  );
}
