// Hero content for the /iletisim page. Renders through the new
// ContactHero component (location-forward, not product-forward — see the
// plan's §11 for why this isn't a BrandHero reuse).
//
// `definitionSentence` is the AI-quotable, self-contained entity
// definition (SEARCH_STRATEGY.md §8 "Definition" AEO pattern) — reused
// verbatim as the `description` field of the MedicalBusiness JSON-LD on
// this same page, so visible text and structured data never drift apart
// (same discipline as the FAQPage pattern used site-wide).
//
// "Randevu Al" routes to tel:, framed as "call to book" — the same
// pattern every BrandExpertSupport "Ücretsiz Randevu Al" CTA already uses
// site-wide; there is no online booking form, so this isn't a new
// convention, just this page's application of the existing one.

import { contactConfig } from "../../config";
import { company } from "../../components/footer/Footer/data/company";

export interface ContactHeroCta {
  label: string;
  href: string;
}

export interface ContactHeroContent {
  badge: string;
  headingLines: string[];
  definitionSentence: string;
  paragraph: string;
  ctaCall: ContactHeroCta;
  ctaWhatsapp: ContactHeroCta;
  ctaDirections: ContactHeroCta;
  ctaAppointment: ContactHeroCta;
  trustPills: string[];
}

export const contactHero: ContactHeroContent = {
  badge: "Darıca · Kocaeli",
  headingLines: ["Darıca'daki Avrasya İşitme", "Merkezimize Ulaşın"],
  definitionSentence:
    "Avrasya İşitme Cihazları, Darıca, Kocaeli'de bulunan SGK anlaşmalı bir işitme cihazı satış ve uygulama merkezidir.",
  paragraph:
    "Ücretsiz işitme testinden cihaz uygulamasına, teknik servisten SGK danışmanlığına kadar tüm süreçte yanınızdayız.",
  ctaCall: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaWhatsapp: { label: "WhatsApp'tan Yaz", href: contactConfig.whatsapp.href },
  ctaDirections: { label: "Yol Tarifi Al", href: company.directionsHref },
  ctaAppointment: { label: "Randevu Al", href: contactConfig.phone.href },
  trustPills: [
    "SGK Anlaşmalı İşitme Merkezi",
    "2009'dan Beri Hizmetinizdeyiz",
    "Uzman Odyometrist Desteği",
  ],
};
