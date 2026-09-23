// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/suya-dayanikli
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as BTE/ITE/Şarj Edilebilir/Bluetooth/
// Çocuklara Özel/Görünmez. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) —
// "layers" for the nano-coating's protective film, "globe" for the
// international IP testing standard, "smartphone" for app-tracked smart
// drying stations, "radar" stands in for the protective microphone/
// speaker membrane (a stretch mapping, same reuse pattern every prior
// page applies when the fixed icon set doesn't literally match the
// topic).

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const suyaDayankliTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Suya Dayanıklı Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "nano-kaplama",
      icon: "layers",
      navLabel: "Nano Kaplama",
      title: "Nano Kaplama Teknolojisi",
      lead: "Elektronik bileşenlerin yüzeyine uygulanan ince koruyucu tabaka, nem ve ter hasarına karşı ek bir bariyer oluşturur.",
      howItWorks: "Bileşenler, üretim sürecinde ince ve görünmez bir nano malzeme tabakasıyla kaplanır; bu tabaka suyun ve nemin elektronik devrelere ulaşmasını geciktirir.",
      advantages: [
        "Nem kaynaklı arıza riskini azaltmaya yardımcı olur",
        "Günlük ter maruziyetine karşı ek koruma sağlar",
        "Cihazın günlük bakımını kolaylaştırabilir",
      ],
      models: ["Nano Kaplamalı Modeller"],
      expertNote: "Nano kaplama, IP sınıfının yerini almaz; ikisi birlikte değerlendirildiğinde daha kapsamlı bir koruma sunar.",
    },
    {
      id: "ip-standardi",
      icon: "globe",
      navLabel: "IP Koruma Standardı",
      title: "Uluslararası IP Koruma Standardı ve Test Süreci",
      lead: "Cihazlar, toz ve suya karşı dayanıklılığını doğrulamak için uluslararası IP standardına göre laboratuvar testlerinden geçirilir.",
      howItWorks: "Cihaz, belirli bir süre ve derinlikte kontrollü su ve toz ortamına maruz bırakılır; test sonuçlarına göre iki haneli bir IP kodu (örneğin IP68) atanır.",
      advantages: [
        "Koruma seviyesini nesnel ve karşılaştırılabilir kılar",
        "Marka ve modeller arası tutarlı bir kıyaslama imkânı sunar",
        "Uluslararası olarak tanınan bir standarttır",
      ],
      models: ["IP Sertifikalı Modeller"],
      expertNote: "IP kodu iki haneden oluşur: ilk hane toza, ikinci hane suya karşı direnci gösterir; net değer teslim sırasında paylaşılır.",
    },
    {
      id: "kurutma-kutusu",
      icon: "smartphone",
      navLabel: "Akıllı Kurutma Kutusu",
      title: "Akıllı Kurutma ve Bakım İstasyonu",
      lead: "Bazı üreticiler, cihazı gece boyunca kurutan ve bazı modellerde uygulama üzerinden takip edilebilen akıllı kurutma kutuları sunar.",
      howItWorks: "Cihaz gece boyunca kurutma kutusuna yerleştirilir; kutu içindeki ısı ve UV-C ışığı nem ve bakterileri azaltmaya yardımcı olur.",
      advantages: [
        "Günlük nem birikimini azaltmaya yardımcı olur",
        "Bazı modellerde hijyen desteği de sunar",
        "Düzenli kullanımda cihaz ömrünü olumlu etkileyebilir",
      ],
      models: ["Akıllı Kurutma Kutusu Uyumlu Modeller"],
      expertNote: "Kurutma kutusu genellikle ayrıca temin edilir; kullanım sıklığı yaşadığınız iklime göre değerlendirilebilir.",
    },
    {
      id: "koruyucu-membran",
      icon: "radar",
      navLabel: "Koruyucu Membran",
      title: "Mikrofon ve Hoparlör Koruyucu Membranı",
      lead: "Mikrofon ve hoparlör girişlerine yerleştirilen ince, su geçirmez membranlar, sesin geçişine izin verirken suyun içeri girmesini engellemeye yardımcı olur.",
      howItWorks: "Membran, ses dalgalarının geçmesine izin veren ancak su damlacıklarını engelleyen özel bir gözenekli yapıya sahiptir; mikrofon ve hoparlör girişlerine yerleştirilir.",
      advantages: [
        "Ses kalitesinden ödün vermeden ek koruma sağlar",
        "Nem girişini geciktirmeye yardımcı olur",
        "Genellikle kullanıcı tarafından fark edilmeyen, görünmez bir katmandır",
      ],
      models: ["Membran Korumalı Modeller"],
      expertNote: "Membranlar zamanla aşınabilir; periyodik teknik kontrol sırasında durumu değerlendirilir.",
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
