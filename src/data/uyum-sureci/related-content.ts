// "İlgili İçerikler" internal-linking section for the /rehberler/
// uyum-sureci page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the fourth and final page
// in the "Rehberler" series (see header.data.ts's knowledgeMega first
// column) — links to the real İlk Kullanım Rehberi, Kişiye Özel
// Programlama and Kontrol Randevusu pages (natural siblings this
// adaptation journey connects to) and the real Cihaz Seçim Rehberi
// page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uyumSureciRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "İlk Kullanım Rehberi",
      description: "Cihazınızla geçireceğiniz ilk günler için pratik bir başlangıç noktası edinin.",
      href: "/rehberler/ilk-kullanim-rehberi",
    },
    {
      label: "Kişiye Özel Programlama",
      description: "Sürekli bir rahatsızlık yaşıyorsanız, kişiye özel ince ayar sürecini keşfedin.",
      href: "/uygulama-ayar/kisiye-ozel-programlama",
    },
    {
      label: "Kontrol Randevusu",
      description: "Düzenli kontrol randevularının uyum sürecinizi nasıl desteklediğini öğrenin.",
      href: "/uygulama-ayar/kontrol-randevusu",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "İhtiyacınıza uygun işitme cihazını nasıl seçeceğinizi öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "İşitme Kaybı Nedir?",
      description: "İşitme kaybının türlerini ve nedenlerini yakından tanıyın.",
      href: "/rehberler/isitme-kaybi-nedir",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
