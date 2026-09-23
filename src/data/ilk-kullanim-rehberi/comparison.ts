// "Kademeli Kullanım Süresi ile Tam Gün Kullanım Karşılaştırması"
// comparison table for the /rehberler/ilk-kullanim-rehberi page.
// Renders through the existing, already-generic KulakArkasiComparison
// component (see src/components/kulak-arkasi/) — reused as-is, not
// duplicated. This page's own comparison is scoped specifically to the
// FIRST-WEEK wearing-schedule choice — genuinely distinct from the
// still-unbuilt "Uyum Süreci" sibling's own multi-month adaptation
// scope, and from every prior comparison across the site.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const ilkKullanimRehberiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Kademeli Kullanım Süresi ile Tam Gün Kullanım Karşılaştırması",
  intro: "İlk hafta için iki farklı yaklaşımın genel farklarını aşağıdaki tabloda özetledik. Size uygun yaklaşım, odyometristinizle birlikte belirlenir.",
  primaryLabel: "Kademeli Kullanım Süresi",
  secondaryLabel: "Tam Gün Kullanım",
  rows: [
    {
      feature: "Başlangıç Yaklaşımı",
      primary: "Kısa sürelerle başlanır, süre günden güne artırılır.",
      secondary: "İlk günden itibaren tüm gün kullanılır.",
    },
    {
      feature: "Alışma Süreci",
      primary: "Genellikle daha yumuşak bir alışma süreci sunar.",
      secondary: "Daha hızlı bir alışma sağlayabilir, ancak yoğun gelebilir.",
    },
    {
      feature: "Yorgunluk Riski",
      primary: "Ses yorgunluğu riski görece daha düşüktür.",
      secondary: "İlk günlerde ses yorgunluğu daha sık fark edilebilir.",
    },
    {
      feature: "Önerilen Kullanıcı",
      primary: "İlk kez cihaz kullanan veya hassas kullanıcılar için sıkça önerilir.",
      secondary: "Daha önce cihaz kullanmış veya hızlı alışan kullanıcılar için uygun olabilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; size uygun yaklaşım, uygulama randevunuzda odyometristinizle birlikte belirlenir.",
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
