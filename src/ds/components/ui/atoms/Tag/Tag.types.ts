export type TagVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type TagSize = "sm" | "md" | "lg";

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
  removable?: boolean;
  disabled?: boolean;
  class?: string;
}