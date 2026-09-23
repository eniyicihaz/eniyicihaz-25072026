// "Teknolojiler" deep-dive hub for the /neden-orijinal/
// uzun-omurlu-cihazlar page. Renders through the shared BrandPageEcosystem
// component (nav + <details>/<summary> panels), same as every prior
// page. icon values are limited to the component's fixed set (brain/dna/
// globe/radar/bluetooth/smartphone/radio/layers) — "layers" for
// certified physical components (consistent with its hardware/battery
// mapping elsewhere); "radar" for periodic diagnostic checkups
// (consistent with its detection/scanning mapping elsewhere); "globe"
// for the original spare-parts supply chain (consistent with its
// distribution-network mapping on Güvenilir Teknoloji); "brain" for
// long-term software support (consistent with its software mapping
// elsewhere).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const uzunOmurluCihazlarTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Uzun Ömürlü Kullanımda Sıkça Bir Arada Sunulan Güvenceler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "kaliteli-bilesenler",
      icon: "layers",
      navLabel: "Kaliteli Bileşenler",
      title: "Sertifikalı ve Test Edilmiş Bileşenler",
      lead: "Orijinal cihazlarda kullanılan bileşenler, üreticinin belirlediği kalite standartlarına uygun olarak üretilir ve test edilir.",
      howItWorks: "Her bileşen, üretim sürecinde dayanıklılık, nem direnci ve performans testlerinden geçirilir; bu testler cihazın uzun yıllar güvenilir çalışmasını hedefler.",
      advantages: [
        "Zamanla performans kaybını azaltmaya yardımcı olur",
        "Beklenmedik arıza riskini düşürür",
        "Cihazın genel kullanım ömrünü uzatabilir",
      ],
      models: ["Sertifikalı Bileşenli Modeller"],
      expertNote: "Bileşen kalitesi marka ve modele göre değişebilir; detaylı bilgi için bizimle iletişime geçebilirsiniz.",
    },
    {
      id: "periyodik-bakim",
      icon: "radar",
      navLabel: "Periyodik Bakım ve Kontrol",
      title: "Düzenli Profesyonel Kontrol Süreci",
      lead: "Düzenli aralıklarla yapılan profesyonel kontroller, olası sorunları büyümeden tespit etmeye yardımcı olur.",
      howItWorks: "Cihaz, periyodik ziyaretlerde uzman tarafından incelenir; performans ölçümleri yapılır ve gerekiyorsa küçük ayarlamalar veya temizlik uygulanır.",
      advantages: [
        "Küçük sorunların erken fark edilmesini sağlar",
        "Cihazın performansını uzun süre korumaya yardımcı olur",
        "Beklenmedik arıza riskini azaltabilir",
      ],
      models: ["Periyodik Bakım Programı"],
      expertNote: "Önerilen bakım sıklığı marka ve kullanım yoğunluğuna göre değişebilir; size uygun program klinikte belirlenir.",
    },
    {
      id: "orijinal-yedek-parca",
      icon: "globe",
      navLabel: "Orijinal Yedek Parça Tedariki",
      title: "Yetkili Kanaldan Yedek Parça Tedariki",
      lead: "Yetkili distribütörlük anlaşmalarımız sayesinde, ihtiyaç duyulan orijinal yedek parçalara uzun yıllar erişim sağlayabiliyoruz.",
      howItWorks: "Aşınan veya arızalanan parçalar, üreticinin resmi tedarik zinciri üzerinden temin edilerek orijinal parçalarla değiştirilir.",
      advantages: [
        "Cihazın performansını orijinal seviyede korumaya yardımcı olur",
        "Uyumsuz parça kullanımı riskini ortadan kaldırır",
        "Uzun vadeli kullanım için güvence sağlar",
      ],
      models: ["Orijinal Yedek Parça Desteği Olan Modeller"],
      expertNote: "Yedek parça temin süresi, marka ve modele göre değişebilir.",
    },
    {
      id: "uzun-vadeli-yazilim-destegi",
      icon: "brain",
      navLabel: "Uzun Vadeli Yazılım Desteği",
      title: "Uzun Vadeli Yazılım Güncelleme Desteği",
      lead: "Orijinal cihazlar, üreticinin sunduğu uzun vadeli yazılım güncellemeleri ve destek programlarından faydalanabilir.",
      howItWorks: "Cihaz, üreticinin belirlediği destek süresi boyunca yazılım güncellemeleri ve performans iyileştirmeleri alabilir.",
      advantages: [
        "Cihazın güncel ve optimize performansla çalışmasını sağlar",
        "Yeni özelliklerden zamanında faydalanılabilir",
        "Cihazın kullanım ömrünü dolaylı olarak uzatabilir",
      ],
      models: ["Uzun Vadeli Yazılım Destekli Modeller"],
      expertNote: "Yazılım destek süresi marka ve modele göre değişir; net bilgi satış sırasında paylaşılır.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorNavActiveBg: "rgb(5 150 105 / 0.1)",
  accentColorCalloutBg: "rgb(5 150 105 / 0.06)",
  accentColorCalloutLabel: "#047857",
};
