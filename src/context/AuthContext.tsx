import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Account = {
  username: string;
  passcode: string;
};

type AuthContextValue = {
  currentUser: string | null;
  createAccount: (username: string, passcode: string) => { ok: boolean; message: string };
  signIn: (username: string, passcode: string) => { ok: boolean; message: string };
  signOut: () => void;
};

const ACCOUNTS_KEY = "nps-local-accounts";
const CURRENT_USER_KEY = "nps-current-user";
const SESSION_USER_KEY = "nps-session-user";
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readAccounts() {
  try {
    const stored = localStorage.getItem(ACCOUNTS_KEY);
    return stored ? (JSON.parse(stored) as Account[]) : [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts: Account[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState(() => sessionStorage.getItem(SESSION_USER_KEY));

  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      createAccount(username, passcode) {
        const cleanUsername = username.trim();
        if (cleanUsername.length < 3) {
          return { ok: false, message: "Username must be at least 3 characters." };
        }
        if (passcode.length < 4) {
          return { ok: false, message: "Passcode must be at least 4 characters." };
        }

        const accounts = readAccounts();
        if (accounts.some((account) => account.username.toLowerCase() === cleanUsername.toLowerCase())) {
          return { ok: false, message: "That username already exists. Try logging in." };
        }

        saveAccounts([...accounts, { username: cleanUsername, passcode }]);
        localStorage.removeItem(CURRENT_USER_KEY);
        sessionStorage.setItem(SESSION_USER_KEY, cleanUsername);
        setCurrentUser(cleanUsername);
        return { ok: true, message: "Account created. You are signed in." };
      },
      signIn(username, passcode) {
        const cleanUsername = username.trim();
        const account = readAccounts().find((item) => item.username.toLowerCase() === cleanUsername.toLowerCase());
        if (!account || account.passcode !== passcode) {
          return { ok: false, message: "Username or passcode is incorrect." };
        }

        localStorage.removeItem(CURRENT_USER_KEY);
        sessionStorage.setItem(SESSION_USER_KEY, account.username);
        setCurrentUser(account.username);
        return { ok: true, message: "Signed in." };
      },
      signOut() {
        localStorage.removeItem(CURRENT_USER_KEY);
        sessionStorage.removeItem(SESSION_USER_KEY);
        setCurrentUser(null);
      }
    }),
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
