// "Standart Yenileme ile Erken Yenileme Karşılaştırması" comparison
// table for the /sgk/yenileme-hakki page. Renders through the existing,
// already-generic KulakArkasiComparison component (see
// src/components/kulak-arkasi/) — reused as-is, not duplicated.
// Deliberately contains no specific time figures — a timeless,
// qualitative comparison distinct from every prior comparison across
// the site.

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
      primary: "Belirli bir kullanım süresinin dolmasıyla uygulanır.",
      secondary: "Onarılamaz arıza veya işitme kaybının ilerlemesi gibi bir gerekçeye dayanır.",
    },
    {
      feature: "Gerekli Belgeler",
      primary: "Güncel rapor ve reçete yeterlidir.",
      secondary: "Güncel rapora ek olarak durumu açıklayan bir gerekçe istenir.",
    },
    {
      feature: "Değerlendirme Süreci",
      primary: "Süre dolumu SGK sistemi üzerinden kontrol edilir.",
      secondary: "Gerekçe, SGK tarafından ayrıca değerlendirilir.",
    },
    {
      feature: "Onay Süreci",
      primary: "Genellikle daha standart bir süreç izler.",
      secondary: "Ek değerlendirme nedeniyle süreç biraz daha uzun sürebilir.",
    },
    {
      feature: "Kimler İçin Uygundur",
      primary: "Cihazını uzun süredir sorunsuz kullanan kullanıcılar için geçerlidir.",
      secondary: "Cihazı arızalanan veya işitme kaybı belirgin şekilde ilerleyen kullanıcılar için değerlendirilir.",
    },
  ],
  note: "Bu karşılaştırma genel eğilimleri özetler; durumunuza uygun yenileme yolu için merkezimizden bilgi alabilirsiniz.",
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
