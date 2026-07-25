import type { TagVariant } from "../../components/ui/atoms/Tag/Tag.types";

/* 01 — Device comparison (eniyicihaz.com) */

export const devices: {
    name: string;
    brand: string;
    price: string;
    tags: { label: string; variant: TagVariant }[];
    featured: boolean;
}[] = [
    {
        name: "Pure Charge&Go 7AX",
        brand: "Signia",
        price: "₺48.900",
        tags: [
            { label: "SGK kapsamında", variant: "success" },
            { label: "Şarjlı", variant: "primary" },
            { label: "Bluetooth", variant: "info" },
            { label: "Kulak arkası", variant: "default" }
        ],
        featured: true
    },
    {
        name: "Audéo Lumity L90",
        brand: "Phonak",
        price: "₺52.400",
        tags: [
            { label: "SGK kapsamında", variant: "success" },
            { label: "Şarjlı", variant: "primary" },
            { label: "Su geçirmez", variant: "info" },
            { label: "Kulak arkası", variant: "default" }
        ],
        featured: false
    },
    {
        name: "Intent 1 CIC",
        brand: "Oticon",
        price: "₺44.100",
        tags: [
            { label: "Pilli", variant: "warning" },
            { label: "Görünmez", variant: "info" },
            { label: "Kanal içi", variant: "default" }
        ],
        featured: false
    }
];

export const deviceFilters = [
    { label: "Şarjlı", active: true },
    { label: "Bluetooth", active: true },
    { label: "SGK kapsamında", active: false },
    { label: "Görünmez", active: false }
];

/* 02 — Issue tracker */

export const issues: {
    id: string;
    title: string;
    assignee: string;
    tags: { label: string; variant: TagVariant }[];
    estimate: string;
}[] = [
    {
        id: "REL-412",
        title: "Webhook retries double-count against quota",
        assignee: "PA",
        tags: [
            { label: "bug", variant: "danger" },
            { label: "billing", variant: "warning" },
            { label: "p1", variant: "danger" }
        ],
        estimate: "3"
    },
    {
        id: "REL-408",
        title: "Add scoped tokens to the dashboard UI",
        assignee: "HM",
        tags: [
            { label: "feature", variant: "primary" },
            { label: "security", variant: "info" }
        ],
        estimate: "5"
    },
    {
        id: "REL-401",
        title: "Document the buildFilter glob syntax",
        assignee: "NA",
        tags: [
            { label: "docs", variant: "secondary" },
            { label: "good first issue", variant: "success" }
        ],
        estimate: "1"
    },
    {
        id: "REL-396",
        title: "Flaky test in scheduler/queue-depth.spec.ts",
        assignee: "LO",
        tags: [
            { label: "flaky", variant: "warning" },
            { label: "ci", variant: "secondary" }
        ],
        estimate: "2"
    }
];

/* 03 — Recipe */

export const recipe = {
    title: "Slow-roast lamb shoulder with white beans",
    author: "Marta Kovač",
    time: "4 hr 30 min",
    serves: "6",
    difficulty: "Easy"
};

export const recipeTags: { label: string; variant: TagVariant }[] = [
    { label: "Sunday lunch", variant: "primary" },
    { label: "Slow-cooked", variant: "default" },
    { label: "One pot", variant: "success" },
    { label: "Freezes well", variant: "info" },
    { label: "Gluten free", variant: "secondary" }
];

export const recipeIngredients = [
    "2 kg lamb shoulder, bone in",
    "400 g dried cannellini beans, soaked overnight",
    "1 head garlic, halved across",
    "6 anchovy fillets",
    "2 sprigs rosemary"
];

/* 04 — Job listing */

export const job = {
    title: "Senior Product Designer",
    company: "Fieldnote Studio",
    location: "Rotterdam or remote (CET ±3)",
    salary: "€78,000 – €96,000",
    posted: "Posted 4 days ago"
};

export const jobTags: { label: string; variant: TagVariant }[] = [
    { label: "Full time", variant: "primary" },
    { label: "Hybrid", variant: "info" },
    { label: "Design systems", variant: "default" },
    { label: "Figma", variant: "default" },
    { label: "Visa sponsorship", variant: "success" },
    { label: "4-day week", variant: "secondary" }
];

export const jobStack = ["Figma", "Astro", "TypeScript", "Storybook"];

/* 05 — Music library */

export const tracks = [
    { title: "Nocturne in C minor", artist: "Yuki Tanaka", length: "6:12", genre: "Neoclassical" },
    { title: "Harbour Lights", artist: "The Grain Store", length: "4:38", genre: "Ambient" },
    { title: "Second Rewrite", artist: "Malik Brennan", length: "3:51", genre: "Electronic" },
    { title: "Kralingse Plas", artist: "Sofia Marchetti", length: "5:24", genre: "Jazz" }
];

export const libraryTags: { label: string; variant: TagVariant }[] = [
    { label: "Focus", variant: "primary" },
    { label: "Instrumental", variant: "default" },
    { label: "Late night", variant: "secondary" },
    { label: "No vocals", variant: "info" },
    { label: "Under 6 min", variant: "default" }
];
