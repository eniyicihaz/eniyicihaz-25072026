export type TextareaVariant =
  | "default"
  | "filled"
  | "outline"
  | "ghost";

export type TextareaSize =
  | "sm"
  | "md"
  | "lg";

export interface TextareaProps {
  value?: string;

  placeholder?: string;

  rows?: number;

  variant?: TextareaVariant;

  size?: TextareaSize;

  disabled?: boolean;

  readonly?: boolean;

  required?: boolean;

  fullWidth?: boolean;

  error?: boolean;

  success?: boolean;

  class?: string;

  name?: string;

  id?: string;

  helperText?: string;

  maxLength?: number;
}