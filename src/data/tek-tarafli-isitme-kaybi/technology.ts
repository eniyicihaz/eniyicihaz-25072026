// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior feature/need page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "globe" for the side-to-side wireless transmission of
// CROS/BiCROS (consistent with the Kablosuz Bağlantı page's own mapping
// for the same technology); "radar" for directional-microphone
// beamforming (consistent with the Konuşma Odaklı page); "brain" for
// automatic two-sided sound balancing; "bluetooth" for phone/TV wireless
// connectivity. The CROS/BiCROS item deliberately cross-references the
// Kablosuz Bağlantı page's own deep dive rather than re-explaining the
// same technology's internals.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const tekTarafliIsitmeKaybiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Tek Taraflı İşitme Kaybında Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "cros-bicros",
      icon: "globe",
      navLabel: "CROS / BiCROS Sistemleri",
      title: "CROS ve BiCROS Kablosuz Aktarım Sistemleri",
      lead: "Kötü duyan taraftaki mikrofon topladığı sesi, iyi duyan kulaktaki cihaza kablosuz olarak aktarır.",
      howItWorks: "Kötü duyan taraftaki cihaz bir mikrofon ve verici görevi görür; topladığı sesi kablosuz olarak iyi duyan taraftaki alıcı cihaza iletir.",
      advantages: [
        "İki taraflı ses farkındalığı sağlamaya yardımcı olur",
        "Kötü duyan taraftan gelen seslerin fark edilmesine yardımcı olur",
        "Günlük sosyal ve iş ortamlarında ek destek sağlar",
      ],
      models: ["CROS / BiCROS Sistemleri"],
      expertNote: "CROS/BiCROS sistemlerinin çalışma prensibi hakkında detaylı bilgi için Kablosuz Bağlantı Özellikleri sayfamızı inceleyebilirsiniz.",
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
      models: ["Yönlü Mikrofonlu Modeller"],
      expertNote: "Detaylı bilgi için Konuşma Odaklı Teknolojiler sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "otomatik-dengeleme",
      icon: "brain",
      navLabel: "Otomatik Ses Dengeleme",
      title: "İki Taraf Arasında Otomatik Ses Dengeleme",
      lead: "Bazı sistemler, iyi duyan kulağa aktarılan sesin seviyesini ortama göre otomatik olarak dengeler.",
      howItWorks: "Cihaz, kötü duyan taraftan gelen sesin seviyesini ve iyi duyan kulağın algıladığı toplam sesi analiz ederek aktarım seviyesini otomatik olarak ayarlar.",
      advantages: [
        "Aşırı yüklenmeyi önlemeye yardımcı olur",
        "Farklı ortamlarda tutarlı bir dinleme deneyimi sunar",
        "Manuel ayar ihtiyacını azaltır",
      ],
      models: ["Otomatik Dengelemeli CROS / BiCROS Modeller"],
      expertNote: "Dengeleme hassasiyeti üreticiye ve modele göre değişir; ihtiyacınıza uygun sistem uzman değerlendirmesiyle belirlenir.",
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
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
  accentColorNavActiveBg: "rgb(82 82 91 / 0.1)",
  accentColorCalloutBg: "rgb(82 82 91 / 0.06)",
  accentColorCalloutLabel: "#3f3f46",
};
