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
      lead: "HearLink ailesinin teknolojik temelini oluşturan ses işleme platformu.",
      howItWorks:
        "Platform, gelen sesi işleyerek farklı dinleme ortamlarına uyum sağlamaya ve konuşma anlaşılırlığını desteklemeye çalışır.",
      advantages: [
        "HearLink 50 ve 40 kademelerinde kullanılır",
        "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olur",
        "HearLink ailesinin tüm kademelerinin ortak teknolojik temelidir",
      ],
      models: ["HearLink 50", "HearLink 40"],
      expertNote: "Velox-S, HearLink ailesinin ses işleme platformudur.",
    },
    {
      id: "teknik-servis",
      icon: "globe",
      navLabel: "Teknik Servis",
      title: "Merkezimizde Philips HearLink Teknik Servisi",
      lead: "Sattığımız 18 markanın tamamında olduğu gibi Philips HearLink cihazları için de Darıca'daki merkezimizde teknik servis veriyoruz.",
      howItWorks:
        "Cihazınız merkezimizde incelenir; teknik serviste teslim 3 gün içindedir ve ücret cihazın durumuna göre belirlenir.",
      advantages: [
        "Tanıdık bir tüketici elektroniği markasının güvenilirliğini taşır",
        "Philips HearLink cihazları için merkezimizde teknik servis",
        "Garanti işlemleri ücretsizdir",
      ],
      models: ["HearLink 50", "HearLink 40", "HearLink 30"],
      expertNote: "Servis randevusu için bizi arayabilirsiniz.",
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
