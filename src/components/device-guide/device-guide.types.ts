// Shared content shapes for the /isitme-cihazlari/ topic hub
// (src/data/isitme-cihazlari/*). The hub reuses the price-guide building
// blocks (GuideSection, InfoGrid, GuideTable, QaStack, LocalBlocks …) and adds
// only the two shapes that do not exist there: a device-type PROFILE (how it
// is worn and used — the price guide's DeviceTypeBlock is price-oriented) and
// the "how does it work" parts map.
//
// Content policy (COMPANY.md §23, PRINCIPLES.md §5, QUALITY_GATES.md §4):
// no price, no medical certainty. Claims stay hedged ("genellikle", "modele ve
// değerlendirmeye göre"). None of these shapes has a price field on purpose.
import type { GuideImage } from "../price-guide/price-guide.types";

export interface TypeProfile {
  id: string;
  name: string;
  /** Short expansion / alias, e.g. "Behind-the-ear". */
  alias?: string;
  /** Real, already-produced representative image — or omitted: a neutral placeholder renders and `imageNeeded` documents what to produce. */
  image?: GuideImage;
  imageNeeded?: string;
  whatIs: string;
  /** Four scannable facts shown as a definition list. */
  facts: {
    howUsed: string;
    visibility: string;
    ease: string;
    scope: string;
  };
  whoFor: string[];
  watch: string[];
  href?: string;
  linkLabel?: string;
}

export interface AnatomyPart {
  title: string;
  text: string;
  icon?: any;
}

export interface AnatomyMapContent {
  /** Real diagram, or omitted: neutral placeholder documenting `imageNeeded`. */
  image?: GuideImage;
  imageNeeded?: string;
  steps: { title: string; text: string }[];
  parts: AnatomyPart[];
}

export interface FocusColumn {
  title: string;
  items: string[];
}

/** Body of a single-topic SEO section (RIC/RITE, görünmez cihazlar, çocuklar): the H2 comes from GuideSection. */
export interface FocusBlockContent {
  image?: GuideImage;
  imageNeeded?: string;
  /** Directly quotable first answer (GEO). */
  lead: string;
  paragraphs: string[];
  columns: FocusColumn[];
  note?: string;
  links: { label: string; href: string }[];
}
