// "Teknolojilerin Arkasındaki Sistemler" deep-dive hub for the
// /blog/yeni-teknolojiler page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "brain" for AI sound processing (a genuine literal fit for once);
// "bluetooth" for wireless connectivity (also literal); "smartphone"
// for companion app control; "radar" for health/activity tracking
// features.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const yeniTeknolojilerTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Teknolojilerin Arkasındaki Sistemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, güncel işitme cihazı teknolojilerinin temelini oluşturan sistemleri anlatır.",
  items: [
    {
      id: "yapay-zeka-ses-isleme",
      icon: "brain",
      navLabel: "Yapay Zeka ile Ses İşleme",
      title: "Yapay Zeka Destekli Ses İşleme",
      lead: "Yapay zeka, bulunduğunuz ortamı saniyeler içinde analiz ederek sesi buna göre optimize etmeye yardımcı olur.",
      howItWorks: "Cihaz, ortam sesini sürekli analiz eder ve konuşma ile gürültüyü ayırt ederek sesi otomatik olarak ayarlar.",
      advantages: [
        "Ortam değiştikçe manuel ayar yapma ihtiyacını azaltır",
        "Konuşmayı gürültüden ayırt etmeye yardımcı olur",
        "Zamanla kullanıcı tercihlerine uyum sağlayabilir",
      ],
      models: ["Yapay Zeka Destekli Cihazlar"],
      expertNote: "Yapay zeka özelliklerinin kapsamı markadan markaya farklılık gösterebilir.",
    },
    {
      id: "kablosuz-baglanti-sistemi",
      icon: "bluetooth",
      navLabel: "Kablosuz Bağlantı Sistemi",
      title: "Bluetooth ve Kablosuz Bağlantı",
      lead: "Kablosuz bağlantı teknolojisi, cihazınızın telefon, televizyon ve diğer akıllı cihazlarla doğrudan iletişim kurmasını sağlar.",
      howItWorks: "Cihazınız, uyumlu bir kaynaktan sesi doğrudan kulağınıza aktarır; ayrı bir aksesuara ihtiyaç duymadan sesi net bir şekilde duyabilirsiniz.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazınızdan dinleyebilirsiniz",
        "Televizyon sesini net bir şekilde takip edebilirsiniz",
        "Ek aksesuar ihtiyacını azaltır",
      ],
      models: ["Kablosuz Bağlantı Özellikleri"],
      expertNote: "Bağlantı uyumluluğu cihaz modeline ve kullandığınız telefona göre değişebilir.",
    },
    {
      id: "uygulama-kontrolu",
      icon: "smartphone",
      navLabel: "Uygulama Kontrolü",
      title: "Akıllı Telefon Uygulamasıyla Kontrol",
      lead: "Birçok güncel cihaz, birlikte çalıştığı bir mobil uygulama üzerinden kontrol edilebiliyor.",
      howItWorks: "Uygulamayı telefonunuza indirerek ses seviyesi, program ve bazı ayarları doğrudan telefonunuzdan değiştirebilirsiniz.",
      advantages: [
        "Cihaza dokunmadan ayar değiştirebilirsiniz",
        "Farklı ortamlar için önceden ayarlanmış programlar arasında geçiş yapabilirsiniz",
        "Kullanım alışkanlıklarınızı takip edebilirsiniz",
      ],
      models: ["Uygulama Kontrolü"],
      expertNote: "Uygulama özellikleri marka ve modele göre farklılık gösterebilir.",
    },
    {
      id: "saglik-aktivite-takibi",
      icon: "radar",
      navLabel: "Sağlık ve Aktivite Takibi",
      title: "Sağlık ve Aktivite Takip Özellikleri",
      lead: "Bazı güncel modeller, işitme desteğine ek olarak genel aktivite takibi gibi ek özellikler de sunabiliyor.",
      howItWorks: "Cihaz içindeki sensörler, günlük hareket gibi bazı genel verileri kaydederek uygulama üzerinden görüntülenmesini sağlar.",
      advantages: [
        "Günlük aktivite düzeyinizi genel hatlarıyla takip edebilirsiniz",
        "İşitme cihazınızı tek bir cihaz olarak kullanmaya devam edersiniz",
        "Ek bir giyilebilir cihaza ihtiyaç duymayabilirsiniz",
      ],
      models: ["Sağlık Sensörlü Cihazlar"],
      expertNote: "Bu özellikler tüm modellerde bulunmayabilir; ilgi duyuyorsanız randevunuzda sorabilirsiniz.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorNavActiveBg: "rgb(37 99 235 / 0.1)",
  accentColorCalloutBg: "rgb(37 99 235 / 0.06)",
  accentColorCalloutLabel: "#1d4ed8",
};
