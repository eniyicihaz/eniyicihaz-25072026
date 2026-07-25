import type { TabItem } from "../../components/ui/atoms/Tabs/Tabs.types";

/* ----------------------------------------------------------
   01 — Pricing
   ---------------------------------------------------------- */

export const pricingTabs: TabItem[] = [
    { id: "annual", label: "Annual · save 20%" },
    { id: "monthly", label: "Monthly" }
];

export const pricingPlans = [
    {
        name: "Starter",
        price: "$0",
        period: "forever",
        summary: "Everything you need to publish your first site.",
        features: ["1 project", "100GB bandwidth", "Community support"],
        cta: "Start free",
        featured: false
    },
    {
        name: "Studio",
        price: "$29",
        period: "per month, billed annually",
        summary: "For freelancers and small teams shipping weekly.",
        features: [
            "Unlimited projects",
            "1TB bandwidth",
            "Password-protected previews",
            "Email support in 4 hours"
        ],
        cta: "Start 14-day trial",
        featured: true
    },
    {
        name: "Agency",
        price: "$99",
        period: "per month, billed annually",
        summary: "For studios running work for many clients at once.",
        features: [
            "Everything in Studio",
            "Client workspaces",
            "White-label previews",
            "Named account manager"
        ],
        cta: "Talk to us",
        featured: false
    }
];

/* ----------------------------------------------------------
   02 — Features
   ---------------------------------------------------------- */

export const featureTabs: TabItem[] = [
    { id: "editor", label: "Editor" },
    { id: "review", label: "Review" },
    { id: "publish", label: "Publish" },
    { id: "measure", label: "Measure" }
];

export const featurePanel = {
    kicker: "The editor",
    title: "Write in the same place you ship from",
    body: "No context switch between a document and a repository. Content, components and copy live together, and every change is a proposal until someone approves it.",
    points: [
        "Real-time multiplayer with presence",
        "Component blocks pulled from your own library",
        "Comments that resolve into commits"
    ],
    metric: { value: "3.2×", label: "Faster from draft to live" }
};

/* ----------------------------------------------------------
   03 — FAQ
   ---------------------------------------------------------- */

export const faqTabs: TabItem[] = [
    { id: "billing", label: "Billing" },
    { id: "accounts", label: "Accounts" },
    { id: "security", label: "Security" },
    { id: "api", label: "API" }
];

export const faqItems = [
    {
        id: "faq-invoice",
        title: "Can I get an invoice instead of a card receipt?",
        open: true,
        content:
            "Yes. Switch your billing profile to invoicing from settings and we will send a net-30 invoice with your purchase order reference on it."
    },
    {
        id: "faq-proration",
        title: "How does changing plans mid-cycle work?",
        content:
            "We prorate to the day. Upgrades are charged immediately for the remainder of the period, downgrades become a credit against your next invoice."
    },
    {
        id: "faq-vat",
        title: "Is VAT included in the listed price?",
        content:
            "Prices exclude VAT. If you add a valid EU VAT number we apply the reverse charge automatically from the next invoice onward."
    },
    {
        id: "faq-refund",
        title: "What is your refund policy?",
        content:
            "Cancel within 30 days of your first payment and we refund it in full, no questions. After that we refund unused whole months on annual plans."
    }
];

/* ----------------------------------------------------------
   04 — Products
   ---------------------------------------------------------- */

export const productTabs: TabItem[] = [
    { id: "chairs", label: "Seating" },
    { id: "lighting", label: "Lighting" },
    { id: "tables", label: "Tables" },
    { id: "storage", label: "Storage" }
];

export const productItems = [
    {
        name: "Alva Lounge Chair",
        detail: "Oiled oak · Bouclé",
        price: "$1,240",
        tone: "sand",
        label: "New"
    },
    {
        name: "Rue Dining Chair",
        detail: "Ash · Leather seat",
        price: "$420",
        tone: "clay",
        label: ""
    },
    {
        name: "Nord Armchair",
        detail: "Walnut · Wool",
        price: "$1,680",
        tone: "moss",
        label: "Last few"
    },
    {
        name: "Pica Stool",
        detail: "Powder-coated steel",
        price: "$240",
        tone: "stone",
        label: ""
    }
];

/* ----------------------------------------------------------
   05 — Documentation
   ---------------------------------------------------------- */

export const docsTabs: TabItem[] = [
    { id: "node", label: "Node" },
    { id: "python", label: "Python" },
    { id: "go", label: "Go" },
    { id: "curl", label: "cURL" }
];

export const docsSteps = [
    { n: "1", label: "Install the SDK" },
    { n: "2", label: "Authenticate" },
    { n: "3", label: "Send your first event" }
];

export const docsResponse = [
    { key: "id", value: '"evt_8f21c4"' },
    { key: "status", value: '"delivered"' },
    { key: "attempts", value: "1" },
    { key: "latency_ms", value: "38" }
];
