/**
 * Every pattern below needs a real, valid <img src> — the
 * Image component has no placeholder mode. Rather than
 * hotlink external URLs, each photo is a self-contained
 * gradient SVG data URI in the same abstract-plate language
 * used across the rest of the pattern library.
 */
function plate(from: string, to: string, w = 800, h = 600): string {
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
        `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
        `<stop offset="0" stop-color="${from}"/>` +
        `<stop offset="1" stop-color="${to}"/>` +
        `</linearGradient></defs>` +
        `<rect width="${w}" height="${h}" fill="url(#g)"/>` +
        `</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/* 01 — Hearing aid product gallery (eniyicihaz.com) */

export const deviceGallery = [
    {
        src: plate("#6f7681", "#2a2f38"),
        alt: "Signia Pure Charge&Go 7AX kulak arkası işitme cihazı, grafit renk",
        caption: "Kulak arkası yerleşim"
    },
    {
        src: plate("#8aa8a3", "#0f766e"),
        alt: "İşitme cihazı şarj kutusu, açık kapak",
        caption: "Şarj kutusu, 3 tam şarj"
    },
    {
        src: plate("#cbd8d6", "#6f7681"),
        alt: "İşitme cihazı ve telefon Bluetooth eşleştirmesi",
        caption: "Doğrudan telefon bağlantısı"
    }
];

/* 02 — Property listing gallery, travel/real estate */

export const propertyHero = {
    src: plate("#8b9cb2", "#3f4a5c", 1200, 800),
    alt: "Canal-side loft living room with a working fireplace, Rotterdam",
    caption: "Living room, facing the canal"
};

export const propertyThumbs = [
    { src: plate("#d8cfc4", "#a8967f"), alt: "Kitchen with oak cabinetry" },
    { src: plate("#c8d3c6", "#7d8f78"), alt: "Bedroom with skylight" },
    { src: plate("#d5cdd8", "#8a7a9a"), alt: "Bathroom with freestanding tub" },
    { src: plate("#cfd8e3", "#5c6f88"), alt: "Balcony overlooking the canal" }
];

/* 03 — News article hero, editorial */

export const articleHero = {
    src: plate("#2b3448", "#0e1420", 1400, 700),
    alt: "Rotterdam harbour at dawn, cranes silhouetted against the sky",
    caption: "The Rotterdam harbour, photographed at 04:20 this morning"
};

export const articleMeta = {
    kicker: "Investigation",
    title: "Inside the port that never sleeps",
    author: "Marta Kovač",
    date: "18 July 2026"
};

/* 04 — Recipe method photos, sequential */

export const recipeSteps = [
    { src: plate("#c9a88a", "#7d5a3c"), alt: "Lamb shoulder searing in a heavy pot", label: "Sear the shoulder" },
    { src: plate("#d3c4a8", "#a8896a"), alt: "Beans and stock added to the pot", label: "Build the base" },
    { src: plate("#b89a7a", "#6b4a2e"), alt: "Pot covered, roasting in the oven", label: "Roast, low and slow" },
    { src: plate("#e0c9a8", "#b48956"), alt: "Finished dish plated with rosemary", label: "Rest and serve" }
];

export const recipeTitle = "Slow-roast lamb shoulder with white beans";

/* 05 — Team portraits, about page */

export const teamPortraits = [
    { src: plate("#cfd8e3", "#8b9cb2"), alt: "Portrait of Amara Lindqvist", name: "Amara Lindqvist", role: "Chief Executive" },
    { src: plate("#d8cfc4", "#a8967f"), alt: "Portrait of Daniel Okafor", name: "Daniel Okafor", role: "Chief Technology" },
    { src: plate("#c8d3c6", "#7d8f78"), alt: "Portrait of Yuki Tanaka", name: "Yuki Tanaka", role: "Head of Design" },
    { src: plate("#d5cdd8", "#8a7a9a"), alt: "Portrait of Jonah Reyes", name: "Jonah Reyes", role: "Principal Engineer" },
    { src: plate("#e3d5cf", "#a87d5c"), alt: "Portrait of Priya Anand", name: "Priya Anand", role: "Engineering Manager" }
];
