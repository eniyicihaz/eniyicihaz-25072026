export interface LabelProps {
  /**
   * Shows required indicator (*).
   * @default false
   */
  required?: boolean;

  /**
   * Shows optional text.
   * Ignored when required is true.
   * @default false
   */
  optional?: boolean;

  /**
   * Disabled appearance.
   * @default false
   */
  disabled?: boolean;

  /**
   * Helper text displayed below the label.
   */
  helper?: string;

  /**
   * Associated form control id.
   */
  for?: string;

  /**
   * Additional CSS classes.
   */
  class?: string;
}