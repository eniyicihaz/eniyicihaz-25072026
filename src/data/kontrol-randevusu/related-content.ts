// "İlgili İçerikler" internal-linking section for the /uygulama-ayar/
// kontrol-randevusu page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the sixth and final page in
// the "Uygulama & Ayar" series (see header.data.ts's servicesMega
// second column), so every sibling in this column is now real — links
// to Kişiye Özel Programlama, Kalıp Alımı and Uzaktan Ayar; the sibling
// "Periyodik Bakım" page (servicesMega's third column, Servis & Bakım —
// this page's own hardware-maintenance counterpart) is not yet built
// and stays "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kontrolRandevusuRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kişiye Özel Programlama",
      description: "Kontrolde tespit edilen bir ince ayar ihtiyacı için programlama sürecini keşfedin.",
      href: "/uygulama-ayar/kisiye-ozel-programlama",
    },
    {
      label: "Kalıp Alımı",
      description: "Kontrolde kalıbınızın yenilenmesi gerektiği belirlenirse süreci tanıyın.",
      href: "/uygulama-ayar/kalip-alimi",
    },
    {
      label: "Uzaktan Ayar",
      description: "Küçük bir güncelleme için kliniğe gelmeden uzaktan destek imkânını keşfedin.",
      href: "/uygulama-ayar/uzaktan-ayar",
    },
    {
      label: "Periyodik Bakım",
      description: "Cihazınızın fiziksel bakımı ve temizliği hakkında bilgi edinin.",
      href: "#",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
