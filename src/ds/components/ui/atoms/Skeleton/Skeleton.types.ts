export type SkeletonVariant =
    | "text"
    | "rectangle"
    | "rounded"
    | "circle";

export type SkeletonAnimation =
    | "pulse"
    | "wave"
    | "none";

export interface SkeletonProps {
    /**
     * Şekil tipi.
     * @default "text"
     */
    variant?: SkeletonVariant;

    /**
     * Genişlik.
     * Örnek: "100%", "240px"
     */
    width?: string;

    /**
     * Yükseklik.
     * Örnek: "20px", "3rem"
     */
    height?: string;

    /**
     * Border radius override.
     */
    radius?: string;

    /**
     * Animasyon tipi.
     * @default "wave"
     */
    animation?: SkeletonAnimation;

    /**
     * Satır sayısı.
     * Sadece text variant için.
     * @default 1
     */
    lines?: number;

    /**
     * Son satır genişliği.
     * @default "70%"
     */
    lastLineWidth?: string;

    /**
     * İlave class.
     */
    class?: string;
}