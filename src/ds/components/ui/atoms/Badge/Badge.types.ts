export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps {
  variant?: BadgeVariant;

  size?: BadgeSize;

  rounded?: boolean;

  outlined?: boolean;

  removable?: boolean;

  class?: string;
}