export interface DailyLifeScenario {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  /** Alt text for the not-yet-produced real/custom photo (see docs/archive/DAILY_LIFE_SPECIFICATION.md §6) — no `src` until a real asset exists. */
  imageAlt: string;
}

export interface DailyLifeContent {
  eyebrow: string;
  heading: string;
  intro: string;
  scenarios: DailyLifeScenario[];
}
