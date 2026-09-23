// Ecosystem deep-dive for the Philips Hearing brand page
// (/markalar/philips-hearing) — the HearLink tier system, the Velox-S
// platform, and the Demant license backing. Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern). Icon
// values are restricted to the component's fixed set: brain | dna |
// globe | radar | bluetooth | smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const philipsHearingEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Philips HearLink Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "tier-system",
      icon: "layers",
      navLabel: "Kademe Sistemi",
      title: "HearLink 50 / 40 / 30 Kademe Sistemi Nedir?",
      lead: "İhtiyaç ve bütçeye göre net bir seçim sunan, HearLink ailesinin anlaşılır kademelendirme sistemi.",
      howItWorks:
        "Her kademe, farklı bir teknoloji seviyesi ve özellik setiyle sunulur; HearLink 50 en üst kademeyi, HearLink 30 ise giriş seviyesini temsil eder.",
      advantages: [
        "İlk kez cihaz alacak kullanıcılar için anlaşılır bir seçim sunar",
        "İhtiyaç ve bütçeye göre net bir karşılaştırma imkânı verir",
        "Her kademede farklı yerleşim seçenekleri sunar",
      ],
      models: ["HearLink 50", "HearLink 40", "HearLink 30"],
      expertNote: "Doğru kademe, işitme kaybınızın derecesine ve beklentilerinize göre odyometrist tarafından önerilmelidir.",
    },
    {
      id: "velox-platform",
      icon: "brain",
      navLabel: "Velox-S Platformu",
      title: "Velox-S Platformu",
      lead: "Demant'ın güncel nesil ses işleme platformlarından biri üzerinde geliştirilen HearLink ailesinin teknolojik temeli.",
      howItWorks:
        "Platform, gelen sesi işleyerek farklı dinleme ortamlarına uyum sağlamaya ve konuşma anlaşılırlığını desteklemeye çalışır.",
      advantages: [
        "Demant'ın köklü mühendislik deneyiminden yararlanır",
        "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olur",
        "HearLink ailesinin tüm kademelerinin ortak teknolojik temelidir",
      ],
      models: ["HearLink 50", "HearLink 40"],
      expertNote: "Velox-S, Demant'ın işitme cihazı platformları ailesinden biridir.",
    },
    {
      id: "demant-license",
      icon: "globe",
      navLabel: "Demant Lisansı",
      title: "Demant ile Lisans Anlaşması",
      lead: "Philips HearLink, dünyaca tanınan Philips markası altında, Demant ile yapılan bir lisans anlaşması kapsamında sunulur.",
      howItWorks:
        "Philips, güçlü global marka bilinirliğini sunarken, Demant ürünlerin geliştirilmesi ve üretimini üstlenir.",
      advantages: [
        "Tanıdık bir tüketici elektroniği markasının güvenilirliğini taşır",
        "Demant'ın köklü işitme teknolojisi mühendisliğinden yararlanır",
        "Geniş bir uluslararası dağıtım ağına sahiptir",
      ],
      models: ["HearLink 50", "HearLink 40", "HearLink 30"],
      expertNote: "Philips HearLink, Philips markası ile Demant mühendisliğinin bir araya geldiği bir işitme cihazı hattıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
  accentColorNavActiveBg: "rgb(11 95 206 / 0.1)",
  accentColorCalloutBg: "rgb(11 95 206 / 0.06)",
  accentColorCalloutLabel: "#0848A3",
};
