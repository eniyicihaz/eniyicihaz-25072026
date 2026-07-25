export type DividerDirection =
  | "horizontal"
  | "vertical";

export type DividerVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "dashed"
  | "dotted";

export type DividerThickness =
  | "xs"
  | "sm"
  | "md"
  | "lg";

export interface DividerProps {
  direction?: DividerDirection;

  variant?: DividerVariant;

  thickness?: DividerThickness;

  label?: string;

  class?: string;
}