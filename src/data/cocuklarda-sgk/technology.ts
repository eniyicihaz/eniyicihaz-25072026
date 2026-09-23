// "Çocuklarda SGK Sisteminin Bileşenleri" deep-dive hub for the
// /sgk/cocuklarda-sgk page. Renders through the shared
// BrandPageEcosystem component (nav + <details>/<summary> panels), same
// as every prior series. icon values are limited to the component's
// fixed set (brain/dna/globe/radar/bluetooth/smartphone/radio/layers)
// — "brain" for early neurological/language development; "layers" for
// the age-group classification structure; "globe" for the nationwide
// SGK system's child category; "smartphone" for tracking via e-Devlet.

import type { BrandPageEcosystemContent } from "../../components/brand-page/BrandPageEcosystem/BrandPageEcosystem.astro";

export const cocuklardaSgkTechnology: BrandPageEcosystemContent = {
  badge: "TEKNOLOJİLER",
  heading: "Çocuklarda SGK Sisteminin Bileşenleri",
  intro: "Her bileşeni seçerek nasıl çalıştığını inceleyebilirsiniz. Bu bölüm, çocuklara yönelik SGK sisteminin nasıl işlediğini anlatır.",
  items: [
    {
      id: "erken-mudahalenin-onemi",
      icon: "brain",
      navLabel: "Erken Müdahalenin Önemi",
      title: "Erken Müdahalenin Dil Gelişimindeki Rolü",
      lead: "İşitme kaybının erken tespit edilip müdahale edilmesi, çocuğun dil ve konuşma gelişimi açısından belirleyicidir.",
      howItWorks: "Beyindeki işitsel yolların gelişimi büyük ölçüde erken çocukluk döneminde şekillendiğinden, zamanında yapılan müdahale bu gelişimi destekler.",
      advantages: [
        "Dil ve konuşma gelişimini destekler",
        "Sosyal ve akademik gelişime katkı sağlar",
        "İleride ortaya çıkabilecek ek zorlukların önüne geçmeye yardımcı olur",
      ],
      models: ["Erken Müdahale"],
      expertNote: "Şüpheli bir tarama sonucu varsa, vakit kaybetmeden değerlendirme yaptırmanızı öneririz.",
    },
    {
      id: "yas-grubu-kategorileri",
      icon: "layers",
      navLabel: "Yaş Grubu Kategorileri",
      title: "SGK'nın Çocuk Yaş Grubu Kategorileri",
      lead: "SGK, çocukları kendi içinde farklı yaş gruplarına ayırarak değerlendirir.",
      howItWorks: "Çocuğun doğum tarihi esas alınarak, hangi yaş grubu kategorisine girdiği belirlenir; bu kategori destek sürecini etkiler.",
      advantages: [
        "Yaşa uygun bir değerlendirme çerçevesi sunar",
        "Kategorinizi önceden tahmin etmenizi sağlar",
        "Yaş grubu geçişlerinde neyin değişebileceğini bilmenizi sağlar",
      ],
      models: ["Yaş Grubu Kategorileri"],
      expertNote: "Güncel yaş aralıkları için SGK rehberimizi inceleyebilirsiniz.",
    },
    {
      id: "sgk-cocuk-kategorisi",
      icon: "globe",
      navLabel: "SGK Çocuk Kategorisi",
      title: "SGK'nın Ülke Genelindeki Çocuk Kategorisi",
      lead: "SGK, çocuklara yönelik desteği ülke genelinde standart bir kategori olarak uygular.",
      howItWorks: "Çocuğun sigortalılık bilgisi (genellikle ebeveyn üzerinden) SGK sistemine kayıtlıdır; anlaşmalı bir merkezden alım yapıldığında destek bu sistem üzerinden uygulanır.",
      advantages: [
        "Ülke genelinde standart bir uygulama sağlar",
        "Anlaşmalı merkezler arasında tutarlı bir süreç sunar",
        "Aileler için öngörülebilir bir çerçeve oluşturur",
      ],
      models: ["SGK Çocuk Kategorisi"],
      expertNote: "Sistem, SGK mevzuatındaki güncellemelere göre periyodik olarak güncellenir.",
    },
    {
      id: "aile-takip-sistemi",
      icon: "smartphone",
      navLabel: "Aile Takip Sistemi",
      title: "e-Devlet Üzerinden Süreç Takibi",
      lead: "Veli veya vasi, çocuğun rapor ve başvuru durumunu e-Devlet uygulaması üzerinden takip edebilir.",
      howItWorks: "e-Devlet uygulamasına giriş yapan veli veya vasi, çocuğa ait rapor ve reçete durumunu görüntüleyebilir.",
      advantages: [
        "Süreci uzaktan takip etme imkânı sunar",
        "Belgeleri fiziksel olarak taşıma ihtiyacını azaltır",
        "Süreç şeffaflığını artırır",
      ],
      models: ["e-Devlet Sorgulama"],
      expertNote: "e-Devlet şifreniz yoksa, PTT şubelerinden temin edebilirsiniz.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorNavActiveBg: "rgb(219 39 119 / 0.1)",
  accentColorCalloutBg: "rgb(219 39 119 / 0.06)",
  accentColorCalloutLabel: "#be185d",
};
