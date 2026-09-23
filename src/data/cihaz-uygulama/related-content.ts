// "İlgili İçerikler" internal-linking section for the /uygulama-ayar/
// cihaz-uygulama page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Ücretsiz
// İşitme Testi, Odyometri, Kişiye Özel Programlama and Cihaz Deneme
// pages (the natural precursor and successors this appointment connects
// to) and the real SGK pillar page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazUygulamaRelatedContent: BrandPageRelatedContentContent = {
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
      description: "Uygulama randevusunun temelini oluşturan odyometrik değerlendirmeyi tanıyın.",
      href: "/degerlendirme/odyometri",
    },
    {
      label: "Kişiye Özel Programlama",
      description: "Cihazınızın kişiye özel programlanma sürecini yakından tanıyın.",
      href: "/uygulama-ayar/kisiye-ozel-programlama",
    },
    {
      label: "Cihaz Deneme",
      description: "Cihazınızı satın almadan önce deneme süreci hakkında bilgi edinin.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
