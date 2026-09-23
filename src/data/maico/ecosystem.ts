// Ecosystem deep-dive for the Maico brand page (/markalar/maico) —
// measurement-science heritage, Demant Group backing, and the three
// available placement categories. Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern). Icon values
// are restricted to the component's fixed set: brain | dna | globe |
// radar | bluetooth | smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const maicoEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "MAICO Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "measurement-heritage",
      icon: "radar",
      navLabel: "Ölçüm Mirası",
      title: "Odyolojik Ölçüm Bilimi Mirası",
      lead: "MAICO, 1937'de \"audiometer\" (odyometre) terimini literatüre kazandıran, ölçüm biliminde öncü bir markadır.",
      howItWorks:
        "Marka, kuruluşundan bu yana işitme testi ve ölçüm cihazları konusundaki uzmanlığını sürdürür; bu birikim, bugünkü işitme cihazı sunumunun da temelini oluşturur.",
      advantages: [
        "Ölçüm biliminde köklü ve tanınmış bir geçmişe sahiptir",
        "Odyolojik hassasiyet kültürünü işitme cihazı sunumuna taşır",
        "Demant Grubu'nun mühendislik altyapısıyla birleşir",
      ],
      models: ["MAICO Bluetooth Serisi", "MAICO Kulak Arkası Serisi"],
      expertNote: "MAICO'nun ölçüm bilimi mirası, markanın en özgün ve doğrulanmış farklılaşma noktasıdır.",
    },
    {
      id: "demant-group",
      icon: "globe",
      navLabel: "Demant Grubu",
      title: "Demant Grubu Mühendisliği",
      lead: "1995'ten bu yana Demant Grubu'na bağlı olan MAICO, Oticon ve Bernafon ile aynı global mühendislik altyapısından yararlanır.",
      howItWorks:
        "Ürünler, Demant Grubu'nun geniş mühendislik ve üretim altyapısından yararlanılarak geliştirilir.",
      advantages: [
        "Büyük bir global grubun mühendislik deneyiminden yararlanır",
        "Berlin merkezli MAICO Diagnostics GmbH ile Alman mühendislik standartlarını sürdürür",
        "Köklü bir markanın güvencesini taşır",
      ],
      models: ["MAICO Bluetooth Serisi", "MAICO Kulak İçi Serisi"],
      expertNote: "MAICO, Demant Grubu'nun ölçüm bilimi mirasıyla öne çıkan markasıdır.",
    },
    {
      id: "placement-options",
      icon: "bluetooth",
      navLabel: "Yerleşim Seçenekleri",
      title: "Bluetooth, Kulak Arkası ve Kulak İçi Seçenekler",
      lead: "MAICO, farklı ihtiyaç ve tercihlere uygun üç temel yerleşim kategorisinde sunulur.",
      howItWorks:
        "Odyometrist, işitme kaybınızın derecesine ve tercihinize göre Bluetooth'lu, kulak arkası veya kulak içi seçeneklerden size en uygun olanı önerir.",
      advantages: [
        "Farklı işitme kaybı derecelerine uygun seçenekler sunar",
        "Akıllı telefonlarla kablosuz bağlantı kurabilen modeller içerir",
        "Estetik tercihlere göre kulak içi seçenek de sunar",
      ],
      models: ["MAICO Bluetooth Serisi", "MAICO Kulak Arkası Serisi", "MAICO Kulak İçi Serisi"],
      expertNote: "Doğru yerleşim tipi, işitme testi sonucuna ve kişisel tercihe göre odyometrist tarafından belirlenmelidir.",
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorNavActiveBg: "rgb(16 35 63 / 0.1)",
  accentColorCalloutBg: "rgb(16 35 63 / 0.06)",
  accentColorCalloutLabel: "#0A1830",
};
