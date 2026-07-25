/* 01 — Device fitting process (eniyicihaz.com), horizontal */

export const fittingSteps = [
    { label: "Değerlendirme", completed: true },
    { label: "Cihaz seçimi", completed: true },
    { label: "Ayarlama", active: true },
    { label: "Kontrol" }
];

/* 02 — Checkout flow, horizontal, dark */

export const checkoutSteps = [
    { label: "Cart", completed: true },
    { label: "Shipping", completed: true },
    { label: "Payment", active: true },
    { label: "Confirmation" }
];

/* 03 — Loan application, vertical, with descriptions */

export const loanSteps = [
    { label: "Application submitted", description: "Reviewed within 24 hours", completed: true },
    { label: "Credit check", description: "Soft check, no impact on your score", completed: true },
    { label: "Document verification", description: "Upload proof of income", active: true },
    { label: "Final approval", description: "Funds released within 2 business days" }
];

/* 04 — Incident resolution, vertical, dark, one disabled */

export const incidentSteps = [
    { label: "Detected", description: "03:12 UTC — alert triggered", completed: true },
    { label: "Acknowledged", description: "03:14 UTC — on-call paged", completed: true },
    { label: "Mitigating", description: "Rolling back deploy #482", active: true },
    { label: "Postmortem", description: "Requires incident to be resolved first", disabled: true }
];

/* 05 — Course progress, horizontal, compact, education */

export const courseSteps = [
    { label: "Intro", completed: true },
    { label: "Foundations", completed: true },
    { label: "Components", completed: true },
    { label: "Patterns", active: true },
    { label: "Accessibility" },
    { label: "Final project" }
];
