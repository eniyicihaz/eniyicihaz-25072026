/* ----------------------------------------------------------
   01 — Announcement
   ---------------------------------------------------------- */

export const announcementLinks = [
    "Read the changelog",
    "Migration guide",
    "Watch the 4-min tour"
];

/* ----------------------------------------------------------
   02 — Success
   ---------------------------------------------------------- */

export const orderRows = [
    { label: "Order", value: "#NW-40218" },
    { label: "Plan", value: "Studio · Annual" },
    { label: "Paid with", value: "Visa •••• 4242" },
    { label: "Total", value: "$1,188.00" }
];

export const orderSteps = [
    {
        title: "Receipt on its way",
        body: "Sent to billing@studio.com within the next few minutes."
    },
    {
        title: "Seats are live",
        body: "Invite the rest of your team whenever you are ready."
    },
    {
        title: "Onboarding call",
        body: "Optional, 30 minutes, booked whenever suits you."
    }
];

/* ----------------------------------------------------------
   03 — Warning
   ---------------------------------------------------------- */

export const warningChecklist = [
    { label: "Update DNS records", done: true },
    { label: "Verify domain ownership", done: true },
    { label: "Re-issue TLS certificate", done: false },
    { label: "Switch traffic to the new origin", done: false }
];

/* ----------------------------------------------------------
   04 — Maintenance
   ---------------------------------------------------------- */

export const maintenanceWindow = [
    { key: "Starts", value: "27 Jul · 02:00 UTC" },
    { key: "Ends", value: "27 Jul · 04:00 UTC" },
    { key: "Impact", value: "Read-only API" },
    { key: "Regions", value: "All" }
];

export const maintenanceServices = [
    { name: "REST & GraphQL API", state: "Read-only", tone: "warning" },
    { name: "Dashboard", state: "Available", tone: "success" },
    { name: "Webhook delivery", state: "Queued", tone: "warning" },
    { name: "Warehouse sync", state: "Paused", tone: "neutral" }
];

/* ----------------------------------------------------------
   05 — Promotion
   ---------------------------------------------------------- */

export const promoPerks = [
    "Three months free on any annual plan",
    "Migration handled by our team",
    "Locked pricing for two years"
];
