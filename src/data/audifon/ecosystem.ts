// Ecosystem deep-dive for the Audifon brand page (/markalar/audifon) —
// Cosma Chip Technology, Sueno Pro tinnitus solution, and the rega/sino
// product families. Renders through the shared BrandPageEcosystem
// component (Technology Explorer pattern). Icon values are restricted to
// the component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const audifonEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Audifon Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "cosma-chip",
      icon: "brain",
      navLabel: "Cosma Chip",
      title: "Cosma Chip Technology Nedir?",
      lead: "Audifon'un rega ve sino serilerinin temelini oluşturan, çok kanallı ses işleme çip teknolojisi.",
      howItWorks:
        "Çip, gelen sesi çoklu kanallara ayırarak her kanalı ayrı ayrı işler ve kullanıcının işitme profiline göre modüle eder.",
      advantages: [
        "10k HD Sound ile yüksek çözünürlüklü ses işleme sunar",
        "Rega serisinde 18 kanala kadar WDRC işleme sağlar",
        "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olur",
      ],
      models: ["rega R", "sino S", "sino P"],
      expertNote: "Cosma Chip Technology, Audifon'un güncel nesil ürünlerinin ortak teknolojik temelidir.",
    },
    {
      id: "sueno-pro",
      icon: "radio",
      navLabel: "Sueno Pro",
      title: "Sueno Pro Tinnitus Çözümü",
      lead: "Tinnitus'un yoğunluğuna ve niteliğine göre kişiselleştirilebilen bir maskeleme sesi sunan özel çözüm.",
      howItWorks:
        "Cihaz, tinnitus'a özel olarak ayarlanabilen bir maskeleme sesi üretir; bu ses, odyometrist tarafından kullanıcının tinnitus profiline göre kişiselleştirilir.",
      advantages: [
        "Tinnitus şiddetine göre kişiselleştirilebilir bir yaklaşım sunar",
        "İşitme kaybı ile tinnitus'u aynı cihazda birlikte ele alır",
        "Cosma Chip Technology altyapısından yararlanır",
      ],
      models: ["Sueno Pro"],
      expertNote: "Tinnitus çözümleri, kesin bir tedavi değil, rahatsızlığı yönetmeye yardımcı bir yaklaşımdır; odyometrist değerlendirmesi önemlidir.",
    },
    {
      id: "german-manufacturing",
      icon: "globe",
      navLabel: "Almanya Üretimi",
      title: "%100 Almanya Üretimi",
      lead: "Audifon ürünleri, Ar-Ge'den seri üretime kadar Kölleda/Thüringen'deki tesiste geliştirilir ve üretilir.",
      howItWorks:
        "KIND-Grubu'na bağlı Audifon, tüm geliştirme ve üretim süreçlerini kendi Alman tesisinde yürütür ve 65'ten fazla ülkeye dağıtım yapar.",
      advantages: [
        "Alman mühendislik standartlarında geliştirilir",
        "Aile şirketi güvencesiyle uzun soluklu bir üretim geleneğine sahiptir",
        "Geniş bir uluslararası dağıtım ağına ulaşır",
      ],
      models: ["rega", "sino", "Sueno Pro"],
      expertNote: "Audifon, Almanya'nın işitme akustiği alanındaki en büyük aile işletmesi KIND-Grubu'na bağlıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
  accentColorNavActiveBg: "rgb(226 0 26 / 0.1)",
  accentColorCalloutBg: "rgb(226 0 26 / 0.06)",
  accentColorCalloutLabel: "#B50015",
};
