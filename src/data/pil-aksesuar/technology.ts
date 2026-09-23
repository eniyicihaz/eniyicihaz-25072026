// "Teknolojiler" deep-dive hub for the /servis-bakim/pil-aksesuar
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "layers" for the zinc-air
// battery's physical/chemical composition; "radio" for the charging
// system's electrical nature (consistent with its electronic-function
// mapping elsewhere); "bluetooth" for wireless/inductive charging
// support; "smartphone" for the app-based battery-level tracking.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const pilAksesuarTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Pil ve Aksesuarlarda Kullanılan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz markasına ve modeline göre değişebilir.",
  items: [
    {
      id: "cinko-hava-pil-teknolojisi",
      icon: "layers",
      navLabel: "Çinko-Hava Pil Teknolojisi",
      title: "Çinko-Hava Pil Teknolojisi",
      lead: "Çinko-hava piller, havadaki oksijenle kimyasal bir reaksiyona girerek enerji üretir.",
      howItWorks: "Pilin arkasındaki koruyucu etiket çıkarıldığında hava pille temas eder ve pil aktif hale gelir.",
      advantages: [
        "Uzun süredir güvenilirliği kanıtlanmış bir teknolojidir",
        "Farklı boyut seçenekleriyle çoğu cihazla uyumludur",
        "Kolayca temin edilebilir",
      ],
      models: ["Çinko-Hava Pil Destekli Modeller"],
      expertNote: "Pil etiketi çıkarıldıktan sonra pilin tam aktif hale gelmesi birkaç dakika sürebilir.",
    },
    {
      id: "lityum-iyon-sarj-sistemi",
      icon: "radio",
      navLabel: "Lityum-İyon Şarj Sistemi",
      title: "Lityum-İyon Şarj Sistemi",
      lead: "Şarjlı modeller, günlük kullanım için yeterli enerjiyi depolayan dahili bir lityum-iyon pil kullanır.",
      howItWorks: "Cihaz, gece boyunca bir şarj ünitesine yerleştirilir; pil, ertesi gün için tam kapasiteye ulaşır.",
      advantages: [
        "Pil değiştirme ihtiyacını ortadan kaldırır",
        "Uzun vadede pil satın alma maliyetini azaltabilir",
        "Genellikle tam gün kullanım için yeterli kapasite sunar",
      ],
      models: ["Şarjlı Modeller"],
      expertNote: "Şarjlı pilin kullanım ömrü, cihaz markası ve modeline göre değişir.",
    },
    {
      id: "kablosuz-sarj-destegi",
      icon: "bluetooth",
      navLabel: "Kablosuz Şarj Desteği",
      title: "Kablosuz (İndüktif) Şarj Desteği",
      lead: "Bazı üst segment şarjlı modeller, kablo bağlantısı gerektirmeyen kablosuz şarj özelliği sunar.",
      howItWorks: "Cihaz, uyumlu bir şarj yatağına yerleştirilir; enerji, fiziksel bir bağlantı olmadan indüktif olarak aktarılır.",
      advantages: [
        "Bağlantı noktalarının aşınmasını azaltmaya yardımcı olur",
        "Şarj işlemini daha basit hale getirir",
        "Şık ve kompakt şarj çözümleri sunabilir",
      ],
      models: ["Kablosuz Şarj Destekli Modeller"],
      expertNote: "Kablosuz şarj desteği yalnızca belirli üst segment modellerde bulunur.",
    },
    {
      id: "uygulama-uzerinden-pil-takibi",
      icon: "smartphone",
      navLabel: "Uygulama Üzerinden Pil Takibi",
      title: "Akıllı Telefon Uygulaması Üzerinden Pil Takibi",
      lead: "Bazı modellerde, pil seviyenizi akıllı telefon uygulaması üzerinden takip edebilirsiniz.",
      howItWorks: "Cihaz, pil durumu bilgisini uygulamaya iletir; kalan pil süresi ekranınızda görüntülenir.",
      advantages: [
        "Pilin ne zaman biteceğini önceden bilmenizi sağlar",
        "Beklenmedik pil bitmelerini önlemeye yardımcı olur",
        "Şarjlı modellerde günlük planlamayı kolaylaştırır",
      ],
      models: ["Uygulama Destekli Pil Takibi"],
      expertNote: "Pil takibi özelliği, seçilen cihaz markası ve modeline göre değişir.",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorNavActiveBg: "rgb(202 138 4 / 0.1)",
  accentColorCalloutBg: "rgb(202 138 4 / 0.06)",
  accentColorCalloutLabel: "#a16207",
};
