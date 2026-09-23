// Technology teaser grid for the Coselgi brand page (/markalar/coselgi).
// Renders through the shared BrandPageTechnology component. "Acoustic
// Environment Technology", "Mojo" and "Effect" are real, documented
// Coselgi technology/product names — verified via coselgi.com.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const coselgiTechnology: BrandPageTechnologyContent = {
  badge: "COSELGI TEKNOLOJİLERİ",
  heading: "Coselgi'yi Farklı Kılan Teknolojiler",
  intro: "Coselgi'nin işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "AUTO",
      title: "Acoustic Environment Technology",
      description: "Bulunduğunuz ortamı analiz ederek ses ayarlarını otomatik olarak optimize etmeye yardımcı olur.",
    },
    {
      label: "WIDEX",
      title: "Widex Altyapısı",
      description: "Danimarka merkezli Widex'in mühendislik deneyiminden yararlanır.",
    },
    {
      label: "EFFECT",
      title: "Effect Serisi",
      description: "Markanın geniş yerleşim seçenekleri sunan ana ürün ailelerinden biri.",
    },
    {
      label: "MOJO",
      title: "Mojo Serisi",
      description: "Günlük kullanım için pratik bir çözüm sunan diğer ana ürün ailesi.",
    },
    {
      label: "FIT",
      title: "Farklı Yerleşim Seçenekleri",
      description: "BTE, RIC, mRIC ve kulak içi (CIC) gibi çeşitli yerleşim tiplerinde sunulur.",
    },
    {
      label: "SGK",
      title: "SGK'ya Uygun Erişilebilirlik",
      description: "SGK anlaşmalı merkezlerde sıkça tercih edilen bir fiyat noktası sunar.",
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
  accentColorHoverBorder: "rgb(21 149 216 / 0.5)",
};
