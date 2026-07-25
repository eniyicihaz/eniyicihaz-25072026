export type HeadingLevel =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type HeadingSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

export interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: "regular" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  color?: "default" | "primary" | "muted" | "success" | "warning" | "danger";
  class?: string;
}