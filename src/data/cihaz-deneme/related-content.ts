// "İlgili İçerikler" — /uygulama-ayar/cihaz-deneme (Faz 2 P2): 6 linkten 4'e.
// "Kolay Değişim" (güvence iddiası taşıyan ayrı sayfa), "Kalıp Alımı",
// "Kişiye Özel Programlama" ve "Cihaz Uygulama" linkleri çıkarıldı.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazDenemeRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "İlgili Sayfalar",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Deneme öncesi işitme değerlendirmesi hakkında bilgi alın.",
      href: "/degerlendirme/ucretsiz-isitme-testi/",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK desteği ve rapor süreci hakkında bilgi alın.",
      href: "/sgk-isitme-cihazi-odemesi/",
    },
    {
      label: "Darıca Merkezimizin Sayfası",
      description: "Merkezimiz, adres ve ziyaret bilgileri.",
      href: "/darica-isitme-cihazlari/",
    },
    {
      label: "İletişim",
      description: "Telefon, WhatsApp, adres ve çalışma saatleri.",
      href: "/iletisim/",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
