// Ecosystem deep-dive for the NuEar brand page (/markalar/nuear) — NXG AI
// sound processing, Hear Circle's health/activity tracking with fall
// detection, and remote professional care. Renders through the shared
// BrandPageEcosystem component (Technology Explorer pattern). Deliberately
// 3 items, mirroring Phonak's, Signia's, Widex's and ReSound's
// depth-over-breadth choice.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const nuearEcosystem: BrandPageEcosystemContent = {
  badge: "EKOSİSTEM REHBERİ",
  heading: "NuEar Ekosistemini Keşfedin",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "nxg-ai",
      icon: "brain",
      navLabel: "NXG AI",
      title: "NXG AI Ses İşleme",
      lead: "NuEar'ın güncel nesil ürün ailelerinde kullanılan, ses ortamını analiz etmeye yardımcı olan işleme yaklaşımı.",
      howItWorks:
        "Cihaz, bulunduğunuz ortamdaki sesleri sürekli analiz ederek konuşma ile arka plan gürültüsünü ayırt etmeye çalışır ve buna göre ayarlarını uyarlamaya çalışır.",
      advantages: [
        "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olur",
        "Konuşmayı öne çıkarmaya yönelik bir yaklaşım sunar",
        "Güncel nesil NuEar model ailelerinin temelini oluşturur",
      ],
      models: ["NXG AI"],
      expertNote: "NXG AI, NuEar'ın en güncel ses işleme yaklaşımını temsil eder.",
    },
    {
      id: "hear-circle",
      icon: "smartphone",
      navLabel: "Hear Circle",
      title: "Hear Circle Uygulaması",
      lead: "İşitme cihazı ayarlarını yönetmenin yanı sıra günlük aktivite ve sağlık takibi de sunan NuEar'ın kendi uygulaması.",
      howItWorks:
        "Uygulama, uyumlu cihazlarla eşleşerek ses programlarını yönetmenizi, adım ve aktivite verilerinizi görüntülemenizi ve hedefler belirlemenizi sağlar.",
      advantages: [
        "Ses ayarlarına ve programlarına hızlı erişim sunar",
        "Günlük adım ve aktivite takibi yapılabilir",
        "Apple Watch ile uyumlu çalışabilir",
      ],
      models: ["NXG AI", "NE Series"],
      expertNote: "Hear Circle, işitme cihazını günlük sağlık takibiyle birleştiren, NuEar'ın en özgün yaklaşımlarından biridir.",
    },
    {
      id: "remote-care",
      icon: "globe",
      navLabel: "Uzaktan Bakım",
      title: "Uzaktan Profesyonel Ayar ve Düşme Bildirimi",
      lead: "Hear Circle uygulaması üzerinden kliniğe gitmeden uzaktan ince ayar alabilme ve düşme anında seçilen kişilere bildirim gönderebilme imkânı.",
      howItWorks:
        "Kullanıcı uygulama üzerinden bir talep gönderir; uzman ayarları günceller ve yeni ayarlar kablosuz olarak cihaza iletilir. Düşme algılama özelliği ise, uygun ayarlandığında bir düşme meydana geldiğinde önceden belirlenen kişilere bildirim gönderebilir.",
      advantages: [
        "Kliniğe gitmeden ince ayar talep etme imkânı sunar",
        "Düşme riski olan kullanıcılar için ek bir güvenlik katmanı sunabilir",
        "Aile bireylerinin bilgilendirilmesine yardımcı olabilir",
      ],
      models: ["NXG AI", "NE Series", "Circa"],
      expertNote: "Düşme bildirimi gibi özellikler, işitme cihazını daha geniş bir sağlık ve güvenlik ekosisteminin parçası hâline getirir.",
    },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
  accentColorNavActiveBg: "rgb(228 0 43 / 0.1)",
  accentColorCalloutBg: "rgb(228 0 43 / 0.06)",
  accentColorCalloutLabel: "#B7001F",
};
