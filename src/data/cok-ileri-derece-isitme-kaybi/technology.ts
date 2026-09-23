// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// cok-ileri-derece-isitme-kaybi page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior feature/need page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "layers" for multi-channel maximum-power
// amplification; "radio" for feedback-cancellation signal processing;
// "radar" for directional-microphone beamforming (consistent with the
// Konuşma Odaklı page's mapping); "bluetooth" for phone/TV wireless
// connectivity.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cokIleriDereceIsitmeKaybiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Çok İleri Derece İşitme Kaybında Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "en-yuksek-amplifikasyon",
      icon: "layers",
      navLabel: "En Yüksek Amplifikasyon",
      title: "Çok Kanallı En Yüksek Kapasiteli Amplifikasyon",
      lead: "Ses frekans aralığı birden fazla kanala ayrılarak, her frekans bölgesi bu derecede mümkün olan en yüksek düzeyde amplifiye edilir.",
      howItWorks: "Cihaz, işitme profilinize göre farklı frekans bantlarında en yüksek düzeyde amplifikasyon uygular; bu sayede konuşmaların olabildiğince büyük bir kısmı algılanabilir hâle gelir.",
      advantages: [
        "Çok ileri derece kayıplarda mevcut en yüksek ses gücünü sunar",
        "İşitme profilinize özel bir ses deneyimi sunar",
        "Farklı ses kaynaklarında tutarlı performans sunar",
      ],
      models: ["Power BTE Modeller"],
      expertNote: "Amplifikasyon kapasitesi üreticiye göre değişir; ihtiyacınıza uygun model, kapsamlı bir odyoloji ve KBB değerlendirmesiyle belirlenir.",
    },
    {
      id: "gelismis-geri-besleme",
      icon: "radio",
      navLabel: "Gelişmiş Geri Besleme Engelleme",
      title: "Gelişmiş Geri Besleme (Feedback) Engelleme Teknolojisi",
      lead: "En yüksek amplifikasyon seviyelerinde oluşabilecek ıslık sesini tespit edip engelleyen gelişmiş bir sinyal işleme bileşeni.",
      howItWorks: "Cihaz, mikrofon ve hoparlör arasında oluşabilecek istenmeyen geri beslemeyi sürekli izler; bu tür bir sinyal tespit edildiğinde anlık olarak bastırır.",
      advantages: [
        "En yüksek amplifikasyonda bile ıslık sesi riskini azaltır",
        "Daha konforlu bir dinleme deneyimi sunar",
        "Cihaza olan güveni artırmaya yardımcı olur",
      ],
      models: ["Gelişmiş Geri Besleme Engellemeli Power BTE Modeller"],
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
      models: ["Yönlü Mikrofonlu Power BTE Modeller"],
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
      models: ["Bluetooth Özellikli Power BTE Modeller"],
      expertNote: "Detaylı bilgi için Bluetooth Özellikli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
  accentColorNavActiveBg: "rgb(146 64 14 / 0.1)",
  accentColorCalloutBg: "rgb(146 64 14 / 0.06)",
  accentColorCalloutLabel: "#78350f",
};
