/* 01 — Clinic account signup (eniyicihaz.com) */

export const signupStrength = {
    id: "pws-signup",
    label: "Ad Soyad",
    value: "Sar4Vollmer!23",
    score: 3 as const,
    strengthLabel: "Güçlü şifre"
};

/* 02 — Weak password, dark developer console */

export const weakStrength = {
    id: "pws-weak",
    value: "password1",
    score: 1 as const,
    strengthLabel: "Weak — easily guessed"
};

/* 03 — Enterprise onboarding, live requirement checklist */

export const enterpriseStrength = {
    id: "pws-enterprise",
    value: "Tr0ub4dor&3xyz",
    score: 4 as const,
    strengthLabel: "Excellent",
    requirements: [
        { label: "At least 12 characters", met: true },
        { label: "One uppercase letter", met: true },
        { label: "One number", met: true },
        { label: "One symbol", met: true }
    ]
};

/* 04 — Empty state, before typing */

export const emptyStrength = {
    id: "pws-empty",
    score: 0 as const
};

/* 05 — Banking app, medium strength, currency-style card */

export const bankStrength = {
    id: "pws-bank",
    value: "Yalcin1985",
    score: 2 as const,
    strengthLabel: "Fair — add a symbol to improve"
};
