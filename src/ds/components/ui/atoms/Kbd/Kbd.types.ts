export type KbdSize =
  | "sm"
  | "md"
  | "lg";

export interface KbdProps {
  size?: KbdSize;
  variant?: "default" | "outline";
  class?: string;
}