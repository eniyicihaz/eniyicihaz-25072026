// "Pediatrik Değerlendirmede Kullanılan Yöntemler" teaser grid for the
// /sgk/cocuklarda-sgk page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to real pediatric
// audiology assessment methods — cross-references the real
// Çocuk İşitme Testi page by name (not by link; this component is
// text-only) without duplicating its content.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const cocuklardaSgkUseCases: BrandPageTechnologyContent = {
  badge: "PEDİATRİK DEĞERLENDİRME YÖNTEMLERİ",
  heading: "Çocuklarda Kullanılan Değerlendirme Yöntemleri",
  intro: "Çocuğun yaşına uygun olarak seçilen değerlendirme yöntemleri, raporun temelini oluşturur.",
  items: [
    {
      label: "YENİDOĞAN TARAMASI",
      title: "Otoakustik Emisyon (OAE) Testi",
      description: "Yenidoğan döneminde uygulanan, hızlı ve objektif bir tarama testi.",
    },
    {
      label: "OYUN TABANLI TEST",
      title: "Play Odyometri",
      description: "Küçük çocuklarda oyun yoluyla işitme eşiklerinin belirlendiği test yöntemi.",
    },
    {
      label: "DAVRANIŞSAL GÖZLEM",
      title: "Davranışsal Gözlem Odyometrisi",
      description: "Bebeklerde sese verilen davranışsal tepkilerin gözlemlenmesiyle yapılan değerlendirme.",
    },
    {
      label: "KONUŞMA VE DİL",
      title: "Konuşma ve Dil Gelişimi Değerlendirmesi",
      description: "Çocuğun dil ve konuşma gelişiminin işitme kaybından nasıl etkilendiğinin değerlendirilmesi.",
    },
    {
      label: "OKUL ÖNCESİ TAKİP",
      title: "Okul Öncesi Dönem Değerlendirmesi",
      description: "Okula başlamadan önce işitsel ve dil gelişiminin gözden geçirilmesi.",
    },
    {
      label: "KLİNİK MUAYENE",
      title: "Pediatrik KBB Muayenesi",
      description: "Çocuğun kulak yapısının ve genel işitme sağlığının uzman hekim tarafından değerlendirilmesi.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorHoverBorder: "rgb(219 39 119 / 0.5)",
};
