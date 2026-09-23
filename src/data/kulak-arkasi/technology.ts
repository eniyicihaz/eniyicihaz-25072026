// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/kulak-arkasi-bte
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels). Covers Bluetooth and şarjlı-pil topics in
// full, real, on-page detail — the in-page anchors this component
// generates (#eco-bluetooth, #eco-sarj) double as genuine internal links
// for those two topics until their own dedicated product pages exist.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kulakArkasiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "BTE Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz.",
  items: [
    {
      id: "bluetooth",
      icon: "bluetooth",
      navLabel: "Bluetooth Bağlantı",
      title: "Bluetooth ile Kablosuz Bağlantı",
      lead: "Telefon, televizyon ve tablet gibi cihazlarla doğrudan kablosuz bağlantı kurmayı sağlayan teknoloji.",
      howItWorks: "Cihaz; akıllı telefon, TV yayın cihazı veya diğer uyumlu aksesuarlarla eşleştirilir, ses doğrudan işitme cihazına aktarılır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazdan dinleme",
        "TV sesini kulaklık gibi doğrudan alma",
        "Uygulama üzerinden ses ayarı yapabilme",
      ],
      models: ["Bluetooth Özellikli BTE Modelleri"],
      expertNote: "Bluetooth özelliği, özellikle günlük telefon kullanımı yoğun olan kullanıcılar için önemli bir konfor sağlar.",
    },
    {
      id: "sarj",
      icon: "layers",
      navLabel: "Şarj Edilebilir Pil",
      title: "Şarj Edilebilir Pil Teknolojisi",
      lead: "Tek dokunuşla dolan, gün boyu kullanım sunan lityum-iyon pil sistemleri.",
      howItWorks: "Cihaz gece boyunca şarj kutusuna yerleştirilir; sabah tam şarjlı olarak kullanıma hazır hâle gelir.",
      advantages: [
        "Pil değiştirme zahmetini ortadan kaldırır",
        "Küçük çocuklar ve el becerisi sınırlı kullanıcılar için pratiktir",
        "Genellikle tam şarjla bir günlük kullanım sağlar",
      ],
      models: ["Şarjlı BTE / RIC Modelleri"],
      expertNote: "Şarjlı modeller, günlük pil değişimini unutmak istemeyen kullanıcılar arasında hızla yaygınlaşıyor.",
    },
    {
      id: "geri-besleme",
      icon: "radar",
      navLabel: "Geri Besleme Önleme",
      title: "Geri Besleme (Islık) Önleme",
      lead: "Cihazdan kaynaklanan rahatsız edici ıslık seslerini otomatik olarak tespit edip bastıran teknoloji.",
      howItWorks: "Cihaz, mikrofonuna geri dönen sesi sürekli analiz ederek ıslık oluşmadan önce sinyali düzenler.",
      advantages: [
        "Rahatsız edici ıslık seslerini azaltır",
        "Gözlük veya şapka gibi aksesuarlarla kullanımda konforu artırır",
        "Telefonu kulağa yaklaştırırken oluşabilecek ıslığı azaltır",
      ],
      models: ["Güncel BTE / RIC Modelleri"],
      expertNote: "Geri besleme önleme, günümüz BTE cihazlarının neredeyse tamamında standart olarak sunulan bir özelliktir.",
    },
    {
      id: "gurultu",
      icon: "brain",
      navLabel: "Gürültü Azaltma",
      title: "Gürültü Azaltma ve Yönlü Mikrofon Sistemi",
      lead: "Ortam gürültüsünü azaltıp konuşma sesini öne çıkarmayı hedefleyen çoklu mikrofon teknolojisi.",
      howItWorks: "Cihazdaki birden fazla mikrofon, sesin geldiği yönü analiz ederek konuşmayı ön plana çıkarır ve arka plan gürültüsünü azaltmaya çalışır.",
      advantages: [
        "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştırır",
        "Sürekli arka plan gürültüsünü (trafik, vantilatör vb.) azaltmaya yardımcı olur",
        "Otomatik veya manuel ortam programlarıyla desteklenebilir",
      ],
      models: ["Gelişmiş Sinyal İşlemcili BTE Modelleri"],
      expertNote: "Gürültü azaltma performansı modelden modele farklılık gösterir; ihtiyacınıza uygun teknoloji seviyesi uzman değerlendirmesiyle belirlenmelidir.",
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
