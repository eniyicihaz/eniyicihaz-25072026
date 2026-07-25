/* 01 — SGK reimbursement notice (eniyicihaz.com) */

export const sgkPoints = [
    "5 yılda bir cihaz başına katkı payı",
    "18 yaş altı için tam karşılama",
    "Rapor ve evrak işlemlerini biz yürütüyoruz"
];

export const sgkSteps = [
    { n: "1", label: "KBB uzmanından rapor" },
    { n: "2", label: "Odyometri testi" },
    { n: "3", label: "Cihaz seçimi ve teslim" }
];

/* 02 — Cookie / privacy bar */

export const consentLinks = ["Çerez politikası", "Gizlilik", "Tercihleri yönet"];

/* 03 — Incident status */

export const incidentUpdates = [
    {
        time: "14:02 UTC",
        state: "Investigating",
        body: "Elevated error rates on webhook delivery in eu-central. Reads are unaffected."
    },
    {
        time: "14:19 UTC",
        state: "Identified",
        body: "A bad config rollout on the delivery workers. Rollback in progress."
    },
    {
        time: "14:41 UTC",
        state: "Monitoring",
        body: "Rollback complete, queues draining. Backlog cleared in roughly 10 minutes."
    }
];

export const incidentServices = [
    { name: "Webhook delivery", state: "Degraded", tone: "warning" },
    { name: "REST API", state: "Operational", tone: "success" },
    { name: "Dashboard", state: "Operational", tone: "success" }
];

/* 04 — Store promotion */

export const promoRows = [
    { label: "Ends", value: "Sunday 27 July, 23:59" },
    { label: "Applies to", value: "All full-price furniture" },
    { label: "Code", value: "SUMMER26" }
];

/* 05 — Browser upgrade */

export const browserFeatures = [
    "Container queries",
    "View transitions",
    "Popover API",
    "CSS nesting"
];

export const browserOptions = [
    { name: "Chrome", version: "128+" },
    { name: "Safari", version: "18+" },
    { name: "Firefox", version: "130+" }
];
