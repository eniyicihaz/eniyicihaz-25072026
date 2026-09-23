// "Erken Müdahale ile Uzun Süredir Tedavi Edilmemiş İşitme Kaybında
// Uyum Süreci Karşılaştırması" comparison table for the /rehberler/
// uyum-sureci page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. This page's own comparison reflects a
// well-established audiological concept (auditory deprivation) —
// genuinely distinct from every prior comparison across the site.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const uyumSureciComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Erken Müdahale ile Uzun Süredir Tedavi Edilmemiş İşitme Kaybında Uyum Süreci Karşılaştırması",
  intro: "İşitme kaybının ne kadar süredir tedavi edilmediği, uyum sürecinin uzunluğunu etkileyebilir. Genel eğilimleri aşağıdaki tabloda özetledik.",
  primaryLabel: "Erken Müdahale Edilen",
  secondaryLabel: "Uzun Süredir Tedavi Edilmemiş",
  rows: [
    {
      feature: "Uyum Süresi",
      primary: "Genellikle daha kısa bir sürede tamamlanır.",
      secondary: "Genellikle daha uzun bir süre gerektirebilir.",
    },
    {
      feature: "Beynin Ses İşleme Alışkanlığı",
      primary: "Beyin, seslere daha yakın zamanda maruz kaldığı için uyum nispeten daha hızlı olabilir.",
      secondary: "Beyin uzun süre bazı seslere maruz kalmadığından, yeniden alışması daha fazla zaman gerektirebilir.",
    },
    {
      feature: "İlk Deneyim",
      primary: "İlk deneyim genellikle daha az yoğun hissedilir.",
      secondary: "İlk deneyim, sesin yoğunluğu nedeniyle daha zorlayıcı hissedilebilir.",
    },
    {
      feature: "Takip İhtiyacı",
      primary: "Standart takip randevuları genellikle yeterlidir.",
      secondary: "Daha sık takip randevuları faydalı olabilir.",
    },
    {
      feature: "Genel Öneri",
      primary: "Düzenli kullanım sürdürülür.",
      secondary: "Kademeli maruziyet yöntemi özellikle önerilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; bu yüzden işitme kaybını fark eder etmez değerlendirilmesi önemlidir. Kişisel süreciniz odyometristinizle birlikte takip edilir.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
