import { initializeApp } from "firebase/app";
import { doc, getFirestore, increment, serverTimestamp, setDoc } from "firebase/firestore";
import { hasAnalyticsConsent } from "./analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAS9iJUibBpgHGEr6IdsCjzUXkshdvhA0M",
  authDomain: "nps-web-a4f1f.firebaseapp.com",
  projectId: "nps-web-a4f1f",
  storageBucket: "nps-web-a4f1f.firebasestorage.app",
  messagingSenderId: "605832745742",
  appId: "1:605832745742:web:bf28a2ad17398f7c217d5f",
  measurementId: "G-7DR4H7QMHX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type RemoteUsageDetails = Record<string, string | number | boolean | null>;

function getAnonymousVisitorId() {
  const key = "nps-anonymous-visitor-id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;

  const generated = crypto.randomUUID();
  localStorage.setItem(key, generated);
  return generated;
}

function getAnonymousUserLabel(anonymousVisitorId: string) {
  return `User ${anonymousVisitorId.slice(0, 6).toUpperCase()}`;
}

function safeDetails(details: RemoteUsageDetails) {
  return Object.fromEntries(
    Object.entries(details).filter(([, value]) => ["string", "number", "boolean"].includes(typeof value) || value === null)
  );
}

function lastSelectedGrade(details: RemoteUsageDetails) {
  return typeof details.grade === "number" ? details.grade : null;
}

export async function recordRemoteUsage(eventName: string, details: RemoteUsageDetails = {}) {
  if (!hasAnalyticsConsent()) return;

  try {
    const anonymousVisitorId = getAnonymousVisitorId();
    const detailsToSave = safeDetails(details);
    const selectedGrade = lastSelectedGrade(details);
    await setDoc(
      doc(db, "usageUsers", anonymousVisitorId),
      {
        anonymousVisitorId,
        userLabel: getAnonymousUserLabel(anonymousVisitorId),
        lastEventName: eventName,
        lastPagePath: window.location.pathname,
        lastDetails: detailsToSave,
        ...(selectedGrade === null ? {} : { lastSelectedGrade: selectedGrade }),
        userAgent: navigator.userAgent,
        eventsRecorded: increment(1),
        [`eventCounts.${eventName}`]: increment(1),
        totalStudySeconds: eventName === "study_time" && typeof details.seconds === "number" ? increment(details.seconds) : increment(0),
        firstSeenAt: serverTimestamp(),
        lastSeenAt: serverTimestamp()
      },
      { merge: true }
    );

    await setDoc(
      doc(db, "usageStats", "totals"),
      {
        eventsRecorded: increment(1),
        [`eventCounts.${eventName}`]: increment(1),
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );

    await setDoc(
      doc(db, "usageStats", "latestEvent"),
      {
        eventName,
        anonymousVisitorId,
        userLabel: getAnonymousUserLabel(anonymousVisitorId),
        details: detailsToSave,
        pagePath: window.location.pathname,
        updatedAt: serverTimestamp()
      },
      { merge: true }
    );
  } catch (error) {
    console.warn("Remote usage tracking failed", error);
  }
}
