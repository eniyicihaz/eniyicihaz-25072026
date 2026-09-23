// "Yenileme Sisteminin Bileşenleri" deep-dive hub for the
// /sgk/yenileme-hakki page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "globe" for SGK's nationwide renewal-tracking system; "layers" for
// the standard-vs-early renewal category structure; "smartphone" for
// checking renewal eligibility via e-Devlet; "radar" for tracking when
// the renewal right is approaching.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const yenilemeHakkiTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Yenileme Sisteminin Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, yenileme sürecinin arkasındaki sistemin nasıl işlediğini anlatır.",
  items: [
    {
      id: "sgk-yenileme-sistemi",
      icon: "globe",
      navLabel: "SGK Yenileme Sistemi",
      title: "SGK'nın Ülke Genelindeki Yenileme Takip Sistemi",
      lead: "SGK, her kullanıcının cihaz alım tarihini sistem üzerinde kayıt altında tutar.",
      howItWorks: "Cihazınızın alım tarihi SGK sistemine işlidir; yenileme hakkınızın doğup doğmadığı bu kayıt üzerinden kontrol edilir.",
      advantages: [
        "Manuel takip ihtiyacını azaltır",
        "Ülke genelinde standart bir uygulama sağlar",
        "Anlaşmalı merkezler arasında tutarlı bir süreç sunar",
      ],
      models: ["SGK Yenileme Sistemi"],
      expertNote: "Sistem, SGK mevzuatındaki güncellemelere göre periyodik olarak güncellenir.",
    },
    {
      id: "standart-erken-yenileme",
      icon: "layers",
      navLabel: "Standart / Erken Yenileme",
      title: "Standart ve Erken Yenileme Kategorileri",
      lead: "Yenileme talepleri, standart süre dolumuna bağlı veya gerekçeye dayalı erken yenileme olmak üzere iki kategoride değerlendirilir.",
      howItWorks: "Standart yenilemede süre dolumu esas alınırken, erken yenilemede güncel rapor ve gerekçe SGK tarafından ayrıca değerlendirilir.",
      advantages: [
        "Hangi kategoriye girdiğinizi netleştirir",
        "Erken yenileme için nelere ihtiyaç duyacağınızı önceden bilmenizi sağlar",
        "Süreç beklentilerinizi netleştirir",
      ],
      models: ["Yenileme Kategorileri"],
      expertNote: "Durumunuzun hangi kategoriye girdiğini randevunuzda birlikte değerlendirebiliriz.",
    },
    {
      id: "dijital-sorgulama",
      icon: "smartphone",
      navLabel: "Dijital Sorgulama",
      title: "e-Devlet Üzerinden Yenileme Uygunluğu Sorgulama",
      lead: "Cihazınızın alım tarihi ve yenileme uygunluğuna ilişkin bilgileri e-Devlet uygulaması üzerinden sorgulayabilirsiniz.",
      howItWorks: "e-Devlet uygulamasına giriş yaparak, SGK sistemindeki cihaz kayıtlarınızı ve ilgili tarihleri görüntüleyebilirsiniz.",
      advantages: [
        "Yenileme zamanınızı kendiniz de takip edebilirsiniz",
        "Belgelerinizi dijital olarak görüntüleyebilirsiniz",
        "Süreç şeffaflığını artırır",
      ],
      models: ["e-Devlet Sorgulama"],
      expertNote: "e-Devlet şifreniz yoksa, PTT şubelerinden temin edebilirsiniz.",
    },
    {
      id: "yenileme-zamani-takibi",
      icon: "radar",
      navLabel: "Yenileme Zamanı Takibi",
      title: "Yenileme Zamanınızın Yaklaştığını Takip Etme",
      lead: "Yenileme hakkınızın ne zaman doğacağını önceden bilmek, süreci daha rahat planlamanızı sağlar.",
      howItWorks: "Kayıtlı kullanıcılarımız için cihaz alım tarihini takip ederek, yenileme zamanı yaklaştığında bilgilendirme sağlıyoruz.",
      advantages: [
        "Yenileme zamanınızı kaçırmazsınız",
        "Süreci önceden planlayabilirsiniz",
        "Bütçenizi zamanında hazırlayabilirsiniz",
      ],
      models: ["Yenileme Zamanı Takibi"],
      expertNote: "Cihazınızın yenileme zamanını öğrenmek için bizimle iletişime geçebilirsiniz.",
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
