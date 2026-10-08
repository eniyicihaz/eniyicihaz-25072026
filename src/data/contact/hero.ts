// Hero content for the /iletisim page. Renders through the ContactHero
// component (location-forward, not product-forward).
//
// `definitionSentence` is the AI-quotable, self-contained entity
// definition (SEARCH_STRATEGY.md §8 "Definition" AEO pattern) — reused
// verbatim as the `description` field of the MedicalBusiness JSON-LD on
// this page AND on the Gebze/Çayırova/Kocaeli pages, so visible text and
// structured data never drift apart. Do not edit it casually.
//
// CTA'lar (Faz 2 P2): Bizi Arayın / Yol Tarifi Al / WhatsApp'tan Yazın —
// mobil öncelik sırası CONVERSION_SOT §5. Ayrı bir "Randevu Al" butonu yok
// (Bizi Arayın ile aynı tel: hedefine gittiği için kaldırıldı); sitede
// online randevu formu yok.
//
// Trust pill'leri: kuruluş yılı (2009) iddiası bilinçli olarak kaldırıldı —
// Darıca merkezi Ağustos 2024'te açıldı (BUSINESS_SOT). SGK bilgisi
// hero panelinde zaten var, pill olarak tekrarlanmaz.

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
  trustPills: string[];
}

export const contactHero: ContactHeroContent = {
  badge: "Darıca · Kocaeli",
  headingLines: ["Darıca'daki Avrasya İşitme", "Merkezimize Ulaşın"],
  definitionSentence:
    "Avrasya İşitme Cihazları, Darıca, Kocaeli'de bulunan SGK anlaşmalı bir işitme cihazı satış ve uygulama merkezidir.",
  paragraph:
    "Tek fiziksel merkezimiz Darıca'dadır; başka ilçede şubemiz yok. Adres, çalışma saatleri ve yol tarifi aşağıda.",
  ctaCall: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaDirections: { label: "Yol Tarifi Al", href: company.directionsHref },
  ctaWhatsapp: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustPills: [
    "Ücretsiz İşitme Testi",
    "Evde Hizmet: Kocaeli Geneli",
    "Pazar ve Resmî Tatillerde Kapalı",
  ],
};
