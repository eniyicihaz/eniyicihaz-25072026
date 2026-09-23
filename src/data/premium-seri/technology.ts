// "Teknolojiler" deep-dive hub for the /segmentler/premium-seri page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for AI-driven sound
// processing (consistent with its mapping across the site); "bluetooth"
// for full wireless connectivity; "radar" for advanced directional
// microphones (consistent with its detection/beamforming mapping
// elsewhere); "smartphone" for app-based fine-tuning (consistent with
// its app/UI mapping elsewhere). The first three items cross-reference
// the devicesMega/teknolojiler pages that already own those
// technologies' full deep dives rather than re-explaining them here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const premiumSeriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Premium Seride Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "yapay-zeka-ses-isleme",
      icon: "brain",
      navLabel: "Yapay Zeka Destekli Ses İşleme",
      title: "Yapay Zeka Destekli Gerçek Zamanlı Ses İşleme",
      lead: "Premium seri modeller, ortamı gerçek zamanlı olarak analiz eden yapay zeka destekli ses işleme sistemleri kullanır.",
      howItWorks: "Cihazdaki sensörler ortam gürültüsünü ve konuşma yoğunluğunu sürekli analiz eder; yapay zeka algoritmaları en uygun dinleme profilini otomatik olarak seçer.",
      advantages: [
        "Karmaşık ortamlarda bile net ses ayrımı sağlar",
        "Manuel ayar ihtiyacını azaltır",
        "Farklı ortamlara hızlı uyum sağlar",
      ],
      models: ["Yapay Zeka Destekli Premium Modeller"],
      expertNote: "Detaylı bilgi için Yapay Zeka Destekli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "tam-kablosuz-baglanti",
      icon: "bluetooth",
      navLabel: "Tam Kablosuz Bağlantı",
      title: "Telefon, TV ve Diğer Cihazlarla Tam Bağlantı",
      lead: "Premium seri modeller, telefon, TV ve diğer uyumlu cihazlarla kesintisiz kablosuz bağlantı sağlar.",
      howItWorks: "Cihaz, uyumlu aksesuar veya doğrudan Bluetooth bağlantısı üzerinden ses kaynaklarına bağlanır; ses doğrudan cihaza aktarılır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazdan dinleme imkânı sunar",
        "TV sesini net ve doğrudan alma imkânı sağlar",
        "Ayrı bir kulaklık taşıma ihtiyacını ortadan kaldırır",
      ],
      models: ["Tam Bağlantılı Premium Modeller"],
      expertNote: "Detaylı bilgi için Kablosuz Bağlantı Özellikleri sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "gelismis-yonlu-mikrofon",
      icon: "radar",
      navLabel: "Gelişmiş Yönlü Mikrofon",
      title: "Çok Mikrofonlu Gelişmiş Yönlü Sistem",
      lead: "Premium seri modeller, birden fazla mikrofon kullanan gelişmiş yönlü sistemlerle hedef konuşmayı öne çıkarır.",
      howItWorks: "Mikrofonlar arasındaki zamanlama farkları analiz edilerek sesin geldiği yön belirlenir; hedef yön görece güçlendirilir.",
      advantages: [
        "Kalabalık ortamlarda hedef konuşmayı öne çıkarır",
        "Genellikle otomatik olarak devreye girer",
        "Dinleme çabasını azaltmaya yardımcı olur",
      ],
      models: ["Gelişmiş Yönlü Mikrofonlu Premium Modeller"],
      expertNote: "Detaylı bilgi için Konuşma Odaklı Teknolojiler sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "detayli-kisisellestirme",
      icon: "smartphone",
      navLabel: "Detaylı Kişiselleştirme",
      title: "Uygulama Üzerinden Detaylı Kişiselleştirme",
      lead: "Premium seri modeller, mobil uygulama üzerinden detaylı kişiselleştirme imkânı sunar.",
      howItWorks: "Kullanıcı, uyumlu mobil uygulama üzerinden ses profillerini, program tercihlerini ve çevresel ayarları kendi ihtiyacına göre özelleştirebilir.",
      advantages: [
        "Cihazı kendi tercihlerinize göre ince ayarlamanıza olanak tanır",
        "Farklı ortamlar için özel profiller oluşturmanızı sağlar",
        "Odyometristinizle birlikte uzaktan ayar imkânı sunabilir",
      ],
      models: ["Uygulama Destekli Premium Modeller"],
      expertNote: "Uygulama özellikleri marka ve modele göre değişebilir.",
    },
  ],
  accentColor: "#eab308",
  accentColorBadgeBg: "rgb(234 179 8 / 0.08)",
  accentColorBadgeBorder: "rgb(234 179 8 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorNavActiveBg: "rgb(234 179 8 / 0.1)",
  accentColorCalloutBg: "rgb(234 179 8 / 0.06)",
  accentColorCalloutLabel: "#a16207",
};
