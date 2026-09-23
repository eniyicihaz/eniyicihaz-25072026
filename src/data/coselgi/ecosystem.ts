// Ecosystem deep-dive for the Coselgi brand page (/markalar/coselgi) —
// Acoustic Environment Technology, Widex backing, and the Mojo/Effect
// families. Renders through the shared BrandPageEcosystem component
// (Technology Explorer pattern). Icon values are restricted to the
// component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const coselgiEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Coselgi Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "acoustic-environment",
      icon: "radar",
      navLabel: "Acoustic Environment",
      title: "Acoustic Environment Technology Nedir?",
      lead: "Restoran, sokak, ev ve toplantı gibi farklı akustik ortamları analiz ederek ses ayarlarını otomatik optimize etmeye yardımcı olan Coselgi'ye özgü yaklaşım.",
      howItWorks:
        "Cihaz, bulunduğunuz ortamın akustik özelliklerini sürekli analiz ederek, o ortama en uygun ses işleme ayarlarına otomatik olarak geçiş yapmaya çalışır.",
      advantages: [
        "Farklı ortamlar arasında geçişte otomatik uyum sağlamaya yardımcı olur",
        "Manuel ayar yapma ihtiyacını azaltmaya yardımcı olur",
        "Effect ve Mojo ailelerinin ortak temel teknolojisidir",
      ],
      models: ["Effect", "Mojo"],
      expertNote: "Acoustic Environment Technology, Coselgi'nin en özgün teknolojik yaklaşımlarından biridir.",
    },
    {
      id: "widex-backing",
      icon: "globe",
      navLabel: "Widex Altyapısı",
      title: "Widex Mühendislik Altyapısı",
      lead: "Coselgi, dünyanın önde gelen işitme teknolojisi markalarından, Danimarka merkezli Widex'e bağlıdır.",
      howItWorks:
        "Ürünler, Widex'in mühendislik deneyimi ve üretim altyapısından yararlanılarak geliştirilir.",
      advantages: [
        "Köklü bir global markanın mühendislik deneyiminden yararlanır",
        "30 ülkede satılan bir dağıtım ağına sahiptir",
        "SGK'ya uygun, erişilebilir bir fiyat noktasında sunulur",
      ],
      models: ["Effect", "Mojo"],
      expertNote: "Coselgi, Widex'in mühendislik altyapısını daha erişilebilir bir fiyat noktasında sunar.",
    },
    {
      id: "fit-options",
      icon: "layers",
      navLabel: "Yerleşim Seçenekleri",
      title: "Farklı Yerleşim Seçenekleri",
      lead: "Coselgi, BTE, RIC, mRIC ve kulak içi (CIC) gibi çeşitli yerleşim tiplerinde sunulur.",
      howItWorks:
        "Odyometrist, işitme kaybınızın derecesine ve tercihinize göre en uygun yerleşim tipini önerir.",
      advantages: [
        "Farklı işitme kaybı derecelerine uygun seçenekler sunar",
        "Estetik tercihlere göre kulak içi seçenek de sunar",
        "Effect ve Mojo ailelerinde geniş bir yelpazede mevcuttur",
      ],
      models: ["Effect", "Mojo"],
      expertNote: "Doğru yerleşim tipi, işitme testi sonucuna ve kişisel tercihe göre odyometrist tarafından belirlenmelidir.",
    },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
  accentColorNavActiveBg: "rgb(21 149 216 / 0.1)",
  accentColorCalloutBg: "rgb(21 149 216 / 0.06)",
  accentColorCalloutLabel: "#0F74AC",
};
