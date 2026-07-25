// ==========================================================
// Footer — Domain types (data contracts)
// Every footer component is presentational; content lives in
// the modular files under `data/`. These are the shared shapes.
// ==========================================================

/** A plain link. */
export interface LinkItem {
  label: string;
  href: string;
}

/** A phone number. */
export interface PhoneEntry {
  label?: string;
  number: string;
  href: string;
}

/** A working-hours row. */
export interface HoursEntry {
  days: string;
  time: string;
}

/** Company / contact information. */
export interface CompanyInfo {
  brand: string;
  legalName: string;
  tagline: string;
  /** Short introduction used in the footer brand column. */
  about: string;
  address: string;
  directionsHref: string;
  phones: PhoneEntry[];
  email: string;
  hours: HoursEntry[];
  sgkLabel: string;
}

/** A hearing-aid brand. */
export interface BrandItem {
  name: string;
  href: string;
}

/** A titled column of links (rendered dynamically). */
export interface LinkColumn {
  title: string;
  links: LinkItem[];
}

/** Section titles that belong to no single content list. */
export interface FooterLabels {
  contactTitle: string;
  brandsTitle: string;
  socialLabel: string;
}

/** Legal / bottom-bar content. */
export interface LegalContent {
  copyright: string;
  links: LinkItem[];
}

/** A social platform link. */
export interface SocialItem {
  platform: string;
  iconKey: string;
  href: string;
  label: string;
}

/** A map marker (full model — reusable for branches, services, events). */
export interface MapMarker {
  id: string;
  province: string;
  label: string;
  tooltip?: string;
  iconKey?: string;
  variant?: string;
  href?: string;
  active?: boolean;
  coordinates: { x: number; y: number };
}

/** Map data passed to TurkeyMap. */
export interface MapContent {
  highlightedProvinces: string[];
  selectedProvince?: string;
  markers: MapMarker[];
}
