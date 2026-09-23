// Ecosystem deep-dive for the Signia brand page (/markalar/signia) — Own
// Voice Processing, Signia Assistant, and the integrated AI chip (see
// SIGNIA MASTER BLUEPRINT §9.5). Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern). Deliberately
// 3 items, mirroring Phonak's depth-over-breadth choice.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const signiaEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Signia Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "ovp",
      icon: "layers",
      navLabel: "Own Voice Processing",
      title: "Own Voice Processing Nedir?",
      lead: "Kullanıcının kendi sesinin doğal ve rahatsız etmeyen şekilde duyulmasını sağlayan, Signia'ya özgü ses işleme yaklaşımı.",
      howItWorks:
        "Kendi ses ile çevresel/diğer konuşmacı sesleri ayrı şekilde analiz edilerek, kullanıcının kendi sesi daha az yankılı ve daha doğal aktarılır.",
      advantages: [
        "Kulak tıkanıklığı hissini azaltmaya yardımcı olur",
        "Kendi sesini daha doğal duymayı sağlar",
        "Özellikle yeni kullanıcıların uyum sürecini kolaylaştırır",
      ],
      models: ["Styletto", "Pure", "Insio"],
      expertNote: "Own Voice Processing, Signia'nın tescilli ve en iyi bilinen teknolojilerinden biridir.",
    },
    {
      id: "assistant",
      icon: "smartphone",
      navLabel: "Signia Assistant",
      title: "Signia Assistant",
      lead: "Uyumlu Signia modellerini akıllı telefon üzerinden yönetmeyi ve kişiselleştirmeyi sağlayan yapay zekâ destekli asistan.",
      howItWorks:
        "Kullanıcı belirli bir ortamdaki ses deneyimiyle ilgili geri bildirim verir; asistan bu geri bildirime göre ayarların ince ayar yapılmasına yardımcı olur.",
      advantages: [
        "Kişiselleştirilmiş ince ayar deneyimi",
        "Program ve ses ayarlarına hızlı erişim",
        "Zaman içinde kullanıcı tercihlerine uyum",
      ],
      models: ["Styletto", "Pure", "Insio", "Active"],
      expertNote: "Signia Assistant, markanın yapay zekâ destekli kişiselleştirme yaklaşımının en somut örneğidir.",
    },
    {
      id: "ai-chip",
      icon: "dna",
      navLabel: "Entegre AI Çipi",
      title: "Entegre Yapay Zekâ Çipi",
      lead: "Çevresel sesleri ve konuşmayı gerçek zamanlı analiz eden, cihaz içine entegre işlemci.",
      howItWorks:
        "Çip, ortamdaki sesleri saniyede birçok kez analiz ederek konuşmayı arka plan gürültüsünden ayırt etmeye çalışır.",
      advantages: [
        "Gürültülü ortamlarda konuşmayı öne çıkarmaya yardımcı olur",
        "Farklı akustik ortamlara otomatik uyum sağlar",
        "Modern Signia platformlarının temelini oluşturur",
      ],
      models: ["Styletto", "Pure"],
      expertNote: "Entegre yapay zekâ çipi, Signia'nın güncel nesil platformlarının en önemli teknik farklılaşma noktasıdır.",
    },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B).
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
  accentColorNavActiveBg: "rgb(178 31 75 / 0.1)",
  accentColorCalloutBg: "rgb(178 31 75 / 0.06)",
  accentColorCalloutLabel: "#B21F4B",
};
