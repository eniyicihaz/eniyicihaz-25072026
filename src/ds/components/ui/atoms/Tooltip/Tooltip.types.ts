export type TooltipPlacement =
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "right";

export type TooltipVariant =
    | "dark"
    | "light";

export interface TooltipProps {
    /**
     * Tooltip metni.
     */
    text: string;

    /**
     * Tooltip konumu.
     * @default "top"
     */
    placement?: TooltipPlacement;

    /**
     * Görünüm.
     * @default "dark"
     */
    variant?: TooltipVariant;

    /**
     * Oku göster.
     * @default true
     */
    arrow?: boolean;

    /**
     * Devre dışı bırak.
     * @default false
     */
    disabled?: boolean;

    /**
     * Tooltip maksimum genişliği.
     * CSS değeri kabul eder.
     * @default "240px"
     */
    maxWidth?: string;

    /**
     * Gösterme gecikmesi (ms).
     * @default 150
     */
    delay?: number;

    /**
     * İlave CSS class.
     */
    class?: string;
}