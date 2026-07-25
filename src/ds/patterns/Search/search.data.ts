/* 01 — Clinic site header search (eniyicihaz.com) */

export const siteSearch = {
    id: "srch-site",
    placeholder: "Cihaz, hizmet veya makale ara...",
    buttonLabel: "Ara"
};

/* 02 — Marketplace product search, no button, large */

export const marketSearch = {
    id: "srch-market",
    placeholder: "Search 40,000+ products",
    showButton: false
};

/* 03 — Docs site search, dark, keyboard hint */

export const docsSearch = {
    id: "srch-docs",
    placeholder: "Search documentation...",
    showButton: false,
    shortcut: "⌘K"
};

/* 04 — Admin table filter search, compact, disabled while loading */

export const tableSearch = {
    id: "srch-table",
    placeholder: "Filter by name or email",
    buttonLabel: "Filter",
    disabled: true,
    note: "Loading device inventory…"
};

/* 05 — Support knowledge base search with recent queries */

export const helpSearch = {
    id: "srch-help",
    placeholder: "How can we help?",
    buttonLabel: "Search",
    recent: ["cihaz eşleştirme", "pil değişimi", "garanti süresi"]
};
