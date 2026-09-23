// "Teknolojiler" deep-dive hub for the /uygulama-ayar/
// kisiye-ozel-programlama page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers) —
// "brain" for the data-logging analysis (an intelligence/analysis
// mapping); "layers" for the multiple stacked environment programs;
// "radar" for the directional-microphone fine-tuning (consistent with
// its detection/scanning mapping across the site); "smartphone" for the
// remote fine-tuning app.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kisiyeOzelProgramlamaTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Kişiye Özel Programlamada Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz markasına ve modeline göre değişebilir.",
  items: [
    {
      id: "veri-kaydi-analizi",
      icon: "brain",
      navLabel: "Veri Kaydı Analizi",
      title: "Kullanım Verisi (Data Logging) Analizi",
      lead: "Bazı modeller, hangi ortamlarda ne kadar süre kullanıldığınızı ve hangi ses seviyelerini tercih ettiğinizi kaydedebilir.",
      howItWorks: "Cihaz, kullanım süresi ve ortam türü gibi verileri kaydeder; bu veriler, fitting yazılımı üzerinden takip randevusunda incelenir.",
      advantages: [
        "İnce ayar kararlarına objektif bir destek sağlar",
        "Geri bildiriminizle birlikte daha kapsamlı bir tablo oluşturur",
        "Hangi ortamlarda daha fazla destek gerektiğini gösterebilir",
      ],
      models: ["Veri Kaydı Destekli Modeller"],
      expertNote: "Veri kaydı kullanımı, önceden sizinle paylaşılan bir bilgilendirmeye dayanır.",
    },
    {
      id: "coklu-dinleme-programlari",
      icon: "layers",
      navLabel: "Çoklu Dinleme Programları",
      title: "Çoklu Dinleme Programları",
      lead: "Farklı ortamlar için birden fazla dinleme programı oluşturularak, cihazınızın her ortama göre farklı davranması sağlanabilir.",
      howItWorks: "Sessiz ortam, gürültülü ortam, müzik veya telefon gibi senaryolar için ayrı ayar profilleri tanımlanır; siz veya cihaz, ortama göre otomatik ya da manuel geçiş yapabilir.",
      advantages: [
        "Her ortam için ayrı optimize edilmiş bir deneyim sunar",
        "Tek bir genel ayarın sınırlarını aşmaya yardımcı olur",
        "İhtiyacınıza göre manuel veya otomatik geçiş imkânı sağlar",
      ],
      models: ["Çoklu Program Destekli Modeller"],
      expertNote: "Program sayısı ve geçiş yöntemi, cihaz markası ve modeline göre değişir.",
    },
    {
      id: "yonlu-mikrofon-ayari",
      icon: "radar",
      navLabel: "Yönlü Mikrofon Ayarı",
      title: "Yönlü Mikrofon İnce Ayarı",
      lead: "Yönlü mikrofon ayarı, cihazın hangi yöndeki seslere daha fazla odaklanacağını belirleyen bir ince ayar bileşenidir.",
      howItWorks: "Mikrofonların hassasiyeti, önden gelen konuşmaya odaklanacak veya çevresel sesleri daha dengeli alacak şekilde yapılandırılır.",
      advantages: [
        "Gürültülü ortamlarda konuşmayı takip etmeyi kolaylaştırabilir",
        "Kullanım tercihinize göre hassasiyet düzeyi ayarlanabilir",
        "Ortam programlarıyla birlikte kullanılarak daha bütünsel bir deneyim sunar",
      ],
      models: ["Yönlü Mikrofon Destekli Modeller"],
      expertNote: "Yönlü mikrofon hassasiyeti, cihaz kategorisine ve modeline göre değişir.",
    },
    {
      id: "uzaktan-ince-ayar",
      icon: "smartphone",
      navLabel: "Uzaktan İnce Ayar",
      title: "Uzaktan İnce Ayar (Telecare) Desteği",
      lead: "Bazı modellerde, kliniğe gelmeden akıllı telefon uygulaması üzerinden uzaktan ince ayar talep edilebilir.",
      howItWorks: "Uygulama üzerinden ilettiğiniz geri bildirim, odyometristiniz tarafından incelenir ve ayar güncellemesi cihazınıza uzaktan iletilir.",
      advantages: [
        "Küçük ayar ihtiyaçları için kliniğe gelmeyi gerektirmeyebilir",
        "Geri bildiriminizi anlık olarak iletme imkânı sunar",
        "Takip sürecini daha esnek hale getirir",
      ],
      models: ["Uzaktan Ayar Destekli Modeller"],
      expertNote: "Detaylı bilgi için Uzaktan Ayar sayfamızı inceleyebilirsiniz.",
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
  accentColorNavActiveBg: "rgb(124 58 237 / 0.1)",
  accentColorCalloutBg: "rgb(124 58 237 / 0.06)",
  accentColorCalloutLabel: "#6d28d9",
};
