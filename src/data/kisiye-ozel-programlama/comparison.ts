// "Tek Programlı Genel Ayar ile Çoklu Ortam Programlı Kişiye Özel Ayar
// Karşılaştırması" comparison table for the /uygulama-ayar/
// kisiye-ozel-programlama page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. Cihaz
// Uygulama's own comparison already covers factory setting vs.
// professional fitting; this page's own comparison pivots to a
// genuinely distinct axis specific to its own subject — single
// general-purpose program vs. multiple environment-specific programs.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kisiyeOzelProgramlamaComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Tek Programlı Genel Ayar ile Çoklu Ortam Programlı Kişiye Özel Ayar Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun yaklaşım, yaşam tarzınıza ve geri bildiriminize göre birlikte belirlenir.",
  primaryLabel: "Çoklu Ortam Programlı",
  secondaryLabel: "Tek Programlı Genel Ayar",
  rows: [
    {
      feature: "Ortam Uyumu",
      primary: "Her ortam için ayrı optimize edilmiş bir program kullanılır.",
      secondary: "Tüm ortamlarda aynı genel ayar kullanılır.",
    },
    {
      feature: "Gürültülü Ortam Performansı",
      primary: "Gürültü azaltma ve yönlü mikrofon, gürültülü ortama özel olarak güçlendirilebilir.",
      secondary: "Gürültü azaltma seviyesi tüm ortamlarda sabittir.",
    },
    {
      feature: "Müzik Dinleme Deneyimi",
      primary: "Müzik için ayrı, daha geniş frekans aralıklı bir program oluşturulabilir.",
      secondary: "Konuşma odaklı genel ayar, müzik deneyimini sınırlayabilir.",
    },
    {
      feature: "Program Geçişi",
      primary: "Ortama göre manuel veya otomatik program geçişi yapılabilir.",
      secondary: "Program geçişi gerekmez, tek ayar her yerde kullanılır.",
    },
    {
      feature: "Kurulum Karmaşıklığı",
      primary: "Kurulum ve ince ayar biraz daha fazla zaman gerektirir.",
      secondary: "Kurulum daha basit ve hızlıdır.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Farklı akustik ortamlarda düzenli vakit geçiren kullanıcılar için sıkça tercih edilir.",
      secondary: "Görece sabit ve benzer ortamlarda vakit geçiren kullanıcılar için yeterli olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun yaklaşım, yaşam tarzınız ve geri bildiriminize göre bir odyometristle birlikte belirlenir.",
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
