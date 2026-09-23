// "Teknolojiler" deep-dive hub for the /servis-bakim/teknik-servis
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radar" for the in-house
// diagnostic testing (consistent with its detection/scanning mapping
// across the site); "globe" for the manufacturer's authorized service
// network (consistent with its cross-location/network mapping
// elsewhere); "layers" for original replacement parts' physical
// composition; "smartphone" for the digital repair-tracking system.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const teknikServisTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Teknik Serviste Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz markasına ve sorunun türüne göre değişebilir.",
  items: [
    {
      id: "yerinde-teshis",
      icon: "radar",
      navLabel: "Yerinde Teşhis",
      title: "Yerinde Teknik Teşhis",
      lead: "Kliniğimizde, cihazınızın temel işlevlerini test eden bir ön teşhis yapılır.",
      howItWorks: "Cihaz, ses çıkışı, mikrofon ve bağlantı gibi temel işlevler açısından test edilir; sorunun kaynağı belirlenmeye çalışılır.",
      advantages: [
        "Birçok basit sorunun hızlıca tespit edilmesini sağlar",
        "Gereksiz yere üreticiye gönderim yapılmasını önleyebilir",
        "Size hızlı bir ilk geri bildirim sunar",
      ],
      models: ["Yerinde Teşhis Süreci"],
      expertNote: "Bazı sorunlar, yerinde teşhis sonrası kapsamlı bir üretici incelemesi gerektirebilir.",
    },
    {
      id: "uretici-servis-agi",
      icon: "globe",
      navLabel: "Üretici Servis Ağı",
      title: "Yetkili Üretici Servis Ağı",
      lead: "Yerinde çözülemeyen sorunlar için cihazınız, üreticinin yetkili servis ağına gönderilir.",
      howItWorks: "Cihazınız, ilgili markanın yetkili servis merkezine iletilir; burada uzman teknisyenler tarafından detaylı incelenir.",
      advantages: [
        "Üreticinin kendi uzmanlığından faydalanmanızı sağlar",
        "Karmaşık teknik sorunların doğru şekilde ele alınmasına yardımcı olur",
        "Garanti kapsamındaki onarımlar için gerekli resmi süreçtir",
      ],
      models: ["Yetkili Servis Ağı"],
      expertNote: "Üretici servisine gönderim süresi, marka ve modele göre değişebilir.",
    },
    {
      id: "orijinal-yedek-parca",
      icon: "layers",
      navLabel: "Orijinal Yedek Parça",
      title: "Orijinal Yedek Parça Kullanımı",
      lead: "Onarımlarda, cihazınızın markasına uygun orijinal yedek parçalar kullanılır.",
      howItWorks: "Değişmesi gereken parçalar, üreticinin kendi orijinal parça stoğundan temin edilerek cihaza uygulanır.",
      advantages: [
        "Cihazınızın performansının korunmasına yardımcı olur",
        "Garanti şartlarına uygun bir onarım süreci sağlar",
        "Uzun vadeli güvenilirliği destekler",
      ],
      models: ["Orijinal Parça Onarımı"],
      expertNote: "Orijinal parça bulunabilirliği, cihazın yaşına ve model durumuna göre değişebilir.",
    },
    {
      id: "onarim-takip-sistemi",
      icon: "smartphone",
      navLabel: "Onarım Takip Sistemi",
      title: "Onarım Takip Sistemi",
      lead: "Cihazınızın onarım sürecindeki durumu hakkında bilgi alabileceğiniz bir takip sistemi kullanılır.",
      howItWorks: "Cihazınız teknik servise alındığında bir takip kaydı oluşturulur; sürecin aşamaları hakkında sizinle iletişime geçilir.",
      advantages: [
        "Onarım sürecinizin şeffaf bir şekilde takip edilmesini sağlar",
        "Beklenmedik gecikmelerde sizi bilgilendirmemize imkân tanır",
        "Teslim sürecini daha öngörülebilir hale getirir",
      ],
      models: ["Onarım Takip Kaydı"],
      expertNote: "Detaylı bilgi için Onarım Takibi sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorNavActiveBg: "rgb(220 38 38 / 0.1)",
  accentColorCalloutBg: "rgb(220 38 38 / 0.06)",
  accentColorCalloutLabel: "#b91c1c",
};
