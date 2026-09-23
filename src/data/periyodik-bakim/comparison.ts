// "Periyodik Bakım ile Günlük Ev Bakımı Karşılaştırması" comparison
// table for the /servis-bakim/periyodik-bakim page. Renders through
// the existing, already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated. This
// page's own comparison pivots to a genuinely new axis distinct from
// every prior Servis & Bakım and Uygulama & Ayar comparison —
// professional periodic maintenance vs. the reader's own daily
// at-home care routine.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const periyodikBakimComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Periyodik Bakım ile Günlük Ev Bakımı Karşılaştırması",
  intro: "İki bakım türü arasındaki temel farkları aşağıdaki tabloda özetledik. En iyi sonuç, ikisinin birlikte uygulanmasıyla elde edilir.",
  primaryLabel: "Periyodik Bakım",
  secondaryLabel: "Günlük Ev Bakımı",
  rows: [
    {
      feature: "Kim Tarafından Yapılır",
      primary: "Klinik ekibimiz tarafından yapılır.",
      secondary: "Kullanıcının kendisi tarafından evde yapılır.",
    },
    {
      feature: "Sıklık",
      primary: "Genellikle birkaç ayda bir yapılır.",
      secondary: "Her gün veya düzenli olarak yapılır.",
    },
    {
      feature: "Kapsam",
      primary: "Aşınan parçaların değişimi ve genel fonksiyon testi içerir.",
      secondary: "Yüzeysel temizlik ve doğru saklama alışkanlıklarını içerir.",
    },
    {
      feature: "Gereken Ekipman",
      primary: "Profesyonel bakım araçları ve orijinal yedek parçalar kullanılır.",
      secondary: "Basit bir temizlik bezi ve kurutma kutusu genellikle yeterlidir.",
    },
    {
      feature: "Derinlik",
      primary: "Mikrofon ve hoparlör portları dahil daha kapsamlı bir inceleme sunar.",
      secondary: "Günlük yüzeysel temizlikle sınırlıdır.",
    },
    {
      feature: "Amaç",
      primary: "Aşınmayı önceden tespit edip gidermeyi hedefler.",
      secondary: "Günlük birikimi önlemeyi ve cihazı korumayı hedefler.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; en iyi sonuç için günlük ev bakımı ve periyodik bakımın birlikte uygulanması önerilir.",
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
