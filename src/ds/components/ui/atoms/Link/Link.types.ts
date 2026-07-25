export type LinkVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface LinkProps {
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  variant?: LinkVariant;
  underline?: boolean;
  external?: boolean;
  disabled?: boolean;
  class?: string;
}