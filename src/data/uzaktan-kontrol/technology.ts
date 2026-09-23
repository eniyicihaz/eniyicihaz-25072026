// "Teknolojiler" deep-dive hub for the /teknolojiler/uzaktan-kontrol
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* and
// /teknolojiler/* feature page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "smartphone" is a direct, literal fit for app control;
// "globe" for the internet/video-call-based remote-support session;
// "radio" for the physical remote's wireless link to the device
// (consistent with the Kablosuz Bağlantı page's telecoil mapping);
// "brain" for the AI-assisted suggestion engine, cross-referencing the
// Yapay Zeka Destekli page.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const uzaktanKontrolTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Uzaktan Kontrol Özelliklerinde Öne Çıkan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "uygulama-kontrolu",
      icon: "smartphone",
      navLabel: "Uygulama ile Kontrol",
      title: "Akıllı Telefon Uygulamasıyla Doğrudan Kontrol",
      lead: "Ses seviyesi ve program değişikliği, akıllı telefon uygulaması üzerinden doğrudan yapılabilir.",
      howItWorks: "Cihaz, telefonunuzdaki uygulamaya Bluetooth üzerinden bağlanır; uygulama üzerinde yaptığınız değişiklikler anında cihaza iletilir.",
      advantages: [
        "Ayrı bir kumandaya ihtiyaç duymadan hızlı ayar",
        "Ayarları fark ettirmeden değiştirme imkânı",
        "Genellikle sezgisel ve kolay bir arayüz sunar",
      ],
      models: ["Uygulama Kontrollü Modeller"],
      expertNote: "Uygulama özellikleri ve arayüzü üreticiye göre değişir; teslim sırasında size uygun uygulama gösterilir.",
    },
    {
      id: "uzaktan-destek",
      icon: "globe",
      navLabel: "Uzaktan Destek (TeleCare)",
      title: "Video Görüşme Üzerinden Uzaktan Destek (TeleCare)",
      lead: "Odyometristiniz, video görüşme sırasında cihazınızın temel ayarlarını uzaktan güncelleyebilir.",
      howItWorks: "Görüşme sırasında cihazınız uygulama üzerinden odyometristinizin ekranına bağlanır; odyometrist, sizin geri bildiriminize göre programlamada gerekli güncellemeleri uzaktan yapar.",
      advantages: [
        "Kliniğe gelmeden temel ayar güncellemesi",
        "Küçük değişiklikler için zaman tasarrufu sağlar",
        "Kliniğe uzak yaşayan kullanıcılar için erişim kolaylığı",
      ],
      models: ["Uzaktan Destek (TeleCare) Uyumlu Modeller"],
      expertNote: "Uzaktan destek her ayarı kapsamaz; bazı durumlarda yüz yüze bir randevu gerekebilir.",
    },
    {
      id: "fiziksel-kumanda",
      icon: "radio",
      navLabel: "Fiziksel Uzaktan Kumanda",
      title: "Ayrı Fiziksel Uzaktan Kumanda Bağlantısı",
      lead: "Akıllı telefon kullanmayan kullanıcılar için, basit ve büyük tuşlu ayrı bir uzaktan kumanda seçeneği sunulabilir.",
      howItWorks: "Kumanda, cihazla kablosuz olarak eşleştirilir; üzerindeki büyük tuşlarla ses seviyesi ve program değişikliği doğrudan yapılabilir.",
      advantages: [
        "Akıllı telefon gerektirmeden kullanılabilir",
        "Büyük tuşları sayesinde el becerisi sınırlı kullanıcılar için kolaydır",
        "Basit ve sezgisel bir arayüz sunar",
      ],
      models: ["Fiziksel Uzaktan Kumandalı Modeller"],
      expertNote: "Fiziksel kumanda genellikle ayrıca temin edilir; her marka ve modelde bulunmayabilir.",
    },
    {
      id: "yapay-zeka-onerileri",
      icon: "brain",
      navLabel: "Yapay Zeka Destekli Öneriler",
      title: "Yapay Zeka Destekli Uzaktan Ayar Önerileri",
      lead: "Bazı gelişmiş uygulamalar, kullanıcı geri bildirimlerini analiz ederek odyometriste otomatik ayar önerileri sunar.",
      howItWorks: "Uygulama, kullanıcının manuel yaptığı ayar değişikliklerini ve ortam verilerini toplar; bu veriler analiz edilerek odyometriste olası ayar önerileri sunulur.",
      advantages: [
        "Daha veri odaklı bir ayar süreci",
        "Odyometristin karar verme sürecini destekler",
        "Zamanla daha kişiselleştirilmiş öneriler sunabilir",
      ],
      models: ["Yapay Zeka Destekli Uzaktan Destek Sistemleri"],
      expertNote: "Bu özellik yapay zeka destekli işlemcilere sahip modellerde bulunur; detaylı bilgi için Yapay Zeka Destekli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorNavActiveBg: "rgb(2 132 199 / 0.1)",
  accentColorCalloutBg: "rgb(2 132 199 / 0.06)",
  accentColorCalloutLabel: "#0369a1",
};
