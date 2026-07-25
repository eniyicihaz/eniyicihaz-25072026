/* ----------------------------------------------------------
   01 — Contact Form
   ---------------------------------------------------------- */

export const contactChannels = [
    {
        label: "General enquiries",
        value: "hello@fieldnote.studio",
        note: "We reply within one working day."
    },
    {
        label: "New projects",
        value: "work@fieldnote.studio",
        note: "Include a rough budget if you have one."
    },
    {
        label: "Press",
        value: "press@fieldnote.studio",
        note: "Brand assets and founder bios on request."
    }
];

export const contactOffices = [
    { city: "Rotterdam", line: "Wijnhaven 61, 3011 WJ", tz: "CET" },
    { city: "Lisbon", line: "Rua da Boavista 84", tz: "WET" }
];

export const projectBudgets = [
    "Under €25k",
    "€25k – €60k",
    "€60k – €120k",
    "Above €120k"
];

/* ----------------------------------------------------------
   03 — Login
   ---------------------------------------------------------- */

export const ssoProviders = [
    { label: "Continue with Google", glyph: "G" },
    { label: "Continue with GitHub", glyph: "◉" }
];

/* ----------------------------------------------------------
   04 — Search
   ---------------------------------------------------------- */

export const searchFilters = [
    { label: "All", active: true },
    { label: "Guides", active: false },
    { label: "API", active: false },
    { label: "Examples", active: false },
    { label: "Changelog", active: false }
];

export const searchResults = [
    {
        section: "Guides",
        title: "Deploying a monorepo",
        excerpt:
            "Configure build filters so only the affected workspaces rebuild on each push.",
        meta: "Updated 3 days ago"
    },
    {
        section: "API",
        title: "POST /v1/deployments",
        excerpt:
            "Create a deployment from a git ref or an uploaded archive.",
        meta: "REST reference"
    },
    {
        section: "Examples",
        title: "Astro + Turborepo starter",
        excerpt:
            "A working repository with preview environments already wired up.",
        meta: "GitHub template"
    }
];

export const searchPopular = [
    "environment variables",
    "custom domains",
    "build cache",
    "rollback",
    "edge functions"
];

/* ----------------------------------------------------------
   05 — Checkout
   ---------------------------------------------------------- */

export const checkoutSteps = [
    { label: "Cart", state: "done" },
    { label: "Details", state: "current" },
    { label: "Payment", state: "todo" }
];

export const checkoutItems = [
    {
        name: "Alva Lounge Chair",
        detail: "Oiled oak · Bouclé, Sand",
        qty: "1",
        price: "$1,240",
        tone: "sand"
    },
    {
        name: "Marlow Floor Lamp",
        detail: "Brushed brass",
        qty: "2",
        price: "$960",
        tone: "clay"
    }
];

export const checkoutTotals = [
    { label: "Subtotal", value: "$2,200.00" },
    { label: "Delivery", value: "Free" },
    { label: "VAT (21%)", value: "$462.00" }
];
