import type { ProgressVariant } from "../../components/ui/atoms/Progress/Progress.types";

/* ----------------------------------------------------------
   01 — Online hearing test (eniyicihaz.com)
   ---------------------------------------------------------- */

export const hearingTestSteps = [
    { label: "Kulaklık kontrolü", state: "done" },
    { label: "Ortam sessizliği", state: "done" },
    { label: "Sağ kulak", state: "current" },
    { label: "Sol kulak", state: "todo" },
    { label: "Sonuç", state: "todo" }
];

export const hearingFrequencies = [
    { hz: "500 Hz", right: 92, left: 0, done: true },
    { hz: "1 kHz", right: 78, left: 0, done: true },
    { hz: "2 kHz", right: 54, left: 0, done: false },
    { hz: "4 kHz", right: 0, left: 0, done: false }
];

export const hearingNotes = [
    "Sessiz bir odada olduğunuzdan emin olun",
    "Kulaklık ses seviyesini değiştirmeyin",
    "Duyduğunuz her tonda düğmeye basın"
];

/* ----------------------------------------------------------
   02 — Crowdfunding campaign
   ---------------------------------------------------------- */

export const campaign = {
    title: "A public swimming pool for Wijnhaven",
    raised: "€148,200",
    goal: "€200,000",
    percent: 74,
    backers: "2,184",
    daysLeft: "19"
};

export const campaignTiers = [
    { amount: "€25", label: "Name on the donor wall", claimed: 940, limit: 1500 },
    { amount: "€120", label: "Founding member, first year free", claimed: 380, limit: 400 },
    { amount: "€500", label: "A lane tile with your inscription", claimed: 46, limit: 100 }
];

/* ----------------------------------------------------------
   03 — Storage breakdown
   ---------------------------------------------------------- */

export const storageTotal = {
    used: "184.2 GB",
    total: "250 GB",
    percent: 74
};

export const storageBreakdown: {
    label: string;
    size: string;
    value: number;
    variant: ProgressVariant;
}[] = [
    { label: "Photos & video", size: "96.4 GB", value: 52, variant: "primary" },
    { label: "Backups", size: "48.1 GB", value: 26, variant: "info" },
    { label: "Documents", size: "24.8 GB", value: 13, variant: "success" },
    { label: "Mail & other", size: "14.9 GB", value: 8, variant: "warning" }
];

/* ----------------------------------------------------------
   04 — Marathon splits
   ---------------------------------------------------------- */

export const raceMeta = {
    event: "Rotterdam Marathon",
    runner: "Amara Lindqvist · 4412",
    elapsed: "3:11:42",
    distance: "34.2 km",
    percent: 81,
    pace: "5:24 / km"
};

export const raceSplits = [
    { label: "10 km", time: "53:18", pace: "5:19", value: 100 },
    { label: "Half", time: "1:53:04", pace: "5:21", value: 100 },
    { label: "30 km", time: "2:41:37", pace: "5:22", value: 100 },
    { label: "40 km", time: "—", pace: "—", value: 42 }
];

/* ----------------------------------------------------------
   05 — Build pipeline
   ---------------------------------------------------------- */

export const pipelineStages: {
    name: string;
    detail: string;
    value: number;
    variant: ProgressVariant;
    state: string;
    time: string;
}[] = [
    {
        name: "install",
        detail: "pnpm install --frozen-lockfile",
        value: 100,
        variant: "success",
        state: "passed",
        time: "12.4s"
    },
    {
        name: "lint",
        detail: "eslint . --max-warnings 0",
        value: 100,
        variant: "success",
        state: "passed",
        time: "6.1s"
    },
    {
        name: "test",
        detail: "vitest run --coverage",
        value: 68,
        variant: "primary",
        state: "running",
        time: "41.8s"
    },
    {
        name: "build",
        detail: "astro build",
        value: 0,
        variant: "secondary",
        state: "queued",
        time: "—"
    },
    {
        name: "deploy",
        detail: "relay deploy --prod",
        value: 0,
        variant: "secondary",
        state: "queued",
        time: "—"
    }
];

export const pipelineMeta = [
    { key: "Commit", value: "8f21c4" },
    { key: "Branch", value: "main" },
    { key: "Triggered by", value: "@okafor" }
];
