export interface OTPInputProps {
  id?: string;
  name?: string;
  length?: number;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  inputMode?: "numeric" | "text";
  class?: string;
}