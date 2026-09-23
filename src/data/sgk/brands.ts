// Content for the SGK pillar page's final content section — the
// Pillar Page -> Cluster Pages bridge into the real /markalar/{slug}
// brand pages.
//
// Brand identity (name/slug/logo) is NOT re-hardcoded here — it's pulled
// directly from the same data the /markalar hub itself uses
// (brands/showcase.ts for the 6 featured brands, brands/extended.ts for
// the other 12). That's every brand page that actually exists in the
// project (18 total, confirmed against src/pages/markalar/*.astro) — add
// a brand to either of those two files and it appears here automatically,
// with zero changes to this file or to SgkBrands.astro.
//
// Only the featured group gets a short one-line description (an
// SGK-page-specific editorial choice, not core brand data — see
// brands/showcase.ts's own note on why per-brand marketing copy isn't
// fabricated). The "other brands" grid is logo + name only, same as its
// /markalar treatment.

import { brandShowcase } from "../brands/showcase";
import { brandExtended } from "../brands/extended";

export interface SgkBrandCard {
  name: string;
  slug: string;
  logo: string;
  text?: string;
}

export interface SgkBrandsContent {
  badge: string;
  heading: string;
  intro: string;
  featuredLabel: string;
  otherLabel: string;
  cardLinkLabel: string;
  featuredBrands: SgkBrandCard[];
  otherBrands: SgkBrandCard[];
  notice: { label: string; text: string };
  cta: {
    heading: string;
    subtext: string;
    chips: string[];
    trustItems: string[];
    primaryLabel: string;
    secondaryLabel: string;
  };
}

// Short, generic positioning lines — not fabricated technical/marketing
// claims (see brands/showcase.ts). Keyed by slug so featuredBrands can be
// built straight from brandShowcase.brands without duplicating name/logo.
const featuredDescriptions: Record<string, string> = {
  oticon: "Global ölçekte tercih edilen, yenilikçi işitme cihazı markalarından biri.",
  phonak: "Geniş model seçenekleriyle bilinen global işitme cihazı markası.",
  signia: "Modern işitme teknolojileri sunan uluslararası marka.",
  widex: "Doğal ses deneyimi odaklı işitme cihazı çözümleri sunar.",
  resound: "Bağlantılı ve akıllı işitme cihazı çözümleriyle öne çıkar.",
  nuear: "Kaliteli ve uygun fiyatlı işitme cihazı seçenekleri sunar.",
};

export const sgkBrands: SgkBrandsContent = {
  badge: "SGK Uyumlu Markalar",
  heading: "SGK Desteği ile Tercih Edebileceğiniz İşitme Cihazı Markaları",
  intro:
    "SGK katkı payından yararlanırken tercih edebileceğiniz güncel işitme cihazı markalarını aşağıda inceleyebilirsiniz.",
  featuredLabel: "Öne Çıkan Markalar",
  otherLabel: "Diğer İşitme Cihazı Markaları",
  cardLinkLabel: "Markayı İncele",
  featuredBrands: brandShowcase.brands.map((brand) => {
    const slug = brand.href.replace(/^\/markalar\//, "");
    return {
      name: brand.name,
      slug,
      logo: brand.logo ?? "",
      text: featuredDescriptions[slug],
    };
  }),
  otherBrands: brandExtended.brands.map((brand) => ({
    name: brand.name,
    slug: brand.href.replace(/^\/markalar\//, ""),
    logo: brand.logo ?? "",
  })),
  notice: {
    label: "Bilmeniz Gerekenler",
    text: "SGK katkı payı marka bazında değişmez. Ancak işitme cihazlarının teknolojileri, özellikleri ve fiyatları farklılık gösterebilir. İşitme kaybınıza uygun marka seçimi uzun vadeli memnuniyet açısından büyük önem taşır.",
  },
  cta: {
    heading: "SGK İşitme Cihazı Desteği İçin Hemen Bilgi Alın",
    subtext:
      "SGK işitme cihazı ödemesi, katkı payı ve başvuru süreci hakkında uzman ekibimizden ücretsiz bilgi alın.",
    chips: ["SGK Anlaşmalı Merkez", "Ücretsiz Danışmanlık", "Uzman Ekip Desteği"],
    trustItems: [
      "SGK Anlaşmalı Merkez",
      "Ücretsiz İşitme Testi",
      "Kişiye Özel Danışmanlık",
      "Satış Sonrası Destek",
    ],
    primaryLabel: "Hemen Ara",
    secondaryLabel: "WhatsApp'tan Yaz",
  },
};
