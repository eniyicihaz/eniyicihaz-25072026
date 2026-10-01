// Shared JSON-LD builders. Previously an empty scaffold file; filled here
// rather than inventing a new component/pattern, since the site's existing
// convention (see src/pages/iletisim.astro and 7 other pages) is a plain
// object built in page frontmatter and rendered via
// `<script type="application/ld+json" set:html={JSON.stringify(...)}>` —
// not an .astro wrapper component. This module gives that existing pattern
// one real source instead of the same object being retyped per page.
//
// `buildMedicalBusinessSchema` extends — never duplicates — the sitewide
// `Organization` node declared in src/layouts/MainLayout.astro by sharing
// the exact same `@id`; a page using this function describes the same
// single real business in more detail, it does not create a second entity.
//
// This round only wires this function into the homepage
// (src/pages/index.astro). The 8 pages that already hand-write an
// equivalent object inline (iletisim.astro, hakkimizda.astro, etc.) are
// left untouched here — migrating them to this shared builder is the
// natural next step for a future, separately-approved site-wide pass, not
// part of this homepage-scoped task.
import { company } from "../components/footer/Footer/data/company";

/** Brand/site Organization node (declared once in MainLayout). */
export const ORGANIZATION_ID = "https://www.eniyicihaz.com/#organization";
/** The real local business — its OWN @id (must not equal the Organization's), described on every page that includes it. */
export const BUSINESS_ID = "https://www.eniyicihaz.com/#business";
/** The business's canonical URL (never the URL of the page that happens to embed the node). */
export const BUSINESS_URL = "https://www.eniyicihaz.com/";
/** Service area limited to what the business has confirmed: the Darıca center, Gebze/Çayırova and Kocaeli overall.
 *  Dilovası / Tuzla / Pendik are intentionally NOT listed here (unconfirmed; see COMPANY.md review). */
/** Postal code of the Darıca center (confirmed by the business owner). Single source for every MedicalBusiness node. */
export const BUSINESS_POSTAL_CODE = "41700";
/** Real storefront photo (Darıca street frontage, 1200×630) already served as the sitewide OG image. */
export const BUSINESS_IMAGE = "https://www.eniyicihaz.com/images/og/og-default.jpg";
export const SERVICE_AREA_NAMES = ["Darıca", "Gebze", "Çayırova", "Kocaeli"];

// Real coordinates behind company.directionsHref/mapEmbedSrc — a verified
// Google Business Profile embed, not a re-geocoded guess. Same numbers
// already used inline on /iletisim and the other MedicalBusiness pages;
// centralized here so future adopters read one constant, not a retyped
// literal.
const BUSINESS_GEO = {
  latitude: 40.772815433889605,
  longitude: 29.4047968764159,
};

export interface MedicalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  "@id": string;
  name: string;
  description: string;
  url: string;
  image: string;
  telephone: string[];
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  areaServed: string[];
}

/**
 * Builds the site's real MedicalBusiness JSON-LD object. `description`
 * should be the page's own AI-quotable entity-definition sentence (e.g.
 * Hero's `contextSentence` on the homepage, `contactHero.definitionSentence`
 * on /iletisim) so visible copy and structured data never drift apart.
 * `areaServed` is limited to the confirmed hierarchy (SERVICE_AREA_NAMES); the node has its own @id and always
 * points at the business's canonical URL, never at the page that embeds it.
 */
export function buildMedicalBusinessSchema(
  pageUrl: string,
  description: string,
): MedicalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": BUSINESS_ID,
    name: company.legalName,
    description,
    url: BUSINESS_URL,
    image: BUSINESS_IMAGE,
    telephone: company.phones.map((phone) => phone.href.replace("tel:", "")),
    email: company.email,
    // Mirrors company.address's real value (kept as structured fields here
    // since CompanyInfo only stores a single display string) — update both
    // together if the address ever changes.
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fevziçakmak Mah. Dr. Zeki Acar Cad. No:77/7 Asansör 1. Kat",
      addressLocality: "Darıca",
      addressRegion: "Kocaeli",
      postalCode: BUSINESS_POSTAL_CODE,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      ...BUSINESS_GEO,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:45",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: SERVICE_AREA_NAMES,
  };
}
