/* 01 — Clinic search bar (eniyicihaz.com) */

export const clinicCategories = ["Tüm hizmetler", "İşitme testi", "Cihaz bakımı", "Kontrol"];

export const clinicResults = [
    { name: "Kadıköy Şubesi", detail: "1.2 km · Bugün açık" },
    { name: "Bakırköy Şubesi", detail: "6.8 km · Bugün açık" }
];

/* 02 — Currency amount, finance */

export const transferCurrencies = ["EUR €", "USD $", "GBP £", "TRY ₺"];

export const transferRate = {
    label: "You send",
    converted: "≈ $1,084.20",
    fee: "No fee · Mid-market rate"
};

/* 03 — Domain availability check, dev tool */

export const domainTlds = [".dev", ".com", ".io", ".app"];

export const domainResults = [
    { name: "relay-cli.dev", status: "Available", price: "$12/yr", tone: "success" },
    { name: "relay-cli.com", status: "Taken", price: "—", tone: "danger" },
    { name: "relay-cli.io", status: "Available", price: "$34/yr", tone: "success" }
];

/* 04 — Phone number, checkout */

export const phoneCountries = ["🇳🇱 +31", "🇹🇷 +90", "🇩🇪 +49", "🇬🇧 +44"];

export const checkoutSteps = [
    { n: "1", label: "Address", state: "done" },
    { n: "2", label: "Contact", state: "current" },
    { n: "3", label: "Payment", state: "todo" }
];

/* 05 — Quantity + unit, inventory */

export const inventoryUnits = ["adet", "kutu", "koli", "palet"];

export const inventoryRows = [
    { name: "Signia Pure Charge&Go 7AX", sku: "SGN-7AX-GR", stock: "24 adet" },
    { name: "Kulak kalıbı seti", sku: "EM-SET-S", stock: "3 kutu" }
];
