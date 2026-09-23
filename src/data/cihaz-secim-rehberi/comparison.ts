// "Giriş Seviyesi ile Üst Segment Cihaz Karşılaştırması" comparison
// table for the /rehberler/cihaz-secim-rehberi page. Renders through
// the existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// page's own comparison revisits the tier distinction already covered
// in depth by the real Segmentler pages (Ekonomik Seri, Standart Seri,
// Premium Seri) but at a summary level appropriate for a first-time
// decision guide; related-content.ts links to those pages for the full
// detail rather than duplicating it here.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cihazSecimRehberiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Giriş Seviyesi ile Üst Segment Cihaz Karşılaştırması",
  intro: "İki segment arasındaki genel farkları aşağıdaki tabloda özetledik. Detaylı bilgi için Segmentlerimiz sayfalarını inceleyebilirsiniz.",
  primaryLabel: "Üst Segment",
  secondaryLabel: "Giriş Seviyesi",
  rows: [
    {
      feature: "Ortam Uyumu",
      primary: "Gürültülü ve karmaşık ortamlarda daha gelişmiş performans sunar.",
      secondary: "Görece sakin ortamlarda temel ihtiyaçları karşılar.",
    },
    {
      feature: "Bağlantı Özellikleri",
      primary: "Genellikle Bluetooth ve uygulama desteği sunar.",
      secondary: "Bağlantı özellikleri sınırlı veya bulunmayabilir.",
    },
    {
      feature: "Kişiselleştirme",
      primary: "Daha fazla program ve ince ayar seçeneği sunar.",
      secondary: "Temel programlama seçenekleriyle sınırlıdır.",
    },
    {
      feature: "Fiyat Aralığı",
      primary: "Daha yüksek bir yatırım gerektirir.",
      secondary: "Daha uygun fiyatlı bir seçenektir.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Aktif, çok yönlü bir yaşam tarzı olan kullanıcılar için sıkça tercih edilir.",
      secondary: "Temel işitme ihtiyaçları olan kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun segment, işitme kaybınız ve yaşam tarzınıza göre bir odyometristle birlikte belirlenir.",
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
