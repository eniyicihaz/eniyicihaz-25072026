// Shared content shapes for the /isitme-cihazi-fiyatlari/ topic hub
// (src/data/isitme-cihazi-fiyatlari/*). Every price-guide component is
// data-driven from these types — no copy lives inside a component.
//
// Content policy (COMPANY.md §23, PRINCIPLES.md §5, QUALITY_GATES.md §4):
// this site never publishes, estimates or derives a price. None of these
// shapes has a price/amount field on purpose — a price would have to be
// added as a deliberate, separate policy decision, not slipped in here.

export interface GuideLink {
  label: string;
  href: string;
}

/** Qualitative influence of a factor on the final price — never a number. */
export type GuideImpact = "yüksek" | "orta" | "düşük" | "değişken";

export interface GuideCard {
  icon?: any;
  title: string;
  text: string;
  /** Small label above the title (e.g. "Cihaz tipi"). */
  tag?: string;
  impact?: GuideImpact;
  bullets?: string[];
  href?: string;
  linkLabel?: string;
}

export interface GuideSectionMeta {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: string;
}

export interface GuideImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GuideTableRow {
  label: string;
  /** Optional: turns the row header into a link (e.g. a brand row linking to its brand page). */
  href?: string;
  cells: string[];
}

export interface GuideTableContent extends GuideSectionMeta {
  caption: string;
  /** Header of the first (criterion) column, then one header per data column. */
  criterionLabel: string;
  columns: { name: string; href?: string; /** Only with `mobile="stack"`: hide this column's cell in the stacked card (e.g. a redundant "Detail" link column). */ stackHidden?: boolean }[];
  rows: GuideTableRow[];
  note?: string;
  links?: GuideLink[];
}

export interface DeviceTypeBlock {
  id: string;
  name: string;
  alias?: string;
  /** Real, already-produced representative image — or omitted, in which case a neutral placeholder renders and `imageNeeded` documents what to produce. */
  image?: GuideImage;
  imageNeeded?: string;
  whatIs: string;
  whoFor: string[];
  highlights: string[];
  priceFactors: string[];
  href: string;
  linkLabel: string;
}

export interface QaItem {
  id: string;
  question: string;
  /** Short, directly quotable first answer (GEO) — then optional depth below it. */
  answer: string;
  more?: string[];
  links?: GuideLink[];
}

export type LocalVariant = "center" | "steps" | "hours" | "channels";

export interface LocalBlock {
  id: string;
  variant: LocalVariant;
  eyebrow: string;
  heading: string;
  lead: string;
  paragraphs: string[];
  /** `steps` / `channels` variants: an ordered/unordered list with a title each. */
  items?: { title: string; text: string }[];
  /** `center` variant: real facts (address etc.) — sourced from company.ts, never typed here. */
  photo?: GuideImage;
  /** Opt-in wide layout for the `hours` variant: text left, hours card right (no empty right half). Omitted = unchanged single-column layout. */
  layout?: "split";
  links: GuideLink[];
}
