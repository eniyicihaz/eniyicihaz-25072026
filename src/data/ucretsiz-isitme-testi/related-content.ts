// "İlgili İçerikler" internal-linking section for the /degerlendirme/
// ucretsiz-isitme-testi page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links to the real
// Odyometri, Timpanometri and Çocuk İşitme Testi pages, the real
// Tinnitus (Kulak Çınlaması) Çözümleri page and the real SGK pillar
// page — all four other "Değerlendirme" siblings built so far are now
// real (this section keeps five links total, so SGK is included here
// while Çocuk İşitme Testi is added in place of Tinnitus Değerlendirme,
// which is not yet built).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ucretsizIsitmeTestiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
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
      label: "Çocuk İşitme Testi",
      description: "Çocuklar için işitme testi sürecini yakından tanıyın.",
      href: "#",
    },
    {
      label: "Tinnitus (Kulak Çınlaması) Çözümleri",
      description: "Kulak çınlaması şikayetiniz varsa değerlendirilebilecek çözümleri keşfedin.",
      href: "/teknolojiler/tinnitus-cozumleri",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
