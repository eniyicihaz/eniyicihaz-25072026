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
import { contactServiceArea } from "../data/contact/serviceArea";

const ORGANIZATION_ID = "https://www.eniyicihaz.com/#organization";

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
  telephone: string[];
  email: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
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
 * `areaServed` reads the full, real COMPANY.md §17 hierarchy from
 * `contactServiceArea` (Darıca, Gebze, Çayırova, Dilovası, Tuzla, Pendik) —
 * structured data is not visible on-page copy, so listing the complete real
 * service area here is not "keyword stuffing"; that rule applies to natural-
 * language content, not machine-readable fields meant to enumerate exactly
 * this.
 */
export function buildMedicalBusinessSchema(
  pageUrl: string,
  description: string,
): MedicalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": ORGANIZATION_ID,
    name: company.legalName,
    description,
    url: pageUrl,
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
    areaServed: contactServiceArea.items.map((item) => item.name),
  };
}
