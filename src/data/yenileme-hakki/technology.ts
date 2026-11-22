// "Yenileme Sisteminin Bileşenleri" deep-dive hub for the
// /sgk/yenileme-hakki page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "globe" for SGK's MEDULA record; "layers" for the standard-vs-early
// renewal category structure; "smartphone" for SGK's two e-Devlet
// material-query services; "radar" for tracking when the renewal period
// is approaching.
//
// e-Devlet rule: only the two service NAMES are stated (Medikal Malzeme
// Sorgulama; Kullanımı Bitmemiş Malzeme Bilgisi Sorgulama). What those
// services show for hearing aids is NOT known, so no panel here claims
// they show the renewal date or the MEDULA record date (the links live in
// the renewal-guide section).

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
      title: "SGK'nın MEDULA Kaydı",
      lead: "SGK kapsamında verilen işitme cihazı MEDULA sistemine kaydedilir.",
      howItWorks: "Önceki cihazınızın MEDULA'ya kaydedildiği tarih, 5 yıllık yenileme süresinin başlangıcıdır; sağ ve sol kulak kayıtları ayrı değerlendirilir.",
      advantages: [
        "Manuel takip ihtiyacını azaltır",
        "Ülke genelinde standart bir uygulama sağlar",
        "Anlaşmalı merkezler arasında tutarlı bir süreç sunar",
      ],
      models: ["SGK Yenileme Sistemi"],
      expertNote: "Kayıt tarihine dayalı süre hesabı, merkezimizin MEDULA uygulamasındaki işlem bilgisidir; mevzuat metni olarak sunulmamaktadır.",
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
      title: "e-Devlet'te SGK Malzeme Sorgulama Hizmetleri",
      lead: "SGK, e-Devlet üzerinden Medikal Malzeme Sorgulama ve Kullanımı Bitmemiş Malzeme Bilgisi Sorgulama hizmetlerini sunar.",
      howItWorks: "Bu hizmetlerin işitme cihazı için hangi ayrıntıları gösterdiğini garanti edemiyoruz; sorguda kayıt görünmemesi, yenileme hakkının doğduğu anlamına gelmez. Hizmet bağlantıları bu sayfadaki \"SGK İşitme Cihazı Kaç Yılda Bir Yenilenir?\" bölümündedir.",
      advantages: [
        "SGK'nın malzeme sorgulama hizmetlerini e-Devlet üzerinden kullanabilirsiniz",
        "Sonucu merkezimizle birlikte değerlendirebiliriz",
        "Süre, her durumda MEDULA kayıt tarihine göre hesaplanır",
      ],
      models: ["e-Devlet Sorgulama"],
      expertNote: "e-Devlet şifreniz yoksa, PTT şubelerinden temin edebilirsiniz.",
    },
    {
      id: "yenileme-zamani-takibi",
      icon: "radar",
      navLabel: "Yenileme Zamanı Takibi",
      title: "Yenileme Zamanınızın Yaklaştığını Takip Etme",
      lead: "5 yıllık sürenin ne zaman dolacağını önceden bilmek, süreci daha rahat planlamanızı sağlar.",
      howItWorks: "Kayıtlı kullanıcılarımız için cihazın MEDULA kayıt tarihine göre süreyi takip ederek, yenileme zamanı yaklaştığında bilgilendirme sağlıyoruz.",
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
