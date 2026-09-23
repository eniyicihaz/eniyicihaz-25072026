// Ecosystem deep-dive for the Bernafon brand page (/markalar/bernafon) —
// Smart Sensor motion-adaptive directionality, Machine Learning 2.0, and
// the Easy Control-A companion app. Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern).
// Deliberately 3 items, mirroring the depth-over-breadth choice used on
// the five brand pages before it.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const bernafonEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Bernafon Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "smart-sensor",
      icon: "radar",
      navLabel: "Smart Sensor",
      title: "Smart Sensor Nedir?",
      lead: "Baş ve vücut hareketlerinizi algılayarak yönlülük ve gürültü azaltma ayarlarını otomatik olarak uyarlamaya yardımcı olan Bernafon'a özgü yaklaşım.",
      howItWorks:
        "Cihaz, hareketlerinizi ve bulunduğunuz ortamı sürekli analiz ederek, o anki dinleme ihtiyacınıza göre yönlü mikrofon ve gürültü azaltma ayarlarını otomatik olarak uyarlamaya çalışır.",
      advantages: [
        "Grup konuşmalarında konuşmayı takip etmeye yardımcı olur",
        "Farklı ortamlar arasında geçişte otomatik uyum sağlamaya yardımcı olur",
        "Manuel ayar yapma ihtiyacını azaltmaya yardımcı olabilir",
      ],
      models: ["Encanta", "Encanta Alpha XT"],
      expertNote: "Smart Sensor, Bernafon'un güncel nesil ürünlerinin en özgün ve tescilli yaklaşımlarından biridir.",
    },
    {
      id: "ml2",
      icon: "brain",
      navLabel: "Machine Learning 2.0",
      title: "Machine Learning 2.0",
      lead: "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olan, Bernafon'un güncel nesil ses işleme yaklaşımı.",
      howItWorks:
        "Sistem, çevresel ses verilerini sürekli analiz ederek konuşma ile arka plan gürültüsünü ayırt etmeye ve buna göre ayarlarını uyarlamaya çalışır.",
      advantages: [
        "Farklı akustik ortamlara uyum sağlamaya yardımcı olur",
        "Konuşma anlaşılırlığını desteklemeyi hedefler",
        "Encanta ailesinin temel teknolojilerinden biridir",
      ],
      models: ["Encanta"],
      expertNote: "Machine Learning 2.0, Bernafon'un güncel nesil ses işleme yaklaşımını temsil eder.",
    },
    {
      id: "easy-control",
      icon: "smartphone",
      navLabel: "Easy Control-A",
      title: "Easy Control-A Uygulaması",
      lead: "Uyumlu Bernafon modellerini akıllı telefon üzerinden yönetmeyi sağlayan companion uygulama.",
      howItWorks:
        "Uygulama üzerinden ses programları arasında geçiş yapılabilir, ses seviyesi ayarlanabilir ve cihaz durumu görüntülenebilir.",
      advantages: [
        "Program ve ses ayarlarına hızlı erişim sunar",
        "Basit ve anlaşılır bir arayüz sunar",
        "Günlük kullanımı daha pratik hale getirir",
      ],
      models: ["Encanta", "Encanta Alpha XT"],
      expertNote: "Easy Control-A, Bernafon'un günlük kullanım deneyimini kolaylaştırmaya yönelik uygulamasıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
  accentColorNavActiveBg: "rgb(218 41 28 / 0.1)",
  accentColorCalloutBg: "rgb(218 41 28 / 0.06)",
  accentColorCalloutLabel: "#B01E15",
};
