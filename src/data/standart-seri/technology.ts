// "Teknolojiler" deep-dive hub for the /segmentler/standart-seri page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values are
// limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for automatic sound
// adjustment (consistent with its automatic-processing mapping across
// the site, here at a more basic tier than Premium Seri's own "brain"
// item); "radar" for basic directional-microphone support (consistent
// with its detection/beamforming mapping elsewhere); "bluetooth" for
// basic phone connectivity; "layers" for battery/charging hardware
// (consistent with its mapping on multiple prior pages). The bağlantı
// and pil items cross-reference the pages that already own those
// technologies' full deep dives.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const standartSeriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Standart Seride Sıkça Bir Arada Sunulan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, marka ve modele göre değişebilir.",
  items: [
    {
      id: "otomatik-ses-ayari",
      icon: "brain",
      navLabel: "Otomatik Ses Ayarı",
      title: "Günlük Ortamlara Otomatik Uyum",
      lead: "Standart seri modeller, günlük ortamlara göre sesi otomatik olarak ayarlayan temel bir ses işleme sistemi kullanır.",
      howItWorks: "Cihaz, ortam gürültü seviyesini analiz ederek ses seviyesini ve temel programı otomatik olarak ayarlar.",
      advantages: [
        "Manuel ayar ihtiyacını azaltmaya yardımcı olur",
        "Günlük ortamlarda tutarlı bir dinleme deneyimi sunar",
        "Kullanımı basit ve pratik hale getirir",
      ],
      models: ["Otomatik Ayarlı Standart Modeller"],
      expertNote: "Otomatik ayar hassasiyeti, premium seriye kıyasla daha temel düzeyde olabilir.",
    },
    {
      id: "temel-yonlu-mikrofon",
      icon: "radar",
      navLabel: "Temel Yönlü Mikrofon",
      title: "Temel Düzeyde Yönlü Mikrofon Desteği",
      lead: "Standart seri modeller, günlük sohbetleri takip etmeye yardımcı olan temel düzeyde yönlü mikrofon desteği sunar.",
      howItWorks: "Cihazdaki mikrofonlar, önden gelen konuşmayı diğer yönlerden gelen seslere kıyasla temel düzeyde öne çıkarır.",
      advantages: [
        "Günlük sohbetleri takip etmeye yardımcı olur",
        "Genellikle otomatik olarak devreye girer",
        "Ek bir ayar gerektirmeden çalışır",
      ],
      models: ["Temel Yönlü Mikrofonlu Standart Modeller"],
      expertNote: "Daha gelişmiş yönlü mikrofon sistemleri için Premium Seri sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "temel-kablosuz-baglanti",
      icon: "bluetooth",
      navLabel: "Temel Kablosuz Bağlantı",
      title: "Telefonla Temel Kablosuz Bağlantı",
      lead: "Çoğu standart seri model, telefon görüşmeleri için temel düzeyde kablosuz bağlantı desteği sunar.",
      howItWorks: "Cihaz, telefonunuzla doğrudan veya uyumlu bir aksesuar üzerinden eşleştirilir; görüşme sesi cihaza aktarılır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazdan dinleme imkânı sunar",
        "Günlük iletişimi kolaylaştırır",
        "Ek bir kulaklık taşıma ihtiyacını azaltır",
      ],
      models: ["Temel Bağlantılı Standart Modeller"],
      expertNote: "Bağlantı kapsamı marka ve modele göre değişebilir; detaylı bilgi için Kablosuz Bağlantı Özellikleri sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "pil-secenekleri",
      icon: "layers",
      navLabel: "Pil Seçenekleri",
      title: "Şarjlı ve Pilli Seçenekler",
      lead: "Standart seri, hem şarjlı hem pilli seçeneklerle sunularak farklı kullanım tercihlerine uyum sağlar.",
      howItWorks: "Kullanıcı, şarj edilebilir bir sistem veya geleneksel pilli bir sistem arasında ihtiyacına göre tercih yapabilir.",
      advantages: [
        "Farklı kullanım alışkanlıklarına uyum sağlar",
        "Şarjlı seçenekler pil değiştirme ihtiyacını ortadan kaldırır",
        "Pilli seçenekler bazı kullanıcılar için daha tanıdık bir deneyim sunar",
      ],
      models: ["Şarjlı ve Pilli Standart Modeller"],
      expertNote: "Detaylı bilgi için Şarj Edilebilir Cihazlar sayfamızı inceleyebilirsiniz.",
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
