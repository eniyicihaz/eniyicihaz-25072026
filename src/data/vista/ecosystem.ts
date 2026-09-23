// Ecosystem deep-dive for the Vista brand page (/markalar/vista) —
// Soundsuite OS technology, the Sonova Group backing, and the
// V/B/T tier system. Renders through the shared BrandPageEcosystem
// component (Technology Explorer pattern). Icon values are restricted to
// the component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const vistaEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Vista Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "soundsuite-os",
      icon: "brain",
      navLabel: "Soundsuite OS",
      title: "Soundsuite OS Nedir?",
      lead: "Sonova'nın güncel nesil ses işleme teknolojisini, Vista ailesinde erişilebilir bir fiyat noktasında sunan işletim sistemi.",
      howItWorks:
        "Sistem, gelen sesi işleyerek farklı dinleme ortamlarına uyum sağlamaya ve konuşma anlaşılırlığını desteklemeye çalışır.",
      advantages: [
        "Sonova'nın köklü mühendislik deneyiminden yararlanır",
        "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olur",
        "Vista ailesinin tüm kademelerinin ortak teknolojik temelidir",
      ],
      models: ["Vista V", "Vista B"],
      expertNote: "Soundsuite OS, Sonova'nın işitme cihazı işletim sistemlerinden biridir.",
    },
    {
      id: "sonova-group",
      icon: "globe",
      navLabel: "Sonova Grubu",
      title: "Sonova Grubu Güvencesi",
      lead: "Vista, dünyanın en büyük işitme cihazı üreticisi olan İsviçre merkezli Sonova Grubu'na bağlıdır.",
      howItWorks:
        "Ürünler, Sonova'nın Phonak ve Unitron ile paylaştığı geniş mühendislik ve üretim altyapısından yararlanılarak geliştirilir.",
      advantages: [
        "Büyük bir global grubun mühendislik deneyiminden yararlanır",
        "Erişilebilir bir fiyat noktasında sunulmayı hedefler",
        "Geniş bir uluslararası dağıtım ağına sahiptir",
      ],
      models: ["Vista V", "Vista B", "Vista T"],
      expertNote: "Vista, Sonova Grubu'nun daha erişilebilir fiyat segmentine yönelik markalarından biridir.",
    },
    {
      id: "tier-system",
      icon: "layers",
      navLabel: "Kademe Sistemi",
      title: "Vista V / B / T Kademe Sistemi",
      lead: "İhtiyaç ve bütçeye göre net bir seçim sunan, Vista ailesinin kademelendirme sistemi.",
      howItWorks:
        "Her kademe, farklı bir teknoloji seviyesi ve özellik setiyle sunulur; odyometrist, ihtiyacınıza göre en uygun kademeyi önerir.",
      advantages: [
        "İhtiyaç ve bütçeye göre net bir karşılaştırma imkânı verir",
        "Bluetooth'lu, kulak arkası, şarjlı ve görünmez kulak içi seçenekler sunar",
        "Sonova teknolojisine erişilebilir bir giriş noktası sağlar",
      ],
      models: ["Vista V", "Vista B", "Vista T"],
      expertNote: "Doğru kademe, işitme kaybınızın derecesine ve beklentilerinize göre odyometrist tarafından önerilmelidir.",
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorNavActiveBg: "rgb(232 93 10 / 0.1)",
  accentColorCalloutBg: "rgb(232 93 10 / 0.06)",
  accentColorCalloutLabel: "#B94708",
};
