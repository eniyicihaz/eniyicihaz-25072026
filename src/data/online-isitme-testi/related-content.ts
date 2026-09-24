// "İlgili İçerikler" internal-linking section for the
// /degerlendirme/online-isitme-testi page (Hub-and-Spoke). Renders
// through the shared BrandPageRelatedContent component. Links to the
// clinical counterpart page first (the most important cross-link per
// the implementation plan §1), then the wider Değerlendirme/SGK/device
// hubs.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const onlineIsitmeTestiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Darıca'daki merkezimizde odyometrist eşliğinde yapılan klinik testle farkını görün.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Odyometri",
      description: "Klinik ortamda işitme eşiğinin nasıl ölçüldüğünü daha yakından tanıyın.",
      href: "/degerlendirme/odyometri",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "İşitme Cihazları",
      description: "Farklı ihtiyaçlara uygun işitme cihazı tiplerini keşfedin.",
      href: "/isitme-cihazlari",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
