import type { TimelineItem } from "../../components/ui/atoms/Timeline/Timeline.types";

/* ----------------------------------------------------------
   01 — Hearing care pathway
   ---------------------------------------------------------- */

export const hearingPathway: TimelineItem[] = [
    {
        id: "screening",
        title: "Ücretsiz işitme taraması",
        date: "Adım 1 · 20 dakika",
        description:
            "Odyometri kabininde saf ses ve konuşma testi. Sonucunuzu aynı gün odyogram olarak alırsınız.",
        completed: true
    },
    {
        id: "consult",
        title: "Odyolog değerlendirmesi",
        date: "Adım 2 · 30 dakika",
        description:
            "İşitme kaybınızın derecesi, günlük yaşam ihtiyaçlarınız ve uygun cihaz seçenekleri birlikte konuşulur.",
        completed: true
    },
    {
        id: "trial",
        title: "Cihaz denemesi",
        date: "Adım 3 · 7 gün ücretsiz",
        description:
            "Seçtiğiniz cihazı evde, işte ve kalabalık ortamlarda bir hafta boyunca denersiniz.",
        completed: true
    },
    {
        id: "fitting",
        title: "Kişiye özel ayar",
        date: "Adım 4 · 45 dakika",
        description:
            "Cihaz odyogramınıza göre programlanır, gerçek kulak ölçümüyle doğrulanır.",
        completed: false
    },
    {
        id: "followup",
        title: "Takip ve bakım",
        date: "Sürekli",
        description:
            "İlk yıl üç kontrol, ömür boyu ücretsiz temizlik ve yazılım güncellemeleri.",
        completed: false
    }
];

export const hearingFacts = [
    { key: "SGK katkısı", value: "Karşılanır" },
    { key: "Deneme", value: "7 gün ücretsiz" },
    { key: "Garanti", value: "3 yıl" }
];

/* ----------------------------------------------------------
   02 — Company history
   ---------------------------------------------------------- */

export const companyHistory: TimelineItem[] = [
    {
        id: "founded",
        title: "Two people and a borrowed kiln",
        date: "1998",
        description:
            "Started in a workshop behind Wijnhaven, making one chair at a time for people who walked past.",
        completed: true
    },
    {
        id: "shop",
        title: "The first shop opens",
        date: "2004",
        description:
            "Forty square metres on Nieuwe Binnenweg. We still make everything within ten kilometres of it.",
        completed: true
    },
    {
        id: "workshop",
        title: "Moved to the old grain store",
        date: "2011",
        description:
            "Six times the space, twelve makers, and the first pieces we shipped outside the Netherlands.",
        completed: true
    },
    {
        id: "today",
        title: "Thirty-one people, one workshop",
        date: "Today",
        description:
            "We have turned down every offer to move production abroad. It is the whole point.",
        completed: true
    }
];

/* ----------------------------------------------------------
   03 — Shipment tracking
   ---------------------------------------------------------- */

export const shipmentEvents: TimelineItem[] = [
    {
        id: "collected",
        title: "Collected from sender",
        date: "18 Jul · 16:40 · Rotterdam",
        description: "Handed over at the Wijnhaven depot.",
        completed: true
    },
    {
        id: "hub",
        title: "Processed at sorting hub",
        date: "19 Jul · 02:15 · Utrecht",
        description: "Sorted for international line-haul.",
        completed: true
    },
    {
        id: "customs",
        title: "Cleared customs",
        date: "20 Jul · 08:30 · Köln",
        description: "No duties payable on this shipment.",
        completed: true
    },
    {
        id: "delivery",
        title: "Out for delivery",
        date: "Today · 07:15 · Berlin",
        description: "With courier on route BE-4471.",
        completed: false
    },
    {
        id: "delivered",
        title: "Delivered",
        date: "Expected by 18:00",
        completed: false
    }
];

export const shipmentMeta = [
    { key: "Tracking", value: "MR 8841 2210 04" },
    { key: "Service", value: "Express · Signed" },
    { key: "Weight", value: "18.4 kg" }
];

/* ----------------------------------------------------------
   04 — Course syllabus
   ---------------------------------------------------------- */

export const courseModules: TimelineItem[] = [
    {
        id: "m1",
        title: "Foundations of type",
        date: "Week 1–2 · 6 lessons",
        description:
            "Anatomy, classification and why measuring in ems stops being abstract once you set a paragraph.",
        completed: true
    },
    {
        id: "m2",
        title: "Rhythm and the vertical grid",
        date: "Week 3–4 · 8 lessons",
        description:
            "Baseline grids, modular scales, and the arithmetic behind spacing that feels intentional.",
        completed: true
    },
    {
        id: "m3",
        title: "Typesetting for screens",
        date: "Week 5–6 · 7 lessons",
        description:
            "Measure, hyphenation, optical sizes and how the same face behaves at 13px and 96px.",
        completed: true
    },
    {
        id: "m4",
        title: "Building a type system",
        date: "Week 7–8 · 9 lessons",
        description:
            "Tokens, fluid clamps and documenting decisions so a team can hold the line without you.",
        completed: false
    },
    {
        id: "m5",
        title: "Final project",
        date: "Week 9–10 · Reviewed live",
        description:
            "Set a full publication. Critiqued in a ninety-minute session with the whole cohort.",
        completed: false
    }
];

export const courseMeta = {
    title: "Typography for Interface Designers",
    kicker: "Cohort 12 · Starts 8 September",
    lede:
        "Ten weeks, thirty-nine lessons and one long project. Taught live on Tuesdays, recorded for everyone who cannot make it.",
    progressLabel: "3 of 5 modules complete",
    progressNote: "21 of 39 lessons watched"
};

/* ----------------------------------------------------------
   05 — Application progress
   ---------------------------------------------------------- */

export const applicationStages: TimelineItem[] = [
    {
        id: "submitted",
        title: "Application received",
        date: "4 July",
        description: "We confirmed receipt by email the same afternoon.",
        completed: true
    },
    {
        id: "review",
        title: "Portfolio review",
        date: "9 July",
        description: "Read by two designers without your name attached.",
        completed: true
    },
    {
        id: "call",
        title: "Intro call with Yuki",
        date: "16 July · 45 min",
        description: "How you work, what you want next, and anything you want to ask us.",
        completed: true
    },
    {
        id: "exercise",
        title: "Paid design exercise",
        date: "Scheduled 24 July",
        description: "Four hours, paid at your day rate, on a real problem from our backlog.",
        completed: false
    },
    {
        id: "decision",
        title: "Decision",
        date: "By 1 August",
        description: "You hear back either way, with written feedback.",
        completed: false
    }
];

export const applicationRole = {
    title: "Senior Product Designer",
    team: "Design · Rotterdam or remote",
    stage: "Stage 3 of 5"
};
