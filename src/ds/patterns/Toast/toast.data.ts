/* ----------------------------------------------------------
   01 — Deploy pipeline
   ---------------------------------------------------------- */

export const deployToasts = [
    {
        variant: "success" as const,
        title: "Production deploy succeeded",
        description: "fieldnote.studio · built in 41s · commit 8f21c4",
        action: "View deployment",
        age: "just now"
    },
    {
        variant: "info" as const,
        title: "Preview ready for review",
        description: "feat/pricing-page · 3 comments waiting",
        action: "Open preview",
        age: "2m ago"
    },
    {
        variant: "error" as const,
        title: "Build failed on develop",
        description: "Type error in src/lib/billing.ts:214",
        action: "See logs",
        age: "12m ago"
    }
];

export const deployTerminal = [
    { text: "$ relay deploy --prod", tone: "cmd" },
    { text: "→ building 12 routes", tone: "dim" },
    { text: "→ uploading static assets", tone: "dim" },
    { text: "✓ deployed to fieldnote.studio", tone: "ok" }
];

/* ----------------------------------------------------------
   02 — Ride hailing
   ---------------------------------------------------------- */

export const rideStops = [
    { label: "Wijnhaven 61", note: "Pickup", state: "done" },
    { label: "Rotterdam Centraal", note: "Drop-off · 14 min", state: "next" }
];

export const rideDriver = {
    initials: "MB",
    name: "Malik B.",
    detail: "Toyota Prius · 4.96 ★",
    plate: "82-XKR-4"
};

/* ----------------------------------------------------------
   03 — Bank alert
   ---------------------------------------------------------- */

export const bankTransactions = [
    { merchant: "Albert Heijn", time: "Today · 09:12", amount: "−€38.40", tone: "out" },
    { merchant: "Salary · Fieldnote BV", time: "Yesterday", amount: "+€3,410.00", tone: "in" },
    { merchant: "NS Reizigers", time: "Yesterday", amount: "−€12.60", tone: "out" }
];

/* ----------------------------------------------------------
   04 — Collaborative editor
   ---------------------------------------------------------- */

export const editorPresence = [
    { initials: "YT", name: "Yuki" },
    { initials: "JR", name: "Jonah" },
    { initials: "PA", name: "Priya" }
];

export const editorLines = [
    { w: "72%", accent: false },
    { w: "94%", accent: false },
    { w: "48%", accent: true },
    { w: "86%", accent: false },
    { w: "63%", accent: false }
];

/* ----------------------------------------------------------
   05 — Order tracking
   ---------------------------------------------------------- */

export const orderTimeline = [
    { label: "Order placed", time: "18 Jul · 14:02", state: "done" },
    { label: "Left the workshop", time: "22 Jul · 09:40", state: "done" },
    { label: "Out for delivery", time: "Today · 07:15", state: "current" },
    { label: "Delivered", time: "Expected by 18:00", state: "todo" }
];

export const orderItem = {
    name: "Alva Lounge Chair",
    detail: "Oiled oak · Bouclé, Sand",
    order: "#AV-88214"
};
