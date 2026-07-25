/* ----------------------------------------------------------
   01 — Feature Cards
   ---------------------------------------------------------- */

export const features = [
    {
        glyph: "◈",
        title: "Edge routing",
        body: "Requests resolve at the nearest of 38 regions, so a user in Jakarta waits the same 40ms as one in Frankfurt."
    },
    {
        glyph: "◇",
        title: "Instant rollback",
        body: "Every deploy keeps its own immutable URL. Reverting a bad release is one click and takes effect globally in seconds."
    },
    {
        glyph: "◉",
        title: "Preview branches",
        body: "Each pull request gets a live environment with seeded data, ready to share before anything touches production."
    },
    {
        glyph: "◐",
        title: "Zero-config caching",
        body: "Static assets, API responses and images are cached with sensible defaults you can override per route."
    },
    {
        glyph: "◎",
        title: "Secrets that stay secret",
        body: "Environment values are encrypted per project and never printed in build logs, even on failure."
    },
    {
        glyph: "◈",
        title: "Usage you can predict",
        body: "Hard spending caps, per-project budgets and an alert before you cross any threshold you set."
    }
];

/* ----------------------------------------------------------
   02 — Pricing Cards
   ---------------------------------------------------------- */

export const plans = [
    {
        name: "Hobby",
        price: "$0",
        period: "forever",
        summary: "For side projects and everything you build on a Sunday.",
        features: [
            "1 concurrent build",
            "100GB bandwidth",
            "Community support",
            "Preview deployments"
        ],
        cta: "Start building",
        featured: false
    },
    {
        name: "Pro",
        price: "$24",
        period: "per user / month",
        summary: "For teams shipping to customers every week.",
        features: [
            "12 concurrent builds",
            "1TB bandwidth included",
            "Password-protected previews",
            "Email support in 4 hours",
            "Analytics and Web Vitals"
        ],
        cta: "Start 14-day trial",
        featured: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "annual agreement",
        summary: "For organisations with procurement and a security team.",
        features: [
            "Unlimited concurrency",
            "SAML SSO and SCIM",
            "99.95% uptime SLA",
            "Named solutions engineer",
            "Invoiced annually"
        ],
        cta: "Talk to sales",
        featured: false
    }
];

/* ----------------------------------------------------------
   03 — Blog Cards
   ---------------------------------------------------------- */

export const featuredPost = {
    tag: "Engineering",
    title: "What we learned rewriting our scheduler for the third time",
    excerpt:
        "Two rewrites failed because we optimised for throughput before we understood the shape of the work. The third started with a week of measuring nothing but queue depth.",
    author: "Marta Kovač",
    initials: "MK",
    date: "18 July 2026",
    read: "12 min read",
    tone: "ink"
};

export const posts = [
    {
        tag: "Design",
        title: "Density is a feature, not a default",
        excerpt:
            "Why we shipped three row heights instead of picking the one we liked best.",
        author: "Jonah Reyes",
        initials: "JR",
        date: "9 July 2026",
        read: "6 min read",
        tone: "sand"
    },
    {
        tag: "Culture",
        title: "The written-first meeting, two years on",
        excerpt:
            "We replaced status meetings with documents. Here is what actually stuck.",
        author: "Priya Anand",
        initials: "PA",
        date: "2 July 2026",
        read: "8 min read",
        tone: "moss"
    }
];

/* ----------------------------------------------------------
   04 — Services Cards
   ---------------------------------------------------------- */

export const services = [
    {
        index: "01",
        title: "Brand identity",
        body: "Naming, wordmark, type system and the rules that keep it coherent once fifty people start using it.",
        meta: ["Positioning", "Identity", "Guidelines"],
        duration: "6–8 weeks"
    },
    {
        index: "02",
        title: "Product design",
        body: "Interface design from first flow to shipped release, working inside your repository rather than beside it.",
        meta: ["Research", "UI systems", "Prototypes"],
        duration: "Ongoing"
    },
    {
        index: "03",
        title: "Design systems",
        body: "A component library your engineers actually adopt, with the documentation and governance to keep it alive.",
        meta: ["Audit", "Tokens", "Handover"],
        duration: "10–14 weeks"
    },
    {
        index: "04",
        title: "Marketing sites",
        body: "The site that carries the launch — written, designed and built as one piece of work by the same two people.",
        meta: ["Copy", "Art direction", "Build"],
        duration: "4–6 weeks"
    }
];

/* ----------------------------------------------------------
   05 — Team Cards
   ---------------------------------------------------------- */

export const team = [
    {
        initials: "AL",
        name: "Amara Lindqvist",
        role: "Co-founder, CEO",
        note: "Previously built payments infrastructure at Klarna.",
        tags: ["Strategy", "Partnerships"]
    },
    {
        initials: "DO",
        name: "Daniel Okafor",
        role: "Co-founder, CTO",
        note: "Wrote the first version of our scheduler on a train.",
        tags: ["Platform", "Reliability"]
    },
    {
        initials: "YT",
        name: "Yuki Tanaka",
        role: "Head of Design",
        note: "Cares more about empty states than anyone should.",
        tags: ["Product", "Systems"]
    },
    {
        initials: "SM",
        name: "Sofia Marchetti",
        role: "Head of Support",
        note: "Answers more tickets than the rest of us combined.",
        tags: ["Success", "Docs"]
    }
];
