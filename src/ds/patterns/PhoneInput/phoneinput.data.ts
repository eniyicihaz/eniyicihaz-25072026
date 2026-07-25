/* 01 — Clinic appointment booking, required (eniyicihaz.com) */

export const bookingField = {
    id: "phi-booking",
    label: "Telefon numaranız",
    placeholder: "(5__) ___ __ __"
};

/* 02 — Checkout shipping contact, invalid state */

export const checkoutField = {
    id: "phi-checkout",
    label: "Contact phone",
    value: "532 12",
    error: "Enter a complete phone number"
};

/* 03 — Account security, add phone for 2FA, dark */

export const securityField = {
    id: "phi-security",
    label: "Recovery phone number",
    placeholder: "(5__) ___ __ __",
    hint: "Used only to verify sign-ins from new devices"
};

/* 04 — Verified phone, read-only profile display */

export const profileField = {
    id: "phi-profile",
    label: "Telefon",
    value: "532 104 27 88",
    note: "Doğrulandı"
};

/* 05 — Support ticket, disabled while pending SMS verification */

export const supportField = {
    id: "phi-support",
    label: "Phone number",
    value: "505 918 44 21",
    note: "Verification code sent — field locked until confirmed"
};
