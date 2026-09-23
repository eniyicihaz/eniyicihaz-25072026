// "İlgili İçerikler" internal-linking section for the /degerlendirme/
// tinnitus-degerlendirme page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links back to the real
// Ücretsiz İşitme Testi and Odyometri pages (natural siblings this page
// builds on), the real Tinnitus (Kulak Çınlaması) Çözümleri page (the
// device-side technology this evaluation leads into), the real Ücretsiz
// Danışmanlık page (header.data.ts's own "İşitme Danışmanlığı" entry
// points here too — this is the sixth and final Değerlendirme item,
// reusing the existing "Neden Orijinal" consultancy page rather than
// duplicating its content, the same cross-reference technique used
// earlier this session for overlapping Segmentler items) and the real
// SGK pillar page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const tinnitusDegerlendirmeRelatedContent: BrandPageRelatedContentContent = {
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
      label: "Tinnitus (Kulak Çınlaması) Çözümleri",
      description: "Değerlendirme sonrası önerilebilecek cihaz tabanlı destek teknolojilerini keşfedin.",
      href: "/teknolojiler/tinnitus-cozumleri",
    },
    {
      label: "İşitme Danışmanlığı",
      description: "İşitme sağlığınızla ilgili tüm sorularınız için danışmanlık hizmetimizi keşfedin.",
      href: "/neden-orijinal/ucretsiz-danismanlik",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
