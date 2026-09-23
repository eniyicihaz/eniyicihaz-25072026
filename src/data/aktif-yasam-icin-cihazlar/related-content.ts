// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this page
// (the first is recommended-brands.ts). Links to the real Suya
// Dayanıklı, Şarj Edilebilir and Bluetooth Özellikli pages (the natural
// cross-references from this page's own Ecosystem section), the real
// Yaşlılar İçin Cihazlar page (this series' other practical-needs page),
// plus the real SGK pillar page. Unlike every prior page in this
// session, every link here is real — this is the seventh and final page
// in the İhtiyacınıza Göre series, so there is no next sibling left to
// leave as "#".

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const aktifYasamIcinCihazlarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Suya Dayanıklı Cihazlar",
      description: "Yüksek IP koruma sınıfına sahip ter ve neme dayanıklı sistemleri inceleyin.",
      href: "/isitme-cihazlari/suya-dayanikli",
    },
    {
      label: "Şarj Edilebilir Cihazlar",
      description: "Hızlı şarj ve uzun pil ömrü sunan sistemleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Bluetooth Özellikli Cihazlar",
      description: "Egzersiz sırasında telefon ve müzik bağlantısı sağlayan modelleri inceleyin.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
    },
    {
      label: "Yaşlılar İçin Cihazlar",
      description: "Farklı bir ihtiyaç grubu için sıkça değerlendirilen cihaz özelliklerini tanıyın.",
      href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#4b5563",
  accentColorBadgeBg: "rgb(75 85 99 / 0.08)",
  accentColorBadgeBorder: "rgb(75 85 99 / 0.35)",
  accentColorBadgeText: "#374151",
};
