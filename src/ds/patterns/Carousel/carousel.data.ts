import type { CarouselItem } from "../../components/ui/atoms/Carousel/Carousel.types";

/* 01 — Device gallery (eniyicihaz.com) */

export const deviceSlides: CarouselItem[] = [
    {
        id: "dev-1",
        title: "Kulak arkası yerleşim",
        description: "Cihaz kulağın arkasında durur, ince bir hortumla kulak kanalına bağlanır."
    },
    {
        id: "dev-2",
        title: "Şarj kutusu",
        description: "Bir gecelik şarj 36 saat kullanım verir. Kutu üç tam şarj taşır."
    },
    {
        id: "dev-3",
        title: "Telefon bağlantısı",
        description: "Aramalar ve müzik doğrudan cihaza aktarılır, aracı bir cihaza gerek yoktur."
    }
];

export const deviceThumbs = ["Yerleşim", "Şarj", "Bluetooth"];

export const deviceSpecs = [
    { key: "Ağırlık", value: "2.4 g" },
    { key: "Şarj", value: "36 saat" },
    { key: "Koruma", value: "IP68" }
];

/* 02 — Product photography */

export const productSlides: CarouselItem[] = [
    { id: "prod-1", title: "Alva Lounge Chair", description: "Oiled oak frame, bouclé in Sand" },
    { id: "prod-2", title: "Detail — arm joint", description: "Hand-cut mortise and tenon, no fixings" },
    { id: "prod-3", title: "In the room", description: "Photographed in a Rotterdam apartment" },
    { id: "prod-4", title: "Underside", description: "Webbed suspension, replaceable straps" }
];

export const productMeta = {
    name: "Alva Lounge Chair",
    price: "$1,240",
    lead: "Ships in 2 weeks",
    finish: "Oiled oak · Bouclé, Sand"
};

/* 03 — Onboarding tour */

export const tourSlides: CarouselItem[] = [
    {
        id: "tour-1",
        title: "Connect a repository",
        description: "We detect the framework, install dependencies and build it — no config file to write."
    },
    {
        id: "tour-2",
        title: "Every branch gets a URL",
        description: "Open a pull request and a live environment appears, seeded with test data."
    },
    {
        id: "tour-3",
        title: "Ship on merge",
        description: "Merging to main deploys to production. Rolling back is one click and takes seconds."
    }
];

export const tourSteps = ["Connect", "Preview", "Ship"];

/* 04 — Testimonial rotation */

export const voiceSlides: CarouselItem[] = [
    {
        id: "voice-1",
        title: "Elena Jørgensen",
        description: "We moved eleven services across in a single quarter and the only outage we had was one we caused ourselves."
    },
    {
        id: "voice-2",
        title: "Malik Brennan",
        description: "The migration guide was accurate, which is rarer than it should be. We were live on a Thursday afternoon."
    },
    {
        id: "voice-3",
        title: "Sara Vollmer",
        description: "Support answered in eleven minutes on a Sunday and the person who replied had actually read our logs."
    }
];

export const voiceRoles = [
    { initials: "EJ", role: "CTO, Northshore" },
    { initials: "MB", role: "Staff Engineer, Fathom" },
    { initials: "SV", role: "VP Operations, Cadence" }
];

/* 05 — Exhibition */

export const exhibitSlides: CarouselItem[] = [
    {
        id: "exh-1",
        title: "Harbour, 04:20",
        description: "Gelatin silver print, 1974"
    },
    {
        id: "exh-2",
        title: "Grain Store Interior",
        description: "Gelatin silver print, 1976"
    },
    {
        id: "exh-3",
        title: "Two Cranes",
        description: "Gelatin silver print, 1978"
    }
];

export const exhibitMeta = {
    title: "Rietveld: The Working Harbour",
    gallery: "Kunsthal Rotterdam",
    dates: "12 June – 28 September 2026",
    room: "Room 4 · Lower gallery"
};

export const exhibitDetails = [
    { key: "Prints", value: "84 works" },
    { key: "Admission", value: "€14 · Free under 18" },
    { key: "Curated by", value: "M. Kovač" }
];
