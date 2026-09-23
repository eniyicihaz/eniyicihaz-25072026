// "Teknolojiler" deep-dive hub for the /teknolojiler/gurultu-engelleme
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* and
// /teknolojiler/* feature page. icon values are limited to the
// component's fixed set (brain/dna/globe/radar/bluetooth/smartphone/
// radio/layers) — "layers" for multi-channel steady-state processing,
// "radar" for wind-noise detection (a stretch mapping, same reuse pattern
// every prior page applies), "radio" for impulse-noise signal handling
// (its first literal-ish audio-signal use across the site), "brain" for
// the AI-classification component, cross-referencing the Yapay Zeka
// Destekli page.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const gurultuEngellemeTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Gürültü Engelleme Cihazlarında Öne Çıkan Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "sabit-gurultu",
      icon: "layers",
      navLabel: "Sabit Gürültü Azaltma",
      title: "Çok Kanallı Sabit Gürültü Azaltma",
      lead: "Klima uğultusu gibi sürekli ve tahmin edilebilir gürültü kaynaklarının seviyesini azaltan temel bir gürültü engelleme bileşeni.",
      howItWorks: "Ses frekans aralığı birden fazla kanala ayrılır; her kanalda sinyal sabit bir gürültü paterni gösteriyorsa seviyesi kademeli olarak azaltılır.",
      advantages: [
        "Klima ve havalandırma gibi sürekli gürültüleri azaltır",
        "Konuşma sinyalini görece koruyarak çalışır",
        "Ek bir manuel ayar gerektirmeden sürekli devrede olur",
      ],
      models: ["Çok Kanallı Gürültü Azaltmalı Modeller"],
      expertNote: "Kanal sayısı ve hassasiyet üreticiye ve segment düzeyine göre değişir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "ruzgar-engelleme",
      icon: "radar",
      navLabel: "Rüzgar Gürültüsü Engelleme",
      title: "Rüzgar Gürültüsü Algılama ve Bastırma",
      lead: "Mikrofonlara çarpan rüzgarın oluşturduğu düşük frekanslı, düzensiz sesi tespit edip azaltan bir bileşen.",
      howItWorks: "Cihaz, rüzgara özgü düzensiz sinyal desenini tanıyarak etkilenen mikrofon kanalının seviyesini geçici olarak azaltır veya diğer mikrofona ağırlık verir.",
      advantages: [
        "Açık havada yürüyüş ve bisiklet gibi aktivitelerde konfor sağlar",
        "Rüzgarlı ortamlarda ani rahatsızlığı azaltmaya yardımcı olur",
        "Otomatik olarak devreye girer, manuel müdahale gerektirmez",
      ],
      models: ["Rüzgar Gürültüsü Engellemeli Modeller"],
      expertNote: "Rüzgar engelleme etkinliği rüzgar şiddetine ve yönüne göre değişebilir.",
    },
    {
      id: "ani-ses-baskilama",
      icon: "radio",
      navLabel: "Ani Ses Baskılama",
      title: "Ani ve Yüksek Seslerin Anlık Yumuşatılması",
      lead: "Tabak sesi veya kapı çarpması gibi ani yüksek sesleri konfor için milisaniyeler içinde yumuşatan bir koruma bileşeni.",
      howItWorks: "Cihaz, ses seviyesindeki ani ve keskin yükselişleri tespit ederek o anlık için sinyali hızla yumuşatır, ardından normal işlemeye geri döner.",
      advantages: [
        "Ani yüksek seslerin rahatsız edici etkisini azaltır",
        "Milisaniyeler içinde devreye girer",
        "Günlük ev ve dış mekan ortamlarında ek konfor sağlar",
      ],
      models: ["Ani Ses Baskılamalı Modeller"],
      expertNote: "Bu bileşen konforu artırmayı hedefler; işitsel uyarı seslerini tamamen ortadan kaldırmaz.",
    },
    {
      id: "yapay-zeka-siniflandirma",
      icon: "brain",
      navLabel: "Yapay Zeka Sınıflandırma",
      title: "Yapay Zeka Destekli Gürültü Sınıflandırma",
      lead: "Derin öğrenme tabanlı algoritmalar, gürültü türünü çok daha hassas bir şekilde ayırt ederek konuşmayı korumayı hedefler.",
      howItWorks: "Sinir ağı, ses sinyalini milyonlarca gerçek dünya örneğiyle eğitilmiş bir modelle karşılaştırarak gürültü türünü sınıflandırır ve azaltma seviyesini buna göre otomatik ayarlar.",
      advantages: [
        "Farklı gürültü türlerine daha hassas tepki verir",
        "Konuşmayı koruma konusunda daha isabetli sonuçlar hedefler",
        "Ortam değiştiğinde otomatik olarak uyum sağlar",
      ],
      models: ["Yapay Zeka Destekli Üst Segment Modeller"],
      expertNote: "Bu özellik yapay zeka destekli işlemcilere sahip modellerde bulunur; detaylı bilgi için Yapay Zeka Destekli Cihazlar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorNavActiveBg: "rgb(192 38 211 / 0.1)",
  accentColorCalloutBg: "rgb(192 38 211 / 0.06)",
  accentColorCalloutLabel: "#a21caf",
};
