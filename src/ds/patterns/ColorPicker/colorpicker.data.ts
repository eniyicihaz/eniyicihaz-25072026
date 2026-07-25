/* 01 — Hearing aid finish (eniyicihaz.com) */

export const deviceFinishes = [
    { name: "Grafit", hex: "#3f4550", note: "Koyu saç için" },
    { name: "Kum bej", hex: "#c8b89c", note: "Ten tonuna yakın" },
    { name: "Gümüş", hex: "#b9bcc2", note: "Gri saç için" },
    { name: "Kahve", hex: "#5a4433", note: "Koyu kahve saç" },
    { name: "Şampanya", hex: "#d8c9a8", note: "Açık ton" },
    { name: "Siyah", hex: "#1c1f26", note: "Gözlükle uyumlu" }
];

export const deviceFinishMeta = [
    { key: "Kaplama", value: "Mat, anti-alerjik" },
    { key: "Değişim", value: "Ücretsiz, 30 gün içinde" },
    { key: "Teslim", value: "Stoktan, 2 gün" }
];

/* 02 — Brand token editor */

export const brandTokens = [
    { name: "brand/primary", hex: "#2563eb", usage: "Buttons, links, focus rings" },
    { name: "brand/ink", hex: "#0b1220", usage: "Headings and body text" },
    { name: "brand/surface", hex: "#f7f8fa", usage: "Page and card backgrounds" },
    { name: "brand/success", hex: "#16a34a", usage: "Confirmations and positive deltas" },
    { name: "brand/danger", hex: "#dc2626", usage: "Destructive actions only" }
];

export const contrastChecks = [
    { pair: "ink on surface", ratio: "16.2:1", grade: "AAA", pass: true },
    { pair: "primary on white", ratio: "5.9:1", grade: "AA", pass: true },
    { pair: "success on white", ratio: "3.4:1", grade: "Fail", pass: false }
];

/* 03 — Paint sample */

export const paintColour = {
    name: "Grain Store Grey",
    code: "No. 214",
    hex: "#8b8d84",
    finish: "Estate Emulsion",
    lrv: "34"
};

export const paintCoordinates = [
    { name: "Chalk White", hex: "#efece3" },
    { name: "Deep Slate", hex: "#3e4245" },
    { name: "Ochre", hex: "#b4884a" }
];

export const paintDetails = [
    { key: "Coverage", value: "60 m² per 2.5 L" },
    { key: "Coats", value: "Two recommended" },
    { key: "Drying", value: "2 hours, touch dry" }
];

/* 04 — Team calendar labels */

export const calendarLabels = [
    { name: "Design", hex: "#7c3aed", count: 12 },
    { name: "Engineering", hex: "#2563eb", count: 28 },
    { name: "Customer calls", hex: "#16a34a", count: 9 },
    { name: "Personal", hex: "#f59e0b", count: 6 },
    { name: "Do not book", hex: "#dc2626", count: 3 }
];

export const calendarEvents = [
    { time: "09:30", label: "Design review", cat: "Design", hex: "#7c3aed" },
    { time: "11:00", label: "Cycle planning", cat: "Engineering", hex: "#2563eb" },
    { time: "13:00", label: "Lunch — blocked", cat: "Do not book", hex: "#dc2626" },
    { time: "15:00", label: "Northshore check-in", cat: "Customer calls", hex: "#16a34a" }
];

/* 05 — Kit designer */

export const kitZones = [
    { zone: "Shirt body", hex: "#0f4c81" },
    { zone: "Sleeves", hex: "#e8b427" },
    { zone: "Collar", hex: "#ffffff" },
    { zone: "Shorts", hex: "#0f4c81" },
    { zone: "Socks", hex: "#e8b427" }
];

export const kitMeta = {
    club: "Rotterdam Noord",
    season: "2026 / 27 Home",
    fabric: "Recycled polyester, 148 gsm",
    lead: "Made to order · 3 weeks"
};

export const kitPresets = [
    { name: "Classic", primary: "#0f4c81", secondary: "#e8b427" },
    { name: "Away", primary: "#f5f3ee", secondary: "#0f4c81" },
    { name: "Third", primary: "#1c1f26", secondary: "#c9a227" }
];
