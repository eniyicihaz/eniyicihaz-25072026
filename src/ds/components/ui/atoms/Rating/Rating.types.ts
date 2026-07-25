export interface RatingProps {
  value?: number;
  max?: number;
  readonly?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  class?: string;
}