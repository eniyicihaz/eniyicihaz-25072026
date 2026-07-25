export type SelectVariant =
  | "default"
  | "filled"
  | "outline"
  | "ghost";

export type SelectSize =
  | "sm"
  | "md"
  | "lg";

export interface SelectProps {
  variant?: SelectVariant;

  size?: SelectSize;

  disabled?: boolean;

  required?: boolean;

  fullWidth?: boolean;

  error?: boolean;

  success?: boolean;

  class?: string;

  name?: string;

  id?: string;

  helperText?: string;
}