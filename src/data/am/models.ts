// Product family showcase for the A&M brand page (/markalar/am). Renders
// through the shared BrandPageModels component, including its
// feature-badge system. All names are real A&M XTM family names —
// verified via A&M's own site (am-hearing.com) and independent
// distributor listings.
//
// Gerçek A&M ürün fotoğrafları eklendi (bkz. public/images/am/models/).
// XTM P12 için kaynakta doğrudan eşleşen bir fotoğraf mevcuttu. XTM A4
// (kulak içi) ve XTM P4 (ekonomik/giriş seviyesi) için kategori adı
// eşleşmesiyle genel fotoğraflar kullanıldı. XTM P6 ve XTM P8 için henüz
// sağlanmış fotoğraf yok; bu alanlar geçici olarak marka logosuna işaret
// etmeye devam ediyor.

import type { BrandPageModelsContent } from "../../components/brand-page/BrandPageModels/BrandPageModels.astro";

export const amModels: BrandPageModelsContent = {
  badge: "A&M MODELLERİ",
  heading: "A&M Ürün Ailesini Keşfedin",
  intro: "İhtiyacınıza uygun A&M modelini birlikte belirleyelim.",
  ctaLabel: "Detaylı İncele",
  items: [
    {
      slug: "xtm-p12",
      category: "Üst Segment (Yüksek Güç)",
      name: "A&M XTM P12",
      description: "Serinin en yüksek güç seviyesini sunan, ileri derece işitme kayıpları için değerlendirilebilecek model.",
      tags: ["BTE", "Yüksek Güç"],
      image: "/images/am/models/xtm-p12.webp",
    },
    {
      slug: "xtm-p8",
      category: "Orta-Üst Segment",
      name: "A&M XTM P8",
      description: "Orta ve ileri derece işitme kayıpları için dengeli bir güç seviyesi sunan model.",
      tags: ["BTE"],
      image: "/images/brands/am-logo-seffaf.webp",
    },
    {
      slug: "xtm-p6",
      category: "Orta Segment",
      name: "A&M XTM P6",
      description: "Orta derece işitme kayıpları için değerlendirilebilecek, dengeli bir model.",
      tags: ["BTE"],
      image: "/images/brands/am-logo-seffaf.webp",
    },
    {
      slug: "xtm-p4",
      category: "Giriş Segmenti",
      name: "A&M XTM P4",
      description: "Hafif ve orta derece işitme kayıpları için temel bir amplifikasyon çözümü sunan giriş seviyesi model.",
      tags: ["BTE", "Ekonomik"],
      image: "/images/am/models/xtm-p4.webp",
    },
    {
      slug: "xtm-a4",
      category: "Kulak İçi (Kişiye Özel)",
      name: "A&M XTM A4",
      description: "Kulak kanalınıza özel üretilen, kulak içi yerleşimli model.",
      tags: ["Kulak İçi", "Kişiye Özel"],
      image: "/images/am/models/xtm-a4.webp",
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
  accentColorHoverBorder: "rgb(243 112 26 / 0.5)",
  accentColorGlow: "rgb(243 112 26 / 0.14)",
  accentColorFocus: "rgb(243 112 26 / 0.35)",
};
