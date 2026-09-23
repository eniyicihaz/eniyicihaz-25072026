// "Telefon ile WhatsApp Karşılaştırması" comparison table for the
// /blog/sik-sorulan-sorular page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. Unlike
// every prior page's brand/product/process comparison, this one is a
// practical "which contact channel should I use" comparison, fitting
// this page's directory/support-hub genre.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const sikSorulanSorularComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Telefon ile WhatsApp Karşılaştırması",
  intro: "Bize ulaşmak için hangi kanalın size daha uygun olduğunu aşağıdaki tabloda karşılaştırdık.",
  primaryLabel: "Telefon",
  secondaryLabel: "WhatsApp",
  rows: [
    {
      feature: "Yanıt Hızı",
      primary: "Anlık, canlı bir görüşme sağlar.",
      secondary: "Genellikle kısa sürede yazılı yanıt alırsınız.",
    },
    {
      feature: "Detaylı Anlatım",
      primary: "Karmaşık soruları sesli olarak anlatmak için uygundur.",
      secondary: "Kısa ve net sorular için pratik bir seçenektir.",
    },
    {
      feature: "Belge/Görsel Paylaşımı",
      primary: "Belge veya görsel paylaşımı için uygun değildir.",
      secondary: "Rapor veya fotoğraf gibi belgeleri kolayca paylaşabilirsiniz.",
    },
    {
      feature: "Kayıt Altında Tutma",
      primary: "Görüşme detaylarını not almanız gerekebilir.",
      secondary: "Yazışma geçmişiniz otomatik olarak saklanır.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Anında yanıt almak isteyen kullanıcılar için uygundur.",
      secondary: "Kendi zamanında yazışmak isteyen kullanıcılar için uygundur.",
    },
  ],
  note: "Her iki kanaldan da aynı hızlı ve güler yüzlü hizmeti alırsınız; tercih tamamen size kalmıştır.",
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
