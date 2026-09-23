// "İlgili İçerikler" internal-linking section for the /degerlendirme/
// cocuk-isitme-testi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Ücretsiz
// İşitme Testi, Odyometri, Timpanometri and Tinnitus Değerlendirme pages
// (natural siblings this page builds on) plus the real Çocuklara Özel
// Cihazlar devicesMega page (a natural next step if a device is
// recommended) — all five other "Değerlendirme" siblings built so far
// are now real (this section keeps five links total, so the earliest
// three siblings plus Tinnitus Değerlendirme are included here, while
// Çocuklara Özel Cihazlar covers the devicesMega cross-link).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cocukIsitmeTestiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Ücretsiz işitme testi süreci ve randevu hakkında detaylı bilgi edinin.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Odyometri",
      description: "Odyometrinin nasıl çalıştığını ve neler ölçtüğünü daha yakından tanıyın.",
      href: "/degerlendirme/odyometri",
    },
    {
      label: "Timpanometri",
      description: "Orta kulak değerlendirmesi hakkında detaylı bilgi edinin.",
      href: "/degerlendirme/timpanometri",
    },
    {
      label: "Tinnitus Değerlendirme",
      description: "Kulak çınlaması değerlendirmesi hakkında detaylı bilgi edinin.",
      href: "/degerlendirme/tinnitus-degerlendirme",
    },
    {
      label: "Çocuklara Özel Cihazlar",
      description: "Çocuk kullanıcılar için geliştirilmiş işitme cihazı modellerini keşfedin.",
      href: "/isitme-cihazlari/cocuklara-ozel",
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
