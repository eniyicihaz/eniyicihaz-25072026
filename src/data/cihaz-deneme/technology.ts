// "Teknolojiler" deep-dive hub for the /uygulama-ayar/cihaz-deneme
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for the usage-data
// analysis during the trial; "layers" for comparing multiple stacked
// models side by side; "radio" for the mid-trial check-in call/visit's
// communication-based nature; "smartphone" for the app-based feedback
// channel during the trial period.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cihazDenemeTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Cihaz Deneme Sürecinde Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz markasına ve modeline göre değişebilir.",
  items: [
    {
      id: "gunluk-kullanim-takibi",
      icon: "brain",
      navLabel: "Günlük Kullanım Takibi",
      title: "Günlük Kullanım (Data Logging) Takibi",
      lead: "Bazı modeller, deneme süresince hangi ortamlarda ne kadar kullanıldığınızı kaydedebilir.",
      howItWorks: "Cihaz, kullanım süresi ve ortam türü gibi verileri kaydeder; bu veriler, ara kontrol seansında deneyiminizle birlikte değerlendirilir.",
      advantages: [
        "Deneme sürecine objektif bir bakış açısı katar",
        "Hangi ortamlarda cihazı daha çok kullandığınızı gösterebilir",
        "Karar sürecinizi destekleyici bir veri sunar",
      ],
      models: ["Veri Kaydı Destekli Modeller"],
      expertNote: "Bu özellik tüm modellerde bulunmayabilir; deneme öncesinde bilgi alabilirsiniz.",
    },
    {
      id: "coklu-model-karsilastirma",
      icon: "layers",
      navLabel: "Çoklu Model Karşılaştırma",
      title: "Çoklu Model Karşılaştırmalı Deneme",
      lead: "Birden fazla model arasında karar veremiyorsanız, karşılaştırmalı bir deneme süreci planlanabilir.",
      howItWorks: "Farklı modeller, ayrı dönemlerde veya karşılaştırmalı olarak denenir; deneyimleriniz birlikte değerlendirilir.",
      advantages: [
        "Modeller arasında somut bir karşılaştırma yapmanızı sağlar",
        "Karar verme sürecinizi netleştirmeye yardımcı olur",
        "Bütçe ve ihtiyaç dengesini görmenize katkı sağlar",
      ],
      models: ["Karşılaştırmalı Deneme"],
      expertNote: "Model bulunabilirliği stok durumuna göre değişebilir.",
    },
    {
      id: "ara-kontrol-seansi",
      icon: "radio",
      navLabel: "Ara Kontrol Seansı",
      title: "Ara Kontrol Seansı",
      lead: "Deneme süresinin ortasında planlanan kısa bir görüşmeyle deneyiminiz değerlendirilir.",
      howItWorks: "Yüz yüze veya telefon üzerinden yapılan bu görüşmede, o ana kadarki deneyiminiz dinlenir ve gerekirse küçük ayarlar yapılır.",
      advantages: [
        "Deneme sürecinde yalnız bırakılmamanızı sağlar",
        "Erken aşamada küçük sorunların çözülmesine yardımcı olur",
        "Deneme süresinin sonuna daha hazır ulaşmanızı sağlar",
      ],
      models: ["Ara Kontrol Desteği"],
      expertNote: "Ara kontrol seansı isteğe bağlı olarak planlanabilir.",
    },
    {
      id: "uygulama-geri-bildirimi",
      icon: "smartphone",
      navLabel: "Uygulama Geri Bildirimi",
      title: "Akıllı Telefon Uygulaması Üzerinden Geri Bildirim",
      lead: "Bazı modellerde, deneme süresince yaşadığınız deneyimi uygulama üzerinden not alarak kaydedebilirsiniz.",
      howItWorks: "Uygulama, farklı ortamlardaki memnuniyet düzeyinizi kaydetmenize imkân tanır; bu notlar ara kontrol seansında birlikte değerlendirilir.",
      advantages: [
        "Deneyiminizi anlık olarak kaydetmenizi sağlar",
        "Ara kontrol seansını daha verimli hale getirir",
        "Karar sürecinize somut bir kayıt sunar",
      ],
      models: ["Uygulama Destekli Modeller"],
      expertNote: "Uygulama desteği, seçilen cihaz markası ve modeline göre değişir.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorNavActiveBg: "rgb(13 148 136 / 0.1)",
  accentColorCalloutBg: "rgb(13 148 136 / 0.06)",
  accentColorCalloutLabel: "#0f766e",
};
