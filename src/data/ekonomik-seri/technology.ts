// "Teknolojiler" deep-dive hub for the /segmentler/ekonomik-seri page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for the core sound-
// processing engine (consistent with its sound-processing mapping
// across the site, here at the most basic tier — the same icon is used
// for "otomatik ses ayarı" at the standard tier on Standart Seri and
// "yapay zeka" at the premium tier on Premium Seri); "smartphone" for
// the simple control design (consistent with its kolay-kullanım
// mapping elsewhere); "layers" for the battery hardware (consistent
// with its mapping on multiple prior pages); "globe" for the authorized
// warranty/service network (consistent with its distribution-network
// mapping across the "Neden Orijinal" series). The first and third items
// cross-reference sibling pages that own their own deep dives rather
// than re-explaining them here.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const ekonomikSeriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Ekonomik Seride Sıkça Bir Arada Sunulan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "temel-ses-yukseltme",
      icon: "brain",
      navLabel: "Temel Ses Yükseltme",
      title: "Temel Ses Yükseltme Sistemi",
      lead: "Ekonomik seri modeller, günlük konuşmaları takip etmeye yardımcı olan temel bir ses yükseltme sistemi kullanır.",
      howItWorks: "Cihaz, gelen sesi belirlenen bir seviyede yükselterek günlük konuşmaların daha net duyulmasına yardımcı olur.",
      advantages: [
        "Günlük konuşmaları takip etmeye yardımcı olur",
        "Basit ve öngörülebilir bir çalışma prensibi sunar",
        "Temel işitme ihtiyaçları için yeterli olabilir",
      ],
      models: ["Temel Ses Yükseltmeli Ekonomik Modeller"],
      expertNote: "Daha gelişmiş, ortama duyarlı ses işleme sistemleri için Standart Seri ve Premium Seri sayfalarımızı inceleyebilirsiniz.",
    },
    {
      id: "sade-kontrol-tasarimi",
      icon: "smartphone",
      navLabel: "Sade Kontrol Tasarımı",
      title: "Basit ve Anlaşılır Kontrol Tasarımı",
      lead: "Ekonomik seri modeller, az sayıda ayar seçeneğiyle basit ve anlaşılır bir kullanım deneyimi sunar.",
      howItWorks: "Cihaz, sınırlı sayıda temel işleve odaklanacak şekilde tasarlanır; ses düzeyi genellikle basit bir düğme ile ayarlanır.",
      advantages: [
        "Günlük kullanımda karmaşayı azaltmaya yardımcı olur",
        "Yeni bir cihaza alışma sürecini kolaylaştırabilir",
        "Teknolojiye daha az aşina kullanıcılar için pratik olabilir",
      ],
      models: ["Sade Kontrollü Ekonomik Modeller"],
      expertNote: "Kullanım kolaylığı açısından benzer bir yaklaşım için Yaşlılar İçin Cihazlar sayfamızı da inceleyebilirsiniz.",
    },
    {
      id: "pilli-sistem",
      icon: "layers",
      navLabel: "Pilli Sistem",
      title: "Geleneksel Pilli Sistem",
      lead: "Ekonomik seri modeller genellikle geleneksel pilli sistemlerle sunulur.",
      howItWorks: "Cihaz, standart işitme cihazı pilleriyle çalışır; pil bittiğinde kolayca değiştirilebilir.",
      advantages: [
        "Şarj cihazına ihtiyaç duymadan kullanılabilir",
        "Pil değişimi basit ve hızlıdır",
        "Uygun fiyatlı bir güç kaynağı seçeneği sunar",
      ],
      models: ["Pilli Ekonomik Modeller"],
      expertNote: "Şarj edilebilir seçenekler için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "orijinal-garanti-servisi",
      icon: "globe",
      navLabel: "Orijinal Garanti ve Servis Ağı",
      title: "Orijinal Garanti ve Yetkili Servis Ağı",
      lead: "Ekonomik seri modeller de diğer seriler gibi orijinal ürün güvencesi ve yetkili servis ağı desteğiyle sunulur.",
      howItWorks: "Cihaz, yetkili distribütörlük kanalından temin edilir ve üretici garantisi kapsamında satışa sunulur.",
      advantages: [
        "Fiyatı uygun olsa da orijinallik ve garanti güvencesinden ödün verilmez",
        "Yetkili teknik servis desteğine erişim sağlar",
        "Orijinal yedek parça kullanımı garanti edilir",
      ],
      models: ["Orijinal Garantili Ekonomik Modeller"],
      expertNote: "Detaylı bilgi için Güvenilir Teknoloji sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorNavActiveBg: "rgb(22 163 74 / 0.1)",
  accentColorCalloutBg: "rgb(22 163 74 / 0.06)",
  accentColorCalloutLabel: "#15803d",
};
