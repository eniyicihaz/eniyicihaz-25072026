import type { ChipVariant } from "../../components/ui/atoms/Chip/Chip.types";

/* 01 — Device finder (eniyicihaz.com) */

export const finderGroups = [
    {
        title: "Cihaz tipi",
        chips: [
            { label: "Kulak arkası", selected: true },
            { label: "Kulak içi", selected: false },
            { label: "Kanal içi", selected: false },
            { label: "Görünmez", selected: false }
        ]
    },
    {
        title: "Özellikler",
        chips: [
            { label: "Şarjlı", selected: true },
            { label: "Bluetooth", selected: true },
            { label: "Tinnitus programı", selected: false },
            { label: "Su geçirmez", selected: false }
        ]
    },
    {
        title: "Bütçe",
        chips: [
            { label: "SGK ile ücretsiz", selected: false },
            { label: "₺40.000 altı", selected: true },
            { label: "₺40.000 – 60.000", selected: false }
        ]
    }
];

export const finderActive = ["Kulak arkası", "Şarjlı", "Bluetooth", "₺40.000 altı"];

export const finderResults = [
    { name: "Signia Pure Charge&Go 7AX", price: "₺48.900", match: "4/4 eşleşme" },
    { name: "Phonak Audéo Lumity L90", price: "₺52.400", match: "4/4 eşleşme" },
    { name: "Oticon Real 1 miniRITE", price: "₺46.200", match: "3/4 eşleşme" }
];

/* 02 — Recipient picker */

export const recipients = [
    { name: "Yuki Tanaka", email: "yuki@fieldnote.studio", initials: "YT" },
    { name: "Jonah Reyes", email: "jonah@fieldnote.studio", initials: "JR" },
    { name: "Priya Anand", email: "priya@fieldnote.studio", initials: "PA" }
];

export const suggestions = [
    { name: "Clara Esposito", initials: "CE" },
    { name: "Hugo Meier", initials: "HM" },
    { name: "Design team", initials: "DT" }
];

/* 03 — Ticket categories */

export const ticketCategories: {
    label: string;
    variant: ChipVariant;
    count: number;
}[] = [
    { label: "All", variant: "neutral", count: 128 },
    { label: "Billing", variant: "primary", count: 34 },
    { label: "Builds", variant: "warning", count: 41 },
    { label: "Domains", variant: "info", count: 22 },
    { label: "Security", variant: "danger", count: 9 },
    { label: "Feature requests", variant: "success", count: 22 }
];

export const tickets = [
    {
        id: "#4812",
        subject: "Preview URL returns 404 after branch rename",
        category: "Builds",
        variant: "warning" as ChipVariant,
        age: "12m",
        agent: "PA"
    },
    {
        id: "#4809",
        subject: "Invoice VAT number not applied to July",
        category: "Billing",
        variant: "primary" as ChipVariant,
        age: "48m",
        agent: "HM"
    },
    {
        id: "#4801",
        subject: "Rotate API keys without downtime?",
        category: "Security",
        variant: "danger" as ChipVariant,
        age: "3h",
        agent: "NA"
    }
];

/* 04 — Playlist mood */

export const moodChips = [
    { label: "Focus", selected: true },
    { label: "Late night", selected: true },
    { label: "Instrumental", selected: false },
    { label: "Upbeat", selected: false },
    { label: "Acoustic", selected: false },
    { label: "Rainy", selected: true },
    { label: "Piano", selected: false },
    { label: "Lo-fi", selected: false }
];

export const moodTracks = [
    { title: "Nocturne in C minor", artist: "Yuki Tanaka", length: "6:12" },
    { title: "Harbour Lights", artist: "The Grain Store", length: "4:38" },
    { title: "Kralingse Plas", artist: "Sofia Marchetti", length: "5:24" }
];

/* 05 — Menu dietary tags */

export const dishes = [
    {
        name: "Cacio e pepe",
        detail: "Tonnarelli, pecorino romano, black pepper",
        price: "€18",
        tags: [
            { label: "Vegetarian", variant: "success" as ChipVariant },
            { label: "Contains gluten", variant: "warning" as ChipVariant }
        ]
    },
    {
        name: "Grilled sea bream",
        detail: "Whole fish, fennel, Amalfi lemon",
        price: "€28",
        tags: [
            { label: "Gluten free", variant: "success" as ChipVariant },
            { label: "Contains fish", variant: "warning" as ChipVariant }
        ]
    },
    {
        name: "Roast celeriac",
        detail: "Hazelnut picada, aged balsamic",
        price: "€16",
        tags: [
            { label: "Vegan", variant: "success" as ChipVariant },
            { label: "Contains nuts", variant: "danger" as ChipVariant }
        ]
    }
];

export const menuFilters = ["Vegetarian", "Vegan", "Gluten free", "Nut free"];
