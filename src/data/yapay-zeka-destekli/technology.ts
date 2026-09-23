// "Teknolojiler" deep-dive hub for the /teknolojiler/yapay-zeka-destekli
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every /isitme-cihazlari/* feature
// page. icon values are limited to the component's fixed set (brain/dna/
// globe/radar/bluetooth/smartphone/radio/layers) — "brain" is a direct,
// literal fit here for the first time across the site (every prior page
// had to stretch-map this fixed icon onto its own topic); "radar" for
// speech-in-noise prioritization, "smartphone" for the learning/
// personalization app, "globe" for health & activity tracking.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const yapayZekaDestekliTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Yapay Zeka Destekli Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "sahne-siniflandirma",
      icon: "brain",
      navLabel: "Sahne Sınıflandırma",
      title: "Gerçek Zamanlı Ses Sahnesi Sınıflandırma",
      lead: "Cihazın işlemcisi, bulunduğunuz ortamı saniyeler içinde analiz ederek konuşma, gürültü veya sessizlik gibi kategorilere ayırır.",
      howItWorks: "Derin sinir ağı, mikrofonlardan gelen ses verisini milyonlarca gerçek dünya ses örneğiyle eğitilmiş bir modelle karşılaştırarak ortamı sınıflandırır ve dinleme ayarlarını buna göre günceller.",
      advantages: [
        "Manuel program değişikliğine gerek bırakmaz",
        "Ortam değiştiğinde saniyeler içinde tepki verir",
        "Farklı ortamlarda tutarlı bir dinleme deneyimi hedefler",
      ],
      models: ["Yapay Zeka Destekli Üst Segment Modeller"],
      expertNote: "Sınıflandırma hassasiyeti üreticiye ve segment düzeyine göre değişir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "konusma-oncelik",
      icon: "radar",
      navLabel: "Konuşma Önceliklendirme",
      title: "Konuşmayı Gürültüden Ayırt Etme",
      lead: "Yapay zeka, kalabalık ortamlarda konuşma sesini arka plan gürültüsünden ayırarak öne çıkarmaya yardımcı olur.",
      howItWorks: "Sinir ağı, ses sinyalini analiz ederek konuşma özelliklerini taşıyan bileşenleri diğer gürültü kaynaklarından ayırt eder ve konuşma sinyalini görece güçlendirir.",
      advantages: [
        "Restoran ve toplantı gibi kalabalık ortamlarda destek sağlar",
        "Arka plan gürültüsünün etkisini azaltmaya yardımcı olur",
        "Ek bir manuel ayar gerektirmeden çalışır",
      ],
      models: ["Gelişmiş Sahne Sınıflandırmalı Modeller"],
      expertNote: "Performans, ortamın gürültü düzeyine ve türüne göre değişebilir; kesin sonuç kişiden kişiye farklılık gösterebilir.",
    },
    {
      id: "kisisellestirme",
      icon: "smartphone",
      navLabel: "Öğrenen Kişiselleştirme",
      title: "Uygulama Üzerinden Öğrenen Kişiselleştirme",
      lead: "Bazı modeller, akıllı telefon uygulaması üzerinden yaptığınız manuel ayarları öğrenerek zamanla otomatik uygulamaya başlar.",
      howItWorks: "Cihaz, uygulama üzerinden yapılan ses seviyesi ve program tercihlerini kaydeder; benzer ortam koşullarında bu tercihleri otomatik olarak hatırlar ve uygular.",
      advantages: [
        "Zamanla daha az manuel müdahale gerektirir",
        "Kişisel dinleme tercihlerinize uyum sağlar",
        "Uygulama üzerinden ayarları görüntüleme imkânı sunar",
      ],
      models: ["Öğrenen / Kişiselleştirilebilir Modeller"],
      expertNote: "Öğrenme özelliği her modelde bulunmayabilir; uygulama gereksinimleri üreticiye göre değişir.",
    },
    {
      id: "saglik-takibi",
      icon: "globe",
      navLabel: "Sağlık ve Aktivite Takibi",
      title: "Aktivite ve Sağlık Verisi Takibi",
      lead: "Bazı üst segment modeller, günlük aktivite ve sosyal etkileşim gibi verileri uygulama üzerinden sunarak genel sağlık takibini destekler.",
      howItWorks: "Cihazdaki sensörler, adım sayısı ve konuşma etkileşimi gibi verileri toplar; bu veriler akıllı telefon uygulamasında özetlenir.",
      advantages: [
        "Genel aktivite düzeyinizi takip edebilme",
        "Sosyal etkileşim eğilimlerinizi görebilme",
        "Bazı modellerde düşme algılama gibi ek güvenlik özellikleri",
      ],
      models: ["Sağlık Takibi Destekli Üst Segment Modeller"],
      expertNote: "Sağlık ve aktivite takibi özellikleri tıbbi bir tanı aracı değildir; genel bir bilgilendirme amacı taşır.",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
  accentColorNavActiveBg: "rgb(79 70 229 / 0.1)",
  accentColorCalloutBg: "rgb(79 70 229 / 0.06)",
  accentColorCalloutLabel: "#4338ca",
};
