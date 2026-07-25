export interface CounterProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  id?: string;
  class?: string;
}