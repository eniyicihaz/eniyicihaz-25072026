/* 01 — Hearing test volume calibration (eniyicihaz.com) */

export const calibrationSteps = [
    { freq: "500 Hz", value: 40, unit: "dB" },
    { freq: "1 kHz", value: 35, unit: "dB" },
    { freq: "2 kHz", value: 45, unit: "dB" },
    { freq: "4 kHz", value: 50, unit: "dB" }
];

export const calibrationMeta = [
    { key: "Kulak", value: "Sağ" },
    { key: "Kulaklık", value: "TDH-39" },
    { key: "Kabin", value: "Ses yalıtımlı" }
];

/* 02 — Cart quantities */

export const cartItems = [
    { name: "Alva Lounge Chair", detail: "Oiled oak · Bouclé", price: "$1,240", qty: 1, tone: "sand" },
    { name: "Rue Dining Chair", detail: "Ash · Leather", price: "$420", qty: 4, tone: "clay" },
    { name: "Pica Stool", detail: "Powder-coated steel", price: "$240", qty: 2, tone: "stone" }
];

export const cartTotals = [
    { key: "Subtotal", value: "$3,400.00" },
    { key: "Delivery", value: "Free" },
    { key: "VAT (21%)", value: "$714.00" }
];

/* 03 — Ticket booking */

export const ticketTypes = [
    { name: "General admission", price: "€38", qty: 2, note: "16+ only" },
    { name: "Student", price: "€24", qty: 1, note: "Valid ID required at entry" },
    { name: "Under 12", price: "€0", qty: 0, note: "Free, still needs a ticket" }
];

export const eventMeta = {
    title: "Rietveld: The Working Harbour",
    venue: "Kunsthal Rotterdam",
    date: "Sat 25 July · 14:00",
    room: "Room 4 · Lower gallery"
};

/* 04 — API rate limit dashboard */

export const limitRows = [
    { label: "Requests per minute", value: 600, min: 60, max: 6000, step: 60, unit: "/min" },
    { label: "Concurrent connections", value: 25, min: 1, max: 100, step: 5, unit: "" },
    { label: "Webhook retries", value: 4, min: 0, max: 10, step: 1, unit: "" },
    { label: "Payload size limit", value: 256, min: 32, max: 1024, step: 32, unit: "KB" }
];

export const limitMeta = {
    plan: "Business",
    usage: "412 / 600 requests this minute",
    reset: "Resets in 38s"
};

/* 05 — Team seats billing */

export const seatPlans = [
    { role: "Editor", price: "$24", qty: 8, note: "Full access, can publish" },
    { role: "Viewer", price: "$0", qty: 14, note: "Read-only, free forever" },
    { role: "Guest", price: "$12", qty: 3, note: "Time-limited external access" }
];

export const seatSummary = [
    { key: "Billed monthly", value: "$192.00" },
    { key: "Next invoice", value: "1 Aug 2026" },
    { key: "Seats used", value: "25 of 30" }
];
