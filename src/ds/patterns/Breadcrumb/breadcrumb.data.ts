import type { BreadcrumbItem } from "../../components/ui/atoms/Breadcrumb/Breadcrumb.types";

/* 01 — Hearing aid catalogue (eniyicihaz.com) */

export const deviceCrumbs: BreadcrumbItem[] = [
    { label: "Ana sayfa", href: "#0" },
    { label: "İşitme cihazları", href: "#0" },
    { label: "Kulak arkası (BTE)", href: "#0" },
    { label: "Signia Pure Charge&Go 7AX", current: true }
];

export const deviceSpecs = [
    { key: "Tip", value: "Kulak arkası · Şarjlı" },
    { key: "Bluetooth", value: "iOS ve Android" },
    { key: "Pil ömrü", value: "36 saat" },
    { key: "Garanti", value: "3 yıl" }
];

export const deviceActions = ["Karşılaştır", "Deneme randevusu"];

/* 02 — Documentation */

export const docsCrumbs: BreadcrumbItem[] = [
    { label: "Docs", href: "#0" },
    { label: "API", href: "#0" },
    { label: "Events", href: "#0" },
    { label: "POST /v1/events", current: true }
];

export const docsSnippet = [
    'curl -X POST https://api.relay.dev/v1/events \\',
    '  -H "Authorization: Bearer $RELAY_TOKEN" \\',
    '  -d \'{"type":"order.created","data":{"id":"NW-40218"}}\''
].join("\n");

export const docsToc = [
    { label: "Request body", active: true },
    { label: "Idempotency", active: false },
    { label: "Responses", active: false },
    { label: "Rate limits", active: false }
];

/* 03 — File manager */

export const fileCrumbs: BreadcrumbItem[] = [
    { label: "Team drive", href: "#0" },
    { label: "Design", href: "#0" },
    { label: "2026", href: "#0" },
    { label: "Brand refresh", current: true }
];

export const files = [
    { name: "logo-explorations.fig", meta: "Yuki Tanaka · 2h ago", size: "48.2 MB", kind: "fig" },
    { name: "type-specimen.pdf", meta: "Marta Kovač · Yesterday", size: "8.1 MB", kind: "pdf" },
    { name: "colour-tokens.json", meta: "Jonah Reyes · 3 days ago", size: "24 KB", kind: "json" },
    { name: "Photography", meta: "142 items", size: "—", kind: "folder" }
];

/* 04 — Property listing */

export const stayCrumbs: BreadcrumbItem[] = [
    { label: "Netherlands", href: "#0" },
    { label: "South Holland", href: "#0" },
    { label: "Rotterdam", href: "#0" },
    { label: "Kralingen", current: true }
];

export const stayMeta = {
    title: "Canal-side loft with a working fireplace",
    host: "Hosted by Rina",
    detail: "Entire loft · 4 guests · 2 bedrooms · 1 bath",
    score: "4.94",
    reviews: "218 reviews",
    price: "€184",
    unit: "night"
};

/* 05 — Course lesson */

export const lessonCrumbs: BreadcrumbItem[] = [
    { label: "My courses", href: "#0" },
    { label: "Typography for Interface Designers", href: "#0" },
    { label: "Module 3 · Typesetting for screens", href: "#0" },
    { label: "Lesson 4 — Optical sizes", current: true }
];

export const lessonNav = {
    prev: "Lesson 3 — Measure and line length",
    next: "Lesson 5 — Hyphenation and justification"
};

export const lessonResources = [
    { label: "Lesson transcript", meta: "PDF · 240 KB" },
    { label: "Specimen file", meta: "Figma" },
    { label: "Reading list", meta: "6 links" }
];
