export type InputVariant =
  | "default"
  | "filled"
  | "outline"
  | "ghost";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export interface InputProps {
  type?:
  | "text"
  | "email"
  | "password"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color"
  | "file"
  | "hidden"
  | "image"
  | "radio"
  | "checkbox"
  | "range"
  | "reset"
  | "submit"
  | "button";

  value?: string;

  placeholder?: string;

  variant?: InputVariant;

  size?: InputSize;

  disabled?: boolean;

  readonly?: boolean;

  required?: boolean;

  fullWidth?: boolean;

  error?: boolean;

  success?: boolean;

  class?: string;

  name?: string;

  id?: string;

  leftIcon?: any;

  rightIcon?: any;

  helperText?: string;

  clearable?: boolean;
}