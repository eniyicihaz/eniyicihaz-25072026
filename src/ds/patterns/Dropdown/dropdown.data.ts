import type { DropdownItem } from "../../components/ui/atoms/Dropdown/Dropdown.types";

/* 01 — Patient row actions (eniyicihaz.com) */

export const patientActions: DropdownItem[] = [
    { label: "Randevu oluştur", value: "book" },
    { label: "Odyogramı görüntüle", value: "audiogram" },
    { label: "Notları düzenle", value: "notes" },
    { label: "", value: "div-1", divider: true },
    { label: "Hasta kaydını sil", value: "delete" }
];

export const patients = [
    { initials: "HY", name: "Hatice Yalçın", detail: "Son ziyaret: 22 Mar 2026" },
    { initials: "MK", name: "Mehmet Kaya", detail: "Son ziyaret: 8 Oca 2026" },
    { initials: "SD", name: "Selin Demir", detail: "Son ziyaret: 14 Haz 2026" }
];

/* 02 — Account menu */

export const accountItems: DropdownItem[] = [
    { label: "View profile", value: "profile" },
    { label: "Billing", value: "billing" },
    { label: "Preferences", value: "prefs" },
    { label: "", value: "div-1", divider: true },
    { label: "Sign out", value: "signout" }
];

export const accountUser = {
    name: "Sara Vollmer",
    email: "sara@fieldnote.studio",
    initials: "SV"
};

/* 03 — Row actions, dark table */

export const rowActions: DropdownItem[] = [
    { label: "Redeploy", value: "redeploy" },
    { label: "View logs", value: "logs" },
    { label: "Copy deployment URL", value: "copy" },
    { label: "", value: "div-1", divider: true },
    { label: "Remove deployment", value: "remove", disabled: false }
];

export const deployments = [
    { name: "fieldnote.studio", branch: "main", status: "Ready", time: "2m ago" },
    { name: "docs-preview", branch: "feat/api-v2", status: "Building", time: "40s ago" },
    { name: "storybook", branch: "main", status: "Ready", time: "1h ago" }
];

/* 04 — Sort / filter, e-commerce */

export const sortItems: DropdownItem[] = [
    { label: "Featured", value: "featured" },
    { label: "Price: low to high", value: "price-asc" },
    { label: "Price: high to low", value: "price-desc" },
    { label: "Newest", value: "newest" }
];

export const products = [
    { name: "Alva Lounge Chair", price: "$1,240", tone: "sand" },
    { name: "Rue Dining Chair", price: "$420", tone: "clay" },
    { name: "Pica Stool", price: "$240", tone: "stone" }
];

/* 05 — Language switcher, travel footer */

export const languageItems: DropdownItem[] = [
    { label: "English", value: "en" },
    { label: "Nederlands", value: "nl" },
    { label: "Türkçe", value: "tr" },
    { label: "Deutsch", value: "de" }
];

export const footerLinks = ["About", "Careers", "Press", "Help centre"];
