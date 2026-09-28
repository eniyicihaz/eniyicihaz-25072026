export interface DeviceComparisonColumn {
  slug: string;
  name: string;
  href: string;
  /** Alt text for the not-yet-produced representative device image (see docs/DEVICE_COMPARISON_SPECIFICATION.md §6) — no `src` until a real/representative photo is supplied. */
  imageAlt: string;
  /** Representative product image (public/images/homepage/device-comparison/). Optional: a column without it falls back to the neutral ImagePlaceholder. Square (1:1). */
  image?: { src: string; width: number; height: number };
}

export interface DeviceComparisonRow {
  criterion: string;
  /** One value per column, same order as `columns`. Anything not confidently true for every model of that type reads "Modele göre değişebilir" — never an invented generalization (PRINCIPLES §5). */
  values: string[];
}

export interface DeviceComparisonContent {
  eyebrow: string;
  heading: string;
  intro: string;
  columns: DeviceComparisonColumn[];
  rows: DeviceComparisonRow[];
  closing: string;
}
