// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// ileri-derece-isitme-kaybi page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior feature/need page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "layers" for multi-channel high-power amplification;
// "radio" for feedback-cancellation signal processing; "radar" for
// directional-microphone beamforming (consistent with the Konuşma Odaklı
// page's mapping); "bluetooth" for phone/TV wireless connectivity.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const ileriDereceIsitmeKaybiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "İleri Derece İşitme Kaybında Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "yuksek-kapasiteli-amplifikasyon",
      icon: "layers",
      navLabel: "Yüksek Kapasiteli Amplifikasyon",
      title: "Çok Kanallı Yüksek Kapasiteli Amplifikasyon",
      lead: "Ses frekans aralığı birden fazla kanala ayrılarak, her frekans bölgesi ihtiyaca göre güçlü bir şekilde amplifiye edilir.",
      howItWorks: "Cihaz, işitme profilinize göre farklı frekans bantlarında yüksek düzeyde amplifikasyon uygular; bu sayede konuşmalar daha anlaşılır hâle gelir.",
      advantages: [
        "İleri derece kayıplarda konuşmaları anlaşılır kılmaya yardımcı olur",
        "İşitme profilinize özel bir ses deneyimi sunar",
        "Farklı ses kaynaklarında tutarlı performans sunar",
      ],
      models: ["Yüksek Kapasiteli Güçlü RIC / BTE Modelleri"],
      expertNote: "Amplifikasyon kapasitesi üreticiye ve segment düzeyine göre değişir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "geri-besleme-engelleme",
      icon: "radio",
      navLabel: "Geri Besleme Engelleme",
      title: "Geri Besleme (Feedback) Engelleme Teknolojisi",
      lead: "Yüksek amplifikasyon seviyelerinde oluşabilecek ıslık sesini (feedback) tespit edip engelleyen bir sinyal işleme bileşeni.",
      howItWorks: "Cihaz, mikrofon ve hoparlör arasında oluşabilecek istenmeyen geri beslemeyi sürekli izler; bu tür bir sinyal tespit edildiğinde anlık olarak bastırır.",
      advantages: [
        "Yüksek amplifikasyonda bile ıslık sesi riskini azaltır",
        "Daha konforlu bir dinleme deneyimi sunar",
        "Cihaza olan güveni artırmaya yardımcı olur",
      ],
      models: ["Geri Besleme Engellemeli Güçlü Modeller"],
      expertNote: "Geri besleme engelleme etkinliği, kulak kalıbının uygunluğuna da bağlıdır; kalıp uyumu odyometristiniz tarafından değerlendirilir.",
    },
    {
      id: "yonlu-mikrofon",
      icon: "radar",
      navLabel: "Yönlü Mikrofon",
      title: "Gelişmiş Yönlü Mikrofon Desteği",
      lead: "Birden fazla mikrofon, önden gelen konuşmayı diğer yönlerden gelen seslere kıyasla öne çıkarır.",
      howItWorks: "Cihazdaki mikrofonlar arasındaki zamanlama farkları analiz edilerek sesin geldiği yön belirlenir; hedef yön görece güçlendirilir.",
      advantages: [
        "Kalabalık ortamlarda hedef konuşmayı öne çıkarır",
        "Genellikle otomatik olarak devreye girer",
        "Sosyal ortamlarda dinleme çabasını azaltmaya yardımcı olur",
      ],
      models: ["Yönlü Mikrofonlu Güçlü Modeller"],
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
      models: ["Bluetooth Özellikli Güçlü Modeller"],
      expertNote: "Detaylı bilgi için Bluetooth Özellikli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
  accentColorNavActiveBg: "rgb(87 83 78 / 0.1)",
  accentColorCalloutBg: "rgb(87 83 78 / 0.06)",
  accentColorCalloutLabel: "#44403c",
};
