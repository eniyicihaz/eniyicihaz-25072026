// "Teknolojiler" deep-dive hub for the /rehberler/ilk-kullanim-rehberi
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "layers" for the physical
// button/control layout; "smartphone" is a direct, literal fit for the
// companion-app pairing; "brain" for how sound perception adapts in
// the first days (consistent with its perception/adaptation mapping
// elsewhere); "bluetooth" is a direct, literal fit for the wireless
// pairing process itself.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const ilkKullanimRehberiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "İlk Kullanımda Karşılaşabileceğiniz Bileşenler",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Kapsam, cihaz markasına ve modeline göre değişebilir.",
  items: [
    {
      id: "temel-kontroller",
      icon: "layers",
      navLabel: "Temel Kontroller",
      title: "Fiziksel Düğme ve Kontroller",
      lead: "Çoğu cihazda ses seviyesi veya program değişimi için küçük bir düğme ya da dokunmatik alan bulunur.",
      howItWorks: "Düğmeye kısa veya uzun basma gibi basit hareketlerle ses seviyesi değiştirilebilir veya programlar arasında geçiş yapılabilir.",
      advantages: [
        "Telefon olmadan da hızlı ayar yapmanızı sağlar",
        "Basit ve öğrenmesi kolay bir kontrol yöntemidir",
        "Günlük kullanımda hızlı erişim sunar",
      ],
      models: ["Fiziksel Kontrollü Modeller"],
      expertNote: "Düğme yerleşimi ve işlevi, marka ve modele göre değişir.",
    },
    {
      id: "uygulama-esleme",
      icon: "smartphone",
      navLabel: "Uygulama Eşleme",
      title: "Akıllı Telefon Uygulaması ile İlk Eşleme",
      lead: "Uygulama destekli modellerde, cihazınızı telefonunuza ilk kez bağlarken birkaç basit adım izlenir.",
      howItWorks: "Uygulama indirilir, cihaz eşleştirme moduna alınır ve telefonunuzun Bluetooth ayarları üzerinden bağlantı tamamlanır.",
      advantages: [
        "Ses seviyesi ve programları telefonunuzdan yönetmenizi sağlar",
        "Bazı modellerde ek özelliklere erişim sunar",
        "Kurulumu genellikle birkaç dakika sürer",
      ],
      models: ["Uygulama Destekli Modeller"],
      expertNote: "Uygulama ismi ve arayüzü, cihaz markasına göre değişir.",
    },
    {
      id: "ilk-gun-ses-algisi",
      icon: "brain",
      navLabel: "İlk Gün Ses Algısı",
      title: "İlk Günlerde Ses Algısının Değişimi",
      lead: "Beyin, yeniden duymaya başladığı seslere alışmak için bir süreye ihtiyaç duyar.",
      howItWorks: "İlk günlerde bazı sesler (kendi sesiniz, adım sesleri gibi) daha belirgin algılanabilir; zamanla bu algı daha doğal hale gelir.",
      advantages: [
        "Bu değişimin normal bir süreç olduğunu anlamanıza yardımcı olur",
        "Beklentilerinizi gerçekçi bir çerçevede tutmanıza katkı sağlar",
        "Uzun vadeli alışma sürecine hazırlıklı olmanızı destekler",
      ],
      models: ["Alışma Süreci"],
      expertNote: "Detaylı bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
    },
    {
      id: "bluetooth-baglanti-kurulumu",
      icon: "bluetooth",
      navLabel: "Bluetooth Bağlantı Kurulumu",
      title: "Bluetooth Bağlantı Kurulumu",
      lead: "Bluetooth destekli modeller, telefon görüşmesi veya müzik akışı gibi özellikler için telefonunuza kablosuz bağlanır.",
      howItWorks: "Cihazınız, telefonunuzun Bluetooth ayarlarında görünür hale getirilir ve eşleştirme onaylanarak bağlantı tamamlanır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazınızdan dinlemenizi sağlar",
        "Müzik ve medya seslerini akış olarak almanızı sağlar",
        "Kurulum genellikle bir kez yapılır",
      ],
      models: ["Bluetooth Destekli Modeller"],
      expertNote: "Bluetooth uyumluluğu, telefonunuzun işletim sistemine göre değişebilir.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorNavActiveBg: "rgb(5 150 105 / 0.1)",
  accentColorCalloutBg: "rgb(5 150 105 / 0.06)",
  accentColorCalloutLabel: "#047857",
};
