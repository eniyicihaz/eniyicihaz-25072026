export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "danger";

export type AlertSize =
  | "sm"
  | "md"
  | "lg";

export type AlertRounded =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "full";

export interface AlertProps {
  /**
   * Visual variant.
   */
  variant?: AlertVariant;

  /**
   * Alert title.
   */
  title?: string;

  /**
   * Optional icon.
   */
  icon?: string;

  /**
   * Shows leading icon.
   */
  showIcon?: boolean;

  /**
   * Displays dismiss button.
   */
  dismissible?: boolean;

  /**
   * Alert size.
   */
  size?: AlertSize;

  /**
   * Border radius.
   */
  rounded?: AlertRounded;

  /**
   * Adds shadow.
   */
  shadow?: boolean;

  /**
   * Shows border.
   */
  bordered?: boolean;

  /**
   * Full width alert.
   */
  fullWidth?: boolean;

  /**
   * Additional CSS classes.
   */
  class?: string;
}