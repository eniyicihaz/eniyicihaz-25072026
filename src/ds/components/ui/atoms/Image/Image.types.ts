export type ImageFit =
  | "cover"
  | "contain"
  | "fill"
  | "none"
  | "scale-down";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fit?: ImageFit;
  rounded?: boolean;
  caption?: string;
  class?: string;
}