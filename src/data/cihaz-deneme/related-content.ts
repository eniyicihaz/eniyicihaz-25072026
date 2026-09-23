// "İlgili İçerikler" internal-linking section for the /uygulama-ayar/
// cihaz-deneme page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Cihaz
// Uygulama and Kişiye Özel Programlama pages (the natural siblings this
// trial period connects to before and after purchase), the real
// Kolay Değişim page (Neden Orijinal series) — a natural next step
// after a purchase decision is made, since that page covers the
// post-purchase exchange guarantee this trial period precedes — and
// the real Kalıp Alımı page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazDenemeRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
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
