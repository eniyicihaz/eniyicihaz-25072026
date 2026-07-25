export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "soft"
  | "gradient"
  | "glass"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "link";

export type ButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;

  fullWidth?: boolean;
  rounded?: boolean;

  loading?: boolean;
  disabled?: boolean;

  leftIcon?: any;
  rightIcon?: any;

  type?: "button" | "submit" | "reset";

  href?: string;
  target?: string;
  rel?: string;

  class?: string;

  elevated?: boolean;

  iconOnly?: boolean;
}