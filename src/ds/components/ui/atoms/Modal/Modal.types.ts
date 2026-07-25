export type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

export interface ModalProps {
  open?: boolean;
  title?: string;
  description?: string;
  size?: ModalSize;
  closeOnOverlay?: boolean;
  showCloseButton?: boolean;
  class?: string;
}