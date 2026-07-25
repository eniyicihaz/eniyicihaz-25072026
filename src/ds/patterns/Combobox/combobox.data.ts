import type { ComboboxOption } from "../../components/ui/atoms/Combobox/Combobox.types";

/* 01 — Clinic search (eniyicihaz.com) */

export const clinicOptions: ComboboxOption[] = [
    { label: "Kadıköy Şubesi — Bahariye Cd.", value: "kadikoy" },
    { label: "Bakırköy Şubesi — İncirli Cd.", value: "bakirkoy" },
    { label: "Şişli Şubesi — Halaskargazi Cd.", value: "sisli" },
    { label: "Ataşehir Şubesi — İçerenköy", value: "atasehir" },
    { label: "Video görüşme", value: "video" }
];

export const clinicFacts = [
    { key: "Bugün açık", value: "6 şube" },
    { key: "SGK anlaşmalı", value: "Tüm şubeler" },
    { key: "Ortalama bekleme", value: "3 gün" }
];

/* 02 — Command palette */

export const commandOptions: ComboboxOption[] = [
    { label: "Go to Dashboard", value: "nav-dashboard" },
    { label: "Go to Deployments", value: "nav-deploys" },
    { label: "Go to Settings", value: "nav-settings" },
    { label: "Deploy production", value: "act-deploy" },
    { label: "Rollback last deploy", value: "act-rollback" },
    { label: "Invite a teammate", value: "act-invite" }
];

export const commandCategories = ["Navigate", "Actions", "Recent"];

export const commandRecent = ["Go to Deployments", "Rollback last deploy"];

/* 03 — Country / phone field */

export const countryOptions: ComboboxOption[] = [
    { label: "🇳🇱 Netherlands +31", value: "NL" },
    { label: "🇹🇷 Türkiye +90", value: "TR" },
    { label: "🇩🇪 Germany +49", value: "DE" },
    { label: "🇬🇧 United Kingdom +44", value: "GB" },
    { label: "🇧🇪 Belgium +32", value: "BE" }
];

export const formSteps = [
    { n: "1", label: "Company", state: "done" },
    { n: "2", label: "Contact details", state: "current" },
    { n: "3", label: "Billing", state: "todo" }
];

/* 04 — Issue tracker assignee */

export const assigneeOptions: ComboboxOption[] = [
    { label: "Priya Anand", value: "PA" },
    { label: "Hugo Meier", value: "HM" },
    { label: "Nadia Aziz", value: "NA" },
    { label: "Lars Ødegård", value: "LO" },
    { label: "Unassigned", value: "none" }
];

export const issueFields = [
    { label: "Status", value: "In progress" },
    { label: "Priority", value: "P1 — Urgent" },
    { label: "Cycle", value: "24" }
];

export const issueMeta = {
    id: "REL-412",
    title: "Webhook retries double-count against quota"
};

/* 05 — Flight route picker */

export const airportOptions: ComboboxOption[] = [
    { label: "Amsterdam Schiphol (AMS)", value: "AMS" },
    { label: "Rotterdam The Hague (RTM)", value: "RTM" },
    { label: "Eindhoven (EIN)", value: "EIN" },
    { label: "Brussels (BRU)", value: "BRU" }
];

export const destinationOptions: ComboboxOption[] = [
    { label: "Lisbon (LIS)", value: "LIS" },
    { label: "Porto (OPO)", value: "OPO" },
    { label: "Faro (FAO)", value: "FAO" }
];

export const routeTrust = [
    "No change fees",
    "Price freeze for 48h",
    "24/7 human support"
];
