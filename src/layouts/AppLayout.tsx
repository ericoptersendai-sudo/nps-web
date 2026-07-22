import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { CookieConsent } from "../components/CookieConsent";
import { OnboardingGuide } from "../components/OnboardingGuide";
import { useUsageAnalytics } from "../context/UsageAnalyticsContext";
import { ANALYTICS_CONSENT_KEY, hasAnalyticsConsent, loadGoogleAnalytics, trackPageView } from "../utils/analytics";

const SESSION_OPEN_RECORDED_KEY = "nps-usage-open-recorded";

export function AppLayout() {
  const location = useLocation();
  const { recordPageView, recordSiteOpen } = useUsageAnalytics();
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
    recordPageView(location.pathname);
    trackPageView(location.pathname);
  }, [cookiesAccepted, location.pathname, recordPageView]);

  useEffect(() => {
    const updateConsent = () => setCookiesAccepted(localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted");
    window.addEventListener("storage", updateConsent);
    return () => window.removeEventListener("storage", updateConsent);
  }, []);

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
