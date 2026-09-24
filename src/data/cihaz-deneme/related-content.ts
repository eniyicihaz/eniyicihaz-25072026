// "İlgili İçerikler" internal-linking section for /uygulama-ayar/
// cihaz-deneme (Hub-and-Spoke) — redesign plan §1. Renders through the
// existing BrandPageRelatedContent component. Ücretsiz İşitme Testi link
// added at the top — the natural prior step before a device trial.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazDenemeRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Cihaz denemeden önce Darıca'daki merkezimizde ücretsiz işitme testinizi yaptırın.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Uygulama",
      description: "Deneme sonrası kalıcı uygulama randevusunun nasıl işlediğini tanıyın.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      label: "Kişiye Özel Programlama",
      description: "Cihazınızın kişiye özel programlanma sürecini yakından tanıyın.",
      href: "/uygulama-ayar/kisiye-ozel-programlama",
    },
    {
      label: "Kolay Değişim",
      description: "Satın alma sonrası değişim ve iade güvencemiz hakkında bilgi edinin.",
      href: "/neden-orijinal/kolay-degisim",
    },
    {
      label: "Kalıp Alımı",
      description: "Kulak kalıbı ölçümü ve üretim süreci hakkında bilgi edinin.",
      href: "/uygulama-ayar/kalip-alimi",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
