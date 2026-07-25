/* 01 — Clinic finder (eniyicihaz.com) */

export const clinics = [
    {
        name: "Kadıköy Şubesi",
        address: "Bahariye Cd. No 42, Kadıköy",
        distance: "1.2 km",
        today: "09:00 – 18:00",
        audiologists: 3,
        sgk: true
    },
    {
        name: "Bakırköy Şubesi",
        address: "İncirli Cd. No 17, Bakırköy",
        distance: "6.8 km",
        today: "09:00 – 18:00",
        audiologists: 2,
        sgk: true
    },
    {
        name: "Şişli Şubesi",
        address: "Halaskargazi Cd. No 220, Şişli",
        distance: "9.4 km",
        today: "10:00 – 19:00",
        audiologists: 4,
        sgk: true
    }
];

export const clinicFilters = ["Tümü", "SGK anlaşmalı", "Cumartesi açık", "Otopark"];

/* 02 — Search results */

export const searchResults = [
    {
        title: "Deploying a monorepo with build filters",
        url: "relay.dev › docs › guides › monorepo",
        excerpt:
            "Configure build filters so only the affected workspaces rebuild on each push, cutting CI minutes on large repositories."
    },
    {
        title: "Turborepo and Relay — a working starter",
        url: "github.com › relay-dev › turborepo-starter",
        excerpt:
            "A template repository with preview environments, remote caching and per-package deploy targets already wired up."
    },
    {
        title: "Why our monorepo builds got 3× faster",
        url: "fieldnote.studio › journal › monorepo-builds",
        excerpt:
            "We spent a month optimising the wrong thing. Here is what actually moved the number, and the one change that did most of it."
    },
    {
        title: "Build filters — API reference",
        url: "relay.dev › docs › api › build-filters",
        excerpt:
            "Reference for the buildFilter option, including glob syntax, workspace globs and the dependsOn graph."
    }
];

/* 03 — Photo archive */

export const archiveShots = [
    { caption: "Wijnhaven at dawn", meta: "35mm · f/2", tone: "a" },
    { caption: "Grain store interior", meta: "50mm · f/1.8", tone: "b" },
    { caption: "Harbour cranes", meta: "85mm · f/4", tone: "c" },
    { caption: "Kralingse Plas", meta: "24mm · f/8", tone: "d" },
    { caption: "Workshop bench", meta: "35mm · f/2.8", tone: "e" },
    { caption: "Delfshaven, low tide", meta: "50mm · f/5.6", tone: "f" },
    { caption: "Erasmus bridge", meta: "24mm · f/11", tone: "c" },
    { caption: "Markthal ceiling", meta: "16mm · f/4", tone: "b" }
];

export const archiveMeta = {
    collection: "Rotterdam, 2019–2026",
    count: "412 photographs",
    page: "Page 3 of 52"
};

/* 04 — Transaction ledger */

export const ledgerRows = [
    { date: "20 Jul", merchant: "Albert Heijn", category: "Groceries", amount: "−€38.40", tone: "out" },
    { date: "20 Jul", merchant: "NS Reizigers", category: "Transport", amount: "−€12.60", tone: "out" },
    { date: "19 Jul", merchant: "Salary · Fieldnote BV", category: "Income", amount: "+€3,410.00", tone: "in" },
    { date: "19 Jul", merchant: "Spotify", category: "Subscriptions", amount: "−€11.99", tone: "out" },
    { date: "18 Jul", merchant: "Osteria Vela", category: "Restaurants", amount: "−€86.00", tone: "out" },
    { date: "18 Jul", merchant: "Transfer to Savings", category: "Internal", amount: "−€500.00", tone: "out" }
];

export const ledgerSummary = [
    { key: "In", value: "€3,410.00" },
    { key: "Out", value: "€1,284.62" },
    { key: "Net", value: "+€2,125.38" }
];

/* 05 — Long read */

export const chapterMeta = {
    series: "The Scheduler Papers",
    chapter: "Chapter 3",
    title: "Measuring the wrong thing for a year",
    read: "12 min read",
    published: "18 July 2026"
};

export const chapterBody = [
    "The first rewrite failed for a reason that took us eleven months to name. We were optimising throughput — jobs completed per minute — because throughput was the number on the dashboard, and the dashboard had been built by someone who left before any of us joined.",
    "Throughput was never the constraint. The constraint was queue depth at the ninety-ninth percentile, which is a different shape of problem entirely, and one that gets worse precisely when throughput looks healthiest.",
    "What follows is the instrumentation we should have written on day one, and the three graphs that made the answer obvious once we finally drew them."
];

export const chapterNav = {
    prev: "Chapter 2 — The dashboard nobody owned",
    next: "Chapter 4 — Three graphs and a rollback"
};
