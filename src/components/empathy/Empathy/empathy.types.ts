export interface EmpathyLine {
  text: string;
  /** Marks the emotional-peak line (§2 Story Architecture, "duygusal zirve"). */
  emphasis?: boolean;
}

export interface EmpathyContent {
  /** sr-only — names the section for the document outline/screen readers. */
  heading: string;
  lines: [EmpathyLine, EmpathyLine, EmpathyLine, EmpathyLine];
}
