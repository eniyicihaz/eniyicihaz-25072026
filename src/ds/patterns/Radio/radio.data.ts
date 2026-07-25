/* ----------------------------------------------------------
   01 — Checkout delivery
   ---------------------------------------------------------- */

export const deliveryOptions = [
    {
        label: "Standard",
        eta: "Tue 28 – Thu 30 July",
        note: "Free on orders over $500",
        price: "Free",
        on: false
    },
    {
        label: "Express",
        eta: "Mon 27 July",
        note: "Ordered before 14:00 today",
        price: "$18",
        on: true
    },
    {
        label: "White glove",
        eta: "Booked by appointment",
        note: "Delivered, assembled and packaging removed",
        price: "$95",
        on: false
    },
    {
        label: "Collect in store",
        eta: "Ready in 2 hours",
        note: "Wijnhaven 61, Rotterdam",
        price: "Free",
        on: false
    }
];

/* ----------------------------------------------------------
   02 — Donation
   ---------------------------------------------------------- */

export const donationAmounts = [
    { value: "€10", note: "Two hot meals", on: false },
    { value: "€25", note: "A week of clean water", on: true },
    { value: "€60", note: "A month of schooling", on: false },
    { value: "Other", note: "Choose your own", on: false }
];

export const donationFrequency = [
    { label: "Give once", on: false },
    { label: "Give monthly", on: true }
];

export const donationImpact = [
    { value: "94p", label: "of every pound reaches the field" },
    { value: "31", label: "countries we work in" },
    { value: "1978", label: "operating since" }
];

/* ----------------------------------------------------------
   03 — Survey
   ---------------------------------------------------------- */

export const surveyScale = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const surveyQuestions = [
    {
        n: "01",
        prompt: "How disappointed would you be if you could no longer use Relay?",
        options: [
            "Very disappointed",
            "Somewhat disappointed",
            "Not disappointed",
            "I no longer use it"
        ],
        selected: 0
    },
    {
        n: "02",
        prompt: "What type of work do you mainly use it for?",
        options: [
            "Production applications",
            "Internal tools",
            "Client projects",
            "Personal side projects"
        ],
        selected: 1
    }
];

/* ----------------------------------------------------------
   04 — Subscription plan
   ---------------------------------------------------------- */

export const streamPlans = [
    {
        name: "Standard with ads",
        price: "€5.99",
        quality: "1080p · 2 devices",
        perks: ["Ad breaks roughly every 20 min", "No downloads"],
        on: false,
        badge: ""
    },
    {
        name: "Standard",
        price: "€10.99",
        quality: "1080p · 2 devices",
        perks: ["No ads", "Downloads on 2 devices"],
        on: true,
        badge: "Most chosen"
    },
    {
        name: "Premium",
        price: "€15.99",
        quality: "4K HDR · 4 devices",
        perks: ["Spatial audio", "Downloads on 6 devices"],
        on: false,
        badge: ""
    }
];

/* ----------------------------------------------------------
   05 — Seat class
   ---------------------------------------------------------- */

export const cabinClasses = [
    {
        name: "Economy",
        price: "€89",
        detail: "Standard seat · 1 cabin bag",
        pitch: "76 cm pitch",
        on: false
    },
    {
        name: "Premium",
        price: "€189",
        detail: "Extra legroom · 1 checked bag",
        pitch: "96 cm pitch",
        on: true
    },
    {
        name: "Business",
        price: "€420",
        detail: "Lie-flat suite · 2 checked bags",
        pitch: "198 cm bed",
        on: false
    }
];

export const cabinExtras = [
    { key: "Fare", value: "Flexible" },
    { key: "Changes", value: "Free once" },
    { key: "Miles", value: "2,400" }
];
