/* 01 — Skip to content link, focusable (eniyicihaz.com) */

export const skipLink = {
    text: "Ana içeriğe geç",
    href: "#main-content"
};

/* 02 — Icon-only close button, sr-only label */

export const closeButton = {
    srText: "Bildirimi kapat"
};

/* 03 — Data table, abbreviated visible header + full sr-only text */

export const tableColumns = [
    { visible: "Cihaz", full: "Cihaz modeli" },
    { visible: "S/N", full: "Seri numarası" },
    { visible: "Dur.", full: "Cihaz durumu" }
];

export const tableRows = [
    { model: "Aria Pro 2", serial: "AR2-88213", status: "Aktif" },
    { model: "Nova Mini", serial: "NM-40521", status: "Bakımda" }
];

/* 04 — Live status region, loading announcement */

export const liveStatus = {
    srText: "Ödeme işleniyor, lütfen bekleyin",
    visible: "Processing your payment..."
};

/* 05 — Required field indicator, sr-only qualifier */

export const requiredField = {
    label: "Email address",
    srSuffix: "(required)"
};
