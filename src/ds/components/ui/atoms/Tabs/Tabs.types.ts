export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  fullWidth?: boolean;
  centered?: boolean;
  class?: string;
}