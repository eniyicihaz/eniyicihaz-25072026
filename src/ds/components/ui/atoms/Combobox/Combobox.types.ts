export interface ComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  options?: ComboboxOption[];
  disabled?: boolean;
  required?: boolean;
  searchable?: boolean;
  class?: string;
}