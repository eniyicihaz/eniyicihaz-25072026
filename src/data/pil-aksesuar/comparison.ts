// "Çinko-Hava Pil (Tek Kullanımlık) ile Lityum-İyon (Şarjlı)
// Karşılaştırması" comparison table for the /servis-bakim/
// pil-aksesuar page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. This page's own comparison pivots to a
// genuinely new, well-known consumer axis distinct from every prior
// comparison across the Değerlendirme, Uygulama & Ayar and Servis &
// Bakım series.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const pilAksesuarComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Çinko-Hava Pil (Tek Kullanımlık) ile Lityum-İyon (Şarjlı) Karşılaştırması",
  intro: "İki güç kaynağı arasındaki temel farkları aşağıdaki tabloda özetledik. Size uygun seçim, kullanım alışkanlığınıza ve tercihinize göre belirlenir.",
  primaryLabel: "Lityum-İyon (Şarjlı)",
  secondaryLabel: "Çinko-Hava (Tek Kullanımlık)",
  rows: [
    {
      feature: "Günlük Kullanım",
      primary: "Gece şarj edilir, pil değiştirme gerekmez.",
      secondary: "Pil bittiğinde manuel olarak değiştirilmesi gerekir.",
    },
    {
      feature: "Uzun Vadeli Maliyet",
      primary: "Tekrarlanan pil alımı gerekmediği için uzun vadede daha ekonomik olabilir.",
      secondary: "Düzenli pil alımı gerektirir.",
    },
    {
      feature: "Çevresel Etki",
      primary: "Daha az atık pil oluşturur.",
      secondary: "Düzenli olarak atık pil oluşturur.",
    },
    {
      feature: "El Becerisi İhtiyacı",
      primary: "Küçük pil değiştirme işlemi gerektirmez.",
      secondary: "Küçük pilleri değiştirebilecek el becerisi gerektirir.",
    },
    {
      feature: "Acil Durum Kullanımı",
      primary: "Şarj bittiğinde, şarj kaynağına erişim gerekir.",
      secondary: "Yedek pil taşındığında hızlıca değiştirilebilir.",
    },
    {
      feature: "Pilin Kendisinin Ömrü",
      primary: "Dahili pil, birkaç yıl sonra profesyonelce değiştirilmesi gerekebilir.",
      secondary: "Her pil tek kullanımlıktır, kendi ömrü yoktur.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun seçim, kullanım alışkanlığınıza ve tercihinize göre bir odyometristle birlikte belirlenir.",
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
