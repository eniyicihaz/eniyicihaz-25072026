/* 01 — Hearing test booking form (eniyicihaz.com) */

export const bookingFields = [
    {
        id: "booking-name",
        label: "Ad Soyad",
        required: true,
        placeholder: "Hatice Yalçın"
    },
    {
        id: "booking-phone",
        label: "Telefon",
        description: "Randevu onayı SMS ile gönderilir",
        required: true,
        placeholder: "+90 5XX XXX XX XX"
    },
    {
        id: "booking-tc",
        label: "T.C. Kimlik No",
        description: "SGK sorgusu için gereklidir",
        required: true,
        error: "10 haneli bir numara girin",
        placeholder: "XXXXXXXXXXX"
    }
];

/* 02 — Job application form */

export const applicationFields = [
    {
        id: "app-name",
        label: "Full name",
        required: true,
        placeholder: "Sara Vollmer"
    },
    {
        id: "app-email",
        label: "Email",
        description: "We will only use this to follow up on your application",
        required: true,
        placeholder: "sara@example.com"
    },
    {
        id: "app-portfolio",
        label: "Portfolio URL",
        required: false,
        placeholder: "https://"
    }
];

export const applicationRole = {
    title: "Senior Product Designer",
    team: "Design · Rotterdam or remote"
};

/* 03 — API key generation, dark */

export const apiKeyFields = [
    {
        id: "key-name",
        label: "Key name",
        description: "Shown in the audit log whenever this key is used",
        required: true,
        placeholder: "Production webhook relay"
    },
    {
        id: "key-scope",
        label: "Scope",
        description: "Least privilege recommended",
        required: true,
        placeholder: "events:write"
    },
    {
        id: "key-expiry",
        label: "Expires",
        required: false,
        placeholder: "Never"
    }
];

/* 04 — Payment card form */

export const cardFields = [
    {
        id: "card-number",
        label: "Card number",
        required: true,
        error: "This card number looks incomplete",
        placeholder: "4242 4242 4242 4242"
    },
    {
        id: "card-name",
        label: "Name on card",
        required: true,
        placeholder: "S. Vollmer"
    },
    {
        id: "card-expiry",
        label: "Expiry",
        required: true,
        placeholder: "MM / YY"
    },
    {
        id: "card-cvc",
        label: "CVC",
        description: "3 digits on the back of your card",
        required: true,
        placeholder: "123"
    }
];

export const orderSummary = {
    plan: "Studio · Annual",
    total: "$288.00"
};

/* 05 — Newsletter preferences */

export const preferenceFields = [
    {
        id: "pref-name",
        label: "First name",
        description: "Used to personalise the greeting",
        required: false,
        placeholder: "Amara"
    },
    {
        id: "pref-topics",
        label: "Topics",
        description: "Comma-separated — design, engineering, culture",
        required: false,
        placeholder: "design, engineering"
    },
    {
        id: "pref-frequency",
        label: "Frequency",
        required: true,
        placeholder: "Weekly"
    }
];
