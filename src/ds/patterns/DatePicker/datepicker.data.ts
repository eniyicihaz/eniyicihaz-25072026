/* 01 — Appointment booking (eniyicihaz.com) */

export const appointmentTypes = [
    { label: "Ücretsiz işitme testi", duration: "20 dakika", selected: true },
    { label: "Cihaz bakımı", duration: "15 dakika", selected: false },
    { label: "Kontrol muayenesi", duration: "30 dakika", selected: false }
];

export const appointmentClinics = ["Kadıköy", "Bakırköy", "Şişli", "Video görüşme"];

export const appointmentFacts = [
    { key: "En erken", value: "Yarın, 10:30" },
    { key: "SGK katkısı", value: "Karşılanır" },
    { key: "İptal", value: "24 saat öncesine kadar ücretsiz" }
];

/* 02 — Hotel stay dates */

export const stayProperty = {
    title: "Canal-side loft with a working fireplace",
    location: "Kralingen, Rotterdam",
    score: "4.94",
    reviews: "218"
};

export const stayPricing = [
    { key: "5 nights", value: "€920" },
    { key: "Cleaning", value: "€65" },
    { key: "Service", value: "€112" }
];

/* 03 — Project deadline */

export const projectMeta = {
    id: "REL-412",
    title: "Webhook retries double-count against quota",
    assignee: "Priya Anand"
};

export const projectDates = [
    { label: "Started", value: "2026-07-08", editable: false },
    { label: "Due date", value: "2026-07-28", editable: true },
    { label: "Target release", value: "2026-08-01", editable: false }
];

export const projectMilestones = [
    { label: "Fix identified", done: true },
    { label: "Patch reviewed", done: true },
    { label: "Deployed to staging", done: false },
    { label: "Deployed to production", done: false }
];

/* 04 — Subscription billing */

export const billingPlan = {
    name: "Business",
    price: "$48",
    period: "per editor / month",
    renews: "2026-08-01"
};

export const billingHistory = [
    { date: "2026-07-01", amount: "$1,152.00", status: "Paid" },
    { date: "2026-06-01", amount: "$1,152.00", status: "Paid" },
    { date: "2026-05-01", amount: "$960.00", status: "Paid" }
];

/* 05 — Flight departure */

export const flightRoute = {
    from: "Amsterdam (AMS)",
    to: "Lisbon (LIS)",
    cabin: "Economy",
    passengers: "1 adult"
};

export const flightFares = [
    { date: "24 Jul", price: "€89", cheapest: false },
    { date: "25 Jul", price: "€76", cheapest: true },
    { date: "26 Jul", price: "€94", cheapest: false },
    { date: "27 Jul", price: "€108", cheapest: false }
];

export const flightTrust = [
    "No change fees",
    "Price freeze for 48h",
    "24/7 human support"
];
