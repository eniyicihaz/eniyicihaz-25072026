// "Klinik İçi Kısa Deneme ile Günlük Yaşamda Uzun Süreli Deneme
// Karşılaştırması" comparison table for the /uygulama-ayar/
// cihaz-deneme page. Renders through the existing, already-generic
// KulakArkasiComparison component (see src/components/kulak-arkasi/) —
// reused as-is, not duplicated. This page's own comparison pivots to a
// genuinely distinct axis: the brief in-appointment simulation already
// covered by Cihaz Uygulama's own "Ortam Senaryoları Üzerinde Deneme"
// step, versus this page's own extended take-home trial period.

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const cihazDenemeComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Klinik İçi Kısa Deneme ile Günlük Yaşamda Uzun Süreli Deneme Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. İki deneyim genellikle birbirini tamamlayacak şekilde kullanılır.",
  primaryLabel: "Günlük Yaşamda Uzun Süreli Deneme",
  secondaryLabel: "Klinik İçi Kısa Deneme",
  rows: [
    {
      feature: "Süre",
      primary: "Günler veya haftalar sürebilir.",
      secondary: "Randevu sırasında birkaç dakika sürer.",
    },
    {
      feature: "Test Ortamı",
      primary: "Ev, iş ve sosyal ortamlarınızda gerçek koşullarda gerçekleşir.",
      secondary: "Klinik ortamında simüle edilen senaryolarla sınırlıdır.",
    },
    {
      feature: "Amaç",
      primary: "Satın alma kararınıza destek olacak kapsamlı bir deneyim sunar.",
      secondary: "İlk ayarların genel uygunluğunu hızlıca kontrol eder.",
    },
    {
      feature: "Geri Bildirim Derinliği",
      primary: "Farklı ortamlardaki çok yönlü deneyiminize dayanır.",
      secondary: "Anlık, sınırlı bir izlenime dayanır.",
    },
    {
      feature: "Satın Alma Yükümlülüğü",
      primary: "Süre boyunca satın alma yükümlülüğü bulunmaz.",
      secondary: "Zaten uygulama randevusunun bir parçasıdır.",
    },
    {
      feature: "Kullanım Zamanı",
      primary: "Genellikle satın alma kararından önce yapılır.",
      secondary: "Genellikle cihaz uygulama randevusu sırasında yapılır.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; iki deneyim birbirini tamamlar ve doğru karar için genellikle birlikte değerlendirilir.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
