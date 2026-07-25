/* ----------------------------------------------------------
   01 — Audiologist reviews (eniyicihaz.com)
   ---------------------------------------------------------- */

export const audiologist = {
    initials: "AY",
    name: "Dr. Ayşe Yıldırım",
    role: "Odyolog · 14 yıl deneyim",
    clinic: "Kadıköy Şubesi",
    score: 4.9,
    count: "312 değerlendirme"
};

export const audiologistBreakdown = [
    { stars: 5, percent: 88 },
    { stars: 4, percent: 9 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 }
];

export const audiologistReviews = [
    {
        initials: "MK",
        name: "Mehmet K.",
        date: "2 hafta önce",
        score: 5,
        verified: "Cihaz uyumlandırma",
        body:
            "Babam için gittik. Acele ettirmediler, üç farklı cihazı denettiler ve hangisinin neden uygun olduğunu tek tek anlattılar. SGK işlemlerini de onlar hallettiler."
    },
    {
        initials: "SD",
        name: "Selin D.",
        date: "1 ay önce",
        score: 5,
        verified: "İşitme testi",
        body:
            "Randevu saatinde alındım, test 20 dakika sürdü ve sonucu odyogram üzerinden anlaşılır şekilde açıkladılar. Cihaz satmak için baskı yapmadılar."
    }
];

/* ----------------------------------------------------------
   02 — Restaurant guide
   ---------------------------------------------------------- */

export const restaurants = [
    {
        name: "Osteria Vela",
        cuisine: "Italian · Wijnhaven",
        price: "€€€",
        score: 5,
        count: "1,204",
        note: "Counter seats held for walk-ins",
        tone: "clay"
    },
    {
        name: "Kaya Ocakbaşı",
        cuisine: "Turkish grill · Kralingen",
        price: "€€",
        score: 5,
        count: "884",
        note: "Charcoal grill, no reservations after 20:00",
        tone: "sand"
    },
    {
        name: "Blauwe Ui",
        cuisine: "Modern Dutch · Delfshaven",
        price: "€€€€",
        score: 4,
        count: "412",
        note: "Six-course menu only",
        tone: "moss"
    }
];

/* ----------------------------------------------------------
   03 — Write a review
   ---------------------------------------------------------- */

export const reviewProduct = {
    name: "Vela Over-Ear",
    detail: "Aurelis Audio · Graphite",
    ordered: "Delivered 4 June 2026"
};

export const reviewCriteria = [
    { label: "Sound quality", score: 5, hint: "Balanced across the range" },
    { label: "Comfort", score: 4, hint: "Over long sessions" },
    { label: "Battery life", score: 5, hint: "Against the claimed 40 hours" },
    { label: "Value", score: 3, hint: "For what you paid" }
];

/* ----------------------------------------------------------
   04 — Course feedback
   ---------------------------------------------------------- */

export const courseMeta = {
    title: "Typography for Interface Designers",
    cohort: "Cohort 11 · Completed June 2026",
    score: 4.8,
    responses: "184 of 210 students"
};

export const courseScores = [
    { label: "Teaching quality", value: 5, figure: "4.9" },
    { label: "Course materials", value: 5, figure: "4.8" },
    { label: "Pace and workload", value: 4, figure: "4.2" },
    { label: "Would recommend", value: 5, figure: "4.9" }
];

export const courseQuote = {
    body:
        "The vertical rhythm module alone changed how I set every page since. Worth the ten weeks on its own.",
    initials: "TS",
    name: "Theo Sørensen",
    role: "Product Designer, Cadence"
};

/* ----------------------------------------------------------
   05 — Support satisfaction
   ---------------------------------------------------------- */

export const supportAgents = [
    {
        initials: "PA",
        name: "Priya Anand",
        handled: "412 tickets",
        score: 5,
        csat: "98%",
        median: "8m"
    },
    {
        initials: "HM",
        name: "Hugo Meier",
        handled: "308 tickets",
        score: 5,
        csat: "96%",
        median: "11m"
    },
    {
        initials: "NA",
        name: "Nadia Aziz",
        handled: "277 tickets",
        score: 4,
        csat: "91%",
        median: "14m"
    },
    {
        initials: "LO",
        name: "Lars Ødegård",
        handled: "195 tickets",
        score: 4,
        csat: "89%",
        median: "19m"
    }
];

export const supportSummary = [
    { key: "Team CSAT", value: "94%" },
    { key: "Median first reply", value: "12m" },
    { key: "Tickets this month", value: "1,192" }
];
