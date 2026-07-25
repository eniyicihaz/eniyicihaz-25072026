/* ----------------------------------------------------------
   01 — Support ticket
   ---------------------------------------------------------- */

export const ticketMeta = [
    { key: "Workspace", value: "fieldnote-studio" },
    { key: "Plan", value: "Business · Priority" },
    { key: "Response", value: "Under 4 hours" }
];

export const ticketAttachments = [
    { name: "console-error.png", size: "184 KB" },
    { name: "har-export.json", size: "2.1 MB" }
];

export const ticketTips = [
    "What you expected to happen",
    "What happened instead",
    "The last thing that worked"
];

/* ----------------------------------------------------------
   02 — Product review
   ---------------------------------------------------------- */

export const reviewProduct = {
    name: "Alva Lounge Chair",
    detail: "Oiled oak · Bouclé, Sand",
    ordered: "Delivered 4 June 2026"
};

export const reviewAspects = [
    { label: "Comfort", score: 5 },
    { label: "Build quality", score: 5 },
    { label: "Value", score: 4 }
];

export const reviewGuidelines = [
    "Focus on the product, not the delivery",
    "No personal details or links",
    "Published within one working day"
];

/* ----------------------------------------------------------
   03 — Job application
   ---------------------------------------------------------- */

export const roleFacts = [
    { key: "Role", value: "Senior Product Designer" },
    { key: "Team", value: "Design · 6 people" },
    { key: "Location", value: "Rotterdam or remote (CET ±3)" },
    { key: "Salary", value: "€78,000 – €96,000" }
];

export const applicationSteps = [
    { n: "1", label: "Your details", state: "done" },
    { n: "2", label: "Why this role", state: "current" },
    { n: "3", label: "Portfolio", state: "todo" }
];

/* ----------------------------------------------------------
   04 — Social composer
   ---------------------------------------------------------- */

export const composerReplies = [
    {
        initials: "JR",
        name: "Jonah Reyes",
        handle: "@jreyes",
        time: "12m",
        body: "The part nobody mentions is that the migration is the easy bit. Convincing four teams to stop forking the component is the actual work.",
        likes: "48",
        replies: "6"
    },
    {
        initials: "PA",
        name: "Priya Anand",
        handle: "@priyawrites",
        time: "34m",
        body: "We solved this by making the design system a dependency with a version number. Suddenly people cared about upgrades.",
        likes: "112",
        replies: "14"
    }
];

export const composerTools = ["Image", "Poll", "Emoji", "Schedule"];

/* ----------------------------------------------------------
   05 — Creative brief
   ---------------------------------------------------------- */

export const briefFields = [
    {
        label: "The problem",
        hint: "What is not working today? Be specific — symptoms are more useful than diagnoses.",
        rows: 4,
        value: "Our onboarding converts at 11% and most people drop at the workspace-creation step. Support says the naming rules confuse them.",
        counter: 600
    },
    {
        label: "What success looks like",
        hint: "One measurable outcome. If you have three, pick the one you would defend in a board meeting.",
        rows: 3,
        value: "",
        counter: 400
    },
    {
        label: "Anything we should not touch",
        hint: "Constraints, sacred cows, work already in flight.",
        rows: 3,
        value: "",
        counter: 400
    }
];

export const briefTeam = [
    { initials: "MK", name: "Marta Kovač", role: "Creative director" },
    { initials: "TS", name: "Theo Sørensen", role: "Design lead" }
];
