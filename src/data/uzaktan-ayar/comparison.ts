// "Uzaktan Ayar Oturumu ile Yüz Yüze Randevu Karşılaştırması" comparison
// table for the /uygulama-ayar/uzaktan-ayar page. Renders through the
// existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// page's own comparison pivots to a genuinely distinct axis from every
// prior "Uygulama & Ayar" sibling — remote session vs. in-person
// appointment, specific to this page's own subject.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const uzaktanAyarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Uzaktan Ayar Oturumu ile Yüz Yüze Randevu Karşılaştırması",
  intro: "İki seçenek arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, ayar ihtiyacınızın kapsamına göre birlikte belirlenir.",
  primaryLabel: "Uzaktan Ayar Oturumu",
  secondaryLabel: "Yüz Yüze Randevu",
  rows: [
    {
      feature: "Konum Gereksinimi",
      primary: "Kliniğe gelmeden, uygun internet bağlantısı olan herhangi bir yerden yapılabilir.",
      secondary: "Klinikte fiziksel olarak bulunmanız gerekir.",
    },
    {
      feature: "Kapsam",
      primary: "Küçük ses ve program ayarlarıyla sınırlıdır.",
      secondary: "Fiziksel kontrol dahil kapsamlı bir değerlendirme yapılabilir.",
    },
    {
      feature: "Fiziksel Uyum Kontrolü",
      primary: "Cihazın veya kulak kalıbının fiziksel uyumu değerlendirilemez.",
      secondary: "Fiziksel uyum doğrudan kontrol edilebilir.",
    },
    {
      feature: "Gereken Ekipman",
      primary: "Uyumlu bir cihaz, akıllı telefon ve internet bağlantısı gerekir.",
      secondary: "Ek bir ekipman gerekmez.",
    },
    {
      feature: "Süre",
      primary: "Genellikle kısa bir video görüşmesiyle tamamlanır.",
      secondary: "Yapılan değerlendirmeye göre daha uzun sürebilir.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Küçük bir ayar ihtiyacı olan, kliniğe uzak veya seyahatte olan kullanıcılar için sıkça tercih edilir.",
      secondary: "Kapsamlı bir değerlendirme veya fiziksel kontrol gerektiren durumlar için gereklidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun seçim, ayar ihtiyacınızın kapsamına göre bir odyometristle birlikte belirlenir.",
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
