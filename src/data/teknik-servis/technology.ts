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
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Kapsam, cihaz markasına ve sorunun türüne göre değişebilir.",
  items: [
    {
      id: "yerinde-teshis",
      icon: "radar",
      navLabel: "Merkezde İlk Değerlendirme",
      title: "Merkezde İlk Değerlendirme",
      lead: "Cihazınızın temel işlevlerini inceleyen ilk değerlendirme merkezimizde yapılır; bazı sorunlar burada çözülebilir.",
      howItWorks: "Cihaz, ses çıkışı, mikrofon ve bağlantı gibi temel işlevler açısından incelenir; çözülebilen sorunlarda teknik servise gönderim gerekmeyebilir.",
      advantages: [
        "Sorunun kaynağı hakkında ilk bilgiyi sağlar",
        "Merkezde çözülebilecek sorunların belirlenmesine yardımcı olur",
        "Teknik servise gönderim gerekip gerekmediği belirlenir",
      ],
      models: ["İlk Değerlendirme"],
      expertNote: "Bazı sorunlar, merkezdeki ilk değerlendirmeden sonra teknik serviste kapsamlı bir inceleme gerektirebilir.",
    },
    {
      id: "uretici-servis-agi",
      icon: "globe",
      navLabel: "Teknik Servis",
      title: "Teknik Serviste İlk Teknik Kontrol",
      lead: "Merkezde çözülemeyen cihaz teknik servise gönderilir; arıza teknik serviste yapılan ilk teknik kontrolle daha net belirlenir.",
      howItWorks: "Cihazınız merkezimizde kayda alınır ve teknik servise gönderilir; ilk teknik kontrolden sonra tahmini onarım süresi ve varsa ücret size bildirilir.",
      advantages: [
        "18 markanın tamamı için üretici servis yetkisi bulunur",
        "Karmaşık teknik sorunların teknik serviste ele alınmasına imkân tanır",
        "Garanti kapsamındaki onarımlar için gereken süreci yürütür",
      ],
      models: ["Teknik Servis"],
      expertNote: "Teknik serviste geçen süre, marka ve modele göre değişebilir.",
    },
    {
      id: "yedek-parca",
      icon: "layers",
      navLabel: "Yedek Parça",
      title: "Yedek Parça ve Bulunabilirlik",
      lead: "Parça değişimi gereken onarımlarda parçanın bulunabilirliği ve temin süresi marka ve modele göre değişebilir.",
      howItWorks: "Değişmesi gereken parça belirlendikten sonra temin edilir; varsa ücret cihazın durumuna göre belirlenir ve teknik servisteki ilk teknik kontrolden sonra bildirilir.",
      advantages: [
        "Cihaza uygun parçanın belirlenmesini sağlar",
        "Garanti şartlarına uygun bir onarım süreci yürütülür",
        "Parça ihtiyacı ve tahmini süre, ilk teknik kontrolden sonra bildirilir",
      ],
      models: ["Parça Değişimi Gerektiren Onarımlar"],
      expertNote: "Parça bulunabilirliği, cihazın yaşına ve model durumuna göre değişebilir.",
    },
    {
      id: "onarim-takip-sistemi",
      icon: "smartphone",
      navLabel: "Dijital Servis Kaydı",
      title: "Dijital Servis Kaydı",
      lead: "Cihazınız teslim edildiğinde dijital bir servis kaydı oluşturulur.",
      howItWorks: "Gerektiğinde personelimiz SMS veya WhatsApp üzerinden sizi manuel olarak bilgilendirir; güncel durumu telefonla arayarak veya WhatsApp'tan yazarak öğrenebilirsiniz.",
      advantages: [
        "Servis sürecinin kayıt altında tutulmasını sağlar",
        "Durum sorduğunuzda güncel bilginin paylaşılmasına yardımcı olur",
      ],
      models: ["Dijital Servis Kaydı"],
      expertNote: "Kayıt, kullanıcının internetten görüntüleyebileceği bir sistem değildir; ayrıntılar Onarım Takibi sayfamızdadır.",
    },
  ],
  noteLabel: "Servis Bilgisi",
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
  accentColorNavActiveBg: "rgb(220 38 38 / 0.1)",
  accentColorCalloutBg: "rgb(220 38 38 / 0.06)",
  accentColorCalloutLabel: "#b91c1c",
};
