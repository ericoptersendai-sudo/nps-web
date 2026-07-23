import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactElement } from "react";
import { AppLayout } from "./layouts/AppLayout";
import { GradeProvider } from "./context/GradeContext";
import { ProgressProvider } from "./context/ProgressContext";
import { SettingsProvider } from "./context/SettingsContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { UsageAnalyticsProvider } from "./context/UsageAnalyticsContext";
import { HomePage } from "./pages/HomePage";
import { TestPage } from "./pages/TestPage";
import { PrepPage } from "./pages/PrepPage";
import { GradePage } from "./pages/GradePage";
import { InfoPage } from "./pages/InfoPage";
import { SettingsPage } from "./pages/SettingsPage";
import { LoginPage } from "./pages/LoginPage";
import { HelpPage } from "./pages/HelpPage";
import { BadgesPage } from "./pages/BadgesPage";

function RequireAuth({ children }: { children: ReactElement }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <SettingsProvider>
      <GradeProvider>
        <ProgressProvider>
          <AuthProvider>
            <UsageAnalyticsProvider>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
                  <Route path="/test" element={<RequireAuth><TestPage /></RequireAuth>} />
                  <Route path="/prep" element={<RequireAuth><PrepPage /></RequireAuth>} />
                  <Route path="/badges" element={<RequireAuth><BadgesPage /></RequireAuth>} />
                  <Route path="/grade" element={<RequireAuth><GradePage /></RequireAuth>} />
                  <Route path="/info" element={<RequireAuth><InfoPage /></RequireAuth>} />
                  <Route path="/help" element={<RequireAuth><HelpPage /></RequireAuth>} />
                  <Route path="/settings" element={<RequireAuth><SettingsPage /></RequireAuth>} />
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </UsageAnalyticsProvider>
          </AuthProvider>
        </ProgressProvider>
      </GradeProvider>
    </SettingsProvider>
  );
}
