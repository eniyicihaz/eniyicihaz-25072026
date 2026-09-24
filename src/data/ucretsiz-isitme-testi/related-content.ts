// "İlgili İçerikler" internal-linking section for the /degerlendirme/
// ucretsiz-isitme-testi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component. Redesign plan §1: the "Çocuk İşitme
// Testi" link now points to its real, existing page (it was a "#"
// placeholder when this file was first written, before that page
// existed) and a link to the new online screening tool is added —
// completing the online-vs-clinical cross-link this page's own
// comparison.ts section already sets up.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ucretsizIsitmeTestiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Online İşitme Taraması",
      description: "Merkeze gelmeden önce kulaklığınızla online bir ön değerlendirme yapın.",
      href: "/degerlendirme/online-isitme-testi",
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
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
