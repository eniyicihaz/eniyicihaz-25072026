// "Yaşa Göre Cihaz Seçimi" section for the /isitme-cihazlari/
// cocuklara-ozel page. Reuses the shared BrandPageTechEvolution component
// in its original "stage" sense (era / what it brought / who it's for /
// tags), same technique the BTE/ITE pages use for their dB severity
// progression — here mapped onto age stages instead of hearing-loss
// degree, since bu sayfa bir işitme kaybı derecesini değil bir yaş
// grubunu konu aldığından yaşa göre ilerleme daha anlamlı bir eksendir.

import type { BrandPageTechEvolutionContent } from "../../components/brand-page/BrandPageTechEvolution/BrandPageTechEvolution.astro";

export const cocuklaraOzelAgeStages: BrandPageTechEvolutionContent = {
  badge: "YAŞA GÖRE CİHAZ SEÇİMİ",
  heading: "Çocuklarda Yaşa Göre Cihaz Seçimi Nasıl Değişir?",
  intro: "Çocuğun yaşı büyüdükçe, cihazdan beklenen özellikler ve öncelikler de değişir.",
  stages: [
    {
      era: "Bebeklik Dönemi (0–2 Yaş)",
      whatItBrought: "Yenidoğan işitme taraması sonrası erken tanı alan bebeklerde, dil gelişimini desteklemek için erken cihazlandırma önerilir.",
      bestFor: "Erken tanı almış bebekler",
      families: ["Bebeklere Özel Küçük Kulak Kalıpları"],
    },
    {
      era: "Okul Öncesi Dönem (3–5 Yaş)",
      whatItBrought: "Dil ve konuşma gelişiminin en hızlı olduğu bu dönemde, dayanıklı ve renkli tasarımlar cihazın benimsenmesini kolaylaştırır.",
      bestFor: "Anaokulu ve kreş çağındaki çocuklar",
      families: ["Renkli BTE Modelleri"],
    },
    {
      era: "Okul Çağı (6–12 Yaş)",
      whatItBrought: "Sınıf ortamında öğretmeni net duyabilmek için Roger/FM sistemleriyle uyumlu modeller sıkça tercih edilir.",
      bestFor: "İlkokul ve ortaokul çağındaki çocuklar",
      families: ["FM / Roger Uyumlu BTE Modelleri"],
    },
    {
      era: "Ergenlik Dönemi (13 Yaş ve Üzeri)",
      whatItBrought: "Görünürlük ve bağlantı özellikleri ön plana çıkar; Bluetooth özellikli ve daha az fark edilen modeller değerlendirilebilir.",
      bestFor: "Ergenlik çağındaki gençler",
      families: ["Bluetooth Özellikli Modeller", "Kulak İçi Seçenekler"],
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
};
