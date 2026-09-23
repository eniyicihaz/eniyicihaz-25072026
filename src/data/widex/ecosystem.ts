// Ecosystem deep-dive for the Widex brand page (/markalar/widex) —
// PureSound/ZeroDelay, SoundSense Learn, and Widex Zen & SoundRelax tinnitus
// support. Renders through the shared BrandPageEcosystem component
// (Technology Explorer pattern). Deliberately 3 items, mirroring Phonak's
// and Signia's depth-over-breadth choice.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const widexEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "Widex Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "puresound",
      icon: "layers",
      navLabel: "PureSound (ZeroDelay)",
      title: "PureSound™ Nedir?",
      lead: "Sesi olabildiğince az işleyerek, beynin sesi daha doğal ve detaylı algılamasını hedefleyen Widex yaklaşımı.",
      howItWorks:
        "ZeroDelay işleme yaklaşımı, mikrofon ile alıcı arasındaki ses işleme gecikmesini büyük ölçüde azaltarak, işlenmemiş doğal ses ile işlenmiş ses arasındaki uyumsuzluktan kaynaklanan yapay/metalik ses hissini azaltmaya çalışır.",
      advantages: [
        "Daha doğal ve az işlenmiş bir ses deneyimi hedefler",
        "Kendi sesini ve çevresel sesleri daha doğal duymaya yardımcı olur",
        "Müzik dinleme gibi detay gerektiren durumlarda tercih edilebilir",
      ],
      models: ["Moment", "Moment Sheer", "SmartRIC"],
      expertNote: "PureSound™, Widex'in ses felsefesinin ('Less is more in natural hearing') en somut teknik karşılığıdır.",
    },
    {
      id: "soundsense",
      icon: "smartphone",
      navLabel: "SoundSense Learn",
      title: "SoundSense Learn",
      lead: "Widex Moment uygulaması üzerinden, kullanıcının ses tercihlerini karşılaştırmalı geri bildirimlerle öğrenen kişiselleştirme özelliği.",
      howItWorks:
        "Kullanıcıya art arda iki farklı ses ayarı sunulur; kullanıcı hangisini tercih ettiğini seçtikçe, sistem zaman içinde o ortama uygun bir ayar önerisi oluşturur.",
      advantages: [
        "Kişiselleştirilmiş ses ayarı deneyimi sunar",
        "Farklı ortamlar için ayrı tercihler öğrenilebilir",
        "Kullanıcının kendi geri bildirimine dayanır",
      ],
      models: ["Allure", "Moment", "SmartRIC"],
      expertNote: "SoundSense Learn, Widex'in yapay zekâ destekli kişiselleştirme yaklaşımının en somut örneğidir.",
    },
    {
      id: "tinnitus",
      icon: "radio",
      navLabel: "Zen & SoundRelax",
      title: "Widex Zen & SoundRelax",
      lead: "Kulak çınlamasını (tinnitus) rahatlatmaya yönelik, uygun modellerde sunulan ek ses terapisi özellikleri.",
      howItWorks:
        "Widex Zen, rahatlatıcı fraktal ton benzeri sesler üretirken; SoundRelax, çevresel doğa sesleri gibi rahatlatıcı ses seçenekleri sunar.",
      advantages: [
        "Kulak çınlamasına yönelik ek bir rahatlama seçeneği sunar",
        "Günlük kullanım sırasında arka planda çalışabilir",
        "Kullanıcı tercihine göre farklı ses seçenekleri sunar",
      ],
      models: ["Moment", "Moment Sheer"],
      expertNote: "Kulak çınlaması desteği, Avrasya İşitme'nin de bir uzmanlık alanı olan tinnitus konusuyla doğal bir bağlantı kurar.",
    },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorNavActiveBg: "rgb(20 184 166 / 0.1)",
  accentColorCalloutBg: "rgb(20 184 166 / 0.06)",
  accentColorCalloutLabel: "#0f766e",
};
