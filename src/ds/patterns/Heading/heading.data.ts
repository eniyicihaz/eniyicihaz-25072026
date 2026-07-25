/* 01 — Clinic landing hero (eniyicihaz.com) */

export const clinicHero = {
    eyebrow: "İşitme sağlığı",
    title: "Duymak, hayata\ngeri dönmektir.",
    lede: "18.000'den fazla kişi bizimle işitme sağlığına yeniden kavuştu."
};

/* 02 — Investor letter, ruled sections */

export const letterSections = [
    { level: "h1" as const, text: "Q2 2026 Shareholder Letter" },
    { level: "h2" as const, text: "Revenue and growth" },
    { level: "h2" as const, text: "Product" },
    { level: "h3" as const, text: "The scheduler rewrite" },
    { level: "h2" as const, text: "What is next" }
];

/* 03 — Dark product page, scale ramp */

export const scaleSamples = [
    { size: "3xl" as const, sample: "Ship it." },
    { size: "2xl" as const, sample: "Ship it faster." },
    { size: "xl" as const, sample: "Ship it faster than before." },
    { size: "lg" as const, sample: "Ship it faster than you thought possible." },
    { size: "md" as const, sample: "A quiet confirmation that it worked." },
    { size: "sm" as const, sample: "Deployed to production, 2 minutes ago." },
    { size: "xs" as const, sample: "Build 8f21c4 · eu-central-1 · 41s" }
];

/* 04 — Recipe card, warm editorial */

export const recipeHeading = {
    kicker: "Sunday cooking",
    title: "Slow-roast lamb shoulder with white beans",
    subtitle: "Serves six, needs about four and a half hours, mostly unattended."
};

/* 05 — Dashboard section headers */

export const dashboardSections = [
    { title: "Overview", color: "default" as const },
    { title: "Recent errors", color: "danger" as const },
    { title: "Scheduled maintenance", color: "warning" as const },
    { title: "All systems operational", color: "success" as const }
];
