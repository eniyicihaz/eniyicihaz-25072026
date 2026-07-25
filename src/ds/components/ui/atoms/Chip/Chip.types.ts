export type ChipVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "neutral"
    | "outline"
    | "soft";

export type ChipSize =
    | "xs"
    | "sm"
    | "md"
    | "lg";

export interface ChipProps {
    /**
     * Görünüm.
     * @default "primary"
     */
    variant?: ChipVariant;

    /**
     * Boyut.
     * @default "md"
     */
    size?: ChipSize;

    /**
     * Sol ikon.
     */
    leftIcon?: any;

    /**
     * Sağ ikon.
     */
    rightIcon?: any;

    /**
     * Avatar resmi.
     */
    avatar?: string;

    /**
     * Seçili durum.
     * @default false
     */
    selected?: boolean;

    /**
     * Tıklanabilir.
     * @default false
     */
    clickable?: boolean;

    /**
     * Kapatılabilir.
     * @default false
     */
    removable?: boolean;

    /**
     * Devre dışı.
     * @default false
     */
    disabled?: boolean;

    /**
     * Yuvarlak görünüm.
     * @default true
     */
    rounded?: boolean;

    /**
     * Link olarak kullanım.
     */
    href?: string;

    target?: "_self" | "_blank" | "_parent" | "_top";

    rel?: string;

    class?: string;
}