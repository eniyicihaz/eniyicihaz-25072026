/* 01 — Hearing aid feature grid (eniyicihaz.com) */

export const deviceFeatures = [
    { icon: "Ear", title: "Doğal ses kalitesi", body: "Konuşmayı gürültüden ayıran çift işlemci." },
    { icon: "Bluetooth", title: "Bluetooth bağlantı", body: "Telefonunuza doğrudan bağlanır." },
    { icon: "BatteryFull", title: "36 saat pil ömrü", body: "Bir gecelik şarjla tam gün kullanım." },
    { icon: "ShieldCheck", title: "3 yıl garanti", body: "Ücretsiz bakım ve ayar dahil." }
];

/* 02 — Weather / status glyphs, dashboard */

export const weatherDays = [
    { icon: "Sun", day: "Mon", temp: "24°" },
    { icon: "CloudRain", day: "Tue", temp: "18°" },
    { icon: "Cloud", day: "Wed", temp: "20°" },
    { icon: "Wind", day: "Thu", temp: "19°" },
    { icon: "Sun", day: "Fri", temp: "26°" }
];

export const systemStatus = [
    { icon: "CheckCircle2", label: "API", tone: "success" },
    { icon: "AlertTriangle", label: "Webhooks", tone: "warning" },
    { icon: "XCircle", label: "Legacy export", tone: "danger" },
    { icon: "Info", label: "Maintenance window", tone: "info" }
];

/* 03 — Toolbar, dark editor */

export const toolbarGroups = [
    { icons: ["Search", "Bell", "Settings"] },
    { icons: ["Copy", "Share2", "Download"] },
    { icons: ["Trash2"] }
];

export const editorFiles = [
    { icon: "Figma", name: "logo-explorations.fig" },
    { icon: "Github", name: "relay-cli" },
    { icon: "Slack", name: "#platform-oncall" }
];

/* 04 — Delivery tracking steps */

export const deliverySteps = [
    { icon: "PackageCheck", label: "Order confirmed", done: true },
    { icon: "Truck", label: "Left the depot", done: true },
    { icon: "MapPin", label: "Out for delivery", done: false },
    { icon: "Home", label: "Delivered", done: false }
];

export const deliveryContact = [
    { icon: "Phone", label: "+31 6 1234 5678" },
    { icon: "Mail", label: "support@fieldnote.studio" }
];

/* 05 — Music player controls */

export const nowPlaying = {
    title: "Nocturne in C minor",
    artist: "Yuki Tanaka"
};

export const playerControls = ["SkipForward", "Play", "Heart"];

export const playerMeta = [
    { icon: "Volume2", label: "72%" },
    { icon: "Wifi", label: "Connected" },
    { icon: "Music", label: "Focus playlist" }
];
