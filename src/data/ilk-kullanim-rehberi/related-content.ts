// "İlgili İçerikler" internal-linking section for the /rehberler/
// ilk-kullanim-rehberi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Cihaz Uygulama
// page (the professional appointment this quick-start guide follows),
// the real Uyum Süreci page (this guide's own natural next step) and
// the real Pil & Aksesuar and Periyodik Bakım pages, which
// header.data.ts's own "Cihaz Bakımı" and "Pil Kullanımı" menu items
// cross-link to directly rather than duplicating their content.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const ilkKullanimRehberiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Cihaz Uygulama",
      description: "Cihazınızın profesyonel olarak nasıl uygulandığını yakından tanıyın.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      label: "Uyum Süreci",
      description: "Cihazınıza uzun vadede nasıl alışacağınızı öğrenin.",
      href: "/rehberler/uyum-sureci",
    },
    {
      label: "Cihaz Bakımı",
      description: "Cihazınızın günlük bakımı ve temizliği hakkında bilgi edinin.",
      href: "/servis-bakim/periyodik-bakim",
    },
    {
      label: "Pil Kullanımı",
      description: "Pil ve şarj seçenekleri hakkında bilgi edinin.",
      href: "/servis-bakim/pil-aksesuar",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "İhtiyacınıza uygun işitme cihazını nasıl seçeceğinizi öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
