// "Kulak İçi Cihaz Türleri" (ITE / ITC / CIC / IIC) section for the
// /isitme-cihazlari/kulak-ici-ite page. Renders through the shared
// BrandPageTechnology component (card grid) — the BTE master page uses
// this same component for a "Kullanım Alanları" teaser grid, but that
// section is BTE-specific everyday-scenario content, not requested for
// ITE (see brief); this slot is repurposed instead for the one topic
// that's genuinely central to ITE and has no BTE counterpart: its four
// real, industry-standard size sub-types, size-ordered largest to
// smallest.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const kulakIciDeviceTypes: BrandPageTechnologyContent = {
  badge: "KULAK İÇİ CİHAZ TÜRLERİ",
  heading: "ITE, ITC, CIC, IIC: Kulak İçi Cihaz Türleri Arasındaki Farklar",
  intro: "Kulak içi kategorisi tek bir ürün değil, boyuta ve konuma göre ayrılan dört alt tipten oluşan bir ailedir.",
  items: [
    {
      label: "EN BÜYÜK ALT TİP",
      title: "ITE (Tam Kabuk)",
      description: "Kulak kepçesinin iç bölümünü (konka) dolduran en büyük kulak içi tiptir; daha büyük pil ve isteğe bağlı fiziksel kumandalar barındırabilir.",
    },
    {
      label: "ORTA BOY",
      title: "ITC (Kulak Kanalı İçi)",
      description: "Kulak kanalına ve kısmen konka bölgesine yerleşir; ITE'ye göre daha az görünür, orta boy bir seçenektir.",
    },
    {
      label: "KÜÇÜK VE DİSKRET",
      title: "CIC (Tamamen Kanal İçi)",
      description: "Neredeyse tamamen kulak kanalı içinde kalır; çıkarma ipi veya sapıyla birlikte gelir, oldukça az fark edilir.",
    },
    {
      label: "EN KÜÇÜK / EN DERİN",
      title: "IIC (Görünmez Kanal İçi)",
      description: "Kulak zarına en yakın noktaya, kulak kanalının derinlerine yerleşir; dışarıdan neredeyse hiç görünmez, ailenin en küçük alt tipidir.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorHoverBorder: "rgb(124 58 237 / 0.5)",
};
