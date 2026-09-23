// "İlgili İçerikler" internal-linking section for the /degerlendirme/
// timpanometri page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Ücretsiz
// İşitme Testi, Odyometri and Çocuk İşitme Testi pages (natural
// siblings this page builds on) plus the real Tinnitus (Kulak Çınlaması)
// Çözümleri and SGK pillar pages — all four other "Değerlendirme"
// siblings built so far are now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const timpanometriRelatedContent: BrandPageRelatedContentContent = {
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
      label: "Çocuk İşitme Testi",
      description: "Çocuklar için işitme testi sürecini yakından tanıyın.",
      href: "/degerlendirme/cocuk-isitme-testi",
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
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
