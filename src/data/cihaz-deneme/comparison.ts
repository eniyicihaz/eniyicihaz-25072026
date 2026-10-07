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
  heading: "Merkezde Ücretsiz Demo ile Satın Alarak 7 Güne Kadar Deneme Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. İki deneyim genellikle birbirini tamamlayacak şekilde kullanılır.",
  primaryLabel: "Satın Alarak 7 Güne Kadar Deneme",
  secondaryLabel: "Merkezde Ücretsiz Demo",
  rows: [
    {
      feature: "Süre",
      primary: "7 güne kadar sürer.",
      secondary: "Merkezde yaklaşık 20 dakika sürer.",
    },
    {
      feature: "Test Ortamı",
      primary: "Ev, iş ve sosyal ortamlarınızda gerçek koşullarda gerçekleşir.",
      secondary: "Klinik ortamında simüle edilen senaryolarla sınırlıdır.",
    },
    {
      feature: "Amaç",
      primary: "Cihazın günlük hayatınıza uygun olup olmadığını görmenizi sağlar.",
      secondary: "Önerilen cihazın ilk izlenimini ve genel uygunluğunu hızlıca gösterir.",
    },
    {
      feature: "Geri Bildirim Derinliği",
      primary: "Farklı ortamlardaki çok yönlü deneyiminize dayanır.",
      secondary: "Anlık, sınırlı bir izlenime dayanır.",
    },
    {
      feature: "Ücret",
      primary: "Cihaz bedeli ödenir; uygun bulunmazsa 7 gün içinde iade edilir ve ödenen tutar kesintisiz iade edilir.",
      secondary: "Ücretsizdir.",
    },
    {
      feature: "Kullanım Zamanı",
      primary: "Cihaz satın alındıktan sonra, 7 gün içinde yapılır.",
      secondary: "Cihaz seçimi sırasında, merkezimizde yapılır.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; iki deneyim birbirini tamamlar ve doğru karar için genellikle birlikte değerlendirilir. Kulak içi cihazlar 7 günlük deneme kapsamı dışındadır; bu cihazlar merkezimizde demo olarak denenebilir.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
