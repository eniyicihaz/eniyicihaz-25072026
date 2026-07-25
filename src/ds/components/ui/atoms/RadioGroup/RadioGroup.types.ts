export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  direction?: "horizontal" | "vertical";
  disabled?: boolean;
  class?: string;
}