// Ecosystem deep-dive for the Vista brand page (/markalar/vista) —
// Soundsuite OS technology, the Sonova Group backing, and the
// V/B/T tier system. Renders through the shared BrandPageEcosystem
// component (Technology Explorer pattern). Icon values are restricted to
// the component's fixed set: brain | dna | globe | radar | bluetooth |
// smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const vistaEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Vista Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "soundsuite-os",
      icon: "brain",
      navLabel: "Soundsuite OS",
      title: "Soundsuite OS Nedir?",
      lead: "Vista ailesinde ses işlemeyi yöneten, erişilebilir bir fiyat noktasında sunulan işletim sistemi.",
      howItWorks:
        "Sistem, gelen sesi işleyerek farklı dinleme ortamlarına uyum sağlamaya ve konuşma anlaşılırlığını desteklemeye çalışır.",
      advantages: [
        "Vista V ve Vista B kademelerinin ortak teknolojik temelidir",
        "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olur",
        "Vista ailesinin tüm kademelerinin ortak teknolojik temelidir",
      ],
      models: ["Vista V", "Vista B"],
      expertNote: "Soundsuite OS, Vista ailesinin işletim sistemidir.",
    },
    {
      id: "teknik-servis",
      icon: "globe",
      navLabel: "Teknik Servis",
      title: "Merkezimizde Vista Teknik Servisi",
      lead: "Sattığımız 18 markanın tamamında olduğu gibi Vista cihazları için de Darıca'daki merkezimizde teknik servis veriyoruz.",
      howItWorks:
        "Cihazınız merkezimizde incelenir; teknik serviste teslim 3 gün içindedir ve ücret cihazın durumuna göre belirlenir.",
      advantages: [
        "Vista cihazları için merkezimizde teknik servis",
        "Erişilebilir bir fiyat noktasında sunulmayı hedefler",
        "Garanti işlemleri ücretsizdir",
      ],
      models: ["Vista V", "Vista B", "Vista T"],
      expertNote: "Servis randevusu için bizi arayabilirsiniz.",
    },
    {
      id: "tier-system",
      icon: "layers",
      navLabel: "Kademe Sistemi",
      title: "Vista V / B / T Kademe Sistemi",
      lead: "İhtiyaç ve bütçeye göre net bir seçim sunan, Vista ailesinin kademelendirme sistemi.",
      howItWorks:
        "Her kademe, farklı bir teknoloji seviyesi ve özellik setiyle sunulur; odyometrist, ihtiyacınıza göre en uygun kademeyi önerir.",
      advantages: [
        "İhtiyaç ve bütçeye göre net bir karşılaştırma imkânı verir",
        "Bluetooth'lu, kulak arkası, şarjlı ve görünmez kulak içi seçenekler sunar",
        "Erişilebilir bir fiyat noktasında giriş seçeneği sunar",
      ],
      models: ["Vista V", "Vista B", "Vista T"],
      expertNote: "Doğru kademe, işitme kaybınızın derecesine ve beklentilerinize göre odyometrist tarafından önerilmelidir.",
    },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorNavActiveBg: "rgb(232 93 10 / 0.1)",
  accentColorCalloutBg: "rgb(232 93 10 / 0.06)",
  accentColorCalloutLabel: "#B94708",
};
