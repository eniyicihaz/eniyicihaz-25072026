// Ecosystem deep-dive for the Audio Service brand page
// (/markalar/audio-service) — ITE specialization, custom manufacturing,
// and the Mood/Quix/Stiline families. Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern). Icon values
// are restricted to the component's fixed set: brain | dna | globe |
// radar | bluetooth | smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const audioServiceEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Audio Service Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "ite-expertise",
      icon: "dna",
      navLabel: "Kulak İçi Uzmanlığı",
      title: "Kulak İçi (ITE) Uzmanlığı Nedir?",
      lead: "Audio Service'in 40 yılı aşkın süredir odaklandığı, kulak kanalına özel üretilen işitme sistemleri uzmanlığı.",
      howItWorks:
        "Kulak kalıbınızın ölçüsü alınarak, kulak kanalınıza özel üretilen bir cihaz hazırlanır; bu sayede kulak arkası parçası olmadan, sade bir görünüm elde edilir.",
      advantages: [
        "Kulak kanalı içinde neredeyse görünmez bir yerleşim sunar",
        "Kulağınıza özel, kişiselleştirilmiş bir uyum sağlar",
        "Markanın çekirdek uzmanlık alanıdır",
      ],
      models: ["Mood", "Quix", "Stiline"],
      expertNote: "Kulak içi modeller, kulak kanalı yapısına bağlı olarak her kullanıcıya uygun olmayabilir; değerlendirme gereklidir.",
    },
    {
      id: "rechargeable",
      icon: "bluetooth",
      navLabel: "Şarjlı Sistemler",
      title: "Şarjlı Sistemler",
      lead: "Lityum-iyon şarjlı modellerle günlük kullanım için pratik bir çözüm sunar.",
      howItWorks:
        "Cihaz, gece boyunca şarj istasyonunda şarj edilir ve gün boyu kullanım için yeterli pil ömrü sunar.",
      advantages: [
        "Sık pil değişimi ihtiyacını ortadan kaldırır",
        "Günlük kullanımı daha pratik hale getirir",
        "Çevresel atığı azaltmaya yardımcı olur",
      ],
      models: ["Mood", "Quix"],
      expertNote: "Şarjlı sistemler, günlük kullanım kolaylığı önceliğiniz ise sıkça değerlendirilir.",
    },
    {
      id: "german-heritage",
      icon: "globe",
      navLabel: "Alman Mirası",
      title: "1977'den Bu Yana Alman Zanaatkârlığı",
      lead: "Löhne, Almanya'da 1977'de kurulan Audio Service, bugün WS Audiology grubuna bağlıdır.",
      howItWorks:
        "Marka, kuruluşundan bu yana kulak içi işitme sistemleri konusundaki uzmanlığını sürdürür ve bugün Signia, Widex ve Rexton ile aynı global grubun bir parçasıdır.",
      advantages: [
        "40 yılı aşkın bir üretim ve uzmanlık geleneğine sahiptir",
        "WS Audiology grubunun mühendislik altyapısından yararlanır",
        "30'dan fazla ülkede dağıtım ağına sahiptir",
      ],
      models: ["Mood", "Quix", "Stiline"],
      expertNote: "Audio Service, WS Audiology grubunun kulak içi uzmanlığıyla öne çıkan Alman markasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
  accentColorNavActiveBg: "rgb(18 64 160 / 0.1)",
  accentColorCalloutBg: "rgb(18 64 160 / 0.06)",
  accentColorCalloutLabel: "#0C2E7A",
};
