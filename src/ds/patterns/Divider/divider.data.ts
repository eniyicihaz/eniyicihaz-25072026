/* 01 — Appointment summary (eniyicihaz.com) */

export const appointmentSections = [
    {
        label: "Randevu detayları",
        rows: [
            { key: "Tür", value: "Ücretsiz işitme testi" },
            { key: "Tarih", value: "25 Temmuz Cumartesi, 11:00" },
            { key: "Şube", value: "Kadıköy" }
        ]
    },
    {
        label: "Hasta bilgileri",
        rows: [
            { key: "Ad Soyad", value: "Hatice Yalçın" },
            { key: "Telefon", value: "+90 532 •••• 12" }
        ]
    },
    {
        label: "SGK bilgisi",
        rows: [
            { key: "Katkı payı", value: "Karşılanır" },
            { key: "Rapor durumu", value: "KBB raporu gerekli" }
        ]
    }
];

/* 02 — Pricing tiers separated by "or" */

export const pricingPlans = [
    { name: "Monthly", price: "$29", period: "billed monthly", note: "Cancel anytime" },
    { name: "Annual", price: "$24", period: "billed yearly", note: "Save 17%, most popular" }
];

/* 03 — Article with section breaks */

export const articleMeta = {
    title: "The scheduler papers, part 3",
    author: "Marta Kovač",
    read: "12 min read"
};

export const articleSections = [
    {
        heading: "Measuring the wrong thing",
        body: "We spent a year optimising throughput because throughput was the number on the dashboard, and the dashboard predated all of us."
    },
    {
        heading: "What the graphs actually showed",
        body: "Queue depth at the ninety-ninth percentile told a completely different story — one that got worse exactly when throughput looked healthiest."
    },
    {
        heading: "The instrumentation we should have shipped first",
        body: "Three counters, one histogram, and a single alert. It took an afternoon to build and eleven months to realise we needed it."
    }
];

/* 04 — Settings groups, dark */

export const settingsGroups = [
    {
        title: "Account",
        rows: ["Profile", "Password", "Two-factor authentication"]
    },
    {
        title: "Workspace",
        rows: ["Members", "Billing", "Integrations"]
    },
    {
        title: "Danger zone",
        rows: ["Transfer ownership", "Delete workspace"]
    }
];

/* 05 — Recipe method steps, editorial */

export const recipeTitle = "Slow-roast lamb shoulder with white beans";

export const recipeSteps = [
    {
        n: "01",
        title: "Sear the shoulder",
        body: "Pat the lamb dry and sear on all sides in a heavy pot until deeply browned, about 12 minutes total."
    },
    {
        n: "02",
        title: "Build the base",
        body: "Soften the garlic and anchovies in the rendered fat, then add the soaked beans and cover with stock."
    },
    {
        n: "03",
        title: "Roast, low and slow",
        body: "Return the lamb to the pot, cover, and roast at 140°C for four hours until the meat falls from the bone."
    },
    {
        n: "04",
        title: "Rest and serve",
        body: "Rest for twenty minutes before pulling the meat apart over the beans. Finish with rosemary and good oil."
    }
];
