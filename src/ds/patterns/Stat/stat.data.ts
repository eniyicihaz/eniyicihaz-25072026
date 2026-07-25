import type { StatProps } from "../../components/ui/atoms/Stat/Stat.types";

type Stat = Pick<StatProps, "label" | "value" | "description" | "trend" | "icon">;

/* ----------------------------------------------------------
   01 — Clinic outcomes (eniyicihaz.com)
   ---------------------------------------------------------- */

export const clinicStats: Stat[] = [
    {
        label: "Memnuniyet oranı",
        value: "%96",
        description: "Son 12 ayda 2.140 hasta anketi",
        trend: "up"
    },
    {
        label: "Ortalama randevu süresi",
        value: "2 gün",
        description: "Geçen yıl 5 gündü",
        trend: "up"
    },
    {
        label: "Cihazı kullanmaya devam eden",
        value: "%91",
        description: "Bir yıl sonrasında ölçüldü",
        trend: "up"
    },
    {
        label: "Ücretsiz işitme testi",
        value: "18.400",
        description: "2019'dan bu yana toplam",
        trend: "neutral"
    }
];

export const clinicNote =
    "Rakamlar bağımsız hasta memnuniyet anketinden alınmıştır. Tüm testler odyometri kabininde, sertifikalı odyologlar tarafından yapılır.";

export const clinicBadges = ["SGK anlaşmalı", "ISO 9001", "14 şube"];

/* ----------------------------------------------------------
   02 — Investor metrics
   ---------------------------------------------------------- */

export const investorStats: Stat[] = [
    {
        label: "Annual recurring revenue",
        value: "$4.8M",
        description: "18% vs. same quarter last year",
        trend: "up"
    },
    {
        label: "Net revenue retention",
        value: "118%",
        description: "Expansion outpacing churn",
        trend: "up"
    },
    {
        label: "Gross margin",
        value: "82%",
        description: "Up 3pts after the infra migration",
        trend: "up"
    },
    {
        label: "Monthly burn",
        value: "$310k",
        description: "31 months of runway",
        trend: "down"
    },
    {
        label: "Customers over $50k",
        value: "27",
        description: "Nine added this quarter",
        trend: "up"
    },
    {
        label: "Logo churn",
        value: "2.1%",
        description: "Concentrated in the free tier",
        trend: "down"
    }
];

/* ----------------------------------------------------------
   03 — Match centre
   ---------------------------------------------------------- */

export const matchStats: Stat[] = [
    { label: "Possession", value: "61%", description: "Rotterdam Noord", trend: "up" },
    { label: "Shots on target", value: "8", description: "From 14 attempts", trend: "up" },
    { label: "Pass accuracy", value: "89%", description: "412 of 463 completed", trend: "neutral" },
    { label: "Distance covered", value: "108 km", description: "Squad total", trend: "neutral" }
];

export const matchScore = {
    home: "Rotterdam Noord",
    away: "Delft United",
    homeGoals: "2",
    awayGoals: "1",
    minute: "78'",
    competition: "Eredivisie Zuid · Matchday 25"
};

export const matchScorers = [
    { time: "14'", name: "T. Sørensen", team: "home" },
    { time: "51'", name: "M. Brennan", team: "away" },
    { time: "72'", name: "K. Asare", team: "home" }
];

/* ----------------------------------------------------------
   04 — Energy usage
   ---------------------------------------------------------- */

export const energyStats: Stat[] = [
    {
        label: "This month",
        value: "184 kWh",
        description: "12% below your usual July",
        trend: "down"
    },
    {
        label: "Estimated bill",
        value: "€61.40",
        description: "Fixed tariff until March 2027",
        trend: "down"
    },
    {
        label: "Solar generated",
        value: "97 kWh",
        description: "53% of what you used",
        trend: "up"
    },
    {
        label: "Exported to grid",
        value: "34 kWh",
        description: "Credited at €0.09 / kWh",
        trend: "up"
    }
];

export const energyDays = [
    { day: "M", height: 42 },
    { day: "T", height: 58 },
    { day: "W", height: 36 },
    { day: "T", height: 71 },
    { day: "F", height: 64 },
    { day: "S", height: 88 },
    { day: "S", height: 52 }
];

/* ----------------------------------------------------------
   05 — Newsroom impact
   ---------------------------------------------------------- */

export const newsroomStats: Stat[] = [
    {
        label: "Investigations published",
        value: "34",
        description: "Across eleven countries",
        trend: "neutral"
    },
    {
        label: "Members supporting us",
        value: "41,200",
        description: "No advertising, no paywall",
        trend: "up"
    },
    {
        label: "Documents reviewed",
        value: "2.1M",
        description: "Leaked, filed and public records",
        trend: "neutral"
    }
];

export const newsroomLede =
    "We are funded entirely by readers. That is why every investigation stays free to read, and why we can spend fourteen months on a single story.";
