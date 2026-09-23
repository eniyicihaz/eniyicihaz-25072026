// "Önerilen Marka ve Modeller" section for the /isitme-cihazlari/
// bluetooth-ozellikli page. Reuses the shared BrandPageRelatedContent
// component as a brand-link showcase, same technique BTE/ITE/Şarj
// Edilebilir use. All hrefs point to real, already-built /markalar/{slug}
// pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const bluetoothRecommendedBrands: BrandPageRelatedContentContent = {
  badge: "MARKALARA GÖRE İNCELEYİN",
  heading: "Bluetooth Özellikli Modelleriyle Öne Çıkan Markalar",
  links: [
    {
      label: "Oticon",
      description: "Oticon'un Bluetooth özellikli modelleri, BrainHearing® felsefesini kesintisiz kablosuz bağlantıyla bir araya getirir.",
      href: "/markalar/oticon",
    },
    {
      label: "Phonak",
      description: "Phonak'ın Bluetooth destekli aileleri, Roger ekosistemi ve TV Connector gibi aksesuarlarla geniş bir bağlantı deneyimi sunar.",
      href: "/markalar/phonak",
    },
    {
      label: "Signia",
      description: "Signia'nın Bluetooth özellikli modelleri, doğrudan telefon ve TV bağlantısını ince tasarımla bir araya getirir.",
      href: "/markalar/signia",
    },
    {
      label: "Widex",
      description: "Widex'in Bluetooth destekli modelleri, markanın doğal ses felsefesini kablosuz bağlantı kolaylığıyla sunar.",
      href: "/markalar/widex",
    },
    {
      label: "ReSound",
      description: "ReSound'un doğrudan telefon bağlantısına öncülük eden aileleri, kablosuz bağlantı arayan kullanıcılar için sıkça değerlendirilir.",
      href: "/markalar/resound",
    },
    {
      label: "NuEar",
      description: "Uygun fiyatlı ve güvenilir Bluetooth özellikli çözümler arayanlar için NuEar'ın modelleri değerlendirilebilir.",
      href: "/markalar/nuear",
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
