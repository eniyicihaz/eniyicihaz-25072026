// "Teknolojiler" deep-dive hub for the /degerlendirme/odyometri page.
// Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior page. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "radar" for air-conduction
// threshold detection (consistent with its detection/scanning mapping
// across the site); "layers" for bone-conduction's physical vibration
// through skull layers; "brain" for speech audiometry's cognitive
// comprehension aspect; "smartphone" for the digital odyogram
// recording/reporting system.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const odyometriTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Odyometride Sıkça Bir Arada Uygulanan Testler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, ihtiyacınıza göre değişebilir.",
  items: [
    {
      id: "hava-yolu-iletimi",
      icon: "radar",
      navLabel: "Hava Yolu İletimi",
      title: "Hava Yolu İletimi Testi",
      lead: "Hava yolu iletimi testi, kulaklık aracılığıyla verilen seslere karşı işitme eşiğinizi ölçen temel odyometri yöntemidir.",
      howItWorks: "Kulaklıktan farklı frekanslarda sesler verilir; her sesi duyduğunuzda belirtmeniz istenir ve duyabildiğiniz en düşük şiddet seviyesi kaydedilir.",
      advantages: [
        "Genel işitme durumunuzu ortaya koyar",
        "Uygulaması hızlı ve konforludur",
        "Odyometrinin temel ölçümünü oluşturur",
      ],
      models: ["Hava Yolu İletimi Testi"],
      expertNote: "Hava yolu sonuçları, kemik yolu sonuçlarıyla birlikte değerlendirildiğinde daha anlamlı hâle gelir.",
    },
    {
      id: "kemik-yolu-iletimi",
      icon: "layers",
      navLabel: "Kemik Yolu İletimi",
      title: "Kemik Yolu İletimi Testi",
      lead: "Kemik yolu iletimi testi, kafatası arkasına yerleştirilen bir cihazla verilen titreşimlere karşı iç kulağın doğrudan tepkisini ölçer.",
      howItWorks: "Kulak arkasına yerleştirilen küçük bir titreşim cihazı, sesi doğrudan iç kulağa iletir; bu sayede dış ve orta kulağın etkisi devre dışı bırakılır.",
      advantages: [
        "İşitme kaybının türünü (iletim tipi veya sensörinöral) ayırt etmeye yardımcı olur",
        "Dış ve orta kulak sorunlarının etkisini ayrı değerlendirmeye imkan tanır",
        "Odyometriyi tamamlayan önemli bir ölçüm sunar",
      ],
      models: ["Kemik Yolu İletimi Testi"],
      expertNote: "Hava ve kemik yolu sonuçları arasındaki fark, odyometrist tarafından yorumlanır.",
    },
    {
      id: "konusma-odyometrisi",
      icon: "brain",
      navLabel: "Konuşma Odyometrisi",
      title: "Konuşma Odyometrisi",
      lead: "Konuşma odyometrisi, farklı ses seviyelerinde konuşmayı ne kadar net anladığınızı değerlendiren tamamlayıcı bir testtir.",
      howItWorks: "Size çeşitli kelimeler veya cümleler farklı ses seviyelerinde dinletilir; doğru anladığınız kelime oranı kaydedilir.",
      advantages: [
        "Günlük yaşamdaki konuşma anlama becerinizi yansıtır",
        "Saf ses testini tamamlayıcı bir bakış açısı sunar",
        "Cihaz programlaması için ek veri sağlar",
      ],
      models: ["Konuşma Odyometrisi Testi"],
      expertNote: "Konuşma odyometrisi genellikle standart odyometriyle birlikte uygulanır.",
    },
    {
      id: "odyogram-kaydi",
      icon: "smartphone",
      navLabel: "Odyogram Kaydı",
      title: "Odyogram Kaydı ve Raporlama",
      lead: "Tüm ölçüm sonuçları, dijital bir sistem üzerinde odyogram hâline getirilerek kaydedilir ve raporlanır.",
      howItWorks: "Test sırasında elde edilen veriler, odyometri cihazı tarafından dijital olarak kaydedilir ve anlaşılır bir grafik rapor hâline getirilir.",
      advantages: [
        "Sonuçların zaman içinde karşılaştırılmasını kolaylaştırır",
        "Rapor, cihaz programlaması için doğrudan kullanılabilir",
        "Kayıtlar, ileriki kontrollerde referans olarak kullanılabilir",
      ],
      models: ["Dijital Odyogram Raporu"],
      expertNote: "Odyogram raporunuzun bir kopyasını talep edebilirsiniz.",
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
