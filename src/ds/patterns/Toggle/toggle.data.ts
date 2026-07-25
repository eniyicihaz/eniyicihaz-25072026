/* 01 — Clinic notification preferences (eniyicihaz.com) */

export const notificationToggles = [
    { id: "tg-appt", label: "Randevu hatırlatmaları", description: "Randevudan 24 saat önce bildirim al", checked: true },
    { id: "tg-device", label: "Cihaz bakım uyarıları", description: "Bakım zamanı geldiğinde bildirim al", checked: true },
    { id: "tg-news", label: "Kampanya ve haberler", description: "Yeni ürün ve kampanyalardan haberdar ol", checked: false }
];

/* 02 — Dark settings panel, size variants */

export const settingsToggles = [
    { id: "tg-dark", label: "Dark mode", size: "sm" as const, checked: true },
    { id: "tg-analytics", label: "Usage analytics", size: "md" as const, checked: true },
    { id: "tg-beta", label: "Beta features", size: "lg" as const, checked: false }
];

/* 03 — Account security, required + disabled */

export const securityToggles = [
    { id: "tg-2fa", label: "Two-factor authentication", description: "Required for admin accounts", checked: true, required: true, disabled: true },
    { id: "tg-sso", label: "Single sign-on", description: "Managed by your organization", checked: true, disabled: true }
];

/* 04 — Feature flags, engineering dashboard, dark */

export const featureFlags = [
    { id: "tg-flag-search", label: "new-search-index", checked: true },
    { id: "tg-flag-checkout", label: "checkout-v2", checked: false },
    { id: "tg-flag-invoices", label: "async-invoices", checked: true }
];

/* 05 — Privacy consent, single large toggle */

export const consentToggle = {
    id: "tg-consent",
    label: "Share anonymized usage data",
    description: "Helps us improve device recommendations. You can change this anytime.",
    checked: false
};
