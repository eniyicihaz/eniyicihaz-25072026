// "Teknolojiler" deep-dive hub for the /ihtiyaciniza-gore/
// yaslilar-icin-cihazlar page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior feature/need page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "smartphone" for the simple-controls/app design item;
// "globe" for RemoteCare's internet-based remote-support link
// (consistent with the CROS/BiCROS "wireless transmission" mapping on
// the Tek Taraflı page); "brain" for automatic AI-driven environment
// detection (consistent with the Otomatik Dengeleme/Otomatik Ortam Ayarı
// mapping on prior pages); "layers" for the rechargeable-case item. Each
// item's expertNote cross-references the page that already owns that
// technology's full deep dive, rather than re-explaining it here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const yaslilarIcinCihazlarTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Yaşlı Kullanıcılar İçin Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "kolay-kullanim",
      icon: "smartphone",
      navLabel: "Kolay Kullanım Tasarımı",
      title: "Büyük Kontroller ve Sade Menü Tasarımı",
      lead: "Az sayıda ayar seçeneği ve büyük, kolay erişilebilir kontroller günlük kullanımı kolaylaştırmaya yardımcı olabilir.",
      howItWorks: "Cihaz, karmaşık menüler yerine sınırlı sayıda temel işleve odaklanacak şekilde tasarlanır; ses düzeyi ve program değişimi tek bir düğme veya basit bir mobil uygulama üzerinden yapılabilir.",
      advantages: [
        "Günlük kullanımda karmaşayı azaltmaya yardımcı olur",
        "Yanlışlıkla ayar değiştirme riskini azaltabilir",
        "Yeni bir cihaza alışma sürecini kolaylaştırabilir",
      ],
      models: ["Kolay Kullanımlı Modeller"],
      expertNote: "Kullanım kolaylığı seviyesi üreticiye ve modele göre değişir; size en uygun seçenek bir odyometrist ile birlikte belirlenir.",
    },
    {
      id: "aile-destekli-uzaktan-ayar",
      icon: "globe",
      navLabel: "Aile Destekli Uzaktan Ayar",
      title: "RemoteCare ile Aile ve Uzman Desteği",
      lead: "Bazı sistemler, aile bireylerinin veya odyometristin internet üzerinden uzaktan destek sağlamasına imkan tanır.",
      howItWorks: "Cihaz, uyumlu bir mobil uygulama üzerinden internete bağlanır; odyometrist veya yetkilendirilmiş aile bireyi, kliniğe gelmeye gerek kalmadan bazı ayarları uzaktan güncelleyebilir.",
      advantages: [
        "Küçük ayar değişiklikleri için klinik ziyaretini azaltmaya yardımcı olabilir",
        "Aile bireylerinin sürece dahil olmasına imkan tanır",
        "Hareket kısıtlılığı olan kullanıcılar için pratik bir seçenek olabilir",
      ],
      models: ["RemoteCare Uyumlu Modeller"],
      expertNote: "Uzaktan destek özelliğinin kapsamı üreticiye ve modele göre değişir; detaylı bilgi için Uzaktan Kontrol Özellikleri sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "otomatik-ortam-algilama",
      icon: "brain",
      navLabel: "Otomatik Ortam Algılama",
      title: "Yapay Zeka Destekli Otomatik Ortam Ayarı",
      lead: "Cihaz, bulunduğu ortamı (ev, restoran, dış mekan gibi) otomatik olarak algılayıp ayarlarını buna göre uyarlayabilir.",
      howItWorks: "Cihazdaki sensörler ortam gürültüsünü ve konuşma yoğunluğunu analiz eder; yapay zeka destekli algoritmalar en uygun dinleme programını otomatik olarak seçer.",
      advantages: [
        "Manuel ayar ihtiyacını azaltmaya yardımcı olur",
        "Farklı ortamlarda tutarlı bir dinleme deneyimi sunar",
        "Program değiştirmeyi hatırlama zorunluluğunu ortadan kaldırabilir",
      ],
      models: ["Otomatik Ortam Algılamalı Modeller"],
      expertNote: "Bu teknolojinin çalışma prensibi hakkında detaylı bilgi için Yapay Zeka Destekli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "sarj-kolayligi",
      icon: "layers",
      navLabel: "Şarj Kolaylığı",
      title: "Gece Boyu Şarj, Sabah Hazır Kullanım",
      lead: "Şarj edilebilir sistemler, küçük pilleri değiştirme zorluğunu ortadan kaldırmaya yardımcı olabilir.",
      howItWorks: "Cihaz, gece boyunca bir şarj kutusuna yerleştirilir; sabah tam dolu pille kullanıma hazır hale gelir.",
      advantages: [
        "Küçük pil değiştirme ihtiyacını ortadan kaldırır",
        "El becerisiyle ilgili zorluk yaşayan kullanıcılar için pratiktir",
        "Genellikle tüm günü kapsayan bir pil ömrü sunar",
      ],
      models: ["Şarj Edilebilir Modeller"],
      expertNote: "Detaylı bilgi için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz.",
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
