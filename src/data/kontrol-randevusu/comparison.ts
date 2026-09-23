// "Düzenli Kontrol Randevusu ile Şikayet Odaklı Randevu Karşılaştırması"
// comparison table for the /uygulama-ayar/kontrol-randevusu page.
// Renders through the existing, already-generic KulakArkasiComparison
// component (see src/components/kulak-arkasi/) — reused as-is, not
// duplicated. This page's own comparison pivots to a genuinely distinct
// axis from every prior "Uygulama & Ayar" sibling — proactive,
// scheduled preventive care vs. reactive, complaint-driven visits (such
// as Kişiye Özel Programlama or Uzaktan Ayar).

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const kontrolRandevusuComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Düzenli Kontrol Randevusu ile Şikayet Odaklı Randevu Karşılaştırması",
  intro: "İki yaklaşım arasındaki temel farkları aşağıdaki tabloda özetledik. İki yaklaşım genellikle birbirini tamamlayacak şekilde kullanılır.",
  primaryLabel: "Düzenli Kontrol Randevusu",
  secondaryLabel: "Şikayet Odaklı Randevu",
  rows: [
    {
      feature: "Randevu Nedeni",
      primary: "Herhangi bir şikayet olmasa da önleyici olarak planlanır.",
      secondary: "Belirli bir şikayet veya memnuniyetsizlik üzerine planlanır.",
    },
    {
      feature: "Zamanlama",
      primary: "Sabit bir sıklıkla, önceden planlanır.",
      secondary: "İhtiyaç duyulduğunda, esnek bir zamanda planlanır.",
    },
    {
      feature: "Kapsam",
      primary: "İşitme, cihaz performansı ve fiziksel uyum birlikte değerlendirilir.",
      secondary: "Genellikle belirtilen şikayete odaklı bir değerlendirme yapılır.",
    },
    {
      feature: "Erken Tespit",
      primary: "Küçük değişikliklerin erken fark edilmesine yardımcı olabilir.",
      secondary: "Şikayet belirginleştikten sonra fark edilir.",
    },
    {
      feature: "Sonuç",
      primary: "Bulgulara göre ek bir randevu önerilebilir.",
      secondary: "Doğrudan şikayete yönelik bir çözüm hedeflenir.",
    },
    {
      feature: "Kimler İçin Daha Uygun Olabilir",
      primary: "Genel durumunu düzenli olarak takip etmek isteyen tüm kullanıcılar için önerilir.",
      secondary: "Belirli, somut bir sorun yaşayan kullanıcılar için gereklidir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; iki yaklaşım birbirini dışlamaz, birlikte kullanıldığında en iyi sonucu verir.",
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
