import type { DailyLifeContent } from "./daily-life.types";

// Locked content — docs/archive/DAILY_LIFE_SPECIFICATION.md §2. Four scenarios, four
// different real destinations (no repeated link) — this is the section's
// entire SEO/internal-linking purpose, not decoration (kullanıcı onayı).
// `imageAlt` fields describe the intended real/custom photo; no `src` yet —
// DailyLife.astro renders <ImagePlaceholder> until real assets exist.
export const dailyLife: DailyLifeContent = {
  eyebrow: "Hayatınızda Netlik",
  heading: "Günlük Yaşamda Fark Yaratır",
  intro: "Doğru cihaz, en çok, günün sıradan anlarında hissedilir.",
  scenarios: [
    {
      title: "Telefonda Netlik",
      description: "Aradığınızda, karşınızdakini ilk seferde anlamak.",
      href: "/isitme-cihazlari/bluetooth-ozellikli",
      linkLabel: "Bluetooth özellikli cihazları inceleyin",
      imageAlt: "Telefonda rahat bir sohbet anı",
    },
    {
      title: "TV'de Kendi Sesinizi Bulun",
      description: "Sesi herkes için değil, kendi kulağınıza göre ayarlamak.",
      href: "/uygulama-ayar/uzaktan-ayar",
      linkLabel: "Uzaktan ayar hizmetini inceleyin",
      imageAlt: "TV izlerken rahat bir oturma odası anı",
    },
    {
      title: "Kalabalıkta Kaybolmadan",
      description: "Aile sohbetinde veya kalabalık bir masada konuşmayı takip edebilmek.",
      href: "/isitme-cihazlari/kulak-ici-ite",
      linkLabel: "Kulak içi (ITE) seçeneklerini inceleyin",
      imageAlt: "Aile sofrasında veya sosyal bir ortamda sohbet anı",
    },
    {
      title: "Gün Boyu Yanınızda",
      description: "Dışarıda, terleme veya nem endişesi olmadan kullanım.",
      href: "/isitme-cihazlari/suya-dayanikli",
      linkLabel: "Suya dayanıklı cihazları inceleyin",
      imageAlt: "Dışarıda, aktif bir günlük yaşam anı (yürüyüş)",
    },
  ],
};
