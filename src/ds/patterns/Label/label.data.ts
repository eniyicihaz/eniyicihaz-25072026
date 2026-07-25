/* 01 — Hearing test booking fields (eniyicihaz.com) */

export const bookingFields = [
    { id: "b-name", text: "Ad Soyad", required: true, placeholder: "Hatice Yalçın" },
    {
        id: "b-tc",
        text: "T.C. Kimlik No",
        required: true,
        helper: "SGK sorgusu için gereklidir",
        placeholder: "XXXXXXXXXXX"
    },
    {
        id: "b-note",
        text: "Eklemek istediğiniz not",
        optional: true,
        helper: "Örn. tercih ettiğiniz saat aralığı",
        placeholder: "İsteğe bağlı"
    }
];

/* 02 — Job application form */

export const applicationFields = [
    { id: "a-name", text: "Full name", required: true, placeholder: "Sara Vollmer" },
    { id: "a-email", text: "Email", required: true, placeholder: "sara@example.com" },
    {
        id: "a-portfolio",
        text: "Portfolio URL",
        optional: true,
        helper: "A link to recent work — Figma, a site, anything",
        placeholder: "https://"
    }
];

/* 03 — API settings, dark, one disabled field */

export const apiFields = [
    { id: "k-name", text: "Key name", required: true, placeholder: "Production webhook relay" },
    {
        id: "k-scope",
        text: "Scope",
        required: true,
        helper: "Least privilege recommended",
        placeholder: "events:write"
    },
    {
        id: "k-created",
        text: "Created",
        disabled: true,
        placeholder: "18 July 2026 · cannot be changed"
    }
];

/* 04 — Checkout billing form */

export const billingFields = [
    { id: "c-card", text: "Card number", required: true, placeholder: "4242 4242 4242 4242" },
    { id: "c-name", text: "Name on card", required: true, placeholder: "S. Vollmer" },
    {
        id: "c-vat",
        text: "VAT number",
        optional: true,
        helper: "Reverse charge applied for valid EU numbers",
        placeholder: "NL123456789B01"
    }
];

/* 05 — Newsletter preferences, editorial */

export const preferenceFields = [
    {
        id: "p-name",
        text: "First name",
        optional: true,
        helper: "Used to personalise the greeting",
        placeholder: "Amara"
    },
    { id: "p-frequency", text: "Frequency", required: true, placeholder: "Weekly" }
];
