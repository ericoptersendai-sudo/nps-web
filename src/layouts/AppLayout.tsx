import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { CookieConsent } from "../components/CookieConsent";

export function AppLayout() {
  const location = useLocation();

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
      <CookieConsent />
    </div>
  );
}
