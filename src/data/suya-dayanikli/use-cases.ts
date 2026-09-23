// "Suya Dayanıklı Cihazlarla Neler Yapabilirsiniz?" teaser grid for the
// /isitme-cihazlari/suya-dayanikli page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped to
// water/moisture-specific scenarios instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const suyaDayankliUseCases: BrandPageTechnologyContent = {
  badge: "KULLANIM ALANLARI",
  heading: "Suya Dayanıklı Cihazlarla Neler Yapabilirsiniz?",
  intro: "IP koruma sınıfının günlük yaşamın hangi anlarında fark yarattığına daha yakından bakalım.",
  items: [
    {
      label: "SPOR",
      title: "Egzersiz Sırasında Güvenle Kullanın",
      description: "Yoğun terleme gerektiren antrenmanlarda cihazınızı çıkarmadan kullanabilirsiniz.",
    },
    {
      label: "YAĞMUR",
      title: "Ani Yağmurda Endişelenmeyin",
      description: "Hafif yağmur altında kalmak, günlük kullanımınızı kesintiye uğratmaz.",
    },
    {
      label: "GÜNLÜK YAŞAM",
      title: "Mutfak İşlerinde Ek Güven",
      description: "Su sıçramalarına karşı günlük ev işlerinde ek bir gönül rahatlığı sağlar.",
    },
    {
      label: "PLAJ VE HAVUZ KENARI",
      title: "Nemli Ortamlarda Kullanım Kolaylığı",
      description: "Plaj veya havuz kenarı gibi nemli ortamlarda (yüzme hariç) kullanım rahatlığı sunar.",
    },
    {
      label: "İKLİM",
      title: "Nemli ve Sıcak İklimlerde Güvenilir Kullanım",
      description: "Yüksek nem oranına sahip bölgelerde cihazın korunmasına yardımcı olur.",
    },
    {
      label: "GÜNLÜK BAKIM",
      title: "Daha Kolay Temizlik",
      description: "Nano kaplama, günlük temizlik sırasında yüzeyin nemden daha az etkilenmesine yardımcı olur.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(13 148 136 / 0.5)",
};
