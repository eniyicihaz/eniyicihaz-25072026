/* ----------------------------------------------------------
   01 — Login
   ---------------------------------------------------------- */

export const loginProviders = [
    { label: "Continue with Google", glyph: "G" },
    { label: "Continue with Apple", glyph: "" }
];

/* ----------------------------------------------------------
   02 — Newsletter
   ---------------------------------------------------------- */

export const newsletterPerks = [
    "One essay every Sunday",
    "Subscriber-only archive",
    "No sponsorships, ever"
];

/* ----------------------------------------------------------
   03 — Upgrade
   ---------------------------------------------------------- */

export const upgradePlans = [
    {
        name: "Team",
        price: "$24",
        period: "per editor / month",
        features: [
            "Unlimited documents",
            "Version history, 90 days",
            "Shared component library"
        ],
        current: true
    },
    {
        name: "Business",
        price: "$48",
        period: "per editor / month",
        features: [
            "Everything in Team",
            "Unlimited version history",
            "Branching and merge review",
            "SAML SSO and audit log"
        ],
        current: false
    }
];

export const upgradeUnlocks = [
    "Branching",
    "Merge review",
    "Audit log",
    "SSO",
    "Priority support"
];

/* ----------------------------------------------------------
   04 — Confirmation
   ---------------------------------------------------------- */

export const deletionImpact = [
    { label: "Documents", value: "1,284 files" },
    { label: "Members", value: "12 lose access" },
    { label: "Integrations", value: "4 disconnected" }
];

/* ----------------------------------------------------------
   05 — Success
   ---------------------------------------------------------- */

export const successDetails = [
    { label: "Order", value: "#AV-88214" },
    { label: "Delivery", value: "2–3 weeks" },
    { label: "Address", value: "Wijnhaven 61, Rotterdam" }
];
