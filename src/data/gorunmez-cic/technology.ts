// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/gorunmez-cic
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as BTE/ITE/Şarj Edilebilir/Bluetooth/
// Çocuklara Özel. icon values are limited to the component's fixed set
// (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) — "dna"
// stands in for the kişiye özel (custom-shell) fabrication, "brain" for
// the natural/pinna-effect sound perception, "layers" for the physical
// removal-string mechanism (same reuse pattern the Şarj Edilebilir page
// applies to its own non-digital mechanical items), "bluetooth" for the
// limited wireless support some CIC models carry.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const gorunmezCicTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Görünmez (CIC) Cihazlarda Öne Çıkan Özellikler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "kisiye-ozel-uretim",
      icon: "dna",
      navLabel: "Kişiye Özel Üretim",
      title: "Kulak Kanalınıza Özel Üretim (Custom Shell)",
      lead: "Her CIC/IIC cihaz, kulak izinizden alınan ölçüyle laboratuvarda tek tek üretilir.",
      howItWorks: "Kulak izi üretici laboratuvarına gönderilir; kanalınızın şekline özel tek parça kabuk üretilir ve elektronik bileşenler bu kabuğun içine yerleştirilir.",
      advantages: [
        "Kulak kanalınıza tam oturan bir yerleşim sağlar",
        "Standart kalıplara göre daha konforlu bir uyum sunabilir",
        "Kabuk rengi cilt tonuna yakın seçilerek görünürlük daha da azaltılabilir",
      ],
      models: ["Kulak İzine Özel CIC / IIC Modeller"],
      expertNote: "Kulak izi alım süreci ve üretim süresi üreticiye göre değişir; süreç boyunca uzman ekibimiz size eşlik eder.",
    },
    {
      id: "dogal-ses-algisi",
      icon: "brain",
      navLabel: "Doğal Ses Algısı",
      title: "Kulak Kepçesinin Doğal Ses Toplama Özelliğinden Faydalanma",
      lead: "Kanal içi derin yerleşim, kulak kepçesinin doğal ses yönlendirme özelliğinden faydalanmayı mümkün kılabilir.",
      howItWorks: "Mikrofon, kulak kanalının doğal girişine yakın bir noktada konumlandığından, ses kulak kepçesinin kendi doğal filtrelemesinden geçerek algılanır.",
      advantages: [
        "Ses kaynağının yönünü doğal şekilde algılamaya yardımcı olabilir",
        "Bazı kullanıcılarda daha doğal bir ses deneyimi sağlayabilir",
        "Ek bir yönlü mikrofon sistemine ihtiyaç duymadan çalışır",
      ],
      models: ["Derin Kanal Yerleşimli CIC / IIC Modeller"],
      expertNote: "Bu etkinin algılanma düzeyi kişiden kişiye değişir; deneyim, demo cihaz denemesiyle değerlendirilebilir.",
    },
    {
      id: "cikarma-ipi",
      icon: "layers",
      navLabel: "Çıkarma İpi / Sapı",
      title: "Kolay Çıkarma İçin İpçik veya Sap Sistemi",
      lead: "Kulak kanalının derinlerine yerleşen cihazın güvenli ve kolay çıkarılmasını sağlayan ince bir mekanizma.",
      howItWorks: "Kabuğun ucuna, neredeyse görünmeyen ince bir naylon ip veya küçük bir sap eklenir; cihaz bu ipçik veya saptan hafifçe çekilerek kulaktan çıkarılır.",
      advantages: [
        "Cihazın kulak kanalında kalma riskini azaltır",
        "Tek elle kolay çıkarma imkânı sunar",
        "Günlük görünürlüğü neredeyse hiç etkilemez",
      ],
      models: ["Çıkarma İpi / Sapı Destekli Modeller"],
      expertNote: "İpçik veya sap tipi, kanal yapınıza göre teslim sırasında belirlenir.",
    },
    {
      id: "sinirli-baglanti",
      icon: "bluetooth",
      navLabel: "Bağlantı Desteği",
      title: "Sınırlı Bluetooth ve Kablosuz Bağlantı Desteği",
      lead: "Küçük gövde nedeniyle Bluetooth desteği her CIC/IIC modelde bulunmayabilir.",
      howItWorks: "Bağlantı desteği olan modellerde, sınırlı boyuttaki anten ve pil kapasitesi düşük güçlü bir Bluetooth bağlantısına izin verir.",
      advantages: [
        "Bazı modellerde telefon görüşmesi desteği",
        "Bulunduğunda uygulama üzerinden temel ayar imkânı",
        "Bağlantı özelliği olmayan modellere göre pil ömründen ödün vermeden bir seçenek sunabilir",
      ],
      models: ["Bluetooth Destekli CIC Modelleri (Sınırlı Sayıda)"],
      expertNote: "Bluetooth desteği aradığınızda, kulak arkası (BTE) veya standart kulak içi (ITE) modeller genellikle daha geniş seçenek sunar.",
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
  accentColorNavActiveBg: "rgb(71 85 105 / 0.1)",
  accentColorCalloutBg: "rgb(71 85 105 / 0.06)",
  accentColorCalloutLabel: "#334155",
};
