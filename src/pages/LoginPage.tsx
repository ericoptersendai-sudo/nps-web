import { FormEvent, useState } from "react";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { useAuth } from "../context/AuthContext";

type Mode = "login" | "create";

export function LoginPage() {
  const { currentUser, createAccount, signIn, signOut } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const result = mode === "create" ? createAccount(username, passcode) : signIn(username, passcode);
    setMessage(result.message);
    if (result.ok) {
      setPasscode("");
    }
  }

  return (
    <>
      <PageHeader eyebrow="Account" title={currentUser ? `Signed in as ${currentUser}` : "Log in or create an account"} />
      <section className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <Panel>
          <div className="mb-5 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1 dark:bg-white/10">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className={`rounded-md px-4 py-3 font-extrabold transition ${mode === "login" ? "bg-white text-[var(--accent)] shadow-sm dark:bg-slate-950" : "text-slate-600 dark:text-slate-200"}`}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("create");
                setMessage("");
              }}
              className={`rounded-md px-4 py-3 font-extrabold transition ${mode === "create" ? "bg-white text-[var(--accent)] shadow-sm dark:bg-slate-950" : "text-slate-600 dark:text-slate-200"}`}
            >
              Create account
            </button>
          </div>

          <form onSubmit={submit} className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">Username</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                name="username"
                autoComplete="username"
                required
                minLength={3}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950 dark:focus:ring-blue-950"
                placeholder="Choose a username"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">Passcode</span>
              <input
                value={passcode}
                onChange={(event) => setPasscode(event.target.value)}
                name={mode === "create" ? "new-password" : "current-password"}
                type="password"
                autoComplete={mode === "create" ? "new-password" : "current-password"}
                required
                minLength={4}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold outline-none transition focus:border-[var(--accent)] focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950 dark:focus:ring-blue-950"
                placeholder="Enter a passcode"
              />
            </label>

            {message && (
              <p className={`rounded-lg px-4 py-3 text-sm font-extrabold ${message.includes("incorrect") || message.includes("exists") || message.includes("must") ? "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-100" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-100"}`}>
                {message}
              </p>
            )}

            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 font-extrabold text-white shadow-soft">
              {mode === "create" ? <UserPlus size={18} /> : <LogIn size={18} />}
              {mode === "create" ? "Create account" : "Log in"}
            </button>
          </form>
        </Panel>

        <Panel>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">Account status</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">{currentUser ? "You are signed in." : "No one is signed in."}</h2>
          <p className="mt-3 font-semibold text-slate-600 dark:text-slate-300">
            Accounts are saved in this browser so progress can feel more personal on this device.
          </p>
          {currentUser && (
            <button onClick={signOut} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-extrabold text-slate-700 hover:border-rose-500 hover:text-rose-600 dark:border-white/10 dark:text-slate-100">
              <LogOut size={18} /> Sign out
            </button>
          )}
        </Panel>
      </section>
    </>
  );
}
