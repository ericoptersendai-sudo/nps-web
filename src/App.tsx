import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { GradeProvider } from "./context/GradeContext";
import { ProgressProvider } from "./context/ProgressContext";
import { SettingsProvider } from "./context/SettingsContext";
import { HomePage } from "./pages/HomePage";
import { TestPage } from "./pages/TestPage";
import { PrepPage } from "./pages/PrepPage";
import { GradePage } from "./pages/GradePage";
import { InfoPage } from "./pages/InfoPage";
import { SettingsPage } from "./pages/SettingsPage";

export default function App() {
  return (
    <SettingsProvider>
      <GradeProvider>
        <ProgressProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/prep" element={<PrepPage />} />
              <Route path="/grade" element={<GradePage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProgressProvider>
      </GradeProvider>
    </SettingsProvider>
  );
}
