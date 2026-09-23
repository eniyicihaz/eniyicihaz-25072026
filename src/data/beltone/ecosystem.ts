// Ecosystem deep-dive for the Beltone brand page (/markalar/beltone) —
// Envision's AI/DNN processing, Auracast connectivity, and the American
// heritage angle. Renders through the shared BrandPageEcosystem component
// (Technology Explorer pattern). Icon values are restricted to the
// component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const beltoneEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Beltone Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "envision-dnn",
      icon: "brain",
      navLabel: "Envision DNN",
      title: "Envision DNN İşleme Nedir?",
      lead: "Şubat 2025'te tanıtılan Envision ailesinin, ortamı sürekli izleyen yapay zekâ destekli ses işleme yaklaşımı.",
      howItWorks:
        "Derin sinir ağı (DNN) tabanlı işleme, çevresel ses verilerini sürekli analiz ederek konuşma ile arka plan gürültüsünü ayırt etmeye ve ayarları otomatik uyarlamaya çalışır.",
      advantages: [
        "Değişen dinleme ortamlarına otomatik uyum sağlamaya yardımcı olur",
        "Konuşma anlaşılırlığını desteklemeyi hedefler",
        "Beltone'un en güncel nesil ürünlerinde sunulur",
      ],
      models: ["Envision"],
      expertNote: "Envision, Beltone'un 2025'te tanıttığı en güncel nesil ürün ailesidir.",
    },
    {
      id: "auracast",
      icon: "bluetooth",
      navLabel: "Bluetooth LE Audio",
      title: "Bluetooth LE Audio / Auracast",
      lead: "Boost Max S ile desteklenen, uyumlu yayın kaynaklarına doğrudan bağlanmayı sağlayan güncel bağlantı standardı.",
      howItWorks:
        "Uyumlu bir Auracast yayın kaynağına (örneğin bir toplantı sistemi) cihazınız üzerinden doğrudan bağlanarak sesi doğrudan işitme cihazınıza alabilirsiniz.",
      advantages: [
        "Gürültülü ortamlarda yayın sesine doğrudan erişim sağlar",
        "Boost Max S, bu özelliği destekleyen ilk süper güç Beltone modelidir",
        "Sektörde yeni yaygınlaşan bir bağlantı standardıdır",
      ],
      models: ["Boost Max S"],
      expertNote: "Auracast desteği, uyumlu yayın kaynaklarının bulunduğu ortamlarda anlamlı bir avantaj sunar.",
    },
    {
      id: "american-heritage",
      icon: "globe",
      navLabel: "Amerikan Mirası",
      title: "1940'tan Bu Yana Amerikan Mirası",
      lead: "Chicago'da Sam Posen tarafından kurulan Beltone, 2025'te 85. kuruluş yıl dönümünü kutladı.",
      howItWorks:
        "Marka, kuruluşundan bu yana Amerika'da işitme cihazı geliştirme ve müşteri deneyimi konusundaki geleneğini sürdürür; bugün GN Grubu'na bağlıdır.",
      advantages: [
        "85 yılı aşkın bir marka mirasına sahiptir",
        "GN Grubu'nun mühendislik altyapısından yararlanır",
        "ABD, Kanada ve 40'tan fazla ülkede dağıtım ağına sahiptir",
      ],
      models: ["Envision", "Serene", "Commence"],
      expertNote: "Beltone, sektörün en köklü Amerikan işitme cihazı markalarından biridir.",
    },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
  accentColorNavActiveBg: "rgb(27 56 100 / 0.1)",
  accentColorCalloutBg: "rgb(27 56 100 / 0.06)",
  accentColorCalloutLabel: "#12274A",
};
