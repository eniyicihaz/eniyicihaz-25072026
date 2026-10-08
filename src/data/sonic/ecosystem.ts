// Ecosystem deep-dive for the Sonic brand page (/markalar/sonic) —
// SoundDNA platform, Speech in Noise technologies, and the Demant Group
// backing. Renders through the shared BrandPageEcosystem component
// (Technology Explorer pattern). Icon values are restricted to the
// component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const sonicEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Sonic Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "sounddna",
      icon: "dna",
      navLabel: "SoundDNA",
      title: "SoundDNA Platformu Nedir?",
      lead: "Enchant ailesinin temelini oluşturan, ortamı analiz ederek sesi otomatik optimize etmeye yardımcı olan adaptif platform.",
      howItWorks:
        "Platform, çevresel ses verilerini sürekli analiz ederek karmaşık ses ortamlarında konuşmayı takip etmeye yardımcı olacak şekilde ayarları uyarlar.",
      advantages: [
        "Karmaşık ses ortamlarında uyum sağlamaya yardımcı olur",
        "Speech in Noise (SPiN) teknolojileriyle desteklenir",
        "Enchant ailesinin tüm modellerinin ortak teknolojik temelidir",
      ],
      models: ["Enchant"],
      expertNote: "SoundDNA, Sonic'in en güncel ve en kapsamlı ses işleme platformudur.",
    },
    {
      id: "dual-radio",
      icon: "radio",
      navLabel: "Dual-Radio Sistemi",
      title: "Dual-Radio Sistemi",
      lead: "2.4 GHz teknolojisi ve Near Field Magnetic Induction (NFMI) ile kulaklar arası daha hızlı iletişim sağlayan sistem.",
      howItWorks:
        "Sistem, iki farklı kablosuz iletişim teknolojisini bir araya getirerek, hem akıllı telefon bağlantısını hem de kulaklar arası senkronizasyonu destekler.",
      advantages: [
        "Akıllı telefonlarla doğrudan bağlantı kurabilir",
        "Kulaklar arası daha hızlı ve senkronize iletişim sağlar",
        "SoundDNA platformunun bir parçasıdır",
      ],
      models: ["Enchant"],
      expertNote: "Dual-Radio Sistemi, Sonic'in güncel nesil bağlantı altyapısının bir parçasıdır.",
    },
    {
      id: "teknik-servis",
      icon: "globe",
      navLabel: "Teknik Servis",
      title: "Merkezimizde Sonic Teknik Servisi",
      lead: "Sattığımız 18 markanın tamamında olduğu gibi Sonic cihazları için de Darıca'daki merkezimizde teknik servis veriyoruz.",
      howItWorks:
        "Cihazınız merkezimizde incelenir; teknik serviste teslim 3 gün içindedir ve ücret cihazın durumuna göre belirlenir.",
      advantages: [
        "Sonic cihazları için merkezimizde teknik servis",
        "1998'den bu yana süregelen bir Amerikan mühendislik mirasına sahiptir",
        "Garanti işlemleri ücretsizdir",
      ],
      models: ["Enchant", "Radiant"],
      expertNote: "Servis randevusu için bizi arayabilirsiniz.",
    },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
  accentColorNavActiveBg: "rgb(61 76 89 / 0.1)",
  accentColorCalloutBg: "rgb(61 76 89 / 0.06)",
  accentColorCalloutLabel: "#2C3841",
};
