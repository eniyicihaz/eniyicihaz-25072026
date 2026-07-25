/* 01 — Clinic kiosk check-in (eniyicihaz.com) */

export const kioskSteps = [
    { label: "T.C. kimlik numaranızı girin", keys: ["1", "2", "3", "…"] },
    { label: "Onaylamak için", keys: ["Enter ↵"] },
    { label: "Baştan başlamak için", keys: ["C"] }
];

/* 02 — Command palette shortcuts */

export const paletteShortcuts = [
    { action: "Open command palette", keys: ["⌘", "K"] },
    { action: "Go to file", keys: ["⌘", "P"] },
    { action: "Toggle sidebar", keys: ["⌘", "B"] },
    { action: "Close panel", keys: ["Esc"] }
];

/* 03 — Keyboard shortcuts reference, dark app */

export const shortcutGroups = [
    {
        title: "Navigation",
        rows: [
            { action: "Next tab", keys: ["Ctrl", "Tab"] },
            { action: "Previous tab", keys: ["Ctrl", "Shift", "Tab"] },
            { action: "Jump to line", keys: ["Ctrl", "G"] }
        ]
    },
    {
        title: "Editing",
        rows: [
            { action: "Duplicate line", keys: ["Ctrl", "D"] },
            { action: "Comment line", keys: ["Ctrl", "/"] },
            { action: "Format document", keys: ["Shift", "Alt", "F"] }
        ]
    }
];

/* 04 — Documentation code sample with inline shortcuts */

export const docsSteps = [
    { text: "Open the terminal with", keys: ["Ctrl", "`"] },
    { text: "Run the dev server, then reload with", keys: ["⌘", "R"] },
    { text: "Save and rebuild automatically with", keys: ["⌘", "S"] }
];

/* 05 — Game controls reference */

export const gameControls = [
    { action: "Move", keys: ["W", "A", "S", "D"] },
    { action: "Jump", keys: ["Space"] },
    { action: "Sprint", keys: ["Shift"] },
    { action: "Interact", keys: ["E"] },
    { action: "Inventory", keys: ["Tab"] },
    { action: "Pause", keys: ["Esc"] }
];
