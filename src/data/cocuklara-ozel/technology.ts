// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/cocuklara-ozel
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as BTE/ITE/Şarj Edilebilir/Bluetooth.
// icon values are limited to the component's fixed set (brain/dna/globe/
// radar/bluetooth/smartphone/radio/layers) — "layers" doubles for the
// battery-lock mechanism (same reuse pattern the Şarj Edilebilir page
// applies to its own şarj-related items), "radar" stands in for the
// Roger/FM remote-microphone classroom system, "smartphone" for the
// parent-tracking app, "bluetooth" for wireless connectivity with tablets
// and learning materials.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cocuklaraOzelTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Çocuklara Özel Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "kilitli-pil-kapagi",
      icon: "layers",
      navLabel: "Kilitli Pil Kapağı",
      title: "Yutma Riskine Karşı Kilitli Pil Kapağı Tasarımı",
      lead: "Küçük pillerin kazara yutulmasını önlemeye yardımcı olan, çocuğa özel bir güvenlik mekanizması.",
      howItWorks: "Pil kapağı, özel bir alet veya belirli bir kombinasyonla açılabilecek şekilde tasarlanır; çocuğun kendi başına pili çıkarması zorlaştırılır.",
      advantages: [
        "Küçük pillerin kazara yutulma riskini azaltır",
        "Ebeveynlere ek bir güvenlik katmanı sunar",
        "Günlük kullanımda ekstra bir adım gerektirmez",
      ],
      models: ["Kilitli Pil Kapaklı Çocuk Modelleri"],
      expertNote: "Kilitli pil kapağı riski azaltır; yine de pilin çocuğun erişemeyeceği bir yerde saklanması önerilir.",
    },
    {
      id: "roger-fm",
      icon: "radar",
      navLabel: "Roger / FM Sistemi",
      title: "Roger ve FM Sistemleriyle Sınıf Uyumu",
      lead: "Öğretmenin taktığı verici mikrofon, sesi doğrudan çocuğun cihazına kablosuz olarak aktarır.",
      howItWorks: "Öğretmen, boynuna veya yakasına küçük bir verici mikrofon takar; ses, sınıf gürültüsünden etkilenmeden doğrudan çocuğun cihazına iletilir.",
      advantages: [
        "Sınıf gürültüsünün etkisini azaltır",
        "Öğretmeni mesafeden bağımsız net duyma imkânı sunar",
        "Ders dışı etkinliklerde de kullanılabilir",
      ],
      models: ["Roger / FM Uyumlu Modeller"],
      expertNote: "Roger/FM sistemi genellikle ayrıca temin edilir; okulla koordinasyon süreci uzman ekibimiz tarafından desteklenir.",
    },
    {
      id: "ebeveyn-uygulamasi",
      icon: "smartphone",
      navLabel: "Ebeveyn Uygulaması",
      title: "Ebeveyn Takip ve Uzaktan Ayar Uygulaması",
      lead: "Üreticiye özel mobil uygulamalar üzerinden çocuğun cihaz kullanımını takip etme imkânı.",
      howItWorks: "Cihaz, ebeveynin telefonundaki uygulamayla eşleştirilir; pil durumu, kullanım süresi ve bazı modellerde ses ayarları uygulama üzerinden görüntülenebilir.",
      advantages: [
        "Cihazın takılı olup olmadığını uzaktan görebilme",
        "Pil durumunu önceden takip edebilme",
        "Bazı uygulamalarda konum ve ses ayarı desteği",
      ],
      models: ["Ebeveyn Uygulaması Destekli Modeller"],
      expertNote: "Uygulama özellikleri üreticiye ve çocuğun yaşına göre değişir; teslim sırasında size uygun uygulama gösterilir.",
    },
    {
      id: "kablosuz-baglanti",
      icon: "bluetooth",
      navLabel: "Kablosuz Bağlantı",
      title: "Tablet ve Eğitim Materyalleriyle Kablosuz Bağlantı",
      lead: "Büyüyen çocuklarda, tablet ve eğitim uygulamalarının sesini doğrudan cihaza aktarma imkânı.",
      howItWorks: "Cihaz, tablet veya bilgisayarla Bluetooth üzerinden eşleştirilir; eğitim videoları ve uygulama sesleri doğrudan cihaza aktarılır.",
      advantages: [
        "Eğitim materyallerini daha net dinleme",
        "Ortam sesinden bağımsız, doğrudan aktarım",
        "Ergenlik döneminde telefon kullanımına da hazırlık sağlar",
      ],
      models: ["Bluetooth Özellikli Çocuk Modelleri"],
      expertNote: "Bluetooth desteği modelden modele ve çocuğun yaşına göre değişebilir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
  ],
  accentColor: "#e11d48",
  accentColorBadgeBg: "rgb(225 29 72 / 0.08)",
  accentColorBadgeBorder: "rgb(225 29 72 / 0.35)",
  accentColorBadgeText: "#be123c",
  accentColorNavActiveBg: "rgb(225 29 72 / 0.1)",
  accentColorCalloutBg: "rgb(225 29 72 / 0.06)",
  accentColorCalloutLabel: "#be123c",
};
