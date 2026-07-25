export type StepperOrientation = "horizontal" | "vertical";

export interface StepperStep {
  label: string;
  description?: string;
  completed?: boolean;
  active?: boolean;
  disabled?: boolean;
}

export interface StepperProps {
  steps: StepperStep[];
  orientation?: StepperOrientation;
  class?: string;
}