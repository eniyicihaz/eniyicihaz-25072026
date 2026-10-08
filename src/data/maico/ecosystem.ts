// Ecosystem deep-dive for the Maico brand page (/markalar/maico) —
// measurement-science heritage, Demant Group backing, and the three
// available placement categories. Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern). Icon values
// are restricted to the component's fixed set: brain | dna | globe |
// radar | bluetooth | smartphone | radio | layers.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const maicoEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "MAICO Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "urun-serileri",
      icon: "radar",
      navLabel: "Ürün Serileri",
      title: "MAICO İşitme Cihazı Serileri",
      lead: "MAICO; Bluetooth'lu, kulak arkası ve kulak içi seçenekleri bulunan işitme cihazı serileri sunar.",
      howItWorks:
        "Hangi serinin size uygun olduğu, işitme testi sonrasında ihtiyacınıza göre birlikte belirlenir.",
      advantages: [
        "Farklı yerleşim seçenekleri sunar",
        "İhtiyaca göre seri seçimi yapılabilir",
        "Merkezimizde ücretsiz cihaz seçimi desteğiyle değerlendirilebilir",
      ],
      models: ["MAICO Bluetooth Serisi", "MAICO Kulak Arkası Serisi"],
      expertNote: "Doğru seri, işitme testi sonucuna göre belirlenmelidir.",
    },
    {
      id: "teknik-servis",
      icon: "globe",
      navLabel: "Teknik Servis",
      title: "Merkezimizde MAICO Teknik Servisi",
      lead: "Sattığımız 18 markanın tamamında olduğu gibi MAICO cihazları için de Darıca'daki merkezimizde teknik servis veriyoruz.",
      howItWorks:
        "Cihazınız merkezimizde incelenir; teknik serviste teslim 3 gün içindedir ve ücret cihazın durumuna göre belirlenir.",
      advantages: [
        "MAICO cihazları için merkezimizde teknik servis",
        "Berlin merkezli MAICO Diagnostics GmbH ile Alman mühendislik standartlarını sürdürür",
        "Garanti işlemleri ücretsizdir",
      ],
      models: ["MAICO Bluetooth Serisi", "MAICO Kulak İçi Serisi"],
      expertNote: "Servis randevusu için bizi arayabilirsiniz.",
    },
    {
      id: "placement-options",
      icon: "bluetooth",
      navLabel: "Yerleşim Seçenekleri",
      title: "Bluetooth, Kulak Arkası ve Kulak İçi Seçenekler",
      lead: "MAICO, farklı ihtiyaç ve tercihlere uygun üç temel yerleşim kategorisinde sunulur.",
      howItWorks:
        "Odyometrist, işitme kaybınızın derecesine ve tercihinize göre Bluetooth'lu, kulak arkası veya kulak içi seçeneklerden size en uygun olanı önerir.",
      advantages: [
        "Farklı işitme kaybı derecelerine uygun seçenekler sunar",
        "Akıllı telefonlarla kablosuz bağlantı kurabilen modeller içerir",
        "Estetik tercihlere göre kulak içi seçenek de sunar",
      ],
      models: ["MAICO Bluetooth Serisi", "MAICO Kulak Arkası Serisi", "MAICO Kulak İçi Serisi"],
      expertNote: "Doğru yerleşim tipi, işitme testi sonucuna ve kişisel tercihe göre odyometrist tarafından belirlenmelidir.",
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorNavActiveBg: "rgb(16 35 63 / 0.1)",
  accentColorCalloutBg: "rgb(16 35 63 / 0.06)",
  accentColorCalloutLabel: "#0A1830",
};
