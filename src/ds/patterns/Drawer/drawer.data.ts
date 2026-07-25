/* 01 — Patient chart drawer (eniyicihaz.com) */

export const patientHistory = [
    { date: "14 Haz 2026", event: "Cihaz bakımı", detail: "Filtre değişimi, temizlik" },
    { date: "22 Mar 2026", event: "Kontrol muayenesi", detail: "Odyogram güncellendi" },
    { date: "8 Oca 2026", event: "Cihaz teslimi", detail: "Signia Pure Charge&Go 7AX" }
];

export const patientInfo = {
    name: "Hatice Yalçın",
    age: "68 yaşında",
    device: "Signia Pure Charge&Go 7AX",
    clinic: "Kadıköy Şubesi",
    initials: "HY"
};

/* 02 — Shopping cart drawer */

export const cartItems = [
    { name: "Alva Lounge Chair", detail: "Oiled oak · Sand", price: "$1,240", qty: 1, tone: "sand" },
    { name: "Marlow Floor Lamp", detail: "Brushed brass", price: "$480", qty: 1, tone: "clay" }
];

export const cartTotals = [
    { key: "Subtotal", value: "$1,720.00" },
    { key: "Delivery", value: "Free" }
];

/* 03 — Mobile navigation */

export const navSections = [
    { title: "Shop", links: ["Seating", "Lighting", "Tables", "Storage"] },
    { title: "Studio", links: ["About", "Journal", "Sustainability"] },
    { title: "Support", links: ["Delivery", "Returns", "Contact"] }
];

/* 04 — Notification feed, dark */

export const notifications = [
    {
        title: "Deploy succeeded",
        body: "fieldnote.studio · built in 41s",
        time: "2m ago",
        tone: "success"
    },
    {
        title: "New comment on REL-412",
        body: "Priya Anand replied to your question",
        time: "18m ago",
        tone: "info"
    },
    {
        title: "Payment failed",
        body: "Card ending 4242 was declined",
        time: "1h ago",
        tone: "danger"
    }
];

/* 05 — Filter drawer, bottom */

export const filterGroups = [
    { title: "Price", options: ["Under $500", "$500 – $1,000", "$1,000+"] },
    { title: "Material", options: ["Oak", "Walnut", "Steel", "Travertine"] }
];

export const filterActive = ["Oak", "$500 – $1,000"];
