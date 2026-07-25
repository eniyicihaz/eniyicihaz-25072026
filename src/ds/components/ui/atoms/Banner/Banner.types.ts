export type BannerVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export interface BannerProps {
  variant?: BannerVariant;
  title?: string;
  bordered?: boolean;
  class?: string;
}