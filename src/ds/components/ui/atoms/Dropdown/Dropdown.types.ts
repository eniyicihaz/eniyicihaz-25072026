export interface DropdownItem {
  label: string;
  value: string;
  href?: string;
  disabled?: boolean;
  divider?: boolean;
}

export interface DropdownProps {
  items?: DropdownItem[];
  triggerText?: string;
  placement?:
    | "bottom-start"
    | "bottom-end"
    | "top-start"
    | "top-end";
  open?: boolean;
  class?: string;
}