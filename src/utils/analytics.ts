export const ANALYTICS_CONSENT_KEY = "nps-cookie-consent";
export const GOOGLE_ANALYTICS_ID = "G-F87NC8VGPD";

type GtagCommand = "js" | "config" | "event" | "consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
  }
}

let analyticsLoaded = false;

export function hasAnalyticsConsent() {
  return localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted";
}

export function loadGoogleAnalytics() {
  if (!hasAnalyticsConsent() || analyticsLoaded) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args) {
      window.dataLayer?.push(args);
    };
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  window.gtag("config", GOOGLE_ANALYTICS_ID, {
    send_page_view: false,
    anonymize_ip: true
  });
  analyticsLoaded = true;
}

export function trackPageView(path: string) {
  if (!hasAnalyticsConsent()) return;
  loadGoogleAnalytics();
  window.gtag?.("config", GOOGLE_ANALYTICS_ID, {
    page_path: path,
    anonymize_ip: true
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!hasAnalyticsConsent()) return;
  loadGoogleAnalytics();
  window.gtag?.("event", name, params);
}
