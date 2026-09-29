// Content shape for the /isitme-cihazi-markalari/ topic hub's brand profiles.
// Every profile is DERIVED from verified site data (src/data/{brand}/*): facts
// from the brand's own overview/intro, model families and tags from its
// models.ts, scenarios from its ideal-user.ts — nothing is invented here.
//
// Editorial rule (PRINCIPLES.md §5): profiles never rank brands and never call
// one "the best"; they describe approach, device types and fitting scenarios.
// No price field on purpose (COMPANY.md §23, QUALITY_GATES.md §4).
export interface BrandProfileFact {
  label: string;
  value: string;
}

export interface BrandProfileModel {
  name: string;
  /** Short family descriptor from the brand's own model data. */
  category: string;
  description: string;
  tags: string[];
  /** Real product photo (never a logo stand-in). */
  image: string;
}

export interface BrandProfileContent {
  id: string;
  /** Visible brand name (NuEar is shown as "Starkey NuEar"). */
  name: string;
  logo: string;
  logoAlt: string;
  /** Directly quotable definition of the brand (GEO). */
  lead: string;
  paragraphs: string[];
  facts: BrandProfileFact[];
  /** Device-type / feature chips taken from the brand's model tags. */
  types: string[];
  /** Every model family name on the brand's page. */
  families: string[];
  models: BrandProfileModel[];
  /** Who the brand's own page says it is often considered for (criteria, not a verdict). */
  scenarios: { title: string; text: string }[];
  note?: string;
  brandHref: string;
  brandLinkLabel: string;
}
