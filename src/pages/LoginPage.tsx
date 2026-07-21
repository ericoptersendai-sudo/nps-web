import { FormEvent, useState } from "react";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useAuth } from "../context/AuthContext";
import { useSettings } from "../context/SettingsContext";
import { useUsageAnalytics } from "../context/UsageAnalyticsContext";
import { trackEvent } from "../utils/analytics";
import { translate } from "../utils/i18n";

type Mode = "login" | "create" | "recover";

export function LoginPage() {
  const { currentUser, createAccount, resetPasscode, signIn, signOut } = useAuth();
  const { settings } = useSettings();
  const { recordAccountCreated, recordAccountLogin } = useUsageAnalytics();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [recoveryPasskey, setRecoveryPasskey] = useState("");
  const [message, setMessage] = useState("");
  const t = (text: string) => translate(text, settings.language);

  function submit(event: FormEvent) {
    event.preventDefault();
    const result = mode === "create" ? createAccount(username, passcode, recoveryPasskey) : mode === "recover" ? resetPasscode(username, recoveryPasskey, passcode) : signIn(username, passcode);
    setMessage(result.message);
    if (result.ok && mode === "recover") {
      setMode("login");
      setPasscode("");
      setRecoveryPasskey("");
      return;
    }
    if (result.ok) {
      if (mode === "create") {
        recordAccountCreated();
        trackEvent("account_created");
      } else {
        recordAccountLogin();
        trackEvent("account_login");
      }
      setPasscode("");
      setRecoveryPasskey("");
      navigate("/");
    }
  }

  return (
    <>
      <PageHeader eyebrow={t("Account")} title={t(currentUser ? `Signed in as ${currentUser}` : "Log in or create an account")} />
      <section className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <Panel>
          <div className="mb-5 grid grid-cols-3 gap-2 rounded-lg bg-slate-100 p-1 dark:bg-white/10">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className={`rounded-md px-4 py-3 font-extrabold transition ${mode === "login" ? "bg-white text-[var(--accent)] shadow-sm dark:bg-slate-950" : "text-slate-600 dark:text-slate-200"}`}
            >
              {t("Log in")}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("create");
                setMessage("");
              }}
              className={`rounded-md px-4 py-3 font-extrabold transition ${mode === "create" ? "bg-white text-[var(--accent)] shadow-sm dark:bg-slate-950" : "text-slate-600 dark:text-slate-200"}`}
            >
              {t("Create account")}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("recover");
                setMessage("");
              }}
              className={`rounded-md px-4 py-3 font-extrabold transition ${mode === "recover" ? "bg-white text-[var(--accent)] shadow-sm dark:bg-slate-950" : "text-slate-600 dark:text-slate-200"}`}
            >
              {t("Forgot passcode?")}
            </button>
          </div>

          <form onSubmit={submit} className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">{t("Username")}</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                name="username"
                autoComplete="username"
                required
                minLength={3}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950 dark:focus:ring-blue-950"
                placeholder={t("Choose a username")}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">{t("Passcode")}</span>
              <input
                value={passcode}
                onChange={(event) => setPasscode(event.target.value)}
                name={mode === "login" ? "current-password" : "new-password"}
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
                minLength={4}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950 dark:focus:ring-blue-950"
                placeholder={t(mode === "recover" ? "Enter a new passcode" : "Enter a passcode")}
              />
            </label>

            {mode !== "login" && (
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">{t("Recovery passkey")}</span>
                <input
                  value={recoveryPasskey}
                  onChange={(event) => setRecoveryPasskey(event.target.value)}
                  name="recovery-passkey"
                  autoComplete="off"
                  required
                  minLength={4}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950 dark:focus:ring-blue-950"
                  placeholder={t(mode === "create" ? "Make a recovery passkey" : "Enter your recovery passkey")}
                />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                  {t(mode === "create" ? "Save this somewhere private. It lets you reset your passcode later." : "Use the recovery passkey you made when creating the account.")}
                </span>
              </label>
            )}

            {message && (
              <p className={`rounded-lg px-4 py-3 text-sm font-extrabold ${message.includes("incorrect") || message.includes("exists") || message.includes("must") || message.includes("No account") || message.includes("does not") ? "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-100" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-100"}`}>
                {t(message)}
              </p>
            )}

            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-extrabold text-white shadow-soft">
              {mode === "create" ? <UserPlus size={18} /> : <LogIn size={18} />}
              {t(mode === "create" ? "Create account" : mode === "recover" ? "Reset passcode" : "Log in")}
            </button>
          </form>
        </Panel>

        <Panel>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">{t("Account status")}</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">{t(currentUser ? "You are signed in." : "No one is signed in.")}</h2>
          <p className="mt-3 font-semibold text-slate-600 dark:text-slate-300">
            {t("Accounts are saved in this browser so progress can feel more personal on this device.")}
          </p>
          {currentUser && (
            <button onClick={signOut} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-extrabold text-slate-700 hover:border-rose-500 hover:text-rose-600 dark:border-white/10 dark:text-slate-100">
              <LogOut size={18} /> {t("Sign out")}
            </button>
          )}
        </Panel>
      </section>
    </>
  );
}
