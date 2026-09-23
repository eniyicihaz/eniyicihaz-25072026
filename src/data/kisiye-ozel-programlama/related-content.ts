// "İlgili İçerikler" internal-linking section for the /uygulama-ayar/
// kisiye-ozel-programlama page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links back to the real
// Cihaz Uygulama, Cihaz Deneme and Uzaktan Ayar pages (natural siblings
// this fine-tuning process connects to) and the real Odyometri page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kisiyeOzelProgramlamaRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Cihaz Uygulama",
      description: "İlk uygulama randevusunun nasıl işlediğini yakından tanıyın.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      label: "Odyometri",
      description: "İnce ayarların temelini oluşturan odyometrik değerlendirmeyi tanıyın.",
      href: "/degerlendirme/odyometri",
    },
    {
      label: "Uzaktan Ayar",
      description: "Kliniğe gelmeden uzaktan ince ayar imkânı hakkında bilgi edinin.",
      href: "/uygulama-ayar/uzaktan-ayar",
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
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
