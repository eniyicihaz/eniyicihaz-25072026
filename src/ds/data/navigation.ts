export interface NavigationItem {
    title: string;
    href: string;
    icon: string;
    badge?: string;
    disabled?: boolean;
}

export interface NavigationGroup {
    id: string;
    title: string;
    icon: string;
    items: NavigationItem[];
}

export const navigation: NavigationGroup[] = [

    {
        id: "foundations",
        title: "Foundations",
        icon: "layers",
        items: [
            { title: "Colors", href: "/ds/foundations/colors", icon: "palette" },
            { title: "Typography", href: "/ds/foundations/typography", icon: "type" },
            { title: "Spacing", href: "/ds/foundations/spacing", icon: "between-horizontal-start" },
            { title: "Grid", href: "/ds/foundations/grid", icon: "grid-3x3" },
            { title: "Breakpoints", href: "/ds/foundations/breakpoints", icon: "monitor" },
            { title: "Radius", href: "/ds/foundations/radius", icon: "circle" },
            { title: "Elevation", href: "/ds/foundations/elevation", icon: "layers-3" },
            { title: "Motion", href: "/ds/foundations/motion", icon: "play" },
            { title: "Icons", href: "/ds/foundations/icons", icon: "sparkles" },
            { title: "Tokens", href: "/ds/foundations/tokens", icon: "database" }
        ]
    },

    {
    id: "atoms",
    title: "Atoms",
    icon: "atom",
    items: [
        { title: "Accordion", href: "/ds/components/accordion", icon: "chevrons-up-down" },
        { title: "Alert", href: "/ds/components/alert", icon: "triangle-alert" },
        { title: "Avatar", href: "/ds/components/avatar", icon: "user-circle" },
        { title: "Badge", href: "/ds/components/badge", icon: "badge-check" },
        { title: "Banner", href: "/ds/components/banner", icon: "flag" },
        { title: "Blockquote", href: "/ds/components/blockquote", icon: "quote" },
        { title: "Breadcrumb", href: "/ds/components/breadcrumb", icon: "navigation" },
        { title: "Button", href: "/ds/components/button", icon: "square" },
        { title: "Calendar", href: "/ds/components/calendar", icon: "calendar" },
        { title: "Card", href: "/ds/components/card", icon: "credit-card" },
        { title: "Carousel", href: "/ds/components/carousel", icon: "gallery-horizontal" },
        { title: "Checkbox", href: "/ds/components/checkbox", icon: "check-square" },
        { title: "Chip", href: "/ds/components/chip", icon: "ticket" },
        { title: "Code", href: "/ds/components/code", icon: "code-2" },
        { title: "Color Picker", href: "/ds/components/color-picker", icon: "palette" },
        { title: "Combobox", href: "/ds/components/combobox", icon: "list-filter" },
        { title: "Counter", href: "/ds/components/counter", icon: "hash" },
        { title: "Date Picker", href: "/ds/components/date-picker", icon: "calendar-days" },
        { title: "Divider", href: "/ds/components/divider", icon: "minus" },
        { title: "Drawer", href: "/ds/components/drawer", icon: "panel-right-open" },
        { title: "Dropdown", href: "/ds/components/dropdown", icon: "chevron-down" },
        { title: "Empty", href: "/ds/components/empty", icon: "inbox" },
        { title: "File Upload", href: "/ds/components/file-upload", icon: "upload" },
        { title: "Form Field", href: "/ds/components/form-field", icon: "form-input" },
        { title: "Heading", href: "/ds/components/heading", icon: "heading" },
        { title: "Icon", href: "/ds/components/icon", icon: "shapes" },
        { title: "Icon Button", href: "/ds/components/iconbutton", icon: "mouse-pointer-click" },
        { title: "Image", href: "/ds/components/image", icon: "image" },
        { title: "Input", href: "/ds/components/input", icon: "textbox" },
        { title: "Input Group", href: "/ds/components/input-group", icon: "group" },
        { title: "Kbd", href: "/ds/components/kbd", icon: "keyboard" },
        { title: "Key Value", href: "/ds/components/key-value", icon: "list-collapse" },
        { title: "Label", href: "/ds/components/label", icon: "tag" },
        { title: "Link", href: "/ds/components/link", icon: "link" },
        { title: "Menu", href: "/ds/components/menu", icon: "menu" },
        { title: "Modal", href: "/ds/components/modal", icon: "square-stack" },
        { title: "Number Input", href: "/ds/components/number-input", icon: "hash" },
        { title: "OTP Input", href: "/ds/components/otp-input", icon: "key-round" },
        { title: "Pagination", href: "/ds/components/pagination", icon: "ellipsis" },
        { title: "Password Input", href: "/ds/components/password-input", icon: "lock-keyhole" },
        { title: "Password Strength", href: "/ds/components/password-strength", icon: "shield-check" },
        { title: "Phone Input", href: "/ds/components/phone-input", icon: "phone" },
        { title: "Popover", href: "/ds/components/popover", icon: "message-square" },
        { title: "Progress", href: "/ds/components/progress", icon: "gauge" },
        { title: "Progress Circle", href: "/ds/components/progress-circle", icon: "circle-dashed" },
        { title: "Radio", href: "/ds/components/radio", icon: "circle-dot" },
        { title: "Radio Group", href: "/ds/components/radio-group", icon: "circle-dot-dashed" },
        { title: "Rating", href: "/ds/components/rating", icon: "star" },
        { title: "Search", href: "/ds/components/search", icon: "search" },
        { title: "Select", href: "/ds/components/select", icon: "chevrons-up-down" },
        { title: "Skeleton", href: "/ds/components/skeleton", icon: "layout" },
        { title: "Slider", href: "/ds/components/slider", icon: "sliders-horizontal" },
        { title: "Spinner", href: "/ds/components/spinner", icon: "loader-circle" },
        { title: "Stat", href: "/ds/components/stat", icon: "chart-column" },
        { title: "Stepper", href: "/ds/components/stepper", icon: "list-ordered" },
        { title: "Switch", href: "/ds/components/switch", icon: "toggle-left" },
        { title: "Table", href: "/ds/components/table", icon: "table" },
        { title: "Tabs", href: "/ds/components/tabs", icon: "tabs" },
        { title: "Tag", href: "/ds/components/tag", icon: "tag" },
        { title: "Text", href: "/ds/components/text", icon: "text" },
        { title: "Textarea", href: "/ds/components/textarea", icon: "file-text" },
        { title: "Time Picker", href: "/ds/components/time-picker", icon: "clock-3" },
        { title: "Timeline", href: "/ds/components/timeline", icon: "git-commit-vertical" },
        { title: "Toast", href: "/ds/components/toast", icon: "bell-ring" },
        { title: "Toggle", href: "/ds/components/toggle", icon: "toggle-right" },
        { title: "Tooltip", href: "/ds/components/tooltip", icon: "message-circle" },
        { title: "Tree View", href: "/ds/components/tree-view", icon: "folder-tree" },
        { title: "URL Input", href: "/ds/components/url-input", icon: "globe" },
        { title: "Video", href: "/ds/components/video", icon: "video" },
        { title: "Visually Hidden", href: "/ds/components/visually-hidden", icon: "eye-off" }
    ]
},

    {
        id: "molecules",
        title: "Molecules",
        icon: "component",
        items: []
    },

    {
        id: "organisms",
        title: "Organisms",
        icon: "blocks",
        items: [
            { title: "Hero", href: "/ds/components/hero", icon: "panel-top" }
        ]
    }

];