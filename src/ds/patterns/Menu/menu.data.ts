import type { MenuItem } from "../../components/ui/atoms/Menu/Menu.types";

/* 01 — Patient portal sidebar (eniyicihaz.com) */

export const portalMenu: MenuItem[] = [
    { label: "Panel", value: "dashboard", href: "#0", icon: "🏠" },
    { label: "Randevularım", value: "appointments", href: "#0", icon: "📅", active: true },
    { label: "Cihazlarım", value: "devices", href: "#0", icon: "🎧" },
    { label: "Faturalarım", value: "billing", href: "#0", icon: "🧾" },
    { label: "", value: "sep-1", separator: true },
    { label: "Çıkış yap", value: "logout", href: "#0", icon: "↩" }
];

/* 02 — Account settings menu, dark, read-only role */

export const settingsMenu: MenuItem[] = [
    { label: "Profile", value: "profile", href: "#0", icon: "👤", active: true },
    { label: "Notifications", value: "notifications", href: "#0", icon: "🔔" },
    { label: "Security", value: "security", href: "#0", icon: "🔒" },
    { label: "Billing", value: "billing", href: "#0", icon: "💳", disabled: true },
    { label: "", value: "sep-1", separator: true },
    { label: "API keys", value: "api-keys", href: "#0", icon: "🔑" }
];

/* 03 — Documentation top nav, horizontal */

export const docsMenu: MenuItem[] = [
    { label: "Guides", value: "guides", href: "#0" },
    { label: "API Reference", value: "api", href: "#0", active: true },
    { label: "Changelog", value: "changelog", href: "#0" },
    { label: "Support", value: "support", href: "#0" }
];

/* 04 — File context menu */

export const contextMenu: MenuItem[] = [
    { label: "Open", value: "open", href: "#0", icon: "📂" },
    { label: "Rename", value: "rename", href: "#0", icon: "✏️" },
    { label: "Duplicate", value: "duplicate", href: "#0", icon: "📄" },
    { label: "Share", value: "share", href: "#0", icon: "🔗" },
    { label: "", value: "sep-1", separator: true },
    { label: "Move to trash", value: "trash", href: "#0", icon: "🗑" }
];

/* 05 — Mobile bottom tab bar, horizontal */

export const tabBarMenu: MenuItem[] = [
    { label: "Home", value: "home", href: "#0", icon: "🏠", active: true },
    { label: "Search", value: "search", href: "#0", icon: "🔍" },
    { label: "Devices", value: "devices", href: "#0", icon: "🎧" },
    { label: "Profile", value: "profile", href: "#0", icon: "👤" }
];
