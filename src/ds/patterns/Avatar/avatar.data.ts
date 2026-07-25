/* ----------------------------------------------------------
   01 — Team
   ---------------------------------------------------------- */

export const teamGroups = [
    {
        department: "Leadership",
        people: [
            { initials: "AL", name: "Amara Lindqvist", role: "Chief Executive" },
            { initials: "DO", name: "Daniel Okafor", role: "Chief Technology" },
            { initials: "RB", name: "Rina Baptiste", role: "Chief Operating" }
        ]
    },
    {
        department: "Design",
        people: [
            { initials: "YT", name: "Yuki Tanaka", role: "Head of Design" },
            { initials: "MK", name: "Marta Kovač", role: "Brand Director" },
            { initials: "TS", name: "Theo Sørensen", role: "Product Designer" },
            { initials: "NA", name: "Nadia Aziz", role: "Design Engineer" }
        ]
    },
    {
        department: "Engineering",
        people: [
            { initials: "JR", name: "Jonah Reyes", role: "Principal Engineer" },
            { initials: "CE", name: "Clara Esposito", role: "Platform Lead" },
            { initials: "HM", name: "Hugo Meier", role: "Staff Engineer" },
            { initials: "PA", name: "Priya Anand", role: "Engineering Manager" },
            { initials: "LO", name: "Lars Ødegård", role: "Infrastructure" }
        ]
    }
];

/* ----------------------------------------------------------
   02 — Testimonials
   ---------------------------------------------------------- */

export const testimonials = [
    {
        quote:
            "We replaced four internal tools with this in a fortnight. The part I did not expect was how quickly the rest of the company stopped asking us for reports.",
        initials: "SV",
        name: "Sara Vollmer",
        role: "VP Operations, Cadence",
        weight: "lead"
    },
    {
        quote:
            "The migration guide was accurate, which is rarer than it should be. We were live on a Thursday afternoon.",
        initials: "MB",
        name: "Malik Brennan",
        role: "Staff Engineer, Fathom"
    },
    {
        quote:
            "Support answered in eleven minutes on a Sunday and the person who replied had actually read our logs.",
        initials: "EJ",
        name: "Elena Jørgensen",
        role: "CTO, Northshore"
    },
    {
        quote:
            "Our design and engineering teams finally argue about the right things now.",
        initials: "KA",
        name: "Kwame Asare",
        role: "Head of Product, Lumen"
    }
];

/* ----------------------------------------------------------
   03 — Customers
   ---------------------------------------------------------- */

export const customerLogos = [
    "MERIDIAN",
    "NORTHWIND",
    "ATLAS",
    "LUMEN",
    "FORGE",
    "CADENCE"
];

export const customerFaces = [
    "AL", "DO", "YT", "JR", "CE", "PA", "MK", "TS", "NA", "HM", "LO", "SM"
];

/* ----------------------------------------------------------
   04 — Community
   ---------------------------------------------------------- */

export const communityRooms = [
    {
        name: "#introductions",
        topic: "Say hello and tell us what you are building",
        online: 148,
        faces: ["AL", "JR", "YT", "PA"]
    },
    {
        name: "#show-and-tell",
        topic: "Ship something? Post it here",
        online: 92,
        faces: ["CE", "MK", "TS"]
    },
    {
        name: "#help",
        topic: "Stuck on something — someone usually knows",
        online: 214,
        faces: ["HM", "LO", "NA", "SM"]
    }
];

export const communityLeaders = [
    { initials: "PA", name: "Priya Anand", note: "412 answers", rank: "01" },
    { initials: "HM", name: "Hugo Meier", note: "308 answers", rank: "02" },
    { initials: "NA", name: "Nadia Aziz", note: "277 answers", rank: "03" },
    { initials: "LO", name: "Lars Ødegård", note: "195 answers", rank: "04" }
];

/* ----------------------------------------------------------
   05 — Comments
   ---------------------------------------------------------- */

export const comments = [
    {
        initials: "MK",
        name: "Marta Kovač",
        badge: "Author",
        time: "4 hours ago",
        body: "The third rewrite worked because we finally measured queue depth before touching the scheduler. Everything else followed from that one number.",
        likes: 24,
        replies: [
            {
                initials: "JR",
                name: "Jonah Reyes",
                time: "3 hours ago",
                body: "This matches our experience almost exactly. We spent a month optimising throughput that was never the bottleneck.",
                likes: 11
            },
            {
                initials: "PA",
                name: "Priya Anand",
                time: "2 hours ago",
                body: "Did you keep the old scheduler running in shadow mode during the cutover, or switch outright?",
                likes: 6
            }
        ]
    },
    {
        initials: "CE",
        name: "Clara Esposito",
        time: "1 hour ago",
        body: "Bookmarking this for the next time someone on my team proposes a rewrite in the first week of a project.",
        likes: 18,
        replies: []
    }
];
