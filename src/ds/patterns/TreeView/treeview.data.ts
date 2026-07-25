import type { TreeNode } from "../../components/ui/atoms/TreeView/TreeView.types";

/* 01 — Patient records folder structure (eniyicihaz.com) */

export const patientRecords: TreeNode[] = [
    {
        id: "p1",
        label: "Hatice Yalçın",
        expanded: true,
        children: [
            { id: "p1-1", label: "Odyogram_2026-07-12.pdf" },
            { id: "p1-2", label: "Reçete_2026-06-01.pdf" },
            {
                id: "p1-3",
                label: "Cihaz kayıtları",
                expanded: true,
                children: [
                    { id: "p1-3-1", label: "Aria Pro 2 - Sol kulak.pdf" },
                    { id: "p1-3-2", label: "Aria Pro 2 - Sağ kulak.pdf" }
                ]
            }
        ]
    },
    {
        id: "p2",
        label: "Mehmet Öztürk",
        children: [
            { id: "p2-1", label: "İlk değerlendirme.pdf" }
        ]
    }
];

/* 02 — Codebase file explorer, dark, no icons */

export const codeFiles: TreeNode[] = [
    {
        id: "src",
        label: "src",
        expanded: true,
        children: [
            {
                id: "components",
                label: "components",
                expanded: true,
                children: [
                    { id: "button-tsx", label: "Button.tsx", selected: true },
                    { id: "input-tsx", label: "Input.tsx" }
                ]
            },
            { id: "utils-ts", label: "utils.ts" },
            { id: "index-ts", label: "index.ts" }
        ]
    },
    { id: "package-json", label: "package.json" },
    { id: "readme-md", label: "README.md" }
];

/* 03 — Permissions tree, one disabled branch */

export const permissionsTree: TreeNode[] = [
    {
        id: "workspace",
        label: "Workspace",
        expanded: true,
        children: [
            { id: "read", label: "Read access", selected: true },
            { id: "write", label: "Write access", selected: true },
            {
                id: "admin",
                label: "Admin access",
                disabled: true,
                expanded: true,
                children: [
                    { id: "billing", label: "Manage billing", disabled: true },
                    { id: "members", label: "Manage members", disabled: true }
                ]
            }
        ]
    }
];

/* 04 — Category navigation, no lines, collapsed branches */

export const categoryTree: TreeNode[] = [
    {
        id: "devices",
        label: "İşitme cihazları",
        children: [
            { id: "bte", label: "Kulak arkası" },
            { id: "ric", label: "Kulak içi" }
        ]
    },
    {
        id: "accessories",
        label: "Aksesuarlar",
        expanded: true,
        children: [
            { id: "batteries", label: "Piller", selected: true },
            { id: "cleaning", label: "Temizlik kitleri" }
        ]
    },
    { id: "support", label: "Destek ve garanti" }
];

/* 05 — Deployment environments, dark, deeply nested */

export const environmentTree: TreeNode[] = [
    {
        id: "prod",
        label: "production",
        expanded: true,
        children: [
            {
                id: "prod-eu",
                label: "eu-west-1",
                expanded: true,
                children: [
                    { id: "prod-eu-api", label: "api-gateway", selected: true },
                    { id: "prod-eu-db", label: "primary-db" }
                ]
            },
            { id: "prod-us", label: "us-east-1" }
        ]
    },
    { id: "staging", label: "staging" }
];
