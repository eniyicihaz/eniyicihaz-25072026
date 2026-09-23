// "Teknolojiler" deep-dive hub for the /uygulama-ayar/cihaz-uygulama
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as every prior series. icon values
// are limited to the component's fixed set (brain/dna/globe/radar/
// bluetooth/smartphone/radio/layers) — "brain" for the audiogram-based
// programming algorithm; "radar" for the real-ear verification
// measurement (consistent with its detection/scanning mapping across
// the site); "radio" for the feedback (whistle) test's sound-based
// nature; "smartphone" for the companion-app orientation given during
// the appointment.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cihazUygulamaTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Cihaz Uygulamada Kullanılan Yöntemler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Kapsam, cihaz markasına ve modeline göre değişebilir.",
  items: [
    {
      id: "odyograma-dayali-programlama",
      icon: "brain",
      navLabel: "Odyograma Dayalı Programlama",
      title: "Odyograma Dayalı İlk Programlama",
      lead: "Cihazınız, işitme test sonuçlarınıza göre belirlenen bir fitting formülüyle ilk kez programlanır.",
      howItWorks: "Odyogramınız, üreticinin fitting yazılımına aktarılır ve yazılım, işitme kaybınızın derecesine uygun bir başlangıç ayarı önerir.",
      advantages: [
        "Fabrika ayarı yerine size özel bir başlangıç noktası sunar",
        "İşitme kaybınızın derecesine ve türüne uygun bir temel oluşturur",
        "Takip ayarlarına sağlam bir başlangıç sağlar",
      ],
      models: ["Odyograma Dayalı Programlama"],
      expertNote: "Fitting formülü ve yazılım, kullanılan cihaz markasına göre değişir.",
    },
    {
      id: "gercek-kulak-olcumu",
      icon: "radar",
      navLabel: "Gerçek Kulak Ölçümü",
      title: "Gerçek Kulak Ölçümü (REM)",
      lead: "Gerçek kulak ölçümü, cihazın kulağınızda ürettiği sesin hedeflenen seviyeleri gerçekten karşılayıp karşılamadığını objektif olarak doğrular.",
      howItWorks: "Kulak kanalınıza yerleştirilen ince bir mikrofonla, cihazınızdan çıkan sesin kulak kanalınızdaki gerçek seviyesi ölçülür ve hedef eğriyle karşılaştırılır.",
      advantages: [
        "Ayarların tahmine değil, ölçüme dayanmasını sağlar",
        "Kulak kanalı şeklinizin ayarlar üzerindeki etkisini hesaba katar",
        "Uygulama kalitesini objektif olarak belgeler",
      ],
      models: ["Gerçek Kulak Ölçümü Doğrulaması"],
      expertNote: "Bu ölçüm her randevuda standart olarak uygulanmayabilir; ihtiyaca göre değerlendirilir.",
    },
    {
      id: "geri-bildirim-testi",
      icon: "radio",
      navLabel: "Geri Bildirim Testi",
      title: "Geri Bildirim (Islık Sesi) Testi",
      lead: "Geri bildirim testi, cihazınızın ıslık benzeri bir ses üretip üretmediğini kontrol eden bir ölçümdür.",
      howItWorks: "Cihaz, farklı ses seviyelerinde test edilir; herhangi bir ıslık sesi tespit edilirse, yerleştirme veya ayar üzerinde gerekli düzeltme yapılır.",
      advantages: [
        "Günlük kullanımda rahatsız edici sesleri önlemeye yardımcı olur",
        "Yerleştirme sorunlarının erken tespitine katkı sağlar",
        "Cihazın konforlu kullanımını destekler",
      ],
      models: ["Geri Bildirim Testi"],
      expertNote: "Islık sesi fark ederseniz randevu sonrasında da bize bildirebilirsiniz.",
    },
    {
      id: "uygulama-yonelimi",
      icon: "smartphone",
      navLabel: "Uygulama Yönelimi",
      title: "Akıllı Telefon Uygulaması Yönelimi",
      lead: "Bazı modellerde, cihazınızı akıllı telefon uygulaması üzerinden yönetmeyi randevu sırasında birlikte deneriz.",
      howItWorks: "Cihaz, uygulamaya Bluetooth üzerinden bağlanır; ses seviyesi ayarı, program değişimi gibi temel işlevler size gösterilir.",
      advantages: [
        "Cihazınızı günlük hayatta kolayca yönetmenizi sağlar",
        "Farklı ortamlar için program tercihlerinizi kaydetmenize imkân tanır",
        "Uygulamayı randevu sırasında güvenle deneme fırsatı sunar",
      ],
      models: ["Uygulama Kontrollü Modeller"],
      expertNote: "Uygulama desteği, seçilen cihaz markası ve modeline göre değişir.",
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
