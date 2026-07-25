/* 01 — Clinic account login (eniyicihaz.com) */

export const loginField = {
    id: "pw-login",
    label: "Şifre",
    placeholder: "Şifrenizi girin",
    autocomplete: "current-password"
};

/* 02 — Signup form, dark, invalid state */

export const signupField = {
    id: "pw-signup",
    label: "Create a password",
    placeholder: "At least 8 characters",
    autocomplete: "new-password",
    invalid: true,
    error: "Password must include a number and a symbol"
};

/* 03 — Admin panel, required field */

export const adminField = {
    id: "pw-admin",
    label: "Confirm your password to continue",
    placeholder: "••••••••",
    autocomplete: "current-password"
};

/* 04 — Read-only credential vault entry */

export const vaultEntry = {
    id: "pw-vault",
    service: "AWS root account",
    updated: "Updated 14 days ago",
    value: "correcthorsebatterystaple9!",
    placeholder: ""
};

/* 05 — Locked account, disabled field */

export const lockedField = {
    id: "pw-locked",
    label: "New password",
    placeholder: "Account locked",
    note: "Too many failed attempts — try again in 15 minutes"
};
