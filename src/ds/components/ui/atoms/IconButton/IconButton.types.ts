export type IconButtonVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "outline"
    | "light";

export type IconButtonSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export interface IconButtonProps {
    /**
     * Lucide Astro icon component.
     * Using any until migration to @lucide/astro.
     */
    icon: any;

    label: string;

    variant?: IconButtonVariant;

    size?: IconButtonSize;

    rounded?: boolean;

    circle?: boolean;

    bordered?: boolean;

    disabled?: boolean;

    loading?: boolean;

    href?: string;

    target?: "_self" | "_blank" | "_parent" | "_top";

    rel?: string;

    type?: "button" | "submit" | "reset";

    class?: string;

    ariaLabel?: string;

    title?: string;
}