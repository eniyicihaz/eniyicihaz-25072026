// "Teknolojiler" deep-dive hub for the /teknolojiler/konusma-odakli page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* and
// /teknolojiler/* feature page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "radar" is a direct, literal fit here for directional
// beamforming (its first non-stretched use since the Yapay Zeka page's
// "brain"); "bluetooth" for the ear-to-ear wireless sync link; "dna" for
// leveraging the ear's own natural anatomy (same reuse the Görünmez page
// applies to its own anatomy-related item); "brain" for the AI speaker-
// separation component, cross-referencing the Yapay Zeka Destekli page.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const konusmaOdakliTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Konuşma Odaklı Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "yonlu-mikrofon",
      icon: "radar",
      navLabel: "Yönlü Mikrofon Sistemi",
      title: "Yönlü Mikrofon (Beamforming) Sistemi",
      lead: "Birden fazla mikrofon arasındaki zamanlama ve seviye farkları analiz edilerek sesin geldiği yön belirlenir ve hedef yön öne çıkarılır.",
      howItWorks: "Cihazdaki iki veya daha fazla mikrofona ulaşan ses arasındaki milisaniyelik zamanlama farkları işlenir; önden gelen sinyal güçlendirilir, diğer yönlerden gelen sinyaller görece azaltılır.",
      advantages: [
        "Kalabalık ortamlarda hedef konuşmayı öne çıkarır",
        "Genellikle otomatik olarak devreye girer",
        "Farklı üreticilerde farklı hassasiyet seviyelerinde sunulur",
      ],
      models: ["Yönlü Mikrofonlu Modeller"],
      expertNote: "Yönlü mikrofon hassasiyeti üreticiye ve segment düzeyine göre değişir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "binaural-senkron",
      icon: "bluetooth",
      navLabel: "Binaural Senkronizasyon",
      title: "Kulaktan Kulağa Kablosuz Senkronizasyon",
      lead: "Sağ ve sol cihaz, kablosuz bir bağlantı üzerinden sürekli veri alışverişi yaparak ortak bir yön kararı oluşturur.",
      howItWorks: "İki cihaz, algıladıkları ses bilgisini gerçek zamanlı olarak birbirine iletir; bu ortak veri, sesin geldiği yönün daha isabetli belirlenmesini sağlar.",
      advantages: [
        "Tek cihaza göre daha isabetli yön belirleme",
        "İki kulak arasında tutarlı bir dinleme deneyimi",
        "Çift taraflı kullanıcılarda ek fayda sağlar",
      ],
      models: ["Binaural Senkronize Modeller"],
      expertNote: "Binaural senkronizasyon, yalnızca iki kulakta da cihaz kullanan kişilerde tam olarak devreye girer.",
    },
    {
      id: "dogal-anatomi",
      icon: "dna",
      navLabel: "Doğal Kulak Anatomisi",
      title: "Kulağın Doğal Yön Belirleme Özelliğinden Faydalanma",
      lead: "Bazı modeller, mikrofonu kulak kanalına daha yakın konumlandırarak kulak kepçesinin doğal ses yönlendirme özelliğinden faydalanır.",
      howItWorks: "Mikrofon, kulak kepçesinin doğal filtreleme etkisinin korunduğu bir noktaya yerleştirilir; bu sayede beynin doğal yön belirleme mekanizması desteklenir.",
      advantages: [
        "Daha doğal bir yön algısı sunmayı hedefler",
        "Beynin kendi işitsel işleme yeteneğini destekler",
        "Ek bir dijital işleme adımına daha az bağımlıdır",
      ],
      models: ["Doğal Yön Algılama Destekli Modeller"],
      expertNote: "Bu yaklaşım her markada aynı şekilde uygulanmaz; kapsamı model bazında değerlendirilir.",
    },
    {
      id: "yapay-zeka-ayristirma",
      icon: "brain",
      navLabel: "Yapay Zeka Ayrıştırma",
      title: "Yapay Zeka Destekli Konuşmacı Ayrıştırma",
      lead: "Derin öğrenme tabanlı algoritmalar, birden fazla konuşmacı arasından hedef konuşmayı daha isabetli bir şekilde ayırt etmeyi hedefler.",
      howItWorks: "Sinir ağı, ses sinyalindeki konuşma özelliklerini analiz ederek farklı konuşmacıları birbirinden ayırt etmeye ve hedef konuşmacıyı önceliklendirmeye çalışır.",
      advantages: [
        "Birden fazla konuşmacı olan ortamlarda ek destek sağlar",
        "Zamanla gelişen algoritmalarla güncellenebilir",
        "Yönlü mikrofon sistemiyle birlikte çalışır",
      ],
      models: ["Yapay Zeka Destekli Üst Segment Modeller"],
      expertNote: "Bu özellik yapay zeka destekli işlemcilere sahip modellerde bulunur; detaylı bilgi için Yapay Zeka Destekli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorNavActiveBg: "rgb(234 88 12 / 0.1)",
  accentColorCalloutBg: "rgb(234 88 12 / 0.06)",
  accentColorCalloutLabel: "#c2410c",
};
