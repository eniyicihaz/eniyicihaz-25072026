export interface MenuItem {
  label: string;
  value: string;
  href?: string;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
  separator?: boolean;
}

export interface MenuProps {
  items?: MenuItem[];
  orientation?: "vertical" | "horizontal";
  class?: string;
}