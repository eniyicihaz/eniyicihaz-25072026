export interface AccordionItem {
  /**
   * Unique item identifier.
   * Used for accessibility and slot names.
   */
  id: string;

  /**
   * Accordion header text.
   */
  title: string;

  /**
   * Optional subtitle displayed below the title.
   */
  subtitle?: string;

  /**
   * Accordion body content.
   * Ignored when a named slot with the same id exists.
   */
  content?: string;

  /**
   * Item starts expanded.
   */
  open?: boolean;

  /**
   * Prevents the item from being expanded.
   */
  disabled?: boolean;

  /**
   * Optional leading icon.
   */
  icon?: string;

  /**
   * Optional badge.
   */
  badge?: string;

  /**
   * Additional CSS classes.
   */
  class?: string;
}

export interface AccordionProps {
  /**
   * Accordion items.
   */
  items?: AccordionItem[];

  /**
   * Allow multiple items to remain open.
   */
  multiple?: boolean;

  /**
   * Whether the last open item can be collapsed.
   */
  collapsible?: boolean;

  /**
   * Displays the outer border.
   */
  bordered?: boolean;

  /**
   * Removes outer border and radius.
   */
  flush?: boolean;

  /**
   * Component size.
   */
  size?: "sm" | "md" | "lg";

  /**
   * Visual style.
   */
  variant?: "default" | "filled" | "outlined" | "ghost";

  /**
   * Border radius.
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * Enables component shadow.
   */
  shadow?: boolean;

  /**
   * Shows dividers between accordion items.
   */
  divider?: boolean;

  /**
   * Expand / collapse animation.
   */
  animation?: "none" | "fade" | "slide" | "scale";

  /**
   * Icon position.
   */
  iconPosition?: "left" | "right";

  /**
   * Additional CSS classes.
   */
  class?: string;
}