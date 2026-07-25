// ==========================================================
// Header — Domain types
// Content contracts driving the header + mega menus. Components
// stay presentational; content lives in `header.data.ts`.
// ==========================================================

import type { IconKey } from "./icons";

/** A plain navigation link. */
export interface NavLink {
  label: string;
  href: string;
}

/** A titled column of links inside a mega menu. */
export interface MegaColumn {
  icon: IconKey;
  title: string;
  links: NavLink[];
  /** Bottom "see all" link. */
  footer: NavLink;
}

/** A single row in the support column (icon + title + description). */
export interface MegaSupportItem {
  icon: IconKey;
  title: string;
  desc: string;
}

/** The 5th column — richer support cards. */
export interface MegaSupportColumn {
  icon: IconKey;
  title: string;
  items: MegaSupportItem[];
  footer: NavLink;
}

/** The promo area (1st column, ~28%). */
export interface MegaPromo {
  title: string;
  text: string;
  cta: NavLink;
  /** Optional product image; a placeholder illustration is shown when absent. */
  image?: string;
}

/** Full mega menu payload behind a top-level nav item. */
export interface MegaMenuData {
  id: string;
  promo: MegaPromo;
  /** Three link columns. */
  columns: MegaColumn[];
  /** The fifth, support column. */
  support: MegaSupportColumn;
}

/** A top-level nav entry. Has a mega menu when `mega` is present. */
export interface NavItem {
  label: string;
  href: string;
  mega?: MegaMenuData;
}

/** Phone call-to-action. */
export interface PhoneData {
  number: string;
  label: string;
  href: string;
}

/** The complete data model consumed by `Header`. */
export interface HeaderData {
  brand: { name: string; tagline: string; href: string };
  nav: NavItem[];
  phone: PhoneData;
  cta: NavLink & { icon: IconKey };
}
