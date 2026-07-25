export interface StatProps {
  label: string;
  value: string | number;
  description?: string;
  icon?: string;
  trend?: "up" | "down" | "neutral";
  class?: string;
}