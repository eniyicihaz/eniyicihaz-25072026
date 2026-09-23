// "Toplumda Yaygın Algı ile Uzman Görüşü Karşılaştırması" comparison
// table for the /blog/uzman-gorusleri page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Summarizes broader themes at a higher level than the specific myths
// already covered in evolution.ts and use-cases.ts, to avoid verbatim
// repetition within the same page.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const uzmanGorusleriComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Toplumda Yaygın Algı ile Uzman Görüşü Karşılaştırması",
  intro: "Sık karşılaşılan genel algılarla uzman bakış açısı arasındaki farkı aşağıdaki tabloda özetledik.",
  primaryLabel: "Yaygın Algı",
  secondaryLabel: "Uzman Görüşü",
  rows: [
    {
      feature: "Kullanım Yaşı",
      primary: "İşitme cihazı yalnızca ileri yaşta gerekir.",
      secondary: "İşitme kaybı her yaşta görülebilir; ihtiyaç yaşa değil, işitme durumuna göre belirlenir.",
    },
    {
      feature: "Görünürlük",
      primary: "İşitme cihazları göze çarpar.",
      secondary: "Günümüzde küçük ve göze çarpmayan model seçenekleri de mevcuttur.",
    },
    {
      feature: "Karar Zamanlaması",
      primary: "Hafif işitme kaybında beklenebilir.",
      secondary: "Erken değerlendirme ve müdahale genellikle önerilir.",
    },
    {
      feature: "Cihaz Seçimi",
      primary: "Tüm cihazlar birbirine benzerdir.",
      secondary: "Cihazlar teknoloji seviyesi ve özellik bakımından önemli farklar gösterir.",
    },
    {
      feature: "Kullanım Kolaylığı",
      primary: "Cihazları kullanmak karmaşıktır.",
      secondary: "Güncel cihazlar, uygulama desteği ve eğitimle kolay kullanılabilir hale gelir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; kendi durumunuz için uzman değerlendirmesi almanızı öneririz.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
