export interface IconProps {
  /**
   * Lucide Astro icon component.
   *
   * NOTE:
   * lucide-astro does not export a usable component type.
   * This will be updated after migrating to @lucide/astro.
   */
  icon: any;

  /**
   * Icon size in px.
   * @default 20
   */
  size?: number;

  /**
   * SVG stroke width.
   * @default 2
   */
  strokeWidth?: number;

  /**
   * Icon color.
   * @default "currentColor"
   */
  color?: string;

  /**
   * Hide icon from screen readers.
   * @default false
   */
  decorative?: boolean;

  /**
   * Accessible label.
   */
  title?: string;

  /**
   * Additional CSS classes.
   */
  class?: string;
}