// Ecosystem deep-dive for the Unitron brand page (/markalar/unitron) —
// AutoFocus 360, the Sonova PRISM chip, and the Canadian-German heritage.
// Renders through the shared BrandPageEcosystem component (Technology
// Explorer pattern). Icon values are restricted to the component's fixed
// set: brain | dna | globe | radar | bluetooth | smartphone | radio |
// layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const unitronEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Unitron Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "autofocus-360",
      icon: "radar",
      navLabel: "AutoFocus 360",
      title: "AutoFocus 360 Nedir?",
      lead: "Dört mikrofonlu binaural bir ağ kullanarak konuşmanın geldiği yönü belirlemeye ve her kulaktaki amplifikasyonu dinamik olarak uyarlamaya yardımcı olan Unitron'a özgü yaklaşım.",
      howItWorks:
        "Sistem, her iki kulaktaki toplam dört mikrofondan gelen veriyi birlikte analiz ederek konuşmanın hangi yönden geldiğini belirlemeye ve gürültü azaltmayı buna göre ayarlamaya çalışır.",
      advantages: [
        "Konuşmanın yönünü belirlemeye yardımcı olur",
        "Farklı ortamlarda dinamik gürültü azaltma sağlar",
        "Blu, Vivante ve Stride platformlarının ortak teknolojik temelidir",
      ],
      models: ["Blu", "Moxi Vivante", "Stride"],
      expertNote: "AutoFocus 360, Unitron'un en özgün ve tescilli yaklaşımlarından biridir.",
    },
    {
      id: "prism-chip",
      icon: "bluetooth",
      navLabel: "Sonova PRISM",
      title: "Sonova PRISM Çipi",
      lead: "Blu platformunun temelini oluşturan, iki aktif bağlantıyı ve sekiz cihaza kadar eşleştirmeyi destekleyen çip teknolojisi.",
      howItWorks:
        "Çip, geniş belleği sayesinde birden fazla kablosuz bağlantıyı aynı anda yönetebilir ve farklı cihazlar arasında hızlı geçiş sağlar.",
      advantages: [
        "Aynı anda iki aktif Bluetooth bağlantısını destekler",
        "Sekiz farklı cihazla eşleştirme imkânı sunar",
        "Blu platformunun bağlantı altyapısını oluşturur",
      ],
      models: ["Blu"],
      expertNote: "Sonova PRISM, Blu platformunun temel çip teknolojisidir.",
    },
    {
      id: "canadian-german-heritage",
      icon: "globe",
      navLabel: "Kanada-Alman Mirası",
      title: "1964'ten Bu Yana Kanada-Alman Mühendisliği",
      lead: "Unitron, Alman kökenli kurucular tarafından kurulan ve 1964'te Kitchener, Ontario'ya taşınan bir markadır.",
      howItWorks:
        "Marka, güçlü bir Alman topluluğuna sahip Waterloo bölgesindeki köklerini sürdürürken, bugün Phonak ile aynı çatı olan Sonova Grubu'nun mühendislik altyapısından yararlanır.",
      advantages: [
        "60 yılı aşkın bir mühendislik geleneğine sahiptir",
        "Sonova Grubu'nun (Phonak ile aynı çatı) altyapısından yararlanır",
        "Kitchener, Ontario'da 300'ü aşkın çalışanla faaliyet gösterir",
      ],
      models: ["Blu", "Smile"],
      expertNote: "Unitron, Sonova Grubu'nun Kanada kökenli markasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
  accentColorNavActiveBg: "rgb(28 76 135 / 0.1)",
  accentColorCalloutBg: "rgb(28 76 135 / 0.06)",
  accentColorCalloutLabel: "#133A6B",
};
