import type { TableColumn, TableRow } from "../../components/ui/atoms/Table/Table.types";

/* ----------------------------------------------------------
   01 — Billing history
   ---------------------------------------------------------- */

export const invoiceColumns: TableColumn[] = [
    { key: "number", label: "Invoice" },
    { key: "date", label: "Issued" },
    { key: "period", label: "Period" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" }
];

export const invoiceRows: TableRow[] = [
    { number: "INV-2026-0184", date: "1 Jul 2026", period: "Jul 2026", amount: "€248.00", status: "Paid" },
    { number: "INV-2026-0161", date: "1 Jun 2026", period: "Jun 2026", amount: "€248.00", status: "Paid" },
    { number: "INV-2026-0139", date: "1 May 2026", period: "May 2026", amount: "€212.00", status: "Paid" },
    { number: "INV-2026-0117", date: "1 Apr 2026", period: "Apr 2026", amount: "€212.00", status: "Refunded" },
    { number: "INV-2026-0094", date: "1 Mar 2026", period: "Mar 2026", amount: "€212.00", status: "Paid" }
];

export const invoiceSummary = [
    { key: "Billed this year", value: "€1,544.00" },
    { key: "Next invoice", value: "1 Aug 2026" },
    { key: "Payment method", value: "SEPA · •••• 4417" }
];

/* ----------------------------------------------------------
   02 — Nutrition table
   ---------------------------------------------------------- */

export const nutritionColumns: TableColumn[] = [
    { key: "nutrient", label: "Typical values" },
    { key: "per100", label: "Per 100g" },
    { key: "perServing", label: "Per serving (45g)" },
    { key: "ri", label: "%RI*" }
];

export const nutritionRows: TableRow[] = [
    { nutrient: "Energy", per100: "1,612 kJ / 384 kcal", perServing: "725 kJ / 173 kcal", ri: "9%" },
    { nutrient: "Fat", per100: "8.4 g", perServing: "3.8 g", ri: "5%" },
    { nutrient: "of which saturates", per100: "1.2 g", perServing: "0.5 g", ri: "3%" },
    { nutrient: "Carbohydrate", per100: "60.1 g", perServing: "27.0 g", ri: "10%" },
    { nutrient: "of which sugars", per100: "12.8 g", perServing: "5.8 g", ri: "6%" },
    { nutrient: "Fibre", per100: "9.6 g", perServing: "4.3 g", ri: "—" },
    { nutrient: "Protein", per100: "11.2 g", perServing: "5.0 g", ri: "10%" },
    { nutrient: "Salt", per100: "0.06 g", perServing: "0.03 g", ri: "1%" }
];

export const nutritionIngredients =
    "Wholegrain oat flakes (78%), dried dates, sunflower seeds, cold-pressed rapeseed oil, sea salt.";

/* ----------------------------------------------------------
   03 — Fixture list
   ---------------------------------------------------------- */

export const fixtureColumns: TableColumn[] = [
    { key: "pos", label: "#" },
    { key: "club", label: "Club" },
    { key: "played", label: "P" },
    { key: "gd", label: "GD" },
    { key: "points", label: "Pts" },
    { key: "form", label: "Form" }
];

export const fixtureRows: TableRow[] = [
    { pos: "1", club: "Rotterdam Noord", played: "24", gd: "+31", points: "56", form: "W W W D W" },
    { pos: "2", club: "Delft United", played: "24", gd: "+22", points: "51", form: "W D W W L" },
    { pos: "3", club: "Leiden Athletic", played: "24", gd: "+18", points: "48", form: "D W L W W" },
    { pos: "4", club: "Utrecht Sport", played: "24", gd: "+9", points: "42", form: "L W D W D" },
    { pos: "5", club: "Haarlem City", played: "24", gd: "+4", points: "39", form: "W L W D L" }
];

export const nextFixture = {
    home: "Rotterdam Noord",
    away: "Delft United",
    date: "Sat 26 Jul · 16:30",
    venue: "Sportpark Wijnhaven"
};

/* ----------------------------------------------------------
   04 — API reference
   ---------------------------------------------------------- */

export const paramColumns: TableColumn[] = [
    { key: "name", label: "Parameter" },
    { key: "type", label: "Type" },
    { key: "required", label: "Required" },
    { key: "description", label: "Description" }
];

export const paramRows: TableRow[] = [
    { name: "type", type: "string", required: "Yes", description: "Event name in dot notation, e.g. order.created." },
    { name: "data", type: "object", required: "Yes", description: "Arbitrary JSON payload, up to 256 KB." },
    { name: "idempotency_key", type: "string", required: "No", description: "Retries with the same key return the original event." },
    { name: "delivered_at", type: "timestamp", required: "No", description: "Schedule delivery for a future time, ISO 8601." },
    { name: "retries", type: "integer", required: "No", description: "Maximum delivery attempts. Defaults to 4." }
];

export const responseCodes = [
    { code: "200", label: "Event accepted and queued", tone: "ok" },
    { code: "402", label: "Plan quota exceeded", tone: "warn" },
    { code: "422", label: "Payload failed validation", tone: "warn" },
    { code: "429", label: "Rate limited — back off and retry", tone: "warn" }
];

/* ----------------------------------------------------------
   05 — Cap table
   ---------------------------------------------------------- */

export const capColumns: TableColumn[] = [
    { key: "holder", label: "Holder" },
    { key: "class", label: "Class" },
    { key: "shares", label: "Shares" },
    { key: "fd", label: "Fully diluted" },
    { key: "invested", label: "Invested" }
];

export const capRows: TableRow[] = [
    { holder: "Amara Lindqvist", class: "Common", shares: "4,200,000", fd: "34.2%", invested: "—" },
    { holder: "Daniel Okafor", class: "Common", shares: "4,200,000", fd: "34.2%", invested: "—" },
    { holder: "Northgate Ventures", class: "Preferred A", shares: "1,840,000", fd: "15.0%", invested: "€3,200,000" },
    { holder: "Meridian Seed Fund", class: "Preferred Seed", shares: "980,000", fd: "8.0%", invested: "€750,000" },
    { holder: "Option pool", class: "Reserved", shares: "1,060,000", fd: "8.6%", invested: "—" }
];

export const capSummary = [
    { key: "Post-money", value: "€24.0M" },
    { key: "Raised to date", value: "€3.95M" },
    { key: "Shares outstanding", value: "12,280,000" },
    { key: "Last round", value: "Series A · Mar 2026" }
];
