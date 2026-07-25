/* 01 — SDK quickstart */

export const installSnippet = [
    "npm install @relay/sdk",
    "",
    "# or",
    "pnpm add @relay/sdk"
].join("\n");

export const usageSnippet = [
    'import { Relay } from "@relay/sdk";',
    "",
    "const relay = new Relay({",
    "  token: process.env.RELAY_TOKEN",
    "});",
    "",
    "await relay.events.send({",
    '  type: "order.created",',
    '  data: { orderId: "NW-40218" }',
    "});"
].join("\n");

export const quickstartSteps = [
    { n: "1", label: "Install the SDK", done: true },
    { n: "2", label: "Add your token", done: true },
    { n: "3", label: "Send an event", done: false }
];

/* 02 — Release notes with inline code */

export const releaseNotes = [
    {
        type: "Added",
        tone: "added",
        body: "New {code:idempotencyKey} option on every write. Retries with the same key return the original response instead of creating a duplicate."
    },
    {
        type: "Changed",
        tone: "changed",
        body: "Default backoff is now exponential with jitter. Override it with {code:retries} or disable entirely with {code:retries: 0}."
    },
    {
        type: "Fixed",
        tone: "fixed",
        body: "{code:relay.events.list()} no longer drops the {code:cursor} parameter when combined with a date filter."
    },
    {
        type: "Removed",
        tone: "removed",
        body: "The deprecated {code:v2} config format. Run {code:npx relay migrate} to convert existing files."
    }
];

export const releaseMeta = {
    version: "4.2.0",
    date: "18 July 2026",
    tag: "Minor"
};

/* 03 — Terminal / incident runbook */

export const runbookSteps = [
    {
        n: "01",
        title: "Confirm the symptom",
        body: "Check delivery lag before touching anything. If p99 is under 30s this is not the runbook you want.",
        cmd: "relay metrics delivery --window 15m --percentile 99"
    },
    {
        n: "02",
        title: "Identify the bad rollout",
        body: "Compare the running config hash against the last known-good deploy.",
        cmd: "relay config diff --env production --against last-green"
    },
    {
        n: "03",
        title: "Roll back",
        body: "Rolling back is safe at any point — queued events replay automatically.",
        cmd: "relay deploy rollback --env production --to last-green"
    }
];

export const runbookMeta = {
    title: "Elevated webhook delivery latency",
    severity: "SEV-2",
    owner: "platform",
    updated: "Reviewed 2 weeks ago"
};

/* 04 — Config reference table */

export const configRows = [
    { key: "region", type: "string", def: '"eu-central-1"', note: "Where builds run and functions deploy." },
    { key: "runtime", type: "string", def: '"node22"', note: "Applies to new deployments only." },
    { key: "buildFilter", type: "string[]", def: "[]", note: "Glob patterns; empty means build everything." },
    { key: "previewAuth", type: "boolean", def: "true", note: "Require sign-in to open a preview URL." },
    { key: "retries", type: "number", def: "4", note: "Maximum delivery attempts per event." }
];

export const configSnippet = [
    "// relay.config.ts",
    'import { defineConfig } from "@relay/sdk";',
    "",
    "export default defineConfig({",
    '  region: "eu-central-1",',
    '  buildFilter: ["apps/web/**"],',
    "  previewAuth: false",
    "});"
].join("\n");

/* 05 — Teaching / lesson */

export const lessonMeta = {
    course: "JavaScript, properly",
    module: "Module 4 · Asynchrony",
    lesson: "Lesson 2 — Why await inside a loop is usually wrong"
};

export const lessonBefore = [
    "// Sequential — 10 requests take 10 × latency",
    "const results = [];",
    "",
    "for (const id of ids) {",
    "  results.push(await fetchUser(id));",
    "}"
].join("\n");

export const lessonAfter = [
    "// Concurrent — 10 requests take about 1 × latency",
    "const results = await Promise.all(",
    "  ids.map((id) => fetchUser(id))",
    ");"
].join("\n");

export const lessonPoints = [
    "Use {code:Promise.all} when the calls do not depend on each other",
    "Keep {code:await} in the loop when each call needs the previous result",
    "Reach for {code:Promise.allSettled} when one failure should not abort the rest"
];
