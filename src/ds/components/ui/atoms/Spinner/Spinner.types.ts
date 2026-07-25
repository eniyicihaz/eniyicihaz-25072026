export type SpinnerSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type SpinnerVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "light";

export interface SpinnerProps {
  size?: SpinnerSize;

  variant?: SpinnerVariant;

  label?: string;

  class?: string;
}