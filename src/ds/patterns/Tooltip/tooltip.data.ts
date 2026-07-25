/* 01 — Audiogram chart info icons (eniyicihaz.com) */

export const audiogramTerms = [
    { term: "dB HL", tooltip: "Desibel işitme seviyesi — sesin duyulabilirliğinin ölçüsü" },
    { term: "Hz", tooltip: "Hertz — sesin frekansı, kulağın algıladığı perde" },
    { term: "PTA", tooltip: "Saf ses ortalaması — 500, 1000 ve 2000 Hz'deki eşiklerin ortalaması" }
];

/* 02 — Dashboard icon toolbar, dark, multiple placements */

export const toolbarActions = [
    { label: "Bildirimler", tooltip: "3 okunmamış bildirim", placement: "bottom" as const },
    { label: "Ara", tooltip: "Hızlı arama (⌘K)", placement: "bottom" as const },
    { label: "Ayarlar", tooltip: "Hesap ve çalışma alanı ayarları", placement: "bottom-end" as const }
];

/* 03 — Disabled action explainer, light variant */

export const disabledAction = {
    label: "Export report",
    tooltip: "Upgrade to Pro to export reports as PDF",
    placement: "top" as const
};

/* 04 — Form field help icons, right placement */

export const formHelp = [
    { field: "API key", tooltip: "Found in Settings → Developer → API keys" },
    { field: "Webhook URL", tooltip: "Must be a public HTTPS endpoint" }
];

/* 05 — Truncated table cell with full value on hover, left placement */

export const truncatedCell = {
    visible: "vendor-contract-amendment-2026...",
    full: "vendor-contract-amendment-2026-hearing-device-supply-agreement.docx"
};
