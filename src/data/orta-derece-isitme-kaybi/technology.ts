// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// orta-derece-isitme-kaybi page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior feature/need page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "layers" for multi-channel amplification; "brain" for
// automatic scene detection; "radar" for directional-microphone
// beamforming (consistent with the Konuşma Odaklı page's mapping);
// "bluetooth" for phone/TV wireless connectivity.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const ortaDereceIsitmeKaybiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Orta Derece İşitme Kaybında Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "dengeli-amplifikasyon",
      icon: "layers",
      navLabel: "Dengeli Amplifikasyon",
      title: "Çok Kanallı Dengeli Amplifikasyon",
      lead: "Ses frekans aralığı birden fazla kanala ayrılarak, her frekans bölgesi ihtiyaca göre ayrı ayrı güçlendirilir.",
      howItWorks: "Cihaz, işitme profilinize göre farklı frekans bantlarında farklı düzeyde amplifikasyon uygular; bu sayede ses daha dengeli ve doğal algılanır.",
      advantages: [
        "İşitme profilinize özel bir ses deneyimi sunar",
        "Aşırı yükseltme yapılmadan yeterli netlik sağlar",
        "Farklı ses kaynaklarında tutarlı performans sunar",
      ],
      models: ["Çok Kanallı Standart RIC / BTE Modelleri"],
      expertNote: "Kanal sayısı ve hassasiyet üreticiye ve segment düzeyine göre değişir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "otomatik-algilama",
      icon: "brain",
      navLabel: "Otomatik Ortam Algılama",
      title: "Otomatik Ortam Algılama",
      lead: "Cihaz, bulunduğunuz ortamı analiz ederek ayarlarını otomatik olarak uyarlar.",
      howItWorks: "Cihaz, ortam gürültü seviyesini ve türünü analiz ederek sessiz, gürültülü ve kalabalık ortamlar arasında otomatik geçiş yapar.",
      advantages: [
        "Manuel program değişikliğine gerek bırakmaz",
        "Farklı ortamlarda tutarlı bir dinleme deneyimi sunar",
        "Kullanımı basit ve sezgiseldir",
      ],
      models: ["Otomatik Programlı Modeller"],
      expertNote: "Detaylı bilgi için Yapay Zeka Destekli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "yonlu-mikrofon",
      icon: "radar",
      navLabel: "Yönlü Mikrofon",
      title: "Yönlü Mikrofon Desteği",
      lead: "Birden fazla mikrofon, önden gelen konuşmayı diğer yönlerden gelen seslere kıyasla öne çıkarır.",
      howItWorks: "Cihazdaki mikrofonlar arasındaki zamanlama farkları analiz edilerek sesin geldiği yön belirlenir; hedef yön görece güçlendirilir.",
      advantages: [
        "Kalabalık ortamlarda hedef konuşmayı öne çıkarır",
        "Genellikle otomatik olarak devreye girer",
        "Sosyal ortamlarda dinleme çabasını azaltmaya yardımcı olur",
      ],
      models: ["Yönlü Mikrofonlu Modeller"],
      expertNote: "Detaylı bilgi için Konuşma Odaklı Teknolojiler sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "kablosuz-baglanti",
      icon: "bluetooth",
      navLabel: "Kablosuz Bağlantı",
      title: "Telefon ve TV ile Kablosuz Bağlantı",
      lead: "Bluetooth özellikli modeller, telefon görüşmelerini ve TV sesini doğrudan cihaza aktarabilir.",
      howItWorks: "Cihaz, telefon veya TV yayın aksesuarıyla eşleştirilir; ses doğrudan cihaza kablosuz olarak aktarılır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazdan dinleme",
        "TV sesini doğrudan ve net alma",
        "Ayrı bir kulaklık taşıma ihtiyacını ortadan kaldırır",
      ],
      models: ["Bluetooth Özellikli Modeller"],
      expertNote: "Detaylı bilgi için Bluetooth Özellikli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorNavActiveBg: "rgb(22 163 74 / 0.1)",
  accentColorCalloutBg: "rgb(22 163 74 / 0.06)",
  accentColorCalloutLabel: "#15803d",
};
