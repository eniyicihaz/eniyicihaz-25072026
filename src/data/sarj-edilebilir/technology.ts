// "Teknolojiler" deep-dive hub for the /isitme-cihazlari/sarj-edilebilir
// page. Renders through the shared BrandPageEcosystem component (nav +
// <details>/<summary> panels), same as BTE/ITE. icon values are limited
// to the component's fixed set (brain/dna/globe/radar/bluetooth/
// smartphone/radio/layers) — "layers" doubles for şarj-related items
// (same mapping BTE/ITE use for their own şarj items), "globe" stands in
// for travel/portability, "smartphone" for app control.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const sarjEdilebilirTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Şarj Edilebilir Cihazlarda Öne Çıkan Teknolojiler",
  intro: "Her bileşeni seçerek nasıl çalıştığını ve size sağladığı avantajları inceleyebilirsiniz. Teknolojik kapsam üreticiye ve seçilen modele göre değişebilir.",
  items: [
    {
      id: "bluetooth",
      icon: "bluetooth",
      navLabel: "Bluetooth Bağlantı",
      title: "Bluetooth ile Kablosuz Bağlantı",
      lead: "Şarjlı modellerin çoğu, telefon ve TV gibi cihazlarla doğrudan kablosuz bağlantıyı da destekler.",
      howItWorks: "Cihaz; akıllı telefon, TV yayın cihazı veya diğer uyumlu aksesuarlarla eşleştirilir, ses doğrudan işitme cihazına aktarılır.",
      advantages: [
        "Telefon görüşmelerini doğrudan cihazdan dinleme",
        "TV sesini kulaklık gibi doğrudan alma",
        "Uygulama üzerinden ses ayarı yapabilme",
      ],
      models: ["Bluetooth Özellikli Şarjlı Modeller"],
      expertNote: "Bluetooth desteği modelden modele değişebilir; ihtiyacınıza uygun model uzman değerlendirmesiyle belirlenir.",
    },
    {
      id: "hizli-sarj",
      icon: "layers",
      navLabel: "Hızlı Şarj",
      title: "Hızlı Şarj Teknolojisi",
      lead: "Bazı şarjlı modeller, kısa süreli şarjla bile birkaç saatlik kullanım sağlayabilir.",
      howItWorks: "Cihaz şarj kutusuna yerleştirildikten sonraki ilk dakikalarda hızlı bir ön şarj alır; tam kapasite için gece boyu şarj yine de önerilir.",
      advantages: [
        "Unutulan günlerde pratik bir yedek sağlar",
        "Kısa molalarda bile ek kullanım süresi kazandırır",
        "Acil durumlarda hızlı bir çözüm sunar",
      ],
      models: ["Hızlı Şarj Destekli Modeller"],
      expertNote: "Hızlı şarjla kazanılan kullanım süresi modelden modele değişir; tam kapasite için düzenli gece şarjı önerilir.",
    },
    {
      id: "powerbank",
      icon: "globe",
      navLabel: "Taşınabilir Şarj Kutusu",
      title: "Powerbank Özellikli Taşınabilir Şarj Kutusu",
      lead: "Bazı üreticiler, dahili bataryasıyla prizsiz ortamlarda da şarj sağlayan taşınabilir kutular sunar.",
      howItWorks: "Şarj kutusunun kendisi önceden şarj edilir; kutu içindeki batarya, prize ihtiyaç duymadan cihazı birden fazla kez şarj edebilir.",
      advantages: [
        "Seyahat ve prizsiz ortamlarda kullanım kolaylığı",
        "Elektrik kesintilerinde yedek çözüm",
        "Günler boyu prize ihtiyaç duymadan kullanım",
      ],
      models: ["Powerbank Özellikli Şarj Kutuları"],
      expertNote: "Powerbank özelliği her marka ve modelde bulunmayabilir; seyahat sıklığınıza göre değerlendirilmesi faydalı olur.",
    },
    {
      id: "uygulama",
      icon: "smartphone",
      navLabel: "Uygulama ile Pil Takibi",
      title: "Akıllı Telefon Uygulamasıyla Pil Takibi",
      lead: "Üreticiye özel mobil uygulamalar üzerinden pil durumunu ve şarj seviyesini takip etme imkânı.",
      howItWorks: "Cihaz, üreticinin mobil uygulamasıyla eşleştirilir; pil yüzdesi ve tahmini kalan kullanım süresi uygulama üzerinden görüntülenebilir.",
      advantages: [
        "Pilin ne zaman biteceğini önceden görebilme",
        "Şarj alışkanlığını takip edebilme",
        "Bazı uygulamalarda düşük pil uyarısı",
      ],
      models: ["Uygulama Destekli Şarjlı Modeller"],
      expertNote: "Uygulama özellikleri ve arayüzü üreticiye göre değişir; teslim sırasında size uygun uygulama gösterilir.",
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
