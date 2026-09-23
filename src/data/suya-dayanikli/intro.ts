// "Suya Dayanıklı Nedir?" + "Nasıl Korunur?" section for the
// /isitme-cihazlari/suya-dayanikli page. Renders through the shared
// BrandPageIntro component. The "nasıl korunur" explanation is folded
// into this same section's paragraphs, same technique the ITE/Şarj
// Edilebilir/Bluetooth/Çocuklara Özel/Görünmez pages use.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const suyaDayankliIntro: BrandPageIntroContent = {
  badge: "SUYA DAYANIKLI NEDİR?",
  heading: "Suya Dayanıklı İşitme Cihazı Nedir ve Nasıl Korunur?",
  paragraphs: [
    "Suya dayanıklı işitme cihazı, belirli bir fiziksel cihaz tipi değildir; ter, nem ve hafif su temasına karşı IP koruma sınıfı taşıyan bir dayanıklılık özelliğidir.",
    "Bu özellik hem kulak arkası (BTE/RIC) hem de kulak içi (ITE/ITC) ailelerinde sunulabilir; koruma seviyesi modelden modele değişir.",
    "Koruma, uluslararası IP (Ingress Protection) standardına göre iki haneli bir kodla ifade edilir: ilk hane toza, ikinci hane suya karşı direnci gösterir. Örneğin IP68, en üst düzey toz ve su korumasını ifade eder.",
    "Önemli bir ayrım: suya dayanıklı olmak suya tamamen dayanıklı (waterproof) olmak anlamına gelmez; çoğu model yüzme veya duş gibi tam daldırma senaryoları için tasarlanmamıştır.",
  ],
  stats: [
    { value: "IP58 – IP68", label: "Yaygın Koruma Sınıfları" },
    { value: "Nano Kaplama", label: "Öne Çıkan Koruma Teknolojisi" },
    { value: "Ter, Nem, Hafif Yağmur", label: "Korunan Maruziyet Türleri" },
    { value: "Modelden Modele Değişir", label: "Tam Daldırma Uygunluğu" },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
