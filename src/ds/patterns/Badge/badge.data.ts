import type { BadgeVariant } from "../../components/ui/atoms/Badge/Badge.types";

/* ----------------------------------------------------------
   01 — Product Labels
   ---------------------------------------------------------- */

export const products: {
    name: string;
    detail: string;
    price: string;
    was?: string;
    label: string;
    labelTone: BadgeVariant;
    tone: string;
    stock: string;
}[] = [
    {
        name: "Alva Lounge Chair",
        detail: "Oiled oak · Bouclé",
        price: "$1,240",
        label: "New season",
        labelTone: "primary",
        tone: "sand",
        stock: "Ships in 2 weeks"
    },
    {
        name: "Marlow Floor Lamp",
        detail: "Brushed brass",
        price: "$480",
        was: "$620",
        label: "Sale",
        labelTone: "danger",
        tone: "clay",
        stock: "In stock"
    },
    {
        name: "Sten Coffee Table",
        detail: "Travertine · Steel",
        price: "$890",
        label: "Last few",
        labelTone: "warning",
        tone: "stone",
        stock: "3 remaining"
    },
    {
        name: "Nils Shelving System",
        detail: "Powder-coated aluminium",
        price: "$1,690",
        label: "Made to order",
        labelTone: "neutral",
        tone: "moss",
        stock: "6–8 weeks"
    }
];

/* ----------------------------------------------------------
   02 — Categories
   ---------------------------------------------------------- */

export const categoryFilters = [
    { label: "All writing", count: 128, active: true },
    { label: "Engineering", count: 46, active: false },
    { label: "Design", count: 31, active: false },
    { label: "Research", count: 22, active: false },
    { label: "Culture", count: 18, active: false },
    { label: "Changelog", count: 11, active: false }
];

export const categoryPosts = [
    {
        title: "Why our design tokens live in the database",
        excerpt:
            "Shipping theme changes without a deploy sounded reckless until we tried the alternative for two years.",
        tags: ["Engineering", "Design systems"],
        date: "18 Jul",
        read: "9 min"
    },
    {
        title: "Reading the room: qualitative signals at scale",
        excerpt:
            "What 400 support conversations told us that our funnel analytics never could.",
        tags: ["Research"],
        date: "11 Jul",
        read: "6 min"
    },
    {
        title: "The changelog is a product surface",
        excerpt:
            "Treating release notes as marketing copy changed how often people upgraded.",
        tags: ["Culture", "Changelog"],
        date: "4 Jul",
        read: "5 min"
    }
];

/* ----------------------------------------------------------
   03 — Status
   ---------------------------------------------------------- */

export const statusServices: {
    name: string;
    region: string;
    state: string;
    tone: BadgeVariant;
    uptime: string;
}[] = [
    {
        name: "REST API",
        region: "Global",
        state: "Operational",
        tone: "success",
        uptime: "99.99%"
    },
    {
        name: "Dashboard",
        region: "Global",
        state: "Operational",
        tone: "success",
        uptime: "99.98%"
    },
    {
        name: "Webhook delivery",
        region: "eu-central",
        state: "Degraded",
        tone: "warning",
        uptime: "99.21%"
    },
    {
        name: "Warehouse sync",
        region: "us-east",
        state: "Maintenance",
        tone: "secondary",
        uptime: "99.94%"
    },
    {
        name: "Search index",
        region: "ap-southeast",
        state: "Operational",
        tone: "success",
        uptime: "99.97%"
    }
];

/* ----------------------------------------------------------
   04 — Statistics
   ---------------------------------------------------------- */

export const stats: {
    value: string;
    label: string;
    delta: string;
    tone: BadgeVariant;
    note: string;
}[] = [
    {
        value: "$4.8M",
        label: "Annual recurring revenue",
        delta: "+18%",
        tone: "success",
        note: "vs. same quarter last year"
    },
    {
        value: "12,480",
        label: "Active workspaces",
        delta: "+7%",
        tone: "success",
        note: "3,100 added this quarter"
    },
    {
        value: "41s",
        label: "Median build time",
        delta: "−22%",
        tone: "success",
        note: "down from 53 seconds"
    },
    {
        value: "2.1%",
        label: "Monthly churn",
        delta: "+0.4",
        tone: "danger",
        note: "concentrated in the free tier"
    }
];

/* ----------------------------------------------------------
   05 — Feature Chips
   ---------------------------------------------------------- */

export const featureGroups = [
    {
        title: "Build & deploy",
        items: [
            "Preview branches",
            "Instant rollback",
            "Edge functions",
            "Monorepo aware",
            "Build cache"
        ]
    },
    {
        title: "Collaboration",
        items: [
            "Comments on previews",
            "Shared environments",
            "Role-based access",
            "Slack and Linear"
        ]
    },
    {
        title: "Security",
        items: [
            "SAML SSO",
            "SCIM provisioning",
            "Audit log streaming",
            "Encrypted secrets",
            "IP allowlists"
        ]
    }
];
