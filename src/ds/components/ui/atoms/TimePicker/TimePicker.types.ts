export interface TimePickerProps {
  id?: string;
  name?: string;
  value?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  class?: string;
}