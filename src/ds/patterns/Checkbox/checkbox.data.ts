/* ----------------------------------------------------------
   01 — Cookie consent
   ---------------------------------------------------------- */

export const consentCategories = [
    {
        name: "Strictly necessary",
        body: "Session, security and load balancing. These cannot be switched off.",
        count: "4 cookies",
        locked: true,
        on: true
    },
    {
        name: "Analytics",
        body: "Aggregated page views and performance timings. Never sold or shared.",
        count: "6 cookies",
        locked: false,
        on: true
    },
    {
        name: "Personalisation",
        body: "Remembers your theme, language and the last workspace you opened.",
        count: "3 cookies",
        locked: false,
        on: false
    },
    {
        name: "Marketing",
        body: "Attribution for ads we run on other sites. Off unless you turn it on.",
        count: "9 cookies",
        locked: false,
        on: false
    }
];

/* ----------------------------------------------------------
   02 — Ecommerce filters
   ---------------------------------------------------------- */

export const filterGroups = [
    {
        title: "Category",
        items: [
            { label: "Seating", count: 42, on: true },
            { label: "Tables", count: 28, on: false },
            { label: "Lighting", count: 61, on: false },
            { label: "Storage", count: 19, on: false }
        ]
    },
    {
        title: "Material",
        items: [
            { label: "Solid oak", count: 24, on: true },
            { label: "Walnut", count: 16, on: false },
            { label: "Travertine", count: 7, on: false },
            { label: "Powder-coated steel", count: 22, on: false }
        ]
    },
    {
        title: "Availability",
        items: [
            { label: "In stock", count: 88, on: true },
            { label: "Made to order", count: 34, on: false }
        ]
    }
];

export const filterChips = ["Seating", "Solid oak", "In stock"];

export const filterResults = [
    { name: "Alva Lounge Chair", detail: "Oiled oak · Bouclé", price: "$1,240", tone: "sand" },
    { name: "Rue Dining Chair", detail: "Ash · Leather", price: "$420", tone: "clay" },
    { name: "Nord Armchair", detail: "Walnut · Wool", price: "$1,680", tone: "moss" }
];

/* ----------------------------------------------------------
   03 — Onboarding checklist
   ---------------------------------------------------------- */

export const onboardingTasks = [
    {
        label: "Connect a repository",
        note: "We detected 3 projects in your GitHub account.",
        done: true
    },
    {
        label: "Set a production branch",
        note: "Currently deploying from main.",
        done: true
    },
    {
        label: "Add a custom domain",
        note: "Takes about two minutes once DNS is pointed.",
        done: false
    },
    {
        label: "Invite your team",
        note: "Everyone on your plan, no per-seat charge.",
        done: false
    },
    {
        label: "Turn on deploy notifications",
        note: "Slack, email or a webhook of your own.",
        done: false
    }
];

/* ----------------------------------------------------------
   04 — Insurance quote
   ---------------------------------------------------------- */

export const coverOptions = [
    {
        label: "Personal liability",
        body: "Covers damage you cause to other people or their property, up to €2.5m.",
        price: "Included",
        on: true,
        recommended: false
    },
    {
        label: "Home contents",
        body: "Replacement value for everything you own inside the property.",
        price: "+ €7 / month",
        on: true,
        recommended: true
    },
    {
        label: "Legal assistance",
        body: "Advice and representation for disputes with landlords or employers.",
        price: "+ €4 / month",
        on: false,
        recommended: false
    },
    {
        label: "Travel and baggage",
        body: "Worldwide cover for trips up to 90 days, including winter sports.",
        price: "+ €6 / month",
        on: false,
        recommended: false
    }
];

/* ----------------------------------------------------------
   05 — Notification preferences
   ---------------------------------------------------------- */

export const notificationRows = [
    { label: "Someone comments on my document", email: true, push: true, digest: false },
    { label: "A deployment fails", email: true, push: true, digest: false },
    { label: "I am mentioned by name", email: true, push: true, digest: false },
    { label: "Weekly usage summary", email: false, push: false, digest: true },
    { label: "Product news and changelog", email: false, push: false, digest: true }
];
