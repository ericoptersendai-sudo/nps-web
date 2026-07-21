import { Home, TestTube2, GraduationCap, Layers3, Info, Settings, UserRound, HelpCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useSettings } from "../context/SettingsContext";
import { translate } from "../utils/i18n";
import { useAuth } from "../context/AuthContext";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/test", label: "Test", icon: TestTube2 },
  { to: "/prep", label: "Prep", icon: GraduationCap },
  { to: "/grade", label: "Grade", icon: Layers3 },
  { to: "/info", label: "Info", icon: Info },
  { to: "/help", label: "Help", icon: HelpCircle },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/login", label: "Login", icon: UserRound }
];

export function Sidebar() {
  const { settings } = useSettings();
  const { currentUser } = useAuth();
  const t = (text: string) => translate(text, settings.language);
  const visibleItems = currentUser ? items : items.filter((item) => item.to === "/login");

  return (
    <aside className="fixed inset-x-0 bottom-0 z-30 border-t border-white/12 bg-[var(--sidebar)] px-2 py-2 md:inset-y-0 md:left-0 md:right-auto md:w-64 md:border-r md:border-t-0 md:px-5 md:py-6">
      <div className="hidden md:block">
        <Link aria-label={currentUser ? "Go to home screen" : "Go to login screen"} to={currentUser ? "/" : "/login"} className="block rounded-lg transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/70">
          <Logo />
        </Link>
      </div>
      <nav className={`${currentUser ? "grid-cols-8" : "grid-cols-1"} grid gap-1 md:mt-10 md:grid-cols-1 md:gap-2`}>
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex min-h-14 items-center justify-center gap-3 rounded-lg px-2 text-xs font-bold transition md:justify-start md:px-4 md:text-sm ${
                  isActive
                    ? "bg-white text-[var(--accent)] shadow-soft"
                    : "text-slate-100 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="hidden md:inline">{t(item.label)}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
