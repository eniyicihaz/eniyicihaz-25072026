export interface SearchProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  action?: string;
  method?: "get" | "post";
  autocomplete?: "on" | "off";
  disabled?: boolean;
  required?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  class?: string;
}