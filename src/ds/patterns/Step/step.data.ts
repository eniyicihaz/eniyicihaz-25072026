/* 01 — Hearing test appointment flow (eniyicihaz.com) */

export const appointmentSteps = [
    { number: 1, label: "Randevu türü", description: "İşitme testi seçildi", completed: true },
    { number: 2, label: "Tarih ve saat", description: "18 Temmuz, 09:00", completed: true },
    { number: 3, label: "İletişim bilgileri", description: "Bilgilerinizi girin", active: true },
    { number: 4, label: "Onay", description: "Randevunuzu onaylayın" }
];

/* 02 — Checkout flow, horizontal, dark */

export const checkoutSteps = [
    { number: 1, label: "Cart", completed: true },
    { number: 2, label: "Shipping", completed: true },
    { number: 3, label: "Payment", active: true },
    { number: 4, label: "Confirmation" }
];

/* 03 — Account verification, one disabled until prior step */

export const verificationSteps = [
    { number: 1, label: "Verify email", description: "sara@fieldnote.studio", completed: true },
    { number: 2, label: "Verify phone", description: "Confirm your recovery number", active: true },
    { number: 3, label: "Enable 2FA", description: "Requires phone verification first", disabled: true }
];

/* 04 — Deployment pipeline, dark, monospace */

export const pipelineSteps = [
    { number: 1, label: "Build", description: "Compiled in 12.4s", completed: true },
    { number: 2, label: "Test", description: "312 tests passed", completed: true },
    { number: 3, label: "Deploy", description: "Rolling out to production", active: true },
    { number: 4, label: "Verify", description: "Health checks pending" }
];

/* 05 — Onboarding checklist, single active step with extra detail slot */

export const onboardingSteps = [
    { number: 1, label: "Create your workspace", completed: true },
    { number: 2, label: "Invite your team", active: true, detail: "3 of 5 invites sent" },
    { number: 3, label: "Connect your first integration" },
    { number: 4, label: "Import existing data" }
];
