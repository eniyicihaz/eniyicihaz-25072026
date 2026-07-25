/* 01 — Clinic footer links (eniyicihaz.com) */

export const clinicFooterGroups = [
    {
        title: "Hizmetler",
        links: ["İşitme testi", "Cihaz bakımı", "SGK bilgilendirme", "Randevu al"]
    },
    {
        title: "Kurumsal",
        links: ["Hakkımızda", "Şubelerimiz", "Kariyer", "Basın"]
    },
    {
        title: "Destek",
        links: ["Sıkça sorulan sorular", "İletişim", "Gizlilik politikası"]
    }
];

export const clinicExternal = { label: "SGK e-Devlet sorgulama", href: "#0" };

/* 02 — Documentation "see also" list */

export const docsRelated = [
    { label: "Authentication", href: "#0" },
    { label: "Rate limits", href: "#0" },
    { label: "Idempotency keys", href: "#0" },
    { label: "Webhook signatures", href: "#0" }
];

export const docsExternal = [
    { label: "OpenAPI specification", href: "#0" },
    { label: "Postman collection", href: "#0" }
];

/* 03 — Breaking news, inline citations, dark */

export const articleParagraphs = [
    {
        before: "The court's ruling cites ",
        link: { label: "the 2020 Schrems II judgment", href: "#0" },
        after: " directly, closing a loophole that had persisted for six years."
    },
    {
        before: "Full documents are available in ",
        link: { label: "the public case file", href: "#0" },
        after: ", though several exhibits remain sealed."
    }
];

/* 04 — Pricing plan comparison, feature links */

export const pricingLinks = [
    { label: "What counts as an event?", href: "#0" },
    { label: "Compare all plans in detail", href: "#0" }
];

/* 05 — Danger zone, destructive links */

export const dangerActions = [
    { label: "Transfer ownership", href: "#0", variant: "default" as const },
    { label: "Export all data", href: "#0", variant: "default" as const },
    { label: "Delete this workspace", href: "#0", variant: "danger" as const }
];
