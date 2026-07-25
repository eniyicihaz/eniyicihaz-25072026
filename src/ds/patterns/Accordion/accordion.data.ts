import type { AccordionItem } from "../../components/ui/atoms/Accordion/Accordion.types";

/* ----------------------------------------------------------
   01 — SaaS FAQ
   ---------------------------------------------------------- */

export const saasFaq: AccordionItem[] = [
    {
        id: "trial",
        title: "How does the 14-day trial work?",
        open: true,
        content:
            "Every workspace starts on the full Scale plan with no card required. When the trial ends you keep read access to everything you built — nothing is deleted, nothing is locked behind a sudden paywall."
    },
    {
        id: "plans",
        title: "Can I change plans later?",
        content:
            "Upgrade or downgrade at any point from billing settings. Changes apply immediately and we prorate the difference to the day, so you only ever pay for what you actually used."
    },
    {
        id: "startups",
        title: "Do you offer startup pricing?",
        content:
            "Teams under ten people at companies younger than two years get 50% off for the first year. Apply from your billing page and we usually approve within one business day."
    },
    {
        id: "data",
        title: "What happens to my data if I cancel?",
        content:
            "You can export everything as JSON or CSV at any time, including after cancelling. We keep a restorable copy for 30 days, then permanently delete it from primary storage and backups."
    },
    {
        id: "hosting",
        title: "Is there a self-hosted option?",
        content:
            "Yes. Enterprise customers can run Northwind inside their own VPC with a signed container image and a Terraform module we maintain alongside the cloud product."
    }
];

/* ----------------------------------------------------------
   02 — Editorial FAQ
   ---------------------------------------------------------- */

export const editorialFaq: AccordionItem[] = [
    {
        id: "engagement",
        title: "What does a typical engagement look like?",
        open: true,
        content:
            "Most partnerships begin with a two-week discovery sprint — audit, interviews, and a written strategy. From there we move into six to twelve week design cycles, shipping something real at the end of every one."
    },
    {
        id: "pricing",
        title: "How do you price your work?",
        content:
            "We quote a fixed monthly retainer per cycle rather than billing hours. You know the cost before we start, and we are never incentivised to make the work take longer than it should."
    },
    {
        id: "team",
        title: "Who will I actually be working with?",
        content:
            "The two people you meet in the first call are the two people who do the work. We deliberately stay small — no account managers, no handoffs to a junior team after the pitch."
    },
    {
        id: "inhouse",
        title: "Can you work alongside our in-house team?",
        content:
            "Frequently. We join your Slack, your standups, and your repository, and we are happy to hand the system over completely once your team is confident running it."
    },
    {
        id: "timeline",
        title: "How soon can we start?",
        content:
            "We take on four partners at a time and usually have an opening four to six weeks out. Urgent work can sometimes be accommodated — it is worth asking."
    }
];

/* ----------------------------------------------------------
   03 — Luxury FAQ
   ---------------------------------------------------------- */

export const luxuryFaq: AccordionItem[] = [
    {
        id: "included",
        title: "What is included in a membership?",
        open: true,
        content:
            "Year-round access to all six houses, priority booking on every release, a dedicated concierge line, and invitations to the twelve private dinners we host each year."
    },
    {
        id: "invitation",
        title: "How do I request an invitation?",
        content:
            "Membership opens twice a year in limited numbers. Submit an expression of interest and, if a place is available, we will arrange an introduction call within the month."
    },
    {
        id: "guest",
        title: "May I bring a guest?",
        content:
            "Each member may bring one guest to any house and up to three to private events. Guests receive the same service, and the reservation stays under your name."
    },
    {
        id: "pause",
        title: "Can I pause or cancel?",
        content:
            "Memberships may be paused once per year for up to three months. Cancellations take effect at the end of the current term, and your place is held for a year should you return."
    }
];

/* ----------------------------------------------------------
   04 — Enterprise FAQ

   Split across two columns, grouped by procurement topic.
   ---------------------------------------------------------- */

export const enterpriseSecurityFaq: AccordionItem[] = [
    {
        id: "soc2",
        title: "Which certifications do you hold?",
        badge: "Security",
        open: true,
        content:
            "SOC 2 Type II, ISO 27001 and ISO 27701, renewed annually by an independent auditor. Current reports and the penetration test summary are available under NDA from the trust centre."
    },
    {
        id: "residency",
        title: "Can we choose our data region?",
        badge: "Security",
        content:
            "Workspaces can be pinned to eu-central, us-east or ap-southeast at provisioning time. Data at rest never leaves the selected region, including backups and search indexes."
    },
    {
        id: "sso",
        title: "Do you support SSO and SCIM?",
        badge: "Access",
        content:
            "SAML 2.0 and OIDC are available on every enterprise agreement, with SCIM 2.0 provisioning for Okta, Entra ID and Google Workspace. Directory groups map directly to workspace roles."
    },
    {
        id: "audit",
        title: "How long are audit logs retained?",
        badge: "Access",
        content:
            "Two years by default, streamable in real time to Splunk, Datadog or any S3-compatible bucket. Retention can be extended to seven years for regulated industries."
    }
];

export const enterpriseCommercialFaq: AccordionItem[] = [
    {
        id: "procurement",
        title: "What does procurement usually involve?",
        badge: "Legal",
        open: true,
        content:
            "A mutual NDA, our standard MSA and a DPA with the EU standard contractual clauses. We accept redlines, and most legal reviews close inside three weeks."
    },
    {
        id: "sla",
        title: "What uptime do you commit to?",
        badge: "Legal",
        content:
            "99.95% monthly availability with service credits written into the agreement. Status history going back three years is public and we publish a post-mortem for every incident."
    },
    {
        id: "invoicing",
        title: "Can we be invoiced annually?",
        badge: "Billing",
        content:
            "Yes — net 30 by bank transfer, with purchase order references carried onto every invoice. Multi-year agreements are discounted and price-locked for the full term."
    },
    {
        id: "onboarding",
        title: "Is migration support included?",
        badge: "Billing",
        content:
            "Every enterprise agreement includes a named solutions engineer for the first 90 days, a written migration plan and up to three training sessions for your team."
    }
];

/* ----------------------------------------------------------
   05 — Documentation FAQ

   Panels are filled by named slots on the page,
   so only the headings live here.
   ---------------------------------------------------------- */

export const docsFaq: AccordionItem[] = [
    {
        id: "install",
        title: "Installing the SDK",
        subtitle: "Node 18+, Deno and Bun are supported",
        open: true
    },
    {
        id: "auth",
        title: "Authenticating requests",
        subtitle: "Secret keys, scoped tokens and rotation"
    },
    {
        id: "errors",
        title: "Handling errors and retries",
        subtitle: "Idempotency keys and backoff defaults"
    },
    {
        id: "webhooks",
        title: "Verifying webhook signatures",
        subtitle: "Timestamp tolerance and replay protection"
    }
];

export const docsLinks = [
    { label: "Quickstart", meta: "5 min" },
    { label: "API reference", meta: "REST" },
    { label: "SDK changelog", meta: "v4.2" },
    { label: "Status page", meta: "Live" }
];
