/* 01 — Hearing aid volume control (eniyicihaz.com) */

export const volumeField = {
    id: "sld-volume",
    label: "Ses seviyesi",
    min: 0,
    max: 100,
    value: 62
};

/* 02 — Streaming playback scrubber, dark */

export const scrubberField = {
    id: "sld-scrub",
    min: 0,
    max: 228,
    value: 96,
    elapsed: "1:36",
    duration: "3:48"
};

/* 03 — Price range filter, marketplace */

export const priceField = {
    id: "sld-price",
    min: 0,
    max: 2000,
    step: 50,
    value: 850
};

/* 04 — Equalizer bands, dark, multiple sliders */

export const eqBands = [
    { id: "sld-eq-bass", label: "Bass", value: 60 },
    { id: "sld-eq-mid", label: "Mid", value: 45 },
    { id: "sld-eq-treble", label: "Treble", value: 70 }
];

/* 05 — Onboarding step disabled until previous answered */

export const brightnessField = {
    id: "sld-brightness",
    label: "Ekran parlaklığı",
    min: 0,
    max: 100,
    value: 30,
    disabled: true,
    note: "Otomatik parlaklık açıkken devre dışı"
};
