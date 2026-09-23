// Product family showcase for the Maico brand page (/markalar/maico).
// Renders through the shared BrandPageModels component, including its
// feature-badge system.
//
// Önemli not: MAICO'nun işitme cihazlarına özgü, bağımsız kaynaklarla tam
// güvenle doğrulanmış spesifik model/aile isimleri bu proje kapsamında
// bulunamamıştır (MAICO Diagnostics GmbH'nin kamuya açık kaynakları
// ağırlıklı olarak odyometre/tanı cihazlarına odaklanır). Bu nedenle
// aşağıdaki üç kart, kaynak fotoğraflardaki gerçek kategori adlarına
// (Bluetooth'lu, kulak arkası, kulak içi) sadık kalınarak, uydurma bir
// model adı kullanılmadan hazırlanmıştır. Yayından önce distribütörle
// spesifik model adlarının teyit edilmesi önerilir.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const maicoModels: BrandPageModelsContent = {
  badge: "MAICO SERİLERİ",
  heading: "MAICO Ürün Yelpazesini Keşfedin",
  intro: "İhtiyacınıza uygun MAICO serisini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "bluetooth-serisi",
      category: "Bluetooth'lu Seri",
      name: "MAICO Bluetooth Serisi",
      description: "Akıllı telefonlarla kablosuz bağlantı kurabilen, güncel bağlantı özellikli model seçenekleri.",
      tags: ["RIC", "Bluetooth"],
      image: "/images/maico/models/bluetooth-serisi.webp",
    },
    {
      slug: "kulak-arkasi-serisi",
      category: "Kulak Arkası (BTE) Seri",
      name: "MAICO Kulak Arkası Serisi",
      description: "Farklı işitme kaybı derecelerine uygun, geleneksel kulak arkası yerleşimli model seçenekleri.",
      tags: ["BTE"],
      image: "/images/maico/models/kulak-arkasi-serisi.webp",
    },
    {
      slug: "kulak-ici-serisi",
      category: "Kulak İçi (ITE) Seri",
      name: "MAICO Kulak İçi Serisi",
      description: "Kulak kanalına özel üretilen, sade bir görünüm sunan kulak içi yerleşimli model seçenekleri.",
      tags: ["Kulak İçi"],
      image: "/images/maico/models/kulak-ici-serisi.webp",
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorHoverBorder: "rgb(16 35 63 / 0.5)",
  accentColorGlow: "rgb(16 35 63 / 0.14)",
  accentColorFocus: "rgb(16 35 63 / 0.35)",
};
