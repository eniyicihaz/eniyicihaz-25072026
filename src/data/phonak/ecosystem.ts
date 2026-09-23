// Ecosystem deep-dive for the Phonak brand page (/markalar/phonak) — Roger,
// myPhonak app, and universal Bluetooth (see PHONAK MASTER BLUEPRINT §6.5).
// Renders through the shared BrandPageEcosystem component (Technology
// Explorer pattern). Deliberately 3 items, not 6 like Oticon's — fewer but
// deeper, per the blueprint's own note that Phonak's real differentiation
// is narrower and more concentrated than Oticon's technology stack.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const phonakEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Phonak Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "roger",
      icon: "radio",
      navLabel: "Roger Ekosistemi",
      title: "Roger Ekosistemi Nedir?",
      lead: "Kalabalık, gürültülü veya mesafeli ortamlarda konuşmayı takip etmeyi kolaylaştıran uzaktan mikrofon sistemi.",
      howItWorks:
        "Konuşan kişinin yanına yerleştirilen küçük bir mikrofon, sesi doğrudan işitme cihazına aktararak arka plan gürültüsünün etkisini azaltır.",
      advantages: [
        "Sınıf ve eğitim ortamlarında sıkça tercih edilir",
        "Toplantı ve grup ortamlarında konuşmayı takip etmeyi kolaylaştırır",
        "Günlük kullanımın ötesinde özel ihtiyaçlara yönelik ek bir çözümdür",
      ],
      models: ["Audéo", "Naída", "Sky", "Bolero"],
      expertNote: "Roger, Phonak'ın uzun yıllardır var olan, okul ve iş ortamlarında sıkça tercih edilen bir uzaktan mikrofon ailesidir.",
    },
    {
      id: "myphonak",
      icon: "smartphone",
      navLabel: "myPhonak Uygulaması",
      title: "myPhonak Uygulaması",
      lead: "Uyumlu Phonak modellerini akıllı telefon üzerinden yönetmeyi sağlayan mobil uygulama.",
      howItWorks:
        "Uygulama üzerinden ses programları arasında geçiş yapılabilir, ses seviyesi ayarlanabilir ve uyumlu modellerde uzaktan destek alınabilir.",
      advantages: [
        "Program ve ses ayarlarına hızlı erişim",
        "Bağlantı ve pil durumu takibi",
        "Uzaktan destek imkânı (uyumlu modellerde)",
      ],
      models: ["Audéo", "Naída", "Sky", "Bolero", "Virto"],
      expertNote: "myPhonak, markanın dijital ekosisteminin önemli bir parçası olarak günlük kullanımı daha pratik hale getirir.",
    },
    {
      id: "bluetooth",
      icon: "bluetooth",
      navLabel: "Evrensel Bluetooth",
      title: "Evrensel Bluetooth Bağlantısı",
      lead: "Ayrı bir aracı cihaza ihtiyaç duymadan hem iPhone hem Android telefonlarla doğrudan bağlantı.",
      howItWorks:
        "Uyumlu modeller, akıllı telefonlarla doğrudan kablosuz bağlantı kurar; gelen aramalar ve medya içerikleri işitme cihazına doğrudan aktarılabilir.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihaza aktarabilme",
        "Medya ve müzik dinlemede kablosuz bağlantı",
        "Marka/işletim sistemi fark etmeksizin geniş uyumluluk",
      ],
      models: ["Audéo", "Naída", "Sky", "Bolero", "Virto", "CROS"],
      expertNote: "Evrensel Bluetooth, Phonak'ın en bilinen ve sitede zaten kurulu gerçek farklılaşma noktasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorNavActiveBg: "rgb(14 165 233 / 0.1)",
  accentColorCalloutBg: "rgb(14 165 233 / 0.06)",
  accentColorCalloutLabel: "#0369a1",
};
