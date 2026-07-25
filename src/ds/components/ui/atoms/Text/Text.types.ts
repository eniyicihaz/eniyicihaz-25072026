export type TextVariant =
  | "body"
  | "body-sm"
  | "caption"
  | "overline"
  | "lead"
  | "muted";

export type TextWeight =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type TextAlign =
  | "left"
  | "center"
  | "right"
  | "justify";

export interface TextProps {
  as?: keyof HTMLElementTagNameMap;
  variant?: TextVariant;
  weight?: TextWeight;
  align?: TextAlign;
  truncate?: boolean;
  class?: string;
}