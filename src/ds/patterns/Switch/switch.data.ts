/* ----------------------------------------------------------
   01 — Smart home
   ---------------------------------------------------------- */

export const homeRooms = [
    {
        name: "Living room",
        detail: "3 lights · 21°C",
        on: true,
        accent: "warm"
    },
    {
        name: "Kitchen",
        detail: "2 lights · 20°C",
        on: true,
        accent: "warm"
    },
    {
        name: "Studio",
        detail: "4 lights · 19°C",
        on: false,
        accent: "cool"
    },
    {
        name: "Bedroom",
        detail: "2 lights · 18°C",
        on: false,
        accent: "cool"
    }
];

export const homeScenes = [
    { label: "Evening", on: true },
    { label: "Away mode", on: false },
    { label: "Night lights", on: true },
    { label: "Do not disturb", on: false }
];

/* ----------------------------------------------------------
   02 — Pricing toggle
   ---------------------------------------------------------- */

export const pricingTiers = [
    {
        name: "Solo",
        price: "$18",
        note: "per month, billed yearly",
        was: "$24",
        summary: "One editor, unlimited personal projects.",
        features: ["Unlimited projects", "5GB assets", "Community support"],
        featured: false
    },
    {
        name: "Studio",
        price: "$44",
        note: "per editor / month, billed yearly",
        was: "$56",
        summary: "For small teams that ship together.",
        features: [
            "Everything in Solo",
            "Shared libraries",
            "Version history",
            "Priority support"
        ],
        featured: true
    }
];

/* ----------------------------------------------------------
   03 — Privacy centre
   ---------------------------------------------------------- */

export const privacyGroups = [
    {
        title: "Profile visibility",
        rows: [
            {
                label: "Show my profile in search",
                note: "People can find you by name or email address.",
                on: true
            },
            {
                label: "Show my activity to teammates",
                note: "What you edited and when, inside shared workspaces.",
                on: true
            },
            {
                label: "Show my online status",
                note: "A green dot beside your avatar while you are active.",
                on: false
            }
        ]
    },
    {
        title: "Data & personalisation",
        rows: [
            {
                label: "Personalised recommendations",
                note: "Uses your recent activity to order the home feed.",
                on: false
            },
            {
                label: "Help improve the product",
                note: "Anonymous usage events. Never includes document content.",
                on: true
            },
            {
                label: "Train models on my content",
                note: "Off by default and always opt-in. Applies to new content only.",
                on: false
            }
        ]
    }
];

/* ----------------------------------------------------------
   04 — Feature flags
   ---------------------------------------------------------- */

export const flags = [
    {
        key: "checkout.express_pay",
        env: "production",
        rollout: "100%",
        owner: "payments",
        on: true,
        risk: "stable"
    },
    {
        key: "search.vector_index_v2",
        env: "production",
        rollout: "35%",
        owner: "search",
        on: true,
        risk: "ramping"
    },
    {
        key: "editor.multiplayer_cursors",
        env: "staging",
        rollout: "100%",
        owner: "editor",
        on: true,
        risk: "stable"
    },
    {
        key: "billing.usage_caps",
        env: "production",
        rollout: "0%",
        owner: "billing",
        on: false,
        risk: "off"
    },
    {
        key: "api.rate_limit_v3",
        env: "canary",
        rollout: "5%",
        owner: "platform",
        on: true,
        risk: "risky"
    }
];

/* ----------------------------------------------------------
   05 — In-flight comfort
   ---------------------------------------------------------- */

export const cabinControls = [
    { label: "Window shade", detail: "Dimmed to 60%", on: true },
    { label: "Reading light", detail: "Warm, low", on: true },
    { label: "Wake me for meals", detail: "Breakfast only", on: false },
    { label: "Turndown service", detail: "After dinner", on: true }
];

export const cabinJourney = [
    { key: "Flight", value: "MR 218" },
    { key: "Seat", value: "2A · Suite" },
    { key: "Arrives", value: "06:40 local" }
];
