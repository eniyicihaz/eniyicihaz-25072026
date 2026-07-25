/* 01 — Clinic website field, provider profile (eniyicihaz.com) */

export const websiteField = {
    id: "url-website",
    label: "Web siteniz",
    placeholder: "https://klinigim.com"
};

/* 02 — Webhook endpoint, dark developer settings, invalid state */

export const webhookField = {
    id: "url-webhook",
    label: "Webhook endpoint",
    value: "not-a-valid-url",
    error: "Enter a valid HTTPS URL"
};

/* 03 — Portfolio link, job application, required */

export const portfolioField = {
    id: "url-portfolio",
    label: "Portfolio URL",
    placeholder: "https://yourwork.com",
    hint: "A link to recent work — Behance, a personal site, anything"
};

/* 04 — Social profile link, read-only verified */

export const verifiedField = {
    id: "url-verified",
    label: "Website",
    value: "https://eniyicihaz.com",
    note: "Doğrulandı"
};

/* 05 — CI/CD redirect URL, disabled while deployment locked */

export const redirectField = {
    id: "url-redirect",
    label: "OAuth redirect URL",
    value: "https://app.fieldnote.studio/auth/callback",
    note: "Locked during the active deployment freeze"
};
