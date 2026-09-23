// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// hafif-isitme-kaybi page. Renders through the shared BrandPageEcosystem
// component (nav + <details>/<summary> panels), same as every
// /isitme-cihazlari/* and /teknolojiler/* feature page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/bluetooth/
// smartphone/radio/layers) — "layers" for the physical open-fit dome
// construction; "brain" for basic automatic scene detection; "bluetooth"
// for phone/TV wireless connectivity; "smartphone" for app-based
// adjustment, all consistent with how prior pages map this fixed set.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const hafifIsitmeKaybiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Hafif İşitme Kaybında Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "acik-kulak-kalibi",
      icon: "layers",
      navLabel: "Açık Kulak Kalıbı",
      title: "Açık Kulak Kalıbı (Open-Fit) Teknolojisi",
      lead: "Kulak kanalını tam kapatmayan hafif ve delikli kalıp, doğal ses algısını korumaya yardımcı olur.",
      howItWorks: "Kulak kanalına yerleşen ince bir tüp veya reseptör, kanalı tamamen kapatmadan sesi iletir; bu sayede dış sesler de doğal yollarından kulağa ulaşmaya devam eder.",
      advantages: [
        "Kulak tıkanıklığı hissini azaltır",
        "Kendi sesinizi daha doğal duymanıza yardımcı olur",
        "Genellikle hafif ve konforlu bir kullanım sunar",
      ],
      models: ["Açık Kalıplı İnce RIC Modeller"],
      expertNote: "Açık kalıp uygunluğu, kulak kanalı yapınıza ve kaybın derecesine göre bir odyometrist tarafından değerlendirilir.",
    },
    {
      id: "otomatik-algilama",
      icon: "brain",
      navLabel: "Otomatik Ortam Algılama",
      title: "Temel Düzey Otomatik Ortam Algılama",
      lead: "Cihaz, bulunduğunuz ortamı temel düzeyde tanıyarak ayarlarını otomatik olarak uyarlar.",
      howItWorks: "Cihaz, ortam gürültü seviyesini analiz ederek sessiz ve gürültülü ortamlar arasında otomatik geçiş yapar.",
      advantages: [
        "Manuel program değişikliğine gerek bırakmaz",
        "Farklı ortamlarda tutarlı bir dinleme deneyimi sunar",
        "Kullanımı basit ve sezgiseldir",
      ],
      models: ["Otomatik Programlı Modeller"],
      expertNote: "Otomatik algılamanın kapsamı, daha gelişmiş yapay zeka destekli modellere kıyasla bu segmentte daha sınırlı olabilir.",
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
    {
      id: "uygulama-ayari",
      icon: "smartphone",
      navLabel: "Uygulama ile Ayar",
      title: "Akıllı Telefon Uygulamasıyla Kolay Ayar",
      lead: "Ses seviyesi ve program tercihleri, akıllı telefon uygulaması üzerinden kolayca değiştirilebilir.",
      howItWorks: "Cihaz, telefonunuzdaki uygulamaya Bluetooth üzerinden bağlanır; uygulama üzerinde yaptığınız değişiklikler anında cihaza iletilir.",
      advantages: [
        "Ayarları fark ettirmeden değiştirme imkânı",
        "Basit ve sezgisel bir arayüz sunar",
        "Ortam bazlı tercihleri kaydetme imkânı",
      ],
      models: ["Uygulama Kontrollü Modeller"],
      expertNote: "Detaylı bilgi için Uzaktan Kontrol Özellikleri sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorNavActiveBg: "rgb(219 39 119 / 0.1)",
  accentColorCalloutBg: "rgb(219 39 119 / 0.06)",
  accentColorCalloutLabel: "#be185d",
};
