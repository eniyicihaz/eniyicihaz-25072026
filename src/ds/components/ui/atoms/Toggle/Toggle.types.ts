export interface ToggleProps {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  class?: string;
}