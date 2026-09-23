// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/kulak-ici-ite
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as the BTE master page. Covers
// Bluetooth, şarj, gürültü yönetimi + konuşma odaklama, and uygulama ile
// kontrol — the technology topics the brief calls out for ITE.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const kulakIciTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "ITE Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen alt tipe göre değişebilir.",
  items: [
    {
      id: "bluetooth",
      icon: "bluetooth",
      navLabel: "Bluetooth Bağlantı",
      title: "Bluetooth ile Kablosuz Bağlantı",
      lead: "Küçük gövdesine rağmen günümüz kulak içi modellerinin çoğu, telefon ve TV gibi cihazlarla doğrudan kablosuz bağlantı kurabilir.",
      howItWorks: "Cihaz; akıllı telefon, TV yayın cihazı veya diğer uyumlu aksesuarlarla eşleştirilir, ses doğrudan işitme cihazına aktarılır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazdan dinleme",
        "TV sesini kulaklık gibi doğrudan alma",
        "Uygulama üzerinden ses ayarı yapabilme",
      ],
      models: ["Bluetooth Özellikli ITE / ITC Modelleri"],
      expertNote: "En küçük alt tiplerde (IIC gibi) anten alanı sınırlı olduğundan Bluetooth desteği modelden modele değişebilir.",
    },
    {
      id: "sarj",
      icon: "layers",
      navLabel: "Şarj Edilebilir Pil",
      title: "Şarj Edilebilir Pil Teknolojisi",
      lead: "Bazı kulak içi modellerinde de tek dokunuşla dolan, gün boyu kullanım sunan şarjlı pil sistemleri bulunur.",
      howItWorks: "Cihaz gece boyunca şarj kutusuna yerleştirilir; sabah tam şarjlı olarak kullanıma hazır hâle gelir.",
      advantages: [
        "Küçük pilleri elleriyle değiştirmekte zorlanan kullanıcılar için pratiktir",
        "Pil değiştirme zahmetini ortadan kaldırır",
        "Genellikle tam şarjla bir günlük kullanım sağlar",
      ],
      models: ["Şarjlı ITE / ITC Modelleri"],
      expertNote: "Kulak içi cihazların küçük gövdesi nedeniyle şarjlı seçenekler her marka ve her alt tipte bulunmayabilir.",
    },
    {
      id: "gurultu",
      icon: "brain",
      navLabel: "Gürültü Yönetimi ve Konuşma Odaklama",
      title: "Gürültü Azaltma ve Konuşmaya Odaklanma",
      lead: "Ortam gürültüsünü azaltıp konuşma sesini öne çıkarmayı hedefleyen sinyal işleme teknolojileri.",
      howItWorks: "Cihazdaki mikrofon(lar), sesin geldiği yönü ve niteliğini analiz ederek konuşmayı ön plana çıkarır ve sabit arka plan gürültüsünü azaltmaya çalışır.",
      advantages: [
        "Kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştırır",
        "Sürekli arka plan gürültüsünü (trafik, vantilatör vb.) azaltmaya yardımcı olur",
        "Bazı modellerde otomatik ortam algılama ile desteklenir",
      ],
      models: ["Gelişmiş Sinyal İşlemcili ITE Modelleri"],
      expertNote: "Gürültü yönetimi ve konuşma odaklama performansı modelden modele farklılık gösterir; ihtiyacınıza uygun teknoloji seviyesi uzman değerlendirmesiyle belirlenmelidir.",
    },
    {
      id: "uygulama",
      icon: "smartphone",
      navLabel: "Uygulama ile Kontrol",
      title: "Akıllı Telefon Uygulamasıyla Kontrol",
      lead: "Üreticiye özel mobil uygulamalar üzerinden ses seviyesi ve program ayarlarını yönetme imkânı.",
      howItWorks: "Cihaz, üreticinin mobil uygulamasıyla eşleştirilir; ses seviyesi, program seçimi ve bazı modellerde ortam ayarları uygulama üzerinden yönetilebilir.",
      advantages: [
        "Cihaza dokunmadan sessizce ayar yapabilme",
        "Farklı ortamlar için kayıtlı programlar arasında geçiş",
        "Bazı uygulamalarda pil durumu takibi",
      ],
      models: ["Uygulama Destekli ITE / ITC Modelleri"],
      expertNote: "Uygulama özellikleri ve arayüzü üreticiye göre değişir; teslim sırasında size uygun uygulama gösterilir.",
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
