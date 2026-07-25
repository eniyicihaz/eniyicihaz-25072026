/* 01 — Clinic appointment type (eniyicihaz.com) */

export const appointmentType = {
    name: "appointment-type",
    value: "control",
    options: [
        { label: "İlk değerlendirme", value: "first-visit" },
        { label: "Kontrol muayenesi", value: "control" },
        { label: "Cihaz ayarı", value: "device-fitting" }
    ]
};

/* 02 — Checkout shipping method, horizontal */

export const shippingMethod = {
    name: "shipping-method",
    value: "standard",
    direction: "horizontal" as const,
    options: [
        { label: "Standard (5-7 days)", value: "standard" },
        { label: "Express (2 days)", value: "express" },
        { label: "Overnight", value: "overnight" }
    ]
};

/* 03 — Subscription billing cycle, dark, price cards */

export const billingCycle = {
    name: "billing-cycle",
    value: "annual",
    options: [
        { label: "Monthly — $29/mo", value: "monthly" },
        { label: "Annual — $24/mo, billed yearly", value: "annual" }
    ]
};

/* 04 — Support ticket priority, one disabled */

export const ticketPriority = {
    name: "ticket-priority",
    value: "normal",
    options: [
        { label: "Low", value: "low" },
        { label: "Normal", value: "normal" },
        { label: "High", value: "high" },
        { label: "Urgent — requires an active support plan", value: "urgent", disabled: true }
    ]
};

/* 05 — Survey rating scale, entire group disabled (read-only results) */

export const surveyScale = {
    name: "survey-scale",
    value: "satisfied",
    disabled: true,
    options: [
        { label: "Very dissatisfied", value: "very-dissatisfied" },
        { label: "Dissatisfied", value: "dissatisfied" },
        { label: "Neutral", value: "neutral" },
        { label: "Satisfied", value: "satisfied" },
        { label: "Very satisfied", value: "very-satisfied" }
    ]
};
