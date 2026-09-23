// Ecosystem deep-dive for the Rexton brand page (/markalar/rexton) —
// Reach's connectivity, BiCore/MCore processor families, and the German
// engineering heritage. Renders through the shared BrandPageEcosystem
// component (Technology Explorer pattern). Icon values are restricted to
// the component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const rextonEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Rexton Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "reach",
      icon: "bluetooth",
      navLabel: "Reach",
      title: "Reach Bağlantı Teknolojisi Nedir?",
      lead: "Rexton'ın en güncel bağlantı özelliklerini taşıyan, markanın öne çıkan ürün ailesi.",
      howItWorks:
        "Cihaz, uyumlu akıllı telefonlarla ve diğer Bluetooth kaynaklarıyla doğrudan bağlantı kurarak, sesi doğrudan işitme cihazınıza aktarır.",
      advantages: [
        "Akıllı telefon üzerinden ses ve program yönetimi sağlar",
        "Markanın en güncel bağlantı özelliklerini taşır",
        "Günlük kullanım için pratik bir deneyim sunar",
      ],
      models: ["Reach"],
      expertNote: "Reach, Rexton'ın en güncel nesil ürün ailesidir.",
    },
    {
      id: "core-processors",
      icon: "layers",
      navLabel: "BiCore / MCore",
      title: "BiCore ve MCore İşlemci Aileleri",
      lead: "Farklı ihtiyaç seviyelerine uygun, Rexton'ın çekirdek işlemci aileleri.",
      howItWorks:
        "Her işlemci ailesi, farklı bir ses işleme yaklaşımı ve özellik seti sunacak şekilde yapılandırılır.",
      advantages: [
        "BiCore, dengeli bir ses işleme deneyimi sunar",
        "MCore, temel işitme ihtiyaçları için sade bir yaklaşım sunar",
        "Farklı bütçe ve ihtiyaç seviyelerine uygun seçenekler sağlar",
      ],
      models: ["BiCore", "MCore"],
      expertNote: "Doğru işlemci ailesi, işitme kaybınızın derecesine ve beklentilerinize göre odyometrist tarafından önerilmelidir.",
    },
    {
      id: "german-heritage",
      icon: "globe",
      navLabel: "Alman Mirası",
      title: "1955'ten Bu Yana Alman Mühendisliği",
      lead: "Rexton, 1955'te Almanya'da kurulan, bugün WS Audiology grubuna bağlı bir markadır.",
      howItWorks:
        "Marka, 1994'te Siemens Hearing Instruments'a, 2015'te ise Sivantos'a (bugünkü WS Audiology) bağlanarak, köklü bir mühendislik geleneğini sürdürür.",
      advantages: [
        "70 yılı aşkın bir mühendislik geleneğine sahiptir",
        "WS Audiology grubunun (Signia ile aynı çatı) altyapısından yararlanır",
        "Kanıtlanmış bir markanın güvencesini taşır",
      ],
      models: ["Reach", "BiCore", "MCore"],
      expertNote: "Rexton, WS Audiology grubunun köklü Alman mühendislik mirasına sahip markalarından biridir.",
    },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
  accentColorNavActiveBg: "rgb(199 151 18 / 0.1)",
  accentColorCalloutBg: "rgb(199 151 18 / 0.06)",
  accentColorCalloutLabel: "#8A6A0E",
};
