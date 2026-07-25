/* 01 — No appointments (eniyicihaz.com) */

export const appointmentNext = [
    { label: "Ücretsiz işitme testi", meta: "20 dakika · Ücretsiz" },
    { label: "Cihaz bakım kontrolü", meta: "15 dakika · Ücretsiz" },
    { label: "Kontrol muayenesi", meta: "30 dakika" }
];

export const appointmentClinics = ["Kadıköy", "Bakırköy", "Şişli", "Video görüşme"];

/* 02 — Empty inbox */

export const inboxFolders = [
    { label: "Inbox", count: 0, active: true },
    { label: "Snoozed", count: 3, active: false },
    { label: "Sent", count: 0, active: false },
    { label: "Archive", count: 1284, active: false }
];

export const inboxStreak = {
    days: "6",
    label: "days at zero",
    note: "Longest run this year is 11 days."
};

/* 03 — Search with no results */

export const searchAttempted = "audiometry booth calibration iso 8253";

export const searchSuggestions = [
    "Check the spelling of technical terms",
    "Try fewer words — three is usually enough",
    "Search the API reference separately"
];

export const searchAlternatives = [
    { label: "audiometry calibration", count: "18 results" },
    { label: "ISO 8253", count: "6 results" },
    { label: "booth setup guide", count: "24 results" }
];

/* 04 — Cart */

export const cartSaved = [
    { name: "Alva Lounge Chair", price: "$1,240", tone: "sand" },
    { name: "Marlow Floor Lamp", price: "$480", tone: "clay" },
    { name: "Sten Coffee Table", price: "$890", tone: "stone" }
];

export const cartPerks = [
    "Free delivery over $500",
    "30-day returns, collected from you",
    "Made to order in Rotterdam"
];

/* 05 — First project */

export const projectTemplates = [
    {
        name: "Astro + Turborepo",
        detail: "Monorepo with preview environments",
        meta: "TypeScript · 2 min"
    },
    {
        name: "Next.js commerce",
        detail: "Storefront with checkout wired up",
        meta: "TypeScript · 3 min"
    },
    {
        name: "Static marketing site",
        detail: "Content collections and a blog",
        meta: "MDX · 1 min"
    }
];

export const projectSteps = [
    "Connect a repository",
    "Pick a framework preset",
    "Deploy on every push"
];
