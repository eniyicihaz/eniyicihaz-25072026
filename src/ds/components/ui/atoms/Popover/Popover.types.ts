export type PopoverPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

export interface PopoverProps {
  open?: boolean;
  placement?: PopoverPlacement;
  triggerText?: string;
  showArrow?: boolean;
  class?: string;
}