export interface ChooserOption {
  label: string;
  /** Preference weights per real /isitme-cihazlari/* href (higher = this answer leans more toward that type). Empty = neutral answer that pushes no type. */
  weights: Record<string, number>;
}

export interface ChooserQuestion {
  id: string;
  question: string;
  options: ChooserOption[];
}

export interface ChooserContent {
  eyebrow: string;
  heading: string;
  intro: string;
  disclaimer: string;
  questions: ChooserQuestion[];
  fallback: { label: string; sentence: string; cta: string; href: string };
  restartLabel: string;
}
