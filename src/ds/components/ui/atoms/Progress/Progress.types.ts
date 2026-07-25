export type ProgressVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info";

export type ProgressSize =
    | "sm"
    | "md"
    | "lg";

export type ProgressMode =
    | "determinate"
    | "indeterminate";

export interface ProgressProps {
    /**
     * İlerleme değeri.
     * 0-100
     */
    value?: number;

    /**
     * Maksimum değer.
     * @default 100
     */
    max?: number;

    /**
     * Görünüm.
     * @default "primary"
     */
    variant?: ProgressVariant;

    /**
     * Boyut.
     * @default "md"
     */
    size?: ProgressSize;

    /**
     * Çalışma modu.
     * @default "determinate"
     */
    mode?: ProgressMode;

    /**
     * Yüzdeyi göster.
     * @default false
     */
    showValue?: boolean;

    /**
     * Başlık.
     */
    label?: string;

    /**
     * Çizgili görünüm.
     * @default false
     */
    striped?: boolean;

    /**
     * Animasyon.
     * @default false
     */
    animated?: boolean;

    /**
     * Köşe yarıçapı.
     */
    radius?: string;

    /**
     * İlave CSS class.
     */
    class?: string;
}