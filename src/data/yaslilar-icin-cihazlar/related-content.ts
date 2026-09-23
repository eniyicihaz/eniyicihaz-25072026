// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Şarj Edilebilir,
// Uzaktan Kontrol Özellikleri and Yapay Zeka Destekli pages (the natural
// cross-references from this page's own Ecosystem section), plus the
// real SGK pillar page, plus the real Aktif Yaşam İçin Cihazlar page
// (this series' other practical-needs page).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yaslilarIcinCihazlarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Şarj Edilebilir Cihazlar",
      description: "Küçük pil değiştirme zorluğunu ortadan kaldıran şarj edilebilir sistemleri inceleyin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Uzaktan Kontrol Özellikleri",
      description: "Aile destekli uzaktan ayar sistemlerinin dayandığı teknolojiyi daha yakından tanıyın.",
      href: "/teknolojiler/uzaktan-kontrol",
    },
    {
      label: "Yapay Zeka Destekli Cihazlar",
      description: "Otomatik ortam algılama teknolojisinin nasıl çalıştığını keşfedin.",
      href: "/teknolojiler/yapay-zeka-destekli",
    },
    {
      label: "Aktif Yaşam İçin Cihazlar",
      description: "Aktif bir yaşam süren kullanıcılar için sıkça değerlendirilen cihaz özelliklerini yakından tanıyın.",
      href: "/ihtiyaciniza-gore/aktif-yasam-icin-cihazlar",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
