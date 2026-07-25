/* ----------------------------------------------------------
   01 — Travel booking search
   ---------------------------------------------------------- */

export const travelCabins = ["Economy", "Premium economy", "Business", "First"];
export const travelPassengers = ["1 adult", "2 adults", "2 adults, 1 child", "4 adults"];
export const travelOrigins = ["Amsterdam (AMS)", "Rotterdam (RTM)", "Brussels (BRU)"];
export const travelDestinations = ["Lisbon (LIS)", "Porto (OPO)", "Faro (FAO)"];

export const travelTrust = [
    "No change fees",
    "Price freeze for 48h",
    "24/7 human support"
];

/* ----------------------------------------------------------
   02 — Restaurant reservation
   ---------------------------------------------------------- */

export const dinerParty = [
    "2 guests", "3 guests", "4 guests", "5 guests", "6 guests", "Larger party"
];

export const dinerTimes = [
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];

export const dinerRooms = [
    "Main dining room",
    "Counter seating",
    "Terrace (weather permitting)",
    "Private room (min. 8)"
];

export const dinerSlots = ["18:30", "19:00", "20:30"];

/* ----------------------------------------------------------
   03 — Clinic appointment
   ---------------------------------------------------------- */

export const clinicSpecialties = [
    "General practice",
    "Dermatology",
    "Cardiology",
    "Physiotherapy",
    "Mental health"
];

export const clinicPractitioners = [
    "First available",
    "Dr. Amara Lindqvist",
    "Dr. Daniel Okafor",
    "Dr. Yuki Tanaka"
];

export const clinicLocations = [
    "Rotterdam Centrum",
    "Rotterdam Noord",
    "Delft",
    "Video consultation"
];

export const clinicInsurers = [
    "Zilveren Kruis",
    "VGZ",
    "CZ",
    "Menzis",
    "Paying privately"
];

export const clinicSteps = [
    { n: "1", label: "What you need", state: "current" },
    { n: "2", label: "Pick a time", state: "todo" },
    { n: "3", label: "Confirm", state: "todo" }
];

/* ----------------------------------------------------------
   04 — Developer project settings
   ---------------------------------------------------------- */

export const devRegions = [
    "eu-central-1 · Frankfurt",
    "eu-west-2 · London",
    "us-east-1 · Virginia",
    "ap-southeast-1 · Singapore"
];

export const devRuntimes = ["Node 22", "Node 20", "Bun 1.1", "Deno 2"];
export const devBranches = ["main", "develop", "release/4.0"];
export const devVisibility = ["Private", "Team only", "Public"];

export const devRows = [
    {
        label: "Production region",
        hint: "Where builds run and functions are deployed.",
        field: "region"
    },
    {
        label: "Runtime",
        hint: "Applies to new deployments only.",
        field: "runtime"
    },
    {
        label: "Production branch",
        hint: "Merges here deploy straight to production.",
        field: "branch"
    },
    {
        label: "Preview visibility",
        hint: "Who can open a preview URL without signing in.",
        field: "visibility"
    }
];

/* ----------------------------------------------------------
   05 — Luxury made-to-order
   ---------------------------------------------------------- */

export const atelierLeathers = [
    "Box calf · Noir",
    "Grained calf · Cognac",
    "Suede · Taupe",
    "Shell cordovan · Oxblood"
];

export const atelierSoles = ["Leather · Single", "Leather · Double", "Rubber · City"];
export const atelierSizes = ["40", "41", "42", "43", "44", "45"];
export const atelierWidths = ["E · Narrow", "F · Standard", "G · Wide"];
export const atelierMonogram = ["None", "Initials, blind deboss", "Initials, gold foil"];

export const atelierSummary = [
    { key: "Lead time", value: "9 weeks" },
    { key: "Fittings", value: "Two included" },
    { key: "Workshop", value: "Northampton" }
];
