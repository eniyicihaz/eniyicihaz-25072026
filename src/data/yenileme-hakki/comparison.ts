// "Standart Yenileme ile Erken Yenileme Karşılaştırması" comparison
// table for the /sgk/yenileme-hakki page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Standard renewal = the 5-year period (MEDULA record date, each ear
// separately); early renewal = only the two SUT exceptions. "Hearing
// loss progression" is NOT an early-renewal reason (see hero.ts).

import type { KulakArkasiComparisonContent } from "../../components/kulak-arkasi/KulakArkasiComparison/KulakArkasiComparison.astro";

export const yenilemeHakkiComparison: KulakArkasiComparisonContent = {
  badge: "KARŞILAŞTIRMA",
  heading: "Standart Yenileme ile Erken Yenileme Karşılaştırması",
  intro: "İki yenileme yolu arasındaki temel farkları aşağıdaki tabloda özetledik.",
  primaryLabel: "Standart Yenileme",
  secondaryLabel: "Erken Yenileme",
  rows: [
    {
      feature: "Uygulanma Koşulu",
      primary: "Önceki cihazın MEDULA kayıt tarihinden itibaren 5 yıllık sürenin (her kulak için ayrı) dolmasıyla uygulanır.",
      secondary: "SUT'taki iki istisnadan birine dayanır: çocuğun büyümesi nedeniyle cihazın kullanılamaması veya kullanıcı kusuru olmadan oluşan, onarılamayan arıza.",
    },
    {
      feature: "Gerekli Belgeler",
      primary: "Güncel rapor ve reçete yeterlidir.",
      secondary: "Güncel rapor ve reçeteye ek olarak, rapor çocuğun büyümesini veya cihazın arızasını belgelemelidir.",
    },
    {
      feature: "Değerlendirme Süreci",
      primary: "Süre dolumu MEDULA kaydına göre kontrol edilir.",
      secondary: "Arızada onarımın sağlanıp sağlanamadığı da değerlendirilir; garanti içinde satışı yapan firma, garanti dışında SGK yeniler.",
    },
    {
      feature: "Onay Süreci",
      primary: "Genellikle daha standart bir süreç izler.",
      secondary: "Ek değerlendirme nedeniyle süreç biraz daha uzun sürebilir.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Cihazının 5 yıllık süresini dolduran kullanıcılar için geçerlidir.",
      secondary: "Büyüme çağındaki çocuklar ile cihazı kullanıcı kusuru olmadan arızalanıp onarılamayan kullanıcılar için değerlendirilir.",
    },
    {
      feature: "İşitme Kaybının İlerlemesi",
      primary: "Süre dolduğunda yeni cihaz, güncel işitme durumuna göre seçilir.",
      secondary: "Tek başına yeterli bir gerekçe değildir; SUT istisnaları arasında yer almaz.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; durumunuza uygun yenileme yolu için merkezimizden bilgi alabilirsiniz.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
