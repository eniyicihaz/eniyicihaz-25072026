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
  /** Optional small logo shown before the label (only Markalar's featured
   * column sets this today — every other link renders exactly as before). */
  logo?: string;
}

/** A titled column of links inside a mega menu. */
export interface MegaColumn {
  icon: IconKey;
  title: string;
  /** Optional one-line summary shown under the title. Only Hizmetlerimiz
   * sets this today — every other menu's columns render exactly as
   * before when it's omitted. */
  description?: string;
  links: NavLink[];
  /** Bottom "see all" link. */
  footer: NavLink;
}

/** A single row in the support column (icon + title + description). */
export interface MegaSupportItem {
  icon: IconKey;
  title: string;
  desc: string;
  /** Optional destination — items without one render as inert "#" rows (unchanged legacy behavior). */
  href?: string;
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
  /** Small eyebrow label above the title. Only Hizmetlerimiz sets this —
   * when present it also switches the panel to the light CSS/SVG
   * illustration (rings + icon) instead of the plain Ear-glyph fallback,
   * without touching menus that only set `image`. */
  badge?: string;
  /** Short checklist under the CTA (2x2 grid). Optional, additive. */
  trustItems?: string[];
  /** Small floating badge card overlaid on the illustration's corner. */
  floatingBadge?: string;
  /** Small pill tags rendered under the CTA (dark-panel menus — İşitme
   * Cihazları). Independent of `trustItems` (which uses a checklist
   * register); these are plain, real category-name chips. */
  tags?: string[];
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
